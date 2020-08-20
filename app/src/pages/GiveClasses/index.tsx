import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import giveClassesBgImg from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground  
                resizeMode="contain" 
                source={giveClassesBgImg} 
                style={styles.content}
            >
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar vc precisa se cadastrar primeiro na plataforma WEB.
                </Text>
            </ImageBackground>
            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText} >Tudo bem!</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;