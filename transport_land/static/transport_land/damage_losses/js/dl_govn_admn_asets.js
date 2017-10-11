//Table 6
var app = angular.module('dlGovnAdmnAsetsApp', ['underscore'])
app.controller('dlGovnAdmnAsetsController', function($scope, $http, $parse, _) {
	$scope.district;
	$scope.selectedDistrict;
	$scope.incident;
	$scope.dlDate;
	$scope.bs_data = {};
	$scope.baselineDate;
	$scope.bsCreatedDate;
	$scope.is_edit = false;
	$scope.is_valid_data = true;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.check_search = false;

	var init_data = {
		'transport_land': {
			'Table_6': {
				'DlGacDmgStructures': [{
					assets: '1 floor structure',
					num_tot_destroyed: null,
					num_square_meters: null,
					damages: null,
				}, {
					assets: '2-3 floors structure',
					num_tot_destroyed: null,
					num_square_meters: null,
					damages: null,
				}, {
					assets: 'More than 3 floors',
					num_tot_destroyed: null,
					num_square_meters: null,
					damages: null,
				}, {
					assets: 'Total',
					num_tot_destroyed: null,
					num_square_meters: null,
					damages: null,
				}],
				'DlGacPdmgStructures': [{
					assets: '1 floor structure',
					num_part_damaged: null,
					damaged_roof: null,
					damaged_walls: null,
					damaged_floors: null,
					damages: null,
				}, {
					assets: '2-3 floors structure',
					num_part_damaged: null,
					damaged_roof: null,
					damaged_walls: null,
					damaged_floors: null,
					damages: null,
				}, {
					assets: 'More than 3 floors',
					num_part_damaged: null,
					damaged_roof: null,
					damaged_walls: null,
					damaged_floors: null,
					damages: null,
				}, {
					assets: 'Total',
					num_part_damaged: null,
					damaged_roof: null,
					damaged_walls: null,
					damaged_floors: null,
					damages: null,
				}],
				'DlGacPdmgEquipment': [{
					assets: 'Computers',
					num_tot_destroyed: null,
					num_part_damaged: null,
					damages: null,
				}, {
					assets: 'Furniture',
					num_tot_destroyed: null,
					num_part_damaged: null,
					damages: null,
				}, {
					assets: 'Total',
					num_tot_destroyed: null,
					num_part_damaged: null,
					damages: null,
				}, ],
				'DlGacPdmgMachinery': [{
					assets: 'Vehicles',
					num_tot_destroyed: null,
					num_part_damaged: null,
					damages: null,
				}, {
					assets: 'Generators',
					num_tot_destroyed: null,
					num_part_damaged: null,
					damages: null,
				}, {
					assets: 'Elevators',
					num_tot_destroyed: null,
					num_part_damaged: null,
					damages: null,
				}, {
					assets: 'Total',
					num_tot_destroyed: null,
					num_part_damaged: null,
					damages: null,
				}],
				'DlGacLosType': [{
					assets: 'Foregone income',
					los_year_1: null,
					los_year_2: null,
					total: null,
				}, {
					assets: 'Cleaning costs',
					los_year_1: null,
					los_year_2: null,
					total: null,
				}, {
					assets: 'Higher operating costs',
					los_year_1: null,
					los_year_2: null,
					total: null,
				}, {
					assets: 'Other unexpected expenses',
					los_year_1: null,
					los_year_2: null,
					total: null,
				}, {
					assets: 'TOTAL LOSSES',
					los_year_1: null,
					los_year_2: null,
					total: null,
				}, ],
			}
		}
	}

	$scope.dlGovnAdmnAsets = angular.copy(init_data);

	$scope.changedValue = function getBsData(selectedValue) {
		if($scope.incident && selectedValue) {
			$http({
				method: "POST",
				url: "/fetch_incident_districts",
				data: angular.toJson({
					'incident': $scope.incident,
					'user': $scope.user_id
				}),
			}).success(function(data) {
				$scope.districts = data;
				$scope.selectedDistrict = "";
				console.log(data);
			})
		}
		if($scope.incident && $scope.district) {
			$scope.is_edit_disable = true;
			$scope.check_search = true;
			$http({
				method: 'POST',
				url: '/bs_get_data_mock',
				contentType: 'application/json; charset=utf-8',
				data: angular.toJson({
					'db_tables': ['BiaGacLandOequipment', 'BiaGacLandStructure', 'BiaGacLandPbuilding', 'BiaGacLandMachinery'],
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'table_name': 'Table_3',
					'sector': 'transport_land'
				}),
				dataType: 'json',
			}).then(function successCallback(response) {
				var data = response.data;
				console.log(response);
				angular.forEach(data, function(value, key) {
					$scope.bs_data[key] = JSON.parse(value);
				});
				console.log($scope.bs_data);
				var is_null = false;
				angular.forEach($scope.bs_data, function(value, index) {
					if(value == null) {
						is_null = true;
					}
				})
				if(is_null == true) {
					$("#modal-container-239458").modal('show');
					console.log('baseline table or tables are empty');
					console.log($scope.bs_data);
					$scope.currentBaselineDate = null;
				}
				else {
					console.log($scope.dlGovnAdmnAsets);
					$http({
						method: 'POST',
						url: '/get_latest_bs_date',
						contentType: 'application/json; charset=utf-8',
						data: angular.toJson({
							'db_tables': ['BiaGacLandOequipment', 'BiaGacLandStructure', 'BiaGacLandPbuilding', 'BiaGacLandMachinery'],
							'com_data': {
								'district': $scope.district.district__id,
								'incident': $scope.incident,
							},
							'table_name': 'Table_3',
							'sector': 'transport_land'
						}),
						dataType: 'json',
                    }).then(function successCallback(response) {
                        console.log('response', response.data.bs_created_date);
                        var result = response.data;
                        if(result.bs_date == null) {
                            $("#modal-container-239458").modal('show');
                        }
                        else {
                            var bs_date = result.bs_date.replace(/^"(.*)"$/, '$1');
                            $scope.currentBaselineDate = "Latest baseline data as at " + bs_date;
                            $scope.bsCreatedDate = result.bs_created_date;
                            console.log('bs_date', result.bs_date);
                            console.log('bsCreatedDate', result.bs_created_date);
                            generateRefencedData();
                            $scope.calTotal();
                         }
                    });
				}
			}, function errorCallback(response) {
				console.log(response);
			});
		}
	}

	function generateRefencedData() {
		data_array = ['BiaGacLandOequipment', 'BiaGacLandMachinery'];
		var dl_model1 = null;
		angular.forEach(data_array, function(value, key) {
			obj_array = $scope.bs_data[value];
			model_name = value;
			var particular_value_1 = null;
			if(model_name == 'BiaGacLandOequipment') {
				dl_model1 = 'DlGacPdmgEquipment';
				particular_value_1 = 'Total';
			}
			if(model_name == 'BiaGacLandMachinery') {
				dl_model1 = 'DlGacPdmgMachinery';
				particular_value_1 = 'Total';
			}
			$scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1] = [];
			var obj1 = {
				assets: particular_value_1,
				num_tot_destroyed: null,
				num_part_damaged: null,
				damages: null,
			};
			angular.forEach(obj_array, function(value, key) {
				var obj1 = {
					assets: value.fields.asset,
					num_tot_destroyed: null,
					num_part_damaged: null,
					damages: null,
				};
				if(model_name == 'BiaGacLandOequipment') {
					$scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1].push(obj1);
				}
				if(model_name == 'BiaGacLandMachinery') {
					$scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1].push(obj1);
				}
			});
			$scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1].push(obj1);
		});
	}

	$scope.saveDlData = function(form) {
		$scope.submitted = true;
		if(form.$valid) {
			$http({
				method: 'POST',
				url: '/dl_save_data',
				contentType: 'application/json; charset=utf-8',
				data: angular.toJson({
					'table_data': $scope.dlGovnAdmnAsets,
					'com_data': {
						'district_id': $scope.district.district__id,
						'incident_id': $scope.incident,
						'user_id': $scope.user_id
					},
					'bs_date': $scope.bsCreatedDate,
					'is_edit': $scope.is_edit,
					'sector': 'transport_land'
				}),
				dataType: 'json',
			}).then(function successCallback(response) {
				if(response.data == 'False') {
                    $scope.is_valid_data = false;
                    $("#modal-container-239454").modal('show');
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
			}, function errorCallback(response) {
				console.log(response);
			});
		}
	}

	$scope.editDlData = function(form) {
		$scope.is_edit = true;
		$scope.submitted = true;
		document.getElementById("clearbtn").disabled = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: '/dl_fetch_edit_data',
				data: angular.toJson({
					'table_name': 'Table_6',
					'sector': 'transport_land',
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'is_edit': $scope.is_edit
				}),
			}).success(function(data) {
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.transport_land.Table_6, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.dlGovnAdmnAsets = data;
						console.log($scope.dlGovnAdmnAsets);
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

	$scope.searchDlData = function(form) {
		document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		$scope.is_search = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: '/dl_fetch_edit_data',
				data: angular.toJson({
					'table_name': 'Table_6',
					'sector': 'transport_land',
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'is_edit': $scope.is_edit
				}),
			}).success(function(data) {
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.transport_land.Table_6, function(value, index) {
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.dlGovnAdmnAsets = data;
						console.log($scope.dlGovnAdmnAsets);
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
		$scope.dlGovnAdmnAsets = init_data;
		location.reload();
	}

	$scope.calTotal = function(arr) {
		var finaltotal = 0;
		angular.forEach(arr, function(value, key) {
			if(value.assets != 'Total') {
				finaltotal = finaltotal + value.damages;
			}
		})
		return finaltotal;
	}

	$scope.calGrandTotal = function() {
		var finaltotal1 = 0;
		var finaltotal2 = 0;
		var finaltotal3 = 0;
		var finaltotal4 = 0;
		var grantot = 0;
		var array1 = $scope.dlGovnAdmnAsets.transport_land.Table_6.DlGacPdmgStructures;
		var array2 = $scope.dlGovnAdmnAsets.transport_land.Table_6.DlGacPdmgEquipment;
		var array3 = $scope.dlGovnAdmnAsets.transport_land.Table_6.DlGacPdmgMachinery;
		var array4 = $scope.dlGovnAdmnAsets.transport_land.Table_6.DlGacDmgStructures;
		angular.forEach(array1, function(value, key) {
			if(value.assets != "Total") {
				finaltotal1 = finaltotal1 + value.damages;
			}
		})
		angular.forEach(array2, function(value, key) {
			if(value.assets != "Total") {
				finaltotal2 = finaltotal2 + value.damages;
			}
		})
		angular.forEach(array3, function(value, key) {
			if(value.assets != "Total") {
				finaltotal3 = finaltotal3 + value.damages;
			}
		})
		angular.forEach(array4, function(value, key) {
			if(value.assets != "Total") {
				finaltotal4 = finaltotal4 + value.damages;
			}
		})
		grantot = finaltotal1 + finaltotal2 + finaltotal3 + finaltotal4;
		return grantot;
	}

    $scope.calGrandTypeLossTotal = function() {
        var finaltotal1 = 0;
        var grantot = 0;
        var array1 = $scope.dlGovnAdmnAsets.transport_land.Table_6.DlGacLosType;
        angular.forEach(array1, function(value, key) {
            if(value.assets != 'TOTAL LOSSES') {
                finaltotal1 = finaltotal1 + value.total;
            }
        })
        grantot = grantot + finaltotal1;
        return grantot;
    }

    //Clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.dlGovnAdmnAsets = angular.copy(init_data);
		location.reload();
	}
});
