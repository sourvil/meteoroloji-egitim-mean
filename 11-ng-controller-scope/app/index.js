var index = angular.module('index', ['content'])
.config(function () {
    // provider injection
    console.log("index.config çalıştı");
})
.run(function () {
    // instance injection
    console.log("index.run çalıştı");
})

.controller('SeasonCtrl', ['$scope', function ($scope) {
    console.log('SeasonController');

    this.season = 'Sonbahar';

    $scope.setSeason = function (newSeason) {
        console.log('Mevsim artık: ' + newSeason);
        this.season = newSeason;
    };
}])

.controller('WeatherCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    console.log("WeatherCtrlController");
    $scope.weather = 'Ilık';
    $rootScope.indexNo = 0;

    $scope.setWeather = function (newWeather) {
        console.log('Hava artık: ' + newWeather);
        $scope.weather = newWeather;
    };

    $scope.Increase = function () {
        $rootScope.indexNo++;
        console.log('1 arttı:' + $rootScope.indexNo);
    };

}])



;