//Table 6
var app = angular.module('dlminingProApp', ['underscore']);

app.controller("DlminingProController", function ($scope,$http,$parse, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totalDamages = null;
    $scope.totaldpvt = null;
    $scope.totalyear1pub = null;
    $scope.totalyear1pvt = null;
    $scope.totalyear2pub = null;
    $scope.totalyear2pvt = null;
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
    console.log($scope.province);
    console.log($scope.incident);
        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_7',
            'sector': 'mining',
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);

            $scope.data = data;
            $scope.dlMiningPro = data;

            })


    }

   $scope.checkIfNull = function()
   {
        var isNull = $scope.dlMiningPro ? angular.equals({}, $scope.dlMiningPro.mining.Table_7) : true;
        return isNull;

   }
   
    $scope.getTotal = function($index,key) {
         $scope.totaldpub = $scope.totaldpub + 
         ($scope.dlMiningPro.mining.Table_7[key].DloDmgProvince[1] ? (
                         $scope.dlMiningPro.mining.Table_7[key].DloDmgProvince[1].tot_damages ?
                         $scope.dlMiningPro.mining.Table_7[key].DloDmgProvince[1].tot_damages : 0 ): 0) +
        ($scope.dlMiningPro.mining.Table_7[key].DlaDmgProvince[0] ? (
                         $scope.dlMiningPro.mining.Table_7[key].DlaDmgProvince[0].tot_damages ?
                         $scope.dlMiningPro.mining.Table_7[key].DlaDmgProvince[0].tot_damages : 0 ): 0);


        console.log($scope.totaldpub);


         $scope.totaldpvt = $scope.totaldpvt +
         ($scope.dlMiningPro.mining.Table_7[key].DloDmgProvince[0] ? (
                         $scope.dlMiningPro.mining.Table_7[key].DloDmgProvince[0].tot_damages ?
                         $scope.dlMiningPro.mining.Table_7[key].DloDmgProvince[0].tot_damages : 0 ) : 0);

         $scope.totalyear1pub = $scope.totalyear1pub +
         ($scope.dlMiningPro.mining.Table_7[key].DloLosProvince[1] ? (
                         $scope.dlMiningPro.mining.Table_7[key].DloLosProvince[1].los_year1 ?
                         $scope.dlMiningPro.mining.Table_7[key].DloLosProvince[1].los_year1 : 0 ) : 0) +
         ($scope.dlMiningPro.mining.Table_7[key].DlaLosProvince[0] ? (
                         $scope.dlMiningPro.mining.Table_7[key].DlaLosProvince[0].los_year1 ?
                         $scope.dlMiningPro.mining.Table_7[key].DlaLosProvince[0].los_year1 : 0 ) : 0);

         $scope.totalyear1pvt = $scope.totalyear1pvt +
         ($scope.dlMiningPro.mining.Table_7[key].DloLosProvince[0] ? (
                         $scope.dlMiningPro.mining.Table_7[key].DloLosProvince[0].los_year1 ?
                         $scope.dlMiningPro.mining.Table_7[key].DloLosProvince[0].los_year1 : 0 ) : 0 );

         $scope.totalyear2pub = $scope.totalyear2pub +
         ($scope.dlMiningPro.mining.Table_7[key].DloLosProvince[1] ? (
                         $scope.dlMiningPro.mining.Table_7[key].DloLosProvince[1].los_year2 ?
                         $scope.dlMiningPro.mining.Table_7[key].DloLosProvince[1].los_year2 : 0 ) : 0) +
         ($scope.dlMiningPro.mining.Table_7[key].DlaLosProvince[0] ? (
                         $scope.dlMiningPro.mining.Table_7[key].DlaLosProvince[0].los_year2 ?
                         $scope.dlMiningPro.mining.Table_7[key].DlaLosProvince[0].los_year2 : 0 ) : 0);

         $scope.totalyear2pvt =$scope.totalyear2pvt +
         ($scope.dlMiningPro.mining.Table_7[key].DloLosProvince[0] ? (
                         $scope.dlMiningPro.mining.Table_7[key].DloLosProvince[0].los_year2 ?
                         $scope.dlMiningPro.mining.Table_7[key].DloLosProvince[0].los_year2 : 0 ) : 0);


         $scope.finaltotalpublic = $scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub  + $scope.totalyear2pub;

         $scope.finaltotalprivate = $scope.finaltotalprivate + $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;







    }
    
})
