const moment = require('moment');

let ahora = moment();

//LLAMAMOS A LA VARIABLE CREADA POR MOMENT
console.log(ahora);

//CONVERTIMOS EL VALOS DE FECHA A UN FORMATO MAS ENTENDIBLE
console.log(ahora.toString());

//FORMATEAMOS EL VALOR DE LA FECHA
console.log(ahora.format('YYYY/MM//DD - HH:mm'));