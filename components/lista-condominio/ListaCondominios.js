import React, { useEffect, useState, useReducer } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { buscarCondominios } from '../../services/condominio.service';

import Footer from '../Footer';

const dados_covid = require('../../dados/dados_covid.json');

export default function ListaCondominios({ navigation }) {
    const [lista, setLista] = useState({});
    
    var c = 0
    if(c < 1){
        buscarCondominios().then((retorno) => {        
            retorno.dados.then((data) => {                
                setLista(data);                               
            })                    
        }).catch((error) => {                        
            //exibir mensagem na tela dizendo que senha está errado
        })
        c = 2;
    }

    var listarCondominios = function () {
    
                  
    }
    

    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize:18, padding:8 }}>Condomínios Vinculados</Text>
            <FlatList
                data={lista}
                keyExtractor={item => item.nome}
                renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <TouchableOpacity
                        style={{ flexDirection: 'column', flex: 1 }}
                        onPress={() => navigation.navigate("Details", { item })}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 5, fontWeight: 'bold', color: 'white' }}>{item.nome}</Text>                            
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 1, color: 'white' }}>{ item.logradouro }, {item.numero_logradouro}-{item.bairro_logradouro}</Text>                            
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 1, color: 'white' }}>{item.cidade}, {item.uf}</Text>
                            
                        </View>
                    </TouchableOpacity>
                </View>
                )}
            />
            <Footer />
        </View>
    );
}
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#292E33',        
        borderRadius: 10,        
        margin: 8,
        padding: 8
    },
    text: {
        flexWrap: 'wrap',
        fontFamily: 'Calibri',
        padding: 1
    },
    container:{
        flex:1,
        backgroundColor: '#151A21'
    }
});