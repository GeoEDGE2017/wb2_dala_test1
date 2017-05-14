//Table 2
var app = angular.module('bsInfoAcfoAssetsApp', [])
app.controller('bsInfoAcfoAssetsController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;


//Initialize data
    var init_data = {
        'agri_agrarian': {
            'Table_2': {
                'BacfSeasonalCrops': [{
                    seasonal_crops : 'Rice',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                }, {
                    seasonal_crops : 'Maize',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                }, {
                    seasonal_crops : 'Vegetables',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                }, {
                    seasonal_crops : 'Floriculture crops',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                }],
                'BacfPlantnCrops': [{
                    plantn_crops : 'Coconut',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                },{
                    plantn_crops : 'Tea',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                },{
                    plantn_crops : 'Rubber',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                }],
                'BacfExportCrops': [{
                    export_crops : 'Coffee',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                }, {
                    export_crops : 'Fruit trees',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                }, {
                    export_crops : 'Cinnamon',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                }],
                'BacfForestry': [{
                    forestry : 'Timber',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                }],
                'BacfOther': [{
                    other_products : 'Honey',
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                }],
                'BacfFarmEquipment': [{
                    assets : 'Tractor',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BacfStocks': [{
                    assets : 'Seeds',
                    avg_value : null,
                }, {
                    assets : 'Fertilizer',
                    avg_value : null,
                }, {
                    assets : 'Pesticides',
                    avg_value : null,
                }]
            }
        }
    }

    $scope.bsInfoAcfoAssets = angular.copy(init_data);
//related baseline data
    $scope.getValue=function getBsData(selectedValue) {

    console.log('district',$scope.district);

        if($scope.district) {
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BcagSeasonalCrops','BcagPlantnCrops','BcagExportCrops','BcagForestry','BcagOther'],
                    'com_data': {
                        'district': $scope.district,
                        'incident': 9,
                    },
                    'table_name': 'Table_1',
                    'sector':'agri_agrarian',
                        }),
                  dataType: 'json',


            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                  $scope.bs_data[key] = JSON.parse(value);
                });
                console.log(response);
                getData();
            }, function errorCallback(response) {


            });
        }
    }



//Generate fields Related to baseline Data
    function getData() {
        data_array = ['BcagSeasonalCrops','BcagPlantnCrops','BcagExportCrops','BcagForestry','BcagOther'];
            var bs_model1 = null;
            var bs_model2 = null;
            var bs_model3 = null;
            var bs_model4 = null;
            var bs_model5 = null;
            

        angular.forEach(data_array, function(value, key) {

            obj_array = $scope.bs_data[value];
            model_name = value;
            if(model_name == 'BcagSeasonalCrops') {
               bs_model1 = 'BacfSeasonalCrops';
               $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model1] = [];

            }
//            if(model_name == 'BcagPlantnCrops') {
//               bs_model2 = 'BacfPlantnCrops';
//               $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model2] = [];
//            }
//            if(model_name == 'BcagExportCrops') {
//               bs_model3 = 'BacfExportCrops';
//               $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model3] = [];
//            }
//            if(model_name == 'BcagForestry') {
//               bs_model4 = 'BacfForestry';
//               $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model4] = [];
//            }
//            if(model_name == 'BcagOther') {
//               bs_model5 = 'BacfOther';
//               $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model5] = [];
//            }

//            angular.forEach(obj_array, function(value, key) {
//
//                var obj1 = {
//                    seasonal_crops : value.fields.seasonal_crops,
//                    avg_value : null,
//                    productn_pub : null,
//                    productn_pvt : null,
//                    productn_cost_nplanted : null,
//                    productn_cost_mstage : null,
//                    productn_cost_hstage : null,
//                    };
//                var obj2 = {
//                    plantn_crops : value.fields.plantn_crops,
//                    areas_cultivated : null,
//                    avg_val_land : null,
//                    num_families : null,
//                    num_male : null,
//                    num_female : null,
//                };
//                var obj3 = {
//                    export_crops : value.fields.export_crops,
//                    areas_cultivated : null,
//                    avg_val_land : null,
//                    num_families : null,
//                    num_male : null,
//                    num_female : null,
//                };
//                var obj4 = {
//                    forestry : value.fields.forestry,
//                    areas_cultivated : null,
//                    avg_val_land : null,
//                    num_families : null,
//                    num_male : null,
//                    num_female : null,
//                };
//                var obj5 = {
//                    other_products : value.fields.other_products,
//                    areas_cultivated : null,
//                    avg_val_land : null,
//                    num_families : null,
//                    num_male : null,
//                    num_female : null,
//                };
//                if(model_name == 'BacfSeasonalCrops') {
//
//                 $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model1].push(obj1);
//                }
//                if(model_name == 'BacfPlantnCrops') {
//                    $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model2].push(obj2);
//                }
//                if(model_name == 'BacfExportCrops') {
//                    $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model3].push(obj3);
//                }
//                if(model_name == 'BacfForestry') {
//                    $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model4].push(obj4);
//                }
//                if(model_name == 'BacfOther') {
//                    $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model5].push(obj5);
//                }
//            });

                if(model_name == 'BacfSeasonalCrops') {
                    $scope.bsInfoAcfoAssets.agri_agrarian.Table_2.BacfSeasonalCrops.push(obj1);
                }
//                if(model_name == 'BacfPlantnCrops') {
//                    $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model2].push(obj2);
//                }
//                if(model_name == 'BacfExportCrops') {
//                    $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model3].push(obj3);
//                }
//                if(model_name == 'BacfForestry') {
//                    $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model4].push(obj4);
//                }
//                if(model_name == 'BacfOther') {
//                    $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[bs_model5].push(obj5);
//                }

        });
                if(model_name == 'BacfSeasonalCrops') {
                    $scope.bsInfoAcfoAssets.agri_agrarian.Table_2.BacfSeasonalCrops.push(obj1);
                }
    }

//Save Data
    $scope.saveBsData = function(form) {
       $scope.submitted = true;
        if (form.$valid) {

             $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsInfoAcfoAssets),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'agri_agrarian'
                }),
            }).success(function(data) {

                $scope.bsInfoAcfoAssets = init_data;
                $scope.is_edit = false;

                if (data == 'False'){
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }

                else
                    $("#modal-container-239453").modal('show');

            })
        }
    }

//Edit data
    $scope.bsHsDataEdit = function(form){
    $scope.submitted = true;

       $scope.is_edit = true;
        $http({
        method: "POST",
        url: "/bs_fetch_edit_data",
        data: angular.toJson({
              'table_name': 'Table_2',
              'sector': 'agri_agrarian',
              'com_data': {'district': $scope.district,
              'bs_date': $scope.bs_date } }),
        }).success(function(data) {

        console.log(data);
        $scope.bsInfoAcfoAssets = data;
        })


    }


//Cancel Edit
    $scope.cancelEdit = function(){
        $scope.is_edit = false;
        $scope.bsInfoAcfoAssets = init_data;
    }

//Clear Function
    $scope.clear = function() {

        $scope.is_edit = false;
        $scope.bsInfoAcfoAssets = angular.copy(init_data);


    }

}]);
