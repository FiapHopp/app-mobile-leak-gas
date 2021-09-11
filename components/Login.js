
import React, { useEffect, useState, useReducer } from 'react';
import { Button, TextInput, ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { logar, cadastrar, alterar, deletar } from '../services/login.service';
import getImage from '../utils/Images';


export default function Login({ navigation }) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    navigation.navigate("ListaApartamentos")

    function realizarLogin() {
        var usuario = {
            "usuario": user,
            "senha": password
        }            
        logar(usuario).then((data) => {
            if(data.sts == 200){                
                
            }      
        }).catch((error) => {                        
            //exibir mensagem na tela dizendo que senha está errado
        })
        
    }

    return (
        <ImageBackground
            source={getImage('background')}
            imageStyle={styles.imageBackground}
            style={styles.imageContainer}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={getImage('logo-transparente')} />
                <TextInput style={styles.inputStyle}
                    keyboardType="text"
                    onChangeText={setUser}
                    placeholder="usuário"
                    value={user} />
                <TextInput style={styles.inputStyle}
                    keyboardType="password"
                    onChangeText={setPassword}
                    placeholder="senha"
                    secureTextEntry={true}
                    value={password} />

                <View style={styles.conteinerButton}>
                    <Button style={styles.button}
                        color="#2F2E2E"
                        title="Entrar na minha conta"
                        accessibilityLabel="Botão que realiza o login"
                        onPress={realizarLogin} />
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        resizeMode: 'stretch'
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.7,
        alignItems: 'center',
        padding: 16
    },
    imageContainer: {
        flex: 1
    },
    inputStyle: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderRadius: 1,
        borderWidth: 2,
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 5,
        width: 300
    },
    imageBackground: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    conteinerButton: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
});