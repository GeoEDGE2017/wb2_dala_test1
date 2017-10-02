//Table 3
var app = angular.module('dlPowSupPrivateApp', [])

app.controller('DlPowSupCebAppController',  function($scope, $http) {
    $scope.district;
    $scope.incident;
    $scope.dlDate;
    $scope.ownership;
    $scope.is_edit = false;
    $scope.data;
    $scope.pvtPwProducers;
    $scope.lossTotals = [];
    $scope.is_null = false;
    $scope.user_id;
    $scope.check_search = false;
    $scope.is_search = false;
    $scope.bsCreatedeDate;


    $scope.newPvtPwProducer = {
        'name':null,
    }

    $scope.pvtPwProducerTypes = [];
    $scope.pvtPwProducerType = null;

    $scope.selectedProducer;

    //Initalize Data
    var init_data = {
        'power_supply': {
            'Table_3': {
                'PvtNumEmp': [{
                    'num_male':null,
                    'num_female':null,
                    'tot_emp':null,
                 }],
                'PvtDmgAst': [{
                    'assets':'Total',
                    'num_dst_ast':null,
                    'tot_replace_cost':null,
                    'num_pdmg_ast':null,
                    'tot_repair_cost':null,
                    'tot_damaged_cost':null,
                }, {
                    'assets':'Power generation equipment',
                    'num_dst_ast':null,
                    'tot_replace_cost':null,
                    'num_pdmg_ast':null,
                    'tot_repair_cost':null,
                    'tot_damaged_cost':null,
                }, {
                    'assets':'Machinery',
                    'num_dst_ast':null,
                    'tot_replace_cost':null,
                    'num_pdmg_ast':null,
                    'tot_repair_cost':null,
                    'tot_damaged_cost':null,
                }, {
                    'assets':'Structures',
                    'num_dst_ast':null,
                    'tot_replace_cost':null,
                    'num_pdmg_ast':null,
                    'tot_repair_cost':null,
                    'tot_damaged_cost':null,
                }, {
                    'assets':'Office equipment',
                    'num_dst_ast':null,
                    'tot_replace_cost':null,
                    'num_pdmg_ast':null,
                    'tot_repair_cost':null,
                    'tot_damaged_cost':null,
                }, {
                    'assets':'Vehicles',
                    'num_dst_ast':null,
                    'tot_replace_cost':null,
                    'num_pdmg_ast':null,
                    'tot_repair_cost':null,
                    'tot_damaged_cost':null,
                }, {
                    'assets':'Others',
                    'num_dst_ast':null,
                    'tot_replace_cost':null,
                    'num_pdmg_ast':null,
                    'tot_repair_cost':null,
                    'tot_damaged_cost':null,
                }],
                'PvtDmgLosses': [{
                    'losses_type':'Total',
                    'los_year1':null,
                    'los_year2':null,
                }, {
                    'losses_type':'Income Losses',
                    'los_year1':null,
                    'los_year2':null,
                }, {
                    'losses_type':'Cleaning costs',
                    'los_year1':null,
                    'los_year2':null,
                }, {
                    'losses_type':'Higher operating costs',
                    'los_year1':null,
                    'los_year2':null,
                }, {
                    'losses_type':'Other unexpected expenses',
                    'los_year1':null,
                    'los_year2':null,
                }],
            }
        }
    }

    //Get Districts and Related Baseline Data
    $scope.changedValue = function (selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user':$scope.user_id,
                }),
            }).success(function(response) {
                $scope.districts = response;
                $scope.selectedDistrict = "";

            }, function errorCallback(response) {

            });

        }

        if($scope.incident && $scope.district && $scope.district.district__id) {
            $scope.loadIPP_SPP();


        }
         if($scope.incident && $scope.district){
            $scope.is_edit_disable = true;
            $scope.check_search = true;
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BsPwGenFirm'],
                    'com_data': {
                        'district':$scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_1',
                    'sector':'power_supply',
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                console.log('*', response);
//
//                    angular.forEach(data, function(value, key) {
//                    //$scope.bs_data[key] = JSON.parse(value);
//                   console.log('**', $scope.bs_data[key]);
//                });


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
                            'table_name': 'Table_1',
                            'sector': 'power_supply'
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

            });
        }

        console.log("district", $scope.district);
    }

    //Clear Function
    $scope.clear = function(){
        $scope.is_edit = false;
        $scope.data = angular.copy(init_data);
        $scope.is_search=false;

    }



    //Load Data IPP_SPP
    $scope.loadIPP_SPP = function(){
        if($scope.district){
            $http({
                method: "POST",
                url: "/fetch_pw_gen_firms",
                data: angular.toJson({
                    'district':  $scope.district.district__id,
                    'model': 'BsPwGenFirm',
                    'sector':'power_supply'
                }),
            }).success(function(data) {
                console.log("bs_pw_gen_firm", data);
                $scope.pvtPwProducers = data;
            })
        }
    }

    //Load Data IPP_SPP_types
    $scope.loadIPP_SPP_types = function(){
        $http({
            method: "POST",
            url: "/fetch_entities_plain",
            data: angular.toJson({
                'model': 'PvtPwPrdTypes',
                'sector':'power_supply'
            }),
        }).success(function(data) {
            console.log(data);
            $scope.pvtPwProducerTypes = data;
        })
    }

    //Save Data
    $scope.savePvtPwProducers = function() {
        if($scope.newPvtPwProducer.name && $scope.district) {
            var new_prod = {
                'name': $scope.newPvtPwProducer.name,
                'district': $scope.district.district__id,
            }

            $http({
                method: "POST",
                url: "/add_entity",
                data: angular.toJson({
                    'model_fields': $scope.newPvtPwProducer,
                    'is_edit' : false,
                    'model': 'PvtPwProducers',
                    'sector': 'power_supply',
                }),
            }).success(function(data) {
                console.log(data);
            })
        }
        else {
            console.log("invalid", $scope.newPvtPwProducer , $scope.district)
        }
    }

    //Get Total
    $scope.getSum2 = function(val1, val2) {
        var final_val = 0;
        if(!isNaN(val1)) final_val += val1;
        if(!isNaN(val2)) final_val += val2;

        return final_val;
    }

    //Get Total
    $scope.getSum3 = function(val1, val2, val3) {
        var final_val = 0;
        if(!isNaN(val1)) final_val += val1;
        if(!isNaN(val2)) final_val += val2;
        if(!isNaN(val3)) final_val += val3;

        return final_val;
    }

    //Get Column Total
    $scope.getTotalCol = function(subTable, column, total_object) {
        var table = $scope.data.power_supply.Table_3;
        var final_total = 0;

        total_object[column] = 0;

        angular.forEach(table[subTable], function(value, key) {
            final_total += value[column] ;
        })

        return final_total;
    }

    //Save Data
    $scope.saveDlData = function(form) {
        console.log($scope.selectedType);
        $scope.submitted = true;

        if (form.$valid) {
            $http({
                method: 'POST',
                url: '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.data,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                        'pw_gen_firm_id' : $scope.selectedProducer.id,
                        'user_id': $scope.user_id,
                    },
                    'bs_date': $scope.bsCreatedeDate,
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).success(function(data) {
                console.log(data);
                $scope.clear();
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
    }

    //Edit Data
    $scope.dataEdit = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        document.getElementById("clearbtn").disabled = true;
        if (form.$valid) {
            if($scope.district && $scope.incident && $scope.selectedProducer ) {
                $http({
                    method: "POST",
                    url: '/dl_fetch_edit_data',
                    data: angular.toJson({
                        'table_name': 'Table_3',
                        'sector': 'power_supply',
                        'com_data': {
                            'district': $scope.district.district__id,
                            'incident': $scope.incident,
                            'pw_gen_firm' : $scope.selectedProducer.id,
    //                        'pvt_pw_producer': $scope.selectedProducer.id,
                        }
                    }),
                }).success(function(data) {
                    console.log("edit", data);
                    // handling response from server if data are not available in this
                    if((data.power_supply.Table_3.PvtDmgAst.length == 0) || (data.power_supply.Table_3.PvtDmgLosses.length == 0) || (data.power_supply.Table_3.PvtNumEmp.length == 0)) {
                        $scope.is_edit = false;
                            // do nothing or display msg that data are not available
                    }
                    else {
                        $scope.data = data;
                    }
                })
            }
        }
//        else {
//            alert("enter Incident, District, Firm, ownership, Type")
//        }
    }

     //Search Data
    $scope.searchDlData = function(form) {
        document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		console.log("test", $scope.district);
		console.log("test", $scope.bs_date);
		$scope.is_search = true;
        if (form.$valid) {
            if($scope.district && $scope.incident && $scope.selectedProducer ) {
                $http({
                    method: "POST",
                    url: '/dl_fetch_edit_data',
                    data: angular.toJson({
                        'table_name': 'Table_3',
                        'sector': 'power_supply',
                        'com_data': {
                            'district': $scope.district.district__id,
                            'incident': $scope.incident,
                            'pw_gen_firm' : $scope.selectedProducer.id,
    //                        'pvt_pw_producer': $scope.selectedProducer.id,
                        }
                    }),
                }).success(function(data) {
                    console.log("edit", data);
                    // handling response from server if data are not available in this
                    if((data.power_supply.Table_3.PvtDmgAst.length == 0) || (data.power_supply.Table_3.PvtDmgLosses.length == 0) || (data.power_supply.Table_3.PvtNumEmp.length == 0)) {
                        $scope.is_edit = false;
                            // do nothing or display msg that data are not available
                    }
                    else {
                        $scope.data = data;
                    }
                })
            }
        }
//        else {
//            alert("enter Incident, District, Firm, ownership, Type")
//        }
    }

    $scope.cancelEdit = function(){
        $scope.is_edit = false;
        $scope.clear();
    }

    //Call Functions
    $scope.loadIPP_SPP_types();
    $scope.clear();

})
