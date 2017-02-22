var app = angular.module('dlNationwideReportApp', ['underscore']);

app.controller("dlNationwideReportController", function ($scope,$http, _) {
    $scope.incident;


$scope.dlNationwideSys = null;

$scope.loadData = function(){
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
})
}

$scope.checkIfNull = function()
   {
        var isNull = $scope.dlNationwideSys ? angular.equals({}, $scope.dlNationwideSys.other_govn_services.Table_5) : true;
        return isNull;

   }

})


