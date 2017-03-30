

//Table N
var app = angular.module('dlSummFormlInformldisApp', [])

app.controller('dlSummFormlInformldisController', ['$scope', '$http', function($scope, $http) {

    $scope.districts;
    $scope.incident;
    $scope.district;
    $scope.data;

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
             $scope.loadData();
        }
    }


    $scope.loadData = function() {

        if($scope.incident && $scope.district && $scope.district.district__id) {
            $scope.isLoded = true;

        $scope.tot_damages = null;
        $scope.is_edit = true;

        $http({
            method: "POST",
            url: '/dl_fetch_summary_dis_disagtn',
            data: angular.toJson({
                'table_name':  ['Table_6'],
                'sector': ['industry_services'],
                'com_data': {
                    'district':  $scope.district.district__id,
                    'incident': $scope.incident,
                },
            }),
        }).success(function(data) {
            $scope.data=data.industry_services.Table_6;
//            $scope.makeTable();
            console.log($scope.data);
        })
        }


    }




}])