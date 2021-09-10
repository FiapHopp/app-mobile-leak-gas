import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Botao({ onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.button}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
    },
    button: {
        backgroundColor: "#0900FF",
        color: 'white',
        fontSize: 18,
        padding: 10,
        borderRadius: 10,
    }
});