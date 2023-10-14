import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import AmahanNamo from './Prayers/AmahanNamo';
import MaghimayaKaMaria from './Prayers/MaghimayaKaMaria';
import Credo from './Prayers/Credo';
import Katapusan from './Prayers/Katapusan';
import JesusKo from './Prayers/JesusKo';
import HimayaSaAmahan from './Prayers/HimayaSaAmahan';
import AudioPlayer from './AudioPlayer';
import plusIcon from '../images/plus.png';
import minusIcon from '../images/minus.png';

const KahayagScreen = () => {
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


  const audioFile = require('../kahayag.mp3');

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.mediumTitleText}>Ang Mga Misteryo sa Kahayag</Text>

        <AudioPlayer audioFile={audioFile} /> 

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
                /> Unang Misteryo sa Kahayag</Text>
            </TouchableOpacity>
            {!unangMisteryoCollapsed && (
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={require('../images/first-luminous.png')}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang pagbunyag kang Jesus sa Suba sa Jordan"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
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
                /> Ikaduhang Misteryo sa Kahayag</Text>
            </TouchableOpacity>
            {!ikaduhangMisteryoCollapsed && (
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={require('../images/second-luminous.png')}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang pagpaila Ni Jesus sa Kasal sa Cana"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
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
                /> Ikatulong Misteryo sa Kahayag</Text>
            </TouchableOpacity>
            {!ikatulongMisteryoCollapsed && (
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={require('../images/third-luminous.png')}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang Pagsangyaw sa Gingharian sa Dios"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
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
                /> Ika-upat nga Misteryo sa Kahayag</Text>
            </TouchableOpacity>
            {!ikaupatMisteryoCollapsed && (
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={require('../images/fourth-luminous.png')}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang pagkausab sa panagway Ni Jesus"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
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
                /> Ikalimang Misteryo sa Kahayag</Text>
            </TouchableOpacity>
            {!ikalimangMisteryoCollapsed && (
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={require('../images/fifth-luminous.png')}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang pagtukod Ni Jesus sa Santos nga Eukaristiya"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
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
                <View style={styles.collapsibleContentContainer}>

                    <Katapusan />

                </View>
            )}

        </ScrollView>
        
    );
};

export default KahayagScreen;
