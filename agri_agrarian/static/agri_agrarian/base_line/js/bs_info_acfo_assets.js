//Table 2
var app = angular.module('bsInfoAcfoAssetsApp', [])
app.controller('bsInfoAcfoAssetsController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;

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

    $scope.bsInfoAcfoAssets = init_data;

    $scope.insertAsset = function(table) {
        console.log($scope.bsInfoAcfoAssets.agri_agrarian.Table_2[table]);
        var new_row;
        if(table == 'BacfSeasonalCrops') {
            new_row = {
                seasonal_crops : '',
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            }
        }
        else if(table == 'BacfPlantnCrops') {
            new_row = {
                plantn_crops : '',
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            }
        }
        else if(table == 'BacfExportCrops') {
            new_row = {
                export_crops : '',
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            }
        }
        else if(table == 'BacfForestry') {
            new_row = {
                forestry : '',
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            }
        }
        else if(table == 'BacfOther') {
            new_row = {
                other_products : '',
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            }
        }
        else if(table == 'BacfFarmEquipment') {
            new_row = {
                other_products : '',
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            }
        }
        else if(table == 'BacfStocks') {
            new_row = {
                other_products : '',
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            }
        }
        $scope.bsInfoAcfoAssets.agri_agrarian.Table_2[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BacfSeasonalCrops') {
            $scope.bsInfoAcfoAssets.agri_agrarian.Table_2.BacfSeasonalCrops.splice(index, 1);
        }
        else if(table == 'BacfPlantnCrops') {
            $scope.bsInfoAcfoAssets.agri_agrarian.Table_2.BacfPlantnCrops.splice(index, 1);
        }
        else if(table == 'BacfExportCrops') {
            $scope.bsInfoAcfoAssets.agri_agrarian.Table_2.BacfExportCrops.splice(index, 1);
        }
        else if(table == 'BacfForestry') {
            $scope.bsInfoAcfoAssets.agri_agrarian.Table_2.BacfForestry.splice(index, 1);
        }
        else if(table == 'BacfOther') {
            $scope.bsInfoAcfoAssets.agri_agrarian.Table_2.BacfOther.splice(index, 1);
        }
        else if(table == 'BacfFarmEquipment') {
            $scope.bsInfoAcfoAssets.agri_agrarian.Table_2.BacfFarmEquipment.splice(index, 1);
        }
        else if(table == 'BacfStocks') {
            $scope.bsInfoAcfoAssets.agri_agrarian.Table_2.BacfStocks.splice(index, 1);
        }
    }

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

    $scope.cancelEdit = function(){
        $scope.is_edit = false;
        $scope.bsNopoplAgrbActv = init_data;
    }

}]);
