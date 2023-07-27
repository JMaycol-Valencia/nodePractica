const fs = require('fs');
const stream = require('stream');
const util = require('util')

//STREAM DE LECTURA
console.log("STREAM DE LECTURA");
let data = '';
let readeableStream = fs.createReadStream(__dirname + '/input.txt');
readeableStream.setEncoding('utf-8');

//nos ayudara para poder optimizar la lectura
//de datos grandes
readeableStream.on('data', function(chunk){
    data += chunk;
})

readeableStream.on('end', function(){
    console.log(data)
})


//SALIDA ESTANDAR DEL SISTEMA COMO ESCRITURA
console.log("SALIDA ESTANDAR DEL SISTEMA COMO ESCRITURA")
process.stdout.write('hola');
process.stdout.write('que');
process.stdout.write('tal');

//STREAM QUE MANEJA AMBAS INTERACCIONES
console.log("STREAM QUE MANEJA AMBAS INTERACCIONES")
const Transform = stream.Transform;
function Mayus(){
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb){
    chunMayus = chunk.toString().toUpperCase();
    this.push(chunMayus);
    cb();
}

let mayus = new Mayus();

readeableStream.pipe(mayus).pipe(process.stdout);
