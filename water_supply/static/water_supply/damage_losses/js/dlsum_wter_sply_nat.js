//Table 7
var app = angular.module('dlWaterSupplyNatApp', ['underscore']);

app.controller("DlWaterSupplyNatController", function ($scope,$http,$parse, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totaldpub = null;
    $scope.totaldpvt = null;
    $scope.totalyear1pub = null;
    $scope.totalyear1pvt = null;
    $scope.totalyear2pub = null;
    $scope.totalyear2pvt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    // declaring total variables
    $scope.total_num_affected = 0;
    $scope.user_id;

    $scope.fetchDlData = function() {
        if($scope.incident) {
            $scope.is_edit = true;
            $scope.submitted = true;

            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name':'Table_7',
                    'sector': 'water_supply',
                    'com_data': {
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                console.log('load ', data);
                $scope.data= data;
                $scope.dlWaterSupplySumNat = data;
            })
        }
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlWaterSupplySumNat ? angular.equals({}, $scope.dlWaterSupplySumNat.water_supply.Table_7) : true;
        return isNull;
    }

    $scope.totNoOfCommercialWaterSupply = function() {
        if(!angular.isUndefined($scope.dlWaterSupplySumNat)) {
            var totDmg = 0;
            angular.forEach($scope.dlWaterSupplySumNat.water_supply.Table_7, function(value, index) {
            angular.forEach(value, function(value_in, key) {
            console.log('test',key);
                    if(key == 'DlcwDmgNational') {
                          totDmg = totDmg + value_in[0].sum;
                    }
                    })
                })
            return totDmg;
        }
    }

    $scope.totCommercialWaterSupplyLosYear1 = function() {
        if(!angular.isUndefined($scope.dlWaterSupplySumNat)) {
            var totLossY1 = 0;
            angular.forEach($scope.dlWaterSupplySumNat.water_supply.Table_7, function(value, index) {
            console.log('test',value);
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlcwLosNational') {
                          totLossY1 = totLossY1 + value_in[0].tot_los_year1;
                    }
                    })
                })
            return totLossY1;
        }
    }

    $scope.totCommercialWaterSupplyLosYear2 = function() {
        if(!angular.isUndefined($scope.dlWaterSupplySumNat)) {
            var totLossY2 = 0;
            angular.forEach($scope.dlWaterSupplySumNat.water_supply.Table_7, function(value, index) {
            console.log('test',value);
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlcwLosNational') {
                          totLossY2 = totLossY2 + value_in[0].tot_los_year2;
                   }
                    })
                })
            return totLossY2;
            }
        }

    $scope.totRuralWaterSupplyDmg = function() {
        if(!angular.isUndefined($scope.dlWaterSupplySumNat)) {
            var totDmg = 0;
            angular.forEach($scope.dlWaterSupplySumNat.water_supply.Table_7, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlRuralDmgNational') {
                          totDmg = totDmg + value_in[0].tot_damages;
                    }
                    })
                })
            return totDmg;
        }
    }

    $scope.totRuralWaterSupplyLossY1 = function() {
        if(!angular.isUndefined($scope.dlWaterSupplySumNat)) {
            var totLos = 0;
            angular.forEach($scope.dlWaterSupplySumNat.water_supply.Table_7, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlRuralLosNational') {
                          totLos = totLos + value_in[0].tot_los;
                    }
                    })
                })
            return totLos;
        }
    }

})
