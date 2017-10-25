//Table 1
var bsHealthStatusApp = angular.module('bsHealthStatusApp', ['ui.bootstrap', 'popoverToggle']);
bsHealthStatusApp.controller('BsHealthStatusController', function BsHealthStatusController($scope, $http) {
	$scope.district;
	$scope.number1;
	$scope.number2;
	$scope.sum;
	$scope.bs_date;
	$scope.is_edit = false;
	$scope.is_search = false;
	$scope.submitted = false;
	$scope.is_valid_data = true;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.is_submit = false;;
	$scope.check_search = false;

	//initialize model
	var init_data = {
		'health': {
			'Table_1': {
				'BhsPlc': [{
					male: null,
					female: null,
					children: null,
					elderly: null,
				}],
				'BhsComDiseases': [{
					com_disease: 'Diarrhea',
					male: null,
					female: null,
					children: null,
					elderly: null,
				}, {
					com_disease: 'Dengue',
					male: null,
					female: null,
					children: null,
					elderly: null,
				}],
				'BhsVi': [{
					vital_indicators: 'Under-5 Mortality Rate',
					male: null,
					female: null,
					children: null,
					elderly: null,
				}, {
					vital_indicators: 'Mortality Rate',
					male: null,
					female: null,
					children: null,
					elderly: null,
				}],
				'BhsOi': [{
					other_indicators: 'Crude Birth Rate',
					unit_measure: null
				}, {
					other_indicators: 'Maternal Mortality Rate',
					unit_measure: null
				}]
			}
		}
	}

	$scope.dataHealthStatus = angular.copy(init_data);

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

    //Save Data
	$scope.saveBsData = function(form) {
        $scope.submitted = true;
        $scope.is_submit = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.dataHealthStatus),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                $scope.dataHealthStatus = init_data;
                $scope.is_edit = false;
                if(data == 'False') {
                    $scope.is_valid_data = false;
                    $("#modal-container-239454").modal('show');
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
            })
        }
        $scope.is_submit = false;
    }

    //Add Enumerate Fileds
	$scope.insertDisease = function(table) {
        var new_row;
        if(table == 'BhsOi') {
            new_row = {
                other_indicators: '',
                unit_measure: null
            }
        }
        else if(table == 'BhsComDiseases') {
            new_row = {
                com_disease: '',
                male: null,
                female: null,
                children: null,
                elderly: null,
            }
        }
        else if(table == 'BhsVi') {
            new_row = {
                vital_indicators: '',
                male: null,
                female: null,
                children: null,
                elderly: null,
            }
        }
        $scope.dataHealthStatus.health.Table_1[table].push(new_row);
    }

    //Edit Data
	$scope.editBsData = function(form) {
        document.getElementById("clearbtn").disabled = true;
        $scope.submitted = true;
        if(form.$valid) {
            $scope.is_edit = true;
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'health',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    }
                }),
            }).success(function(data) {
                console.log(data);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.health.Table_1, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.dataHealthStatus = data;
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

    //Search Data
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
                    'sector': 'health',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    }
                }),
            }).success(function(data) {
                console.log(data);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.health.Table_1, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.dataHealthStatus = data;
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

    //Cancel Edit
	$scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.dataHealthStatus = init_data;
        location.reload();
    }

    //Remove Enumerate Fileds
	$scope.removeItem = function removeItem(table, index) {
        if(table == 'BhsComDiseases') {
            $scope.dataHealthStatus.health.Table_1.BhsComDiseases.splice(index, 1);
        }
        else if(table == 'BhsVi') {
            $scope.dataHealthStatus.health.Table_1.BhsVi.splice(index, 1);
        }
        else if(table == 'BhsOi') {
            $scope.dataHealthStatus.health.Table_1.BhsOi.splice(index, 1);
        }
    }

    //Clear Function
	$scope.clear = function() {
		$scope.is_search = false;
		$scope.is_edit = false;
		$scope.dataHealthStatus = angular.copy(init_data);
		location.reload();
	}

	$scope.getLatestBsDate = function() {
		$http({
			method: 'POST',
			url: '/get_latest_bs_date',
			contentType: 'application/json; charset=utf-8',
			data: angular.toJson({
				'table_name': 'Table_3',
				'sector': 'health',
				'district': $scope.district,
			}),
			dataType: 'json',
		}).then(function successCallback(response) {})
	}
})
