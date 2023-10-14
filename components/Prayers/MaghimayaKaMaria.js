import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

const MaghimayaKaMaria = () => {

    return (
        <View>
            <Text style={styles.collapsibleContent}></Text>
            <Text style={[styles.collapsibleContent, styles.textCenter]}>
                "MAGHIMAYA KA MARIA" (3X)
                </Text>
                <Text style={styles.collapsibleContent}>
                Maghimaya ka Maria napuno ka sa grasya. Ang Ginoong Dios maanaa kanimo. Bulahan ikaw sa mga babayeng tanan ug bulahan man usab ang bunga sa tiyan mo nga si Jesus.</Text>
                <Text style={styles.collapsibleContent}></Text>
                <Text style={styles.collapsibleContent}>
                Santa Maria, Inahan ka sa Dios, ig-ampo mo kaming mga makasasala, karon ug sa oras sa among ikamatay. Amen.
            </Text>
        </View>

    );
};

export default MaghimayaKaMaria;