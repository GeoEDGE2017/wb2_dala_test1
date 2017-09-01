//Table 3
var app = angular.module('dlAssessmentDistrictApp', ['underscore']);

app.controller("dlAssessmentDistrictController", function ($scope,$http, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.dl_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.dlAssessmentDistrictSys = null;
    $scope.user_id;

    $scope.insertAsset = function(table) {
        console.log($scope.dlAssessmentDistrictSys.other_govn_services.Table_2[table]);
        var new_row;
        if(table == 'DlagdDmgOfficeEquipment') {
            new_row = {
                name_dept : '',
                num_tot_destroyed : null,
                num_partial_damaged : null,
                damages : null,
            }
        }
        else if(table == 'DlagdDmgMachinery') {
            new_row = {
                name_dept : '',
                num_tot_destroyed : null,
                num_partial_damaged : null,
                damages : null,
            }
        }

        $scope.dlAssessmentDistrictSys.other_govn_services.Table_2[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'DlagdDmgOfficeEquipment') {
            $scope.dlAssessmentDistrictSys.other_govn_services.Table_2.DlagdDmgOfficeEquipment.splice(index, 1);
        }
        else if(table == 'DlagdDmgMachinery') {
            $scope.dlAssessmentDistrictSys.other_govn_services.Table_2.DlagdDmgMachinery.splice(index, 1);
        }
    }

    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user':$scope.user_id,
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                console.log(data);
                console.log()
            })
        }

        if($scope.incident && $scope.district) {
            alert(' incident = ' + $scope.incident + ", district=" + $scope.district.district__id);
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BcsStructure', 'BcsOfficeEquipment', 'BcsMachinery'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                   'table_name': 'Table_1',
                   'sector': 'other_govn_services',
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });
                console.log($scope.bs_data);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }

    $scope.fetchDlData = function() {
        console.log('fetchDlData');
        if($scope.incident && $scope.district){
            $http({
                method: "POST",
                url: '/other_govn_services/damage_losses/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name': 'Table_3',
                    'sector': 'other_govn_services',
                    'com_data': {
                        'incident': $scope.incident,
                        'district': $scope.district.district__id,
                    },
                }),
            }).success(function(data) {
                $scope.districtData = data;
                console.log($scope.districtData);
            })
        }
    }

    $scope.getTotDamages = function(type) {
        var tot_damages = 0;
        angular.forEach($scope.districtData.other_govn_services.Table_3[type], function(values, keys, index) {
            angular.forEach(values, function(value, key, index) {
                if(key == 'DlagdDmgDistrict') {
                    angular.forEach(value, function(value_in, index_in) {
                        tot_damages = tot_damages + parseFloat(value_in.damages);
                    })
                }
            })
        })
        return tot_damages;
    }

    $scope.getTotLosYear1 = function(type) {
        var los_year1 = 0;
        angular.forEach($scope.districtData.other_govn_services.Table_3[type], function(values, keys, index) {
            angular.forEach(values, function(value, key, index) {
                if(key == 'DlagdLossesDistrict') {
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
        angular.forEach($scope.districtData.other_govn_services.Table_3[type], function(values, keys, index) {
            angular.forEach(values, function(value, key, index) {
                if(key == 'DlagdLossesDistrict') {
                    angular.forEach(value, function(value_in, index_in) {
                        los_year2 = los_year2 + parseFloat(value_in.los_year2);
                    })
                }
            })
        })
        return los_year2;
    }

    $scope.grandTotDamages = function(type) {
        return  $scope.getTotDamages('Provincial Government') +  $scope.getTotDamages('Provincial Government') +
             $scope.getTotDamages('National Ministry or Agency');
    }

    $scope.grandTotLosYear1 = function(type) {
        return  $scope.getTotLosYear1('Provincial Government') +  $scope.getTotLosYear1('Provincial Government') +
             $scope.getTotLosYear1('National Ministry or Agency');
    }

    $scope.grandTotLosYear2 = function(type) {
        return  $scope.getTotLosYear2('Provincial Government') +  $scope.getTotLosYear2('Provincial Government') +
             $scope.getTotLosYear2('National Ministry or Agency');
    }
})

