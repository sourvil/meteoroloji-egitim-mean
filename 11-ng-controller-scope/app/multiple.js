angular.module('multiple', [])
.config(function () {
    console.log('multiple.config çalıştı');
})
.run(function () {
    console.log('multiple.run çalıştı');
})
.controller('DedeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.name = 'Dede';
}])
.controller('BabaCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.name = 'Baba';
}])
.controller('OgulCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.name = 'Ogul';
}])



;