var app = angular.module('dlSummeryTWProApp', []);

app.controller("DlSummeryTWProController", ['$scope','$http',function ($scope,$http) {
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
    if($scope.incident && $scope.province){
        $scope.is_edit = true;
        $scope.submitted = true;
        if(form.$valid) {
            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_4',
            'sector': 'transport_water',
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);

            $scope.dlWaterTransSumPro = data;

            })
            }
        }

    }
              $scope.checkIfNull = function()
   {
        var isNull = $scope.dlWaterTransSumPro ? angular.equals({}, $scope.dlWaterTransSumPro.transport_water.Table_4) : true;
        return isNull;

   }

 $scope.getTotal = function($index,key) {
         $scope.totaldpub = $scope.totaldpub  +   (
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterDmgPubProvince[0].tot_dmg_public ?
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterDmgPubProvince[0].tot_dmg_public : 0 );

         $scope.totaldpvt = $scope.totaldpvt + (
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterDmgPvtProvince[0].tot_dmg_private ?
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterDmgPvtProvince[0].tot_dmg_private : 0 );

         $scope.totalyear1pub = $scope.totalyear1pub + (
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pub ?
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pub : 0);

         $scope.totalyear1pvt = $scope.totalyear1pvt + (
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pvt ?
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pvt : 0 );

         $scope.totalyear2pub = $scope.totalyear2pub +  (
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pub ?
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pub : 0);

         $scope.totalyear2pvt = $scope.totalyear2pvt + (
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pvt ?
                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pvt : 0);


         $scope.finaltotalpublic =$scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;

         $scope.finaltotalprivate =$scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;







    }




 }])
