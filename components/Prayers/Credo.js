import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from '../../styles';

const Credo = () => {

    return (
        <View>
        <Text style={[styles.collapsibleContent, styles.textCenter]}>
            "ANG CREDO"
            </Text>
            <Text style={styles.collapsibleContent}>
                Nagatoo ako sa Dios nga Amahan, 
                Makagagahum sa tanan. Magbubuhat sa Langit ug sa Yuta.
                Nagatoo ako kang Jesu Cristo 
                Iyang Bugtong Anak nga Ginoo nato,
                gipanamkon Siya sa lalang sa Espiritu Santo, Natawo ni Maria nga Birhen, Gisakit sa sugo ni Poncio Pilato, Gilansang sa krus, namatay, ug gilubong. Mikunsad sa mga minatay, ug sa ikatulo ka adlaw nabanhaw Siya. Misaka sa Langit, ug nagalingkod sa too sa Dios Amahan, makagagahum sa tanan. Gikan didto mobalik Siya aron paghukom sa mga buhi ug sa mga minatay. Nagatoo ako sa Espiritu Santo. sa Santos ug Katoliko nga Simbahan, sa panag-ambit sa mga santos, sa kapasayloan sa mga sala, sa pagkabanhaw sa lawas, ug sa kinabuhing walay katapusan. Amen.
            </Text>
        </View>
    );
};

export default Credo;