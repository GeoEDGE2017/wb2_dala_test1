

//Table N
var app = angular.module('dlSummFormlInformldisApp', [])

app.controller('dlSummFormlInformldisController', ['$scope', '$http', function($scope, $http) {

    $scope.districts;
    $scope.incident;
    $scope.district;

    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                ////console.log($scope.districts);
            })
        }

        if($scope.incident && $scope.district ) {
            //when district change
        }
    }


}])