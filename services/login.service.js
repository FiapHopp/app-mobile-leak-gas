import { getConnectionAPI, postConnectionAPI, patchConnectionAPI, deleteConnectionAPI } from "../utils/ConnectionAPI";

const urlTeste = 'http://localhost:3000/produtos/';
const url = 'https://api-leekgas.azurewebsites.net/';

export function logar(user, password) {
    return getConnectionAPI(`http://viacep.com.br/ws/${user}/json`);
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





