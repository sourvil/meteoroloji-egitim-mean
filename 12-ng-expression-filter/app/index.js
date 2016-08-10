var index = angular.module('index', ['content'])
.config(function () {
    // provider injection
    console.log("index.config çalıştı");
})
.run(function () {
    // instance injection
    console.log("index.run çalıştı");
})


.controller('WeatherCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    console.log("WeatherCtrlController");
    $scope.currentTime = Date.now();
    $scope.orderByFilter = "temperature";
    $scope.limit = 6;

    $scope.cities = [
        {
            "name":"Ankara",
            "temperature":6,
            "description":"Nem yok, sıcaklık fazla"
        },
        {
            "name":"Istanbul",
            "temperature":34,
            "description":"Nem orta, sıcaklık fazla"
        },
        {
            "name":"Mersin",
            "temperature":33,
            "description":"Nem çok, sıcaklık daha da çok"
        },
        {
            "name":"Adana",
            "temperature":1,
            "description":"Burada herkes sıcaktan çıldırmış"
        },
                {
            "name":"Trabzon",
            "temperature":61,
            "description":"Her yer yemyeşil"
        },
                        {
            "name":"Denizli",
            "temperature":20,
            "description":"Sıcak çok, nem orta"
        },

    ];


}])



;