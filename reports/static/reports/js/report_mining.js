var app = angular.module('dlMinFirmsNatReportApp', ['underscore']);

app.controller("DlFirmsNatReportController", function($scope,$http,$parse, _) {


    $scope.district;
    $scope.is_edit = false;
    $scope.incident;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.dmLosMinFirmsNation = null;

$scope.checkIfNull = function()
{
    var isNull = $scope.dmLosMinFirmsNation ? angular.equals({}, $scope.dmLosMinFirmsNation.mining.Table_6) : true;
    console.log(isNull);
    return isNull;

}

$scope.loadData = function()
{

   $scope.is_edit = true;
   $scope.submitted = true;
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



    })


}

})
