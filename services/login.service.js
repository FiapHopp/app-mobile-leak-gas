import { getConnectionAPI, postConnectionAPI, patchConnectionAPI, deleteConnectionAPI } from "../utils/ConnectionAPI";


function getUrlBaseAPI() {
    return 'https://api-leekgas.azurewebsites.net/api/Autenticacao';    
}

const urlTeste = 'http://localhost:3000/produtos/';


export function logar(usuario) {
    return postConnectionAPI(getUrlBaseAPI(), usuario);
}

export function cadastrar(produto){    
    return postConnectionAPI(urlTeste, produto)
}

export function alterar(produto){    
    return patchConnectionAPI(urlTeste+'2', produto)
}

export function deletar(produto){    
    return deleteConnectionAPI(urlTeste+'2')
}





