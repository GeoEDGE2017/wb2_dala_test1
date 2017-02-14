var app = angular.module('bsGovAdmnstvAssetApp', [])

app.controller('bsGovAdmnstvAssetController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data = {};
    $scope.is_edit = false;

    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'transport_land': {
            'Table_3': {
                'BiaGacLandStructure': [{
                    asset: '1floor structure',
                    avg_repair_cost: null,
                }, {
                    asset: '2-3floors structure',
                    avg_repair_cost: null,
                }, {
                    asset: 'More than 3 floors',
                    avg_repair_cost: null,
                }],
                'BiaGacLandPbuilding': [{
                    asset: 'Roof',
                    avg_repair_cost_floor_1: null,
                    avg_repair_cost_floor_2_3: null,
                    avg_repair_cost_floor_more_3: null,
                }, {
                    asset: 'Walls',
                    avg_repair_cost_floor_1: null,
                    avg_repair_cost_floor_2_3: null,
                    avg_repair_cost_floor_more_3: null,
                }, {
                    asset: 'Floors',
                    avg_repair_cost_floor_1: null,
                    avg_repair_cost_floor_2_3: null,
                    avg_repair_cost_floor_more_3: null,
                }],
                'BiaGacLandOequipment': [{
                    asset: 'Computers',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }, {
                    asset: 'Furniture',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }],
                'BiaGacLandMachinery': [{
                    asset: 'Vehicles',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }, {
                    asset: 'Generators',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }, {
                    asset: 'Elevators',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }]
            }
        }
    }

    $scope.bsGovAdmnstvAsset = init_data;

    $scope.insertAsset = function(table) {
        console.log($scope.bsGovAdmnstvAsset.transport_land.Table_3[table]);
        var new_row;
        if (table == 'BiaGacLandOequipment') {
            new_row = {
                asset: '',
                avg_replace_cost: null,
                avg_repair_cost: null,
            }
        } else if (table == 'BiaGacLandMachinery') {
            new_row = {
                asset: '',
                avg_replace_cost: null,
                avg_repair_cost: null,
            }
        }
        $scope.bsGovAdmnstvAsset.transport_land.Table_3[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if (table == 'BiaGacLandOequipment') {
            $scope.bsGovAdmnstvAsset.transport_land.Table_3.BiaGacLandOequipment.splice(index, 1);
        } else if (table == 'BiaGacLandMachinery') {
            $scope.bsGovAdmnstvAsset.transport_land.Table_3.BiaGacLandMachinery.splice(index, 1);
        }
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsGovAdmnstvAsset),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'transport_land'
                }),
            }).success(function(data) {

                $scope.bsGovAdmnstvAsset = init_data;
                $scope.is_edit = false;

                if (data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');

            })
        }
    }

    $scope.bsHsDataEdit = function(form)
    {
    $scope.submitted = true;

       $scope.is_edit = true;
        $http({
        method: "POST",
        url: "/bs_fetch_edit_data",
        data: angular.toJson({
              'table_name': 'Table_3',
              'sector': 'transport_land',
              'com_data': {'district': $scope.district,
              'bs_date': $scope.bs_date} }),
        }).success(function(data) {

        console.log(data);
        $scope.bsGovAdmnstvAsset = data;
        })


    }

    $scope.cancelEdit = function()
    {
        $scope.is_edit = false;
        $scope.bsGovAdmnstvAsset = init_data;
    }

}]);
