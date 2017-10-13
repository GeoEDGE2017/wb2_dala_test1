//Table 1
var app = angular.module('bsIncomeRailCompanyApp', ['underscore'])
app.controller('BsIncomeRailCompanyController', function($scope, $http, $parse, _) {
	$scope.district;
	$scope.baselineDate;
	$scope.selectedCompany;
	$scope.bs_data = {};
	$scope.is_edit = false;
	$scope.submitted = false;
	$scope.is_valid_data = true;
	$scope.companies = [];
	$scope.company = null;
	$scope.new_company = {
		id: null,
		name: null
	};
	$scope.is_edit_disable = false;
	$scope.user_id;
	$scope.is_submit = false;
	$scope.check_search = false;
	//initialize models
	var init_data = {
		'transport_rail': {
			'Table_1': {
				'BsIncAstRailIncome': [{
					annual_income: null,
					company_id: $scope.selectedCompany,
				}],
				'BsTotEmpRailCompny': [{
					particulars: 'Total Number of Employees',
					no_of_male: null,
					no_of_female: null,
					total_emp: null,
					company_id: $scope.selectedCompany,
				}],
				'BsMovingAst': [{
					asset: 'Wagons',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}, {
					asset: 'Engine',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}],
				'BsEquipMachineryAst': [{
					asset: 'Signal equipment',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}, {
					asset: 'Track machinery',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}, {
					asset: 'Vehicles',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}, {
					asset: 'Computers',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}, {
					asset: 'Furniture',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}],
				'BsMatSuppliesAst': [{
					asset: 'Fuel (per Liter)',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}],
				'BsStructuresAst': [{
					asset: 'Tracks',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}, {
					asset: 'Tunnels',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}, {
					asset: 'Bridges',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}, {
					asset: 'Culverts',
					avg_replace_cost: null,
					avg_repair_cost: null,
					company_id: $scope.selectedCompany,
				}],
				'BsBuildingAst': [{
					asset: '1 floor',
					avg_replace_cost: null,
					avg_repair_cost_roof: null,
					avg_repair_cost_wall: null,
					avg_repair_cost_floor: null,
					company_id: $scope.selectedCompany,
				}, {
					asset: '2-3 floors',
					avg_replace_cost: null,
					avg_repair_cost_roof: null,
					avg_repair_cost_wall: null,
					avg_repair_cost_floor: null,
					company_id: $scope.selectedCompany,
				}, {
					asset: 'More than 3 floors',
					avg_replace_cost: null,
					avg_repair_cost_roof: null,
					avg_repair_cost_wall: null,
					avg_repair_cost_floor: null,
					company_id: $scope.selectedCompany,
				}, ],
			}
		}
	}
	$scope.bsIncomeRailCompany = angular.copy(init_data);

	//disable Edit Button
	$scope.changeDis = function changeDis() {
        if($scope.district && $scope.baselineDate) {
            $scope.is_edit_disable = true;
            $scope.check_search = true;
        }
        else {
            $scope.is_edit_disable = false;
            $scope.check_search = false;
        }
    }

    //save data
	$scope.saveBsData = function(form) {
        $scope.submitted = true;
        $scope.is_submit = true;
        if(form.$valid) {
            var array = $scope.bsIncomeRailCompany.transport_rail.Table_1;
            var details = _.map(array, function(model_array) {
                _.map(model_array, function(model) {
                    model.company_id = parseInt($scope.selectedCompany.id);
                });
            });
            $http({
                method: 'POST',
                url: '/bs_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.bsIncomeRailCompany,
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'user_id': $scope.user_id
                    },
                    'is_edit': $scope.is_edit
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
                }
            }, function errorCallback(response) {
                console.log(response);
            });
        }
        $scope.is_submit = false;
    }

	//Add Enumerate Fileds
    $scope.insertAssets = function(table) {
        var new_row;
        if(table == 'BsEquipMachineryAst') {
            new_row = {
                asset: ' ',
				avg_replace_cost: null,
				avg_repair_cost: null,
            }
        }
        else if(table == 'BsMovingAst') {
            new_row = {
                asset : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BsMatSuppliesAst') {
            new_row = {
                components : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }

        console.log('row',new_row);
        $scope.bsIncomeRailCompany.transport_rail.Table_1[table].push(new_row);
    }

    //Remove Enumerate Fileds
    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsEquipMachineryAst') {
            $scope.bsIncomeRailCompany.transport_rail.Table_1.BsEquipMachineryAst.splice(index, 1);
        }
        else if(table == 'BsMovingAst') {
             $scope.bsIncomeRailCompany.transport_rail.Table_1.BsMovingAst.splice(index, 1);
        }
        else if(table == 'BsMatSuppliesAst') {
             $scope.bsIncomeRailCompany.transport_rail.Table_1.BsMatSuppliesAst.splice(index, 1);
        }
    }

		//save company
	$scope.saveCompany = function(form) {
		if(form.$valid) {
			$http({
				method: "POST",
				url: "/add_entity",
				data: angular.toJson({
					'model': 'Company',
					'model_fields': $scope.new_company,
					'is_edit': false,
					'sector': 'transport_rail'
				}),
			}).success(function(data) {
				console.log(data);
				$scope.new_company.id = data;
				if(data) {
					$scope.companies.push($scope.new_company);
					console.log($scope.new_company);
				}
				$("#modal-container-218029").modal('hide');
			})
		}
	}

	$scope.editCompany = function() {
		console.log('editCompany', $scope.new_company);
		$http({
			method: "POST",
			url: "/add_entity",
			data: angular.toJson({
				'model': 'Company',
				'model_fields': $scope.new_company,
				'is_edit': true,
				'sector': 'transport_rail'
			}),
		}).success(function(data) {
			console.log(data);
			if(data) {
				$scope.companies.push($scope.new_company);
				$("#modal-container-218029").modal('hide');
				//                    $("#modal-container-469840").modal('hide');
				window.location.reload();
			}
		})
	}

	$scope.fetchCompanies = function() {
		$http({
			method: "POST",
			url: "/transport_rail/base_line/fetch_company_entities",
		}).success(function(data) {
			console.log(data);
			$scope.companies = data;
		})
	}

	$scope.editBsData = function(form) {
		$scope.submitted = true;
		$scope.is_edit = true;
		document.getElementById("clearbtn").disabled = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: "/bs_fetch_edit_data",
				data: angular.toJson({
					'table_name': 'Table_1',
					'sector': 'transport_rail',
					'com_data': {
						'district': $scope.district,
						'bs_date': $scope.baselineDate
					}
				}),
			}).success(function(data) {
				console.log(data);
				//                $scope.bsIncomeRailCompany = data;
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.transport_rail.Table_1, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.bsIncomeRailCompany = data;
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
		if(form.$valid) {
			$http({
				method: "POST",
				url: "/bs_fetch_edit_data",
				data: angular.toJson({
					'table_name': 'Table_1',
					'sector': 'transport_rail',
					'com_data': {
						'district': $scope.district,
						'bs_date': $scope.baselineDate
					}
				}),
			}).success(function(data) {
				console.log(data);
				//                $scope.bsIncomeRailCompany = data;
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.transport_rail.Table_1, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.bsIncomeRailCompany = data;
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
        $scope.bsIncomeRailCompany = init_data;
        location.reload();
    }

    //Clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.bsIncomeRailCompany = angular.copy(init_data);
		location.reload();
	}
});
