const http = require('http');

http.createServer(router).listen(3000);

function router(req, res){
    console.log('nueva peticion');
    console.log(req.url);

    switch(req.url){
        case '/hola' :
            res.write('Hola, que tal');
            res.end();
            break;

        default:
            res.write('Error 404: No se encontro la ruta');
            res.end();
    }

    // //cabeceras
    // res.writeHead(201, {'Content-Type':'text/plain'})

    // //escribimos la respuesta para el usuario
    // res.write('hola, ya se usar http de NodeJS')
    // res.end();
}


console.log('Escuchando http desde el puerto 3000')
