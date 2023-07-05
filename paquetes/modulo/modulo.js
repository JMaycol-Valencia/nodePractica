
function saludar(){
    console.log('Hola buenos dias , como esta ?');
}

//EXPORTAR INDIVIDUALMENTE
//module.exports = saludar;

//EXPORTAR COMO OBJETO
module.exports = {
    saludar,
    propiedad_uno : "Maycol valencia"   
};