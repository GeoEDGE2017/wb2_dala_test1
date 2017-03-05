//Table 6
var app = angular.module('dlInvsmntLosApp', [])
app.controller('dlInvsmntLosController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;

    var init_data = {
        'agri_agrarian': {
            'Table_6': {
                //Tab 1
                'DildSeasonalCrops': [{
                    seasonal_crops : 'Rice',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }, {
                    seasonal_crops : 'Maize',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }, {
                    seasonal_crops : 'Vegetables',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }, {
                    seasonal_crops : 'Floriculture crops',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }, {
                    seasonal_crops : 'Total',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }],
                'DildPlantnCrops': [{
                    plantn_crops : 'Coconut',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    plantn_crops : 'Tea',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    plantn_crops : 'Rubber',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    plantn_crops : 'Total',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }],
                'DildExportCrops': [{
                    export_crops : 'Coffee',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    export_crops : 'Fruit trees',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    export_crops : 'Cinnamon',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    export_crops : 'Total',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }],
                'DildForestry': [{
                    forestry : 'Timber',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    forestry : 'Total',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    forestry : 'GRAND TOTAL',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }],
            }
        }
    }

    $scope.dlInvsmntLos = init_data;

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
                    'db_tables': ['BacfSeasonalCrops', 'BacfPlantnCrops', 'BacfExportCrops', 'BacfForestry'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_6',
                    'sector':'agri_agrarian',
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

        data_array = ['BacfSeasonalCrops', 'BacfPlantnCrops', 'BacfExportCrops', 'BacfForestry'];
            var dl_model1 = null;
            var dl_model2 = null;
            var dl_model3 = null;
            var dl_model4 = null;

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;
            var particular_value_2 = null;
            var particular_value_3 = null;
            var particular_value_4 = null;


            if(model_name == 'BacfSeasonalCrops') {
               dl_model1 = 'DildSeasonalCrops';
               particular_value_1 = 'Total';
               $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model1] = [];
            }
            if(model_name == 'BacfPlantnCrops') {
               dl_model2 = 'DildPlantnCrops';
               particular_value_2 = 'Total';
               $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model2] = [];
            }
            if(model_name == 'BacfExportCrops') {
               dl_model3 = 'DildExportCrops';
               particular_value_3 = 'Total';
               $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model3] = [];
            }
            if(model_name == 'BacfForestry') {
               dl_model4 = 'DildForestry';
               particular_value_4 = 'Total';
               $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model4] = [];
            }

            var obj1 = {
                seasonal_crops : particular_value_1,
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            };
            var obj2 = {
                plantn_crops : particular_value_2,
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            };
            var obj3 = {
                export_crops : particular_value_3,
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            };
            var obj4 = {
                forestry : particular_value_4,
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    seasonal_crops : value.fields.seasonal_crops,
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                };
                var obj2 = {
                    plantn_crops : value.fields.plantn_crops,
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                };
                var obj3 = {
                    export_crops : value.fields.export_crops,
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                };
                var obj4 = {
                    forestry : value.fields.forestry,
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                };

                if(model_name == 'BacfSeasonalCrops') {
                   $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model1].push(obj1);
                }
                if(model_name == 'BacfPlantnCrops') {
                   $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model2].push(obj2);
                }
                if(model_name == 'BacfExportCrops') {
                   $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model3].push(obj3);
                }
                if(model_name == 'BacfForestry') {
                   $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model4].push(obj4);
                }
            });

            if(model_name == 'BacfSeasonalCrops') {
                $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model1].push(obj1);
            }
            if(model_name == 'BacfPlantnCrops') {

                $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model2].push(obj2);
            }
            if(model_name == 'BacfExportCrops') {

                $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model3].push(obj3);
            }
            if(model_name == 'BacfForestry') {
                $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model4].push(obj4);
            }
        });
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            alert('Save Table 6');
        }
    }
}]);
