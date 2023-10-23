 var z = 3;


function otraFuncion(){
    rota()
}
function rota(){
    return z + 3;
}

function rotaAsincrona(cb){
    setTimeout(()=>{
        try{
            otraFuncion();
            console.log(z);
            return z += 5;
        }catch(err){
            console.error('Error Controlado Asincrono');
            console.log(err.message);
        }
    },1000);
}




//EJECUCION DE LAS FUNCIONES DE FORMA ASINCRONA Y CONTROLADA
console.log('Inicio')
try{
    //otraFuncion();
    rotaAsincrona();
}catch(err){
    console.error('Hubo un error controlado');
    console.error(err.message);    //.message es la propiedad del error que nos facilita la forma de interpretar el error
    console.log('capturado')
}
console.log('Final')
