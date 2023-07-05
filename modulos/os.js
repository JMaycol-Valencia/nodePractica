const os = require('os');

//podemos visualizar la arquitectura de nuesto equipo
console.log(os.arch());
console.log(os.platform());
//console.log(os.cpus());
console.log(os.cpus().length);
console.log(os.constants);

const SIZE = 1024;

function kb(memoria){return memoria / SIZE}
function mb(memoria){return kb(memoria) / SIZE}
function gb(memoria){return mb(memoria) / SIZE}



console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());

console.log(os.networkInterfaces())
