const API = 'https://rickandmortyapi.com/api/character/';
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // objeto que usaremos en js para realizar peticiones 

// Usaremos xmlhhtpsrequest para traer los datos de la api, no usarmoe fech porque gaermos uso de callback

function fechdata(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true); // el tercer valor hace referencia que se maneje de forma asincrona 
    xhttp.onreadystatechange = function (event) { // el onreadystatechange escucha los elementos, si sucede => pasara algo, en este caso enviamos la funcion event 
        if (xhttp.readyState === 4) { // js tiene 5 estados empezando desde el 0 (0. open(aun no se inicializa), 1. Se carga (proceso de hacer el llamado)), 2. Donde ya se ha cargado, 3. si hay alguna modificacion por errores y demas
            // y 4. es el estado completado ))
            if (xhttp.status === 200) { // se valida si la peticion ha sido completada correctamente (en esye caso 200 se refiere que todo salio bien) 
                callback(null, JSON.parse(xhttp.responseText)) // aqui regresamos el callback, primero se renderiza el error, y en el segundo parametro es el resultado (se tiene que convertir)
            } else {
                const error = new Error('Error:  ' + url_api) // evaluamos que no haya ningun error
                console.log(xhttp.status);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}


fechdata(API, function (err1, data1) {
    if (err1) return console.error(err1);
    fechdata(API + data1.results[0].id, function (err2, data2) {
        if (err2) return console.error(err2);
        fechdata(API + data2.origin.url, function (err3, data3) {
            if (err3) return console.error(err3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimensión);
        });
    });

});