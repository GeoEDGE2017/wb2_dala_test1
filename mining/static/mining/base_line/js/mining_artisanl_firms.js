//Table 2
var app = angular.module('mnArtisanalFirmApp', []);
app.controller("MnArtisanalFirmController", ['$scope', '$http', function($scope, $http) {
	$scope.district;
	$scope.baselineDate;
	$scope.is_edit = false;
	$scope.selectedFirm;
	$scope.ownership;
	$scope.is_edit_disable = false;
	$scope.user_id;
	$scope.check_search = false;
	$scope.is_search = false;

	var init_data = {
		'mining': {
			'Table_2': {
				'BmaAmMinNum': [{
					male: null,
					female: null,
					firm_id: $scope.selectedFirm,
					ownership: $scope.ownership,
				}],
				'BmaAmMin': [{
					minerals: 'Nickel',
					avg_per_year: null,
					firm_id: $scope.selectedFirm,
					ownership: $scope.ownership,
				}, {
					minerals: 'Copper',
					avg_per_year: null,
					firm_id: $scope.selectedFirm,
					ownership: $scope.ownership,
				}, {
					minerals: 'Gold',
					avg_per_year: null,
					firm_id: $scope.selectedFirm,
					ownership: $scope.ownership,
				}]
			}
		}
	}

	$scope.mnArtisanalFirm = angular.copy(init_data);

	//Disable Edit Button
	$scope.changeDis = function changeDis() {
		if($scope.district && $scope.baselineDate) {
			$scope.is_edit_disable = true;
			$scope.check_search = true;
		} else {
			$scope.is_edit_disable = false;
			$scope.check_search = false;
		}
	}

	$scope.insertFirm = function(table) {
		var new_row;
		if(table == 'BmaAmMin') {
			new_row = {
				minerals: '',
				male: null,
				female: null,
				avg_per_year: null,
			}
		}
		$scope.mnArtisanalFirm.mining.Table_2[table].push(new_row);
	}

	$scope.removeItem = function removeItem(table, index) {
		if(table == 'BmaAmMin') {
			$scope.mnArtisanalFirm.mining.Table_2.BmaAmMin.splice(index, 1);
		}
	}

	$scope.saveBsData = function(form) {
		$scope.submitted = true;
		if(form.$valid) {
			$http({
				method: 'POST',
				url: '/bs_save_data',
				contentType: 'application/json; charset=utf-8',
				data: angular.toJson({
					'table_data': $scope.mnArtisanalFirm,
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
				    $scope.updateEnums();
				     $scope.mnArtisanalFirm = init_data;
					$("#modal-container-239453").modal('show');
				}
			}, function errorCallback(response) {
				$("#modal-container-239454").modal('show');
				console.log(response);
			});
		}
	}

	$scope.editBsData = function(form) {
		document.getElementById("clearbtn").disabled = true;
		$scope.is_edit = true;
		$scope.submitted = true;
		if(form.$valid) {
			$http({
				method: "POST",
				url: "/bs_fetch_edit_data",
				data: angular.toJson({
					'table_name': 'Table_2',
					'sector': 'mining',
					'com_data': {
						'district': $scope.district,
						'bs_date': $scope.baselineDate,
						'user_id': $scope.user_id,
					}
				}),
			}).success(function(data) {
//				console.log(data);
//				$scope.mnArtisanalFirm = data;
//				$scope.getEnumDataFromStart();

				var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.mining.Table_2, function(value, index) {
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.mnArtisanalFirm = data;
                        console.log('editBsData - mnArtisanalFirm', $scope.mnArtisanalFirm);
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
					'table_name': 'Table_2',
					'sector': 'mining',
					'com_data': {
						'district': $scope.district,
						'bs_date': $scope.baselineDate,
						'user_id': $scope.user_id,
					}
				}),
			}).success(function(data) {
//				console.log(data);
//				$scope.mnArtisanalFirm = data;

				var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.mining.Table_2, function(value, index) {
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.mnArtisanalFirm = data;
                        console.log('editBsData - mnArtisanalFirm', $scope.mnArtisanalFirm);
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
	}

	$scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.mnArtisanalFirm = angular.copy(init_data);
        location.reload();
    }

    //Clear Function
	$scope.clear = function() {
		$scope.is_edit = false;
		$scope.mnArtisanalFirm = angular.copy(init_data);
		location.reload();
	}

	$scope.enum_data = {
        'mining': {
            'Table_2': {
                'BmaAmMin': [],
            }
        }
    }

    $scope.getEnumDataFromStart = function() {
        var bmaAmMin_e_index = 0;
        angular.forEach($scope.mnArtisanalFirm.mining.Table_2.BmaAmMin, function(value, index, key) {
            if(value.minerals != 'Nickel' && value.minerals != 'Copper' && value.minerals != 'Gold') {
                var enum_val = {
                    oldasset: value.minerals,
                    newasset: null,
                    enum_index: bmaAmMin_e_index,
                    bs_asset_field: 'minerals',
                    dl_tables: {
                        'Table_4': {
                            'DlaLosPlos': {
                                dl_asset_field: 'type_los'
                            }
                        }
                    }
                };
                bmaAmMin_e_index = bmaAmMin_e_index + 1;
                $scope.enum_data.mining.Table_2.BmaAmMin.push(enum_val);
            }
        })
        console.log('getEnumDataFromStart', $scope.enum_data);
    }

    $scope.getEnumDataFromEnd = function() {
        console.log($scope.mnArtisanalFirm.mining.Table_2);
        var bmaAmMin_e_index = 0;
        angular.forEach($scope.mnArtisanalFirm.mining.Table_2.BmaAmMin, function(value, key) {
            if(value.minerals != 'Nickel' && value.minerals != 'Copper' && value.minerals != 'Gold') {
                angular.forEach($scope.enum_data.mining.Table_2.BmaAmMin, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.mining.Table_2.BmaAmMin);
                    if(each_enum.enum_index == bmaAmMin_e_index) {
                        $scope.enum_data.mining.Table_2.BmaAmMin[index].newasset = value.minerals;
                    }
                })
                bmaAmMin_e_index = bmaAmMin_e_index + 1;
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
                    'bs_date': $scope.baselineDate,
                    'user_id': $scope.user_id
                },
                'is_edit': $scope.is_edit,
                'sector': 'mining'
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
            console.log(response);
//            if(response.data == 'False') {
//                alert('False');
//            }
//            else {
//                alert('True');
//            }
        }, function errorCallback(response) {

        });
    }
}])
