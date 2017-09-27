//Table 1
var bsAstTransWaterApp = angular.module('bsAstTransWaterApp', ['ui.bootstrap', 'popoverToggle']);
bsAstTransWaterApp.controller('BsAstTransWaterController', function BsAstTransWaterController($scope, $http) {
	$scope.district;
	$scope.baselineDate;
	$scope.bs_date;
	$scope.is_edit = false;
	$scope.submitted = false;
	$scope.is_valid_data = true;
	$scope.is_edit_disable = false;
	$scope.user_id;
	$scope.check_search = false;
	var init_data = {
		'transport_water': {
			'Table_1': {
				'BsAstWaterWcrafts': [{
					assets: 'Ships',
					public: null,
					private: null,
					avg_replace_cost: null,
					avg_repair_cost: null,
				}, {
					assets: 'Ferries',
					public: null,
					private: null,
					avg_replace_cost: null,
					avg_repair_cost: null,
				}],
				'BsAstWaterEquipment': [{
					assets: 'Navigation equipment',
					avg_replace_cost: null,
					avg_repair_cost: null,
				}, {
					assets: 'Baggage handling',
					avg_replace_cost: null,
					avg_repair_cost: null,
				}, {
					assets: 'Security equipment',
					avg_replace_cost: null,
					avg_repair_cost: null,
				}, {
					assets: 'Vehicles',
					avg_replace_cost: null,
					avg_repair_cost: null,
				}, {
					assets: 'Office equipment',
					avg_replace_cost: null,
					avg_repair_cost: null,
				}],
				'BsAstWaterMaterials': [{
					assets: 'Fuel (per Liter)',
					public: null,
					private: null,
					avg_replace_cost: null,
					avg_repair_cost: null,
				}],
				'BsAstWaterStructures': [{
					assets: 'Ports',
					public: null,
					private: null,
					avg_replace_cost: null,
					avg_repair_cost: null,
				}],
				'BsAstWaterBuildings': [{
					assets: '1 floor',
					avg_replace_cost: null,
					avg_repair_cost_roof: null,
					avg_repair_cost_wall: null,
					avg_repair_cost_floor: null,
				}, {
					assets: '2-3 floors',
					avg_replace_cost: null,
					avg_repair_cost_roof: null,
					avg_repair_cost_wall: null,
					avg_repair_cost_floor: null,
				}, {
					assets: 'More than3 floors',
					avg_replace_cost: null,
					avg_repair_cost_roof: null,
					avg_repair_cost_wall: null,
					avg_repair_cost_floor: null,
				}],
				'BsAstWaterEmployment': [{
					assets: 'Total Number of Employees of Water Transportation Companies',
					male: null,
					female: null,
					total: null,
				}, {
					assets: 'Total Number of Other Employees in Water Transport',
					male: null,
					female: null,
					total: null,
				}],
			}
		}
	}
	$scope.bsAstTransWater = angular.copy(init_data);
	//Disable Edit Button
	$scope.changeDis = function changeDis() {
		if($scope.district && $scope.bs_date) {
			$scope.is_edit_disable = true;
			$scope.check_search = true;
		} else {
			$scope.is_edit_disable = false;
			$scope.check_search = false;
		}
	}
	$scope.insertAssets = function(table) {
		console.log($scope.bsAstTransWater.transport_water.Table_1.BsAstWaterStructures);
		var new_row;
		if(table == 'BsAstWaterWcrafts') {
			new_row = {
				assets: '',
				public: null,
				private: null,
				avg_replace_cost: null,
				avg_repair_cost: null,
			}
		} else if(table == 'BsAstWaterEquipment') {
			new_row = {
				assets: '',
				public: null,
				private: null,
				avg_replace_cost: null,
				avg_repair_cost: null,
			}
		} else if(table == 'BsAstWaterMaterials') {
			new_row = {
				assets: '',
				public: null,
				private: null,
				avg_replace_cost: null,
				avg_repair_cost: null,
			}
		} else if(table == 'BsAstWaterStructures') {
			new_row = {
				assets: '',
				public: null,
				private: null,
				avg_replace_cost: null,
				avg_repair_cost: null,
			}
		}
		$scope.bsAstTransWater.transport_water.Table_1[table].push(new_row);
	}
	$scope.removeItem = function removeItem(table, index) {
		if(table == 'BsAstWaterWcrafts') {
			$scope.bsAstTransWater.transport_water.Table_1.BsAstWaterWcrafts.splice(index, 1);
		} else if(table == 'BsAstWaterEquipment') {
			$scope.bsAstTransWater.transport_water.Table_1.BsAstWaterEquipment.splice(index, 1);
		} else if(table == 'BsAstWaterMaterials') {
			$scope.bsAstTransWater.transport_water.Table_1.BsAstWaterMaterials.splice(index, 1);
		} else if(table == 'BsAstWaterStructures') {
			$scope.bsAstTransWater.transport_water.Table_1.BsAstWaterStructures.splice(index, 1);
		}
	}
	$scope.saveBsData = function() {
		$scope.submitted = true;
		$http({
			method: "POST",
			url: "/bs_save_data",
			data: angular.toJson({
				'table_data': ($scope.bsAstTransWater),
				'com_data': {
					'district': $scope.district,
					'bs_date': $scope.bs_date,
					'user_id': $scope.user_id
				},
				'is_edit': $scope.is_edit
			}),
		}).success(function(data) {
			$scope.is_edit = false;
			if(data == 'False') {
				$("#modal-container-239454").modal('show');
				$scope.is_valid_data = false;
			}
			else {
			    $scope.updateEnums();
				$("#modal-container-239453").modal('show');
			}
			$scope.bsInfoAsetTrans = init_data;
		})
	}
	$scope.bsHsDataEdit = function() {
		$scope.submitted = true;
		$scope.is_edit = true;
		document.getElementById("clearbtn").disabled = true;
		$http({
			method: "POST",
			url: "/bs_fetch_edit_data",
			data: angular.toJson({
				'table_name': 'Table_1',
				'sector': 'transport_water',
				'com_data': {
					'district': $scope.district,
					'bs_date': $scope.bs_date
				}
			}),
		}).success(function(data) {
			console.log(data);
			var edit_data_not_found = false;
			if(data != null) {
				angular.forEach(data.transport_water.Table_1, function(value, index) {
					console.log(value);
					if(value.length == 0) {
						edit_data_not_found = true;
					}
				})
				if(edit_data_not_found != true) {
					$scope.bsAstTransWater = data;
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
	$scope.searchBsData = function() {
		document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		console.log("test", $scope.district);
		console.log("test", $scope.bs_date);
		$scope.is_search = true;
		$http({
			method: "POST",
			url: "/bs_fetch_edit_data",
			data: angular.toJson({
				'table_name': 'Table_1',
				'sector': 'transport_water',
				'com_data': {
					'district': $scope.district,
					'bs_date': $scope.bs_date
				}
			}),
		}).success(function(data) {
			console.log(data);
			//            $scope.bsAstTransWater = data;
			var edit_data_not_found = false;
			if(data != null) {
				console.log('----if');
				angular.forEach(data.transport_water.Table_1, function(value, index) {
					console.log('----forEach');
					console.log(value);
					if(value.length == 0) {
						console.log('----');
						edit_data_not_found = true;
					}
				})
				if(edit_data_not_found != true) {
					$scope.bsAstTransWater = data;
				} else {
					$("#modal-container-239456").modal('show');
				}
			} else {
				console.log('----else');
				$("#modal-container-239456").modal('show');
			}
		})
	}
	$scope.cancelEdit = function() {
			$scope.is_edit = false;
			$scope.bsAstTransWater = init_data;
			location.reload();
		}
		//Clear Function
	$scope.clear = function() {
		console.log("init")
		$scope.is_edit = false;
		$scope.bsAstTransWater = angular.copy(init_data);
		location.reload();
	}

	$scope.enum_data = {
        'transport_water': {
            'Table_1': {
                'BsAstWaterWcrafts': [],
//                'BS_Table2': [],
//                'BS_Table3': [],
//                'BS_Table4': [],
            }
        }
    }

    $scope.getEnumDataFromStart = function() {
        var bsAstWaterWcrafts_e_index = 0;
        angular.forEach($scope.bsAstTransWater.transport_water.Table_1.BsAstWaterWcrafts, function(value, index, key) {
            if(value.assets != 'Ships' && value.assets != 'Ferries') {
                var enum_val = {
                    oldasset: value.assets,
                    newasset: null,
                    enum_index: bsAstWaterWcrafts_e_index,
                    bs_asset_field: 'assets',
                    dl_tables: {
                        'Table_2': {
                            'DlWaterDmgWcrafts': {
                                dl_asset_field: 'assets'
                            }
                        }
                    }
                };
                bsAstWaterWcrafts_e_index = bsAstWaterWcrafts_e_index + 1;
                $scope.enum_data.transport_water.Table_1.BsAstWaterWcrafts.push(enum_val);
            }
        })
        console.log('getEnumDataFromStart', $scope.enum_data);
    }

    $scope.getEnumDataFromEnd = function() {
        console.log('---------getEnumDataFromEnd');
        console.log($scope.bsAstTransWater.transport_water.Table_1);
        var bsAstWaterWcrafts_e_index = 0;
        angular.forEach($scope.bsAstTransWater.transport_water.Table_1.BsAstWaterWcrafts, function(value, key) {
            console.log('BsAstWaterWcrafts ', value);
            if(value.assets != 'Ships' && value.assets != 'Ferries') {
                console.log('value.assets ', value.assets);
                angular.forEach($scope.enum_data.transport_water.Table_1.BsAstWaterWcrafts, function(each_enum, index, key_in) {
                    console.log('each_enum ', $scope.enum_data.transport_water.Table_1.BsAstWaterWcrafts);
                    if(each_enum.enum_index == bsAstWaterWcrafts_e_index) {
                        $scope.enum_data.transport_water.Table_1.BsAstWaterWcrafts[index].newasset = value.assets;
                    }
                })
                bsAstWaterWcrafts_e_index = bsAstWaterWcrafts_e_index + 1;
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
                'sector': 'transport_water'
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(response) {

        });
    }
})
