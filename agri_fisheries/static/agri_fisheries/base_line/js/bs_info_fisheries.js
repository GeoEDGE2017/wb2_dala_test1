//Table 2
var app = angular.module('bsInfoFisheriesApp', [])

app.controller('bsInfoFisheriesController', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;

    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'agri_fisheries': {
            'Table_2': {
                'BifProduction': [{
                    types : 'Inland fisheries',
                    area_pub : null,
                    area_pvt : null,
                    avg_yield_pub : null,
                    avg_yield_pvt : null,
                    prodc_pub : null,
                    prodc_pvt : null,
                }, {
                    types : 'River Fisheries',
                    area_pub : null,
                    area_pvt : null,
                    avg_yield_pub : null,
                    avg_yield_pvt : null,
                    prodc_pub : null,
                    prodc_pvt : null,
                }, {
                    types : 'Marine Fisheries',
                    area_pub : null,
                    area_pvt : null,
                    avg_yield_pub : null,
                    avg_yield_pvt : null,
                    prodc_pub : null,
                    prodc_pvt : null,
                }],
                'BifAstFequipment': [{
                    assets : 'Boats',
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                }, {
                    assets : 'Engines',
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                }, {
                    assets : 'Nets',
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                }, {
                    assets : 'Traps and Cages',
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                }, {
                    assets : 'Gears',
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                }],
                'BifAstOequipment': [{
                    assets : 'Computers',
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                }, {
                    assets : 'Furniture',
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                }, {
                    assets : 'Office supplies',
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                }],
                'BifAstMachinery': [{
                    assets : 'Vehicles',
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                }],
                'BifAstStructures': [{
                    assets : 'Harbour',
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                }, {
                    assets : 'Cold storage',
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                }],
                'BifAstBuildings': [{
                    assets : '1 floor',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                }, {
                    assets : '2-3 floor',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                }, {
                    assets : 'More than 3 floors',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                }],
            }
        }
    }

    $scope.bsInfoFisheries = init_data;

    $scope.insertAsset = function(table) {
        console.log($scope.bsInfoFisheries.agri_fisheries.Table_2[table]);
        var new_row;
        if(table == 'BifAstFequipment') {
            new_row = {
                assets : '',
                if_avg_replace_cost : null,
                if_avg_repair_cost : null,
                rf_avg_replace_cost : null,
                rf_avg_repair_cost : null,
                mf_avg_replace_cost : null,
                mf_avg_repair_cost : null,
            }
        }
        else if(table == 'BifAstOequipment') {
            new_row = {
                assets : '',
                if_avg_replace_cost : null,
                if_avg_repair_cost : null,
                rf_avg_replace_cost : null,
                rf_avg_repair_cost : null,
                mf_avg_replace_cost : null,
                mf_avg_repair_cost : null,
            }
        }
        else if(table == 'BifAstMachinery') {
            new_row = {
                assets : '',
                if_avg_replace_cost : null,
                if_avg_repair_cost : null,
                rf_avg_replace_cost : null,
                rf_avg_repair_cost : null,
                mf_avg_replace_cost : null,
                mf_avg_repair_cost : null,
            }
        }
        else if(table == 'BifAstStructures') {
            new_row = {
                assets : '',
                if_avg_replace_cost : null,
                if_avg_repair_cost : null,
                rf_avg_replace_cost : null,
                rf_avg_repair_cost : null,
                mf_avg_replace_cost : null,
                mf_avg_repair_cost : null,
            }
        }
        else if(table == 'BifAstBuildings') {
            new_row = {
                assets : '',
                avg_replace_cost : null,
                avg_repair_cost_roof : null,
                avg_repair_cost_wall : null,
                avg_repair_cost_floor : null,
            }
        }
        $scope.bsInfoFisheries.agri_fisheries.Table_2[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BifAstFequipment') {
            $scope.bsInfoFisheries.agri_fisheries.Table_2.BifAstFequipment.splice(index, 1);
        }
        else if(table == 'BifAstOequipment') {
            $scope.bsInfoFisheries.agri_fisheries.Table_2.BifAstOequipment.splice(index, 1);
        }
        else if(table == 'BifAstMachinery') {
            $scope.bsInfoFisheries.agri_fisheries.Table_2.BifAstMachinery.splice(index, 1);
        }
        else if(table == 'BifAstStructures') {
            $scope.bsInfoFisheries.agri_fisheries.Table_2.BifAstStructures.splice(index, 1);
        }
        else if(table == 'BifAstBuildings') {
            $scope.bsInfoFisheries.agri_fisheries.Table_2.BifAstBuildings.splice(index, 1);
        }
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsInfoFisheries),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'agri_fisheries'
                }),
            }).success(function(data) {

                $scope.bsInfoFisheries = init_data;
                $scope.is_edit = false;

                if (data == 'False')
                    $scope.is_valid_data = false;
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
              'sector': 'agri_fisheries',
              'com_data': {'district': $scope.district,
              'bs_date': $scope.bs_date } }),
        }).success(function(data) {

        console.log(data);
        $scope.bsInfoFisheries = data;
        })


    }

     $scope.cancelEdit = function(){
        $scope.is_edit = false;
        $scope.bsInfoFisheries = init_data;
    }

});
