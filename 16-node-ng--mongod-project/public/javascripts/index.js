var app = angular.module('index', ['ngRoute', 'ngResource'])
    .run(function ($rootScope) {

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
    });

app.config(function ($routeProvider) {
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
    ;
});

app.controller('ctrlAuth', function ($scope, $http, $rootScope, $location) {

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
});