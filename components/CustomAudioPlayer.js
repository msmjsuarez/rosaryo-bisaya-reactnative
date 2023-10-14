import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

import playIcon from '../images/play.png';
import pauseIcon from '../images/pause.png';
import stopIcon from '../images/stop.png';

const CustomAudioPlayer = ({ onPlay, onPause, onStop, isPlaying }) => {
  return (
    <View>
      {/* Display the audio control buttons with images */}
      <TouchableOpacity onPress={onPlay}>
        <Image source={playIcon} style={styles.audioControlButton} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPause}>
        <Image source={pauseIcon} style={styles.audioControlButton} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onStop}>
        <Image source={stopIcon} style={styles.audioControlButton} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomAudioPlayer;