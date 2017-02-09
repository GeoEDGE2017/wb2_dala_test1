var app = angular.module('dlNationwideApp', ['underscore']);

app.controller("dlNationwideController", function ($scope,$http, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.dl_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.Districts=[];

$scope.dlNationwideSys = null;

$scope.fetchDlData = function(){
    $http({
    method: "POST",
    url: '/other_govn_services/damage_losses/dl_fetch_disagtn_data',
    data: angular.toJson({
    'table_name':  'Table_5',
    'sector': 'other_govn_services',
    'com_data': {
            'incident': 9,
          },
           }),
    }).success(function(data) {

    console.log('load ', data);
    $scope.dlNationwideSys = data;
})
}
})


