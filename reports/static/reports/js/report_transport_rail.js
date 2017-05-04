var app = angular.module('dlRailTransNatReportApp', ['underscore', 'ngPrint']);

app.controller("dlRailTransNatReportController", function($scope,$http,$parse, _) {


    $scope.district;
    $scope.incident;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.dmLosTransAirNation = null;
    $scope.isDataAvailable = false;

$scope.checkIfNull = function()
{
    var isNull = $scope.dmLosTransAirNation ? angular.equals({}, $scope.dmLosTransAirNation.transport_rail.Table_4) : true;
    console.log(isNull);
    return isNull;

}

$scope.loadData = function(form)
{

   $scope.submitted = true;
   $scope.isDataAvailable = false;

   if(form.$valid){
    $http({
    method: "POST",
    url: '/dl_fetch_district_disagtn',
    data: angular.toJson({
    'table_name':  'Table_4',
    'sector':'transport_rail',
    'com_data': {
            'incident': $scope.incident,
          },
           }),
    }).success(function(data) {

        $scope.dmLosTransAirNation = data;
        $scope.isDataAvailable = $scope.checkIfNull();

                     if($scope.checkIfNull())
             $("#modal-container-239456").modal('show');


    })
}

}

     $scope.getTotal = function(model, property,$index,key) {


         $scope.total =  $scope.total +
                         $scope.dmLosTransAirNation.transport_rail.Table_4[key].TotDmgNational[$index].tot_damages ?
                         $scope.dmLosTransAirNation.transport_rail.Table_4[key].TotDmgNational[$index].tot_damages : 0 ;

    }

})
