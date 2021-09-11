import { getConnectionAPI, postConnectionAPI, patchConnectionAPI, deleteConnectionAPI } from "../utils/ConnectionAPI";


function getUrlBaseAPI() {
    return 'https://api-leekgas.azurewebsites.net/api/Apartamento';    
}

const urlTeste = 'http://localhost:3000/apartamentos/';


export function buscarApartamentos() {
    return getConnectionAPI(urlTeste);
}