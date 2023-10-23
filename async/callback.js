/*PODEMOS OBSERVAR LA FORMA EN LA QUE LA PRIMERA FUNCION 
DEBE RECIBIR UN PARAMETRO, EN ESTE CASO EL PARAMETRO 
ES UNA FUNCION QUE DESENCADENA EL PROCESO TERMINADO
AHORA LA FUNCION QUE TERMINA TODO SE EJECUTRA SOLO DESPUES 
DE QUE SE EJECUTE EL CALLBACK */

function hola(nombre, micallback) {
  console.log("Hola soy una funcion asincrona");
  setTimeout(function () {
    console.log("Hola " + nombre);
    micallback(nombre);
  }, 1000);
}

function adios(nombre, micallback) {
  setTimeout(() => {
    console.log("Adios ", nombre);
    micallback();
  }, 1000);
}

//PODEMOS VER LA LLAMADA ASINCRONA DE LA FUNCION HOLA A LA FUNCION ADIOS
// console.log("Iniciando proceso");
// hola("maycol", function (nombre) {
//   adios(nombre, function () {
//     console.log("Terminando proceso");
//   });
// });

console.log("Iniciando proceso");
hola("maycol", adios("maycol", function () {
    console.log("Terminando proceso");
  }));

