var app = angular.module('dlSummeryTLNatApp', []);

app.controller("DlSummeryTLNatController", ['$scope','$http',function ($scope,$http) {
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
    $scope.isLoded = false;
    $scope.user_id;

    $scope.fetchDlData = function(form) {
        if($scope.incident) {
            $scope.isLoded = true;
            if(form.$valid) {
                $scope.is_edit = true;
                $scope.submitted = true;
                console.log($scope.incident);
                $http({
                    method: "POST",
                    url: '/dl_fetch_district_disagtn',
                    data: angular.toJson({
                        'table_name':'Table_9',
                        'sector': 'transport_land',
                        'com_data': {
                            'incident': $scope.incident,
                        },
                    }),
                }).success(function(data) {
                    $scope.dlLandTransSumNat = data;
                    console.log($scope.dlLandTransSumNat);
                })
            }
        }
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlLandTransSumNat ? angular.equals({}, $scope.dlLandTransSumNat.transport_land.Table_9) : true;
        return isNull;
    }

    $scope.convertToInt = function(val1,val2,val3) {
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

    $scope.convertTotalInt = function(val1,val2,val3,val4) {
        var sum = parseInt(val1) + parseInt(val2) +parseInt(val3) +parseInt(val4);
        console.log(sum);
        return sum;
    }

    $scope.getTotal = function($index, key) {
        $scope.finaltotalprivate = 0;

        $scope.totaldpub = $scope.totaldpub + ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPubNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPubNational[0].damages ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPubNational[0].damages : 0 ):0) ;

        $scope.totaldpvt = $scope.totaldpvt + parseInt($scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0].tot_damages_pvt ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0].tot_damages_pvt : 0 ):0);

        $scope.totalyear1pub = $scope.totalyear1pub + ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_1 ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_1 : 0 ):0) ;

        $scope.totalyear1pvt = $scope.totalyear1pvt + ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_1_pvt ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_1_pvt : 0 ):0) ;

        $scope.totalyear2pub = $scope.totalyear2pub + ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_2 ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_2 : 0 ):0);

        $scope.totalyear2pvt = $scope.totalyear2pvt + ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_2_pub ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_2_pub : 0):0) ;

        $scope.finaltotalpublic = $scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;

        console.log($scope.finaltotalpublic);

        $scope.finaltotalprivate  =  $scope.totaldpvt + $scope.totalyear1pvt +$scope.totalyear2pvt;
    }

    $scope.sumFunc2 = function(val1=0, val2=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        return parseInt(val1) + parseInt(val2);
    }

    $scope.totDamagesPub = function() {
        if(!angular.isUndefined($scope.dlLandTransSumNat)) {
            var tot_damages = 0;
            angular.forEach($scope.dlLandTransSumNat.transport_land.Table_9, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlGacPvtNational') {
                        tot_damages = tot_damages + $scope.sumFunc2(value_in[0].tot_damages_pvt, 0);
                    }
                })
            })
            return tot_damages;
        }
    }

    $scope.totDamagesPvt = function() {
        if(!angular.isUndefined($scope.dlLandTransSumNat)) {
            var tot_damages = 0;
            angular.forEach($scope.dlLandTransSumNat.transport_land.Table_9, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlGacPubNational') {
                        tot_damages = tot_damages + $scope.sumFunc2(value_in[0].damages, 0);
                    }
                })
            })
            return tot_damages;
        }
    }

    $scope.totYear1LossesPub = function() {
        if(!angular.isUndefined($scope.dlLandTransSumNat)) {
            var year_1 = 0;
            angular.forEach($scope.dlLandTransSumNat.transport_land.Table_9, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlYearsPubNational') {
                        year_1 = year_1 + $scope.sumFunc2(value_in[0].year_1, 0);
                    }
                })
            })
            return year_1;
        }
    }

    $scope.totYear1LossesPvt = function() {
        if(!angular.isUndefined($scope.dlLandTransSumNat)) {
            var year_1_pvt = 0;
            angular.forEach($scope.dlLandTransSumNat.transport_land.Table_9, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlOtherLosPvtNational') {
                        year_1_pvt = year_1_pvt + $scope.sumFunc2(value_in[0].year_1_pvt, 0);
                    }
                })
            })
            return year_1_pvt;
        }
    }

    $scope.totYear2LossesPub = function() {
        if(!angular.isUndefined($scope.dlLandTransSumNat)) {
            var year_2 = 0;
            angular.forEach($scope.dlLandTransSumNat.transport_land.Table_9, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlYearsPubNational') {
                        year_2 = year_2 + $scope.sumFunc2(value_in[0].year_2, 0);
                    }
                })
            })
            return year_2;
        }
    }

    $scope.totYear2LossesPvt = function() {
        if(!angular.isUndefined($scope.dlLandTransSumNat)) {
            var year_2_pub = 0;
            angular.forEach($scope.dlLandTransSumNat.transport_land.Table_9, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlOtherLosPvtNational') {
                        year_2_pub = year_2_pub + $scope.sumFunc2(value_in[0].year_2_pub, 0);
                    }
                })
            })
            return year_2_pub;
        }
    }

    $scope.totTotalPub = function() {
        if(!angular.isUndefined($scope.dlLandTransSumNat)) {
            var totTotalPub = 0;
            angular.forEach($scope.dlLandTransSumNat.transport_land.Table_9, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlGacPubNational') {
                        totTotalPub = totTotalPub + $scope.sumFunc2(value_in[0].damages, 0);
                    }
                    else if(key == 'DlYearsPubNational') {
                        totTotalPub = totTotalPub + $scope.sumFunc2(value_in[0].year_1, 0);
                        totTotalPub = totTotalPub + $scope.sumFunc2(value_in[0].year_2, 0);
                    }
                })
            })
            return totTotalPub;
        }
    }

    $scope.totTotalPvt = function() {
        if(!angular.isUndefined($scope.dlLandTransSumNat)) {
            var totTotalPvt = 0;
            angular.forEach($scope.dlLandTransSumNat.transport_land.Table_9, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlGacPvtNational') {
                        totTotalPvt = totTotalPvt + $scope.sumFunc2(value_in[0].tot_damages_pvt, 0);
                    }
                    else if(key == 'DlOtherLosPvtNational') {
                        totTotalPvt = totTotalPvt + $scope.sumFunc2(value_in[0].year_1_pvt, 0);
                        totTotalPvt = totTotalPvt + $scope.sumFunc2(value_in[0].year_2_pub, 0);
                    }
                })
            })
            return totTotalPvt;
        }
    }
 }])
