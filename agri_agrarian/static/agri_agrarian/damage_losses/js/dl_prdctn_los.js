//Table 7
var app = angular.module('dlPrdctnLosApp', [])
app.controller('dlPrdctnLosController', ['$scope', '$http', function($scope, $http) {
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
            'Table_7': {
                'PldySeasonalCrops': [{
                    seasonal_crops : 'Rice',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    seasonal_crops : 'Maize',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    seasonal_crops : 'Vegetables',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    seasonal_crops : 'Floriculture crops',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    seasonal_crops : 'Total',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }],
                'PldyPlantnCrops': [{
                    plantn_crops : 'Coconut',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    plantn_crops : 'Tea',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    plantn_crops : 'Rubber',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    plantn_crops : 'Total',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }],
                'PldyExportCrops': [{
                    export_crops : 'Coffee',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    export_crops : 'Fruit trees',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    export_crops : 'Cinnamon',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    export_crops : 'Total',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }],
                'PldyForestry': [{
                    forestry : 'Timber',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    forestry : 'Total',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }],
                'PldyOther': [{
                    other_products : 'Honey',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    other_products : 'Total',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }, {
                    other_products : 'TOTAL',
                    redctn_year_1_pub : null,
                    redctn_year_1_pvt : null,
                    redctn_year_2_pub : null,
                    redctn_year_2_pvt : null,
                    prod_year_1_pub : null,
                    prod_year_1_pvt : null,
                    prod_year_2_pub : null,
                    prod_year_2_pvt : null,
                    tot_prod_pub : null,
                    tot_prod_pvt : null,
                }],
                'PldyOtherLos': [{
                    other_los : 'Clearing of Debris',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_pub : null,
                    tot_pvt : null,
                }, {
                    other_los : 'Higher production cost',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_pub : null,
                    tot_pvt : null,
                }, {
                    other_los : 'Other unexpected expenses',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_pub : null,
                    tot_pvt : null,
                }, {
                    other_los : 'TOTAL',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_pub : null,
                    tot_pvt : null,
                }],
            }
        }
    }

    $scope.dlPrdctnLos = init_data;

    console.log($scope.dlPrdctnLos);

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
                    'db_tables': ['BcagSeasonalCrops', 'BcagPlantnCrops', 'BcagExportCrops', 'BcagForestry', 'BcagOther'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_7',
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
        data_array = ['BcagSeasonalCrops', 'BcagPlantnCrops', 'BcagExportCrops', 'BcagForestry', 'BcagOther'];
        var dl_model1 = null;
        var dl_model2 = null;
        var dl_model3 = null;
        var dl_model4 = null;
        var dl_model5 = null;

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;
            var particular_value_2 = null;
            var particular_value_3 = null;
            var particular_value_4 = null;
            var particular_value_5 = null;

            if(model_name == 'BcagSeasonalCrops') {
               dl_model1 = 'PldySeasonalCrops';
               particular_value_1 = 'Total';
               $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model1] = [];
            }
            if(model_name == 'BcagPlantnCrops') {
               dl_model2 = 'PldyPlantnCrops';
               particular_value_2 = 'Total';
               $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model2] = [];
            }
            if(model_name == 'BcagExportCrops') {
               dl_model3 = 'PldyExportCrops';
               particular_value_3 = 'Total';
               $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model3] = [];
            }
            if(model_name == 'BcagForestry') {
               dl_model4 = 'PldyForestry';
               particular_value_4 = 'Total';
               $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model4] = [];
            }
            if(model_name == 'BcagOther') {
               dl_model5 = 'PldyOther';
               particular_value_5 = 'Total';
               $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model5] = [];
            }

            var obj1 = {
                seasonal_crops : particular_value_1,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj2 = {
                plantn_crops : particular_value_2,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj3 = {
                export_crops : particular_value_3,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj4 = {
                forestry : particular_value_4,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj5 = {
                other_products : particular_value_5,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    seasonal_crops : value.fields.seasonal_crops,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj2 = {
                    plantn_crops : value.fields.plantn_crops,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj3 = {
                    export_crops : value.fields.export_crops,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj4 = {
                    forestry : value.fields.forestry,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj5 = {
                    other_products : value.fields.other_products,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };

                if(model_name == 'BcagSeasonalCrops') {
                   $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model1].push(obj1);
                }
                if(model_name == 'BcagPlantnCrops') {
                   $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model2].push(obj2);
                }
                if(model_name == 'BcagExportCrops') {
                   $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model3].push(obj3);
                }
                if(model_name == 'BcagForestry') {
                   $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model4].push(obj4);
                }
                if(model_name == 'BcagOther') {
                   $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model5].push(obj5);
                }
            });

            if(model_name == 'BcagSeasonalCrops') {
                $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model1].push(obj1);
            }
            if(model_name == 'BcagPlantnCrops') {

                $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model2].push(obj2);
            }
            if(model_name == 'BcagExportCrops') {

                $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model3].push(obj3);
            }
            if(model_name == 'BcagForestry') {
                $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model4].push(obj4);
            }
            if(model_name == 'BcagOther') {
                $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model5].push(obj5);
            }
        });
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: 'POST',
                url: '/dl_save_data',
               contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlPrdctnLos,
                    'com_data': {
                       'district': $scope.district.district__id,
                        'incident' : $scope.incident,
                    },
                    'is_edit':$scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False')
                    $scope.is_valid_data = false;
               else
                    $("#modal-container-239453").modal('show');
            }, function errorCallback(response) {
                console.log(response);
            });

        }
    }
}]);
