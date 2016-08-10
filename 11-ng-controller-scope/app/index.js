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

        $scope.season = 'İlkbahar';
        this.season = 'Sonbahar';

        $scope.setSeason = function (newSeason) {
            console.log('Mevsim artık: ' + newSeason);
            $scope.season = newSeason;
        };
}])

.controller('WeatherCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    console.log("WeatherCtrlController");
    $scope.weather = 'Ilık';
    $rootScope.currentTime = Date.now();

    $scope.setWeather = function (newWeather) {
        console.log('Hava artık: ' + newWeather);
        $scope.weather = newWeather;
    };

    $scope.resetTime = function(){
        console.log('resetTime');
        $rootScope.currentTime = Date.now();

    };

}])



;