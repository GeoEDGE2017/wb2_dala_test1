//Table 3
var app = angular.module('dlAssmntHusingApp', [])

app.controller('dlAssmntHusingController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    var finaltotal = 0;
    $scope.is_null = false;
    $scope.grantot = 0;
    $scope.is_edit_disable = false;
    $scope.currentBaselineDate = null;
    $scope.user_id;
    $scope.check_search = false;
    $scope.is_search = false;
    $scope.bsCreatedeDate;


    //initialize Data
    var init_data = {
        'housing': {
            'Table_3': {
                //Tab 1
                'DlDesPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'More than 5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlDesSemiPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlDesImprovised': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }],
                //Tab 2
                'DlPdesPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'More than 5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlPdesSemiPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlPdesImprovised': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }],
                //Tab 3
                'DlLosPermanent': [{
                    assets : '1 floor',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'More than 5 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'Total',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }],
                'DlLosSemiPermanent': [{
                    assets : '1 floor',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'Total',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }],
                'DlLosImprovised':[{
                    assets : '1 floor',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'Total',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }],
            }
        }
    }

    $scope.dlAssmntHusing = angular.copy(init_data);

    //Get Districts and Related baseline data
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
                    'db_tables':
                    ['BhClfPermanent',
                    'BhClfSmiPermanent',
                    'BhClfImprovised',
                    'BhClfPermanentCost',
                    'BhClfImprovisedCost',
                    'BhClfSmiPermanentCost'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_1',
                    'sector':'housing',
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
                            'table_name': 'Table_1',
                            'sector': 'housing'
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
        if(form.$valid) {
            $scope.submitted = true;
            $http({
                method: 'POST',
                url:'/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlAssmntHusing,
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

    //Calculate Total
    $scope.calTotal=function(arr,property){
        var finaltotal = 0;
        angular.forEach(arr, function(value, key) {
            if(value.assets !='Total'){
                finaltotal = finaltotal + value[property] ;
            }
        })
        return finaltotal;
    }

    $scope.threeInputconvertToInt = function(val1,val2,val3){
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

    $scope.twoInputconvertToInt = function(val1,val2,val3){
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

    //Calculate Total function
    $scope.calTotTotal=function(){
    var finaltotal1 = null;
    var finaltotal2 = null;
    var finaltotal3 = null;

    var array1=$scope.dlAssmntHusing.housing.Table_3.DlDesPermanent;
    var array2 =$scope.dlAssmntHusing.housing.Table_3.DlDesSemiPermanent;
    var array3 =$scope.dlAssmntHusing.housing.Table_3.DlDesImprovised;

    angular.forEach(array1, function(value, key) {
         if(value.assets !='Total'){
             finaltotal1 = parseInt(finaltotal1 + value.tot_num_houses) ;
         }
    })
    angular.forEach(array2, function(value, key) {
         if(value.assets !='Total'){
             finaltotal2 = parseInt(finaltotal2 + value.tot_num_houses) ;
         }
    })
    angular.forEach(array3, function(value, key) {
         if(value.assets !='Total'){
             finaltotal3 = parseInt(finaltotal3 + value.tot_num_houses) ;
         }
    })
    grantot = $scope.grantot + $scope.threeInputconvertToInt(finaltotal1,finaltotal2 , finaltotal3);
    return grantot;
    }

    //Calculate Loss Total
    $scope.calLosTotTotal=function(arr,property){
        var finaltotal = 0;
        console.log('test',arr);
        angular.forEach(arr, function(value, key) {
            finaltotal = finaltotal + value[property] ;
        })
          console.log('test',finaltotal);
        return finaltotal;
     }

    //Calculate Grand Total
    $scope.calGrandTotal=function(){
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;
        var array1=$scope.dlAssmntHusing.housing.Table_3.DlDesPermanent;
        var array2 =$scope.dlAssmntHusing.housing.Table_3.DlDesSemiPermanent;
        var array3 =$scope.dlAssmntHusing.housing.Table_3.DlDesImprovised;


        angular.forEach(array1, function(value, key) {
            if(value.assets =='Total'){
                finaltotal1 = finaltotal1 + value.damages ;
            }
        })
        angular.forEach(array2, function(value, key) {
            if(value.assets =='Total'){
                finaltotal2 = finaltotal2 + value.damages ;
            }
        })
        angular.forEach(array3, function(value, key) {
            if(value.assets =='Total'){
                 finaltotal3 = finaltotal3 + value.damages ;
             }
        })
        grantot = $scope.grantot + $scope.threeInputconvertToInt(finaltotal1,finaltotal2,finaltotal3);
        return grantot;
    }

    //Calculate Partial Total
    $scope.calPartialTotTotal=function(){
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;

        var grandparttot = 0;

        var array1=$scope.dlAssmntHusing.housing.Table_3.DlPdesPermanent;
        var array2 =$scope.dlAssmntHusing.housing.Table_3.DlPdesSemiPermanent;
        var array3 =$scope.dlAssmntHusing.housing.Table_3.DlPdesImprovised;

        angular.forEach(array1, function(value, key) {
            if(value.assets !='Total'){
                finaltotal1 = finaltotal1 + value.tot_num_houses ;
            }
        })
        angular.forEach(array2, function(value, key) {
            if(value.assets !='Total'){
                finaltotal2 = finaltotal2 + value.tot_num_houses ;
            }
        })
        angular.forEach(array3, function(value, key) {
            if(value.assets !='Total'){
                finaltotal3 = finaltotal3 + value.tot_num_houses ;
            }
        })
        grandparttot = grandparttot + $scope.twoInputconvertToInt(finaltotal1, finaltotal2,finaltotal3);
        $scope.partialtot = grandparttot;
        return grandparttot;

    }

    $scope.roundOffFunc = function(val1,val2){
        var ans = Math.round(val1 * val2);
        return ans;
    }

    //Calculate Grand Partial Total
    $scope.calPartialGrandTotal=function(){
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;
        var array1=$scope.dlAssmntHusing.housing.Table_3.DlPdesPermanent;
        var array2 =$scope.dlAssmntHusing.housing.Table_3.DlPdesSemiPermanent;
        var array3 =$scope.dlAssmntHusing.housing.Table_3.DlPdesImprovised;

        angular.forEach(array1, function(value, key) {
            if(value.assets =='Total'){
                finaltotal1 = finaltotal1 + value.damages ;
            }
        })
        angular.forEach(array2, function(value, key) {
            if(value.assets =='Total'){
                finaltotal2 = finaltotal2 + value.damages ;
            }
        })
        angular.forEach(array3, function(value, key) {
            if(value.assets =='Total'){
                finaltotal3 = finaltotal3 + value.damages ;
            }
        })
        grantot = $scope.grantot + $scope.threeInputconvertToInt(finaltotal1 ,finaltotal2 ,finaltotal3);
        return grantot;
    }

    //Edit Data
    $scope.dlDataEdit = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;
          document.getElementById("clearbtn").disabled = true;
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':'Table_3',
                    'sector':'housing',
                    'com_data': {
                            'district_id':  $scope.district.district__id,
                            'incident': $scope.incident,
                    },
                    'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                console.log(data);
                $scope.dlAssmntHusing = data;
            })
    }

    //Search Data
    $scope.searchDlData = function(form){
        document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		console.log("test", $scope.district);
		console.log("test", $scope.bs_date);
		$scope.is_search = true;
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':'Table_3',
                    'sector':'housing',
                    'com_data': {
                            'district_id':  $scope.district.district__id,
                            'incident': $scope.incident,
                    },
                    'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                console.log(data);
                $scope.dlAssmntHusing = data;
            })
    }

    //Cancel Edit
    $scope.cancelEdit = function(){
       $scope.is_edit = false;
        $scope.dlAssmntHusing = init_data;
        location.reload();
     }

    //Clear Function
    $scope.clear = function() {
        console.log('done');
        $scope.is_edit = false;
        $scope.dlAssmntHusing = angular.copy(init_data);
        location.reload();
    }

    //Calculate  Total Destroyed
    $scope.calTotDestroyed=function(){
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;

        var grandparttot = 0;

        var array1=$scope.dlAssmntHusing.housing.Table_3.DlLosPermanent;
        var array2 =$scope.dlAssmntHusing.housing.Table_3.DlLosSemiPermanent;
        var array3 =$scope.dlAssmntHusing.housing.Table_3.DlLosImprovised;

        angular.forEach(array1, function(value, key) {
            if(value.assets !='Total'){
                finaltotal1 = finaltotal1 + value.tot_num_des_houses ;
            }
        })
        angular.forEach(array2, function(value, key) {
            if(value.assets !='Total'){
                finaltotal2 = finaltotal2 + value.tot_num_des_houses ;
            }
        })
        angular.forEach(array3, function(value, key) {
            if(value.assets !='Total'){
                finaltotal3 = finaltotal3 + value.tot_num_des_houses ;
            }
        })
        console.log("printing",finaltotal1 ,finaltotal2,finaltotal3);
        grandparttot = $scope.twoInputconvertToInt(finaltotal1, finaltotal2,finaltotal3);
        $scope.partialtot = grandparttot;
        return grandparttot;

    }

     //Calculate Partial Total
    $scope.calTotPartial=function(){
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;

        var grandparttot = 0;

        var array1=$scope.dlAssmntHusing.housing.Table_3.DlLosPermanent;
        var array2 =$scope.dlAssmntHusing.housing.Table_3.DlLosSemiPermanent;
        var array3 =$scope.dlAssmntHusing.housing.Table_3.DlLosImprovised;

        angular.forEach(array1, function(value, key) {
            if(value.assets !='Total'){
                finaltotal1 = finaltotal1 + value.tot_num_dmg_houses ;
            }
        })
        angular.forEach(array2, function(value, key) {
            if(value.assets !='Total'){
                finaltotal2 = finaltotal2 + value.tot_num_dmg_houses ;
            }
        })
        angular.forEach(array3, function(value, key) {
            if(value.assets !='Total'){
                finaltotal3 = finaltotal3 + value.tot_num_dmg_houses ;
            }
        })
        console.log("printing",finaltotal1 ,finaltotal2,finaltotal3);
        grandparttot = $scope.twoInputconvertToInt(finaltotal1, finaltotal2,finaltotal3);
        $scope.partialtot = grandparttot;
        return grandparttot;

    }

    $scope.calTotForeign=function(){
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;

        var grandparttot = 0;

        var array1=$scope.dlAssmntHusing.housing.Table_3.DlLosPermanent;
        var array2 =$scope.dlAssmntHusing.housing.Table_3.DlLosSemiPermanent;
        var array3 =$scope.dlAssmntHusing.housing.Table_3.DlLosImprovised;

        angular.forEach(array1, function(value, key) {
            if(value.assets !='Total'){
                finaltotal1 = finaltotal1 + value.frg_income ;
            }
        })
        angular.forEach(array2, function(value, key) {
            if(value.assets !='Total'){
                finaltotal2 = finaltotal2 + value.frg_income ;
            }
        })
        angular.forEach(array3, function(value, key) {
            if(value.assets !='Total'){
                finaltotal3 = finaltotal3 + value.frg_income ;
            }
        })
        console.log("printing",finaltotal1 ,finaltotal2,finaltotal3);
        grandparttot = $scope.twoInputconvertToInt(finaltotal1, finaltotal2,finaltotal3);
        $scope.partialtot = grandparttot;
        return grandparttot;

    }

      //Calculate grand loss Total
    $scope.calTotLossValue=function(){
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;

        var grandparttot = 0;

        var array1=$scope.dlAssmntHusing.housing.Table_3.DlLosPermanent;
        var array2 =$scope.dlAssmntHusing.housing.Table_3.DlLosSemiPermanent;
        var array3 =$scope.dlAssmntHusing.housing.Table_3.DlLosImprovised;

        angular.forEach(array1, function(value, key) {
            if(value.assets !='Total'){
                finaltotal1 = finaltotal1 + value.losses ;
            }
        })
        angular.forEach(array2, function(value, key) {
            if(value.assets !='Total'){
                finaltotal2 = finaltotal2 + value.losses ;
            }
        })
        angular.forEach(array3, function(value, key) {
            if(value.assets !='Total'){
                finaltotal3 = finaltotal3 + value.losses ;
            }
        })
        console.log("printing",finaltotal1 ,finaltotal2,finaltotal3);
        grandparttot = $scope.twoInputconvertToInt(finaltotal1, finaltotal2,finaltotal3);
        $scope.partialtot = grandparttot;
        return grandparttot;

    }


}]);
