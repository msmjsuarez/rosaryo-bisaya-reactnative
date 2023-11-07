import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import AmahanNamo from './Prayers/AmahanNamo';
import MaghimayaKaMaria from './Prayers/MaghimayaKaMaria';
import Credo from './Prayers/Credo';
import Katapusan from './Prayers/Katapusan';
import JesusKo from './Prayers/JesusKo';
import HimayaSaAmahan from './Prayers/HimayaSaAmahan';
import plusIcon from '../assets/images/plus.png';
import minusIcon from '../assets/images/minus.png';
import FS from '../assets/images/first-sorrowful.png';
import SS from '../assets/images/second-sorrowful.png';
import TS from '../assets/images/third-sorrowful.png';
import FRS from '../assets/images/fourth-sorrowful.png';
import FFS from '../assets/images/fifth-sorrowful.png';


const KasakitScreen = () => {
  const [PasiunaCollapsed, setPasiunaCollapsed] = useState(true);
  const [unangMisteryoCollapsed, setUnangMisteryoCollapsed] = useState(true);
  const [ikaduhangMisteryoCollapsed, setIkaduhangMisteryoCollapsed] = useState(true);
  const [ikatulongMisteryoCollapsed, setIkatulongMisteryoCollapsed] = useState(true);
  const [ikaupatMisteryoCollapsed, setIkaupatMisteryoCollapsed] = useState(true);
  const [ikalimangMisteryoCollapsed, setIkalimangMisteryoCollapsed] = useState(true);
  const [taposCollapsed, settaposCollapsed] = useState(true);

  const togglePasiuna = () => {
    setPasiunaCollapsed(!PasiunaCollapsed);
  };

  const toggleUnangMisteryo = () => {
    setUnangMisteryoCollapsed(!unangMisteryoCollapsed);
  };

  const toggleIkaduhangMisteryo = () => {
    setIkaduhangMisteryoCollapsed(!ikaduhangMisteryoCollapsed);
  };

  const toggleIkatulongMisteryo = () => {
    setIkatulongMisteryoCollapsed(!ikatulongMisteryoCollapsed);
  };

  const toggleIkaupatMisteryo = () => {
    setIkaupatMisteryoCollapsed(!ikaupatMisteryoCollapsed);
  };

  const toggleIkalimangMisteryo = () => {
    setIkalimangMisteryoCollapsed(!ikalimangMisteryoCollapsed);
  };

  const toggletapos = () => {
    settaposCollapsed(!taposCollapsed);
  };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.mediumTitleText}>Ang Mga Misteryo sa Kasakit</Text>

        {/* Pasiuna */}
            <TouchableOpacity
                style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}
                onPress={togglePasiuna}
            >

                <Text style={styles.collapsibleTitle}>
                <Image
                source={PasiunaCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Pasiuna</Text>
            </TouchableOpacity>

            {!PasiunaCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "TIMAAN SA KRUS"</Text>
                    <Text style={styles.collapsibleContent}>(Sa Ngalan sa Amahan, sa Anak, ug sa Espiritu Santo. Amen)</Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <Credo />
                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />
                    
                </View>
                </TouchableOpacity>
            )}


        {/* Unang Misteryo */}
            <TouchableOpacity
                style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}
                onPress={toggleUnangMisteryo}
            >
                <Text style={styles.collapsibleTitle}>
                <Image
                source={unangMisteryoCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Unang Misteryo sa Kasakit</Text>
            </TouchableOpacity>
            {!unangMisteryoCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={FS}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang Pag-ampo sa atong Ginoo sa Tanaman sa Getsemani"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
                </TouchableOpacity>
            )}


        {/* Ikaduhang Misteryo */}
            <TouchableOpacity
                style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}
                onPress={toggleIkaduhangMisteryo}
            >
                <Text style={styles.collapsibleTitle}>
                <Image
                source={ikaduhangMisteryoCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Ikaduhang Misteryo sa Kasakit</Text>
            </TouchableOpacity>
            {!ikaduhangMisteryoCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={SS}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang Pagga-id ug Paghampak sa atong Manunubos"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
                </TouchableOpacity>
            )}


        {/* Ikatulong Misteryo */}
            <TouchableOpacity
                style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}
                onPress={toggleIkatulongMisteryo}
            >
                <Text style={styles.collapsibleTitle}>
                <Image
                source={ikatulongMisteryoCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Ikatulong Misteryo sa Kasakit</Text>
            </TouchableOpacity>
            {!ikatulongMisteryoCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={TS}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang Pagpurongpurong sa atong Ginoo sa Purongpurong nga Tunokon"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
                </TouchableOpacity>
            )}


        {/* Ikaupat Misteryo */}
            <TouchableOpacity
                style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}
                onPress={toggleIkaupatMisteryo}
            >
                <Text style={styles.collapsibleTitle}>
                <Image
                source={ikaupatMisteryoCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Ika-upat nga Misteryo sa Kasakit</Text>
            </TouchableOpacity>
            {!ikaupatMisteryoCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={FRS}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang Pagpas-an sa Krus sa atong Ginoo"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
                </TouchableOpacity>
            )}


        {/* Ikalimang Misteryo */}
            <TouchableOpacity
                style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}
                onPress={toggleIkalimangMisteryo}
            >
                <Text style={styles.collapsibleTitle}>
                <Image
                source={ikalimangMisteryoCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Ikalimang Misteryo sa Kasakit</Text>
            </TouchableOpacity>
            {!ikalimangMisteryoCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={FFS}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang Paglansang ug Pagkamatay sa Krus sa atong Ginoo"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
                </TouchableOpacity>
            )}

        {/* Pag-ampo Tapos sa Rosaryo */}
            <TouchableOpacity
                style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}
                onPress={toggletapos}
            >
                <Text style={styles.collapsibleTitle}>
                <Image
                source={taposCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Pag-ampo Tapos sa Rosaryo</Text>
            </TouchableOpacity>
            {!taposCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>

                    <Katapusan />

                </View>
                </TouchableOpacity>
            )}

        </ScrollView>
        
    );
};

export default KasakitScreen;
