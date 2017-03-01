//Table 4
var app = angular.module('dlFrstPrductAsetsApp', [])

app.controller('dlFrstPrductAsetsController', ['$scope', '$http', function($scope, $http) {

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
            'Table_4': {
                'DcpfFarmEquipment': [{
                    assets : 'Tractor',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfSeasonalCrops': [{
                    assets : 'Rice',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Maize',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Vegetables',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Floriculture crops',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfPlantnCrops': [{
                    assets : 'Coconut',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Tea',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Rubber',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfExportCrops': [{
                    assets : 'Coffee',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Fruit trees',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Cinnamon',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfForestry': [{
                    assets : 'Timber',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfOther': [{
                    assets : 'Honey',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfStocks': [{
                    assets : 'Seeds',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Fertilizers',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Pesticides',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
            }
        }
    }

    $scope.dlFrstPrductAsets = init_data;

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
                    'db_tables': ['BacfFarmEquipment','BcagSeasonalCrops', 'BcagPlantnCrops', 'BcagExportCrops', 'BcagForestry', 'BcagOther', 'BacfStocks'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_4',
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
        data_array = ['BacfFarmEquipment','BcagSeasonalCrops', 'BcagPlantnCrops', 'BcagExportCrops', 'BcagForestry', 'BcagOther', 'BacfStocks'];
            var dl_model1 = null;
            var dl_model2 = null;
            var dl_model3 = null;
            var dl_model4 = null;
            var dl_model5 = null;
            var dl_model6 = null;
            var dl_model7 = null;

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

            if(model_name == 'BacfFarmEquipment') {
               dl_model1 = 'DcpfFarmEquipment';
               particular_value_1 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model1] = [];
            }
            if(model_name == 'BcagSeasonalCrops') {
               dl_model2 = 'DcpfSeasonalCrops';
               particular_value_2 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model2] = [];
            }
            if(model_name == 'BcagPlantnCrops') {
               dl_model3 = 'DcpfPlantnCrops';
               particular_value_3 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model3] = [];
            }
            if(model_name == 'BcagExportCrops') {
               dl_model4 = 'DcpfExportCrops';
               particular_value_4 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model4] = [];
            }
            if(model_name == 'BcagForestry') {
               dl_model5 = 'DcpfForestry';
               particular_value_5 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model5] = [];
            }
            if(model_name == 'BcagOther') {
               dl_model6 = 'DcpfOther';
               particular_value_6 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model6] = [];
            }
            if(model_name == 'BacfStocks') {
               dl_model7 = 'DcpfStocks';
               particular_value_7 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model7] = [];
            }

            var obj1 = {
                assets : particular_value_1,
                avg_replace_cost : null,
                avg_repair_cost : null,
            };
            var obj2 = {
                seasonal_crops : particular_value_2,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj3 = {
                plantn_crops : particular_value_3,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj4 = {
                export_crops : particular_value_4,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj5 = {
                forestry : particular_value_5,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj6 = {
                other_products : particular_value_6,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj7 = {
                assets : particular_value_7,
                avg_value : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    assets : value.fields.assets,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                };
                var obj2 = {
                    seasonal_crops : value.fields.seasonal_crops,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj3 = {
                    plantn_crops : value.fields.plantn_crops,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj4 = {
                    export_crops : value.fields.export_crops,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj5 = {
                    forestry : value.fields.forestry,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj6 = {
                    other_products : value.fields.other_products,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj7 = {
                    assets : value.fields.assets,
                    avg_value : null,
                };

                if(model_name == 'BacfFarmEquipment') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model1].push(obj1);
                }
                if(model_name == 'BcagSeasonalCrops') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model2].push(obj2);
                }
                if(model_name == 'BcagPlantnCrops') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model3].push(obj3);
                }
                if(model_name == 'BcagExportCrops') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model4].push(obj4);
                }
                if(model_name == 'BcagForestry') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model5].push(obj5);
                }
                if(model_name == 'BcagOther') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model6].push(obj6);
                }
                if(model_name == 'BacfStocks') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model7].push(obj7);
                }

            });

            if(model_name == 'BacfFarmEquipment') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model1].push(obj1);
            }
            if(model_name == 'BcagSeasonalCrops') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model2].push(obj2);
            }
            if(model_name == 'BcagPlantnCrops') {

                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model3].push(obj3);
            }
            if(model_name == 'BcagExportCrops') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model4].push(obj4);
            }
            if(model_name == 'BcagForestry') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model5].push(obj5);
            }
            if(model_name == 'BcagOther') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model6].push(obj6);
            }
            if(model_name == 'BacfStocks') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model7].push(obj7);
            }
        });
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            console.log($scope.dlFrstPrductAsets);
            alert('Save Table 4');
        }
    }
}]);
