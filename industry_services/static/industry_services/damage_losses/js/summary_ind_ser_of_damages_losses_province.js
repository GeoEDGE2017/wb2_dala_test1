//Table 6
var app = angular.module('dlSummIndSerPovApp', [])

app.controller('dlSummIndSerPovController', ['$scope', '$http', function($scope, $http) {
    $scope.districts;
    $scope.incident;
    $scope.district;
    $scope.provinces;
    $scope.province;

    $scope.districts;

    $scope.data;
    $scope.table;
    $scope.districtsTotals = [];
    $scope.data_available;
    $scope.user_id;
    $scope.dlSummIndSerPov;

    $scope.changedValue =function (selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }

        if($scope.incident && $scope.province) {
            console.log("featchiing");
            $scope.fetchData();
        }
    }

    function fetchProvinces() {
        $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                'incident': $scope.incident
            }),
        }).success(function(data) {
            $scope.provinces = data;
            $scope.province = null;

        })
    }

    $scope.fetchData = function() {
        if($scope.incident) {
            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name': 'Table_6',
                    'sector': 'industry_services',
                    'com_data': {
                        'incident': $scope.incident,
                        'province': $scope.province,
                    },
                }),
            }).success(function(data) {
                $scope.dlSummIndSerPov = data;
//                if(!$scope.data_available) {
//                    alert("no data available for your selection");
//                }
                console.log($scope.dlSummIndSerPov);
            }).error(function(err){
                $scope.data = null;
                $scope.districts = null;
            })
        }
    }

    $scope.totInformalLosY1Pvt = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_los_year1_pvt = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'DlInfTotLosFoodY1District') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_year1_pvt = $scope.sumFunc2(tot_los_year1_pvt, value_in.tot_los_year1);
                    })
                }
                else if(key == 'DlInfTotLosOthY1District') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_year1_pvt = $scope.sumFunc2(tot_los_year1_pvt, value_in.tot_los_year1);
                    })
                }
                else if(key == 'DlInfTotLosSerY1District') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_year1_pvt = $scope.sumFunc2(tot_los_year1_pvt, value_in.tot_los_year1);
                    })
                }
                else if(key == 'DlInfTotLosTrdY1District') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_year1_pvt = $scope.sumFunc2(tot_los_year1_pvt, value_in.tot_los_year1);
                    })
                }
            })
            return tot_los_year1_pvt;
        }
    }

    $scope.getSum3 = function(val1, val2, val3) {
        var final_val = 0;
        if(!isNaN(val1)) final_val += val1;
        if(!isNaN(val2)) final_val += val2;
        if(!isNaN(val3)) final_val += val3;

        return final_val;
    }

    $scope.getGrandTotCol = function(col) {
        var final_val = 0;
        angular.forEach($scope.districtsTotals, function(value, key) {
            final_val += $scope.getConvertedVal( value[col] );
        })

        return final_val;
    }

    $scope.getConvertedVal = function(val) {
        if(!val)    return 0;
        if(isNaN(val)) return 0;
        return val;
    }
}])