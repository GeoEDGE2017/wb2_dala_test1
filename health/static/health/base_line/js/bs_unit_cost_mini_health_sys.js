//Table 3
var app = angular.module('unitCostMiniHealthSysApp', [])
app.controller('unitCostMiniHealthSysController', ['$scope', '$http', function($scope, $http) {
	$scope.district;
	$scope.baselineDate;
	$scope.bs_data = {};
	$scope.is_edit = false;
	$scope.submitted = false;
	$scope.is_valid_data = true;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.is_submit = false;
	$scope.is_search = false;
	$scope.check_search = false;

	//initialize model
	var init_data = {
		'health': {
			'Table_3': {
				'BucMarStructure': [{
					particulars: '1 Floor Structure',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: '2-3 Floors Structure',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'More Than 3 Floors Structure',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}],
				'BucMarSupplies': [{
					particulars: 'Medicines',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
				}, {
					particulars: 'Medical Supplies',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
				}, {
					particulars: 'Others',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
				}],
				'BucMarMequipment': [{
					particulars: 'CT Scan',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
				}, {
					particulars: 'X-ray Machine',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
				}, {
					particulars: 'MRI Machine',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
				}, {
					particulars: 'Other Equipment',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
				}],
				'BucMarOassets': [{
					particulars: 'Computers',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'Vehicles',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'Furniture',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'Office Equipment',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'Others',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}],
				'BucMarcStructures': [{
					particulars: 'Roof',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'Wall',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'Flooring',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}],
				'BucMarcMequipment': [{
					particulars: 'CT Scan',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
				}, {
					particulars: 'X-ray Machine',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
				}, {
					particulars: 'MRI Machine',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
				}, {
					particulars: 'Other Equipment',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
				}],
				'BucMarcOassets': [{
					particulars: 'Computers',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'Vehicles',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'Furniture',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'Office Equipment',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'Others',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}],
				'BucMarcCrpm': [{
					particulars: 'Average Construction Period',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}, {
					particulars: 'Average Repair Period',
					teaching_hospital: null,
					provincial_general_hospital: null,
					district_general_hospital: null,
					office: null,
					other: null,
				}]
			}
		}
	}

	$scope.bsUnitCostMiniHealthSys = angular.copy(init_data);

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

    //Save Data
	$scope.saveBsData = function(form) {
        $scope.submitted = true;
        $scope.is_submit = true;
        if(form.$valid) {
            console.log($scope.data);
            $http({
                method: 'POST',
                url: '/bs_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.bsUnitCostMiniHealthSys,
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

    //Edit Data
	$scope.editBsData = function(form) {
        document.getElementById("clearbtn").disabled = true;
        $scope.is_edit = true;
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/bs_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_3',
                    'sector': 'health',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'user_id': $scope.user_id,
                    },
                }),
            }).success(function(data) {
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.health.Table_3, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsUnitCostMiniHealthSys = data;
                        console.log(data);
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
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/bs_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_3',
                    'sector': 'health',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'user_id': $scope.user_id,
                    },
                }),
            }).success(function(data) {
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.health.Table_3, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsUnitCostMiniHealthSys = data;
                        console.log(data);
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
        location.reload();
        document.getElementById("clearbtn").disabled = false;
    }

    //Clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.bsUnitCostMiniHealthSys = angular.copy(init_data);
		$scope.is_search = false;
		location.reload();
	}
}])
