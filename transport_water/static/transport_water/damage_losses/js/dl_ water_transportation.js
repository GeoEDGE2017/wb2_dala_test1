//Table 2
var app = angular.module('dlWaterTransApp', ['underscore']);

app.controller("DlWaterTransController", function($scope, $http, $parse, _) {
	$scope.district;
	$scope.incident;
	$scope.bs_data = [];
	$scope.dl_data = {};
	$scope.is_edit = false;
	$scope.submitted = false;
	$scope.bsCreatedDate;
	$scope.Districts = [];
	$scope.is_valid_data = true;
	$scope.DlWaterDmgWcrafts_num_tdestroyed_public = null;
	$scope.DlWaterDmgWcrafts_num_tdestroyed_private = null;
	$scope.DlWaterDmgWcrafts_num_pdestroyed_public = null;
	$scope.DlWaterDmgWcrafts_num_pdestroyed_private = null;
	$scope.user_id;
	$scope.is_edit_disable = false;
	$scope.check_search = false;

	var init_data = {
		'transport_water': {
			'Table_2': {
				'DlWaterDmgWcrafts': [{
					assets: 'Ships',
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				}, {
					assets: 'Ferries',
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				}, {
					assets: 'Total',
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				}],
				'DlWaterDmgEquipment': [{
					assets: 'Navigation equipment',
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				}, {
					assets: 'Baggage handling',
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				}, {
					assets: 'Security equipment',
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				}, {
					assets: 'Vehicles',
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				}, {
					assets: 'Office equipment',
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				}, {
					assets: 'Total',
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				}],
				'DlWaterDmgMaterials': [{
					assets: 'Fuel (Liters)',
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				}, {
					assets: 'Total',
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				}],
				'DlWaterDmgStructures': [{
					assets: 'Ports',
					num_tdestroyed_num: null,
					num_tdestroyed_meters: null,
					num_pdestroyed_num: null,
					num_pdestroyed_meters: null,
					tot_damages: null,
				}, {
					assets: 'Total',
					num_tdestroyed_num: null,
					num_tdestroyed_meters: null,
					num_pdestroyed_num: null,
					num_pdestroyed_meters: null,
					tot_damages: null,
				}, ],
				'DlWaterDmgBuildings': [{
					assets: '1 floor',
					tdestroyed_num: null,
					tdestroyed_smeters: null,
					pdamaged_num: null,
					pdamaged_roof: null,
					wall: null,
					floor: null,
					tot_damages: null,
				}, {
					assets: '2-3 floors',
					tdestroyed_num: null,
					tdestroyed_smeters: null,
					pdamaged_num: null,
					pdamaged_roof: null,
					wall: null,
					floor: null,
					tot_damages: null,
				}, {
					assets: 'More than 3 floors',
					tdestroyed_num: null,
					tdestroyed_smeters: null,
					pdamaged_num: null,
					pdamaged_roof: null,
					wall: null,
					floor: null,
					tot_damages: null,
				}, {
					assets: 'Total',
					tdestroyed_num: null,
					tdestroyed_smeters: null,
					pdamaged_num: null,
					pdamaged_roof: null,
					wall: null,
					floor: null,
					tot_damages: null,
				}],
				'DlWaterLosFi': [{
					type_los: 'Income of companies',
					year_1_pub: null,
					year_1_pvt: null,
					year_2_pub: null,
					year_2_pvt: null,
					tot_los_pub: null,
					tot_los_pvt: null,
				}, {
					type_los: 'Income of ports',
					year_1_pub: null,
					year_1_pvt: null,
					year_2_pub: null,
					year_2_pvt: null,
					tot_los_pub: null,
					tot_los_pvt: null,
				}, {
					type_los: 'Total',
					year_1_pub: null,
					year_1_pvt: null,
					year_2_pub: null,
					year_2_pvt: null,
					tot_los_pub: null,
					tot_los_pvt: null,
				}],
				'DlWaterLosOther': [{
					type_los: 'Cleaning costs',
					year_1_pub: null,
					year_1_pvt: null,
					year_2_pub: null,
					year_2_pvt: null,
					tot_los_pub: null,
					tot_los_pvt: null,
				}, {
					type_los: 'Higher operating costs',
					year_1_pub: null,
					year_1_pvt: null,
					year_2_pub: null,
					year_2_pvt: null,
					tot_los_pub: null,
					tot_los_pvt: null,
				}, {
					type_los: 'Other unexpected expenses',
					year_1_pub: null,
					year_1_pvt: null,
					year_2_pub: null,
					year_2_pvt: null,
					tot_los_pub: null,
					tot_los_pvt: null,
				}, {
					type_los: 'TOTAL LOSSES',
					year_1_pub: null,
					year_1_pvt: null,
					year_2_pub: null,
					year_2_pvt: null,
					tot_los_pub: null,
					tot_los_pvt: null,
				}]
			}
		}
	}

	$scope.dlWaterTransportation = angular.copy(init_data);

	$scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: 'POST',
                url: '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlWaterTransportation,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                        'user_id': $scope.user_id
                    },
                    'bs_date': $scope.bsCreatedDate,
                    'is_edit': $scope.is_edit,
                    'sector': 'transport_water'
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
            }, function errorCallback(response) {});
        }
    }

    // get relevant base-line data for calculations
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
				$scope.district = "";
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
					'db_tables': ['BsAstWaterWcrafts', 'BsAstWaterEquipment', 'BsAstWaterMaterials', 'BsAstWaterBuildings', 'BsAstWaterStructures'],
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'sector': 'transport_water',
					'table_name': 'Table_1'
				}),
				dataType: 'json',
			}).then(function successCallback(response) {
				var data = response.data;
				console.log(response);
				angular.forEach(data, function(value, key) {
					$scope.bs_data[key] = JSON.parse(value);
				});
				console.log('bs_data', $scope.bs_data);
				var is_null = false;
				angular.forEach($scope.bs_data, function(value, key) {
					if(value == null) {
						is_null = true;
					}
				});
				console.log('is_null', is_null);
				if(is_null == true) {
					$("#modal-container-239458").modal('show');
					console.log('baseline table or tables are empty');
					console.log($scope.bs_data);
					$scope.currentBaselineDate = null;
				} else {
					generateRefencedData();
					$http({
						method: 'POST',
						url: '/get_latest_bs_date',
						contentType: 'application/json; charset=utf-8',
						data: angular.toJson({
							'db_tables': ['BsAstWaterWcrafts', 'BsAstWaterEquipment', 'BsAstWaterMaterials', 'BsAstWaterBuildings', 'BsAstWaterStructures'],
							'com_data': {
								'district': $scope.district.district__id,
								'incident': $scope.incident,
							},
							'sector': 'transport_water',
							'table_name': 'Table_1'
						}),
						dataType: 'json',
					}).then(function successCallback(response) {
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
                        }
					});
				}
			}, function errorCallback(response) {});
		}
	}

	function generateRefencedData() {
		data_array = ['BsAstWaterWcrafts', 'BsAstWaterEquipment', 'BsAstWaterMaterials', 'BsAstWaterStructures'];
		var dl_model1 = null;
		var dl_model2 = null;
		var dl_model3 = null;
		angular.forEach(data_array, function(value, key) {
			obj_array = $scope.bs_data[value];
			model_name = value;
			var particular_value_1 = null;
			var particular_value_2 = null;
			var particular_value_3 = null;
			if(model_name == 'BsAstWaterWcrafts') {
				dl_model1 = 'DlWaterDmgWcrafts';
				particular_value_1 = 'Total';
				$scope.dlWaterTransportation.transport_water.Table_2[dl_model1] = [];
			}
			if(model_name == 'BsAstWaterEquipment') {
				dl_model1 = 'DlWaterDmgEquipment';
				particular_value_1 = 'Total';
				$scope.dlWaterTransportation.transport_water.Table_2[dl_model1] = [];
			}
			if(model_name == 'BsAstWaterMaterials') {
				dl_model1 = 'DlWaterDmgMaterials';
				particular_value_1 = 'Total';
				$scope.dlWaterTransportation.transport_water.Table_2[dl_model1] = [];
			}
			if(model_name == 'BsAstWaterStructures') {
				dl_model2 = 'DlWaterDmgStructures';
				particular_value_2 = 'Total';
				$scope.dlWaterTransportation.transport_water.Table_2[dl_model2] = [];
			}
			var obj1 = {
				assets: particular_value_1,
				num_tdestroyed_public: null,
				num_tdestroyed_private: null,
				num_pdestroyed_public: null,
				num_pdestroyed_private: null,
				tot_dmg_private: null,
				tot_dmg_public: null,
			};
			var obj2 = {
				assets: particular_value_2,
				num_tdestroyed_num: null,
				num_tdestroyed_meters: null,
				num_pdestroyed_num: null,
				num_pdestroyed_meters: null,
			};
			angular.forEach(obj_array, function(value, key) {
				var obj1 = {
					assets: value.fields.assets,
					num_tdestroyed_public: null,
					num_tdestroyed_private: null,
					num_pdestroyed_public: null,
					num_pdestroyed_private: null,
					tot_dmg_private: null,
					tot_dmg_public: null,
				};
				var obj2 = {
					assets: value.fields.assets,
					num_tdestroyed_num: null,
					num_tdestroyed_meters: null,
					num_pdestroyed_num: null,
					num_pdestroyed_meters: null,
				};
				if(model_name == 'BsAstWaterWcrafts') {
					$scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
				}
				if(model_name == 'BsAstWaterEquipment') {
					$scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
				}
				if(model_name == 'BsAstWaterMaterials') {
					$scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
				}
				if(model_name == 'BsAstWaterStructures') {
					$scope.dlWaterTransportation.transport_water.Table_2[dl_model2].push(obj2);
				}
			});
			if(model_name == 'BsAstWaterWcrafts') {
				$scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
			}
			if(model_name == 'BsAstWaterEquipment') {
				$scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
			}
			if(model_name == 'BsAstWaterMaterials') {
				$scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
			}
			if(model_name == 'BsAstWaterStructures') {
				$scope.dlWaterTransportation.transport_water.Table_2[dl_model2].push(obj2);
			}
		});
	}

	$scope.CalPub = function(arr) {
		var finaltotal = 0;
		angular.forEach(arr, function(value, key) {
			finaltotal = finaltotal + value.tot_dmg_public;
		})
		return finaltotal;
	}

	$scope.CalPvt = function(arr) {
		var finaltotal = 0;
		angular.forEach(arr, function(value, key) {
			finaltotal = finaltotal + value.tot_dmg_private;
		})
		return finaltotal;
	}

	$scope.CalStruTot = function(arr) {
		var finaltotal = 0;
		angular.forEach(arr, function(value, key) {
			if(value.tot_damages) {
				finaltotal = finaltotal + value.tot_damages;
			}
		})
		return finaltotal;
	}

	$scope.CalBuildingTot = function(arr) {
		var finaltotal = 0;
		angular.forEach(arr, function(value, key) {
			finaltotal = finaltotal + value.tot_damages;
		})
		return finaltotal;
	}

	$scope.CalFiPub = function(arr) {
		var finaltotal = 0;
		angular.forEach(arr, function(value, key) {
			finaltotal = finaltotal + value.tot_los_pub;
		})
		return finaltotal;
	}

	$scope.CalFiPvt = function(arr) {
		var finaltotal = 0;
		angular.forEach(arr, function(value, key) {
			finaltotal = finaltotal + value.tot_los_pvt;
		})
		return finaltotal;
	}

	$scope.sumFunc2 = function(val1=0, val2=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        return parseInt(val1) + parseInt(val2);
    }

	$scope.calGrandTotalPub = function() {
//		var finaltotal1 = 0;
//		var finaltotal2 = 0;
//		var finaltotal3 = 0;
//		var finaltotal4 = 0;
//		var finaltotal5 = 0;
//		var grantot = 0;
//		var array1 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgWcrafts;
//		var array2 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgEquipment;
//		var array3 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgMaterials;
//		var array4 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgStructures;
//		var array5 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgBuildings;
//		angular.forEach(array1, function(value, key) {
//			finaltotal1 = finaltotal1 + value.tot_dmg_public;
//		})
//		angular.forEach(array2, function(value, key) {
//			finaltotal2 = finaltotal2 + value.tot_dmg_public;
//		})
//		angular.forEach(array3, function(value, key) {
//			finaltotal3 = finaltotal3 + value.tot_dmg_public;
//		})
//		angular.forEach(array4, function(value, key) {
//			finaltotal4 = finaltotal4 + value.tot_damages;
//		})
//		angular.forEach(array5, function(value, key) {
//			finaltotal5 = finaltotal5 + value.tot_damages;
//		})
//		grantot = finaltotal1 + finaltotal2 + finaltotal3 + finaltotal5;

//        var grantot =
//        $scope.calculateTotal($parent.dlWaterTransportation.transport_water.Table_2.DlWaterDmgWcrafts,'tot_dmg_public') +
//        $scope.calculateTotal($parent.dlWaterTransportation.transport_water.Table_2.DlWaterDmgEquipment,'tot_dmg_public') +
//        $scope.calculateTotal($parent.dlWaterTransportation.transport_water.Table_2.DlWaterDmgMaterials,'tot_dmg_public') +
//        $scope.calculateTotal($parent.dlWaterTransportation.transport_water.Table_2.DlWaterDmgStructures,'tot_damages') +
//        $scope.calculateTotal($parent.dlWaterTransportation.transport_water.Table_2.DlWaterDmgBuildings,'tot_damages')

        console.log('calGrandTotalPub');
        var tot_dmg_public = 0;
        if(!angular.isUndefined($scope.dlWaterTransportation)) {

            angular.forEach($scope.dlWaterTransportation.transport_water.Table_2, function(value, key, index) {
                console.log(key);
                if(key == 'DlWaterDmgWcrafts' || key == 'DlWaterDmgEquipment' || key == 'DlWaterDmgMaterials') {
                    angular.forEach(value, function(value_in, key_in) {
                        if(value_in.assets == 'Total') {
                            console.log(value_in);
                            tot_dmg_public = tot_dmg_public + $scope.sumFunc2(value_in.tot_dmg_public, 0);
                        }
                    })
                }
                else if(key == 'DlWaterDmgBuildings' || key == 'DlWaterDmgStructures') {
                    angular.forEach(value, function(value_in, key_in) {
                        if(value_in.assets == 'Total') {
                            console.log(value_in);
                            tot_dmg_public = tot_dmg_public + $scope.sumFunc2(value_in.tot_damages, 0);
                        }
                    })
                }
            })
        }

		return tot_dmg_public;
	}

	$scope.calGrandTotalPvt = function() {
//		var finaltotal1 = 0;
//		var finaltotal2 = 0;
//		var finaltotal3 = 0;
//		var grantot = 0;
//		var array1 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgWcrafts;
//		var array2 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgEquipment;
//		var array3 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgMaterials;
//		angular.forEach(array1, function(value, key) {
//			finaltotal1 = finaltotal1 + value.tot_dmg_private;
//		})
//		angular.forEach(array2, function(value, key) {
//			finaltotal2 = finaltotal2 + value.tot_dmg_private;
//		})
//		angular.forEach(array3, function(value, key) {
//			finaltotal3 = finaltotal3 + value.tot_dmg_private;
//		})
//		grantot = finaltotal1 + finaltotal2 + finaltotal3;
//		return grantot;

        console.log('calGrandTotalPvt');
        var tot_dmg_private = 0;
        if(!angular.isUndefined($scope.dlWaterTransportation)) {

            angular.forEach($scope.dlWaterTransportation.transport_water.Table_2, function(value, key, index) {
                console.log(key);
                if(key == 'DlWaterDmgWcrafts' || key == 'DlWaterDmgEquipment' || key == 'DlWaterDmgMaterials') {
                    angular.forEach(value, function(value_in, key_in) {
                        if(value_in.assets == 'Total') {
                            console.log(value_in);
                            tot_dmg_private = tot_dmg_private + $scope.sumFunc2(value_in.tot_dmg_private, 0);
                        }
                    })
                }
            })
        }

		return tot_dmg_private;
	}

	$scope.getTotal = function(model, property) {
        var array = $scope.dlWaterTransportation.transport_water.Table_2[model];
        var cumulative = null;
        var sums = _.map(array, function(obj) {
            if(obj.type_los != 'Total') {
                cumulative += obj[property];
                return cumulative;
            }
        });
        var the_string = model + '_' + property;
        var model = $parse(the_string);
        model.assign($scope, cumulative);
    }

    //Edit Data
	$scope.editDlData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        document.getElementById("clearbtn").disabled = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_2',
                    'sector': 'transport_water',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                console.log(data);
                $scope.dlWaterTransportation = data;
            })
        }
    }

    //search Data
	$scope.searchDlData = function(form) {
        document.getElementById("clearbtn").disabled = true;
        document.getElementById("editbtn").disabled = true;
        document.getElementById("subbtn").disabled = true;
        $scope.is_search = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_2',
                    'sector': 'transport_water',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                console.log(data);
                $scope.dlWaterTransportation = data;
            })
        }
    }

    //Calculate Gardn Private Total
	$scope.GrandTotal = function(property) {
		var finaltotal1 = 0;
		var finaltotal2 = 0;
		var grantot = 0;
		var array1 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterLosFi;
		var array2 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterLosOther;
		angular.forEach(array1, function(value, key) {
			if(value.type_los != 'Total') {
				finaltotal1 += value[property];
			}
		})
		angular.forEach(array2, function(value, key) {
			if(value.type_los != 'TOTAL LOSSES') {
				finaltotal2 += value[property];
			}
		})
		grantot = finaltotal1 + finaltotal2;
		return grantot;
	}

	$scope.calGrandTotal = function(property) {
		var finaltotal1 = 0;
		var grantot = 0;
		var array1 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterLosFi;
		angular.forEach(array1, function(value, key) {
			if(value.type_los != 'Total') {
				finaltotal1 += value[property];
			}
		})
		grantot = finaltotal1;
		return grantot;
	}

	$scope.waterCraftTotal = function(property){}

	$scope.calculateTotal = function(arr, property) {
        var finaltotal1 = 0;
        var grantot = 0;
        angular.forEach(arr, function(value, key) {
            if(value.assets != 'Total') {
                finaltotal1 += value[property];
            }
        })
        grantot = finaltotal1;
        return grantot;
    }

    //Cancel Edits
	$scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.dlWaterTransportation = angular.copy(init_data);
        location.reload();
    }

    //Clear Function
	$scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.dlWaterTransportation = angular.copy(init_data);
		location.reload();
	}
});
