var app = angular.module('dlSummeryTLProApp', []);

app.controller("DlSummeryTLProController", ['$scope','$http',function ($scope,$http) {
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
    $scope.provinces;

    // get relevant damage_losses data for calculations
    $scope.changedValue = function getBsData(selectedValue) {
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

    $scope.fetchDlData = function() {
        if($scope.incident && $scope.province) {
            $scope.is_edit = true;
            $scope.submitted = true;

            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name':  'Table_8',
                    'sector': 'transport_land',
                    'com_data': {
                        'province': $scope.province,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                console.log('load ', data);
                $scope.dlLandTransSumPro = data;
            })
        }
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlLandTransSumPro ? angular.equals({}, $scope.dlLandTransSumPro.transport_land.Table_8) : true;
        return isNull;
    }

    $scope.convertToInt = function(val1,val2,val3){
        if(val1 || val2 || val3) {
            var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
            return sum;
        }
    }

    $scope.convertTotal = function(val1,val2,val3,val4){
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
        return sum;
    }

    $scope.getTotal = function($index,key) {
         $scope.finaltotalprivate = 0;

         $scope.totaldpub = $scope.totaldpub + ($scope.dlLandTransSumPro.transport_land.Table_8[key].DlGacPubProvince[0]?
                         ($scope.dlLandTransSumPro.transport_land.Table_8[key].DlGacPubProvince[0].damages ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlGacPubProvince[0].damages : 0 ):0);

         $scope.totaldpvt = $scope.totaldpvt + parseInt(
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlGacPvtProvince[0]?($scope.dlLandTransSumPro.transport_land.Table_8[key].DlGacPvtProvince[0].tot_damages_pvt ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlGacPvtProvince[0].tot_damages_pvt : 0 ):0);

         $scope.totalyear1pub = $scope.totalyear1pub + ($scope.dlLandTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0] ?
                         ($scope.dlLandTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0].year_1 ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0].year_1 : 0 ):0) ;

         $scope.totalyear1pvt = $scope.totalyear1pvt + ($scope.dlLandTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0]?
                         ($scope.dlLandTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0].year_1_pvt ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0].year_1_pvt : 0 ) :0);

         $scope.totalyear2pub = $scope.totalyear2pub + ($scope.dlLandTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0]?(
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0].year_2 ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0].year_2 : 0):0) ;

         $scope.totalyear2pvt = $scope.totalyear2pvt + ($scope.dlLandTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0]?
                         ($scope.dlLandTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0].year_2_pub ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0].year_2_pub : 0):0) ;

         $scope.finaltotalpublic = $scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;

         $scope.finaltotalprivate =$scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;
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
        if(!angular.isUndefined($scope.dlLandTransSumPro)) {
            var tot_damages = 0;
            angular.forEach($scope.dlLandTransSumPro.transport_land.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlGacPubProvince') {
                        tot_damages = tot_damages + $scope.sumFunc2(value_in[0].damages, 0);
                    }
                })
            })
            return tot_damages;
        }
    }

    $scope.totDamagesPvt = function() {
        if(!angular.isUndefined($scope.dlLandTransSumPro)) {
            var tot_damages = 0;
            angular.forEach($scope.dlLandTransSumPro.transport_land.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlGacPvtProvince') {
                        tot_damages = tot_damages + $scope.sumFunc2(value_in[0].tot_damages_pvt, 0);
                    }
                })
            })
            return tot_damages;
        }
    }

    $scope.totYear1LossesPub = function() {
        if(!angular.isUndefined($scope.dlLandTransSumPro)) {
            var year_1 = 0;
            angular.forEach($scope.dlLandTransSumPro.transport_land.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlYearsPubProvince') {
                        year_1 = year_1 + $scope.sumFunc2(value_in[0].year_1, 0);
                    }
                })
            })
            return year_1;
        }
    }

    $scope.totYear1LossesPvt = function() {
        if(!angular.isUndefined($scope.dlLandTransSumPro)) {
            var year_1_pvt = 0;
            angular.forEach($scope.dlLandTransSumPro.transport_land.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlOtherLosPvtDistrict') {
                        year_1_pvt = year_1_pvt + $scope.sumFunc2(value_in[0].year_1_pvt, 0);
                    }
                })
            })
            return year_1_pvt;
        }
    }

    $scope.totYear2LossesPub = function() {
        if(!angular.isUndefined($scope.dlLandTransSumPro)) {
            var year_2 = 0;
            angular.forEach($scope.dlLandTransSumPro.transport_land.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlYearsPubProvince') {
                        year_2 = year_2 + $scope.sumFunc2(value_in[0].year_2, 0);
                    }
                })
            })
            return year_2;
        }
    }

    $scope.totYear2LossesPvt = function() {
        if(!angular.isUndefined($scope.dlLandTransSumPro)) {
            var year_2_pub = 0;
            angular.forEach($scope.dlLandTransSumPro.transport_land.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlOtherLosPvtDistrict') {
                        year_2_pub = year_2_pub + $scope.sumFunc2(value_in[0].year_2_pub, 0);
                    }
                })
            })
            return year_2_pub;
        }
    }

    $scope.totTotalPub = function() {
        if(!angular.isUndefined($scope.dlLandTransSumPro)) {
            var totTotalPub = 0;
            angular.forEach($scope.dlLandTransSumPro.transport_land.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlGacPubProvince') {
                        totTotalPub = totTotalPub + $scope.sumFunc2(value_in[0].damages, 0);
                    }
                    else if(key == 'DlYearsPubProvince') {
                        totTotalPub = totTotalPub + $scope.sumFunc2(value_in[0].year_1, 0);
                        totTotalPub = totTotalPub + $scope.sumFunc2(value_in[0].year_2, 0);
                    }
                })
            })
            return totTotalPub;
        }
    }

    $scope.totTotalPvt = function() {
        if(!angular.isUndefined($scope.dlLandTransSumPro)) {
            var totTotalPvt = 0;
            angular.forEach($scope.dlLandTransSumPro.transport_land.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlGacPvtProvince') {
                        totTotalPvt = totTotalPvt + $scope.sumFunc2(value_in[0].tot_damages_pvt, 0);
                    }
                    else if(key == 'DlOtherLosPvtDistrict') {
                        totTotalPvt = totTotalPvt + $scope.sumFunc2(value_in[0].year_1_pvt, 0);
                        totTotalPvt = totTotalPvt + $scope.sumFunc2(value_in[0].year_2_pub, 0);
                    }
                })
            })
            return totTotalPvt;
        }
    }
 }])
