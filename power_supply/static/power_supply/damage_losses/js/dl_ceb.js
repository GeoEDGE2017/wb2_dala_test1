//Table 2
var app = angular.module('dlPowSupCebApp', [])

app.controller('DlPowSupCebAppController',  function($scope, $http) {
    $scope.district;
    $scope.incident;
    $scope.bs_data=[];
    $scope.dl_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.is_valid_data = true;
    $scope.is_null = false;
    $scope.is_edit_disable = false;
    $scope.check_search = false;
    $scope.is_search = false;
    $scope.bsCreatedeDate;

    //Initialize model
    var init_data = {
        'power_supply': {
            'Table_2': {
                'CebNumEmp': [{
                    num_male : null,
                    num_female: null,
                }],
                'CebNumCusAff': [{
                    num_domestic : null,
                    num_industrial : null,
                    num_commercial : null,
                    num_other : null,
                    num_total : null,
                }],
                'CebDmgAstGeneration': [{
                    assets : 'Dams',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Tunnels',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Turbines',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Generators',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Control systems',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Others',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Total',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }],
                'CebDmgAstTransmision': [{
                    assets : 'High-voltage power lines ',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Grid substations',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Control centers',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                },
                 {
                    assets : 'Others',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                },{
                    assets : 'Total',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }],
                'CebDmgAstDistribution': [{
                    assets : 'MV Line (Km)',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'LV Lines (Km)',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Primary sub stations',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Distribution sub stations',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Control centers',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Total',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }],
                'CebDmgAstStructures': [{
                    assets : 'Office buildings',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Storage buildings',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Access roads (Km)',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Others',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Total',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }],
                 'CebDmgAstOffEquipment': [{
                    assets : 'Computers',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Air conditioners',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Others',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Total',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }],
                'CebDmgAstOther': [{
                    assets : 'Equipment/machinery',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Tools',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'Others',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }, {
                    assets : 'GRAND TOTAL',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg: null,
                }],
                'CebLosAstIncome': [{
                    assets : 'Income Losses',
                    avg_income : null,
                    reduction_y1 : null,
                    reduction_y2 : null,
                    losses_y1 : null,
                    losses_y2 : null,
                    tot_losses : null,
                }],
                 'CebLosAstOther': [{
                    assets : 'Cleaning costs',
                    avg_income : null,
                    reduction_y1 : null,
                    reduction_y2 : null,
                    losses_y1 : null,
                    losses_y2 : null,
                    tot_losses : null,
                }, {
                    assets : 'Higher operating costs',
                    avg_income : null,
                    reduction_y1 : null,
                    reduction_y2 : null,
                    losses_y1 : null,
                    losses_y2 : null,
                    tot_losses : null,
                }, {
                    assets : 'Other unexpected expenses',
                    avg_income : null,
                    reduction_y1 : null,
                    reduction_y2 : null,
                    losses_y1 : null,
                    losses_y2 : null,
                    tot_losses : null,
                }, {
                    assets : 'TOTAL',
                    avg_income : null,
                    reduction_y1 : null,
                    reduction_y2 : null,
                    losses_y1 : null,
                    losses_y2 : null,
                    tot_losses : null,
                }]
            }
        }
    }

    $scope.dlPowSupCeb = angular.copy(init_data);

    //Get Districts and related basline Data
    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user':$scope.user_id,
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
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
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_1',
                    'sector':'power_supply',
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                console.log('*', response);

                    angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
//                     console.log('**', $scope.bs_data[key][0].fields.avg_income);
                });


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
    }

    //Save Data
    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: 'POST',
                url:'/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlPowSupCeb,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                        'user_id': $scope.user_id,
                    },
                    'bs_date': $scope.bsCreatedeDate,
                    'is_edit' : $scope.is_edit,
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

    //Edit Data
    $scope.dlDataEdit = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':  'Table_2',
                    'sector':'power_supply',
                    'com_data': {
                           'district':  $scope.district.district__id,
                            'incident': $scope.incident,
                    },
                   'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                console.log(data);
                $scope.dlPowSupCeb = data;
            })
        }
    }

     //Search Data
    $scope.searchDlData = function(form) {
        document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		console.log("test", $scope.district);
		console.log("test", $scope.bs_date);
		$scope.is_search = true;
         document.getElementById("clearbtn").disabled = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':  'Table_2',
                    'sector':'power_supply',
                    'com_data': {
                           'district':  $scope.district.district__id,
                            'incident': $scope.incident,
                    },
                   'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                console.log(data);
                $scope.dlPowSupCeb = data;
            })
        }
    }

    //Cancel Edit
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.dlPowSupCeb = init_data;
    }

    //Calculate Total
    $scope.CalTotal = function(arr,property) {
    var finaltotal = 0;
    angular.forEach(arr, function(value, key) {
     if(value.assets !='Total' && value.assets !='GRAND TOTAL' ){
         finaltotal = finaltotal + value[property] ;
     }
    })
    return finaltotal;
    }

    //Calculate Year1 Total
    $scope.CalLosYear1Total = function() {
    var finalIncometotal = 0;
    var finaltotal = 0;
    var grandTot = 0;
    var arrayincome = $scope.dlPowSupCeb.power_supply.Table_2.CebLosAstIncome;
    var arrayOther = $scope.dlPowSupCeb.power_supply.Table_2.CebLosAstOther;

    angular.forEach(arrayincome, function(value, key) {

     finalIncometotal = finalIncometotal + value.losses_y1 ;

    })
     angular.forEach(arrayOther, function(value, key) {
     if(value.assets !='TOTAL' ){
     finaltotal = finaltotal + value.losses_y1 ;
     }
    })
    grandTot = finalIncometotal + finaltotal;
    return grandTot;
    }

    //Calculate Year2 Total
    $scope.CalLosYear2Total = function() {
    var finalIncometotal = 0;
    var finaltotal = 0;
    var grandTot = 0;
    var arrayincome = $scope.dlPowSupCeb.power_supply.Table_2.CebLosAstIncome;
    var arrayOther = $scope.dlPowSupCeb.power_supply.Table_2.CebLosAstOther;


    angular.forEach(arrayincome, function(value, key) {

     finalIncometotal = finalIncometotal + value.losses_y2 ;

    })
     angular.forEach(arrayOther, function(value, key) {
     if(value.assets !='TOTAL' ){
     finaltotal = finaltotal + value.losses_y2 ;
     }
    })
    grandTot = finalIncometotal + finaltotal;
    return grandTot;
    }

    //Calculate Loss Total
    $scope.CalLosTotal = function() {
    var finalIncometotal = 0;
    var finaltotal = 0;
    var grandTot = 0;
    var arrayincome = $scope.dlPowSupCeb.power_supply.Table_2.CebLosAstIncome;
    var arrayOther = $scope.dlPowSupCeb.power_supply.Table_2.CebLosAstOther;
    angular.forEach(arrayincome, function(value, key) {
         finalIncometotal = finalIncometotal + value.tot_losses ;
    })
     angular.forEach(arrayOther, function(value, key) {
     if(value.assets !='TOTAL' ){
         finaltotal = finaltotal + value.tot_losses ;
     }
    })
    grandTot = finalIncometotal + finaltotal;
    return grandTot;
    }

    $scope.GrandTotalReplacementCost = function (){
            var finaltotal1 = 0;
            var finaltotal2 = 0;
            var finaltotal3 = 0;
            var finaltotal4 = 0;
            var finaltotal5 = 0;
            var finaltotal6 = 0;
            var grantot = 0;

            var array1 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstGeneration;
            var array2 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstTransmision;
            var array3 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstDistribution;
            var array4 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstStructures;
            var array5 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstOffEquipment;
            var array6 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstOther;


            angular.forEach(array1, function(value, key) {
            if(value.assets !="Total"){
                finaltotal1 = finaltotal1 + value.tot_replace_cost ;
                }
            })

            angular.forEach(array2, function(value, key) {
            if(value.assets !="Total"){
                finaltotal2 = finaltotal2 + value.tot_replace_cost ;
                }
            })

            angular.forEach(array3, function(value, key) {
            if(value.assets !="Total"){
                finaltotal3 = finaltotal3 + value.tot_replace_cost ;
                }
            })

            angular.forEach(array4, function(value, key) {
            if(value.assets !="Total"){
             finaltotal4 = finaltotal4 + value.tot_replace_cost ;
             }
            })
            angular.forEach(array5, function(value, key) {
            if(value.assets !="Total" ){
             finaltotal5 = finaltotal5 + value.tot_replace_cost ;
             }
            })
             angular.forEach(array6, function(value, key) {
            if(value.assets !="GRAND TOTAL"){

             finaltotal6 = finaltotal6 + value.tot_replace_cost ;
             console.log('mytest',finaltotal6);
             }
            })

            grantot = finaltotal1+ finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5 +finaltotal6 ;
            return grantot;
        }

    $scope.GrandTotalRepairCost = function (){
            var finaltotal1 = 0;
            var finaltotal2 = 0;
            var finaltotal3 = 0;
            var finaltotal4 = 0;
            var finaltotal5 = 0;
            var finaltotal6 = 0;
            var grantot = 0;

            var array1 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstGeneration;
            var array2 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstTransmision;
            var array3 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstDistribution;
            var array4 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstStructures;
            var array5 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstOffEquipment;
            var array6 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstOther;


            angular.forEach(array1, function(value, key) {
            if(value.assets !="Total"){
                finaltotal1 = finaltotal1 + value.to_repair_cost ;
                }
            })

            angular.forEach(array2, function(value, key) {
            if(value.assets !="Total"){
                finaltotal2 = finaltotal2 + value.to_repair_cost ;
                }
            })

            angular.forEach(array3, function(value, key) {
            if(value.assets !="Total"){
                finaltotal3 = finaltotal3 + value.to_repair_cost ;
                }
            })

            angular.forEach(array4, function(value, key) {
            if(value.assets !="Total"){
             finaltotal4 = finaltotal4 + value.to_repair_cost ;
             }
            })
            angular.forEach(array5, function(value, key) {
            if(value.assets !="Total"){
             finaltotal5 = finaltotal5 + value.to_repair_cost ;
             }
            })
            angular.forEach(array6, function(value, key) {
              console.log("test", value.to_repair_cost );
            if( value.assets !="GRAND TOTAL"){
                console.log("test", value.to_repair_cost );
             finaltotal6 = finaltotal6 + value.to_repair_cost ;
             }
            })

            grantot = finaltotal1+ finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5 + finaltotal6;
            return grantot;
        }

    $scope.GrandTotal = function (){
            var finaltotal1 = 0;
            var finaltotal2 = 0;
            var finaltotal3 = 0;
            var finaltotal4 = 0;
            var finaltotal5 = 0;
            var finaltotal6 = 0;
            var grantot = 0;

            var array1 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstGeneration;
            var array2 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstTransmision;
            var array3 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstDistribution;
            var array4 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstStructures;
            var array5 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstOffEquipment;
            var array6 = $scope.dlPowSupCeb.power_supply.Table_2.CebDmgAstOther;


            angular.forEach(array1, function(value, key) {
            if(value.assets !="Total"){
                finaltotal1 = finaltotal1 + value.tot_dmg ;
                }
            })

            angular.forEach(array2, function(value, key) {
            if(value.assets !="Total"){
                finaltotal2 = finaltotal2 + value.tot_dmg ;
                }
            })

            angular.forEach(array3, function(value, key) {
            if(value.assets !="Total"){
                finaltotal3 = finaltotal3 + value.tot_dmg ;
                }
            })

            angular.forEach(array4, function(value, key) {
            if(value.assets !="Total"){
             finaltotal4 = finaltotal4 + value.tot_dmg ;
             }
            })
            angular.forEach(array5, function(value, key) {
            if(value.assets !="Total"){
             finaltotal5 = finaltotal5 + value.tot_dmg ;
             }
            })
             angular.forEach(array6, function(value, key) {
            if(value.assets !="Total" && value.assets !="GRAND TOTAL"){
             finaltotal6 = finaltotal6 + value.tot_dmg ;
             }
            })

            grantot = grantot +finaltotal1+ finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5 + finaltotal6 ;
            return grantot;
        }


    //Clear Function
    $scope.clear = function() {
        console.log('clear');
        $scope.is_edit = false;
        $scope.dlPowSupCeb = angular.copy(init_data);
    }
});
