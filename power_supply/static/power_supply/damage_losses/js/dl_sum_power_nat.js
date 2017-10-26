//Table 6
var app = angular.module('dlPowerSupplyNatApp', ['underscore']);

app.controller("DlPowerSupplyNatController", function ($scope,$http,$parse, _) {
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
                    'table_name': 'Table_6',
                    'sector': 'power_supply',
                    'com_data': {
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.data= data;
                $scope.dlPowerSupplySumNat = data;
                console.log($scope.dlPowerSupplySumNat);
            })
        }
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlPowerSupplySumNat ? angular.equals({}, $scope.dlPowerSupplySumNat.power_supply.Table_6) : true;
        return isNull;
    }

    $scope.convertTotal = function(val1, val2, val3, val4){
        var sum = 0;
        sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
        return sum;
    }

    $scope.totDmg = function() {
        if(!angular.isUndefined($scope.dlPowerSupplySumNat)) {
            var totDmg = 0;
            var totDmgOne = 0;
            var totDmgTwo = 0;
            var totDmgThree = 0;
            angular.forEach($scope.dlPowerSupplySumNat.power_supply.Table_6, function(value, index) {
                angular.forEach(value,function(value_in, key) {
                    if(key == 'TotDmgCebNational') {
                        totDmgOne = totDmgOne + value_in[0].tot_dmg;
                    }
                    if(key == 'TotDmgPvtNational') {
                        totDmgTwo = totDmgTwo + value_in[1].tot_dmg;
                    }
                    if(key == 'TotDmgPvtNational') {
                        totDmgThree = totDmgThree + value_in[0].tot_dmg;
                    }
                    totDmg = totDmgOne + totDmgTwo + totDmgThree;
                })
            })
            return totDmg;
        }
    }

    $scope.totLossY1 = function() {
        if(!angular.isUndefined($scope.dlPowerSupplySumNat)) {
            var totLoss = 0;
            var totLossOne = 0;
            var totLossTwo = 0;
            var totLossThree = 0;
            angular.forEach($scope.dlPowerSupplySumNat.power_supply.Table_6, function(value, index) {
                angular.forEach(value,function(value_in, key) {
                    if(key == 'TotLosCebNational') {
                        totLossOne = totLossOne + value_in[0].losses_y1;
                    }
                    if(key == 'TotLossesPvtNational') {
                        totLossTwo = totLossTwo + value_in[1].los_year1;
                    }
                    if(key == 'TotLossesPvtNational') {
                        totLossThree = totLossThree + value_in[0].los_year1;
                    }
                    totLoss = totLossOne + totLossTwo + totLossThree ;
                })
            })
            return totLoss;
        }
    }

    $scope.totLossY2= function() {
        if(!angular.isUndefined($scope.dlPowerSupplySumNat)) {
            var totLoss = 0;
            var totLossOne = 0;
            var totLossTwo = 0;
            var totLossThree = 0;
            angular.forEach($scope.dlPowerSupplySumNat.power_supply.Table_6, function(value, index) {
                angular.forEach(value,function(value_in, key) {
                    if(key == 'TotLosCebNational') {
                        totLossOne = totLossOne + value_in[0].losses_y2;
                    }
                    if(key == 'TotLossesPvtNational') {
                        totLossTwo = totLossTwo + value_in[1].los_year2;
                    }
                    if(key == 'TotLossesPvtNational') {
                        totLossThree = totLossThree + value_in[0].los_year2;
                    }
                    totLoss = totLossOne + totLossTwo + totLossThree;
                })
            })
            return totLoss;
        }
    }

    $scope.totNumAffDom = function() {
        var tot = 0;
        if(!angular.isUndefined($scope.dlPowerSupplySumNat)) {
            angular.forEach($scope.dlPowerSupplySumNat.power_supply.Table_6, function(value, key, index) {
//                console.log('------', key);
                angular.forEach(value, function(value_in, key_in) {
                    if(key_in == 'DlNumAffNational') {
                        tot = tot + parseInt(value_in[0].domestic);
                    }
                })
            })
        }
        return tot;
    }

    $scope.totNumAffInd = function() {
        if(!angular.isUndefined($scope.dlPowerSupplySumNat)) {
            var tot = 0;
            angular.forEach($scope.dlPowerSupplySumNat.power_supply.Table_6, function(value, index) {
                angular.forEach(value,function(value_in, key) {
                    if(key == 'DlNumAffNational') {
                        tot = tot + parseInt(value_in[0].industrial);
                    }
                })
            })
            return tot;
        }
    }

    $scope.totNumAffComm = function() {
        if(!angular.isUndefined($scope.dlPowerSupplySumNat)) {
            var tot = 0;
            angular.forEach($scope.dlPowerSupplySumNat.power_supply.Table_6, function(value, index) {
                angular.forEach(value,function(value_in, key) {
                    if(key == 'DlNumAffNational') {
                        tot = tot + parseInt(value_in[0].commercial);
                    }
                })
            })
            return tot;
        }
    }

    $scope.totNumAffOther = function() {
        if(!angular.isUndefined($scope.dlPowerSupplySumNat)) {
            var tot = 0;
            angular.forEach($scope.dlPowerSupplySumNat.power_supply.Table_6, function(value, index) {
                angular.forEach(value,function(value_in, key) {
                    if(key == 'DlNumAffNational') {
                        tot = tot + parseInt(value_in[0].other);
                    }
                })
            })
            return tot;
        }
    }
 })
