import React from 'react';
import { Button, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'; // Import ScrollView
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import kalipay from '../assets/images/kalipay.png';
import kasakit from '../assets/images/kasakit.png';
import kahayag from '../assets/images/kahayag.png';
import himaya from '../assets/images/himaya.png';
import RosaryAudioImg from '../assets/images/rosary_audio.png';

const MisteryoScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    if (screenName === 'Kalipay') {
      navigation.navigate('KalipayScreen');
    } else if (screenName === 'Kasakit') {
        navigation.navigate('KasakitScreen');
    } else if (screenName === 'Kahayag') {
        navigation.navigate('KahayagScreen');
    } else if (screenName === 'Himaya') {
        navigation.navigate('HimayaScreen');
    } else if (screenName === 'RosaryAudio') {
      navigation.navigate('RosaryAudio');
  } else if (screenName === 'DownloadAudio') {
    navigation.navigate('DownloadAudio');
} else {
      navigation.navigate(screenName);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.largeTitleText}>Ang Mga Misteryo</Text>

      <TouchableOpacity style={styles.misteryoButton} onPress={() => handleNavigation('DownloadAudio')}>
        <Image
          source={RosaryAudioImg}
          style={styles.image}
        />
        <Text style={styles.largeTitleText}>Download Audio</Text>
      </TouchableOpacity>



      <TouchableOpacity style={styles.misteryoButton} onPress={() => handleNavigation('RosaryAudio')}>
        <Image
          source={RosaryAudioImg}
          style={styles.image}
        />
        <Text style={styles.largeTitleText}>Rosaryo Audio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.misteryoButton} onPress={() => handleNavigation('Kalipay')}>
        <Image
          source={kalipay}
          style={styles.image}
        />
        <Text style={styles.largeTitleText}>Kalipay</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.misteryoButton} onPress={() => handleNavigation('Kasakit')}>
        <Image
          source={kasakit}
          style={styles.image}
        />
        <Text style={styles.largeTitleText}>Kasakit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.misteryoButton} onPress={() => handleNavigation('Kahayag')}>
        <Image
          source={kahayag}
          style={styles.image}
        />
        <Text style={styles.largeTitleText}>Kahayag</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.misteryoButton} onPress={() => handleNavigation('Himaya')}>
        <Image
          source={himaya}
          style={styles.image}
        />
        <Text style={styles.largeTitleText}>Himaya</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MisteryoScreen;
