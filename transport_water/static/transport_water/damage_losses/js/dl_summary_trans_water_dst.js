//Table_3
var bsHealthStatusApp = angular.module('dlSumTransWaterDstApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('dlSumTransWaterDstController', function DlEduDistrictController($scope, $http) {

    $scope.dlEduDistrict;
    $scope.total;
    $scope.iter_tot;
    $scope.district;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.isLoded = false;
    $scope.user_id;

    $scope.changedValue = function getDlData() {
        if ($scope.incident) {
            $http({
                method: "POST",
                url: '/fetch_incident_districts',
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id,
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.district = "";
                console.log(data);
            })
        }
    }

    $scope.loadData = function(form) {
        if($scope.incident && $scope.district){
            $scope.isLoded = true;
            if(form.$valid) {
                $scope.tot_damages = null;
                $scope.is_edit = true;
                $scope.submitted = true;
                $http({
                    method: "POST",
                    url: '/dl_fetch_total_data',
                    data: angular.toJson({
                        'table_name': 'Table_3',
                        'sector':'transport_water',
                        'com_data': {
                            'district': $scope.district.district__id,
                            'incident': $scope.incident,

                        },
                        'is_edit':$scope.is_edit
                   }),
                }).success(function(data) {
                    $scope.data = data;
                    console.log($scope.data);
                })
            }
        }
    }

    $scope.sumFunc2 = function(val1=0, val2=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }

        return parseInt(val1) + parseInt(val2);
    }

    $scope.calGrandTotalPub = function() {
        console.log('calGrandTotalPub');
        var tot_los_pub = 0;
        if(!angular.isUndefined($scope.data)) {
            angular.forEach($scope.data.transport_water.Table_3, function(value, key, index) {
                console.log(key);
                if(key == 'DlWaterLosOther') {
                    angular.forEach(value, function(value_in, key_in) {
                        if(value_in.type_los == 'TOTAL LOSSES') {
                            console.log(value_in);
                            tot_los_pub = tot_los_pub + $scope.sumFunc2(value_in.tot_los_pub, 0);
                        }
                    })
                }
            })
        }

		return tot_los_pub;
	}

	$scope.calGrandTotalPvt = function() {
        console.log('calGrandTotalPvt');
        var tot_los_pvt = 0;
        if(!angular.isUndefined($scope.data)) {
            angular.forEach($scope.data.transport_water.Table_3, function(value, key, index) {
                console.log(key);
                if(key == 'DlWaterLosOther') {
                    angular.forEach(value, function(value_in, key_in) {
                        if(value_in.type_los == 'TOTAL LOSSES') {
                            console.log(value_in);
                            tot_los_pvt = tot_los_pvt + $scope.sumFunc2(value_in.tot_los_pvt, 0);
                        }
                    })
                }
            })
        }

		return tot_los_pvt;
	}
})
