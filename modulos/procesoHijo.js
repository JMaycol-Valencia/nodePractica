/*ALTERNATIVA A LA LLAMADA DEL MODULO
const exec = require('child_process').exec;
*/
const { exec, spawn } = require('child_process');
const { stdout } = require('process');

//USO DE EXEC
//AL REMPLAZAR ls -la por dir nos cambia un poco la informacion
//exec('dir')
// exec('ls -la', (err,stdout, sterr)=>{
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// })


//USAMOS EL MODULO EXEC PARA PODER EJECUTAR NODE DESDE UN ARCHIVO
// exec('node modulos/errores.js', (err,stdout, sterr)=>{
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// })


//USO DE SPAWN
let proceso = spawn('ls',['-la']);

 console.log(proceso.pid);       //CONOCEMOS EL ID DEL PROCESO A EJECUTARSE
 console.log(proceso.connected);     //VERIFICAMOS SI ESTA CONECTADO

proceso.stdout.on('data',function(dato){
    console.log(dato.toString())
});

proceso.on('exit', function(){
    console.log('el proceso termino');
    console.log(proceso.killed);
});

function fin(){
    setTimeout(()=>{
        console.log('Este es el final del final');
        console.log(proceso.killed);
    },1000)
}

fin();