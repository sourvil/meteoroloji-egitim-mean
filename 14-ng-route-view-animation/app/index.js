var index = angular.module('index', ['content', 'ngRoute', 'ui.router','ngAnimate'])
//.config(['$routeProvider',
//  function ($routeProvider) {
//      console.log($routeProvider);
//      $routeProvider.
//        when('/season', {
//            templateUrl: 'season.html',
//            controller: 'SeasonCtrl'
//        }).
//        when('/weather', {
//            templateUrl: 'weather.html',
//            controller: 'WeatherCtrl'
//        }).
//        otherwise({
//            redirectTo: '/'
//        });
//  }])
.config(['$urlRouterProvider', '$stateProvider',
  function ($urlRouterProvider, $stateProvider) {

      $stateProvider
          .state("season", {
              url: "/season",
              templateUrl: 'season.html'
          })
          .state("weather", {
              url: "/weather",
              templateUrl: 'weather.html',
          })
      $urlRouterProvider.when('', '/');
  }])

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

    $scope.orderByFilter = "temperature";
    $scope.limit = 6;

    $scope.cities = [
        {
            "name": "Ankara",
            "temperature": 6,
            "description": "Nem yok, sıcaklık fazla"
        },
        {
            "name": "Istanbul",
            "temperature": 34,
            "description": "Nem orta, sıcaklık fazla"
        },
        {
            "name": "Mersin",
            "temperature": 33,
            "description": "Nem çok, sıcaklık daha da çok"
        },
        {
            "name": "Adana",
            "temperature": 1,
            "description": "Burada herkes sıcaktan çıldırmış"
        },
                {
                    "name": "Trabzon",
                    "temperature": 61,
                    "description": "Her yer yemyeşil"
                },
                        {
                            "name": "Denizli",
                            "temperature": 20,
                            "description": "Sıcak çok, nem orta"
                        },

    ];

    $scope.setWeather = function (newWeather) {
        console.log('Hava artık: ' + newWeather);
        $scope.weather = newWeather;
    };

    $scope.Increase = function(){
        $rootScope.indexNo++;
        console.log('1 arttı:' + $rootScope.indexNo);
    };

}])



;