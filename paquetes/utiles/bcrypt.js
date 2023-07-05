const bcrypt = require('bcrypt');

const contra = "Hola Maycol";

//EL METODO PARA CIFRAR EL CONTRASEÑA ES HASH
const contraCifrada = bcrypt.hash(contra, 5, function(err, hash){
    console.log(hash);
    //DENTRO EL PAQUETE TENDREMOS METODOS UTILES COMO EL DE COMPARAR UN HASH Y UNA CONTRASEÑA
    bcrypt.compare(contra,hash, function(err, res){
        if(err){
            console.log(err);
        }else{
            console.log('No hubo ningun error');
        }
        console.log(res);
    });
});

console.log(contra);
contraCifrada;