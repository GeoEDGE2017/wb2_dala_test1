var app = angular.module('dlHealthSectorDistrictApp', []);

app.controller("DlHealthSectorDistrictController", ['$scope','$http',function ($scope,$http) {

 $scope.district;
 $scope.incident;
 $scope.dl_data={};
 $scope.is_edit=false;
 $scope.submitted = false;
 $scope.is_valid_data = true;
 $scope.districts=[];
 $scope.lmh_hospitals = ['Teaching Hospitals', 'Provincial General Hospitals', 'District General Hospitals'];

$scope.getDistrict = function getDistrict(){
     if($scope.incident){

    $http({
    method: "POST",
    url: "/fetch_incident_districts",
    data: angular.toJson({'incident': $scope.incident }),
    }).success(function(data) {
        $scope.districts = data;
        $scope.district = "";
        console.log(data);

    })
        }

}

$scope.loadData = function(form){

$scope.submitted = true;
if(form.$valid){
    $scope.tot_damages = null;
    $scope.is_edit = true;
    $scope.submitted = true;
    $http({
    method: "POST",
    url: '/dl_fetch_total_data',
    data: angular.toJson({
        'table_name':  'Table_8',
        'sector':'health',
        'com_data': {
        'district':  $scope.district.district__id,
        'incident': $scope.incident,
        },
    }),
    }).success(function(data) {

    $scope.dlSummaryDis = data;
    })
}
}

}])

