//Table 2
var app = angular.module('dlIncomeRailCompanyApp', ['underscore'])
app.controller('dlIncomeRailCompanyController', function($scope, $http, $parse, _) {
	$scope.district;
	$scope.incident;
	$scope.company;
	$scope.dlDate;
	$scope.bs_data = {};
	var total = 0;
	$scope.baselineDate;
	$scope.DlMovingAstLoss_tot_damages = null;
	$scope.is_edit = false;
	$scope.is_valid_data = true;
	$scope.DlBuildingAstLoss_no_of_tot_destroyed = null;
	$scope.DlBuildingAstLoss_no_of_partially_damaged = null;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.is_submit = false;
	$scope.check_search = false;

	var init_data = {
		'transport_rail': {
			'Table_2': {
				'DlMovingAstLoss': [{
					asset: 'Wagon',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}, {
					asset: 'Engine',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}, {
					asset: 'Total',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}],
				'DlEquipMachineryAstLoss': [{
					asset: 'Signal equipment',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}, {
					asset: 'Track machinery',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}, {
					asset: 'Vehicles',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}, {
					asset: 'Computers',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}, {
					asset: 'Furniture',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}, {
					asset: 'Total',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}],
				'DlMatSuppliesAstLoss': [{
					asset: 'Fuel (Liters)',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				},{
					asset: 'Total',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}],
				'DlStructuresAstLoss': [{
					asset: 'Tracks',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}, {
					asset: 'Tunnels',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}, {
					asset: 'Bridges',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}, {
					asset: 'Culverts',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}, {
					asset: 'Total',
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
				}],
				'DlBuildingAstLoss': [{
					asset: '1 floor',
					no_of_tot_destroyed: null,
					no_of_tot_destroyed_sqr_meters: null,
					no_of_partially_damaged: null,
					no_of_partially_damaged_roof: null,
					no_of_partially_damaged_wall: null,
					no_of_partially_damaged_floor: null,
					tot_damages: null,
				}, {
					asset: '2-3 floors',
					no_of_tot_destroyed: null,
					no_of_tot_destroyed_sqr_meters: null,
					no_of_partially_damaged: null,
					no_of_partially_damaged_roof: null,
					no_of_partially_damaged_wall: null,
					no_of_partially_damaged_floor: null,
					tot_damages: null,
				}, {
					asset: 'More than 3 floors',
					no_of_tot_destroyed: null,
					no_of_tot_destroyed_sqr_meters: null,
					no_of_partially_damaged: null,
					no_of_partially_damaged_roof: null,
					no_of_partially_damaged_wall: null,
					no_of_partially_damaged_floor: null,
					tot_damages: null,
				}, {
					asset: 'Total',
					no_of_tot_destroyed: null,
					no_of_tot_destroyed_sqr_meters: null,
					no_of_partially_damaged: null,
					no_of_partially_damaged_roof: null,
					no_of_partially_damaged_wall: null,
					no_of_partially_damaged_floor: null,
					tot_damages: null,
				}],
			}
		}
	}

	$scope.dlIncomeRailCompany = angular.copy(init_data);

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
					'db_tables': ['BsMovingAst', 'BsEquipMachineryAst', 'BsMatSuppliesAst', 'BsStructuresAst', 'BsBuildingAst'],
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'sector': 'transport_rail',
					'table_name': 'Table_1'
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
				} else {
					$http({
						method: 'POST',
						url: '/get_latest_bs_date',
						contentType: 'application/json; charset=utf-8',
						data: angular.toJson({
							'db_tables': ['BsMovingAst', 'BsEquipMachineryAst', 'BsMatSuppliesAst', 'BsStructuresAst', 'BsBuildingAst'],
							'com_data': {
								'district': $scope.district.district__id,
								'incident': $scope.incident,
							},
							'sector': 'transport_rail',
							'table_name': 'Table_1'
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
                    $scope.bsCreatedeDate = result.bs_created_date;
                    console.log('bs_date', result.bs_date);
                    console.log('bsCreatedeDate', result.bs_created_date);
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

	$scope.getCompany = function() {
		$scope.company;
	}

	 //Get Reference Data from Baseline
    function generateRefencedData() {
        data_array = ['BsMovingAst', 'BsEquipMachineryAst', 'BsMatSuppliesAst'];
        var dl_model1 = null;
        var dl_model2 = null;

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;
            var particular_value_2 = null;
            var particular_value_3 = null;

            if(model_name == 'BsMovingAst') {
                dl_model1 = 'DlMovingAstLoss';
                particular_value_1 = 'Total';
                $scope.dlIncomeRailCompany.transport_rail.Table_2[dl_model1] = [];

            }
            if(model_name == 'BsEquipMachineryAst') {
                dl_model2 = 'DlEquipMachineryAstLoss';
                particular_value_2 = 'Total';
                $scope.dlIncomeRailCompany.transport_rail.Table_2[dl_model2] = [];
            }
            if(model_name == 'BsMatSuppliesAst') {
                dl_model3 = 'DlMatSuppliesAstLoss';
                particular_value_3 = 'Total';
                 $scope.dlIncomeRailCompany.transport_rail.Table_2[dl_model3] = [];
            }

            var obj1 = {
                asset: particular_value_1,
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
            };
            var obj2 = {
                asset: particular_value_2,
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
            };
            var obj3 = {
                asset: particular_value_3,
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
            };


            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    asset: value.fields.asset,
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
                };
                var obj2 = {
                    asset: value.fields.asset,
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
                };
                var obj3 = {
                    asset: value.fields.asset,
					no_of_tot_destroyed: null,
					no_of_partially_damaged: null,
					tot_damages: null,
                };


                if(model_name == 'BsMovingAst') {
                   $scope.dlIncomeRailCompany.transport_rail.Table_2[dl_model1].push(obj1);
                }
                if(model_name == 'BsEquipMachineryAst') {
                   $scope.dlIncomeRailCompany.transport_rail.Table_2[dl_model2].push(obj2);
                }
                if(model_name == 'BsMatSuppliesAst') {
                   $scope.dlIncomeRailCompany.transport_rail.Table_2[dl_model3].push(obj3);
                }

            });
        });
    }

	$scope.saveDlData = function(form) {
		console.log($scope.company);
		$scope.submitted = true;
		$scope.is_submit = true;
		if(form.$valid) {
			if($scope.company) {
				$http({
					method: 'POST',
					url: '/dl_save_data',
					contentType: 'application/json; charset=utf-8',
					data: angular.toJson({
						'table_data': $scope.dlIncomeRailCompany,
						'com_data': {
							'district_id': $scope.district.district__id,
							'incident_id': $scope.incident,
							'company_id': $scope.company.id,
							'user_id': $scope.user_id
						},
						'is_edit': $scope.is_edit
					}),
					dataType: 'json',
				}).then(function successCallback(response) {
					if(response.data == 'False') {
						$scope.is_valid_data = false;
					} else {
						$("#modal-container-239453").modal('show');
					}
				}, function errorCallback(response) {
					console.log(response);
				});
			}
		}
		$scope.is_submit = false;
	}

	$scope.calTotal = function(arr) {
		var finaltotal = 0;
		angular.forEach(arr, function(value, key) {
			if(value.asset != 'Total') {
				finaltotal = finaltotal + value.tot_damages;
			}
		})
		return finaltotal;
	}

	$scope.calGrandTotal = function() {
		var finaltotal1 = 0;
		var finaltotal2 = 0;
		var finaltotal3 = 0;
		var finaltotal4 = 0;
		var finaltotal5 = 0;
		var grantot = 0;
		var array1 = $scope.dlIncomeRailCompany.transport_rail.Table_2.DlMovingAstLoss;
		var array2 = $scope.dlIncomeRailCompany.transport_rail.Table_2.DlEquipMachineryAstLoss;
		var array3 = $scope.dlIncomeRailCompany.transport_rail.Table_2.DlMatSuppliesAstLoss;
		var array4 = $scope.dlIncomeRailCompany.transport_rail.Table_2.DlStructuresAstLoss;
		var array5 = $scope.dlIncomeRailCompany.transport_rail.Table_2.DlBuildingAstLoss;
		angular.forEach(array1, function(value, key) {
			if(value.asset != 'Total') {
				finaltotal1 = finaltotal1 + value.tot_damages;
			}
		})
		angular.forEach(array2, function(value, key) {
			if(value.asset != 'Total') {
				finaltotal2 = finaltotal2 + value.tot_damages;
			}
		})
		angular.forEach(array3, function(value, key) {
			if(value.asset != 'Total') {
				finaltotal3 = finaltotal3 + value.tot_damages;
			}
		})
		angular.forEach(array4, function(value, key) {
			if(value.asset != 'Total') {
				finaltotal4 = finaltotal4 + value.tot_damages;
			}
		})
		angular.forEach(array5, function(value, key) {
			if(value.asset != 'Total') {
				finaltotal5 = finaltotal5 + value.tot_damages;
			}
		})
		grantot = finaltotal1 + finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5;
		return grantot;
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
					'table_name': 'Table_2',
					'sector': 'transport_rail',
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'is_edit': $scope.is_edit
				}),
			}).success(function(data) {
				//                console.log(data);
				//                $scope.dlIncomeRailCompany = data;
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.transport_rail.Table_2, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.dlIncomeRailCompany = data;
						console.log($scope.dlIncomeRailCompany);
					} else {
						$("#modal-container-239456").modal('show');
					}
				} else {
					$("#modal-container-239456").modal('show');
				}
			})
		}
	}

	$scope.searchDlData = function(form) {
		document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		console.log("test", $scope.district);
		console.log("test", $scope.bs_date);
		$scope.is_search = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: '/dl_fetch_edit_data',
				data: angular.toJson({
					'table_name': 'Table_2',
					'sector': 'transport_rail',
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'is_edit': $scope.is_edit
				}),
			}).success(function(data) {
				//                console.log(data);
				//                $scope.dlIncomeRailCompany = data;
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.transport_rail.Table_2, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.dlIncomeRailCompany = data;
						console.log($scope.dlIncomeRailCompany);
					} else {
						$("#modal-container-239456").modal('show');
					}
				} else {
					$("#modal-container-239456").modal('show');
				}
			})
		}
	}

	$scope.cancelEdit = function() {
			$scope.is_edit = false;
			$scope.dlIncomeRailCompany = init_data;
			location.reload();
		}
		//Clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.dlIncomeRailCompany = angular.copy(init_data);
		location.reload();
	}
});
