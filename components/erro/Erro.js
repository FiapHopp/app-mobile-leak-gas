import React, { useEffect, useState, useReducer } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import { buscarCondominios } from '../../services/condominio.service';
import getImage from '../../utils/Images';

export default function Erro({ navigation }) {
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={getImage('erro')} />
            <Text style={{fontSize: 24, color: '#B4B2B2', marginBottom: 20, fontFamily: 'Calibri'}}>AWWW . . . NÃO CHORE.</Text>
            <Text style={{fontSize: 18, color: 'white', fontFamily: 'Calibri'}}>Foi somente um erro!</Text>
            <Text style={{fontSize: 18, color: 'white', textAlign: 'justify', fontFamily: 'Calibri'}}>Recarregue a página e tente novamente, caso não funcione basta contatar a nossa equipe técnica :)</Text>
            
        </View>
    );
}
const styles = StyleSheet.create({    
    container:{
        flex:1,
        backgroundColor: '#151A21',
        alignItems: 'center',
        padding: 10
    },
    image:{        
        height: 300,
        width: 220
        
    }
});