angular.module('content', ['index'])
.config(function () {
    console.log('content.config çalıştı');
})
.run(function () {
    console.log('content.run çalıştı');
})
;