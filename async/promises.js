function hola(nombre) {
    return new Promise((resolve,reject) => {
        console.log("Hola soy una funcion asincrona");
        setTimeout(function () {
          console.log("Hola " + nombre);
          resolve(nombre);
          reject('Sucedio un error en la funcion hola');
        }, 1000);
    });
  }
  
  function hablar(nombre) {
    new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Bla bla bla bla ...");
            resolve(nombre);
            reject('Sucedio un error en la funcion hablar');
          }, 1000);
    })
  }
  
  function adios(nombre) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios " + nombre);
            resolve(nombre);
            reject('Sucedio un error en la funcion adios');
          }, 4000);
    })
  }
  
  
  function conversacion(nombre, veces){
          if(veces > 0){
            hablar('vanesa');
            conversacion(nombre, --veces);
        }else{
          (nombre)=> {
                console.log("terminado" + nombre);
            };
        };
  }
  

//LLAMADA DE UNA PROMESA Y MAS DE UNA FUNCION

    console.log('Iniciando el proceso')
    hola('Maycol')
        .then(adios)
        .then((nombre) => {
        console.log('Terminado el proceso' + ' adios ' + nombre)
    })
        .then(conversacion('vanesa',3))
        .then(hablar)      
    .catch(error => {
        console.error('Pausamos todo por un error...');
        console.error(error);
    })