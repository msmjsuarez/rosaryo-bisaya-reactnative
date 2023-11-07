import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from '../../styles';

const AmahanNamo = () => {

    return (
        <View>
        <Text style={[styles.collapsibleContent, styles.textCenter]}>
            "AMAHAN NAMO"
            </Text>
            <Text style={styles.collapsibleContent}>
            Amahan Namo nga anaa sa mga langit. Pagdaygon ang Imong ngalan, umabot kanamo ang Imong gingharian. Matuman ang Imong pagbuot dinhi sa yuta maingon sa langit.</Text>
            <Text style={styles.collapsibleContent}></Text>
            <Text style={styles.collapsibleContent}>
            Ang kalan-on namo sa matag adlaw ihatag kanamo karong adlawa. Ug Pasayloa kami sa sa among mga sala ingon nga nagapasaylo kami sa mga nakasala kanamo ug dili mo kami itugyan sa panulay. Hinonoa, luwasa kami sa kadautan. Amen.
        </Text>
        </View>

    );
};

export default AmahanNamo;