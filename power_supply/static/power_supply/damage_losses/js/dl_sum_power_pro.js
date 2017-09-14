//Table 6
var app = angular.module('dlpowSupplyProApp', ['underscore']);

app.controller("DlpowSupplyProController", function ($scope,$http,$parse, _) {
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
    $scope.provinces;

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

        if($scope.incident && $scope.province) {
            $scope.is_edit = true;
            $scope.submitted = true;

            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name':  'Table_5',
                    'sector': 'power_supply',
                    'com_data': {
                        'province': $scope.province,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                console.log('load ', data);
                $scope.data = data;
                $scope.dlPowerSupplyPro = data;
            })
        }
    }


    $scope.convertTotal = function(val1,val2,val3,val4){
            var sum = 0;
            sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
            return sum;
        }
    $scope.checkIfNull = function() {
        var isNull = $scope.dlPowerSupplyPro ? angular.equals({}, $scope.dlPowerSupplyPro.power_supply.Table_5) : true;
        return isNull;
    }

     $scope.totDmg = function() {
        if(!angular.isUndefined($scope.data)) {
            var totDmg = 0;
            var totDmgOne = 0;
            var totDmgTwo = 0;
            var totDmgThree = 0;
            angular.forEach($scope.data.power_supply.Table_5, function(value, index) {
              angular.forEach(value,function(value_in, key) {
                   console.log('print',key);
                    if(key == 'TotDmgCebProvince') {
                          totDmgOne = totDmgOne + value_in[0].tot_dmg;
                    }
                    if(key == 'TotDmgPvtProvince') {
                          totDmgTwo = totDmgTwo + value_in[1].tot_dmg;
                    }
                    if(key == 'TotDmgPvtProvince') {
                          totDmgThree = totDmgThree + value_in[0].tot_dmg;
                    }
                totDmg = totDmgOne + totDmgTwo + totDmgThree;
                })
                })
            return totDmg;
        }
    }
     $scope.totLossY1 = function() {
        if(!angular.isUndefined($scope.data)) {
            var totLoss = 0;
            var totLossOne = 0;
            var totLossTwo = 0;
            var totLossThree = 0;
            angular.forEach($scope.data.power_supply.Table_5, function(value, index) {
              angular.forEach(value,function(value_in, key) {
                   console.log('print',key);
                    if(key == 'TotLosCebProvince') {
                          totLossOne = totLossOne + value_in[0].losses_y1;
                    }
                    if(key == 'TotLossesPvtProvince') {
                          totLossTwo = totLossTwo + value_in[1].los_year1;
                    }
                    if(key == 'TotLossesPvtProvince') {
                          totLossThree = totLossThree + value_in[0].los_year1;
                    }
                totLoss = totLossOne + totLossTwo + totLossThree;
                })
                })
            return totLoss;
        }
        }
     $scope.totLossY2= function() {
        if(!angular.isUndefined($scope.data)) {
            var totLoss = 0;
            var totLossOne = 0;
            var totLossTwo = 0;
            var totLossThree = 0;
            angular.forEach($scope.data.power_supply.Table_5, function(value, index) {
              angular.forEach(value,function(value_in, key) {
                   console.log('print',key);
                    if(key == 'TotLosCebProvince') {
                          totLossOne = totLossOne + value_in[0].losses_y2;
                    }
                    if(key == 'TotLossesPvtProvince') {
                          totLossTwo = totLossTwo + value_in[1].los_year2;
                    }
                    if(key == 'TotLossesPvtProvince') {
                          totLossThree = totLossThree + value_in[0].los_year2;
                    }
                totLoss = totLossOne + totLossTwo + totLossThree;
                })
                })
            return totLoss;
        }
    }

 })
