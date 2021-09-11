import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import getImage from '../../../utils/Images';

export default function ImagemApartamento({ apartamento }) {

    return (
        <View>
            {apartamento.alarme && (
                <View style={{ marginBottom: 20, flex:1, alignItems: 'center' }}>
                    <Image
                        style={styles.image}
                        source={getImage('janela-ok')} />
                    <Text>{apartamento.numero} - {apartamento.bloco}</Text>
                </View>
            )}

            {!apartamento.alarme && (
                <View style={{ marginBottom: 20, flex:1, alignItems: 'center' }}>
                    <Image
                        style={styles.image}
                        source={getImage('janela-alarme')} />
                    <Text>{apartamento.numero} - {apartamento.bloco}</Text>
                </View>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 90,
        resizeMode: 'stretch',        
    }
});