import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaCovid from './ListaCovid';
import Details from './Details';
import Login from './Login';
import ListaCondominios from './lista-condominio/ListaCondominios';
import ListaApartamentos from './lista-apartamentos/ListaApartamentos';
import Erro from './erro/Erro';
import Footer from './Footer';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ListaApartamentos"
                    component={ListaApartamentos}
                    options={{ title: "Apartamentos" }}
                />                                
                <Stack.Screen
                    name="Erro"
                    component={Erro}
                    options={{ title: "Erro" }}
                />
                <Stack.Screen
                    name="Footer"
                    component={Footer}
                    options={{ title: "Footer" }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: "Login" }}
                />
                <Stack.Screen
                    name="ListaCovid"
                    component={ListaCovid}
                    options={{ title: "Lista Casos Covid-19" }}
                />
                <Stack.Screen
                    name="ListaCondominios"
                    component={ListaCondominios}
                    options={{ title: "Condominios" }}
                />                
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={({ route }) => ({ title: route.params.item.nome })}
                />
            </Stack.Navigator>
            <StatusBar barStyle="default" />
        </NavigationContainer>
    );
}