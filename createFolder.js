var fs = require('fs');
var dir1 = 'C:/Users/JUAN JOSE/node/models';
var dir2 = 'C:/Users/JUAN JOSE/node/models/v1';

if(!fs.existsSync(dir1)){
    fs.mkdirSync(dir1);
    console.log("La primer carpeta se creo de forma correcta");
    if(!fs.existsSync(dir2)){
        fs.mkdirSync(dir2);
        console.log("La segunda carpeta se creo de forma correcta");
    }
}