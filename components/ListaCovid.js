import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Footer from '../components/Footer';

const dados_covid = require('../dados/dados_covid.json');

export default function ListaCovid({ navigation }) {

    return (
        <View>
            <FlatList
                data={dados_covid}
                keyExtractor={item => item.nome}
                renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <TouchableOpacity
                        style={{ flexDirection: 'column', flex: 1 }}
                        onPress={() => navigation.navigate("Details", { item })}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 5, fontWeight: 'bold' }}>{item.nome}</Text>
                            <Text style={{ flex: 1, flexWrap: 'wrap' }}>{item.statuscovid}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 1 }}>Sexo:</Text>
                            <Text style={{ flex: 5 }}>{item.sexo}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 3 }}>Data de Nascimento:</Text>
                            <Text style={{ flex: 3 }}>{item.data_nasc}</Text>
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
        fontSize: 18,
        margin: 10,
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    text: {
        fontFamily: 'Calibri',
        flexWrap: 'wrap',
        padding: 1
    }
});