console.log('Demo 2 başlıyor...\n');

var fileStream = require('fs');
var fileName = "BilgeAdamBilisimGrubu.png";


fileStream.readFile(fileName, function (err, data) {
    console.log('Async:' + i.toString() + ' - ' + data.length.toString());
});


var fileContent = fileStream.readFileSync(fileName).toString();
console.log('Sync:' + i.toString() + ' - ' + fileContent.length.toString());



