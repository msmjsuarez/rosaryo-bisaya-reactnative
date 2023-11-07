import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event
} from 'react-native-track-player';

import kalipay from '../assets/kalipay.mp3';
import kasakit from '../assets/kasakit.mp3';
import kahayag from '../assets/kahayag.mp3';
import himaya from '../assets/himaya.mp3';

import FJ from '../assets/images/first-joyful.png';
import FS from '../assets/images/first-sorrowful.png';
import FL from '../assets/images/first-luminous.png';
import FG from '../assets/images/first-glorious.png';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  }
  catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  }
  finally {
    return isSetup;
  }
}

export async function addTracks() {

  const convertTimeToSeconds = (timeString) => {
    const [minutes, seconds] = timeString.split(':');
    return parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
  };

  await TrackPlayer.add([
    {
      id: '1',
      url: kalipay,
      title: 'Kalipay',
      artist: 'All Glory is to our Lord',
      days: 'Lunes ug Sabado',
      duration: convertTimeToSeconds('35:18'),
      artwork: (FJ)
    },
    {
      id: '2',
      url: kasakit,
      title: 'Kasakit',
      artist: 'All Glory is to our Lord',
      days: 'Martes ug Byernes',
      duration: convertTimeToSeconds('35:18'),
      artwork: (FS)
    },
    {
      id: '3',
      url: kahayag,
      title: 'Kahayag',
      artist: 'All Glory is to our Lord',
      days: 'Huybes',
      duration: convertTimeToSeconds('35:18'),
      artwork: (FL)
    },
    {
      id: '4',
      url: himaya,
      title: 'Himaya',
      artist: 'All Glory is to our Lord',
      days: 'Miyerkoles ug Domingo',
      duration: convertTimeToSeconds('35:18'),
      artwork: (FG)
    }
  ]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    console.log('Event.RemotePause');
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    console.log('Event.RemotePlay');
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    console.log('Event.RemoteNext');
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    console.log('Event.RemotePrevious');
    TrackPlayer.skipToPrevious();
  });
}