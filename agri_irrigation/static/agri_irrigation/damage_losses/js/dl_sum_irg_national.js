//table 6
var app = angular.module('dlAgriIrrifationNatApp', ['underscore']);

app.controller("dlAgriIrrifationNatController", function ($scope,$http,$parse, _) {
    $scope.National;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totaldamge = null;
    $scope.grnddamage = null;
    $scope.totalLoss = null;
    $scope.grndLoss = null;
    $scope.grndfinaltotal = null;
    $scope.finalgrandtot = null;
    $scope.user_id;

    $scope.fetchDlData = function(form) {
        if($scope.incident){
            $scope.is_edit = true;
            $scope.submitted = true;
            $http({
                method: "POST",
                url: '/dl_fetch_summary_disagtn',
                data: angular.toJson({
                    'table_name':  ['Table_6'],
                    'sector': ['agri_irrigation'],
                    'com_data': {
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.dlagriIrrigationNat = data;
                console.log($scope.dlagriIrrigationNat);
            })
        }
    }

    $scope.convertToInt = function(val1,val2,val3) {
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlagriIrrigationNat ? angular.equals({}, $scope.dlagriIrrigationNat.agri_irrigation.Table_6) : true;
        return isNull;
    }

    $scope.totDmg = function() {
        if(!angular.isUndefined($scope.dlagriIrrigationNat)) {
            var totDmg1 = 0;
            var totDmg2 = 0;
            var totDmg3 = 0;
            var totDmg4 = 0;
            var totDmg5 = 0;
            var totDmg6 = 0;
            var totDmg7 = 0;
            var totDmg = 0;

            angular.forEach($scope.dlagriIrrigationNat.agri_irrigation.Table_6, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlMajorTanksNational') {
                        totDmg1 = totDmg1 + value_in[0].damages;
                    }
                    if(key == 'DlMediumTanksNational') {
                        totDmg2 = totDmg2 + value_in[0].damages;
                    }
                    if(key == 'DlMinorTanksNational') {
                        totDmg3 = totDmg3 + value_in[0].damages;
                    }
                    if(key == 'DlAnicutsNational') {
                        totDmg4 = totDmg4 + value_in[0].damages;
                    }
                    if(key == 'DlOtherStructuresNational') {
                        totDmg5 = totDmg5 + value_in[0].damages;
                    }
                    if(key == 'DlRiverEmbankmntNational') {
                        totDmg6 = totDmg6 + value_in[0].damages;
                    }
                    if(key == 'DlBuildingsNational') {
                        totDmg7 = totDmg7 + value_in[0].damages;
                    }
                    totDmg =  totDmg1 + totDmg2 + totDmg3 + totDmg4 + totDmg5 + totDmg6 + totDmg7;
                })
            })
            return totDmg;
        }
    }

    $scope.totLoss = function() {
        if(!angular.isUndefined($scope.dlagriIrrigationNat)) {
            var totLos1 = 0;
            var totLos2 = 0;
            var totLos3 = 0;
            var totLos4 = 0;
            var totLos5 = 0;
            var totLos6 = 0;
            var totLos7 = 0;
            var totLos = 0;

            angular.forEach($scope.dlagriIrrigationNat.agri_irrigation.Table_6, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlLosMajorTanksNational') {
                        totLos1 = totLos1 + value_in[0].total_los;
                    }
                    if(key == 'DlLosMediumTanksNational') {
                        totLos2 = totLos2 + value_in[0].total_los;
                    }
                    if(key == 'DlLosMinorTanksNational') {
                        totLos3 = totLos3 + value_in[0].total_los;
                    }
                    if(key == 'DlLosAnicutsNational') {
                        totLos4 = totLos4 + value_in[0].total_los;
                    }
                    if(key == 'DlLosOtherNational') {
                        totLos5 = totLos5 + value_in[0].total_los;
                    }
                    if(key == 'DlLosRiverEmbankmntNational') {
                        totLos6 = totLos6 + value_in[0].total_los;
                    }
                    if(key == 'DlLosBuildingsNational') {
                        totLos7 = totLos7 + value_in[0].total_los;
                    }
                    totLos = totLos1 + totLos2 + totLos3 + totLos4 + totLos5 + totLos6 + totLos7;
                })
            })
            return totLos;
        }
    }
 })
