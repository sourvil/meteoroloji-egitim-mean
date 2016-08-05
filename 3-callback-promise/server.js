console.log('Demo 3 başlıyor...\n');

var fileStream = require('fs');
var fileName = "BilgeAdamBilisimGrubu.png";


for (var i = 0; i < 10; i++) {
    fileStream.readFile(fileName, function (err, data) {
        console.log('Async:' + i.toString() + ' - ' + data.length.toString());
    });


    var fileContent = fileStream.readFileSync(fileName).toString();
    console.log('Sync:' + i.toString() + ' - ' + fileContent.length.toString());

}

console.log('Okuma işlemleri bitti.\n');

