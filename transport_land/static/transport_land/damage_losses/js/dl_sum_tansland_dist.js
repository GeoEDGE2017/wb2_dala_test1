//Table 7
var app = angular.module('dlSumTransLandDistApp', ['underscore'])

app.controller('dlSumTransLandDistController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.isLoded = false;

    $scope.dlDate;
    $scope.bs_data={};

    $scope.baselineDate;

    $scope.is_edit = false;
    $scope.is_valid_data = true;

    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.data;

    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";

            })
        }
    }

    $scope.loadData = function(form) {
    if($scope.district && $scope.incident){
        $scope.isLoded = true;

            $scope.tot_damages = null;
            $scope.is_edit = true;

            $http({
                method: "POST",
                url: '/dl_fetch_total_data',
                data: angular.toJson({
                    'table_name':  'Table_7',
                    'sector':'transport_land',
                    'com_data': {
                        'district':  $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                $scope.data=data;
            })

        }
    }
});
