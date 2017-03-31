//Table 1
var app = angular.module('bsNopoplAgrbActvApp', [])

app.controller('bsNopoplAgrbActvController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'agri_agrarian': {
            'Table_1': {
                'BcagSeasonalCrops': [{
                    seasonal_crops : 'Rice',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }, {
                    seasonal_crops : 'Maize',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }, {
                    seasonal_crops : 'Vegetables',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }, {
                    seasonal_crops : 'Floriculture crops',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }],
                'BcagPlantnCrops': [{
                    plantn_crops : 'Coconut',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }, {
                    plantn_crops : 'Tea',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }, {
                    plantn_crops : 'Rubber',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }],
                'BcagExportCrops': [{
                    export_crops : 'Coffee',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }, {
                    export_crops : 'Fruit trees',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null
                }, {
                    export_crops : 'Cinnamon',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null
                }],
                'BcagForestry': [{
                    forestry : 'Timber',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }],
                'BcagOther': [{
                    other_products : 'Honey',
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }],
            }
        }
    }

    $scope.bsNopoplAgrbActv = init_data;

    console.log($scope.bsNopoplAgrbActv);

    $scope.insertAsset = function(table) {
        console.log($scope.bsNopoplAgrbActv.agri_agrarian.Table_1[table]);
        var new_row;
        if(table == 'BcagSeasonalCrops') {
            new_row = {
                seasonal_crops : '',
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            }
        }
        else if(table == 'BcagPlantnCrops') {
            new_row = {
                plantn_crops : '',
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            }
        }
        else if(table == 'BcagExportCrops') {
            new_row = {
                export_crops : '',
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            }
        }
        else if(table == 'BcagForestry') {
            new_row = {
                forestry : '',
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,

            }
        }
        else if(table == 'BcagOther') {
            new_row = {
                other_products : '',
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            }
        }
        $scope.bsNopoplAgrbActv.agri_agrarian.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BcagSeasonalCrops') {
            $scope.bsNopoplAgrbActv.agri_agrarian.Table_1.BcagSeasonalCrops.splice(index, 1);
        }
        else if(table == 'BcagPlantnCrops') {
            $scope.bsNopoplAgrbActv.agri_agrarian.Table_1.BcagPlantnCrops.splice(index, 1);
        }
        else if(table == 'BcagExportCrops') {
            $scope.bsNopoplAgrbActv.agri_agrarian.Table_1.BcagExportCrops.splice(index, 1);
        }
        else if(table == 'BcagForestry') {
            $scope.bsNopoplAgrbActv.agri_agrarian.Table_1.BcagForestry.splice(index, 1);
        }
        else if(table == 'BcagOther') {
            $scope.bsNopoplAgrbActv.agri_agrarian.Table_1.BcagOther.splice(index, 1);
        }
    }

    $scope.saveBsData = function(form) {
       $scope.submitted = true;
        if (form.$valid) {
        console.log($scope.bsNopoplAgrbActv);
             $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsNopoplAgrbActv),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'agri_agrarian'
                }),
            }).success(function(data) {

                $scope.bsNopoplAgrbActv = init_data;
                $scope.is_edit = false;

                if (data == 'False')
                    {
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
              'table_name': 'Table_1',
              'sector': 'agri_agrarian',
              'com_data': {'district': $scope.district,
              'bs_date': $scope.bs_date} }),
        }).success(function(data) {

        console.log(data);
        $scope.bsNopoplAgrbActv = data;
        })


    }

    $scope.cancelEdit = function(){
        $scope.is_edit = false;
        $scope.bsNopoplAgrbActv = init_data;
    }


}]);
