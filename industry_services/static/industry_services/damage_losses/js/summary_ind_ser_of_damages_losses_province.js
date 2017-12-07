//summary_of_damages_losses_province
//Table 8
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
                    'table_name': 'Table_8',
                    'sector': 'industry_services',
                    'com_data': {
                        'incident': $scope.incident,
                        'province': $scope.province,
                    },
                }),
            }).success(function(data) {
                $scope.data = data.industry_services.Table_8;
                $scope.districts = Object.keys($scope.data);
                console.log('load ', Object.keys($scope.data));
                console.log("data", $scope.data);

                $scope.data_available = ($scope.districts.length != 0)

                if(!$scope.data_available){
                    alert("no data available for your selection");
                }

    //            console.log($scope.data);
    //            console.log($scope.districts);
                $scope.makeTable();
            }).error(function(err){
                $scope.data = null;
                $scope.districts = null;
            })
        }
    }


    $scope.makeTable = function() {
        if($scope.data != null) {
            $scope.table = {};
            $scope.table.formal = {};
            $scope.table.informal = {};

            //district vise objects
            angular.forEach($scope.districts, function(value, key) {
                $scope.table.formal[value] = {'name':value }
                $scope.table.formal[value].year1Damage = {};
                $scope.table.formal[value].year1Loss = {};
                $scope.table.formal[value].year2Loss = {};

                $scope.table.informal[value] = {'name':value }
                $scope.table.informal[value].year1Damage = {};
                $scope.table.informal[value].year1Loss = {};
                $scope.table.informal[value].year2Loss = {};

                angular.forEach($scope.data[$scope.districts].DmgTotFrmYear1District, function(value2, key) {
                    $scope.table.formal[value].year1Damage[value2.ownership] = value2.tot_damages;
                })

                angular.forEach($scope.data[$scope.districts].LosTotFrmYear1District, function(value2, key) {
                    $scope.table.formal[value].year1Loss[value2.ownership] = value2.los_year1;
                })

                angular.forEach($scope.data[$scope.districts].LosTotFrmYear2District, function(value2, key) {
                    $scope.table.formal[value].year2Loss[value2.ownership] = value2.los_year2;
                })


                angular.forEach($scope.data[$scope.districts].DmgTotInfYear1District, function(value2, key) {
                    $scope.table.informal[value].year1Damage['Private'] = value2.tot_damages;
                })

                angular.forEach($scope.data[$scope.districts].LosTotInfYear1District, function(value2, key) {
                    $scope.table.informal[value].year1Loss['Private'] = value2.los_year1;
                })

                angular.forEach($scope.data[$scope.districts].LosTotInfYear2District, function(value2, key) {
                    $scope.table.informal[value].year2Loss['Private'] = value2.los_year2;
                })
            })
            console.log('table', $scope.table);
        }
        else {
            console.log("data null");
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