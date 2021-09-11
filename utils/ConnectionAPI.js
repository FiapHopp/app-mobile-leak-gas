export function getConnectionAPI(url) {    
    return fetch(url)
        .then((response) => {            
            var retorno ={
                sts: response.status,
                dados: response.json()
            }
            return retorno;
        })        
        .catch(e => { // caso ocorra algum erro ao obter os dados
            console.warn(e);
            
        });
}

export function postConnectionAPI(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',            
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    .then((response) => {            
        var retorno ={
            sts: response.status,
            dados: response.json()
        }
        return retorno;
    }) 
    .catch((error) => {
        console.error("Erro: " + error);
    });
}

export function patchConnectionAPI(url, body) {
    return fetch(url, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
    .catch((error) => {
        console.error("Erro: " + error);
    });
}

export function deleteConnectionAPI(url, body) {
    if (body) {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error("Erro: " + error);
            });
    } else {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error("Erro: " + error);
            });
    }
}