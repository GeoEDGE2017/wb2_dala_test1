var app = angular.module('dlWaterSupplyApp', []);

app.controller("DlWaterSupplyController", ['$scope','$http',function ($scope,$http) {

 $scope.district;
 $scope.incident;
 $scope.dl_data={};
 $scope.is_edit=false;
 $scope.submitted = false;
 $scope.is_valid_data = true;
 $scope.districts=[];


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

$scope.changedValue=function getBsData() {
if($scope.incident && $scope.district){
    $scope.submitted = true;
    $scope.tot_damages = null;
    $scope.is_edit = true;
    $scope.submitted = true;
    $http({
    method: "POST",
    url: '/dl_fetch_total_data',
    data: angular.toJson({
        'table_name':'Table_5',
        'sector':'water_supply',
        'com_data': {
        'district':  $scope.district.district__id,
        'incident': $scope.incident,
        },
    }),
    }).success(function(data) {

    $scope.data=data;
    })
        }
    }



}])

