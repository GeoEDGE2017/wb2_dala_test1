//Table 6
var app = angular.module('dlminingProApp', ['underscore']);

app.controller("DlminingProController", function ($scope,$http,$parse, _) {
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
    $scope.total_num_affected = 0;
    $scope.user_id;
    $scope.totaldpub = 0;
    $scope.provinces;

    // get relevant damage_losses data for calculations
    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }
        if($scope.incident && $scope.province) {
            $scope.fetchDlData();
        }
    }

    function fetchProvinces() {
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

    $scope.fetchDlData = function(form) {
        if($scope.incident && $scope.province){
            $scope.is_edit = true;
            $scope.submitted = true;

            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name':  'Table_7',
                    'sector': 'mining',
                    'com_data': {
                        'province': $scope.province,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.data = data;
                $scope.dlMiningPro = data;
                console.log($scope.dlMiningPro);
            })
        }
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlMiningPro ? angular.equals({}, $scope.dlMiningPro.mining.Table_7) : true;
        return isNull;
    }

    $scope.getTotal = function($index,key) {
        $scope.totalyear1pvt = $scope.totalyear1pvt +
                         $scope.dlMiningPro.mining.Table_7[key].DloLosProvince[1].los_year1+
                         $scope.dlMiningPro.mining.Table_7[key].DlaLosProvince[0].los_year1;

        $scope.totalyear2pub = $scope.totalyear2pub +
                         $scope.dlMiningPro.mining.Table_7[key].DloLosProvince[0].los_year2 ;

        $scope.totalyear2pvt =$scope.totalyear2pvt +
                         $scope.dlMiningPro.mining.Table_7[key].DloLosProvince[1].los_year2 +
                         $scope.dlMiningPro.mining.Table_7[key].DlaLosProvince[0].los_year2;

        $scope.finaltotalpublic = $scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub  + $scope.totalyear2pub;

        $scope.finaltotalprivate = $scope.finaltotalprivate + $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;
    }

    $scope.totDmgPub = function() {
        if(!angular.isUndefined($scope.dlMiningPro)) {
            var totDmg = 0;
            angular.forEach($scope.dlMiningPro.mining.Table_7, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DloDmgProvince') {
                          totDmg = totDmg + value_in[1].tot_damages;
                    }
                    })
                })
            return totDmg;
        }
    }

    $scope.totDmgPvt = function() {
        if(!angular.isUndefined($scope.dlMiningPro.mining.Table_7)) {
            var totLosOne = 0;
            var totLosTwo = 0;
            var totLos = 0;
            angular.forEach($scope.dlMiningPro.mining.Table_7, function(value, key) {
                console.log('*** ', key);
                angular.forEach(value, function(value_in, key_in) {
                    console.log(key_in, ' --- ', value_in);
                    if(key_in == 'DloDmgProvince') {
                        console.log('DloDmgProvince ', value_in);
                        totLosOne = totLosOne + value_in[0].tot_damages;
                    }
                    if(key_in == 'DlaDmgProvince') {
//                        console.log(value_in.length);
//                        console.log(!angular.isUndefined(value_in));
//                        console.log(value_in.length != 0);
                        if(value_in.length != 0) {
                            console.log('DlaDmgProvince ', value_in);
                            totLosTwo = totLosTwo + value_in[0].tot_damages;
                        }
                    }
                })
                totLos = totLosOne + totLosTwo;
            })
            console.log("------------");
            return totLos;
        }
    }

    $scope.totLosY1Pub = function() {
        var totDmg = 0;
        if(!angular.isUndefined($scope.dlMiningPro)) {
            angular.forEach($scope.dlMiningPro.mining.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DloLosProvince') {
                        totDmg = totDmg + value_in[1].los_year1;
                    }
                })
            })
        }
        return totDmg;
    }

    $scope.totLosY1Pvt = function() {
        var totLos = 0;
        if(!angular.isUndefined($scope.dlMiningPro)) {
            var totLosOne = 0;
            var totLosTwo = 0;
            angular.forEach($scope.dlMiningPro.mining.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DloLosProvince') {
                        totLosOne = totLosOne + value_in[0].los_year1;
                    }
                    if(key == 'DlaLosProvince') {
                        totLosTwo = totLosTwo + value_in[0].los_year1;
                    }
                })
                totLos = totLosOne + totLosTwo;
            })
        }
        return totLos;
    }

    $scope.totLosY2Pub = function() {
        var totDmg = 0;
        if(!angular.isUndefined($scope.dlMiningPro)) {
            angular.forEach($scope.dlMiningPro.mining.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DloLosProvince') {
                        totDmg = totDmg + value_in[1].los_year2;
                    }
                })
            })
        }
        return totDmg;
    }

    $scope.totLosY2Pvt = function() {
        var totLos = 0;
        if(!angular.isUndefined($scope.dlMiningPro)) {
            var totLosOne = 0;
            var totLosTwo = 0;
            angular.forEach($scope.dlMiningPro.mining.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DloLosProvince') {
                        totLosOne = totLosOne + value_in[0].los_year2;
                    }
                    if(key == 'DlaLosProvince') {
                        totLosTwo = totLosTwo + value_in[0].los_year2;
                    }
                })
                totLos = totLosOne + totLosTwo;
            })
        }
        return totLos;
    }
})
