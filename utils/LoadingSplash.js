
import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function LoadingSplash() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#292E33" />
        </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ea7d23',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});