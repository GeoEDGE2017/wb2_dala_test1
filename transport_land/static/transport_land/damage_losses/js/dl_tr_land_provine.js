var app = angular.module('dlSummeryTLProApp', []);

app.controller("DlSummeryTLProController", ['$scope','$http',function ($scope,$http) {
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

            $scope.dlLandTransSumPro = data;

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

        $scope.finaltotalprivate = 0;

         $scope.totaldpub = $scope.totaldpub +
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlGacPubProvince[$index].damages ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlGacPubProvince[$index].damages : 0 ;

         $scope.totaldpvt = $scope.totaldpvt +
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlGacPvtProvince[$index].tot_damages_pvt ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlGacPvtProvince[$index].tot_damages_pvt : 0 ;

         $scope.totalyear1pub = $scope.totalyear1pub +
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[$index].year_1 ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[$index].year_1 : 0 ;

         $scope.totalyear1pvt = $scope.totalyear1pvt +
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[$index].year_1_pvt ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[$index].year_1_pvt : 0 ;

         $scope.totalyear2pub = $scope.totalyear1pvt +
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[$index].year_2 ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[$index].year_2 : 0 ;

         $scope.totalyear2pvt = $scope.totalyear1pvt +
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[$index].year_2_pub ?
                         $scope.dlLandTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[$index].year_2_pub : 0 ;


         $scope.finaltotalpublic =$scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;

         $scope.finaltotalprivate =$scope.convertTotal($scope.finaltotalprivate , $scope.totaldpvt , $scope.totalyear1pvt ,$scope.totalyear2pvt);


    }

 }])
