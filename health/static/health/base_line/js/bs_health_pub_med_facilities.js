//Table 2
var app = angular.module('bsPubMedicalFacilitiesApp', []);
app.controller("BsPubMedicalFacilitiesController", ['$scope', '$http', function($scope, $http) {
	$scope.district;
	$scope.baselineDate;
	$scope.is_edit = false;
	$scope.submitted = false;
	$scope.is_valid_data = true;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.is_submit = false;
	$scope.is_search = false;
	$scope.is_search_disable = false;
	$scope.check_search = false;

	//initialize model
	var init_data = {
		'health': {
			'Table_2': {
				'BmfPubMf': [{
					type_pub_mf: 'Teaching Hospital (TH)',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'Provincial General Hospital (PGH)',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'District General Hospital (DGH)',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'Base Hospital (BH )',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'Divisional Hospital (DH )',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'Rural Hospital (RH )',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'Central Dispensary (CH )',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'Primary Medical Care Units (PMCU)',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'Primary Health Care Centers (PHCC)',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'Maternal and Child Health Clinics (MCHC)',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'MOH Offices ',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'Others',
					number: null,
					male: null,
					female: null,
				}, {
					type_pub_mf: 'TOTAL',
					number: null,
					male: null,
					female: null,
				}],
				'BmfPvtMf': [{
					type_pvt_mf: 'Private Clinics',
					number: null,
					male: null,
					female: null,
				}, {
					type_pvt_mf: 'Others',
					number: null,
					male: null,
					female: null,
				}, {
					type_pvt_mf: 'TOTAL',
					number: null,
					male: null,
					female: null,
				}]
			}
		}
	}
	$scope.bsDataMedicalFacilities = angular.copy(init_data);
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
		//Save Data
	$scope.saveBsData = function(form) {
			$scope.submitted = true;
			$scope.is_submit = true;
			if(form.$valid) {
				$http({
					method: 'POST',
					url: '/bs_save_data',
					contentType: 'application/json; charset=utf-8',
					data: angular.toJson({
						'table_data': $scope.bsDataMedicalFacilities,
						'com_data': {
							'district': $scope.district,
							'bs_date': $scope.baselineDate,
							'user_id': $scope.user_id,
						},
						'is_edit': $scope.is_edit
					}),
					dataType: 'json',
				}).then(function successCallback(response) {
					if(response.data == 'False') {
						$("#modal-container-239454").modal('show');
						$scope.is_valid_data = false;
					} else {
						$("#modal-container-239453").modal('show');
					}
				}, function errorCallback(data) {
					$("#modal-container-239454").modal('show');
					$scope.is_valid_data = false;
					console.log(data);
				});
			}
			$scope.is_submit = false;
		}
		//Edit Data
	$scope.editBsData = function(form) {
			document.getElementById("clearbtn").disabled = true;
			$scope.submitted = true;
			$scope.is_edit = true;
			if(form.$valid) {
				$http({
					method: "POST",
					url: "/bs_fetch_edit_data",
					data: angular.toJson({
						'table_name': 'Table_2',
						'sector': 'health',
						'com_data': {
							'district': $scope.district,
							'bs_date': $scope.baselineDate,
							'user_id': $scope.user_id,
						}
					}),
				}).success(function(data) {
					console.log(data);
					//                console.log(data.health.Table_2);
					var edit_data_not_found = false;
					if(data != null) {
						angular.forEach(data.health.Table_2, function(value, index) {
							console.log(value);
							if(value.length == 0) {
								edit_data_not_found = true;
							}
						})
						if(edit_data_not_found != true) {
							$scope.bsDataMedicalFacilities = data;
						} else {
							$("#modal-container-239456").modal('show');
						}
					} else {
						$("#modal-container-239456").modal('show');
					}
				})
			}
		}
		//Search  Data
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
						'table_name': 'Table_2',
						'sector': 'health',
						'com_data': {
							'district': $scope.district,
							'bs_date': $scope.baselineDate,
							'user_id': $scope.user_id,
						}
					}),
				}).success(function(data) {
					console.log(data);
					//                console.log(data.health.Table_2);
					var edit_data_not_found = false;
					if(data != null) {
						angular.forEach(data.health.Table_2, function(value, index) {
							console.log(value);
							if(value.length == 0) {
								edit_data_not_found = true;
							}
						})
						if(edit_data_not_found != true) {
							$scope.bsDataMedicalFacilities = data;
						} else {
							$("#modal-container-239456").modal('show');
						}
					} else {
						$("#modal-container-239456").modal('show');
					}
				})
            }
		}
		//Cancel Edit
	$scope.cancelEdit = function() {
			location.reload();
			$scope.is_edit = false;
			$scope.bsDataMedicalFacilities = init_data;
		}
		//Clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.is_search = false;
		location.reload();
		$scope.bsDataMedicalFacilities = angular.copy(init_data);
	}
}])
