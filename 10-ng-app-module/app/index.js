var index = angular.module('index', ['content'])
.config(function () {
    // provider injection
    console.log("index.config çalıştı");
})
.run(function () {
    // instance injection
    console.log("index.run çalıştı");
})
;