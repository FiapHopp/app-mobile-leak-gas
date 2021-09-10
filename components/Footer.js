import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const dados_covid = require('../dados/dados_covid.json');

export default function Footer() {
    const listaSuspeitos = dados_covid.filter(caso => caso.statuscovid == "suspeito");
    const listaPositivos = dados_covid.filter(caso => caso.statuscovid == "negativo");
    const listaNegativos = dados_covid.filter(caso => caso.statuscovid == "positivo");

    return (
        <View style={{ backgroundColor: "#9f9f9f", color: 'white', position: 'absolute', left: 0, right: 0, bottom: 0, height: 40, flexDirection: 'column' }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', flex: 2 }}>
                    <Text>Positivos: </Text>
                    <Text style={{ color: "#811005", fontWeight: 'bold' }}>{listaPositivos.length}</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 2 }}>
                    <Text>Suspeitos: </Text>
                    <Text style={{ color: "#ffa700", fontWeight: 'bold' }}>{listaSuspeitos.length}</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 2 }}>
                    <Text>Negativos: </Text>
                    <Text style={{ color: "#7b940e", fontWeight: 'bold' }}>{listaNegativos.length}</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
});