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
    var finaltotal = 0;
    $scope.is_null = false;
    $scope.currentBaselineDate = null;
    $scope.user_id;
    $scope.is_edit_disable = false;

    //Initialize data
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

    $scope.dlPrdctnLos = angular.copy(init_data);

    //Get Districts and Related basline Data
    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }

        if($scope.incident && $scope.district ) {
            $scope.is_edit_disable = true;
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': 
                    ['BacfSeasonalCrops','BacfPlantnCrops','BacfExportCrops','BacfForestry','BacfOther','BacfFarmEquipment','BacfStocks'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_2',
                    'sector':'agri_agrarian',
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                generateRefencedData()
                var data = response.data;
                console.log('*', response);
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });

                console.log('*', $scope.bs_data);
                var is_null = false;
                angular.forEach($scope.bs_data, function(value, index) {
                    if(value == null) {
                        is_null = true;
                    }
                })

                if(is_null == true) {
                    $("#modal-container-239458").modal('show');
                    console.log('baseline table or tables are empty');
                    console.log($scope.bs_data);
                    $scope.currentBaselineDate = null;
                }
                else {
                    $http({
                        method: 'POST',
                        url: '/get_latest_bs_date',
                        contentType: 'application/json; charset=utf-8',
                        data: angular.toJson({
                            'com_data': {
                                'district': $scope.district.district__id,
                                'incident': $scope.incident,
                            },
                            'table_name': 'Table_2',
                            'sector': 'agri_agrarian'
                        }),
                        dataType: 'json',
                    }).then(function successCallback(response) {
                        var result = response.data;
                        if(result == null) {
                            $("#modal-container-239458").modal('show');
                        }
                        else {
                            result = result.replace(/^"(.*)"$/, '$1');
                            $scope.currentBaselineDate = "Latest baseline data as at " + result;
                        }
                    });
                }
            }, function errorCallback(response) {

            });
        }
    }

    //Generate Fileds from related basline Data
    function generateRefencedData() {
        data_array = ['BacfSeasonalCrops', 'BacfPlantnCrops', 'BacfExportCrops', 'BacfForestry', 'BacfOther',];
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

            if(model_name == 'BacfSeasonalCrops') {
               dl_model1 = 'PldySeasonalCrops';
               particular_value_1 = 'Total';
               $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model1] = [];
            }
            if(model_name == 'BacfPlantnCrops') {
               dl_model2 = 'PldyPlantnCrops';
               particular_value_2 = 'Total';
               $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model2] = [];
            }
            if(model_name == 'BacfExportCrops') {
               dl_model3 = 'PldyExportCrops';
               particular_value_3 = 'Total';
               $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model3] = [];
            }
            if(model_name == 'BacfForestry') {
               dl_model4 = 'PldyForestry';
               particular_value_4 = 'Total';
               $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model4] = [];
            }
            if(model_name == 'BacfOther') {
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

                if(model_name == 'BacfSeasonalCrops') {
                   $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model1].push(obj1);
                }
                if(model_name == 'BacfPlantnCrops') {
                   $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model2].push(obj2);
                }
                if(model_name == 'BacfExportCrops') {
                   $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model3].push(obj3);
                }
                if(model_name == 'BacfForestry') {
                   $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model4].push(obj4);
                }
                if(model_name == 'BacfOther') {
                   $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model5].push(obj5);
                }
            });

            if(model_name == 'BacfSeasonalCrops') {
                $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model1].push(obj1);
            }
            if(model_name == 'BacfPlantnCrops') {

                $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model2].push(obj2);
            }
            if(model_name == 'BacfExportCrops') {

                $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model3].push(obj3);
            }
            if(model_name == 'BacfForestry') {
                $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model4].push(obj4);
            }
            if(model_name == 'BacfOther') {
                $scope.dlPrdctnLos.agri_agrarian.Table_7[dl_model5].push(obj5);
            }
        });
    }

    //Save Data
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
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                        'user_id': $scope.user_id,
                    },
                    'is_edit':$scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False')
                   {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
               else{
                    $("#modal-container-239453").modal('show');
               }
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }

    //Calculate Total
    $scope.CalTot=function(arr,property){
    var finaltotal = 0;

    angular.forEach(arr, function(value, key) {
        if(value.seasonal_crops != 'Total' && value.plantn_crops != 'Total' && value.export_crops !='Total' && value.forestry !='Total' && value.other_products!='Total'){
            console.log('Test',value[property]);
             finaltotal = finaltotal + value[property] ;
         }
    })
        return finaltotal;
    }

    //Edit Data
   $scope.dlDataEdit = function(form){
       $scope.is_edit = true;
       $scope.submitted = true;
        if(form.$valid){
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':  'Table_7',
                    'sector':'agri_agrarian',
                    'com_data': {
                       'district':  $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                     'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
            console.log(data);
            $scope.dlPrdctnLos = data;
            })
        }
    }

    //Cancel Edit
   $scope.cancelEdit = function(){
     $scope.is_edit = false;
     $scope.dlPrdctnLos = init_data;
    }


    //Clear Function
    $scope.clear = function() {
        console.log('done');
        $scope.is_edit = false;
        $scope.dlPrdctnLos = angular.copy(init_data);
    }

}]);
