var app = angular.module('index', ['ngRoute', 'ngResource'])
.run(function ($rootScope) {

        $rootScope.accessors = {
            getId: function (row) {
                return row._id
            }
        }

        //$rootScope.$on('$routeChangeStart',
        //    function (event, next, current) {
        //        getUserStatus()
        //            .then(function () {
        //                if (next.access.restricted && !AuthService.isLoggedIn()) {
        //                    $location.path('/login');
        //                    $route.reload();
        //                }
        //            });
        //    });

        //function getUserStatus() {
        //    return $http.get('/auth/status')
        //        // handle success
        //        .success(function (data) {
        //            if (data.status) {
        //                user = true;
        //            } else {
        //                user = false;
        //            }
        //        })
        //        // handle error
        //        .error(function (data) {
        //            user = false;
        //        });
        //};

        $rootScope.authenticated = false;
        $rootScope.currentUser = '---Misafir---';
        $rootScope.currentUserId = '';

        $rootScope.activeUsers = [];

        $rootScope.signout = function () {
            $http.get('auth/signout');
            $rootScope.authenticated = false;
            $rootScope.currentUser = '---Misafir---';
            $rootScope.currentUserId = '';
        };
    })

.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'ctrlAuth'
        })
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'ctrlAuth'
        })
        .when('/signup', {
            templateUrl: 'signup.html',
            controller: 'ctrlAuth'
        })
        .when('/weather', {
            templateUrl: 'weather.html',
            controller: 'ctrlAuth'
        })
        .when('/new', {
            templateUrl: 'news.html',
            controller: 'ctrlAuth'
        })
        .when('/station', {
            templateUrl: 'station.html',
            controller: 'ctrlAuth'
        })
        .when('/city', {
            templateUrl: 'city.html',
            controller: 'ctrlCity'
        })
        .when('/citydetail/:id', {
            templateUrl: 'cityEdit.html',
            controller: 'ctrlCityEdit'
        })
        .when('/citydetail', {
            templateUrl: 'cityEdit.html',
            controller: 'ctrlCityEdit'
        })
        ;
})

.controller('ctrlAuth', function ($scope, $http, $rootScope, $location) {

    console.log('ctrlAuth');

    $scope.user = { username: '', password: '' };
    $scope.errorMessage = '';

    $scope.signup = function () {
        $http.post('/auth/signup', $scope.user).success(function (data) {
            console.log(data);
            if (data.state == 'success') {
                $rootScope.authenticated = true;
                $rootScope.currentUser = data.user.username;
                $rootScope.currentUserId = data.user.id;

                $location.path('/');
            }
            else {
                $scope.errorMessage = data.message;
            }
        });
    };

    $scope.login = function () {
        $http.post('/auth/login', $scope.user).success(function (data) {
            if (data.state == 'success') {
                console.log(data.user.username + ' is logged in. ID: ' + data.user._id);

                $rootScope.authenticated = true;
                $rootScope.currentUser = data.user.username;
                $rootScope.currentUserId = data.user._id;

                $location.path('/');
            }
            else {
                console.log($scope.user.username + ' cannot login');
                $scope.errorMessage = data.message;
            }
        });
    };
})

.controller('ctrlCity', function ($scope, $http, $rootScope, $location, cityService) {
    console.log('ctrlCity');

    $scope.cities = cityService.query();

})

.controller('ctrlCityEdit', function ($scope, $http, $rootScope, $location, cityService, $routeParams) {
    console.log('ctrlCityEdit: ' + $routeParams.id);

    $scope.cityId = $routeParams.id;

    if ($routeParams.id) {
        $scope.city = cityService.get({ id: $routeParams.id }, function () {
            console.log('city loaded:' + $scope.city.name);
        });
    }

    $scope.citySave = function () {
        console.log('city name:' + $scope.city.name);
        if ($routeParams.id) {
            cityService.update({ id: $rootScope.accessors.getId($scope.city) }, $scope.city);

            //cityService.update($scope.city, function () {
                console.log('city is updated');
            //});
        }
        else {
            cityService.save($scope.city, function () {                         
                console.log('city is created');
            });
        }

        $location.path('/city');
        //$state.go('city');
    };

    $scope.cityDelete = function () {
        cityService.remove({ id: $rootScope.accessors.getId($scope.city) }, $scope.city);       
        console.log('city name is deleted:' + $scope.city.name);
        $location.path('/city');
    }; 

})

app.directive('ngConfirmClick', [
    function () {
        return {
            priority: 1,
            //terminal: true,
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                var clickAction = attr.ngClick;
                element.bind('click', function (event) {
                    if (window.confirm(msg)) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
    }])

    .factory('cityService', function ($resource) {
        return $resource('/city/:id', null,
            {
                'update': { method: 'PUT' }
            });
    })
    

;