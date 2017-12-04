//Table 5
var app = angular.module('dlNationwideApp', ['underscore']);

app.controller("dlNationwideController", function ($scope,$http, _) {
    $scope.incident;
    $scope.user_id;
    $scope.dlNationwideSys = null;

    $scope.fetchDlData = function() {
        if($scope.incident) {
            $http({
                method: "POST",
                url: '/other_govn_services/damage_losses/dl_fetch_disagtn_data',
                data: angular.toJson({
                    'table_name': 'Table_5',
                    'sector': 'other_govn_services',
                    'com_data': {
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.dlNationwideSys = data;
                console.log($scope.dlNationwideSys);
            })
        }
    }

    $scope.getTotDamages = function(type) {
        var tot_damages = 0;
        angular.forEach($scope.dlNationwideSys.other_govn_services.Table_5[type], function(values, keys, index) {
            angular.forEach(values, function(value, key, index) {
                if(value.length > 0) {
                    if(key == 'DlagdDmgNational') {
                        angular.forEach(value, function(value_in, index_in) {
                            tot_damages = tot_damages + parseFloat(value_in.damages);
                        })
                    }
                }
            })
        })
        return tot_damages;
    }

    $scope.getTotLosYear1 = function(type) {
        var los_year1 = 0;
        angular.forEach($scope.dlNationwideSys.other_govn_services.Table_5[type], function(values, keys, index) {
            angular.forEach(values, function(value, key, index) {
                if(value.length > 0) {
                    if(key == 'DlagdLossesNational') {
                        angular.forEach(value, function(value_in, index_in) {
                            los_year1 = los_year1 + parseFloat(value_in.los_year1);
                        })
                    }
                }
            })
        })
        return los_year1;
    }

    $scope.getTotLosYear2 = function(type) {
        var los_year2 = 0;
        angular.forEach($scope.dlNationwideSys.other_govn_services.Table_5[type], function(values, keys, index) {
            angular.forEach(values, function(value, key, index) {
                if(value.length > 0) {
                    if(key == 'DlagdLossesNational') {
                        angular.forEach(value, function(value_in, index_in) {
                            los_year2 = los_year2 + parseFloat(value_in.los_year2);
                        })
                    }
                }
            })
        })
        return los_year2;
    }

    $scope.getTOTDamages = function() {
        var tot_damages = 0;
        angular.forEach($scope.dlNationwideSys.other_govn_services.Table_5, function(dists, keys, index) {
            angular.forEach(dists, function(govn, index) {
                angular.forEach(govn, function(value, key, index) {
                    if(value.length > 0) {
                        if(key == 'DlagdDmgNational') {
                            angular.forEach(value, function(value_in, index_in) {
                                tot_damages = tot_damages + parseFloat(value_in.damages);
                            })
                        }
                    }
                })
            })
        })
        return tot_damages;
    }

    $scope.getTOTLosYear1 = function() {
        var los_year1 = 0;
        angular.forEach($scope.dlNationwideSys.other_govn_services.Table_5, function(dists, keys, index) {
            angular.forEach(dists, function(govn, index) {
                angular.forEach(govn, function(value, key, index) {
                    if(value.length > 0) {
                        if(key == 'DlagdLossesNational') {
                            angular.forEach(value, function(value_in, index_in) {
                                los_year1 = los_year1 + parseFloat(value_in.los_year1);
                            })
                        }
                    }
                })
            })
        })
        return los_year1;
    }

    $scope.getTOTLosYear2 = function() {
        var los_year2 = 0;
        angular.forEach($scope.dlNationwideSys.other_govn_services.Table_5, function(dists, keys, index) {
            angular.forEach(dists, function(govn, index) {
                angular.forEach(govn, function(value, key, index) {
                    if(value.length > 0) {
                        if(key == 'DlagdLossesNational') {
                            angular.forEach(value, function(value_in, index_in) {
                                los_year2 = los_year2 + parseFloat(value_in.los_year2);
                            })
                        }
                    }
                })
            })
        })
        return los_year2;
    }
})


