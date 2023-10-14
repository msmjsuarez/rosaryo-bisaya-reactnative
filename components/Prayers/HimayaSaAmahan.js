import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

const HimayaSaAmahan = () => {

    return (
        <View>
        <Text style={[styles.collapsibleContent, styles.textCenter]}>
            "HIMAYA SA AMAHAN"
            </Text>
            <Text style={[styles.collapsibleContent]}>
            Himaya sa Amahan, sa Anak ug sa Espiritu Santo.
            </Text>
            <Text style={styles.collapsibleContent}></Text>
            <Text style={[styles.collapsibleContent]}>
            Maingon sa sinugdan, karon ug sa gihapon ug sa mga katuigan nga walay katapusan
            </Text>
        </View>

    );
};

export default HimayaSaAmahan;