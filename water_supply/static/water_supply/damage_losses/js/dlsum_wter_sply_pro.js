//Table 6
var app = angular.module('dlWaterSupplyProApp', ['underscore']);

app.controller("DlWaterSupplyProController", function ($scope,$http,$parse, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totalDamages = null;
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
    $scope.provinces;


        $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }
        if($scope.incident && $scope.province) {
            $scope.fetchData();
        }
    }

    function fetchProvinces(){
        $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                    'incident': $scope.incident
                   }),
        }).success(function(data) {
            $scope.provinces = data;
            $scope.province = null;
        })

    }

    $scope.fetchData = function(){
        if($scope.province && $scope.incident){
            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name':  'Table_6',
                    'sector': 'water_supply',
                    'com_data': {
                        'province': $scope.province,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {

                console.log('load ', data);
                $scope.data = data;
                $scope.dlWaterSupplyPro = data;
            })

        }
        }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlWaterSupplyPro ? angular.equals({}, $scope.dlWaterSupplyPro.water_supply.Table_6) : true;
        return isNull;
    }

    $scope.totNoOfCommercialWaterSupply = function() {
        if(!angular.isUndefined($scope.dlWaterSupplyPro)) {
            var totDmg = 0;
            angular.forEach($scope.dlWaterSupplyPro.water_supply.Table_6, function(value, index) {
            console.log('test',value);
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlcwTotDmgProvince') {
                          totDmg = totDmg + value_in[0].dlcw_tot_dmg;

                    }
                    })
                })
            return totDmg;
        }
    }


    $scope.totCommercialWaterSupplyLosYear1 = function() {
        if(!angular.isUndefined($scope.dlWaterSupplyPro)) {
            var totLossY1 = 0;
            angular.forEach($scope.dlWaterSupplyPro.water_supply.Table_6, function(value, index) {
            console.log('test',value);
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlcwLosOther') {
                          totLossY1 = totLossY1 + value_in[3].tot_los_year_1;
                    }
                    })
                })
            return totLossY1;
        }
    }

    $scope.totCommercialWaterSupplyLosYear2 = function() {
        if(!angular.isUndefined($scope.dlWaterSupplyPro)) {
            var totLossY2 = 0;
            angular.forEach($scope.dlWaterSupplyPro.water_supply.Table_6, function(value, index) {
            console.log('test',value);
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlcwLosOther') {
                          totLossY2 = totLossY2 + value_in[3].tot_los_year_2;
                    }
                    })
                })
            return totLossY2;
        }
    }

    $scope.totRuralWaterSupplyDmg = function() {
        if(!angular.isUndefined($scope.dlWaterSupplyPro)) {
            var totDmg = 0;
            angular.forEach($scope.dlWaterSupplyPro.water_supply.Table_6, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlRuralTotDmgDistrict') {
                          totDmg = totDmg + value_in[0].tot_damages;
                    }
                    })
                })
            return totDmg;
        }
    }

    $scope.totRuralWaterSupplyLossY1 = function() {
        if(!angular.isUndefined($scope.dlWaterSupplyPro)) {
            var totLos = 0;
            angular.forEach($scope.dlWaterSupplyPro.water_supply.Table_6, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlRuralTotLosDistrict') {
                          totLos = totLos + value_in[0].tot_los;
                    }
                    })
                })
            return totLos;
        }
    }



})
