//Table 3
var app = angular.module('dlIrrigationApp', [])

app.controller('dlIrrigationController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    var init_data = {
        'agri_irrigation': {
            'Table_3': {
                //Tab 1     DlMajorTanks, DlMediumTanks, DlMinorTanks, DlAnicuts, DlOtherStructures, DlRiverEmbankmnt, DlBuildings
                'DlMajorTanks': [{
                    irrigation_assets : 'Bund',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Riprap',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Spill',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Main Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Distributor Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Field Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Total',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }],
                'DlMediumTanks': [{
                    irrigation_assets : 'Bund',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Riprap',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Spill',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Main Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Distributor Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Field Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Total',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }],
                'DlMinorTanks': [{
                    irrigation_assets : 'Bund',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Riprap',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Spill',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Main Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Distributor Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Field Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Total',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }],
                'DlAnicuts': [{
                    irrigation_assets : 'Bund',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Riprap',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Spill',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Main Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Distributor Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Field Canals',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Total',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }],
                'DlOtherStructures': [{
                    irrigation_assets : 'Roads',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Bridges',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Culverts',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Causeways',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Retaining walls',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Interlock pavings',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Regulators',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Turnout',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Drops',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Retaining walls',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Canal linings',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Canal spill',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Under Crossing',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Over crossing',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }, {
                    irrigation_assets : 'Total',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }],
                'DlRiverEmbankmnt': [{
                    irrigation_assets : 'River Embankmentss',
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                }],
                'DlBuildings': [{
                    building : '1 floor',
                    part_damaged_num : null,
                    part_damaged_roof : null,
                    part_damaged_wall : null,
                    part_damaged_floor : null,
                    tot_destroyed_num : null,
                    tot_destroyed_area : null,
                    damages : null,
                }, {
                    building : '2-3 floors',
                    part_damaged_num : null,
                    part_damaged_roof : null,
                    part_damaged_wall : null,
                    part_damaged_floor : null,
                    tot_destroyed_num : null,
                    tot_destroyed_area : null,
                    damages : null,
                }, {
                    building : 'More than 3 floors',
                    part_damaged_num : null,
                    part_damaged_roof : null,
                    part_damaged_wall : null,
                    part_damaged_floor : null,
                    tot_destroyed_num : null,
                    tot_destroyed_area : null,
                    damages : null,
                }, {
                    building : 'Total',
                    part_damaged_num : null,
                    part_damaged_roof : null,
                    part_damaged_wall : null,
                    part_damaged_floor : null,
                    tot_destroyed_num : null,
                    tot_destroyed_area : null,
                    damages : null,
                }, {
                    building : 'TOTAL DAMAGES',
                    part_damaged_num : null,
                    part_damaged_roof : null,
                    part_damaged_wall : null,
                    part_damaged_floor : null,
                    tot_destroyed_num : null,
                    tot_destroyed_area : null,
                    damages : null,
                }],
                //Tab 2     DlLosMajorTanks, DlLosMediumTanks, DlLosMinorTanks, DlLosAnicuts, DlLosOther
                'DlLosMajorTanks': [{
                    irrigation_assets : 'Tank 1',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }, {
                    irrigation_assets : 'Tank 2',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }],
                'DlLosMediumTanks':[{
                    irrigation_assets : 'Tank 1',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }, {
                    irrigation_assets : 'Tank 2',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }],
                'DlLosMinorTanks':[{
                    irrigation_assets : 'Tank 1',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }, {
                    irrigation_assets : 'Tank 2',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }],
                'DlLosAnicuts':[{
                    irrigation_assets : 'Anicut 1',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }, {
                    irrigation_assets : 'Anicut 2',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }],
                'DlLosOther':[{
                    irrigation_assets : 'Other Structures',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }, {
                    irrigation_assets : 'River Embankments',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }, {
                    irrigation_assets : 'Buildings',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }, {
                    irrigation_assets : 'TOTAL LOSSES',
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                }],
            }
        }
    }

    $scope.dlIrrigation = init_data;

    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }

        if($scope.incident && $scope.district ) {
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BsIfMajor', 'BsIfMedium', 'BsIfMinor', 'BsIfAnicuts', 'BsRciaMajorTanks', 'BsRciaMediumTanks', 'BsRciaMinorTanks', 'BsRciaAnicuts', 'BsRciaOtherStructures', 'BsRciRiverEmbankmnt'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_3',
                    'sector':'agri_irrigation',
                        }),
                  dataType: 'json',


            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                  $scope.bs_data[key] = JSON.parse(value);
                });
                console.log(data);
                generateRefencedData();
            }, function errorCallback(response) {

            });
        }
    }

    function generateRefencedData() {
        data_array = ['BsIfMajor', 'BsIfMedium', 'BsIfMinor', 'BsIfAnicuts', 'BsRciaMajorTanks', 'BsRciaMediumTanks', 'BsRciaMinorTanks', 'BsRciaAnicuts', 'BsRciaOtherStructures', 'BsRciRiverEmbankmnt'];

        var dl_model1 = null;
        var dl_model2 = null;
        var dl_model3 = null;
        var dl_model4 = null;
        var dl_model5 = null;
        var dl_model6 = null;
        var dl_model7 = null;
        var dl_model8 = null;
        var dl_model9 = null;

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;
            var particular_value_2 = null;
            var particular_value_3 = null;
            var particular_value_4 = null;
            var particular_value_5 = null;
            var particular_value_6 = null;
            var particular_value_7 = null;
            var particular_value_8 = null;
            var particular_value_9 = null;

            if(model_name == 'BsRciaMajorTanks') {
               dl_model1 = 'DlMajorTanks';
               particular_value_1 = 'Total';
               $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model1] = [];
            }
            if(model_name == 'BsRciaMediumTanks') {
               dl_model2 = 'DlMediumTanks';
               particular_value_2 = 'Total';
               $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model2] = [];
            }
            if(model_name == 'BsRciaMinorTanks') {
               dl_model3 = 'DlMinorTanks';
               particular_value_3 = 'Total';
               $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model3] = [];
            }
            if(model_name == 'BsRciaAnicuts') {
               dl_model4 = 'DlAnicuts';
               particular_value_4 = 'Total';
               $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model4] = [];
            }
            if(model_name == 'BsRciaOtherStructures') {
               dl_model5 = 'DlOtherStructures';
               particular_value_5 = 'Total';
               $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model5] = [];
            }

            if(model_name == 'BsIfMajor') {
               dl_model6 = 'DlLosMajorTanks';
               particular_value_6 = 'Total';
               $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model6] = [];
            }
            if(model_name == 'BsIfMedium') {
               dl_model7 = 'DlLosMediumTanks';
               particular_value_7 = 'Total';
               $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model7] = [];
            }
            if(model_name == 'BsIfMinor') {
               dl_model8 = 'DlLosMinorTanks';
               particular_value_8 = 'Total';
               $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model8] = [];
            }
            if(model_name == 'BsIfAnicuts') {
               dl_model9 = 'DlLosAnicuts';
               particular_value_9 = 'Total';
               $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model9] = [];
            }

            var obj1 = {
                irrigation_assets : particular_value_1,
                partially_damaged : null,
                totally_destroyed : null,
                damages : null,
            };
            var obj2 = {
                irrigation_assets : particular_value_2,
                partially_damaged : null,
                totally_destroyed : null,
                damages : null,
            };
            var obj3 = {
                irrigation_assets : particular_value_3,
                partially_damaged : null,
                totally_destroyed : null,
                damages : null,
            };
            var obj4 = {
                irrigation_assets : particular_value_4,
                partially_damaged : null,
                totally_destroyed : null,
                damages : null,
            };
            var obj5 = {
                irrigation_assets : particular_value_5,
                partially_damaged : null,
                totally_destroyed : null,
                damages : null,
            };

            var obj6 = {
                irrigation_assets : particular_value_6,
                high_operation_cost : null,
                other_unexpected_expenses : null,
                total_los : null,
            };
            var obj7 = {
                irrigation_assets : particular_value_7,
                high_operation_cost : null,
                other_unexpected_expenses : null,
                total_los : null,
            };
            var obj8 = {
                irrigation_assets : particular_value_8,
                high_operation_cost : null,
                other_unexpected_expenses : null,
                total_los : null,
            };
            var obj9 = {
                irrigation_assets : particular_value_9,
                high_operation_cost : null,
                other_unexpected_expenses : null,
                total_los : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    irrigation_assets : value.fields.irrigation_assets,
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                };
                var obj2 = {
                    irrigation_assets : value.fields.irrigation_assets,
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                };
                var obj3 = {
                    irrigation_assets : value.fields.irrigation_assets,
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                };
                var obj4 = {
                    irrigation_assets : value.fields.irrigation_assets,
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                };
                var obj5 = {
                    irrigation_assets : value.fields.irrigation_assets,
                    partially_damaged : null,
                    totally_destroyed : null,
                    damages : null,
                };

                var obj6 = {
                    irrigation_assets : value.fields.irrigation_assets,
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                };
                var obj7 = {
                    irrigation_assets : value.fields.irrigation_assets,
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                };
                var obj8 = {
                    irrigation_assets : value.fields.irrigation_assets,
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                };
                var obj9 = {
                    irrigation_assets : value.fields.irrigation_assets,
                    high_operation_cost : null,
                    other_unexpected_expenses : null,
                    total_los : null,
                };

                if(model_name == 'BsRciaMajorTanks') {
                   $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model1].push(obj1);
                }
                if(model_name == 'BsRciaMediumTanks') {
                   $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model2].push(obj2);
                }
                if(model_name == 'BsRciaMinorTanks') {
                   $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model3].push(obj3);
                }
                if(model_name == 'BsRciaAnicuts') {
                   $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model4].push(obj4);
                }
                if(model_name == 'BsRciaOtherStructures') {
                   $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model5].push(obj5);
                }

                if(model_name == 'BsIfMajor') {
                   $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model6].push(obj6);
                }
                if(model_name == 'BsIfMedium') {
                   $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model7].push(obj7);
                }
                if(model_name == 'BsIfMinor') {
                   $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model8].push(obj8);
                }
                if(model_name == 'BsIfAnicuts') {
                   $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model9].push(obj9);
                }
            });

            if(model_name == 'BsRciaMajorTanks') {
                $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model1].push(obj1);
            }
            if(model_name == 'BsRciaMediumTanks') {
                $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model2].push(obj2);
            }
            if(model_name == 'BsRciaMinorTanks') {
                $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model3].push(obj3);
            }
            if(model_name == 'BsRciaAnicuts') {
                $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model4].push(obj4);
            }
            if(model_name == 'BsRciaOtherStructures') {
                $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model5].push(obj5);
            }

            if(model_name == 'BsIfMajor') {
                $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model6].push(obj6);
            }
            if(model_name == 'BsIfMedium') {
                $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model7].push(obj7);
            }
            if(model_name == 'BsIfMinor') {
                $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model8].push(obj8);
            }
            if(model_name == 'BsIfAnicuts') {
                $scope.dlAirTrnspotation.agri_irrigation.Table_3[dl_model9].push(obj9);
            }
        });
    }

    $scope.saveDlData = function(form) {
        alert('dsfdsf');
        $scope.submitted = true;
        if(form.$valid) {
            alert('Save Table 3');
        }
    }
}]);
