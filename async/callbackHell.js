function hola(nombre, micallback) {
  console.log("Hola soy una funcion asincrona");
  setTimeout(function () {
    console.log("Hola " + nombre);
    micallback(nombre);
  }, 1000);
}

function hablar(callbackDeHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla ...");
    callbackDeHablar();
  }, 1000);
}

function adios(nombre, micallback) {
  setTimeout(() => {
    console.log("Adios ", nombre);
    micallback();
  }, 1000);
}


function conversacion(nombre, veces, calllback){
        if(veces >= 0){
        hablar(function(){
            conversacion(nombre, --veces, calllback);
        })
    }else{
        calllback(nombre,function(){
            console.log("terminado")
        });
    }
}

//Tenemos las llamadas excesivas y que pueden recaer en un codigoSpagueti o CallbackHell
console.log("Iniciando proceso");
hola('maycol', function(nombre){
    conversacion(nombre,3,adios)
})




// hola("maycol",adios);


// hola("vanesa",function(nombre){
//     adios(nombre,function(){
//         console.log("terminado")
//     })
// });



// hola("maycol", function (nombre) {
//   hablar(function () {
//     hablar(function(){
//         adios(nombre, function () {
//             console.log("Terminando proceso");
//           });
//     });
//   });
// });
