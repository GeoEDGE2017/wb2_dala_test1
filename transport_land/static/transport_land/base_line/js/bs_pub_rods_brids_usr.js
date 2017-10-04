//Table 1
var app = angular.module('bsPubRodsBridsUsrApp', [])
app.controller('bsPubRodsBridsUsrController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.is_edit_disable = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;
    $scope.check_search = false;

    //initialize models
    var init_data = {
        'transport_land': {
            'Table_1': {
                'BsRbuRclassificattion': [{
                    road_classification: 'Class A',
                    avg_replace_concrete: null,
                    avg_replace_asphalt: null,
                    avg_replace_gravel: null,
                    avg_replace_earth: null,
                    avg_repair_concrete: null,
                    avg_repair_asphalt: null,
                    avg_repair_gravel: null,
                    avg_repair_earth: null,
                }, {
                    road_classification: 'Class B',
                    avg_replace_concrete: null,
                    avg_replace_asphalt: null,
                    avg_replace_gravel: null,
                    avg_replace_earth: null,
                    avg_repair_concrete: null,
                    avg_repair_asphalt: null,
                    avg_repair_gravel: null,
                    avg_repair_earth: null,
                }, {
                    road_classification: 'Class C',
                    avg_replace_concrete: null,
                    avg_replace_asphalt: null,
                    avg_replace_gravel: null,
                    avg_replace_earth: null,
                    avg_repair_concrete: null,
                    avg_repair_asphalt: null,
                    avg_repair_gravel: null,
                    avg_repair_earth: null,
                }, {
                    road_classification: 'Class D',
                    avg_replace_concrete: null,
                    avg_replace_asphalt: null,
                    avg_replace_gravel: null,
                    avg_replace_earth: null,
                    avg_repair_concrete: null,
                    avg_repair_asphalt: null,
                    avg_repair_gravel: null,
                    avg_repair_earth: null,
                }, {
                    road_classification: 'Class E',
                    avg_replace_concrete: null,
                    avg_replace_asphalt: null,
                    avg_replace_gravel: null,
                    avg_replace_earth: null,
                    avg_repair_concrete: null,
                    avg_repair_asphalt: null,
                    avg_repair_gravel: null,
                    avg_repair_earth: null,
                }],
                'BsRbuTbridges': [{
                    type_bridges: 'Steel Bridges',
                    avg_replace_2_lanes: null,
                    avg_replace_multi_lanes: null,
                    avg_repair_2_lanes: null,
                    avg_repair_multi_lanes: null,
                }, {
                    type_bridges: 'Wooden Bridges',
                    avg_replace_2_lanes: null,
                    avg_replace_multi_lanes: null,
                    avg_repair_2_lanes: null,
                    avg_repair_multi_lanes: null,
                }],
                'BsRbuTculverts': [{
                    type_culverts: 'Box Culvert',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }],
                'BsRbuTrwalls': [{
                    type_retain_walls: 'RRM',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }],
                'BsRbuTdrains': [{
                    type_drains: 'Concrete',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }, {
                    type_drains: 'Bricks',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }, {
                    type_drains: 'Earth',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }]
            }
        }
    }

    $scope.bsPubRodsBridsUsr = angular.copy(init_data);

    //disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.bs_date) {
            $scope.is_edit_disable = true;
            $scope.check_search = true;
        }
        else {
            $scope.is_edit_disable = false;
            $scope.check_search = false;
        }
    }

    //add enumerate fields
    $scope.insertAsset = function(table) {
//        console.log($scope.bsPubRodsBridsUsr.transport_land.Table_1[table]);
        var new_row;
        if(table == 'BsRbuTbridges') {
            new_row = {
                type_bridges: '',
                avg_replace_2_lanes: null,
                avg_replace_multi_lanes: null,
                avg_repair_2_lanes: null,
                avg_repair_multi_lanes: null,
            }
        }
        else if(table == 'BsRbuTculverts') {
            new_row = {
                type_culverts: '',
                avg_replace_cost: null,
                avg_repair_cost: null,
            }
        }
        else if(table == 'BsRbuTrwalls') {
            new_row = {
                type_retain_walls: '',
                avg_replace_cost: null,
                avg_repair_cost: null,
            }
        }
        else if(table == 'BsRbuTdrains') {
            new_row = {
                type_drains: '',
                avg_replace_cost: null,
                avg_repair_cost: null,
            }
        }

        $scope.bsPubRodsBridsUsr.transport_land.Table_1[table].push(new_row);
    }

    //remove enumerate
    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsRbuTbridges') {
            $scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTbridges.splice(index, 1);
        }
        else if(table == 'BsRbuTculverts') {
            $scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTculverts.splice(index, 1);
        }
        else if(table == 'BsRbuTrwalls') {
            $scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTrwalls.splice(index, 1);
        }
        else if(table == 'BsRbuTdrains') {
            $scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTdrains.splice(index, 1);
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
                    'table_data': ($scope.bsPubRodsBridsUsr),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'transport_land'
                }),
            }).success(function(data) {
                if (data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $scope.updateEnums();
                    $("#modal-container-239453").modal('show');
                }
                $scope.bsPubRodsBridsUsr = init_data;
                $scope.is_edit = false;
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
                    'table_name': 'Table_1',
                    'sector': 'transport_land',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date
                    }
                }),
            }).success(function(data) {
                $scope.bsPubRodsBridsUsr = data;

                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.transport_land.Table_1, function(value, index) {
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsPubRodsBridsUsr = data;
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

    // search data
	$scope.searchBsData = function(form) {
		document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;

		$scope.is_search = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: "/bs_fetch_edit_data",
				data: angular.toJson({
					'table_name': 'Table_1',
					'sector': 'transport_land',
					'com_data': {
						'district': $scope.district,
						'bs_date': $scope.bs_date
					}
				}),
			}).success(function(data) {
				console.log(data);
				$scope.bsPubRodsBridsUsr = data;
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.transport_land.Table_1, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.bsPubRodsBridsUsr = data;
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
        $scope.bsPubRodsBridsUsr = init_data;
        location.reload();
    }

    //clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.bsPubRodsBridsUsr = angular.copy(init_data);
		location.reload();
	}

    $scope.enum_data = {
        'transport_land': {
            'Table_1': {
                'BsRbuTbridges': [],
                'BsRbuTculverts': [],
                'BsRbuTrwalls': [],
                'BsRbuTdrains': [],
            }
        }
    }

    $scope.getEnumDataFromStart = function() {
        var bsRbuTbridges_e_index = 0;
        var bsRbuTculverts_e_index = 0;
        var bsRbuTrwalls_e_index = 0;
        var bsRbuTdrains_e_index = 0;

        angular.forEach($scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTbridges, function(value, index, key) {
//            var bsRbuTbridges_index = 0;
            if(value.type_bridges != 'Steel Bridges' && value.type_bridges != 'Wooden Bridges') {
                var enum_val = {
                    oldasset: value.type_bridges,
                    newasset: null,
                    enum_index: bsRbuTbridges_e_index,
                    bs_asset_field: 'type_bridges',
                    dl_tables: {
                        'Table_4': {
                            'DlRbdTbridges': {
                                dl_asset_field: 'type_bridges'
                            }
                        }
                    }
                };
                bsRbuTbridges_e_index = bsRbuTbridges_e_index + 1;
                $scope.enum_data.transport_land.Table_1.BsRbuTbridges.push(enum_val);
            }
        })
        angular.forEach($scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTculverts, function(value, index, key) {
            if(value.type_culverts != 'Box Culvert') {
                var enum_val = {
                    oldasset: value.type_culverts,
                    newasset: null,
                    enum_index: bsRbuTculverts_e_index,
                    bs_asset_field: 'type_culverts',
                    dl_tables: {
                        'Table_4': {
                            'DlRbdTculverts': {
                                dl_asset_field: 'type_culverts'
                            }
                        }
                    }
                };
                bsRbuTculverts_e_index = bsRbuTculverts_e_index + 1;
                $scope.enum_data.transport_land.Table_1.BsRbuTculverts.push(enum_val);
            }
        })
        angular.forEach($scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTrwalls, function(value, index, key) {
            if(value.type_retain_walls != 'RRM') {
                var enum_val = {
                    oldasset: value.type_retain_walls,
                    newasset: null,
                    enum_index: bsRbuTrwalls_e_index,
                    bs_asset_field: 'type_retain_walls',
                    dl_tables: {
                        'Table_4': {
                            'DlRbdTrwalls': {
                                dl_asset_field: 'type_retain_walls'
                            }
                        }
                    }
                };
                bsRbuTrwalls_e_index = bsRbuTrwalls_e_index + 1;
                $scope.enum_data.transport_land.Table_1.BsRbuTrwalls.push(enum_val);
            }
        })
        angular.forEach($scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTdrains, function(value, index, key) {
            if(value.type_drains != 'Concrete' && value.type_drains != 'Bricks' && value.type_drains != 'Earth') {
                var enum_val = {
                    oldasset: value.type_drains,
                    newasset: null,
                    enum_index: bsRbuTdrains_e_index,
                    bs_asset_field: 'type_drains',
                    dl_tables: {
                        'Table_4': {
                            'DlRbdTdrains': {
                                dl_asset_field: 'type_drains'
                            }
                        }
                    }
                };
                bsRbuTdrains_e_index = bsRbuTdrains_e_index + 1;
                $scope.enum_data.transport_land.Table_1.BsRbuTdrains.push(enum_val);
            }
        })

        console.log('getEnumDataFromStart', $scope.enum_data);
    }

    $scope.getEnumDataFromEnd = function() {
        console.log($scope.bsPubRodsBridsUsr.transport_land.Table_1);
        var bsRbuTbridges_e_index = 0;
        var bsRbuTculverts_e_index = 0;
        var bsRbuTrwalls_e_index = 0;
        var bsRbuTdrains_e_index = 0;

        angular.forEach($scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTbridges, function(value, key) {
            if(value.type_bridges != 'Steel Bridges' && value.type_bridges != 'Wooden Bridges') {
                angular.forEach($scope.enum_data.transport_land.Table_1.BsRbuTbridges, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.transport_land.Table_1.BsRbuTbridges);
                    if(each_enum.enum_index == bsRbuTbridges_e_index) {
                        $scope.enum_data.transport_land.Table_1.BsRbuTbridges[index].newasset = value.type_bridges;
                    }
                })
                bsRbuTbridges_e_index = bsRbuTbridges_e_index + 1;
            }
        })
        angular.forEach($scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTculverts, function(value, key) {
            if(value.type_culverts != 'Box Culvert') {
                angular.forEach($scope.enum_data.transport_land.Table_1.BsRbuTculverts, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.transport_land.Table_1.BsRbuTculverts);
                    if(each_enum.enum_index == bsRbuTculverts_e_index) {
                        $scope.enum_data.transport_land.Table_1.BsRbuTculverts[index].newasset = value.type_culverts;
                    }
                })
                bsRbuTculverts_e_index = bsRbuTculverts_e_index + 1;
            }
        })
        angular.forEach($scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTrwalls, function(value, key) {
            if(value.type_retain_walls != 'RRM') {
                angular.forEach($scope.enum_data.transport_land.Table_1.BsRbuTrwalls, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.transport_land.Table_1.BsRbuTrwalls);
                    if(each_enum.enum_index == bsRbuTrwalls_e_index) {
                        $scope.enum_data.transport_land.Table_1.BsRbuTrwalls[index].newasset = value.type_retain_walls;
                    }
                })
                bsRbuTrwalls_e_index = bsRbuTrwalls_e_index + 1;
            }
        })
        angular.forEach($scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTdrains, function(value, key) {
            if(value.type_drains != 'Concrete' && value.type_drains != 'Bricks' && value.type_drains != 'Earth') {
                angular.forEach($scope.enum_data.transport_land.Table_1.BsRbuTdrains, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.transport_land.Table_1.BsRbuTdrains);
                    if(each_enum.enum_index == bsRbuTdrains_e_index) {
                        $scope.enum_data.transport_land.Table_1.BsRbuTdrains[index].newasset = value.type_drains;
                    }
                })
                bsRbuTdrains_e_index = bsRbuTdrains_e_index + 1;
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
            if(response.data == 'False') {
                alert('False');
            }
            else {
                alert('True');
            }
        }, function errorCallback(response) {

        });
    }
}]);
