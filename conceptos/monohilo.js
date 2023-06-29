console.log("Hola Mundo");

let i = 0;
setInterval(function () {
  console.log("Sigo Activo");
  console.log(i);
  i++;

  //FORZAMOS UN ERROR
  // if( i === 5){
  //     var a = 3 + z;
  // }
}, 1000);

console.log("segundo proceso o tarea");
