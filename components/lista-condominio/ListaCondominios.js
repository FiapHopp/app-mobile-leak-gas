import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { buscarCondominios } from '../../services/condominio.service';

import Loading from '../../utils/util';

export default function ListaCondominios({ route, navigation }) {
    const [lista, setLista] = useState([]);
    const { idUsuario } = route.params;
    const [ativaLoad, setAtivaLoad] = useState(false);

    useEffect(() => {        
        setAtivaLoad(true)
        buscarCondominios(idUsuario).then((retorno) => {
            setAtivaLoad(false)
            if (retorno.sts != 200) {                
                console.log("Erro ao consultar condomínios");
                navigation.navigate("Erro");
            }
            retorno.dados.then((dados) => {                
                setLista(dados.data);
                setAtivaLoad(false)
            })
        }).catch((error) => {
            setAtivaLoad(false)
            console.log("Erro ao consultar condomínios | Erro: " + error);
        });

      }, [])

    function ExibeLoad() {
        return (
            <Loading />
        );
    }

    function ExibeDados() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, padding: 8 }}>Condomínios Vinculados</Text>
                <FlatList
                    data={lista}
                    keyExtractor={item => item.nome}
                    renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <TouchableOpacity 
                            style={{ flexDirection: 'column', flex: 1 }}
                            onPress={() => navigation.navigate("ListaApartamentos", { idCondominio: item.id }) }>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ flex: 5, fontWeight: 'bold', color: 'white' }}>{item.nome}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ flex: 1, color: 'white' }}>{item.endereco}, {item.numeroEndereco}-{item.bairro_logradouro}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ flex: 1, color: 'white' }}>{item.cep}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ flex: 1, color: 'white' }}>{item.cidade}, {item.uf}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    )}
                />
                {/* <Footer /> */}
            </View>
        );
    }

    function Exibir(flag) {
        if (flag) {
            return ExibeLoad();
        } else {
            return ExibeDados();
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {Exibir(ativaLoad)}
        </View>
    );

}
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#292E33',
        borderRadius: 10,
        margin: 8,
        padding: 8
    },
    text: {
        flexWrap: 'wrap',
        fontFamily: 'Calibri',
        padding: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#151A21'
    }
});