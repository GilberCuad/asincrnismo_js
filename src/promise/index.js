const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        // las promesas permiten pasar 2 argumentos (1. si se resuelve, es decir si se ejecuta de forma correcta lo que se esta ejecutando, 2. si es rechazada)
        true ? resolve('Correcto') : reject('Ha ocurrido un error');
    });
};

somethingWillHappen()
    .then(Response => console.log(Response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        true ? (setTimeout(() => {
            resolve('True');
        }, 2000)) :
            // const error = new Error('Erroorr');
            reject('error')
    })
}

somethingWillHappen2()
    .then(Response => console.log(Response))
    .catch(err => console.error(err))

// vamos a correr varias promesas al mismo tiempo o encadenadas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(Response => {
    console.log('Results', Response)
})
.catch(err => {
    console.error(err);
})