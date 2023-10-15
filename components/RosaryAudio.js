import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
  } from 'react-native';
  import TrackPlayer, {
    useTrackPlayerEvents,
    usePlaybackState,
    useProgress,
    Event,
    State
  } from 'react-native-track-player';
  import Icon from 'react-native-vector-icons/FontAwesome';
import { setupPlayer, addTracks } from './trackPlayerServices';
import styles from '../styles';

function Playlist() {
    const [queue, setQueue] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(0);
  
    async function loadPlaylist() {
      const queue = await TrackPlayer.getQueue();
      setQueue(queue);
    }
  
    useEffect(() => {
      loadPlaylist();
    }, []);
  
    useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
      if(event.state == State.nextTrack) {
        TrackPlayer.getCurrentTrack().then((index) => setCurrentTrack(index));
      }
    });
  
    function PlaylistItem({index, title, isCurrent}) {
  
      function handleItemPress() {
        TrackPlayer.skip(index);
      }
  
      return (
        <TouchableOpacity onPress={handleItemPress}>
          <Text
            style={{...styles.playlistItem,
              ...{backgroundColor: isCurrent ? '#fffde8' : 'transparent'}}}>
          {title}
          </Text>
        </TouchableOpacity>
      );
    }
  
    return(
      <View>
        <View style={styles.playlist}>
          <FlatList
            data={queue}
            renderItem={({item, index}) => <PlaylistItem
                                              index={index}
                                              title={item.title}
                                              isCurrent={currentTrack == index }/>
            }
          />
        </View>
        <Controls/>
      </View>
    );
  }
  
  function Controls({ onShuffle }) {
    const playerState = usePlaybackState();
  
    async function handlePlayPress() {
      if(await TrackPlayer.getState() == State.Playing) {
        TrackPlayer.pause();
      }
      else {
        TrackPlayer.play();
      }
    }
  
    return(
      <View style={{flexDirection: 'row',
        flexWrap: 'wrap', alignItems: 'center'}}>
          <Icon.Button
            name="arrow-left"
            size={28}
            backgroundColor="transparent"
            color="#394a51"
            onPress={() => TrackPlayer.skipToPrevious()}/>
          <Icon.Button
            name={playerState == State.Playing ? 'pause' : 'play'}
            size={28}
            backgroundColor="transparent"
            color="#394a51"
            onPress={handlePlayPress}/>
          <Icon.Button
            name="arrow-right"
            size={28}
            backgroundColor="transparent"
            color="#394a51"
            onPress={() => TrackPlayer.skipToNext()}/>
      </View>
    );
}

function TrackProgress() {
    const { position, duration } = useProgress(200);
  
    function format(seconds) {
      let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
      let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`;
    }
  
    return(
      <View>
        <Text style={styles.trackProgress}>
          { format(position) } / { format(duration) }
        </Text>
      </View>
    );
  }

  function Header() {
    const [info, setInfo] = useState({});
    useEffect(() => {
      setTrackInfo();
    }, []);
  
    useTrackPlayerEvents([Event.PlaybackTrackChanged], (event) => {
      if(event.state == State.nextTrack) {
        setTrackInfo();
      }
    });
  
    async function setTrackInfo() {
      const track = await TrackPlayer.getCurrentTrack();
      const info = await TrackPlayer.getTrack(track);
      setInfo(info);
    }
  
    return(
      <View>
          <Text style={styles.songTitle}>{info.title}</Text>
          <Text style={styles.artistName}>{info.artist}</Text>
          <Text style={styles.days}>{info.days}</Text>
      </View>
    );
  }

function RosaryAudio() {

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if(isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  if(!isPlayerReady) {
    return (
      <SafeAreaView style={styles.playerContainer}>
        <ActivityIndicator size="large" color="#bbb"/>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.playerContainer}>
    <Header/>
    <TrackProgress/>
    <Playlist/>
  </SafeAreaView>
  );
}

export default RosaryAudio;