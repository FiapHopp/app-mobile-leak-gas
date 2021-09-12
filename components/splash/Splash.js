import React, { useState, useEffect } from 'react';
import { Button, TextInput, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { logar } from '../../services/login.service';
import getImage from '../../utils/Images';

import LoadingSplash from '../../utils/LoadingSplash';

export default function Splash({ navigation }) {
    
    useEffect(() => {
        setTimeout(function(){ navigation.navigate("Login") }, 4000);
    }, [])

    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={getImage('logo')} />
            <LoadingSplash/>
            
        </View>        
    );     
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ea7d23',
        justifyContent: 'center',
        alignItems: 'center'

    },
    image: {
        width: 450,
        height: 450,
        resizeMode: 'stretch'
    }
});