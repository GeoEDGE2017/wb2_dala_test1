//Table 3
var app = angular.module('bsGovAdmnstvAssetApp', [])

app.controller('BsGovAdmnstvAssetController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data = {};
    $scope.is_edit = false;
    $scope.is_edit_disable = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;

    //initialize models
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

    $scope.bsGovAdmnstvAsset = angular.copy(init_data);

    //Disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.bs_date) {
            $scope.is_edit_disable = true;
        }
        else {
            $scope.is_edit_disable = false;
        }
    }

    //add enumerate fields
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

    //remove enumerate fileds
    $scope.removeItem = function removeItem(table, index) {
        if (table == 'BiaGacLandOequipment') {
            $scope.bsGovAdmnstvAsset.transport_land.Table_3.BiaGacLandOequipment.splice(index, 1);
        } else if (table == 'BiaGacLandMachinery') {
            $scope.bsGovAdmnstvAsset.transport_land.Table_3.BiaGacLandMachinery.splice(index, 1);
        }
    }

    //save data
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
                        'user_id': $scope.user_id
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'transport_land'
                }),
            }).success(function(data) {
                $scope.bsGovAdmnstvAsset = init_data;
                $scope.is_edit = false;
                if (data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $scope.updateEnums();
                    $("#modal-container-239453").modal('show');
                }
            })
        }
    }

    // edit data
    $scope.editBsData = function(form) {
        $scope.submitted = true;
        $scope.is_edit = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_3',
                    'sector': 'transport_land',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date
                    }
                }),
            }).success(function(data) {
                console.log(data);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.transport_land.Table_3, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsGovAdmnstvAsset = data;
                        $scope.getEnumDataFromStart();
                    }
                    else {
                        $("#modal-container-239456").modal('show');
                    }
                }
                else {
                    $("#modal-container-239456").modal('show');
                }
            })
        }
    }

    //cancel edit
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bsGovAdmnstvAsset = init_data;
    }

    //Clear Function
    $scope.clear = function() {
        console.log("clear")
        $scope.is_edit = false;
        $scope.bsGovAdmnstvAsset = angular.copy(init_data);
    }

    $scope.enum_data = {
        'transport_land': {
            'Table_3': {
                'BiaGacLandOequipment': [],
                'BS_Table2': [],
                'BS_Table3': [],
                'BS_Table4': [],
            }
        }
    }

    $scope.getEnumDataFromStart = function() {
        var biaGacLandOequipment_e_index = 0;
        angular.forEach($scope.bsGovAdmnstvAsset.transport_land.Table_3.BiaGacLandOequipment, function(value, index, key) {
//            var bsRbuTbridges_index = 0;
            if(value.asset != 'Computers' && value.asset != 'Furniture') {
                var enum_val = {
                    oldasset: value.asset,
                    newasset: null,
                    enum_index: biaGacLandOequipment_e_index,
                    bs_asset_field: 'asset',
                    dl_tables: {
                        'Table_6': {
                            'DlGacPdmgEquipment': {
                                dl_asset_field: 'assets'
                            }
                        }
                    }
                };
                biaGacLandOequipment_e_index = biaGacLandOequipment_e_index + 1;
                $scope.enum_data.transport_land.Table_3.BiaGacLandOequipment.push(enum_val);
            }
        })
        console.log('getEnumDataFromStart', $scope.enum_data);
    }

    $scope.getEnumDataFromEnd = function() {
        console.log($scope.bsGovAdmnstvAsset.transport_land.Table_3);
        var biaGacLandOequipment_e_index = 0;
        angular.forEach($scope.bsGovAdmnstvAsset.transport_land.Table_3.BiaGacLandOequipment, function(value, key) {
            if(value.asset != 'Computers' && value.asset != 'Furniture') {
                angular.forEach($scope.enum_data.transport_land.Table_3.BiaGacLandOequipment, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.transport_land.Table_3.BiaGacLandOequipment);
                    if(each_enum.enum_index == biaGacLandOequipment_e_index) {
                        $scope.enum_data.transport_land.Table_3.BiaGacLandOequipment[index].newasset = value.asset;
                    }
                })
                biaGacLandOequipment_e_index = biaGacLandOequipment_e_index + 1;
            }
        })
        console.log('getEnumDataFromEnd', $scope.enum_data);
    }

    $scope.updateEnums = function() {
        $scope.getEnumDataFromEnd();
        $http({
            method: 'POST',
            url: '/update_enumirate_dl_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'enum_data': ($scope.enum_data),
                'com_data': {
                    'district': $scope.district,
                    'bs_date': $scope.bs_date,
                    'user_id': $scope.user_id
                },
                'is_edit': $scope.is_edit,
                'sector': 'transport_land'
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(response) {

        });
    }
}]);
