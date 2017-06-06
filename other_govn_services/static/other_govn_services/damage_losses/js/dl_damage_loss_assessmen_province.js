var app = angular.module('dlAssessmenProvinceApp', ['underscore']);

app.controller("dlAssessmenProvinceController", function ($scope,$http, _) {

    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.dl_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.province;

    $scope.dlAssessmenProvinceSys = null;

 $scope.changedValue = function getDlData() {

        if ($scope.incident) {

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
    }

$scope.fetchDlData = function(){
    if($scope.incident && $scope.province){
    $http({
    method: "POST",
    url: '/other_govn_services/damage_losses/dl_fetch_disagtn_data',
    data: angular.toJson({
    'table_name':  'Table_4',
    'sector': 'other_govn_services',
    'com_data': {
            'province': $scope.province.district__province_id,
            'incident': $scope.incident,
          },
           }),
    }).success(function(data) {

    $scope.dlAssessmenProvinceSys = data;

})
}
}

})


