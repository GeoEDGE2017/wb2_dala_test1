//Table 1
var app = angular.module('dlSumAgriDstrApp', []);
app.controller('dlSumAgriDstrController', function($scope, $http) {
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
        if($scope.incident && !selectedValue){
            $scope.loadData();
        }
    }

    $scope.loadData = function(form) {
        $scope.isLoded = true;
        if(form.$valid) {
            $scope.tot_damages = null;
            $scope.is_edit = true;

            $http({
                method: "POST",
                url: '/dl_fetch_summary_dis_disagtn',
                data: angular.toJson({
                    'table_name':  ['Table_9', 'Table_5'],
                    'sector': ['agri_agrarian', 'agri_irrigation'],
//                    'agri_agrarian','agri_fisheries', 'agri_irrigation', 'agri_livestock'
                    'com_data': {
                        'district':  $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.data=data;
                console.log($scope.data);
            })
        }
    }
})