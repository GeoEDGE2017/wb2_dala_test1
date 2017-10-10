//Table 4
var app = angular.module('dlRoadBrdgsApp', ['underscore'])
app.controller('dlRoadBrdgsController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.bsCreatedeDate;
    var total=0;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.DlRbdLosses_year_2 = null;
    $scope.DlRbdLosses_year_1 = null;
    $scope.tot = null;
    $scope.user_id;
    $scope.is_edit_disable = false;
    $scope.check_search = false;

    var init_data = {
        'transport_land' : {
            'Table_4': {
                'DlRbdRclassification' :[{
                    road_classification : 'Class A',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                }, {
                    road_classification : 'Class B',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                }, {
                    road_classification : 'Class C',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                }, {
                    road_classification : 'Class D',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                }, {
                    road_classification : 'Class E',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                }, {
                    road_classification : 'Total',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },],
                'DlRbdTbridges' : [{
                    type_bridges : 'Steel Bridges',
                    tot_dest_2_lanes : null,
                    tot_dest_multi_lanes : null,
                    part_dest_2_lanes : null,
                    part_dest_multi_lanes : null,
                    damages : null,
                }, {
                    type_bridges : 'Wooden bridges',
                    tot_dest_2_lanes : null,
                    tot_dest_multi_lanes : null,
                    part_dest_2_lanes : null,
                    part_dest_multi_lanes : null,
                    damages : null,
                }, {
                    type_bridges : 'Total',
                    tot_dest_2_lanes : null,
                    tot_dest_multi_lanes : null,
                    part_dest_2_lanes : null,
                    part_dest_multi_lanes : null,
                    damages : null,
                }],
                'DlRbdTculverts' : [{
                    type_culverts : 'Box Culvert',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }, {
                    type_culverts : 'Total',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }],
                'DlRbdTrwalls' : [{
                    type_retain_walls : 'RRM',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }, {
                    type_retain_walls : 'Total',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }],
                'DlRbdTdrains' : [{
                    type_drains : 'Concrete',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }, {
                    type_drains : 'Bricks',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }, {
                    type_drains : 'Earth',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }, {
                    type_drains : 'Total',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }],
                'DlRbdLosses' : [{
                    loss_type : 'Foregone income from toll fees',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                }, {
                    loss_type : 'Cleaning costs',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                }, {
                    loss_type : 'Higher operating costs',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                }, {
                    loss_type : 'Other unexpected expenses',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                }, {
                    loss_type : 'TOTAL LOSSES',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                }]
            }
        }
    }

    $scope.dlRoadBrdgs = angular.copy(init_data);

    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
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
            })
        }

        if($scope.incident && $scope.district ) {
            $scope.is_edit_disable = true;
            $scope.check_search = true;

            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BsRbuTbridges', 'BsRbuTculverts', 'BsRbuTrwalls', 'BsRbuTdrains', 'BsRbuRclassificattion'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_1',
                    'sector':'transport_land'
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
                }
                else {
                    $http({
                        method: 'POST',
                        url: '/get_latest_bs_date',
                        contentType: 'application/json; charset=utf-8',
                        data: angular.toJson({
                            'db_tables': ['BsRbuTbridges', 'BsRbuTculverts', 'BsRbuTrwalls', 'BsRbuTdrains', 'BsRbuRclassificattion'],
                            'com_data': {
                                'district': $scope.district.district__id,
                                'incident': $scope.incident,
                            },
                            'table_name': 'Table_1',
                            'sector': 'transport_land'
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
            }, function errorCallback(response) {
            });
        }
    }

    function generateRefencedData() {
        data_array = ['BsRbuTbridges', 'BsRbuTculverts', 'BsRbuTrwalls', 'BsRbuTdrains'];

        var dl_model1 = null;
        var dl_model2 = null;
        var dl_model3 = null;
        var dl_model4 = null;

        angular.forEach(data_array, function(value, key) {
            var obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;
            var particular_value_2 = null;
            var particular_value_3 = null;
            var particular_value_4 = null;

            if(model_name == 'BsRbuTbridges') {
                dl_model1 = 'DlRbdTbridges';
                particular_value_1 = 'Total';
                $scope.dlRoadBrdgs.transport_land.Table_4[dl_model1] = [];
            }
            if(model_name == 'BsRbuTculverts') {
                dl_model2 = 'DlRbdTculverts';
                particular_value_2 = 'Total';
                $scope.dlRoadBrdgs.transport_land.Table_4[dl_model2] = [];
            }
            if(model_name == 'BsRbuTrwalls') {
                dl_model3 = 'DlRbdTrwalls';
                particular_value_3 = 'Total';
                $scope.dlRoadBrdgs.transport_land.Table_4[dl_model3] = [];
            }
            if(model_name == 'BsRbuTdrains') {
                dl_model4 = 'DlRbdTdrains';
                particular_value_4 = 'Total';
                $scope.dlRoadBrdgs.transport_land.Table_4[dl_model4] = [];
            }

            var obj1 = {
                type_bridges :particular_value_1 ,
                tot_dest_2_lanes : null,
                tot_dest_multi_lanes : null,
                part_dest_2_lanes : null,
                part_dest_multi_lanes : null,
                damages : null,
            };
            var obj2 = {
                type_culverts : particular_value_2,
                tot_destroyed : null,
                part_destroyed : null,
                damages : null,
            };
            var obj3 = {
                type_retain_walls : particular_value_3,
                tot_destroyed : null,
                part_destroyed : null,
                damages : null,
            };
            var obj4 = {
                type_drains : particular_value_4,
                tot_destroyed : null,
                part_destroyed : null,
                damages : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    type_bridges: value.fields.type_bridges,
                    tot_dest_2_lanes : null,
                    tot_dest_multi_lanes : null,
                    part_dest_2_lanes : null,
                    part_dest_multi_lanes : null,
                    damages : null,
                };
                var obj2 = {
                    type_culverts : value.fields.type_culverts,
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                };
                var obj3 = {
                    type_retain_walls : value.fields.type_retain_walls,
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                };
                var obj4 = {
                    type_drains : value.fields.type_drains,
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                };

                if(model_name == 'BsRbuTbridges') {
                    $scope.dlRoadBrdgs.transport_land.Table_4[dl_model1].push(obj1);
                }
                if(model_name == 'BsRbuTculverts') {
                    $scope.dlRoadBrdgs.transport_land.Table_4[dl_model2].push(obj2);
                }
                if(model_name == 'BsRbuTrwalls') {
                    $scope.dlRoadBrdgs.transport_land.Table_4[dl_model3].push(obj3);
                }
                if(model_name == 'BsRbuTdrains') {
                    $scope.dlRoadBrdgs.transport_land.Table_4[dl_model4].push(obj4);
                }
            });

            if(model_name == 'BsRbuTbridges') {
                $scope.dlRoadBrdgs.transport_land.Table_4[dl_model1].push(obj1);
            }
            if(model_name == 'BsRbuTculverts') {
                $scope.dlRoadBrdgs.transport_land.Table_4[dl_model2].push(obj2);
            }
            if(model_name == 'BsRbuTrwalls') {
                $scope.dlRoadBrdgs.transport_land.Table_4[dl_model3].push(obj3);
            }
            if(model_name == 'BsRbuTdrains') {
                $scope.dlRoadBrdgs.transport_land.Table_4[dl_model4].push(obj4);
            }
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
                    'table_data': $scope.dlRoadBrdgs,
                    'com_data': {
                       'district_id': $scope.district.district__id,
                        'incident_id' : $scope.incident,
                        'user_id': $scope.user_id
                    },
                    'bs_date': $scope.bsCreatedeDate,
                    'is_edit':$scope.is_edit,
                    'sector':'transport_land'
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

            });
        }
    }

    $scope.dlDataEdit = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;

        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':  'Table_4',
                    'sector':'transport_land',
                    'com_data': {
                        'district':  $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                   'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.transport_land.Table_4, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.dlRoadBrdgs = data;
                        console.log($scope.dlRoadBrdgs);
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
		if(form.$valid) {
			$http({
				method: "POST",
				url: '/dl_fetch_edit_data',
				data: angular.toJson({
					'table_name': 'Table_4',
					'sector': 'transport_land',
					'com_data': {
						'district': $scope.district.district__id,
						'incident': $scope.incident,
					},
					'is_edit': $scope.is_edit
				}),
			}).success(function(data) {
				var edit_data_not_found = false;
				if(data != null) {
					angular.forEach(data.transport_land.Table_4, function(value, index) {
						console.log(value);
						if(value.length == 0) {
							edit_data_not_found = true;
						}
					})
					if(edit_data_not_found != true) {
						$scope.dlRoadBrdgs = data;
						console.log($scope.dlRoadBrdgs);
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
		$scope.dlRoadBrdgs = init_data;
		location.reload();
	}

    $scope.calTotal = function(arr) {
        var finaltotal = 0;
        console.log(arr);
        angular.forEach(arr, function(value, key) {
            if((value.type_bridges != 'Total') && (value.type_culverts != 'Total') && (value.type_retain_walls != 'Total') &&
                    (value.type_drains !='Total') && (value.type_drains !='TOTAL DAMAGES')) {
                console.log(value);
                finaltotal = finaltotal + value.damages ;
            }
        })
        console.log(finaltotal);
        return finaltotal;
    }

    $scope.calGrandTotal = function() {
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;
        var finaltotal4 = 0;
        var finaltotal5 = 0;
        var grantot = 0;

        var array1=$scope.dlRoadBrdgs.transport_land.Table_4.DlRbdRclassification;
        var array2 =$scope.dlRoadBrdgs.transport_land.Table_4.DlRbdTbridges;
        var array3 =$scope.dlRoadBrdgs.transport_land.Table_4.DlRbdTculverts;
        var array4 =$scope.dlRoadBrdgs.transport_land.Table_4.DlRbdTrwalls;
        var array5 =$scope.dlRoadBrdgs.transport_land.Table_4.DlRbdTdrains;

        angular.forEach(array1, function(value, key) {
            if(value.road_classification != 'Total') {
                finaltotal1 = finaltotal1 + value.damages ;
            }
        })

        angular.forEach(array2, function(value, key) {
            if(value.type_bridges != 'Total') {
                finaltotal2 = finaltotal2 + value.damages ;
            }
        })

        angular.forEach(array3, function(value, key) {
            if(value.type_culverts != 'Total') {
                finaltotal3 = finaltotal3 + value.damages ;
            }
        })

        angular.forEach(array4, function(value, key) {
            if(value.type_retain_walls != 'Total') {
                finaltotal4 = finaltotal4 + value.damages ;
            }
        })

        angular.forEach(array5, function(value, key) {
            if(value.type_drains != 'Total') {
                finaltotal5 = finaltotal5 + value.damages ;
            }
        })
        grantot = grantot + finaltotal1+ finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5;
        return grantot;
    }

    $scope.calTot = function() {
        var finaltotal1 = 0;
        var grantot = 0;
        var array1=$scope.dlRoadBrdgs.transport_land.Table_4.DlRbdRclassification;

        angular.forEach(array1, function(value, key) {
            if(value.road_classification != 'Total') {
                finaltotal1 = finaltotal1 + value.damages ;
            }
        })

        grantot = finaltotal1;
        return grantot;
    }

    //clear Function
    $scope.clear = function() {
		console.log("clear")
		$scope.is_edit = false;
		$scope.dlRoadBrdgs = angular.copy(init_data);
		location.reload();
	}
});
