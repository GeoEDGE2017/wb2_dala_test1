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
    $scope.totalyear2vt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    // declaring total variables
    $scope.total_num_affected = 0;

    // get relevant damage_losses data for calculations
    $scope.changedValue = function getDlData(selectProvinces) {

        if($scope.incident && selectProvinces) {
          fetchProvinces();
        }

    }
    $scope.provinces = [];

    function fetchProvinces()
    {
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

            $scope.dlLandTransSumNat = data;

            })

    }

 $scope.getTotal = function($index,key) {
         $scope.totaldpub = $scope.totaldpub +
                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlGacPubNational[$index].damages ?
                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlGacPubNational[$index].damages : 0 ;

         $scope.totaldpvt = $scope.totaldpvt +
                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlGacPvtNational[$index].tot_damages_pvt ?
                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlGacPvtNational[$index].tot_damages_pvt : 0 ;

//         $scope.totalyear1pub = $scope.totalyear1pub +
//                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlOtherLosPubDistrict[$index].year_1_pub ?
//                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlOtherLosPubDistrict[$index].year_1_pub : 0 ;

         $scope.totalyear1pvt = $scope.totalyear1pvt +
                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlOtherLosPvtNational[$index].year_1_pvt ?
                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlOtherLosPvtNational[$index].year_1_pvt : 0 ;

//         $scope.totalyear2pub = $scope.totalyear1pvt +
//                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlOtherLosPubDistrict[$index].year_2_pub ?
//                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlOtherLosPubDistrict[$index].year_2_pub : 0 ;

         $scope.totalyear2pvt = $scope.totalyear1pvt +
                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlOtherLosPvtNational[$index].year_2_pub ?
                         $scope.dlLandTransSumNat.transport_land.Table_8[key].DlOtherLosPvtNational[$index].year_2_pub : 0 ;


//         $scope.finaltotalpublic =$scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;
//
//         $scope.finaltotalprivate =$scope.finaltotalprivate + $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;







    }




 }])
