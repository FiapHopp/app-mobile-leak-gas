import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import getImage from '../../utils/Images';
import ImagemApartamento from './lista-apartamento-imagem/ImagemApartamento';

import Footer from '../Footer';
import { buscarApartamentos } from '../../services/apartamento.service';


export default function ListaApartamentos({ navigation }) {
    const [lista, setLista] = useState({});

    var c = 0
    if (c < 1) {
        buscarApartamentos().then((retorno) => {
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
        <View style={styles.containerLista}>
            <FlatList
                data={lista}
                keyExtractor={item => item.nome}
                contentContainerStyle={styles.container}
                renderItem={({ item }) => (
                    <View>
                        <ImagemApartamento apartamento={item} />
                    </View>
                )}/>                
            <Footer />
        </View>
    );
}
const styles = StyleSheet.create({
    containerLista: {
        flex: 1
    },
    container: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});