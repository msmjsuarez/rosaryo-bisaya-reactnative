import React from 'react';
import { View, Text, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './components/Menu';
import styles from './styles';


function App() {
  const authorLink = () => {
    Linking.openURL('https://mjlayasan.com');
  };
  const currentYear = new Date().getFullYear();
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Menu />
      </NavigationContainer>
      <View style={styles.mainBg}>
        <Text style={styles.footerText}>
        © {currentYear}{' '}App by <Text style={styles.footerTextLink} onPress={authorLink}>mjlayasan.com</Text>
        </Text>
      </View>
    </View>
  );
}

export default App;
