
import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View} from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { cadastrar } from '../../services/usuario.service';
import Loading from '../../utils/util';



export default function CadastroUsuario({ navigation }) {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [celular, setCelular] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [ativaLoad, setAtivaLoad] = useState(false);
    const [ativaErro, setAtivaErro] = useState(false);

    const { getItem, setItem } = useAsyncStorage('idUsuario');

    const realizarCadastro = async () => {               
        const id_usuario = await getItem();        
        var usuario = {
            "nome": nome,
            "cpf": cpf,
            "celular": celular,
            "usuario": user,
            "senha": password
        };

        if(!camposValidos(usuario)){
            setAtivaErro(true);                      
            return false;
        }else{
            setAtivaErro(false); 
            setAtivaLoad(true);
            cadastrar(usuario).then((retorno) => {
                if (retorno.sts == 201) {
                    setAtivaLoad(false);
                    navigation.navigate("ListaCondominios", { idUsuario: id_usuario });                
                } else {
                    setAtivaLoad(false);
                    console.log("Erro ao realizar cadastro");
                    navigation.navigate("Erro");
                }
            }).catch((error) => {
                setAtivaLoad(false);
                console.log("Erro ao realizar cadastro | Erro: " + error);
                navigation.navigate("Erro");
            })
        }
    }

    function camposValidos(usuario){
        return usuario.nome == '' || usuario.cpf == '' || usuario.celular == '' || usuario.usuario == '' || usuario.senha == '' ? false : true;        
    }

    function ExibirMensagemErro(flag){
        if(flag){
            return (
                <View>
                    <Text>Verifique as informações do formulário!</Text>
                </View>
            )
        }        
    }

    function ExibeLoad() {
        return (
            <Loading />
        );
    }

    function ExibeDados() {
        return (
            <View style={styles.container}>
                <View style={styles.containerCard}>
                    {ExibirMensagemErro(ativaErro)}

                    <View style={styles.containerInput}>
                        <TextInput style={styles.inputStyle}
                            keyboardType="text"
                            onChangeText={setNome}
                            placeholder="Nome"
                            value={nome} />
                    </View>
                    <View style={styles.containerInput}>
                        <TextInput style={styles.inputStyle}
                            keyboardType="text"
                            onChangeText={setCpf}
                            placeholder="CPF"
                            value={cpf} />
                    </View>
                    <View style={styles.containerInput}>
                        <TextInput style={styles.inputStyle}
                            keyboardType="text"
                            onChangeText={setCelular}
                            placeholder="Celular"
                            value={celular} />
                    </View>
                    <View style={styles.containerInput}>
                        <TextInput style={styles.inputStyle}
                            keyboardType="text"
                            onChangeText={setUser}
                            placeholder="Usuário"
                            value={user} />
                    </View>
                    <View style={styles.containerInput}>
                        <TextInput style={styles.inputStyle}
                            keyboardType="text"
                            onChangeText={setPassword}
                            placeholder="Senha"
                            value={password} />
                    </View>
                    <View style={styles.conteinerButton}>
                        <Button
                            color="#2F2E2E"
                            title="Cadastrar"
                            accessibilityLabel="Botão que realiza o cadastro de usuário"
                            onPress={realizarCadastro} />
                    </View>
                </View>
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
    containerInput: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    containerCard: {
        backgroundColor: '#151A21',
        padding: 30,
        shadowColor: 'white',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.1,
        shadowRadius: 10

    },
    container: {
        flex: 1,
        backgroundColor: '#151A21',
        alignItems: 'center',
        padding: 16,
        justifyContent: 'center'

    },
    inputStyle: {
        backgroundColor: 'none',
        borderBottomColor: 'gray',
        borderRadius: 1,
        borderBottomWidth: 2,
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 5,
        width: 300
    },
    conteinerButton: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
});