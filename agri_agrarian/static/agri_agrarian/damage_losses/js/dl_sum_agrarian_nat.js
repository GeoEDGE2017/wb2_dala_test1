var app = angular.module('dlAgriAgrarianNatApp', []);

app.controller("DlAgriAgrarianNatController", ['$scope','$http',function ($scope,$http) {
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


    $scope.fetchDlData = function(){
        if($scope.incident){
            $scope.is_edit = true;
            $scope.submitted = true;
            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name':'Table_10',
                    'sector': 'agri_agrarian',
                    'com_data': {
                            'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                console.log('load ', data);
                $scope.dlAgriAgrarianSumNat = data;
            })
        }
    }

     $scope.getTotal = function($index,key) {
         $scope.totaldpub = $scope.totaldpub + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[$index] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[$index].dmg_los_pub ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[$index].dmg_los_pub : 0 ): 0) ;

         $scope.totaldpvt = $scope.totaldpvt + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[$index] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[$index].dmg_los_pvt ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[$index].dmg_los_pvt : 0 ) : 0) ;

         $scope.totalyear1pub = $scope.totalyear1pub + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[$index] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[$index].dmg_los_pub ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[$index].dmg_los_pub : 0 ) : 0) ;

         $scope.totalyear1pvt = $scope.totalyear1pvt + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[$index] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[$index].dmg_los_pvt ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[$index].dmg_los_pvt : 0 ) : 0 );

         $scope.totalyear2pub = $scope.totalyear2pub + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[$index] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[$index].dmg_los_pub ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[$index].dmg_los_pub : 0 ) : 0) ;

         $scope.totalyear2pvt =($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[$index] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[$index].dmg_los_pvt ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[$index].dmg_los_pvt : 0 ) : 0);


         $scope.finaltotalpublic = $scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub  + $scope.totalyear2pub;

         $scope.finaltotalprivate = $scope.finaltotalprivate + $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;

        }

 }])
