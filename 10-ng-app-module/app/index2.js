var index2 = angular.module('index2',[])
    .config(function(){
        console.log('index2.config çalıştı');
    })
    .run(function(){
        console.log('index2. run çalıştı');
    })
;
