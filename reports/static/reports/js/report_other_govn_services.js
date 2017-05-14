var app = angular.module('dlNationwideReportApp', ['underscore', 'ngPrint']);

app.controller("dlNationwideReportController", function ($scope,$http, _) {

$scope.incident;
$scope.submitted = false;
$scope.isDataAvailable = false;

$scope.dlNationwideSys = null;

$scope.initprint = function() {
       $("#modal-container-print").modal('show');
       console.log($scope.print_memo);

    }

$scope.loadData = function(form){
$scope.submitted = true;
$scope.isDataAvailable = false;

if(form.$valid){
    $http({
    method: "POST",
    url: '/other_govn_services/damage_losses/dl_fetch_disagtn_data',
    data: angular.toJson({
    'table_name':  'Table_5',
    'sector': 'other_govn_services',
    'com_data': {
            'incident': $scope.incident,
          },
           }),
    }).success(function(data) {

    console.log('load ', data);
    $scope.dlNationwideSys = data;
    $scope.isDataAvailable = $scope.checkIfNull();

     if($scope.checkIfNull())
             $("#modal-container-239456").modal('show');

})
}
}

$scope.checkIfNull = function()
   {
        var isNull = $scope.dlNationwideSys ? angular.equals({}, $scope.dlNationwideSys.other_govn_services.Table_5) : true;
        return isNull;

   }

})


