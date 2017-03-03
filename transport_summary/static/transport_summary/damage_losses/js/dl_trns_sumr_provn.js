var app = angular.module('dlSummeryTSProApp', []);

app.controller("DlSummeryTSProController", ['$scope','$http',function ($scope,$http) {
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
                console.log(data);

            })

    }

    $scope.fetchDlData = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;
            $http({
            method: "POST",
            url: '/dl_fetch_summary_disagtn',
            data: angular.toJson({
            'table_name':  ['Table_8','Table_4','Table_3','Table_3'],
            'sector': ['transport_land','transport_air','transport_water','transport_rail'],
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            angular.forEach(data, function(value, key) {
             if(key == 'transport_land'){
              console.log(value.Table_8);
              angular.forEach(value.Table_8, function(value, key) {
                 console.log('land',key);
            });
              }
            });

            $scope.dlTransSumPro = data;

            })
    }

   $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }
    $scope.convertTotal = function(val1,val2,val3,val4){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
        return sum;
    }

 $scope.getTotal = function($index,key) {

        console.log(key);

         $scope.finaltotalprivate = 0;

         $scope.totaldpub =
                         ( $scope.dlTransSumPro.transport_land.Table_8[key].DlGacPubProvince[$index].damages ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlGacPubProvince[$index].damages : 0) +
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirDmgPubProvince[$index].tot_destroyed_pub ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirDmgPubProvince[$index].tot_destroyed_pub : 0)+
                         ($scope.dlTransSumPro.transport_water.Table_3[key].DlWaterDmgPubProvince[$index].tot_dmg_public ? +
                         $scope.dlTransSumPro.transport_rail.Table_3[key].TotDmgProvince[$index].tot_damages : 0 );

         $scope.totaldpvt =$scope.convertToInt(
                         ($scope.dlTransSumPro.transport_land.Table_8[key].DlGacPvtProvince[$index].tot_damages_pvt ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlGacPvtProvince[$index].tot_damages_pvt : 0 ),
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirDmgPvtProvince[$index].tot_destroyed_pvt ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirDmgPvtProvince[$index].tot_destroyed_pvt : 0),
                         ($scope.dlTransSumPro.transport_water.Table_3[key].DlWaterDmgPvtProvince[$index].tot_dmg_private ?
                         $scope.dlTransSumPro.transport_water.Table_3[key].DlWaterDmgPvtProvince[$index].tot_dmg_private : 0
                         ));

         $scope.totalyear1pub =
                         ($scope.dlTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[$index].year_1 ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[$index].year_1 : 0)  +
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[$index].year_1_pub ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[$index].year_1_pub : 0) +
                         ($scope.dlTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_1_pub ?
                         $scope.dlTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_1_pub : 0 );


         $scope.totalyear1pvt =
                         ($scope.dlTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[$index].year_1_pvt ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[$index].year_1_pvt : 0) +
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[$index].year_1_pvt ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[$index].year_1_pvt : 0) +
                         ($scope.dlTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_1_pvt ?
                         $scope.dlTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_1_pvt : 0 )


         $scope.totalyear2pub =
                         ($scope.dlTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[$index].year_2 ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[$index].year_2 : 0 )+
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[$index].year_2_pub ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[$index].year_2_pub : 0) +
                         ($scope.dlTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_2_pub ?
                         $scope.dlTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_2_pub : 0);

         $scope.totalyear2pvt =
                         ($scope.dlTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[$index].year_2_pub ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[$index].year_2_pub : 0 )+
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[$index].year_2_pvt ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[$index].year_2_pvt : 0) +
                         ($scope.dlTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_2_pvt ?
                         $scope.dlTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_2_pvt : 0) ;

         $scope.finaltotalpublic =$scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;

         $scope.finaltotalprivate =$scope.convertTotal($scope.finaltotalprivate , $scope.totaldpvt , $scope.totalyear1pvt ,$scope.totalyear2pvt);


    }


 }])
