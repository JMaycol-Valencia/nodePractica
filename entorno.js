// let saludo = 'Hola';
let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'sin web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);

/*ESTA SERA LA FORMA CORRECTA DE DAR VALORES A VARIABLES DE ENTORNO
$ NOMBRE=maycol node entorno.js
Hola maycol
*/