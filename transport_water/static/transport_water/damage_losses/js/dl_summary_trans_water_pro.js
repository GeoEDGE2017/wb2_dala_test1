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
            'table_name':  'Table_3',
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

 $scope.getTotal = function($index,key) {
         $scope.totaldpub = $scope.totaldpub +
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterDmgPubProvince[$index].tot_dmg_public ?
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterDmgPubProvince[$index].tot_dmg_public : 0 ;

         $scope.totaldpvt = $scope.totaldpvt +
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterDmgPvtProvince[$index].tot_dmg_private ?
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterDmgPvtProvince[$index].tot_dmg_private : 0 ;

         $scope.totalyear1pub = $scope.totalyear1pub +
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_1_pub ?
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_1_pub : 0 ;

         $scope.totalyear1pvt = $scope.totalyear1pvt +
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_1_pvt ?
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_1_pvt : 0 ;

         $scope.totalyear2pub = $scope.totalyear1pvt +
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_2_pub ?
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_2_pub : 0 ;

         $scope.totalyear2pvt = $scope.totalyear1pvt +
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_2_pvt ?
                         $scope.dlWaterTransSumPro.transport_water.Table_3[key].DlWaterLosProvince[$index].year_2_pvt : 0 ;


         $scope.finaltotalpublic =$scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;

         $scope.finaltotalprivate =$scope.finaltotalprivate + $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;







    }




 }])
