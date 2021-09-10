import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaCovid from './ListaCovid';
import Details from './Details';
import Login from './Login';

const Stack = createNativeStackNavigator();

export default function Navegacao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
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
                    name="Details"
                    component={Details}
                    options={({ route }) => ({ title: route.params.item.nome })}
                />
            </Stack.Navigator>
            <StatusBar barStyle="default" />
        </NavigationContainer>
    );
}
