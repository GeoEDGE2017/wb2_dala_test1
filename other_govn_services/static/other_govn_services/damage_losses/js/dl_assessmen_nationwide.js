var app = angular.module('dlNationwideApp', ['underscore']);

app.controller("dlNationwideController", function ($scope,$http, _) {
    $scope.incident;
    $scope.user_id;

$scope.dlNationwideSys = null;

$scope.fetchDlData = function(){
    if($scope.incident){
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
}
})


