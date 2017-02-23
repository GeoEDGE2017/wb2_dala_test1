var app = angular.module('dlMinFirmsNatReportApp', ['underscore', 'ngPrint']);

app.controller("DlFirmsNatReportController", function($scope,$http,$parse, _) {

    $scope.district;
    $scope.incident;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.dmLosMinFirmsNation = null;
    $scope.isDataAvailable = false;

$scope.checkIfNull = function()
{
    var isNull = $scope.dmLosMinFirmsNation ? angular.equals({}, $scope.dmLosMinFirmsNation.mining.Table_6) : true;
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
    'table_name':  'Table_6',
    'sector':'mining',
    'com_data': {
            'incident': $scope.incident,
          },
           }),
    }).success(function(data) {

        $scope.dmLosMinFirmsNation = data;

        $scope.isDataAvailable = $scope.checkIfNull();


    })
}

}

})
