import { getConnectionAPI, postConnectionAPI, patchConnectionAPI, deleteConnectionAPI } from "../utils/ConnectionAPI";


function getUrlBaseAPI() {
    return 'https://api-leekgas.azurewebsites.net/api/Usuario/Cadastrar';    
}

const urlTeste = 'http://localhost:3000/usuarios/';


export function cadastrar(usuario) {
    return postConnectionAPI(urlTeste, usuario);
}

export function alterar(usuario){    
    return patchConnectionAPI(urlTeste+'1')
}

export function deletar(produto){    
    return deleteConnectionAPI(urlTeste+'2')
}

export function listarUsuarios(){    
    return getConnectionAPI(urlTeste)
}







