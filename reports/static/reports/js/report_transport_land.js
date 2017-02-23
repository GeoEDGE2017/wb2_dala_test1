var app = angular.module('dlTlNatReportApp', ['ngPrint']);

app.controller("DlTlNatReportController", ['$scope','$http',function ($scope,$http) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
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
    $scope.isLoded = false;

$scope.checkIfNull = function()
{
    var isNull = $scope.dlLandTransSumNat ? angular.equals({}, $scope.dlLandTransSumNat.transport_land.Table_9) : true;
    console.log(isNull);
    return isNull;

}

     $scope.fetchDlData = function(form){
        $scope.submitted = true;
        if(form.$valid) {
            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_9',
            'sector': 'transport_land',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            $scope.dlLandTransSumNat = data;

            })
        }

    }

    $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

    $scope.convertTotalInt = function(val1,val2,val3,val4){

        var sum = parseInt(val1) + parseInt(val2) +parseInt(val3) +parseInt(val4);
        console.log(sum);
        return sum;
    }


    $scope.getTotal = function($index,key) {

     $scope.finaltotalprivate = 0;

         $scope.totaldpub = $scope.totaldpub +
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPubNational[$index].damages ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPubNational[$index].damages : 0 ;

         $scope.totaldpvt = $scope.totaldpvt +
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPvtNational[$index].tot_damages_pvt ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPvtNational[$index].tot_damages_pvt : 0 ;

         $scope.totalyear1pub = $scope.totalyear1pub +
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[$index].year_1 ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[$index].year_1 : 0 ;

         $scope.totalyear1pvt = $scope.totalyear1pvt +
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[$index].year_1_pvt ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[$index].year_1_pvt : 0 ;

         $scope.totalyear2pub = $scope.totalyear1pvt +
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[$index].year_2 ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[$index].year_2 : 0 ;

         $scope.totalyear2pvt = $scope.totalyear1pvt +
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[$index].year_2_pub ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[$index].year_2_pub : 0 ;


         $scope.finaltotalpublic =$scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;


        $scope.finaltotalprivate  = $scope.convertTotalInt($scope.finaltotalprivate , $scope.totaldpvt , $scope.totalyear1pvt , $scope.totalyear2pvt)




    }




 }])
