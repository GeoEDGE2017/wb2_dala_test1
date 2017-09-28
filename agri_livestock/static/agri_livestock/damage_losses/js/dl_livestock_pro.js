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

//$scope.totDmg = function() {
//        if(!angular.isUndefined($scope.dlAgriIrrifationPro)) {
//            var totDmg1 = 0;
//            var totDmg2 = 0;
//            var totDmg3 = 0;
//            var totDmg4 = 0;
//            var totDmg5 = 0;
//            var totDmg6 = 0;
//            var totDmg7 = 0;
//            var totDmg= 0;
//            angular.forEach($scope.dlAgriIrrifationPro.agri_irrigation.Table_5, function(value, index) {
//            angular.forEach(value, function(value_in, key) {
//                    if(key == 'DlMajorTanksDistrict') {
//                          totDmg1 = totDmg1 + value_in[0].damages;
//                    }
//                    if(key == 'DlMediumTanksDistrict') {
//                          totDmg2 = totDmg2 + value_in[0].damages;
//                    }
//                    if(key == 'DlMinorTanksDistrict') {
//                          totDmg3 = totDmg3 + value_in[0].damages;
//                    }
//                    if(key == 'DlAnicutsDistrict') {
//                          totDmg4 = totDmg4 + value_in[0].damages;
//                    }
//                    if(key == 'DlOtherStructuresDistrict') {
//                          totDmg5 = totDmg5 + value_in[0].damages;
//                    }
//                    if(key == 'DlRiverEmbankmntDistrict') {
//                          totDmg6 = totDmg6 + value_in[0].damages;
//                    }
//                    if(key == 'DlBuildingsDistrict') {
//                          totDmg7 = totDmg7 + value_in[0].damages;
//                    }
//                    totDmg = totDmg1 + totDmg2 + totDmg3 + totDmg4 + totDmg5 + totDmg6 + totDmg7;
//                    console.log('test',totDmg);
//                    })
//
//                })
//
//            return totDmg;
//        }
//    }

 }])
