let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url_api) => {

    return new Promise((resolve, reject) => {

        const xhttp = new XMLHttpRequest();

        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {

            // xhttp.readyState === 4 ? xhttp.status === 2000 ?  resolve(JSON.parse(xhttp.responseText)) : reject(newError('Error ', url_api))

            if (xhttp.readyState === 4) {
                xhttp.status === 200 ?
                    resolve(JSON.parse(xhttp.responseText)) :
                    reject(newError('Error: ', url_api))
            };
        });
        xhttp.send();

    });
}

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        console.log(data.status)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.type);
        console.log(data.dimension);
    })
    .catch(err => console.error(err));