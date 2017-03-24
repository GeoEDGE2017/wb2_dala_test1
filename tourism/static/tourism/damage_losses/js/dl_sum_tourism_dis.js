//Table 4
var app = angular.module('dlSummTouBusiFaciDisApp', ['underscore'])

app.controller('dlSummTouBusiFaciDisController', function($scope, $http, $parse, _) {

    $scope.district;
    $scope.incident;


    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                //console.log($scope.districts);
            })
        }

        if($scope.incident && $scope.district ) {
            //featch data
            //$scope.fetchFirms();
            //$scope.fetchBusinessTypes();
        }
    }


})