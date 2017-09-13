var app = angular.module('dlAgriIrrifationProApp', ['underscore']);

app.controller("DlAgriIrrifationProController", function ($scope, $http, $parse, _) {
    $scope.district;
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
            console.log(data);

        })

    }

    $scope.fetchDlData = function(form){
        if($scope.incident && $scope.province){
            $scope.is_edit = true;
            $scope.submitted = true;
            $http({
                method: "POST",
                url: '/dl_fetch_summary_disagtn',
                data: angular.toJson({
                    'table_name':  ['Table_5'],
                    'sector': ['agri_irrigation'],
                    'com_data': {
                            'province': $scope.province,
                            'incident': $scope.incident,
                     },
                }),
            }).success(function(data) {
                $scope.dlAgriIrrifationPro = data;
            })
        }
    }

   $scope.convertToInt = function(val1,val2,val3){
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

   $scope.convertTotal = function(val1,val2,val3,val4){
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
        return sum;
    }

   $scope.checkIfNull = function() {
        var isNull = $scope.dlAgriIrrifationPro ? angular.equals({}, $scope.dlAgriIrrifationPro.agri_irrigation.Table_5) : true;
        return isNull;
    }

   $scope.totDmg = function() {
        if(!angular.isUndefined($scope.dlAgriIrrifationPro)) {
            var totDmg1 = 0;
            var totDmg2 = 0;
            var totDmg3 = 0;
            var totDmg4 = 0;
            var totDmg5 = 0;
            var totDmg6 = 0;
            var totDmg7 = 0;
            var totDmg= 0;
            angular.forEach($scope.dlAgriIrrifationPro.agri_irrigation.Table_5, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlMajorTanksDistrict') {
                          totDmg1 = totDmg1 + value_in[0].damages;
                    }
                    if(key == 'DlMediumTanksDistrict') {
                          totDmg2 = totDmg2 + value_in[0].damages;
                    }
                    if(key == 'DlMinorTanksDistrict') {
                          totDmg3 = totDmg3 + value_in[0].damages;
                    }
                    if(key == 'DlAnicutsDistrict') {
                          totDmg4 = totDmg4 + value_in[0].damages;
                    }
                    if(key == 'DlOtherStructuresDistrict') {
                          totDmg5 = totDmg5 + value_in[0].damages;
                    }
                    if(key == 'DlRiverEmbankmntDistrict') {
                          totDmg6 = totDmg6 + value_in[0].damages;
                    }
                    if(key == 'DlBuildingsDistrict') {
                          totDmg7 = totDmg7 + value_in[0].damages;
                    }
                    totDmg = totDmg1 + totDmg2 + totDmg3 + totDmg4 + totDmg5 + totDmg6 + totDmg7;
                    console.log('test',totDmg);
                    })

                })

            return totDmg;
        }
    }

   $scope.totLoss = function() {
        if(!angular.isUndefined($scope.dlAgriIrrifationPro)) {
            var totLos1 = 0;
            var totLos2 = 0;
            var totLos3 = 0;
            var totLos4 = 0;
            var totLos5 = 0;
            var totLos6 = 0;
            var totLos7 = 0;
            var totLos= 0;
            angular.forEach($scope.dlAgriIrrifationPro.agri_irrigation.Table_5, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlLosMajorTanksDistrict') {
                          totLos1 = totLos1 + value_in[0].total_los;
                    }
                    if(key == 'DlLosMediumTanksDistrict') {
                          totLos2 = totLos2 + value_in[0].total_los;
                    }
                    if(key == 'DlLosMinorTanksDistrict') {
                          totLos3 = totLos3 + value_in[0].total_los;
                    }
                    if(key == 'DlLosAnicutsDistrict') {
                          totLos4 = totLos4 + value_in[0].total_los;
                    }
                    if(key == 'DlLosOtherDistrict') {
                          totLos5 = totLos5 + value_in[0].total_los;
                    }
                    if(key == 'DlLosOtherDistrict') {
                          totLos6 = totLos6 + value_in[2].total_los;
                    }
                    if(key == 'DlLosOtherDistrict') {
                          totLos7 = totLos7 + value_in[1].total_los;
                    }
                    totLos = totLos1 + totLos2 + totLos3 + totLos4 + totLos5 + totLos6 + totLos7;
                    console.log('test',totLos);
                    })

                })

            return totLos;
        }
    }



 })
