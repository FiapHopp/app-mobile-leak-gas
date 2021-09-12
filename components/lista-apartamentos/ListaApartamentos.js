import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import ImagemApartamento from './lista-apartamento-imagem/ImagemApartamento';
import { buscarApartamentos, atualizarOcorrenciaApartamento } from '../../services/apartamento.service';

import Loading from '../../utils/util';

export default function ListaApartamentos({ route, navigation }) {
    const [lista, setLista] = useState([]);
    //const { idCondominio } = route.params;
    const [ativaLoad, setAtivaLoad] = useState(false);
    

    useEffect(() => {
        buscaApartamentos();
    }, [])

    function atualizaOcorrencia(id_apartamento) {
        setAtivaLoad(true)
        atualizarOcorrenciaApartamento(id_apartamento).then((retorno) => {
            if(retorno.sts == 200){
                console.log("Sucesso ao atualizar ocorrência")
                buscaApartamentos()
            }else{
                setAtivaLoad(false)
                console.log("Erro ao atualizar ocorrência")
            }
        }).catch((error) => {
            console.log("Erro ao atualizar ocorrência | Erro: " + error)
            setAtivaLoad(false)            
        });
    }

    function buscaApartamentos(){
        setAtivaLoad(true)        
        buscarApartamentos("1").then((retorno) => {
            if(retorno.sts == 200){
                console.log("Sucesso ao buscar lista de apartamentos");
                setAtivaLoad(false)
                retorno.dados.then((data) => {
                    setLista(data);
                })
            }else{
                setAtivaLoad(false)
                console.log("Erro ao buscar lista de apartamentos");
                navigation.navigate("Erro"); 
            }
            
        }).catch((error) => {
            setAtivaLoad(false)
            console.log("Erro ao buscar lista de apartamentos | Erro: " + error);
            navigation.navigate("Erro");             
        })
    }

    function ExibeLoad() {
        return (
            <Loading />
        );
    }

    function exibeImagem(apartamento) {
        if (!apartamento.alarme) {
            return (
                <TouchableOpacity onPress={() => atualizaOcorrencia(apartamento.id)}>
                    <View>
                        <ImagemApartamento apartamento={apartamento} />
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <View>
                    <ImagemApartamento apartamento={apartamento} />
                </View>
            )
        }
    }

    function ExibeDados() {
        return (
            <View style={styles.containerLista}>                
                <FlatList
                    data={lista}
                    keyExtractor={item => item.nome}
                    contentContainerStyle={styles.container}
                    renderItem={({ item }) => (
                        <View>
                            {exibeImagem(item)}
                        </View>
                    )} />
            </View>
        );
    }

    function Exibir(flag) {
        return flag ? ExibeLoad() : ExibeDados();
    }

    return (
        <View style={{ flex:1 }}>
                
            {Exibir(ativaLoad)}            

        
        </View>
    );


}
const styles = StyleSheet.create({
    containerLista: {
        flex: 1,
        marginTop: 20
    },
    container: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    
});