var app = angular.module('dlSummeryTSNatApp', []);

app.controller("DlSummeryTSNatController", ['$scope','$http',function ($scope,$http) {
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

    $scope.fetchDlData = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_summary_disagtn',
            data: angular.toJson({
            'table_name':  ['Table_9','Table_5','Table_4','Table_4'],
            'sector': ['transport_land','transport_air','transport_water','transport_rail'],
            'com_data': {

                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            angular.forEach(data, function(value, key) {
             if(key == 'transport_land'){
              console.log(value.Table_9);
              angular.forEach(value.Table_9, function(value, key) {
                 console.log('land',key);
            });
              }
            });
           $scope.dlTransSumNat = data;

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
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlGacPubNational[$index].damages +
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPubNational[$index].tot_destroyed_pub +
                         $scope.dlTransSumNat.transport_water.Table_4[key].DlWaterDmgPubNational[$index].tot_dmg_public +
                         $scope.dlTransSumNat.transport_rail.Table_4[key].TotDmgNational[$index].tot_damages
                         ;

         $scope.totaldpvt =$scope.convertToInt(
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlGacPvtNational[$index].tot_damages_pvt,
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPvtNational[$index].tot_destroyed_pvt,
                         $scope.dlTransSumNat.transport_water.Table_4[key].DlWaterDmgPvtNational[$index].tot_dmg_private)

                         ;

         $scope.totalyear1pub =
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[$index].year_1 +
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_1_pub +
                         $scope.dlTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_1_pub ;



         $scope.totalyear1pvt =
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[$index].year_1_pvt +
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_1_pvt +
                         $scope.dlTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_1_pvt ;


         $scope.totalyear2pub =
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[$index].year_2 +
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_2_pub +
                         $scope.dlTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_2_pub ;

         $scope.totalyear2pvt =
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[$index].year_2_pub +
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_2_pvt +
                         $scope.dlTransSumNat.transport_water.Table_4[key].DlWaterLosNational[$index].year_2_pvt ;

         $scope.finaltotalpublic =$scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;

         $scope.finaltotalprivate =$scope.convertTotal($scope.finaltotalprivate , $scope.totaldpvt , $scope.totalyear1pvt ,$scope.totalyear2pvt);


    }


 }])
