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
               console.log('load ', data);
            })
        }
    }

    $scope.getTotal = function(key) {
        $scope.finaltotalprivate = 0;
        var totalDamages = 0;
        totalDamages =  totalDamages + ($scope.districtData.other_govn_services.Table_3[key].DlagdDmgDistrict[0] ?
                          ($scope.districtData.other_govn_services.Table_3[key].DlagdDmgDistrict[0].damages ?
                         $scope.districtData.other_govn_services.Table_3[key].DlagdDmgDistrict[0].damages : 0):0);

        var totaldpubstring = "totalDamages"+ key;

        var model = $parse(totaldpubstring);
        model.assign($scope, totalDamages);
    }
})


