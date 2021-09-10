
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Botao from './botao';

export default function Details({ route , navigation }){
    const { item } = route.params;

    const botaoVoltar = () => {
        navigation.goBack();
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.detailsTitle}>
                <Text style={styles.textItemDetails}>Detalhes</Text>
            </View>
            <View style={styles.itemDetails}>
                <Text style={{flex:1, fontWeight:'bold'}}>Nome:</Text>
                <Text style={{flex:5, flexWrap:'wrap' }}>{item.nome}</Text>
            </View>
            <View style={styles.itemDetails}>
                <Text style={{flex:1, fontWeight:'bold'}}>Sexo:</Text>
                <Text style={{flex:5, flexWrap:'wrap' }}>{item.sexo}</Text>
            </View>
            <View style={styles.itemDetails}>
                <Text style={{flex:3, fontWeight:'bold'}}>Data de Nascimento:</Text>
                <Text style={{flex:3, flexWrap:'wrap' }}>{item.data_nasc}</Text>
            </View>
            <View style={styles.itemDetails}>
                <Text style={{flex:3, fontWeight:'bold'}}>Data do atendimento:</Text>
                <Text style={{flex:3, flexWrap:'wrap' }}>{item.data_atendimento}</Text>
            </View>
            <View style={styles.itemDetails}>
                <Text style={{flex:3, fontWeight:'bold'}}>Sintomas apresentados:</Text>
                <Text style={{flex:3, flexWrap:'wrap' }}>{item.sintomas}</Text>
            </View>
            <View style={styles.itemDetails}>
                <Text style={{flex:3, fontWeight:'bold'}}>Doenças Preexistentes:</Text>
                <Text style={{flex:3, flexWrap:'wrap' }}>{item.doenca_preexitente}</Text>
            </View>
            <View style={styles.itemDetails}>
                <Text style={{flex:1, fontWeight:'bold'}}>Status:</Text>
                <Text style={{flex:4, flexWrap:'wrap' }}>{item.statuscovid}</Text>
            </View>
            <Botao text="Voltar" onPress={botaoVoltar}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    detailsTitle:{
        alignItems:'center',
        marginBottom:50,
    },
    text:{
        fontFamily:'Calibri',
    },
    itemDetails:{
        flexDirection: 'row',
        marginBottom:10, 
        paddingHorizontal:10
    },
    textItemDetails:{
        fontWeight:'bold', 
        fontSize:20, 
        margin:10
    }
});