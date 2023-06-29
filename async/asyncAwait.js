async function hola(nombre) {
    return new Promise(function(resolve,reject){
        console.log("Hola soy una funcion asincrona");
        setTimeout(function () {
          console.log("Hola " + nombre);
          resolve(nombre);
          reject('Sucedio un error en la funcion hola');
        }, 1000);
    });
  }
  
async  function hablar(nombre) {
    new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Bla bla bla bla ...");
            resolve(nombre);
            reject('Sucedio un error en la funcion hablar');
          }, 1000);
    })
  }
  
async  function adios(nombre) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios ", nombre);
            resolve(nombre);
            reject('Sucedio un error en la funcion adios');
          }, 1000);
    })
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
  


//LLAMADA DE UNA FUNCION ASYNCRONA

//CREACION DE LA FUNCION ASYNCRONA MAIN PARA ANIDAR NUESTRAS LLAMADAS
async function main(){
    let nombre = await hola('Maycol');
    
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre)
}


//HACEMOS LA LLAMADA A NUESTRA FUNCION MAIN
main();