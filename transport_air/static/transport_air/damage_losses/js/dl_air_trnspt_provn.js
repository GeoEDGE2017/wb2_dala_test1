var app = angular.module('dlSummeryTAProApp', []);

app.controller("dlSummeryTAProController", ['$scope','$http',function ($scope,$http) {
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

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_4',
            'sector': 'transport_air',
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);

            $scope.dlAirTransSumPro = data;

            })
            }

    }
           $scope.checkIfNull = function()
   {
        var isNull = $scope.dlAirTransSumPro ? angular.equals({}, $scope.dlAirTransSumPro.transport_air.Table_4) : true;
        return isNull;

   }


 $scope.getTotal = function($index,key) {



         $scope.totaldpub = $scope.totaldpub + (
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirDmgPubProvince[0].tot_destroyed_pub ?
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirDmgPubProvince[0].tot_destroyed_pub : 0 ) ;


         $scope.totaldpvt = $scope.totaldpvt + (
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirDmgPvtProvince[0].tot_destroyed_pvt ?
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirDmgPvtProvince[0].tot_destroyed_pvt : 0 );

         $scope.totalyear1pub = $scope.totalyear1pub + (
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_1_pub ?
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_1_pub : 0 );

         $scope.totalyear1pvt = $scope.totalyear1pvt + (
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_1_pvt ?
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_1_pvt : 0 );

         $scope.totalyear2pub = $scope.totalyear2pub + (
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_2_pub ?
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_2_pub : 0) ;

         $scope.totalyear2pvt = $scope.totalyear2pvt + (
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_2_pvt ?
                         $scope.dlAirTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_2_pvt : 0) ;


         $scope.finaltotalpublic = $scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;

         $scope.finaltotalprivate =$scope.totaldpvt + $scope.totalyear1pvt +$scope.totalyear2pvt;


    }

 }])
