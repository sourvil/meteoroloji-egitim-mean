console.log('Demo 3 başlıyor...\n');

var fileStream = require('fs');

function readFileAsync(fileName,i) {
    fileStream.readFile(fileName, function (err, data) {
        if (err)
            console.log(err);
        else
            console.log('Async:' + i.toString() + ' - ' + data.toString());
    });
}

function readFileSync(fileName,i) {
    var fileContent = fileStream.readFileSync(fileName).toString();
    console.log('Sync:' + i.toString() + ' - ' + fileContent.toString());
}

for (var i = 0; i < 10; i++) {
    readFileSync("BA_BilisimGrubu.txt", i);

    //readFileAsync("BA_BilisimGrubu.txt", i);

    fileStream.readFile("BA_BilisimGrubu.txt", function (err, data) {
        console.log('Inline Async:' + i.toString() + ' - ' + data.toString());
    });
}




// --------------------------------------------------------------------------------------------


//function readFileAsync_CallbackHell() {
//    fileStream.readFile('BA_BilisimGrubu.txt', function (err, data) {
//        if (err)
//            console.log(err);
//        else {
//            console.log('Async: ' + data.toString());

//            fileStream.readFile('BA_Akademi.txt', function (err, data) {
//                if (err)
//                    console.log(err);
//                else {
//                    console.log('Async: ' + data.toString());
//                    fileStream.readFile('BA_Altyapi.txt', function (err, data) {
//                        if (err)
//                            console.log(err);
//                        else {
//                            console.log('Async: ' + data.toString());
//                            fileStream.readFile('BA_UzmanKaynaklari.txt', function (err, data) {
//                                if (err)
//                                    console.log(err);
//                                else {
//                                    console.log('Async: ' + data.toString());
//                                    fileStream.readFile('BA_Yazilim.txt', function (err, data) {
//                                        if (err)
//                                            console.log(err);
//                                        else {
//                                            console.log('Async: ' + data.toString());

//                                        }
//                                    });

//                                }
//                            });

//                        }
//                    });

//                }
//            });

//        }


//    });
//}

//readFileAsync_CallbackHell();

//var Q = require('q');

//function readFileAsync_Promise(fileName) {
//    var fs_readFile = Q.denodeify(fileStream.readFile);    
//    var promise = fs_readFile(fileName, "utf-8");
//    return promise;
//}

//var promise = readFileAsync_Promise('BA_BilisimGrubu.txt');
//promise
//    .then(console.log, console.error)
//    .then(readFileAsync('BA_Akademi.txt', 1), console.error)
//    .then(readFileAsync('BA_Altyapi.txt', 2), console.error)
//    .then(readFileAsync('BA_UzmanKaynaklari.txt', 3), console.error)
//    .then(readFileAsync('BA_Yazilim.txt', 4), console.error)
//    .then(console.log('Aysnc_promise okuma bitti'), console.error)
    ;


// ------------------------------------------------------------------


//function readFileAsyncByQ_Advanced() {
//    var deferred = Q.defer()
//    fs.readFile(fileName, function (err, data) {
//        if (err)
//            deferred.reject(err) // reject promise
//        else
//            deferred.resolve(data) // fulfills promise
//    })
//    return deferred.promise // return promise
//}

//var promiseAdvanced = readFileAsyncByQ_Advanced();
//promise.then(console.log, console.error).then(console.log('promiseAdvanced bitti'));


console.log('\nDemo 3 bitti.\n');

