//PARA EL MODULO PROCESS NO SERA NECESARIO LA IMPORTACION YA QUE VIENE POR DEFECTO 
//const process = require('process')

//beforeExit nos indica que el proceso esta por terminar
process.on('beforeExit', ()=>{
    console.log('el proceso va a terminar')
});


//exit nos indica que el proceso termino
process.on('exit', ()=>{
    console.log('el proceso termino');
    setTimeout(()=>{
        console.log('Este mensaje no se mostrar ya que exit es el termino del proceso')
    },1000);
});

setTimeout(()=>{
    console.log('Este mensaje se mostrara ya que esta fuera del estado exit')
},2000);

//escuchando excepciones
process.on('uncaughtException', (err, origen) => {
    console.log('hola mira te cuento que hay error no capturado');
    console.log(err);
    setTimeout(()=>{
        console.log('Escuchando excepciones , mensaje con setTimeOut')
    },3000);
} )

//ERROR FORZADO LLAMANDO A UNA FUNCION QUE NO EXISTE PARA QUE LO CAPTURE uncaughtException
x()

console.log('mensaje , despues del error forzado que ya no se mostrara');

//ESCUCHAMOS PROMESAS QUE NO TENGAN UN CATCH
//process.on('uncaughRejection')