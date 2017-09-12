//Table 4
var app = angular.module('dlAssessmenProvinceApp', ['underscore']);

app.controller("dlAssessmenProvinceController", function ($scope,$http, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.dl_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.province;
    $scope.dlAssessmenProvinceSys = null;
    $scope.user_id;
    $scope.provinces;

        $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }
        if($scope.incident && $scope.province) {
            $scope.fetchDlData();
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


    $scope.fetchDlData = function() {
        if($scope.incident && $scope.province){
            $http({
                method: "POST",
                url: '/other_govn_services/damage_losses/dl_fetch_disagtn_data',
                data: angular.toJson({
                    'table_name': 'Table_4',
                    'sector': 'other_govn_services',
                    'com_data': {
                        'province': $scope.province.district__province_id,
                        'incident': $scope.incident,
                    },
               }),
            }).success(function(data) {
                $scope.dlAssessmenProvinceSys = data;
                console.log($scope.dlAssessmenProvinceSys);
            })
        }
    }

    $scope.getTotDamages = function(type) {
        var tot_damages = 0;
        angular.forEach($scope.dlAssessmenProvinceSys.other_govn_services.Table_4[type], function(values, keys, index) {
            angular.forEach(values, function(value, key, index) {
                if(key == 'DlagdDmgProvince') {
                    angular.forEach(value, function(value_in, index_in) {
                        tot_damages = tot_damages + parseFloat(value_in.damages);
                    })
                }
            })
        })
        return tot_damages;
        console.log(tot_damages);
    }

    $scope.getTotLosYear1 = function(type) {
        var los_year1 = 0;
        angular.forEach($scope.dlAssessmenProvinceSys.other_govn_services.Table_4[type], function(values, keys, index) {
            angular.forEach(values, function(value, key, index) {
                if(key == 'DlagdLossesProvince') {
                    angular.forEach(value, function(value_in, index_in) {
                        los_year1 = los_year1 + parseFloat(value_in.los_year1);
                    })
                }
            })
        })
        return los_year1;
    }

    $scope.getTotLosYear2 = function(type) {
        var los_year2 = 0;
        angular.forEach($scope.dlAssessmenProvinceSys.other_govn_services.Table_4[type], function(values, keys, index) {
            angular.forEach(values, function(value, key, index) {
                if(key == 'DlagdLossesProvince') {
                    angular.forEach(value, function(value_in, index_in) {
                        los_year2 = los_year2 + parseFloat(value_in.los_year2);
                    })
                }
            })
        })
        return los_year2;
    }

    $scope.getTOTDamages = function() {
        var tot_damages = 0;
        angular.forEach($scope.dlAssessmenProvinceSys.other_govn_services.Table_4, function(dists, keys, index) {
            angular.forEach(dists, function(govn, index) {
                angular.forEach(govn, function(value, key, index) {
                    if(key == 'DlagdDmgProvince') {
                        angular.forEach(value, function(value_in, index_in) {
                            tot_damages = tot_damages + parseFloat(value_in.damages);
                        })
                    }
                })
            })
        })
        return tot_damages;
    }

    $scope.getTOTLosYear1 = function() {
        var los_year1 = 0;
        angular.forEach($scope.dlAssessmenProvinceSys.other_govn_services.Table_4, function(dists, keys, index) {
            angular.forEach(dists, function(govn, index) {
                angular.forEach(govn, function(value, key, index) {
                    if(key == 'DlagdLossesProvince') {
                        angular.forEach(value, function(value_in, index_in) {
                            los_year1 = los_year1 + parseFloat(value_in.los_year1);
                        })
                    }
                })
            })
        })
        return los_year1;
    }

    $scope.getTOTLosYear2 = function() {
        var los_year2 = 0;
        angular.forEach($scope.dlAssessmenProvinceSys.other_govn_services.Table_4, function(dists, keys, index) {
            angular.forEach(dists, function(govn, index) {
                angular.forEach(govn, function(value, key, index) {
                    if(key == 'DlagdLossesProvince') {
                        angular.forEach(value, function(value_in, index_in) {
                            los_year2 = los_year2 + parseFloat(value_in.los_year2);
                        })
                    }
                })
            })
        })
        return los_year2;
    }
})


