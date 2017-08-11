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

    // get relevant damage_losses data for calculations
    $scope.changedValue = function getDlData(selectProvinces) {
        if($scope.incident && selectProvinces) {
          fetchProvinces();
        }

    }
    $scope.provinces = [];

    function fetchProvinces(){
        $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                'incident': $scope.incident
            }),
        }).success(function(data) {
            $scope.provinces = data;
            $scope.province = "";
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

    $scope.getTotal = function($index,key) {

         $scope.totaldpub = ($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPubProvince[$index] ? (
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPubProvince[$index].damages ?
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPubProvince[$index].damages : 0 ): 0) ;

         $scope.totaldpvt = ($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPvtProvince[$index] ? (
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPvtProvince[$index].damages ?
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpNdaPvtProvince[$index].damages : 0 ) : 0) ;

         $scope.totalyear1pub = ($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index] ? (
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index].los_year_1 ?
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index].los_year_1 : 0 ) : 0) ;

         $scope.totalyear1pvt =
         ($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index] ? (
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index].los_year_1 ?
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index].los_year_1 : 0 ) : 0 );

         $scope.totalyear2pub =  ($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index] ? (
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index].los_year_2 ?
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPubProvince[$index].los_year_2 : 0 ) : 0) ;

         $scope.totalyear2pvt =($scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index] ? (
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index].los_year_2 ?
                         $scope.dlAgriLivestockPro.agri_livestock.Table_5[key].DlpLosPvtProvince[$index].los_year_2 : 0 ) : 0);


         $scope.finaltotalpublic =  $scope.totaldpub + $scope.totalyear1pub  + $scope.totalyear2pub;

         $scope.finaltotalprivate = $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;


    }

 }])
