var index = angular.module('index', [])
.config(function () {
    console.log("index.config çalıştı");
})
.run(function () {
    console.log("index.run çalıştı");
})



.controller('SeasonCtrl', ['$scope', 'SeasonService','SeasonFactory', function ($scope, SeasonService, SeasonFactory) {
    console.log('SeasonController');

    $scope.serviceSeason = "İlkbahar";
    $scope.factorySeason = "Sonbahar";

    $scope.GetMonthsByService = function () {
        $scope.serviceMonths = SeasonService.months($scope.serviceSeason);
    };

    $scope.GetMonthsByFactory = function () {
        $scope.factoryMonths = SeasonFactory.months($scope.factorySeason);
    };

}])

.service('SeasonService', function () {
    this.months = function (season) {

        console.log('SeasonService/seasonMonths:' + season);

        var monthDetail = "";
        switch (season) {
            case 'Sonbahar':
                monthDetail = "Eylül-Ekim-Kasım";
                break;
            case 'İlkbahar':
                monthDetail = "Mart-Nisan-Mayıs";
                break;
            case 'Yaz':
                monthDetail = "Haziran-Temmuz-Ağustos";
                break;
            case "Kış":
                monthDetail = "Aralık-Ocak-Şubat";
                break;
            default:
                monthDetail = "Mevsim tespit edilemedi";
        }
        return "Aylar: " + monthDetail;
    };
})

.factory('SeasonFactory', function () {
    return {
        months: function(season){
            console.log('SeasonFactory/seasonMonths:' + season);

            var monthDetail = "";
            switch (season) {
                case 'Sonbahar':
                    monthDetail = "Eylül-Ekim-Kasım";
                    break;
                case 'İlkbahar':
                    monthDetail = "Mart-Nisan-Mayıs";
                    break;
                case 'Yaz':
                    monthDetail = "Haziran-Temmuz-Ağustos";
                    break;
                case "Kış":
                    monthDetail = "Aralık-Ocak-Şubat";
                    break;
                default:
                    monthDetail = "Mevsim tespit edilemedi";
            }
            return "Aylar: " + monthDetail;
        }
    };       
})
;
