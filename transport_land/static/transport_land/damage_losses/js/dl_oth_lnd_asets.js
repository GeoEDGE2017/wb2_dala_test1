//Table 5
var app = angular.module('dlOthLndAsetsApp', ['underscore'])
app.controller('dlOthLndAsetsController', function($scope, $http, $parse, _) {
	$scope.district;
	$scope.selectedDistrict;
	$scope.incident;
	$scope.dlDate;
	$scope.bs_data = {};
	var total = null;
	$scope.total = null;
	$scope.baselineDate;
	$scope.DlOtherDmgsPvehicles_total = null;
	$scope.is_edit = false;
	$scope.is_valid_data = true;
	$scope.DlOtherLosPub_fi_year_1 = null;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.check_search = false;
	var init_data = {
		'transport_land': {
			'Table_5': {
				//Tab 1
				'DlOtherDmgsPvehicles': [{
					private_vehicles: 'Cars',
					num_tot_dest_pvt: null,
					num_part_dest_pvt: null,
					tot_damages_pvt: null,
				}, {
					private_vehicles: 'Motorcycles',
					num_tot_dest_pvt: null,
					num_part_dest_pvt: null,
					tot_damages_pvt: null,
				}, {
					private_vehicles: 'Bicycles',
					num_tot_dest_pvt: null,
					num_part_dest_pvt: null,
					tot_damages_pvt: null,
				}, {
					private_vehicles: 'Total',
					num_tot_dest_pvt: null,
					num_part_dest_pvt: null,
					tot_damages_pvt: null,
				}, ],
				'DlOtherDmgsBcompanies': [{
					bus_companies: 'Busses',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					bus_companies: 'Garage',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					bus_companies: 'Equipment',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					bus_companies: 'Bus stations',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					bus_companies: 'Total',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, ],
				'DlOtherDmgsTcompanies': [{
					taxi_companies: 'Taxis',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					taxi_companies: 'Garage',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					taxi_companies: 'Equipment',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					taxi_companies: 'Total',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, ],
				'DlOtherDmgsTrcompanies': [{
					truck_companies: 'Trucks',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					truck_companies: 'Garage',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					truck_companies: 'Equipment',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					truck_companies: 'Total',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}],
				'DlOtherDmgsTucompanies': [{
					tuk_companies: 'Tuk tuks',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					tuk_companies: 'Garage',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					tuk_companies: 'Equipment',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, {
					tuk_companies: 'Total',
					num_tot_dest_pub: null,
					num_tot_dest_pvt: null,
					num_part_dest_pub: null,
					num_part_dest_pvt: null,
					tot_damages_pub: null,
					tot_damages_pvt: null,
				}, ],
				//Tab 2
				'DlOtherLosPub': [{
					tr_company: 'Bus',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, {
					tr_company: 'Taxi',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, {
					tr_company: 'Tracks',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, {
					tr_company: 'Tuk tuk',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, {
					tr_company: 'Total',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, ],
				'DlOtherLosPvt': [{
					tr_company: 'Private vehicles',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, {
					tr_company: 'Bus',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, {
					tr_company: 'Taxi',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, {
					tr_company: 'Truck',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, {
					tr_company: 'Tuk tuk',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, {
					tr_company: 'Total',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, {
					tr_company: 'TOTAL LOSSES',
					fi_year_1: null,
					fi_year_2: null,
					cl_debris_year_1: null,
					cl_debris_year_2: null,
					hoc_year_1: null,
					hoc_year_2: null,
					oue_year_1: null,
					oue_year_2: null,
					tot_los: null,
				}, ],
			}
		}
	}
	$scope.dlOthLndAsets = angular.copy(init_data);
	$scope.changedValue = function getBsData(selectedValue) {
		if($scope.incident && selectedValue) {
			$http({
				method: "POST",
				url: "/fetch_incident_districts",
				data: angular.toJson({
					'incident': $scope.incident,
					'user': $scope.user_id,
				}),
			}).success(function(data) {
				$scope.districts = data;
				$scope.selectedDistrict = "";
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
					'db_tables': ['BsGtlAstPvehicles', 'BsGtlAstBcompanies', 'BsGtlAstTrcompanies', 'BsGtlAstTucompanies', 'BsGtlAstTcompanies'],
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'table_name': 'Table_2',
					'sector': 'transport_land',
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
							'db_tables': ['BsGtlAstPvehicles', 'BsGtlAstBcompanies', 'BsGtlAstTrcompanies', 'BsGtlAstTucompanies', 'BsGtlAstTcompanies'],
							'com_data': {
								'district': $scope.district.district__id,
								'incident': $scope.incident,
							},
							'table_name': 'Table_2',
							'sector': 'transport_land',
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
			}, function errorCallback(response) {});
		}
	}

	function generateRefencedData() {
		data_array = ['BsGtlAstPvehicles'];
		angular.forEach(data_array, function(value, key) {
			obj_array = $scope.bs_data[value];
			model_name = value;
			var dl_model1 = null;
			var particular_value_1 = null;
			if(model_name == 'BsGtlAstPvehicles') {
				dl_model1 = 'DlOtherDmgsPvehicles';
				particular_value_1 = 'Total';
			}
			$scope.dlOthLndAsets.transport_land.Table_5[dl_model1] = [];
			var obj1 = {
				private_vehicles: particular_value_1,
				num_tot_dest_pvt: null,
				num_part_dest_pvt: null,
				tot_damages_pvt: null,
			};
			angular.forEach(obj_array, function(value, key) {
				var obj1 = {
					private_vehicles: value.fields.private_vehicles,
					num_tot_dest_pvt: null,
					num_part_dest_pvt: null,
					tot_damages_pvt: null,
				};
				if(model_name == 'BsGtlAstPvehicles') {
					$scope.dlOthLndAsets.transport_land.Table_5[dl_model1].push(obj1);
				}
			});
			$scope.dlOthLndAsets.transport_land.Table_5[dl_model1].push(obj1);
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
					'table_data': $scope.dlOthLndAsets,
					'com_data': {
						'district_id': $scope.district.district__id,
						'incident_id': $scope.incident,
						'user_id': $scope.user_id
					},
					'is_edit': $scope.is_edit,
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
	$scope.dlDataEdit = function(form) {
		$scope.is_edit = true;
		$scope.submitted = true;
		document.getElementById("clearbtn").disabled = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: '/dl_fetch_edit_data',
				data: angular.toJson({
					'table_name': 'Table_5',
					'sector': 'transport_land',
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'is_edit': $scope.is_edit
				}),
			}).success(function(data) {
				//                console.log(data);
				//                $scope.dlOthLndAsets = data;
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.transport_land.Table_5, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.dlOthLndAsets = data;
						console.log($scope.dlOthLndAsets);
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
					'table_name': 'Table_5',
					'sector': 'transport_land',
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'is_edit': $scope.is_edit
				}),
			}).success(function(data) {
				//                console.log(data);
				//                $scope.dlOthLndAsets = data;
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.transport_land.Table_5, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.dlOthLndAsets = data;
						console.log($scope.dlOthLndAsets);
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
		$scope.dlOthLndAsets = init_data;
		location.reload();
	}
	$scope.calPvtTotal = function(arr) {
		var finaltotal = 0;
		angular.forEach(arr, function(value, key) {
			if((value.private_vehicles != 'Total') && (value.bus_companies != 'Total') && (value.taxi_companies != 'Total') && (value.truck_companies != 'Total') && (value.tuk_companies != 'Total')) {
				finaltotal = finaltotal + value.tot_damages_pvt;
			}
		})
		return finaltotal;
	}
	$scope.calPubTotal = function(arr) {
		var finaltotal = 0;
		angular.forEach(arr, function(value, key) {
			if((value.bus_companies != 'Total') && (value.taxi_companies != 'Total') && (value.truck_companies != 'Total') && (value.tuk_companies != 'Total')) {
				finaltotal = finaltotal + value.tot_damages_pub;
			}
		})
		return finaltotal;
	}
	$scope.calGrandPvtTotal = function() {
		var finaltotal1 = 0;
		var finaltotal2 = 0;
		var finaltotal3 = 0;
		var finaltotal4 = 0;
		var finaltotal5 = 0;
		var grantot = 0;
		var array1 = $scope.dlOthLndAsets.transport_land.Table_5.DlOtherDmgsPvehicles;
		var array2 = $scope.dlOthLndAsets.transport_land.Table_5.DlOtherDmgsBcompanies;
		var array3 = $scope.dlOthLndAsets.transport_land.Table_5.DlOtherDmgsTcompanies;
		var array4 = $scope.dlOthLndAsets.transport_land.Table_5.DlOtherDmgsTrcompanies;
		var array5 = $scope.dlOthLndAsets.transport_land.Table_5.DlOtherDmgsTucompanies;
		angular.forEach(array1, function(value, key) {
			if(value.private_vehicles != 'Total') {
				finaltotal1 = finaltotal1 + value.tot_damages_pvt;
			}
		})
		angular.forEach(array2, function(value, key) {
			if(value.bus_companies != 'Total') {
				finaltotal2 = finaltotal2 + value.tot_damages_pvt;
			}
		})
		angular.forEach(array3, function(value, key) {
			if(value.taxi_companies != 'Total') {
				finaltotal3 = finaltotal3 + value.tot_damages_pvt;
			}
		})
		angular.forEach(array4, function(value, key) {
			if(value.truck_companies != 'Total') {
				finaltotal4 = finaltotal4 + value.tot_damages_pvt;
			}
		})
		angular.forEach(array5, function(value, key) {
			if((value.tuk_companies != 'Total') && (value.tuk_companies != 'TOTAL DAMAGES')) {
				finaltotal5 = finaltotal5 + value.tot_damages_pvt;
			}
		})
		grantot = finaltotal1 + finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5;
		return grantot;
	}
	$scope.calGrandPubTotal = function() {
		var finaltotal2 = 0;
		var finaltotal3 = 0;
		var finaltotal4 = 0;
		var finaltotal5 = 0;
		var grantot = 0;
		var array2 = $scope.dlOthLndAsets.transport_land.Table_5.DlOtherDmgsBcompanies;
		var array3 = $scope.dlOthLndAsets.transport_land.Table_5.DlOtherDmgsTcompanies;
		var array4 = $scope.dlOthLndAsets.transport_land.Table_5.DlOtherDmgsTrcompanies;
		var array5 = $scope.dlOthLndAsets.transport_land.Table_5.DlOtherDmgsTucompanies;
		angular.forEach(array2, function(value, key) {
			if(value.bus_companies != 'Total') {
				finaltotal2 = finaltotal2 + value.tot_damages_pub;
			}
		})
		angular.forEach(array3, function(value, key) {
			if(value.taxi_companies != 'Total') {
				finaltotal3 = finaltotal3 + value.tot_damages_pub;
			}
		})
		angular.forEach(array4, function(value, key) {
			if(value.truck_companies != 'Total') {
				finaltotal4 = finaltotal4 + value.tot_damages_pub;
			}
		})
		angular.forEach(array5, function(value, key) {
			if((value.tuk_companies != 'Total') && (value.tuk_companies != 'TOTAL DAMAGES')) {
				finaltotal5 = finaltotal5 + value.tot_damages_pub;
			}
		})
		grantot = finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5;
		return grantot;
	}
	$scope.calTotal = function(arr) {
		var finaltotal = 0;
		angular.forEach(arr, function(value, key) {
			if(value.tr_company != 'Total') {
				finaltotal = finaltotal + value.tot_los;
			}
		})
		return finaltotal;
	}
	$scope.calGrandTotal = function() {
			var finaltotal1 = 0;
			var finaltotal2 = 0;
			var grantot = 0;
			var array1 = $scope.dlOthLndAsets.transport_land.Table_5.DlOtherLosPub;
			var array2 = $scope.dlOthLndAsets.transport_land.Table_5.DlOtherLosPvt;
			angular.forEach(array1, function(value, key) {
				if(value.tr_company != 'Total') {
					finaltotal1 = finaltotal1 + value.tot_los;
				}
			})
			angular.forEach(array2, function(value, key) {
				if((value.tr_company != 'Total') && (value.tr_company != 'TOTAL LOSSES')) {
					finaltotal2 = finaltotal2 + value.tot_los;
				}
			})
			grantot = grantot + finaltotal1 + finaltotal2;
			return grantot;
		}
		//Clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.dlOthLndAsets = angular.copy(init_data);
		location.reload();
	}
});
