angular.module('directives', [])

.directive("meteorDatetimeElement", [function(){
        return {
            restrict: "E",
            templateUrl: "meteorDatetime.html"
        }
}])
.directive("meteorDatetimeAttribute", [function () {
    return {
        restrict: "A",
        template: "<h2>meteorDatetimeAttribute tarafindan cikti aliniyor</h2>",
        link: function (scope, element, attrs) {
                element.css('display', 'block');
        }
    }
}])

.directive("meteorDatetimeClass", [function () {
    return {
        restrict: "C",
        template: "<h2>meteorDatetimeClass tarafindan cikti aliniyor",
    }
}])


.controller('DirectiveElementCtrl', ['$scope', function ($scope) {
    console.log('DirectiveElementCtrl');

    $scope.DirectiveElementTitle = 'Meteoroloji Direktifleri';

}])
;