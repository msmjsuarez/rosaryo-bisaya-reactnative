import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ActivityIndicator } from 'react-native';
import TrackPlayer, { useTrackPlayerEvents, Event, State } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setupPlayer, addTracks } from './trackPlayerServices';
import styles from '../styles';

const AudioPlayer = ({ audioFile }) => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [audioState, setAudioState] = useState('Stopped'); 

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
        if (isSetup && queue.length <= 0) {
          // Add the specified audio file
          await TrackPlayer.add([
            {
              id: '1',
              url: audioFile, // Use the passed audioFile prop
              title: 'Audio Track',
              artist: 'Artist',
              duration: 60,
            }
          ]);
        }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, [audioFile]);

  // Play the audio
  const playAudio = async () => {
    if (audioState === 'Stopped') {
      // If it's stopped, reset the track position to 0
      await TrackPlayer.seekTo(0);
      await TrackPlayer.play();
    }
    
    await TrackPlayer.play();
    setAudioState('Playing');
  };

  // Pause the audio
  const pauseAudio = async () => {
    await TrackPlayer.pause();
    setAudioState('Paused'); // Update audio state to 'Paused'
  };

  // Stop the audio
  const stopAudio = async () => {
    await TrackPlayer.reset();
    setAudioState('Stopped'); // Update audio state to 'Stopped'
  };

  // Skip forward by a specific number of seconds
  const skipForward = async (seconds) => {
    const currentPosition = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(currentPosition + seconds);
  };

  // Skip backward by a specific number of seconds
  const skipBackward = async (seconds) => {
    const currentPosition = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(currentPosition - seconds);
  };

  const playPauseButton = isPlaying ? (
    <Icon
      name="pause"
      size={30}
      color="#777"
      onPress={togglePlayPause}
      style={[styles.icon, { paddingRight: 35 }]}
    />
  ) : (
    <Icon
      name="play"
      size={30}
      color="#777"
      onPress={togglePlayPause}
      style={[styles.icon, { paddingRight: 35 }]}
    />
  );



  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#bbb" />
      </SafeAreaView>
    );
  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Icon
          name="backward"
          size={30}
          color="#777"
          onPress={() => skipBackward(10)}
          style={[styles.icon, { paddingRight: 35 }]}
        />
        {playPauseButton}
        <Icon
          name="stop"
          size={30}
          color="#777"
          onPress={stopAudio}
          style={[styles.icon, { paddingRight: 35 }]}
        />
        <Icon
          name="forward"
          size={30}
          color="#777"
          onPress={() => skipForward(10)}
          style={[styles.icon]}
        />
      </View>
    </SafeAreaView>





  );
};

export default AudioPlayer;
