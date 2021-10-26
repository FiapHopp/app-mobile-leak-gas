
import React from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const { getItem, setItem } = useAsyncStorage('idUsuario');

export function getIdUsuario(){
    getItem().then((retorno) => {
        console.log("retorno promise: " + retorno);
        return retorno;
    }).catch((error) => {
        console.log("Erro ao capturar idUsuario: " + error);
    });
}

export function setIdUsuario(id){
    setItem(id);    
}
