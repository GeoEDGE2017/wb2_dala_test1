var app = angular.module('dlAgriLivestockProApp', []);

app.controller("DlAgriLivestockroController", ['$scope','$http',function ($scope,$http) {
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
    $scope.total_num_affected = 0;
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
        })
    }

    $scope.fetchDlData = function(form){
       if($scope.incident && $scope.province){
        $scope.is_edit = true;
        $scope.submitted = true;
            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                'table_name':  'Table_5',
                'sector': 'agri_livestock',
                'com_data': {
                        'province': $scope.province,
                        'incident': $scope.incident,
                      },
                }),
            }).success(function(data) {
                console.log('load ', data);
                $scope.dlAgriLivestockPro = data;
            })
        }

    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlAgriLivestockPro ? angular.equals({}, $scope.dlAgriLivestockPro.agri_livestock.Table_5) : true;
        return isNull;
    }

//    $scope.getTotal = function($index,key) {
//
//         $scope.totaldpub = ($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPubProvince[$index] ? (
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPubProvince[$index].damages ?
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPubProvince[$index].damages : 0 ): 0) ;
//
//         $scope.totaldpvt = ($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPvtProvince[$index] ? (
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPvtProvince[$index].damages ?
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPvtProvince[$index].damages : 0 ) : 0) ;
//
//         $scope.totalyear1pub = ($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index] ? (
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index].los_year_1 ?
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index].los_year_1 : 0 ) : 0) ;
//
//         $scope.totalyear1pvt =
//         ($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index] ? (
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index].los_year_1 ?
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index].los_year_1 : 0 ) : 0 );
//
//         $scope.totalyear2pub =  ($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index] ? (
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index].los_year_2 ?
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index].los_year_2 : 0 ) : 0) ;
//
//         $scope.totalyear2pvt =($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index] ? (
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index].los_year_2 ?
//                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index].los_year_2 : 0 ) : 0);
//
//
//         $scope.finaltotalpublic =  $scope.totaldpub + $scope.totalyear1pub  + $scope.totalyear2pub;
//
//         $scope.finaltotalprivate = $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;
//
//
//    }

    $scope.totDmgPub = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockPro)) {
            var totDmgPub = 0;
            angular.forEach($scope.dlAgriLivestockPro.agri_livestock.Table_5, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpNdaPubProvince') {
                          totDmgPub = totDmgPub + value_in[0].damages;
                    }
                    })
                })
            return totDmgPub;
        }
    }

    $scope.totDmgPvt = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockPro)) {
            var totDmgPvt = 0;
            angular.forEach($scope.dlAgriLivestockPro.agri_livestock.Table_5, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpNdaPvtProvince') {
                          totDmgPvt = totDmgPvt + value_in[0].damages;
                    }
                    })
                })
            return totDmgPvt;
        }
    }

    $scope.totLosPubY1 = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockPro)) {
            var totLosPubY1= 0;
            angular.forEach($scope.dlAgriLivestockPro.agri_livestock.Table_5, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpLosPubProvince') {
                          totLosPubY1 = totLosPubY1 + value_in[0].los_year_1;
                    }
                    })
                })
            return totLosPubY1;
        }
    }

    $scope.totLosPvtY1 = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockPro)) {
            var totLosPvtY1= 0;
            angular.forEach($scope.dlAgriLivestockPro.agri_livestock.Table_5, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpLosPvtProvince') {
                          totLosPvtY1 = totLosPvtY1 + value_in[0].los_year_1;
                    }
                    })
                })
            return totLosPvtY1;
        }
    }

    $scope.totLosPubY2 = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockPro)) {
            var totLosPubY2= 0;
            angular.forEach($scope.dlAgriLivestockPro.agri_livestock.Table_5, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpLosPubProvince') {
                          totLosPubY2 = totLosPubY2 + value_in[0].los_year_2;
                    }
                    })
                })
            return totLosPubY2;
        }
    }

    $scope.totLosPvtY2 = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockPro)) {
            var totLosPvtY2= 0;
            angular.forEach($scope.dlAgriLivestockPro.agri_livestock.Table_5, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpLosPvtProvince') {
                          totLosPvtY2 = totLosPvtY2 + value_in[0].los_year_2;
                    }
                    })
                })
            return totLosPvtY2;
        }
    }

 }])
