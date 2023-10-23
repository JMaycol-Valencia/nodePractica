var tabla = [
    {
        a:1,
        b:'z'
    },
    {
        a:2,
        b:'otra'
    },
];

function funcion1(){
    console.group('Funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Inoformacion de la funcion 1');
    funcion2();
    console.groupEnd('Funcion 1');
}

function funcion2(){
    console.group('Funcion 2');
    console.log('Estamos en la funcion 2');
    console.groupEnd('Funcion 2');
}



console.log('Hola Mundo log');
console.info('Hola Mundo Info');
console.error('Hola Planeta error');
console.warn('Hola Jupiter warn');
console.table(tabla); 
// DEMOSTRACION DE CONSOLE.GROUP
console.group('TITULO');
console.group('Lista');
console.log('1');
console.log('2');
console.group('Sublista');
console.log('a');
console.log('b');
console.groupEnd('Sublista');
console.log('3');
console.groupEnd('Lista');
console.groupEnd('TITULO');
//DEMOSTRACION DE CONSOLE.GROUP EN FUNCIONES
funcion1();
//CONTADOR
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset( ); 
console.count('veces reseteado'); 
console.count('veces reseteado'); 