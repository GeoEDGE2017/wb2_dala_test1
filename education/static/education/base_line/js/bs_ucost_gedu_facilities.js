//Table 2
var bsHealthStatusApp = angular.module('bsUcostGeduFacilitiesApp', ['ui.bootstrap', 'popoverToggle']);
bsHealthStatusApp.controller('BsUcostGeduFacilitiesController', function BsUcostGeduFacilitiesController($scope, $http) {
	$scope.bsUcostGeduFacilities;
	$scope.total;
	$scope.iter_tot;
	$scope.district;
	$scope.bs_date;
	$scope.is_edit = false;
	$scope.submitted = false;
	$scope.baselineDate;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.is_submit = false;
	$scope.is_search_disable = false;
	$scope.is_search = false;
	$scope.check_search = false;
	var init_data = {
		'education': {
			'Table_2': {
				'BugArcStructures': [{
					particulars: '1 floor structure',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: '2-3 floors structure',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'More than 3 floors structure',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}],
				'BugArcSupplies': [{
					particulars: 'Books',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Desks',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Chairs',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Boards',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Tables',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}],
				'BugArcEquipment': [{
					particulars: 'Computers',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Aesthetic Equipment',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Sports Equipment',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Science Equipment',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}],
				'BugArpcStructures': [{
					particulars: 'Roof',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Wall',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Flooring',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}],
				'BugArpcSupplies': [{
					particulars: 'Books',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Desks',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Chairs',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Boards',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Tables',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}],
				'BugArpcEquipment': [{
					particulars: 'Computers',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Aesthetic Equipment',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Sports Equipment',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Science Equipment',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}],
				'BugAfr': [{
					particulars: 'Average revenue per month',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}],
				'BugCrp': [{
					particulars: 'Average construction period',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}, {
					particulars: 'Average repair period',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
				}]
			}
		}
	}
	$scope.bsUcostGeduFacilities = angular.copy(init_data);
	//disable Edit Button
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
		console.log($scope.bsUcostGeduFacilities.education.Table_2[table]);
		var new_row;
		if(table == 'BugArcSupplies') {
			new_row = {
				particulars: '',
				ab1_1c: null,
				type_2: null,
				type_3: null,
				pirivena: null,
				training_institutes: null,
				training_colleges: null,
				tc_crc_resc: null,
				min_pzd_offices: null,
			}
		} else if(table == 'BugArcEquipment') {
			new_row = {
				particulars: '',
				ab1_1c: null,
				type_2: null,
				type_3: null,
				pirivena: null,
				training_institutes: null,
				training_colleges: null,
				tc_crc_resc: null,
				min_pzd_offices: null,
			}
		} else if(table == 'BugArpcSupplies') {
			new_row = {
				particulars: '',
				ab1_1c: null,
				type_2: null,
				type_3: null,
				pirivena: null,
				training_institutes: null,
				training_colleges: null,
				tc_crc_resc: null,
				min_pzd_offices: null,
			}
		} else if(table == 'BugArpcEquipment') {
			new_row = {
				particulars: '',
				ab1_1c: null,
				type_2: null,
				type_3: null,
				pirivena: null,
				training_institutes: null,
				training_colleges: null,
				tc_crc_resc: null,
				min_pzd_offices: null,
			}
		}
		$scope.bsUcostGeduFacilities.education.Table_2[table].push(new_row);
	}
	$scope.removeItem = function removeItem(table, index) {
		if(table == 'BugArcSupplies') {
			$scope.bsUcostGeduFacilities.education.Table_2.BugArcSupplies.splice(index, 1);
		} else if(table == 'BugArcEquipment') {
			$scope.bsUcostGeduFacilities.education.Table_2.BugArcEquipment.splice(index, 1);
		} else if(table == 'BugArpcSupplies') {
			$scope.bsUcostGeduFacilities.education.Table_2.BugArpcSupplies.splice(index, 1);
		} else if(table == 'BugArpcEquipment') {
			$scope.bsUcostGeduFacilities.education.Table_2.BugArpcEquipment.splice(index, 1);
		}
	}
	$scope.saveBsData = function(form) {
		console.log($scope.bsUcostGeduFacilities);
		$scope.submitted = true;
		$scope.is_submit = true;
		if(form.$valid) {
			console.log($scope.data);
			$http({
				method: 'POST',
				url: '/bs_save_data',
				contentType: 'application/json; charset=utf-8',
				data: angular.toJson({
					'table_data': $scope.bsUcostGeduFacilities,
					'com_data': {
						'district': $scope.district,
						'bs_date': $scope.baselineDate,
						'user_id': $scope.user_id,
					},
					'is_edit': $scope.is_edit
				}),
				dataType: 'json',
			}).then(function successCallback(response) {
				console.log(response);
				if(response.data == 'False') {
					$("#modal-container-239454").modal('show');
					$scope.is_valid_data = false;
				} else {
					$("#modal-container-239453").modal('show');
				}
			}, function errorCallback(response) {
				console.log(response);
			});
		}
		$scope.is_submit = false;
	}
	$scope.bsHsDataEdit = function(form) {
		$scope.is_edit = true;
		$scope.submitted = true;
		document.getElementById("clearbtn").disabled = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: "/bs_fetch_edit_data",
				data: angular.toJson({
					'table_name': 'Table_2',
					'sector': 'education',
					'com_data': {
						'district': $scope.district,
						'bs_date': $scope.baselineDate,
						'user_id': $scope.user_id,
					}
				}),
			}).success(function(data) {
				console.log(data);
				//            $scope.bsUcostGeduFacilities = data;
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.education.Table_2, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.bsUcostGeduFacilities = data;
					} else {
						$("#modal-container-239456").modal('show');
					}
				} else {
					$("#modal-container-239456").modal('show');
				}
			})
		}
	}
	$scope.searchBsData = function(form) {
		$scope.submitted = true;
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
					'sector': 'education',
					'com_data': {
						'district': $scope.district,
						'bs_date': $scope.baselineDate,
						'user_id': $scope.user_id,
					}
				}),
			}).success(function(data) {
				console.log(data);
				//            $scope.bsUcostGeduFacilities = data;
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.education.Table_2, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.bsUcostGeduFacilities = data;
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
			$scope.bsUcostGeduFacilities = init_data;
			location.reload();
		}
		//Clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.bsUcostGeduFacilities = angular.copy(init_data);
		location.reload();
	}
})
