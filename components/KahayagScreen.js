import React, { useState } from 'react';
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
import FL from '../assets/images/first-luminous.png';
import SL from '../assets/images/second-luminous.png';
import TL from '../assets/images/third-luminous.png';
import FRL from '../assets/images/fourth-luminous.png';
import FFL from '../assets/images/fifth-luminous.png';


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

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.mediumTitleText}>Ang Mga Misteryo sa Kahayag</Text>

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

                    <Text style={styles.collapsibleContent}></Text>

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
                /> Unang Misteryo sa Kahayag</Text>
            </TouchableOpacity>
            {!unangMisteryoCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={FL}
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
                /> Ikaduhang Misteryo sa Kahayag</Text>
            </TouchableOpacity>
            {!ikaduhangMisteryoCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={SL}
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
                /> Ikatulong Misteryo sa Kahayag</Text>
            </TouchableOpacity>
            {!ikatulongMisteryoCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={TL}
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
                /> Ika-upat nga Misteryo sa Kahayag</Text>
            </TouchableOpacity>
            {!ikaupatMisteryoCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={FRL}
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
                /> Ikalimang Misteryo sa Kahayag</Text>
            </TouchableOpacity>
            {!ikalimangMisteryoCollapsed && (
                <TouchableOpacity>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={FFL}
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

export default KahayagScreen;
