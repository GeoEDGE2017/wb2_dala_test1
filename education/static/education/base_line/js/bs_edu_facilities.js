//Table 1
var bsHealthStatusApp = angular.module('bsEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle', 'underscore']);
bsHealthStatusApp.controller('BsEduFacilitiesController', function($scope, $http, $parse, _) {
	$scope.bsEduFacilities;
	$scope.total;
	$scope.user_id;
	$scope.iter_tot;
	$scope.district;
	$scope.bs_date;
	$scope.baselineDate;
	$scope.is_edit = false;
	$scope.submitted = false;
	$scope.is_valid_data = true;
	$scope.facilitiesTot = null;
	$scope.TotMale = null;
	$scope.TotFemale = null;
	$scope.BefPvt_total_number = null;
	$scope.BefPvt_avg_male = null;
	$scope.BefPvt_avg_female = null;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.is_submit = false;
	$scope.is_search = false;
	$scope.check_search = false;

	var init_data = {
		'education': {
			'Table_1': {
				'BefPubSchools': [{
					type_facilities: '1AB, 1C',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'Type 2',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'Type 3',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'Pirivena',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'Training institutes',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'NCOE, Traninig College',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'TC, CRC, RESC',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}],
				'BefPubOffices': [{
					type_facilities: 'Ministry Offices',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'Provinicial Offices',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'Zonal Offices',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'Divisional Offices',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'NIE',
					total_number: null,
					avg_male: null,
					avg_female: null,
				},{
					type_facilities: 'TOTAL NUMBER OF STUDENTS',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}],
				'BefPvt': [{
					type_facilities: 'Pre-school',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'Primary School',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'Secondary School',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'University',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'Technical Institutes',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'Others',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}, {
					type_facilities: 'TOTAL NUMBER OF STUDENTS',
					total_number: null,
					avg_male: null,
					avg_female: null,
				}]
			}
		}
	}

	$scope.bsEduFacilities = angular.copy(init_data);

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
                    'table_name': 'Table_1',
                    'sector': 'education',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'user_id': $scope.user_id,
                    }
                }),
            }).success(function(data) {
                console.log(data);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.education.Table_1, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsEduFacilities = data;
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
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'education',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'user_id': $scope.user_id,
                    }
                }),
            }).success(function(data) {
                console.log(data);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.education.Table_1, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsEduFacilities = data;
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

    //Save Data
	$scope.saveBsData = function(form) {
        console.log($scope.bsEduFacilities);
        $scope.submitted = true;
        $scope.is_submit = true;
        if(form.$valid) {
            console.log($scope.data);
            $http({
                method: 'POST',
                url: '/bs_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.bsEduFacilities,
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'user_id': $scope.user_id,
                    },
                    'is_edit': $scope.is_edit,
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

    //Cancel Edit
	$scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bsEduFacilities = init_data;
        location.reload();
    }

    //Clear Function
	$scope.clear = function() {
		console.log($scope.bsEduFacilities.education.Table_1.BefPubSchools[0].total_number);
		console.log("clear");
		$scope.is_edit = false;
		$scope.bsEduFacilities = angular.copy(init_data);
		location.reload();
	}

	$scope.insertAsset = function(table) {
		console.log($scope.bsEduFacilities.education.Table_1[table]);
		var new_row;
		if(table == 'BefPvt') {
			new_row = {
				type_facilities: '',
				total_number: null,
				avg_male: null,
				avg_female: null,
			}
		}
		$scope.bsEduFacilities.education.Table_1[table].push(new_row);
	}

	$scope.removeItem = function removeItem(table, index) {
		if(table == 'BefPvt') {
			$scope.bsEduFacilities.education.Table_1.BefPvt.splice(index, 1);
		}
	}

	$scope.getPubTotal = function(model) {
		console.clear();
		var array1 = $scope.bsEduFacilities.education.Table_1.BefPubSchools;
		var array2 = $scope.bsEduFacilities.education.Table_1.BefPubOffices;
		var schooltotal_number = 0;
		var officetotal_number = 0;
		var schoolavg_male = 0;
		var officeavg_male = 0;
		var schoolavg_female = 0;
		var officeavg_female = 0;
		var sums = _.map(array1, function(obj) {
			schooltotal_number += obj.total_number;
			schoolavg_male += obj.avg_male;
			schoolavg_female += obj.avg_female;
			console.log(schooltotal_number, schoolavg_male, schoolavg_female);
			//            return schooltotal_number;
		});
		var sums = _.map(array2, function(obj) {
			if(obj.type_facilities != 'TOTAL NUMBER OF STUDENTS') {
				officetotal_number += obj.total_number;
				officeavg_male += obj.avg_male;
				officeavg_female += obj.avg_female;
				console.log(officetotal_number, officeavg_male, officeavg_female);
				//                return officetotal_number;
			}
		});
		console.log(schooltotal_number, officetotal_number);
		angular.forEach($scope.bsEduFacilities.education.Table_1.BefPubOffices, function(value, key) {
			if(value.type_facilities == 'TOTAL NUMBER OF STUDENTS') {
				value.total_number = (schooltotal_number + officetotal_number);
				value.avg_male = (schoolavg_male + officeavg_male);
				value.avg_female = (schoolavg_female + officeavg_female);
			}
		})
	}

	$scope.getPvtTotal = function(model) {
		console.clear();
		var array1 = $scope.bsEduFacilities.education.Table_1.BefPvt;
		var total_number = 0;
		var avg_male = 0;
		var avg_female = 0;
		var sums = _.map(array1, function(obj) {
			if(obj.type_facilities != 'TOTAL NUMBER OF STUDENTS') {
				total_number += obj.total_number;
				avg_male += obj.avg_male;
				avg_female += obj.avg_female;
				console.log(total_number, avg_male, avg_female);
				//                return officetotal_number;
			}
		});
		//        console.log(schooltotal_number, officetotal_number);
		angular.forEach($scope.bsEduFacilities.education.Table_1.BefPvt, function(value, key) {
			if(value.type_facilities == 'TOTAL NUMBER OF STUDENTS') {
				value.total_number = total_number;
				value.avg_male = avg_male;
				value.avg_female = avg_female;
			}
		})
	}

	$scope.totTotalNumber = function() {
		var tot = 0;
		angular.forEach($scope.bsEduFacilities.education.Table_1.BefPubSchools, function(value, index) {
			tot = tot + value.total_number;
		})
		angular.forEach($scope.bsEduFacilities.education.Table_1.BefPubOffices, function(value, index) {
			if(value.type_facilities != 'TOTAL NUMBER OF STUDENTS') {
				tot = tot + value.total_number;
			}
		})
		return tot;
	}

	$scope.totAvgMale = function() {
		var tot = 0;
		angular.forEach($scope.bsEduFacilities.education.Table_1.BefPubSchools, function(value, index) {
			tot = tot + (value.total_number * $scope.bsEduFacilities.education.Table_1.BefPubSchools[index].avg_male);
		})
		return tot;
	}

	$scope.totAvgFemaler = function() {
		var tot = 0;
		angular.forEach($scope.bsEduFacilities.education.Table_1.BefPubSchools, function(value, index) {
			tot = tot + (value.total_number * $scope.bsEduFacilities.education.Table_1.BefPubSchools[index].avg_female);
		})
		return tot;
	}

	$scope.totBefPvtTotalNumber = function() {
		var tot = 0;
		angular.forEach($scope.bsEduFacilities.education.Table_1.BefPvt, function(value, index) {
			if(value.type_facilities != 'TOTAL NUMBER OF STUDENTS') {
				tot = tot + value.total_number;
			}
		})
		return tot;
	}

	$scope.totBefPvtAvgMale = function() {
		var tot = 0;
		angular.forEach($scope.bsEduFacilities.education.Table_1.BefPvt, function(value, index) {
			if(value.type_facilities != 'TOTAL NUMBER OF STUDENTS') {
				tot = tot + (value.total_number * value.avg_male);
			}
		})
		return tot;
	}

	$scope.totBefPvtAvgFemale = function() {
		var tot = 0;
		angular.forEach($scope.bsEduFacilities.education.Table_1.BefPvt, function(value, index) {
			if(value.type_facilities != 'TOTAL NUMBER OF STUDENTS') {
				tot = tot + (value.total_number * value.avg_female);
			}
		})
		return tot;
	}
})
