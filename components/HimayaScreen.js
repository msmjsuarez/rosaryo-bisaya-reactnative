import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, Image } from 'react-native';
import styles from '../styles';
import AmahanNamo from './Prayers/AmahanNamo';
import MaghimayaKaMaria from './Prayers/MaghimayaKaMaria';
import Credo from './Prayers/Credo';
import Katapusan from './Prayers/Katapusan';
import JesusKo from './Prayers/JesusKo';
import HimayaSaAmahan from './Prayers/HimayaSaAmahan';
import plusIcon from '../assets/images/plus.png';
import minusIcon from '../assets/images/minus.png';
import FG from '../assets/images/first-glorious.png';
import SG from '../assets/images/second-glorious.png';
import TG from '../assets/images/third-glorious.png';
import FRG from '../assets/images/fourth-glorious.png';
import FFG from '../assets/images/fifth-glorious.png';


const HimayaScreen = () => {
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
        <Text style={styles.mediumTitleText}>Ang Mga Misteryo sa Himaya</Text>

        {/* Pasiuna */}
            <TouchableWithoutFeedback onPress={togglePasiuna}>
            <View style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}>

                <Text style={styles.collapsibleTitle}>
                <Image
                source={PasiunaCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Pasiuna</Text>
            </View>
            </TouchableWithoutFeedback>
            


            {!PasiunaCollapsed && (
                <TouchableWithoutFeedback>
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
                </TouchableWithoutFeedback>
            )}
            


        {/* Unang Misteryo */}
            <TouchableWithoutFeedback onPress={toggleUnangMisteryo}>
            <View style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}>
                <Text style={styles.collapsibleTitle}>
                <Image
                source={unangMisteryoCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Unang Misteryo sa Himaya</Text>
            </View>
            </TouchableWithoutFeedback>

            {!unangMisteryoCollapsed && (
                <TouchableWithoutFeedback>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={FG}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang Mahimayaong Pagkabanhaw sa atong Ginoo"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
                </TouchableWithoutFeedback>
            )}


        {/* Ikaduhang Misteryo */}
            <TouchableWithoutFeedback onPress={toggleIkaduhangMisteryo}>
            <View style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}>
                <Text style={styles.collapsibleTitle}>
                <Image
                source={ikaduhangMisteryoCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Ikaduhang Misteryo sa Himaya</Text>
            </View>
            </TouchableWithoutFeedback>

            {!ikaduhangMisteryoCollapsed && (
                <TouchableWithoutFeedback>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={SG}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang Pagsaka sa Langit sa Anak sa Dios"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
                </TouchableWithoutFeedback>
            )}


        {/* Ikatulong Misteryo */}
            <TouchableWithoutFeedback onPress={toggleIkatulongMisteryo}>
            <View style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}>
                <Text style={styles.collapsibleTitle}>
                <Image
                source={ikatulongMisteryoCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Ikatulong Misteryo sa Himaya</Text>
            </View>
            </TouchableWithoutFeedback>

            {!ikatulongMisteryoCollapsed && (
                <TouchableWithoutFeedback>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={TG}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang Pagkunsad sa Espiritu Santo sa mga Apostoles ug kang Santa Maria"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
                </TouchableWithoutFeedback>
            )}


        {/* Ikaupat Misteryo */}
            <TouchableWithoutFeedback onPress={toggleIkaupatMisteryo}>
            <View style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}>
            
                <Text style={styles.collapsibleTitle}>
                <Image
                source={ikaupatMisteryoCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Ika-upat nga Misteryo sa Himaya</Text>
            </View>
            </TouchableWithoutFeedback>

            {!ikaupatMisteryoCollapsed && (
                <TouchableWithoutFeedback>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={FRG}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang Pagpasaka sa Langit sa Mahal nga Birhen Maria"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
                </TouchableWithoutFeedback>
            )}


        {/* Ikalimang Misteryo */}
            <TouchableWithoutFeedback onPress={toggleIkalimangMisteryo}>
            <View style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}>

                <Text style={styles.collapsibleTitle}>
                <Image
                source={ikalimangMisteryoCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Ikalimang Misteryo sa Himaya</Text>
            </View>
            </TouchableWithoutFeedback>

            {!ikalimangMisteryoCollapsed && (
                <TouchableWithoutFeedback>
                <View style={styles.collapsibleContentContainer}>
                    <Image
                        source={FFG}
                        style={styles.image}
                        />
                    <Text style={[styles.collapsibleContent, styles.textCenter]}>
                        "Ang Pagpurongpurong sa Mahal nga Birhen Maria nga Rayna sa mga Angheles ug mga Santos"
                    </Text>

                    <Text style={styles.collapsibleContent}></Text>

                    <AmahanNamo />
                    <MaghimayaKaMaria />

                    <Text style={styles.collapsibleContent}></Text>

                    <HimayaSaAmahan />

                    <Text style={styles.collapsibleContent}></Text>

                    <JesusKo />
                    
                </View>
                </TouchableWithoutFeedback>
            )}

        {/* Pag-ampo Tapos sa Rosaryo */}
            <TouchableWithoutFeedback onPress={toggletapos}>
            <View style={[styles.collapsibleHeader, styles.fullWidthHeader, styles.collapsibleTitleBackground]}>
            
                <Text style={styles.collapsibleTitle}>
                <Image
                source={taposCollapsed ? plusIcon : minusIcon}
                style={styles.icon}
                /> Pag-ampo Tapos sa Rosaryo</Text>
            </View>
            </TouchableWithoutFeedback>

            {!taposCollapsed && (
                <TouchableWithoutFeedback>
                <View style={styles.collapsibleContentContainer}>

                    <Katapusan />

                </View>
                </TouchableWithoutFeedback>
            )}

        </ScrollView>
        
    );
};

export default HimayaScreen;
