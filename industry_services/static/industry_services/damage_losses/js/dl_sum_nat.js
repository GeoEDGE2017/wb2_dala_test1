//Table 7
var app = angular.module('dl_sum_natApp', ['underscore'])
app.controller('dl_sum_natController', function($scope, $http, $parse, _) {
    $scope.data;
    $scope.incident;
    $scope.provinces;
    $scope.table;
    $scope.provinceTotals = [];
    $scope.data_available;
    $scope.isDataAvailable = false;
    $scope.user_id;
    $scope.dlSumNat;

    $scope.fetchData = function() {
        if($scope.incident){
            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name': 'Table_7',
                    'sector': 'industry_services',
                    'com_data': {
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.dlSumNat = data;
                console.log($scope.dlSumNat);
            }).error(function(err){
                $scope.data = null;
                $scope.provinces = null;
            })
        }
    }

    $scope.grndTotDmgY1Pub = function() {
        if(!angular.isUndefined($scope.dlSumNat)) {
            var grnd_tot_dmg_pub = 0;
            angular.forEach($scope.dlSumNat.industry_services.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DmgTotFrmYear1SumNational') {
                        grnd_tot_dmg_pub = grnd_tot_dmg_pub + value_in[0].tot_damages_pub;
                    }
                })
            })
            return grnd_tot_dmg_pub;
        }
    }

    $scope.grndTotDmgY1Pvt = function() {
        if(!angular.isUndefined($scope.dlSumNat)) {
            var grnd_tot_dmg_pvt = 0;
            angular.forEach($scope.dlSumNat.industry_services.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DmgTotFrmYear1SumNational') {
                        grnd_tot_dmg_pvt = grnd_tot_dmg_pvt + value_in[0].tot_damages_pvt;
                    }
                    else if(key == 'DmgTotInfY1SumNational') {
                        grnd_tot_dmg_pvt = grnd_tot_dmg_pvt + value_in[0].tot_damages_pvt;
                    }
                })
            })
            return grnd_tot_dmg_pvt;
        }
    }

    $scope.grndTotLosY1Pub = function() {
        if(!angular.isUndefined($scope.dlSumNat)) {
            var grnd_tot_los_y1_pub = 0;
            angular.forEach($scope.dlSumNat.industry_services.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosTotFrmSumNational') {
                        grnd_tot_los_y1_pub = grnd_tot_los_y1_pub + value_in[0].los_year1_pub;
                    }
                })
            })
            return grnd_tot_los_y1_pub;
        }
    }

    $scope.grndTotLosY1Pvt = function() {
        if(!angular.isUndefined($scope.dlSumNat)) {
            var grnd_tot_los_y1_pvt = 0;
            angular.forEach($scope.dlSumNat.industry_services.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosTotFrmSumNational') {
                        grnd_tot_los_y1_pvt = grnd_tot_los_y1_pvt + value_in[0].los_year1_pvt;
                    }
                    else if(key == 'LosTotInfY1SumNational') {
                        grnd_tot_los_y1_pvt = grnd_tot_los_y1_pvt + value_in[0].tot_los_year1_pvt;
                    }
                })
            })
            return grnd_tot_los_y1_pvt;
        }
    }

    $scope.grndTotLosY2Pub = function() {
        if(!angular.isUndefined($scope.dlSumNat)) {
            var grnd_tot_los_y2_pub = 0;
            angular.forEach($scope.dlSumNat.industry_services.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosTotFrmSumNational') {
                        grnd_tot_los_y2_pub = grnd_tot_los_y2_pub + value_in[0].los_year2_pub;
                    }
                })
            })
            return grnd_tot_los_y2_pub;
        }
    }

    $scope.grndTotLosY2Pvt = function() {
        if(!angular.isUndefined($scope.dlSumNat)) {
            var grnd_tot_los_y2_pvt = 0;
            angular.forEach($scope.dlSumNat.industry_services.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosTotFrmSumNational') {
                        grnd_tot_los_y2_pvt = grnd_tot_los_y2_pvt + value_in[0].los_year2_pvt;
                    }
                    else if(key == 'LosTotInfY2SumNational') {
                        grnd_tot_los_y2_pvt = grnd_tot_los_y2_pvt + value_in[0].tot_los_year2_pvt;
                    }
                })
            })
            return grnd_tot_los_y2_pvt;
        }
    }
})
