import { getConnectionAPI, postConnectionAPI, patchConnectionAPI, deleteConnectionAPI } from "../utils/ConnectionAPI";


function getUrlBaseAPI() {
    return 'https://api-leekgas.azurewebsites.net/api/Condominio?idUsuario=1';    
}

const urlTeste = 'http://localhost:3000/condominios/';


export function buscarCondominios() {
    return getConnectionAPI(urlTeste);
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





