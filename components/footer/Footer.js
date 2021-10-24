import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

export default function Footer({ navegacao }) {
    const nav = navegacao;
    // const idCondominio = idCondominio;
    // const idUsuario = idUsuario;

    return (
        <View style={{ backgroundColor: "#D94501", color: 'white', position: 'absolute', left: 0, right: 0, bottom: 0, flexDirection: 'column' }}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ flexDirection: 'column' }}
                    onPress={() => nav.navigate("Login")}>
                    <View style={{ flexDirection: 'column' }}>
                        <Icon
                            name='menu'
                            type='ionicon'
                            color='#ffffff' />
                        <Text style={styles.texto}>Menu</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ flexDirection: 'column' }}
                    onPress={() => nav.navigate("ListaCondominios", { idUsuario: idUsuario, idCondomino: idCondominio })}>
                    <View style={{ flexDirection: 'column' }}>
                        <Icon
                            name='business'
                            type='ionicon'
                            color='#ffffff' />
                        <Text style={styles.texto}>Condomínios</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ flexDirection: 'column' }}
                    onPress={() => nav.navigate("Login")}>
                    <View style={{ flexDirection: 'column' }}>
                        <Icon
                            name='glasses'
                            type='ionicon'
                            color='#ffffff' />
                        <Text style={styles.texto}>Visão Geral</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ flexDirection: 'column' }}
                    onPress={() => nav.navigate("Login")}>
                    <View style={{ flexDirection: 'column' }}>
                        <Icon
                            name='log-out'
                            type='ionicon'
                            color='#ffffff' />
                        <Text style={styles.texto}>Sair</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around'
    },
    texto: {
        color: 'white',
        fontFamily: 'Calibri',
        fontSize: 16
    }
});