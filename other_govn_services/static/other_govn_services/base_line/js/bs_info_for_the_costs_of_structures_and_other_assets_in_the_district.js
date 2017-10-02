//Table 1
var app = angular.module('bsInfoforCostsOfAssetsOnTheDistrictApp', [])
var del_statuss = false;
app.controller('bsInfoforCostsOfAssetsOnTheDistrictController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.is_edit_disable = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
//    $scope.del_status = false;
    $scope.user_id;
    $scope.is_submit = false;
    $scope.check_search = false;

    var init_data = {
        'other_govn_services': {
            'Table_1': {
                'BcsStructure': [{
                    asset : '1 floor structure',
                    avg_rep_cost: null,
                    avg_repair_cost_roof: null,
                    avg_repair_cost_wall: null,
                    avg_repair_cost_flooring: null,
                }, {
                    asset : '2-3 floors structure',
                    avg_rep_cost: null,
                    avg_repair_cost_roof: null,
                    avg_repair_cost_wall: null,
                    avg_repair_cost_flooring: null,
                }, {
                    asset : 'More than 3 floors',
                    avg_rep_cost: null,
                    avg_repair_cost_roof: null,
                    avg_repair_cost_wall: null,
                    avg_repair_cost_flooring: null,
                }],
                'BcsOfficeEquipment' : [{
                    asset : 'Computers',
                    avg_rep_cost : null,
                    avg_repair_cost : null,
                }, {
                    asset : 'Furniture',
                    avg_rep_cost : null,
                    avg_repair_cost : null,
                }],
                'BcsMachinery': [{
                    asset : 'Vehicles',
                    avg_rep_cost : null,
                    avg_repair_cost : null,
                }, {
                    asset : 'Generators',
                    avg_rep_cost : null,
                    avg_repair_cost : null,
                }, {
                    asset : 'Elevators',
                    avg_rep_cost : null,
                    avg_repair_cost : null,
                }]
            }
        }
    }

    $scope.dele_data = {
        'other_govn_services': {
            'Table_1': {
                'BcsOfficeEquipment' : [],
                'BcsMachinery': []
            }
        }
    }

    $scope.bsCostsOfAssetsOnTheDistrict = angular.copy(init_data);

    //Disable Edit Button
    $scope.changeDis = function changeDis() {
		if($scope.district && $scope.baselineDate) {
			$scope.is_edit_disable = true;
			$scope.check_search = true;
		} else {
			$scope.is_edit_disable = false;
			$scope.check_search = false;
		}
	}

    $scope.insertAsset = function(table) {
        console.log($scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1[table]);
        var new_row;
        if(table == 'BcsOfficeEquipment') {
            new_row = {
                asset : '',
                avg_rep_cost : null,
                avg_repair_cost : null,
                district_general_hospital : null,
            }
        }
        else if(table == 'BcsMachinery') {
            new_row = {
                asset : '',
                avg_rep_cost : null,
                avg_repair_cost : null,
                district_general_hospital : null,
            }
        }

        $scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BcsOfficeEquipment') {
            if($scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsOfficeEquipment[index].id > 0) {
                $scope.dele_data.other_govn_services.Table_1.BcsOfficeEquipment.push($scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsOfficeEquipment[index]);

                $scope.bs_data = {
                    bs_table: table,
                    bs_coloum_key: 'asset',
                    bs_coloum_value: $scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsOfficeEquipment[index].asset,
                };

                $scope.dl_data = [];

                $scope.dl_data.push({
                    dl_table: 'DlagdDmgOfficeEquipment',
                    dl_coloum_key: 'name_dept',
                });

                var del_status = $scope.enum_delete_validation($scope.bs_data, $scope.dl_data);

                console.log('BcsOfficeEquipment', del_status);

                if(!del_status) {
                    console.log('BcsOfficeEquipment delete ok');
                    $scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsOfficeEquipment.splice(index, 1);
                }
            }
            else {
                $scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsOfficeEquipment.splice(index, 1);
            }
        }
        else if(table == 'BcsMachinery') {
            if($scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsMachinery[index].id > 0) {
                $scope.dele_data.other_govn_services.Table_1.BcsOfficeEquipment.push($scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsMachinery[index]);

                $scope.bs_data = {
                    bs_table: table,
                    bs_coloum_key: 'asset',
                    bs_coloum_value: $scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsMachinery[index].asset,
                };

                $scope.dl_data = [];

                $scope.dl_data.push({
                    dl_table: 'DlagdDmgMachinery',
                    dl_coloum_key: 'name_dept',
                });

                $scope.del_status = $scope.enum_delete_validation($scope.bs_data, $scope.dl_data);

                $scope.del_status.then(function(data) {
                    console.log('done');
                    console.log($scope.del_status);
                });

                console.log('del_status', del_statuss);

                if(!del_status) {
                    console.log('BcsMachinery delete ok');
                    $scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsMachinery.splice(index, 1);
                }
                console.log('BcsMachinery ', del_statuss);
            }
            else {
                $scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsMachinery.splice(index, 1);
            }
        }
    }

    $scope.enum_delete_validation = function(bs_data, dl_data) {
        console.log('enum_delete_validation');
        $http({
            method : 'POST',
            url : '/is_enum_used_in_dl',
            contentType : 'application/json; charset=utf-8',
            data : angular.toJson({
                'sector': 'other_govn_services',
                'bs_data': bs_data,
                'dl_data': dl_data,
                'com_data' : {
                    'district' : $scope.district,
                    'bs_date' : $scope.baselineDate,
                },
            }),
            dataType: 'json',
        }).then(function success(response) {
            console.log('*** ', response);
            if(response.data == 'False') {
//                $("#modal-container-239457").modal('show');
                console.log('return ', response.data);
                console.log('enum_delete_validation 1');
                del_statuss =true;
                return false;
            }
            else {
                $("#modal-container-239457").modal('show');
                console.log('return ', response.data);
                console.log('enum_delete_validation 2');
                del_statuss = true;
                return true;
            }
        });
//        function errorCallback(response) {
//            console.log(response);
//            return false;
//        });
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        $scope.is_submit = true;
        if(form.$valid) {
            $http({
                method : 'POST',
                url : '/bs_save_data',
                contentType : 'application/json; charset=utf-8',
                data : angular.toJson({
                    'table_data' : $scope.bsCostsOfAssetsOnTheDistrict,
                    'com_data' : {
                        'district' : $scope.district,
                        'bs_date' : $scope.baselineDate,
                        'user_id': $scope.user_id,
                    },
                    'is_edit' : $scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                console.log(response);
                if(response.data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $("#modal-container-239453").modal('show');
                    $scope.updateEnums();
                }
            }, function errorCallback(response) {
                console.log(response);
            });
        }
        $scope.is_submit = false;
    }

    $scope.editBsData = function(form) {
        $scope.submitted = true;
        $scope.is_edit = true;

        if(form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'other_govn_services',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                    }
                }),
            }).success(function(data) {
                console.log(data.other_govn_services.Table_1);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.other_govn_services.Table_1, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsCostsOfAssetsOnTheDistrict = data;
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

    $scope.searchBsData = function(form) {
		document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		$scope.is_search = true;
		$scope.submitted = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: "/bs_fetch_edit_data",
				data: angular.toJson({
					'table_name': 'Table_1',
					'sector': 'other_govn_services',
					'com_data': {
						'district': $scope.district,
						'bs_date': $scope.baselineDate,
					}
				}),
			}).success(function(data) {
				console.log(data.other_govn_services.Table_1);
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.other_govn_services.Table_1, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.bsCostsOfAssetsOnTheDistrict = data;
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

	$scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bsCostsOfAssetsOnTheDistrict = init_data;
        location.reload();
    }

    //Clear Function
	$scope.clear = function() {
		console.log("init")
		$scope.is_edit = false;
		$scope.bsCostsOfAssetsOnTheDistrict = angular.copy(init_data);
		location.reload();
	}

	$scope.deleteing = function() {
		console.log('$$$', $scope.dele_data);
	}

	$scope.is_exsis = function(sector) {
		$http({
			method: 'POST',
			url: '/is_data_exsis',
			contentType: 'application/json; charset=utf-8',
			data: angular.toJson({
				'sector': 'services'
			}),
			dataType: 'json',
		}).then(function successCallback(response) {
			console.log(response.data); //http respond
			if(response.data == 'False') {
				return false;
			} else {
				return true;
			}
		})
	}

    $scope.enum_data = {
        'other_govn_services': {
            'Table_1': {
                'BcsOfficeEquipment': [],
                'BcsMachinery': [],
            }
        }
    }

    $scope.getEnumDataFromStart = function() {
        var bcsOfficeEquipment_e_index = 0;
        angular.forEach($scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsOfficeEquipment, function(value, index, key) {
            if(value.asset != 'Computers' && value.asset != 'Furniture') {
                var enum_val = {
                    oldasset: value.asset,
                    newasset: null,
                    enum_index: bcsOfficeEquipment_e_index,
                    bs_asset_field: 'asset',
                    dl_tables: {
                        'Table_2': {
                            'DlagdDmgOfficeEquipment': {
                                dl_asset_field: 'name_dept'
                            }
                        }
                    }
                };
                bcsOfficeEquipment_e_index = bcsOfficeEquipment_e_index + 1;
                $scope.enum_data.other_govn_services.Table_1.BcsOfficeEquipment.push(enum_val);
            }
        })
        var bcsMachinery_e_index = 0;
        angular.forEach($scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsMachinery, function(value, index, key) {
            if(value.asset != 'Vehicles' && value.asset != 'Generators' && value.asset != 'Elevators') {
                var enum_val = {
                    oldasset: value.asset,
                    newasset: null,
                    enum_index: bcsMachinery_e_index,
                    bs_asset_field: 'asset',
                    dl_tables: {
                        'Table_2': {
                            'DlagdDmgMachinery': {
                                dl_asset_field: 'name_dept'
                            }
                        }
                    }
                };
                bcsMachinery_e_index = bcsMachinery_e_index + 1;
                $scope.enum_data.other_govn_services.Table_1.BcsMachinery.push(enum_val);
            }
        })
        console.log('getEnumDataFromStart', $scope.enum_data);
    }

    $scope.getEnumDataFromEnd = function() {
        console.log($scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1);
        var bcsOfficeEquipment_e_index = 0;
        angular.forEach($scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsOfficeEquipment, function(value, key) {
            if(value.asset != 'Computers' && value.asset != 'Furniture') {
                angular.forEach($scope.enum_data.other_govn_services.Table_1.BcsOfficeEquipment, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.other_govn_services.Table_1.BcsOfficeEquipment);
                    if(each_enum.enum_index == bcsOfficeEquipment_e_index) {
                        $scope.enum_data.other_govn_services.Table_1.BcsOfficeEquipment[index].newasset = value.asset;
                    }
                })
                bcsOfficeEquipment_e_index = bcsOfficeEquipment_e_index + 1;
            }
        })
        var bcsMachinery_e_index = 0;
        angular.forEach($scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsMachinery, function(value, key) {
            if(value.asset != 'Vehicles' && value.asset != 'Generators' && value.asset != 'Elevators') {
                angular.forEach($scope.enum_data.other_govn_services.Table_1.BcsMachinery, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.other_govn_services.Table_1.BcsMachinery);
                    if(each_enum.enum_index == bcsMachinery_e_index) {
                        $scope.enum_data.other_govn_services.Table_1.BcsMachinery[index].newasset = value.asset;
                    }
                })
                bcsMachinery_e_index = bcsMachinery_e_index + 1;
            }
        })
        console.log('getEnumDataFromEnd', $scope.enum_data);
    }

    $scope.updateEnums = function() {
        console.log('----updateEnums');
        $scope.getEnumDataFromEnd();
        $http({
            method: 'POST',
            url: '/update_other_government_enumirate_dl_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'enum_data': ($scope.enum_data),
                'com_data': {
                    'district': $scope.district,
                    'bs_date': $scope.baselineDate,
                    'user_id': $scope.user_id
                },
                'is_edit': $scope.is_edit,
                'sector': 'other_govn_services'
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(response) {

        });
    }
}])
