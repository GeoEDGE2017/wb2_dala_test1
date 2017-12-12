//Table 5
var app = angular.module('dlSummTouBusiFaciPovApp', ['underscore'])
app.controller('dlSummTouBusiFaciPovController', function($scope, $http, $parse, _) {
    $scope.incident;
    $scope.province;
    $scope.provinces;
    $scope.data;
    $scope.districts;
    $scope.table;
    $scope.districtTotals = [];
    $scope.data_available;
    $scope.user_id;

    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }
        if($scope.incident && $scope.province) {
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
        $scope.districtTotals = [];
        if($scope.province && $scope.incident) {
            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name': 'Table_5',
                    'sector': 'tourism',
                    'com_data': {
                        'province': $scope.province,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.dlSummTouBusiFaciPov = data;
                $scope.districts = Object.keys($scope.dlSummTouBusiFaciPov);
                console.log('load ', Object.keys($scope.dlSummTouBusiFaciPov));
                console.log($scope.dlSummTouBusiFaciPov);
                $scope.data_available = ($scope.districts.length != 0);
                if(!$scope.data_available) {
                    console.log("no data available for your selection");
                }
            }).error(function(err) {
                $scope.dlSummTouBusiFaciPov = null;
                $scope.districts = null;
            })
        }
    }

    $scope.grndTotDmgPub = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPov)) {
            var grnd_tot_dmg_pub = 0;
            angular.forEach($scope.dlSummTouBusiFaciPov.tourism.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlDmgFrmTotProvinceN') {
                        grnd_tot_dmg_pub = grnd_tot_dmg_pub + value_in[0].tot_damages_pub;
                    }
                    else if(key == 'DlDmgInfTotProvinceN') {
                        grnd_tot_dmg_pub = grnd_tot_dmg_pub + value_in[0].los_pub;
                    }
                })
            })
            return grnd_tot_dmg_pub;
        }
    }

    $scope.grndTotDmgPvt = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPov)) {
            var grnd_tot_dmg_pvt = 0;
            angular.forEach($scope.dlSummTouBusiFaciPov.tourism.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlDmgFrmTotProvinceN') {
                        grnd_tot_dmg_pvt = grnd_tot_dmg_pvt + value_in[0].tot_damages_pvt;
                    }
                    else if(key == 'DlDmgInfTotProvinceN') {
                        grnd_tot_dmg_pvt = grnd_tot_dmg_pvt + value_in[0].los_pvt;
                    }
                })
            })
            return grnd_tot_dmg_pvt;
        }
    }

    $scope.grndTotLosYer1Pub = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPov)) {
            var grnd_tot_los_yer1_pub = 0;
            angular.forEach($scope.dlSummTouBusiFaciPov.tourism.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlLosFrmTotProvinceN') {
                        grnd_tot_los_yer1_pub = grnd_tot_los_yer1_pub + value_in[0].los_year1_pub;
                    }
                    else if(key == 'DlLosInfTotProvinceN') {
                        grnd_tot_los_yer1_pub = grnd_tot_los_yer1_pub + value_in[0].los_year1_pub;
                    }
                })
            })
            return grnd_tot_los_yer1_pub;
        }
    }

    $scope.grndTotLosYer1Pvt = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPov)) {
            var grnd_tot_los_yer1_pvt = 0;
            angular.forEach($scope.dlSummTouBusiFaciPov.tourism.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlLosFrmTotProvinceN') {
                        grnd_tot_los_yer1_pvt = grnd_tot_los_yer1_pvt + value_in[0].los_year1_pvt;
                    }
                    else if(key == 'DlLosInfTotProvinceN') {
                        grnd_tot_los_yer1_pvt = grnd_tot_los_yer1_pvt + value_in[0].los_year1_pvt;
                    }
                })
            })
            return grnd_tot_los_yer1_pvt;
        }
    }

    $scope.grndTotLosYer2Pub = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPov)) {
            var grnd_tot_los_yer2_pub = 0;
            angular.forEach($scope.dlSummTouBusiFaciPov.tourism.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlLosFrmTotProvinceN') {
                        grnd_tot_los_yer2_pub = grnd_tot_los_yer2_pub + value_in[0].los_year2_pub;
                    }
                    else if(key == 'DlLosInfTotProvinceN') {
                        grnd_tot_los_yer2_pub = grnd_tot_los_yer2_pub + value_in[0].los_year2_pub;
                    }
                })
            })
            return grnd_tot_los_yer2_pub;
        }
    }

    $scope.grndTotLosYer2Pvt = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPov)) {
            var grnd_tot_los_yer2_pvt = 0;
            angular.forEach($scope.dlSummTouBusiFaciPov.tourism.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlLosFrmTotProvinceN') {
                        grnd_tot_los_yer2_pvt = grnd_tot_los_yer2_pvt + value_in[0].los_year2_pvt;
                    }
                    else if(key == 'DlLosInfTotProvinceN') {
                        grnd_tot_los_yer2_pvt = grnd_tot_los_yer2_pvt + value_in[0].los_year2_pvt;
                    }
                })
            })
            return grnd_tot_los_yer2_pvt;
        }
    }
})
