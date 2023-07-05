const sharp = require('sharp');

sharp('original.jpg')
    .resize(80)     //reescala el tamaño de la imagen
    .grayscale()    //edita a blanco y negro la imagen
    .toFile('maycol.jpg');      //reenombra la imagen