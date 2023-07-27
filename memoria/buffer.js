//CREAMOS UN BUFFER CON 4 ESPACIOS DE MEMORIA VACIOS
//let buffer = Buffer.alloc(4);

//CREAMOS UN BUFFER CON INFORMACION DE UNA LISTA
//let buffer = Buffer.from([1,2,3]);

//CREAMOS UN BUFFER DESDE UN STRING
let buffer = Buffer.from('Hola');

//EL buffer.toString() NOS AYUDA A DESCODIFICAR EL BUFFER
console.log(buffer.toString());

console.log(buffer);

//CREANDO UN ABECEDARIO CON BUFFERS
let abc =  Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26 ; i++) {
    abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());





