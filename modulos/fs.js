const { error } = require('console');
const fs = require('fs')

function leer(ruta, cb){
    fs.readFile(ruta, (error, data) => {
        cb(data.toString());

    });
}

function escribir(ruta,contenido, cb){
    fs.writeFile(ruta, contenido, function(error, data){
        if(error){
            console.error('No pude escribirlo', error);
        }else{
            console.log('Se ha escrito correctamente');
        }
    });
}

function borrar(ruta, cb){
    fs.unlink(ruta, (error)=>{
        cb("archivo eliminado");
    });
}

//leer(__dirname + '/archivo.txt', console.log);
//escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log);
//leer(__dirname + '/archivo1.txt', console.log);
borrar(__dirname + '/archivo1.txt', console.log);