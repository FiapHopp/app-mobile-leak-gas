import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStringStorage = (key, value) => {
    try{
        await AsyncStorage.setItem(key, value);
    }catch(e){
        throw new Error(`Erro ao inserir o dado ${key} | Erro: ${e}`);
    }
}

export const getStringStorage = (key) => {
    try{
        return await AsyncStorage.getItem(key);
    }catch(e){
        throw new Error(`Erro ao obter o dado ${key} | Erro: ${e}`);
    }
}

export const setObjectStorage = (key, value, callback = null) => {
    try{
        const json = JSON.stringify(value)
        await AsyncStorage.setItem(key, json);
    }catch(e){
        throw new Error(`Erro ao inserir o dado ${key} | Erro: ${e}`);
    }
}

export const getObjectStorage = (key, callback = null) => {
    try{
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    }catch(e){
        throw new Error(`Erro ao obter o dado ${key} | Erro: ${e}`);
    }
}

export const getAllKeys = (callback = null) => {
    try{        
        return AsyncStorage.getAllKeys();
    }catch(e){
        throw new Error(`Erro ao obter todos os dados | Erro: ${e}`);
    }
}

export const removeKey = (key, callback = null) => {
    try{        
        await AsyncStorage.removeItem(key);
    }catch(e){
        throw new Error(`Erro ao remover os dado ${key} | Erro: ${e}`);
    }
}

export const clearAllKeys = (key, callback = null) => {
    try{        
        await AsyncStorage.clear();
    }catch(e){
        throw new Error(`Erro ao remover todos os dados | Erro: ${e}`);
    }
}