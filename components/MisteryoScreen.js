import React from 'react';
import { Button, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'; // Import ScrollView
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

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
    } else {
      navigation.navigate(screenName);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.largeTitleText}>Ang Mga Misteryo</Text>

      <TouchableOpacity
        style={styles.misteryoButton} onPress={() => handleNavigation('Kalipay')}>
        <Image
          source={require('../images/kalipay.png')}
          style={styles.image}
        />
        <Text style={styles.largeTitleText}>Kalipay</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.misteryoButton} onPress={() => handleNavigation('Kasakit')}>
        <Image
          source={require('../images/kasakit.png')}
          style={styles.image}
        />
        <Text style={styles.largeTitleText}>Kasakit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.misteryoButton} onPress={() => handleNavigation('Kahayag')}>
        <Image
          source={require('../images/kahayag.png')}
          style={styles.image}
        />
        <Text style={styles.largeTitleText}>Kahayag</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.misteryoButton} onPress={() => handleNavigation('Himaya')}>
        <Image
          source={require('../images/himaya.png')}
          style={styles.image}
        />
        <Text style={styles.largeTitleText}>Himaya</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MisteryoScreen;
