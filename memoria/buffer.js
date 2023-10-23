//CREAMOS UN BUFFER CON 4 ESPACIOS DE MEMORIA VACIOS
let buffer1 = Buffer.alloc(4);

//CREAMOS UN BUFFER CON INFORMACION DE UNA LISTA
let buffer2 = Buffer.from([1,2,3]);

//CREAMOS UN BUFFER DESDE UN STRING
let buffer = Buffer.from('Hola');

//EL buffer.toString() NOS AYUDA A DESCODIFICAR EL BUFFER
console.log(buffer.toString());
console.log(buffer);
console.log(buffer1);
console.log(buffer1.toString());    //LOS BUFFERS VACIOS SON 00 00 00
console.log(buffer2);


//CREANDO UN ABECEDARIO CON BUFFERS
let abc =  Buffer.alloc(26);
console.log(abc);
for (let i = 0; i < 26 ; i++) {
    abc[i] = i + 97;
}
console.log(abc);
console.log(abc.toString());


//CREANDO UN ABECEDARIO EN MAYUSCULA CON BUFFERS
let abc2 =  Buffer.alloc(26);
console.log(abc2);
for (let i = 0; i < 26 ; i++) {
    abc2[i] = i + 65;
}
console.log(abc2);
console.log(abc2.toString());





