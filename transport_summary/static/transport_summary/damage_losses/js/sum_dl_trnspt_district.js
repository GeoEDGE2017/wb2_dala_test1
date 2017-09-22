var app = angular.module('dlSumTrnsptDstControllerApp', []);

app.controller('dlSumTrnsptDstControllerController', function($scope, $http) {
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
    $scope.dlSumTrnsptDst;
    $scope.user_id;

    $scope.getDistrict = function() {
        if($scope.incident) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id,
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }
        else {
            $scope.dlSumTrnsptDst = angular.copy(null);
        }
    }

    $scope.loadData = function(form) {
        $scope.isLoded = true;
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_summary_dis_disagtn',
                data: angular.toJson({
                    'table_name':  ['Table_8', 'Table_4', 'Table_4', 'Table_3'],
                    'sector': ['transport_land', 'transport_air', 'transport_water', 'transport_rail'],
                    'com_data': {
                        'district':  $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.dlSumTrnsptDst = data;
                console.log($scope.dlSumTrnsptDst);
            })
        }
    }

    $scope.sumFunc3 = function(val1, val2, val3) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3);
    }

    $scope.sumFunc4 = function(val1, val2, val3, val4) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4);
    }
})
