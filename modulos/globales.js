//El objeto global
//console.log(global);

let i = 0;
let intervalo = setInterval(function(){
    console.log('Hola') 
    if(i === 3){
        clearInterval(intervalo);
    }
    i++
},1000);

//Funcion que se ejecuta de inmediato
setImmediate(function(){
    console.log("Immediaten");
})


//LLamadas por consola
console.log(process);

//nos devuelve la direccion de la carpeta que aloja nuestro archivo
console.log(__dirname);

//nos retorna nuestra direccion completa de nuestro archivo
console.log(__filename);


//PARA CREAR UNA VARIABLE GLOBAL DEBEMOS HACERLO DE LA SIGUIENTE MANERA
globalThis.miVariable = "El valor";
console.log(miVariable);