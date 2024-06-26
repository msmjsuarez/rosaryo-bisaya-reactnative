import React, { useEffect, useState } from 'react';
import { ScrollView, Image, TouchableOpacity, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import ImageViewer from 'react-native-image-pan-zoom';
import styles from '../styles';
import RosaryGuide from '../assets/images/RosaryGuide.jpg';

function HomeScreen({ navigation }) {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [calculatedHeight, setCalculatedHeight] = useState(0);

  // Replace with the actual dimensions of your image
  const imageWidth = 400; // Example image width
  const imageHeight = 600; // Example image height

  const calculateImageDimensions = () => {
    const newScreenWidth = Dimensions.get('window').width;
    const calculatedImageHeight = (newScreenWidth / imageWidth) * imageHeight;
    setScreenWidth(newScreenWidth);
    return calculatedImageHeight;
  };

  useEffect(() => {
    // Calculate the initial image dimensions
    const initialHeight = calculateImageDimensions();
    setCalculatedHeight(initialHeight);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer} // Apply styles to the content container
    >
      
      <View style={styles.container}>
     
        <Text style={styles.text}>Gamita ang duha ka tudlo para modako ang guide nga imahe.</Text>
        <TouchableWithoutFeedback>
        <ImageViewer
          style={{ width: screenWidth, height: calculatedHeight }}
          cropWidth={screenWidth}
          cropHeight={calculatedHeight}
          imageWidth={screenWidth}
          imageHeight={calculatedHeight}
          maxOverflow={0}
        >
          
          <Image
            source={RosaryGuide} // Replace with the correct image path
            style={{
              width: screenWidth,
              height: calculatedHeight,
              resizeMode: 'contain',
            }}
          />
        </ImageViewer>
        </TouchableWithoutFeedback>

        <Text></Text>
        <Text></Text>
        <Text></Text>
       
      </View>
      
    </ScrollView>
  );
}

export default HomeScreen;
