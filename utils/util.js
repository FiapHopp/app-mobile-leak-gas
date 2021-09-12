
import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#D94501" />
        </View>        
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292E33',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});