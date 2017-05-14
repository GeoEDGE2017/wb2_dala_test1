var app = angular.module('dlTANatReportApp', ['ui.bootstrap', 'popoverToggle', 'ngPrint']);

app.controller("DlTANatReportController", ['$scope','$http',function ($scope,$http) {
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
    $scope.isDataAvailable = false;

$scope.checkIfNull = function()
{
    var isNull = $scope.dlAirTransSumNat ? angular.equals({}, $scope.dlAirTransSumNat.transport_air.Table_5) : true;
    console.log(isNull);
    return isNull;

}

$scope.initprint = function() {
       $("#modal-container-print").modal('show');
       console.log($scope.print_memo);

    }
 $scope.fetchDlData = function(form){
    $scope.submitted = true;
    $scope.isDataAvailable = false;

      if(form.$valid){

        $http({
        method: "POST",
        url: '/dl_fetch_district_disagtn',
        data: angular.toJson({
        'table_name':'Table_5',
        'sector': 'transport_air',
        'com_data': {
                'incident': $scope.incident,
              },
               }),
        }).success(function(data) {

        $scope.dlAirTransSumNat = data;
        $scope.isDataAvailable = $scope.checkIfNull();

                     if($scope.checkIfNull())
             $("#modal-container-239456").modal('show');


        })
}
}




    $scope.getTotal = function($index,key) {

     $scope.finaltotalprivate = 0;

         $scope.totaldpub = $scope.totaldpub +
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirDmgPubNational[$index].tot_destroyed_pub ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirDmgPubNational[$index].tot_destroyed_pub : 0 ;

         $scope.totaldpvt = $scope.totaldpvt +
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirDmgPvtNational[$index].tot_destroyed_pvt ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirDmgPvtNational[$index].tot_destroyed_pvt : 0 ;

         $scope.totalyear1pub = $scope.totalyear1pub +
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_1_pub ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_1_pub : 0 ;

         $scope.totalyear1pvt = $scope.totalyear1pvt +
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_1_pvt ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_1_pvt : 0 ;

         $scope.totalyear2pub = $scope.totalyear1pvt +
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_2_pub ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_2_pub : 0 ;

         $scope.totalyear2pvt = $scope.totalyear1pvt +
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_2_pvt ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[$index].year_2_pvt : 0 ;


         $scope.finaltotalpublic =$scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;


        $scope.finaltotalprivate  = $scope.finaltotalprivate + $scope.totaldpvt+ $scope.totalyear1pvt + $scope.totalyear2pvt;




    }




 }])
