//Table 3
var bsHealthStatusApp = angular.module('dlGovnEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle', 'underscore']);
bsHealthStatusApp.controller('DlGovnEduFacilitiesController', function DlGovnEduFacilitiesController($scope, $http, _) {
	$scope.dlGovnEduFacilities;
	$scope.total;
	$scope.iter_tot;
	$scope.district;
	$scope.bs_date;
	$scope.tot = null;
	$scope.is_edit = false;
	$scope.submitted = false;
	$scope.bs_data = {};
	$scope.tot = null;
	$scope.DugNpdatSupplies_ab1_1c = null;
	$scope.DugNdafSupplies_type_2 = null;
	$scope.DugNdafSupplies_type_3 = null;
	$scope.DugNdafSupplies_pirivena = null;
	$scope.DugNdafSupplies_training_institutes = null;
	$scope.DugNdafSupplies_training_colleges = null;
	$scope.DugNdafSupplies_tc_crc_resc = null;
	$scope.DugNdafSupplies_min_pzd_offices = null;
	$scope.dugNdafTot = 0;
	$scope.dugNdafSupTot = 0;
	$scope.dugNdafEquTot = 0;
	var total = 0;
	var tabtwototal = 0;
	$scope.currentBaselineDate = null;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.is_submit = false;
	$scope.check_search = false;
	$scope.bsCreatedDate;

	var init_data = {
		'education': {
			'Table_3': {
				'DugDfNdf': [{
					particulars: 'No. of Destroyed Facilities',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugDfNsa': [{
					particulars: 'Male',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Female',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugNdafStructure': [{
					particulars: '1 floor structure',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
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
					total: null
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
					total: null
				}, {
					particulars: 'Value of Destroyed Structures',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugNdafSupplies': [{
					particulars: 'Books',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
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
					total: null
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
					total: null
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
					total: null
				}, {
					particulars: 'Table',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Value of Destroyed Supplies and Materials',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugNdafEquipment': [{
					particulars: 'Computers',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
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
					total: null
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
					total: null
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
					total: null
				}, {
					particulars: 'Value of Destroyed Equipment',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugPdfaNpdf': [{
					particulars: 'No of Partially Damaged Facilities',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugPdfaNsa': [{
					particulars: 'Male',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Female',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugNpdatStructure': [{
					particulars: 'Roof',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
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
					total: null
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
					total: null
				}, {
					particulars: 'Value of Partially Damaged Structures',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugNpdatSupplies': [{
					particulars: 'Books',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
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
					total: null
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
					total: null
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
					total: null
				}, {
					particulars: 'Table',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Value of Partially Damaged Supplies and Materials',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugNpdatEquipment': [{
					particulars: 'Computers',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
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
					total: null
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
					total: null
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
					total: null
				}, {
					particulars: 'Value of Partially Damaged Equipment',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugLosFi': [{
					particulars: 'Disaster Year 1',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Year 2',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Total',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugLosCud': [{
					particulars: 'Disaster Year 1',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Year 2',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Total',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugLosHoc': [{
					particulars: 'Disaster Year 1',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Year 2',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Total',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
				'DugLosOue': [{
					particulars: 'Disaster Year 1',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Year 2',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}, {
					particulars: 'Total',
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				}],
			}
		}
	}

	$scope.dlGovnEduFacilities = init_data;

	$scope.insertAsset = function(table) {
		console.log($scope.dlGovnEduFacilities.education.Table_3[table]);
		var new_row;
		if(table == 'DugNdafSupplies') {
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
				total: null
			}
		}
		else if(table == 'DugNdafEquipment') {
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
				total: null
			}
		}
		else if(table == 'DugNpdatSupplies') {
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
				total: null
			}
		}
		else if(table == 'DugNpdatEquipment') {
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
				total: null
			}
		}
		$scope.dlGovnEduFacilities.education.Table_3[table].push(new_row);
	}

	$scope.removeItem = function removeItem(table, index) {
		if(table == 'DugNdafSupplies') {
			$scope.dlGovnEduFacilities.education.Table_3.DugNdafSupplies.splice(index, 1);
		}
		else if(table == 'DugNdafEquipment') {
			$scope.dlGovnEduFacilities.education.Table_3.DugNdafEquipment.splice(index, 1);
		}
		else if(table == 'DugNpdatSupplies') {
			$scope.dlGovnEduFacilities.education.Table_3.DugNpdatSupplies.splice(index, 1);
		}
		else if(table == 'DugNpdatEquipment') {
			$scope.dlGovnEduFacilities.education.Table_3.DugNpdatEquipment.splice(index, 1);
		}
	}

	$scope.changedValue = function getBsData(selectedValue) {
		if($scope.incident && selectedValue) {
			console.log($scope.user_id);
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
			$scope.fetchDlData();
			$scope.check_search = true;
		}
	}

	$scope.saveDlData = function(form) {
		$scope.submitted = true;
		$scope.is_submit = true;
		if(form.$valid) {
			console.log($scope.dlGovnEduFacilities);
			$http({
				method: 'POST',
				url: '/dl_save_data',
				contentType: 'application/json; charset=utf-8',
				data: angular.toJson({
					'table_data': $scope.dlGovnEduFacilities,
					'com_data': {
						'district_id': $scope.district.district__id,
						'incident_id': $scope.incident,
						'user_id': $scope.user_id,
					},
					'bs_date': $scope.bsCreatedDate,
                    'is_edit': $scope.is_edit,
                    'sector': 'transport_air'
				}),
				dataType: 'json',
			}).then(function mySucces(response) {
                if(response.data == 'False') {
                    $scope.is_valid_data = false;
                    $("#modal-container-239454").modal('show');
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
			}, function myError(response) {
				console.log(response);
			});
		}
		$scope.is_submit = false;
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
					'table_name': 'Table_3',
					'sector': 'education',
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
//                        'user_id': $scope.user_id,
					},
					'is_edit': $scope.is_edit
				}),
			}).success(function(data) {
				console.log(data);
//                $scope.dlGovnEduFacilities = data;
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.education.Table_3, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.dlGovnEduFacilities = data;
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
		$scope.submitted = true;
		document.getElementById("clearbtn").disabled = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: '/dl_fetch_edit_data',
				data: angular.toJson({
					'table_name': 'Table_3',
					'sector': 'education',
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'is_edit': $scope.is_edit
				}),
			}).success(function(data) {
				console.log(data);
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.education.Table_3, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.dlGovnEduFacilities = data;
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
		$scope.dlGovnEduFacilities = init_data;
		location.reload();
	}

	$scope.fetchDlData = function() {
		$http({
			method: "POST",
			url: '/bs_get_data_mock',
			data: angular.toJson({
				'table_name': 'Table_2',
				'sector': 'education',
				'db_tables': ['BugArcStructures', 'BugArcSupplies', 'BugArcEquipment', 'BugArpcStructures', 'BugArpcSupplies', 'BugArpcEquipment', 'BugAfr', 'BugCrp'],
				'com_data': {
					'district': $scope.district.district__id,
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
			angular.forEach(data, function(value, key) {
				$scope.bs_data[key] = JSON.parse(value);
			});
			$http({
				//this table does not get any data from baseline tables,
				//but we pass baseline table 3, for get baseline data only
				method: 'POST',
				url: '/get_latest_bs_date',
				contentType: 'application/json; charset=utf-8',
				data: angular.toJson({
					'db_tables': ['BugArcStructures', 'BugArcSupplies', 'BugArcEquipment', 'BugArpcStructures', 'BugArpcSupplies', 'BugArpcEquipment', 'BugAfr', 'BugCrp'],
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'table_name': 'Table_2',
					'sector': 'education'
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
		})
	}

	function generateRefencedData() {
		data_array = ['BugArcSupplies', 'BugArcEquipment'];
		angular.forEach(data_array, function(value, key) {
			obj_array = $scope.bs_data[value];
			model_name = value;
			var particular_value_1 = null;
			var particular_value_2 = null;
			if(model_name == 'BugArcSupplies') {
				dl_model1 = 'DugNdafSupplies';
				dl_model2 = 'DugNpdatSupplies';
				particular_value_1 = 'Value of Destroyed Supplies and Materials';
				particular_value_2 = 'Value of Partially Damaged Supplies and Materials';
			}
			else if(model_name == 'BugArcEquipment') {
				dl_model1 = 'DugNdafEquipment';
				dl_model2 = 'DugNpdatEquipment';
				particular_value_1 = 'Value of Destroyed Equipment';
				particular_value_2 = 'Value of Partially Damaged Equipment';
			}
			$scope.dlGovnEduFacilities.education.Table_3[dl_model1] = [];
			$scope.dlGovnEduFacilities.education.Table_3[dl_model2] = [];
			var obj1 = {
				particulars: particular_value_1,
				ab1_1c: null,
				type_2: null,
				type_3: null,
				pirivena: null,
				training_institutes: null,
				training_colleges: null,
				tc_crc_resc: null,
				min_pzd_offices: null,
				total: null
			};
			var obj2 = {
				particulars: particular_value_2,
				ab1_1c: null,
				type_2: null,
				type_3: null,
				pirivena: null,
				training_institutes: null,
				training_colleges: null,
				tc_crc_resc: null,
				min_pzd_offices: null,
				total: null
			};
			angular.forEach(obj_array, function(value, key) {
				var obj1 = {
					particulars: value.fields.particulars,
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				};
				var obj2 = {
					particulars: value.fields.particulars,
					ab1_1c: null,
					type_2: null,
					type_3: null,
					pirivena: null,
					training_institutes: null,
					training_colleges: null,
					tc_crc_resc: null,
					min_pzd_offices: null,
					total: null
				};
				if(model_name == 'BugArcSupplies') {
					$scope.dlGovnEduFacilities.education.Table_3[dl_model1].push(obj1);
					$scope.dlGovnEduFacilities.education.Table_3[dl_model2].push(obj2);
				}
				else if(model_name == 'BugArcEquipment') {
					$scope.dlGovnEduFacilities.education.Table_3[dl_model1].push(obj1);
					$scope.dlGovnEduFacilities.education.Table_3[dl_model2].push(obj2);
				}
			});
			$scope.dlGovnEduFacilities.education.Table_3[dl_model1].push(obj1);
			$scope.dlGovnEduFacilities.education.Table_3[dl_model2].push(obj2);
		});
	}

	$scope.calTotal = function(model, property) {
		var obj_array;
		total = 0;
		if(model == 'DugNdafSupplies') {
			obj_array = $scope.bs_data.BugArcSupplies;
		}
		if(model == 'DugNdafEquipment') {
			obj_array = $scope.bs_data.BugArcEquipment;
		}
		if(model == 'DugNpdatSupplies') {
			obj_array = $scope.bs_data.BugArpcSupplies;
		}
		if(model == 'DugNpdatEquipment') {
			obj_array = $scope.bs_data.BugArpcEquipment;
		}
		angular.forEach(obj_array, function(value, key) {
			total = total + ($scope.dlGovnEduFacilities.education.Table_3[model][key][property] * value.fields[property]);
		})
		return total;
	}

	$scope.getTotal = function(value) {
		$scope.dugNdafTot = $scope.dugNdafTot + value.total;
	}

	$scope.getGrandTot = function(property) {
		var strucLength = $scope.dlGovnEduFacilities.education.Table_3.DugNdafStructure.length;
		var suppLength = $scope.dlGovnEduFacilities.education.Table_3.DugNdafSupplies.length;
		var equLength = $scope.dlGovnEduFacilities.education.Table_3.DugNdafEquipment.length;
		var ab1_1c = $scope.dlGovnEduFacilities.education.Table_3.DugNdafStructure[strucLength - 1][property] + $scope.dlGovnEduFacilities.education.Table_3.DugNdafSupplies[suppLength - 1][property] + $scope.dlGovnEduFacilities.education.Table_3.DugNdafEquipment[equLength - 1][property]
		return ab1_1c;
	}

	$scope.getGrandTotDamage = function(property) {
		var strucDmLength = $scope.dlGovnEduFacilities.education.Table_3.DugNpdatStructure.length;
		var suppDmLength = $scope.dlGovnEduFacilities.education.Table_3.DugNpdatSupplies.length;
		var equDmLength = $scope.dlGovnEduFacilities.education.Table_3.DugNpdatEquipment.length;
		var ab1_1c_dm = $scope.dlGovnEduFacilities.education.Table_3.DugNpdatStructure[strucDmLength - 1][property] + $scope.dlGovnEduFacilities.education.Table_3.DugNpdatSupplies[suppDmLength - 1][property] + $scope.dlGovnEduFacilities.education.Table_3.DugNpdatEquipment[equDmLength - 1][property]
		return ab1_1c_dm;
	}

	$scope.getTot = function(model) {
		var len = $scope.dlGovnEduFacilities.education.Table_3[model].length;
		var tot = $scope.dlGovnEduFacilities.education.Table_3[model][len - 1].ab1_1c + $scope.dlGovnEduFacilities.education.Table_3[model][len - 1].type_2 + $scope.dlGovnEduFacilities.education.Table_3[model][len - 1].type_3 + $scope.dlGovnEduFacilities.education.Table_3[model][len - 1].pirivena + $scope.dlGovnEduFacilities.education.Table_3[model][len - 1].training_institutes + $scope.dlGovnEduFacilities.education.Table_3[model][len - 1].training_colleges + $scope.dlGovnEduFacilities.education.Table_3[model][len - 1].tc_crc_resc + $scope.dlGovnEduFacilities.education.Table_3[model][len - 1].min_pzd_offices;
		return tot;
	}

	$scope.tabTwogetGrandTotal = function() {
		tabtwototal = 0;
		var strucDmLength = $scope.dlGovnEduFacilities.education.Table_3.DugNdafStructure.length;
		var suppDmLength = $scope.dlGovnEduFacilities.education.Table_3.DugNdafSupplies.length;
		var equDmLength = $scope.dlGovnEduFacilities.education.Table_3.DugNdafEquipment.length;
		var tabtwototal = $scope.dlGovnEduFacilities.education.Table_3.DugNdafStructure[strucDmLength - 1].total + $scope.dlGovnEduFacilities.education.Table_3.DugNdafSupplies[suppDmLength - 1].total + $scope.dlGovnEduFacilities.education.Table_3.DugNdafEquipment[equDmLength - 1].total;
		//        console.log($scope.dlGovnEduFacilities.education.Table_3.DugNdafEquipment[equDmLength -1].total);
		return tabtwototal;
	}

	$scope.tabFourgetGrandTotal = function() {
        tabfourtotal = 0;
        var strucDmLength = $scope.dlGovnEduFacilities.education.Table_3.DugNpdatStructure.length;
        var suppDmLength = $scope.dlGovnEduFacilities.education.Table_3.DugNpdatSupplies.length;
        var equDmLength = $scope.dlGovnEduFacilities.education.Table_3.DugNdafEquipment.length;
        var tabfourtotal = $scope.dlGovnEduFacilities.education.Table_3.DugNpdatStructure[strucDmLength - 1].total + $scope.dlGovnEduFacilities.education.Table_3.DugNpdatSupplies[suppDmLength - 1].total + $scope.dlGovnEduFacilities.education.Table_3.DugNpdatEquipment[equDmLength - 1].total
            //        console.log($scope.dlGovnEduFacilities.education.Table_3.DugNpdatEquipment[equDmLength -1].total);
        return tabfourtotal;
    }

    //Clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.dlGovnEduFacilities = angular.copy(init_data);
		location.reload();
	}
})
