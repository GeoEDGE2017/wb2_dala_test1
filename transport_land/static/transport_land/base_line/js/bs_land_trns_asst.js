//Table 2
var app = angular.module('bsLandTrnsAsstApp', [])
app.controller('BsLandTrnsAsstController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.is_edit_disable = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;
    $scope.check_search = false;

    //initialize data
    var init_data = {
        'transport_land': {
            'Table_2': {
                'BsGtlAstPvehicles': [{
                    private_vehicles: 'Cars',
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    private_vehicles: 'Motorcycles',
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    private_vehicles: 'Bicycles',
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }],
                'BsGtlAstBcompanies': [{
                    bus_companies: 'Busses',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    bus_companies: 'Garage',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    bus_companies: 'Equipment',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    bus_companies: 'Bus Stations',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },],
                'BsGtlAstTcompanies': [{
                    taxi_companies: 'Taxis',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    taxi_companies: 'Garage',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    taxi_companies: 'Equipment',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }],
                'BsGtlAstTrcompanies': [{
                    truck_companies: 'Trucks',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    truck_companies: 'Garage',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    truck_companies: 'Equipment',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },],
                'BsGtlAstTucompanies': [{
                    tuk_companies: 'Tuk tuks',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    tuk_companies: 'Garage',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    tuk_companies: 'Equipment',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },]
            }
        }
    }

    $scope.bsLandTrnsAsst = angular.copy(init_data);

    //disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.bs_date) {
            $scope.is_edit_disable = true;
            $scope.check_search = true;
        } else {
            $scope.is_edit_disable = false;
            $scope.check_search = false;
        }
    }

    //add enumerate fields
    $scope.insertAsset = function(table) {
        console.log($scope.bsLandTrnsAsst.transport_land.Table_2[table]);
        var new_row;
        if(table == 'BsGtlAstPvehicles') {
            new_row = {
                type_bridges: '',
                avg_replace_2_lanes: null,
                avg_replace_multi_lanes: null,
                avg_repair_2_lanes: null,
                avg_repair_multi_lanes: null,
            }
        }
        $scope.bsLandTrnsAsst.transport_land.Table_2[table].push(new_row);
    }

    //remove enumerate fields
    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsGtlAstPvehicles') {
            $scope.bsLandTrnsAsst.transport_land.Table_2.BsGtlAstPvehicles.splice(index, 1);
        }
    }

    //save data
    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsLandTrnsAsst),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'bsLandTrnsAsst'
                }),
            }).success(function(data) {
                $scope.bsLandTrnsAsst = init_data;
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

    //edit data
    $scope.editBsData = function(form) {
        $scope.submitted = true;
        $scope.is_edit = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_2',
                    'sector': 'transport_land',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date
                    }
                }),
            }).success(function(data) {
                console.log(data);
//                $scope.bsLandTrnsAsst = data;
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.transport_land.Table_2, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsLandTrnsAsst = data;
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

    //search data
	$scope.searchBsData = function(form) {
        document.getElementById("clearbtn").disabled = true;
        document.getElementById("editbtn").disabled = true;
        document.getElementById("subbtn").disabled = true;
        console.log("test", $scope.district);
        console.log("test", $scope.bs_date);
        $scope.is_search = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_2',
                    'sector': 'transport_land',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date
                    }
                }),
            }).success(function(data) {
                console.log(data);
                //                $scope.bsLandTrnsAsst = data;
                var edit_data_not_found = false;
                if(data != null) {
                    console.log('----if');
                    angular.forEach(data.transport_land.Table_2, function(value, index) {
                        console.log('----forEach');
                        console.log(value);
                        if(value.length == 0) {
                            console.log('----');
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsLandTrnsAsst = data;
                    } else {
                        $("#modal-container-239456").modal('show');
                    }
                } else {
                    console.log('----else');
                    $("#modal-container-239456").modal('show');
                }
            })
        }
    }

    //cancel edit
	$scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bsLandTrnsAsst = init_data;
        location.reload();
    }

    //clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.bsLandTrnsAsst = angular.copy(init_data);
		location.reload();
	}

    $scope.enum_data = {
        'transport_land': {
            'Table_2': {
                'BsGtlAstPvehicles': [],
            }
        }
    }

    $scope.getEnumDataFromStart = function() {
        var bsGtlAstPvehicles_e_index = 0;
        angular.forEach($scope.bsLandTrnsAsst.transport_land.Table_2.BsGtlAstPvehicles, function(value, index, key) {
//            var bsRbuTbridges_index = 0;
            if(value.private_vehicles != 'Cars' && value.private_vehicles != 'Motorcycles' && value.private_vehicles != 'Bicycles') {
                var enum_val = {
                    oldasset: value.private_vehicles,
                    newasset: null,
                    enum_index: bsGtlAstPvehicles_e_index,
                    bs_asset_field: 'private_vehicles',
                    dl_tables: {
                        'Table_5': {
                            'DlOtherDmgsPvehicles': {
                                dl_asset_field: 'private_vehicles'
                            }
                        }
                    }
                };
                bsGtlAstPvehicles_e_index = bsGtlAstPvehicles_e_index + 1;
                $scope.enum_data.transport_land.Table_2.BsGtlAstPvehicles.push(enum_val);
            }
        })
        console.log('getEnumDataFromStart', $scope.enum_data);
    }

    $scope.getEnumDataFromEnd = function() {
        console.log($scope.bsLandTrnsAsst.transport_land.Table_2);
        var bsGtlAstPvehicles_e_index = 0;
        angular.forEach($scope.bsLandTrnsAsst.transport_land.Table_2.BsGtlAstPvehicles, function(value, key) {
            if(value.private_vehicles != 'Asset_01' && value.private_vehicles != 'Asset_02') {
                angular.forEach($scope.enum_data.transport_land.Table_2.BsGtlAstPvehicles, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.transport_land.Table_2.BsGtlAstPvehicles);
                    if(each_enum.enum_index == bsGtlAstPvehicles_e_index) {
                        $scope.enum_data.transport_land.Table_2.BsGtlAstPvehicles[index].newasset = value.private_vehicles;
                    }
                })
                bsGtlAstPvehicles_e_index = bsGtlAstPvehicles_e_index + 1;
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
                'transport_land': 'transport_land'
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
            console.log(response);
//            if(response.data == 'False') {
//                alert('False');
//            }
//            else {
//                alert('True');
//            }
        }, function errorCallback(response) {

        });
    }
}]);
