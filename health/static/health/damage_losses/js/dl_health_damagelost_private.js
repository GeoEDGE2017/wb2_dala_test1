//Table 7
var app = angular.module('dlHealthDamagelostPrivateApp', [])
app.controller('dlHealthDamagelostPrivateAppController', function($scope, $http, $filter) {
	$scope.district;
	$scope.dlDate;
	$scope.incident;
	$scope.submitted = false;
	$scope.Districts = [];
	$scope.privateClinics = [];
	$scope.private_clinic = {
		id: null,
		name: null,
		district_id: null
	};
	$scope.is_edit_model = false;
	$scope.is_edit = false;
	$scope.is_valid_data = true;
	$scope.is_null = false;
	$scope.currentBaselineDate = null;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.selectedCliniEdit = null;
	$scope.privateClinicsData = [];
	$scope.is_submit = false;
	$scope.is_search = false;
	$scope.check_search = false;
	$scope.bsCreatedeDate;

	//initialize model
	var init_data = {
		'health': {
			'Table_7': {
				//tab 1
				'DapNapTmf': [{
					type_med_fac: 'Private Clinics',
					num_affected_fac: null,
					male: null,
					female: null,
				}, {
					type_med_fac: 'Others',
					num_affected_fac: null,
					male: null,
					female: null,
				}, {
					type_med_fac: 'Total',
					num_affected_fac: null,
					male: null,
					female: null,
				}],
				//tab 2
				'DapBefPc': [],
				//tab 3
				'DapBefOther': [{
					pvt_clinics: 'Structure',
					est_replacement_cost: null,
					est_repair_cost: null,
					total_damages: null,
					est_losses_y1: null,
					est_losses_y2: null,
					total_losses: null,
				}, {
					pvt_clinics: 'Supplies and Materials',
					est_replacement_cost: null,
					est_repair_cost: null,
					total_damages: null,
					est_losses_y1: null,
					est_losses_y2: null,
					total_losses: null,
				}, {
					pvt_clinics: 'Equipment',
					est_replacement_cost: null,
					est_repair_cost: null,
					total_damages: null,
					est_losses_y1: null,
					est_losses_y2: null,
					total_losses: null,
				}, {
					pvt_clinics: 'Total',
					est_replacement_cost: null,
					est_repair_cost: null,
					total_damages: null,
					est_losses_y1: null,
					est_losses_y2: null,
					total_losses: null,
				}],
			}
		}
	}

	$scope.grand_totals = {}

	$scope.dlHealthDamagelostPrivateSys = angular.copy(init_data);

	//Save Data
	$scope.saveDlData = function(form) {
        console.log('private_clinic', $scope.private_clinic);
        console.log($scope.dlHealthDamagelostPrivateSys);
        $scope.submitted = true;
        $scope.is_submit = true;

        if(form.$valid) {
            $scope.setPrivateClinicsIDs();
            $http({
                method: 'POST',
                url: '/dl_save_data_with_array',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlHealthDamagelostPrivateSys,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                        //'private_clinic': $scope.clinic,
                    },
                    'bs_date': $scope.bsCreatedeDate,
                    'is_edit': $scope.is_edit,
                    'user_id': $scope.user_id
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
        $scope.is_submit = false;
    }

    //Fetch Entities
	$scope.fetchPrivateClinics = function() {
        if($scope.incident && $scope.district) {
            $scope.is_edit_disable = true;
            $scope.check_search = true;
        }
        $scope.private_clinic.district_id = $scope.district;
        $http({
            method: "POST",
            url: "/health/damage_losses/fetch_entities",
            data: angular.toJson({
                'district': $scope.district.district__id,
                'model': "PrivateClinic",
                'sector': 'health'
            }),
        }).success(function(data) {
            $scope.privateClinics = data;
            console.log('privateClinics ', data);
            $http({
                //this table does not get any data from baseline tables,
                //but we pass baseline table 3, for get baseline data only
                method: 'POST',
                url: '/get_latest_bs_date',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BucMarStructure', 'BucMarSupplies', 'BucMarMequipment', 'BucMarOassets', 'BucMarcStructures', 'BucMarcCrpm', 'BucMarcMequipment', 'BucMarcOassets'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_3',
                    'sector': 'health'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                console.log('response ', response);
                if(response.data == 'null' || response.data == null) {
                    $("#modal-container-239458").modal('show');
                }
                else {
                    var result = response.data;
                    var bs_date = result.bs_date.replace(/^"(.*)"$/, '$1');
                    $scope.currentBaselineDate = "Latest baseline data as at " + bs_date;
                    $scope.bsCreatedeDate = result.bs_created_date;
                    console.log('bs_date', result.bs_date);
                    console.log('bsCreatedeDate', result.bs_created_date);
                }
            });
        })
    }

    //Add Entities
	$scope.addPrivateClinic = function() {
        if($scope.private_clinic) {
            $scope.private_clinic.district_id = $scope.district.district__id;
            console.log($scope.private_clinic);
            $http({
                method: "POST",
                url: "/add_entity",
                data: angular.toJson({
                    'model_fields': $scope.private_clinic,
                    'model': 'PrivateClinic',
                    'is_edit': $scope.is_edit_model,
                    'sector': 'health'
                }),
            }).success(function(data) {
                $("#modal-container-218029").modal('hide');
                $scope.private_clinic.id = data;
                if(!$scope.is_edit_model) {
                    if(data) {
                        $scope.privateClinics.push($scope.private_clinic);
                        console.log($scope.privateClinics);
                    }
                }
                else {
                    var private_clinic = $filter('filter')($scope.privateClinics, {
                        id: data
                    })[0];
                    private_clinic.name = $scope.private_clinic.name;
                }
                $scope.is_edit_model = false;
                location.reload();
            })
        }
    }

    //Edit Entities
	$scope.editPrivateClinic = function() {
        if($scope.selectedCliniEdit) {
            $scope.selectedCliniEdit.district_id = $scope.district.district__id;
            console.log($scope.selectedCliniEdit);
            $http({
                method: "POST",
                url: "/add_entity",
                data: angular.toJson({
                    'model_fields': $scope.selectedCliniEdit,
                    'model': 'PrivateClinic',
                    'is_edit': true,
                    'sector': 'health'
                }),
            }).success(function(data) {
                $("#modal-container-218029").modal('hide');
                $scope.selectedCliniEdit.id = data;
                var selectedCliniEdit = $filter('filter')($scope.privateClinics, {
                    id: data
                })[0];
                selectedCliniEdit.name = $scope.selectedCliniEdit.name;
                location.reload();
            })
        }
    }

    //Edit Data$scope.private_clinic
	$scope.editDlData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        document.getElementById("clearbtn").disabled = true
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data_with_array',
                data: angular.toJson({
                    'table_name': 'Table_7',
                    'sector': 'health',
                    'keys': {
                        'DapBefPc': 'private_clinic',
                    },
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident
//                        'user_id': $scope.user_id,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                console.log('editDlData ', data);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.health.Table_7, function(value, index) {
//                        console.log('key ', key);
//                        console.log('value ', value);
                        angular.forEach(value, function(value_in, index_in, key) {
                            console.log('key ', key);
                            if(value_in.length == 0 && key != 'DapBefPc') {
                                edit_data_not_found = true;
                            }
                        })
                    })
                    if(edit_data_not_found != true) {
                        $scope.dlHealthDamagelostPrivateSys = data;
                        $scope.getPrivateClinicsIDs();
                        console.log($scope.dlHealthDamagelostPrivateSys);
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

    //Edit Data$scope.private_clinic
	$scope.searchDlData = function(form) {
        document.getElementById("clearbtn").disabled = true;
        document.getElementById("editbtn").disabled = true;
        document.getElementById("subbtn").disabled = true;
        $scope.is_search = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data_with_array',
                data: angular.toJson({
                    'table_name': 'Table_7',
                    'sector': 'health',
                    'keys': {
                        'DapBefPc': 'private_clinic',
                    },
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident
                        //'user_id': $scope.user_id,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.health.Table_7, function(value, index) {
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.dlHealthDamagelostPrivateSys = data;
                        $scope.getPrivateClinicsIDs();
                        console.log($scope.dlHealthDamagelostPrivateSys);
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

    //Cancel Data
	$scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.dlHealthDamagelostPrivateSys = init_data;
        location.reload();
    }

    //Fetch Districts
	$scope.changeIncident = function getDistrictData(selectedValue) {
        if ($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.district = "";
                console.log(data);
            })
        }
        if($scope.incident && $scope.district) {
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BucMarStructure', 'BucMarSupplies', 'BucMarMequipment', 'BucMarOassets', 'BucMarcStructures', 'BucMarcCrpm', 'BucMarcMequipment', 'BucMarcOassets'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_3',
                    'sector': 'health'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                console.log('*', response);
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });
                console.log('*', $scope.bs_data);
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
                }
                else {
                    $http({
                        method: 'POST',
                        url: '/get_latest_bs_date',
                        contentType: 'application/json; charset=utf-8',
                        data: angular.toJson({
                            'com_data': {
                                'district': $scope.district.district__id,
                                'incident': $scope.incident,
                            },
                            'table_name': 'Table_3',
                            'sector': 'health'
                        }),
                        dataType: 'json',
                    }).then(function successCallback(response) {
                        console.log('response', response);
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
                        }
                    });
                }
            }, function errorCallback(response) {
                console.log('baseline tables data retrieving error');
                console.log(response);
            });
        }
    }

    //Clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.dlHealthDamagelostPrivateSys = angular.copy(init_data);
		location.reload();
	}

	$scope.addPrivateClinicObject = function() {
		if($scope.incident && $scope.district) {
			var new_row_one = [{
				pvt_clinics: 'Structure',
				est_replacement_cost: null,
				est_repair_cost: null,
				total_damages: null,
				est_losses_y1: null,
				est_losses_y2: null,
				total_losses: null,
				private_clinic: null,
			}, {
				pvt_clinics: 'Supplies and Materials',
				est_replacement_cost: null,
				est_repair_cost: null,
				total_damages: null,
				est_losses_y1: null,
				est_losses_y2: null,
				total_losses: null,
				private_clinic: null,
			}, {
				pvt_clinics: 'Equipment',
				est_replacement_cost: null,
				est_repair_cost: null,
				total_damages: null,
				est_losses_y1: null,
				est_losses_y2: null,
				total_losses: null,
				private_clinic: null,
			}, {
				pvt_clinics: 'Total',
				est_replacement_cost: null,
				est_repair_cost: null,
				total_damages: null,
				est_losses_y1: null,
				est_losses_y2: null,
				total_losses: null,
				private_clinic: null,
			}]
			$scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc.unshift(new_row_one);
			console.log($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc);
			$scope.privateClinicsData.unshift(null);
			console.log('privateClinicsData push', $scope.privateClinicsData);
		}
	}

	$scope.removeItem = function removeItem(table, index) {
		if(table == 'DapBefPc') {
			$scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc.splice(index, 1);
			$scope.privateClinicsData.splice(index, 1);
		}
	}

	$scope.getPrivateClinicsIDs = function() {
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc, function(value, index) {
			$scope.privateClinicsData.push(null);
			angular.forEach(value, function(value_in, index_in) {
				angular.forEach($scope.privateClinics, function(pvt_clinic, pvt_clinic_index) {
					if(value_in.private_clinic == pvt_clinic.id) {
						$scope.privateClinicsData[index] = pvt_clinic;
					}
				})
			})
		})
	}

	$scope.setPrivateClinicsIDs = function() {
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				value_in.private_clinic = $scope.privateClinicsData[index].id;
			})
		})
	}

	$scope.Test = function() {
		var finaltotal1 = 0;
		var finaltotal2 = 0;
		var finaltotal3 = 0;
		var finaltotal4 = 0;
		var finaltotal5 = 0;
		var finaltotal6 = 0;
		var array_out = $scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc;
		angular.forEach(array_out, function(value, key) {
			var array_in = value
			angular.forEach(array_in, function(value_in, key_in) {
				if(value_in.pvt_clinics == 'Total') {
					finaltotal1 = finaltotal1 + value_in.est_replacement_cost;
					finaltotal2 = finaltotal2 + value_in.est_repair_cost;
					finaltotal3 = finaltotal3 + value_in.total_damages;
					finaltotal4 = finaltotal4 + value_in.est_losses_y1;
					finaltotal5 = finaltotal5 + value_in.est_losses_y2;
					finaltotal6 = finaltotal6 + value_in.total_losses;
				}
			})
		})
		var dapBefOther_array = $scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefOther;
		angular.forEach(dapBefOther_array, function(value, key) {
			if(value.pvt_clinics == 'Total') {
				finaltotal1 = finaltotal1 + value.est_replacement_cost;
				finaltotal2 = finaltotal2 + value.est_repair_cost;
				finaltotal3 = finaltotal3 + value.total_damages;
				finaltotal4 = finaltotal4 + value.est_losses_y1;
				finaltotal5 = finaltotal5 + value.est_losses_y2;
				finaltotal6 = finaltotal6 + value.total_losses;
			}
		})
		$scope.grand_totals = {
			est_replacement_cost: finaltotal1,
			est_repair_cost: finaltotal2,
			total_damages: finaltotal3,
			est_losses_y1: finaltotal4,
			est_losses_y2: finaltotal5,
			total_losses: finaltotal6,
		};
		console.log($scope.grand_totals);
		console.log($scope.dlHealthDamagelostPrivateSys);
		return $scope.grand_totals;
	}

	$scope.calTotalDapBefPc = function() {
		var array_out = $scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc;
		angular.forEach(array_out, function(value, key) {
			var array_in = value
			angular.forEach(array_in, function(value_in, key_in) {
				if(value_in.pvt_clinics == 'Total') {
					finaltotal1 = finaltotal1 + value_in.est_replacement_cost;
					finaltotal2 = finaltotal2 + value_in.est_repair_cost;
					finaltotal3 = finaltotal3 + value_in.total_damages;
					finaltotal4 = finaltotal4 + value_in.est_losses_y1;
					finaltotal5 = finaltotal5 + value_in.est_losses_y2;
					finaltotal6 = finaltotal6 + value_in.total_losses;
				}
			})
		})
	}

	$scope.tt = function() {
		//        $scope.setPrivateClinicsIDs();
		//        console.log($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc);
		//        console.log($scope.privateClinicsData);
		console.log($scope.dlHealthDamagelostPrivateSys);
	}

	$scope.totDapNapTmfTypeMedFac = function() {
		var tot = 0;
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapNapTmf, function(value, index) {
			if(value.type_med_fac != 'Total') {
				tot = tot + value.num_affected_fac;
			}
		})
		return tot;
	}

	$scope.totDapNapTmfMale = function() {
		var tot = 0;
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapNapTmf, function(value, index) {
			if(value.type_med_fac != 'Total') {
				tot = tot + value.male;
			}
		})
		return tot;
	}

	$scope.totDapNapTmfFemale = function() {
		var tot = 0;
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapNapTmf, function(value, index) {
			if(value.type_med_fac != 'Total') {
				tot = tot + value.female;
			}
		})
		return tot;
	}

	$scope.totGrandTotEstReplacementCost = function() {
		var tot = 0;
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.pvt_clinics == 'Total') {
					tot = tot + value_in.est_replacement_cost;
				}
			})
		})
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefOther, function(value, index) {
			if(value.pvt_clinics == 'Total') {
				tot = tot + value.est_replacement_cost;
			}
		})
		return tot;
	}

	$scope.totGrandTotEstRepairCost = function() {
		var tot = 0;
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.pvt_clinics == 'Total') {
					tot = tot + value_in.est_repair_cost;
				}
			})
		})
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefOther, function(value, index) {
			if(value.pvt_clinics == 'Total') {
				tot = tot + value.est_repair_cost;
			}
		})
		return tot;
	}

	$scope.totGrandTotDamages = function() {
		var tot = 0;
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.pvt_clinics == 'Total') {
					tot = tot + value_in.total_damages;
				}
			})
		})
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefOther, function(value, index) {
			if(value.pvt_clinics == 'Total') {
				tot = tot + value.total_damages;
			}
		})
		return tot;
	}

	$scope.totGrandTotEstLossesY1 = function() {
		var tot = 0;
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.pvt_clinics == 'Total') {
					tot = tot + value_in.est_losses_y1;
				}
			})
		})
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefOther, function(value, index) {
			if(value.pvt_clinics == 'Total') {
				tot = tot + value.est_losses_y1;
			}
		})
		return tot;
	}

	$scope.totGrandTotEstLossesY2 = function() {
		var tot = 0;
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.pvt_clinics == 'Total') {
					tot = tot + value_in.est_losses_y2;
				}
			})
		})
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefOther, function(value, index) {
			if(value.pvt_clinics == 'Total') {
				tot = tot + value.est_losses_y2;
			}
		})
		return tot;
	}

	$scope.totGrandTotLsses = function() {
		var tot = 0;
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc, function(value, index) {
			angular.forEach(value, function(value_in, index_in) {
				if(value_in.pvt_clinics == 'Total') {
					tot = tot + value_in.total_losses;
				}
			})
		})
		angular.forEach($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefOther, function(value, index) {
			if(value.pvt_clinics == 'Total') {
				tot = tot + value.total_losses;
			}
		})
		return tot;
	}
})
