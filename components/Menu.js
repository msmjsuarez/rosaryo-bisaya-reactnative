import React from 'react';
import { ScrollView, Image, Button, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MisteryoScreen from './MisteryoScreen';
import KalipayScreen from './KalipayScreen';
import KasakitScreen from './KasakitScreen';
import KahayagScreen from './KahayagScreen';
import HimayaScreen from './HimayaScreen';
import RosaryAudio from './RosaryAudio';
import DownloadAudio from  './DownloadAudio';
import DownloadingModal from  './DownloadingModal';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';


const Stack = createNativeStackNavigator();

function Menu() {

  const navigation = useNavigation(); 

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: styles.mainBg.backgroundColor
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ 
                title: 'Giya sa Rosaryo',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Misteryo')} style={styles.headButtonContainer}>
                    <Text style={styles.headButtonText}>Ang Mga Misteryo</Text>
                </TouchableOpacity>
                ),
            }}
        />
        <Stack.Screen
            name="Misteryo"
            component={MisteryoScreen}
            options={{ 
                title: 'Misteryo',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.headButtonContainer}>
                        <Text style={styles.headButtonText}>Giya sa Rosaryo</Text>
                    </TouchableOpacity>
                ),
            }}
        />

        <Stack.Screen name="KalipayScreen" component={KalipayScreen} options={{title: 'Misteryo sa Kalipay'}} />
        <Stack.Screen name="KasakitScreen" component={KasakitScreen} options={{title: 'Misteryo sa Kasakit'}} />
        <Stack.Screen name="KahayagScreen" component={KahayagScreen} options={{title: 'Misteryo sa Kahayag'}} />
        <Stack.Screen name="HimayaScreen" component={HimayaScreen} options={{title: 'Misteryo sa Himaya'}} />
        <Stack.Screen name="RosaryAudio" component={RosaryAudio} options={{title: 'Rosaryo Audio'}} />
        <Stack.Screen name="DownloadAudio" component={DownloadAudio} options={{title: 'Download Audio'}} />
        <Stack.Screen name="DownloadingModal" component={DownloadingModal} options={{title: 'Downloading Modal'}} />

    </Stack.Navigator>
  );
}

export default Menu;