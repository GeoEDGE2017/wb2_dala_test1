//Table 6
var app = angular.module('dlInvsmntLosApp', [])
app.controller('dlInvsmntLosController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.is_null = false;
    $scope.currentBaselineDate = null;
    $scope.user_id;

//Initialize Data
    var init_data = {
        'agri_agrarian': {
            'Table_6': {
                //Tab 1
                'DildSeasonalCrops': [{
                    seasonal_crops : 'Rice',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }, {
                    seasonal_crops : 'Maize',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }, {
                    seasonal_crops : 'Vegetables',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }, {
                    seasonal_crops : 'Floriculture crops',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }, {
                    seasonal_crops : 'Total',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }],
                'DildPlantnCrops': [{
                    plantn_crops : 'Coconut',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    plantn_crops : 'Tea',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    plantn_crops : 'Rubber',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    plantn_crops : 'Total',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }],
                'DildExportCrops': [{
                    export_crops : 'Coffee',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    export_crops : 'Fruit trees',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    export_crops : 'Cinnamon',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    export_crops : 'Total',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }],
                'DildForestry': [{
                    forestry : 'Timber',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    forestry : 'Total',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                },{
                    forestry : 'GRAND TOTAL',
                    new_plant_pub : null,
                    new_plant_pvt : null,
                    mid_stage_pub : null,
                    mid_stage_pvt : null,
                    harvest_stage_pub : null,
                    harvest_stage_pvt : null,
                    invest_los_pub : null,
                    invest_los_pvt : null,
                }],
            }
        }
    }

    $scope.dlInvsmntLos = angular.copy(init_data);

//Get Districts and Related Baseline Data
    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }

        if($scope.incident && $scope.district ) {
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BacfSeasonalCrops', 'BacfPlantnCrops', 'BacfExportCrops', 'BacfForestry'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        'user_id' : $scope.user_id,
                    },
                    'table_name': 'Table_2',
                    'sector':'agri_agrarian',
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
                            'table_name': 'Table_2',
                            'sector': 'agri_agrarian'
                        }),
                        dataType: 'json',
                    }).then(function successCallback(response) {
                        var result = response.data;
                        if(result == null) {
                            $("#modal-container-239458").modal('show');
                        }
                        else {
                            result = result.replace(/^"(.*)"$/, '$1');
                            $scope.currentBaselineDate = "Latest baseline data as at " + result;
                        }
                    });
                }
            }, function errorCallback(response) {

            });
        }
    }

//Generate Fields according to basline Data
    function generateRefencedData() {
        data_array = ['BacfSeasonalCrops', 'BacfPlantnCrops', 'BacfExportCrops', 'BacfForestry'];
            var dl_model1 = null;
            var dl_model2 = null;
            var dl_model3 = null;
            var dl_model4 = null;

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;
            var particular_value_2 = null;
            var particular_value_3 = null;
            var particular_value_4 = null;


            if(model_name == 'BacfSeasonalCrops') {
               dl_model1 = 'DildSeasonalCrops';
               particular_value_1 = 'Total';
               $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model1] = [];
            }
            if(model_name == 'BacfPlantnCrops') {
               dl_model2 = 'DildPlantnCrops';
               particular_value_2 = 'Total';
               $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model2] = [];
            }
            if(model_name == 'BacfExportCrops') {
               dl_model3 = 'DildExportCrops';
               particular_value_3 = 'Total';
               $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model3] = [];
            }
            if(model_name == 'BacfForestry') {
               dl_model4 = 'DildForestry';
               particular_value_4 = 'Total';
               $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model4] = [];
            }

            var obj1 = {
                seasonal_crops : particular_value_1,
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            };
            var obj2 = {
                plantn_crops : particular_value_2,
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            };
            var obj3 = {
                export_crops : particular_value_3,
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            };
            var obj4 = {
                forestry : particular_value_4,
                avg_value : null,
                productn_pub : null,
                productn_pvt : null,
                productn_cost_nplanted : null,
                productn_cost_mstage : null,
                productn_cost_hstage : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    seasonal_crops : value.fields.seasonal_crops,
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                };
                var obj2 = {
                    plantn_crops : value.fields.plantn_crops,
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                };
                var obj3 = {
                    export_crops : value.fields.export_crops,
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                };
                var obj4 = {
                    forestry : value.fields.forestry,
                    avg_value : null,
                    productn_pub : null,
                    productn_pvt : null,
                    productn_cost_nplanted : null,
                    productn_cost_mstage : null,
                    productn_cost_hstage : null,
                };

                if(model_name == 'BacfSeasonalCrops') {
                   $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model1].push(obj1);
                }
                if(model_name == 'BacfPlantnCrops') {
                   $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model2].push(obj2);
                }
                if(model_name == 'BacfExportCrops') {
                   $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model3].push(obj3);
                }
                if(model_name == 'BacfForestry') {
                   $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model4].push(obj4);
                }
            });

            if(model_name == 'BacfSeasonalCrops') {
                $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model1].push(obj1);
            }
            if(model_name == 'BacfPlantnCrops') {

                $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model2].push(obj2);
            }
            if(model_name == 'BacfExportCrops') {

                $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model3].push(obj3);
            }
            if(model_name == 'BacfForestry') {
                $scope.dlInvsmntLos.agri_agrarian.Table_6[dl_model4].push(obj4);
            }
        });
    }

//Save Data
    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
           $http({
                method: 'POST',
                url: '/dl_save_data',
               contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlInvsmntLos,
                    'com_data': {
                       'district_id': $scope.district.district__id,
                        'incident_id' : $scope.incident,
                        'user_id' : $scope.user_id,
                    },
                    'is_edit':$scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False')
                   {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
               else
                    $("#modal-container-239453").modal('show');
            }, function errorCallback(response) {
                console.log(response);
            });

        }
    }

//Edit data
    $scope.dlDataEdit = function(form){

   $scope.is_edit = true;
   $scope.submitted = true;

    $http({
    method: "POST",
    url: '/dl_fetch_edit_data',
    data: angular.toJson({
    'table_name':  'Table_6',
    'sector':'agri_agrarian',
    'com_data': {
           'district':  $scope.district.district__id,
            'incident': $scope.incident,
          },
           'is_edit':$scope.is_edit
           }),
    }).success(function(data) {

    console.log(data);


    $scope.dlInvsmntLos = data;
    })

}

//Cancel Data
    $scope.cancelEdit = function(){
     $scope.is_edit = false;
     $scope.dlInvsmntLos = init_data;
}

//Calculate Public Total
    $scope.calPubTotal=function(arr){
    var finaltotal = 0;
     console.log(arr);
    angular.forEach(arr, function(value, key) {
    if(value.seasonal_crops !='Total' && value.plantn_crops !='Total' && value.export_crops !='Total' && value.forestry !='Total'){
     finaltotal = finaltotal + value.invest_los_pub ;
     }
    })
      console.log(finaltotal);
    return finaltotal;
    }

//Calculate Private Total
    $scope.calPvtTotal=function(arr){
    var finaltotal = 0;
     console.log(arr);
    angular.forEach(arr, function(value, key) {
if(value.seasonal_crops !='Total' && value.plantn_crops !='Total' && value.export_crops !='Total' && value.forestry !='Total'){
     finaltotal = finaltotal + value.invest_los_pvt ;
     }
    })
      console.log(finaltotal);
    return finaltotal;
    }

//Calculate Grand Public Total
    $scope.calGrandPubTotal=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;
    var finaltotal4 = 0;

    var grantot = 0;

    var array1=$scope.dlInvsmntLos.agri_agrarian.Table_6.DildSeasonalCrops;
    var array2 =$scope.dlInvsmntLos.agri_agrarian.Table_6.DildSeasonalCrops;
    var array3 =$scope.dlInvsmntLos.agri_agrarian.Table_6.DildPlantnCrops;
    var array4 =$scope.dlInvsmntLos.agri_agrarian.Table_6.DildExportCrops;


    angular.forEach(array1, function(value, key) {

     finaltotal1 = finaltotal1 + value.invest_los_pub ;
    })
    angular.forEach(array2, function(value, key) {

     finaltotal2 = finaltotal2 + value.invest_los_pub ;
    })
    angular.forEach(array3, function(value, key) {

     finaltotal3 = finaltotal3 + value.invest_los_pub ;
    })
    angular.forEach(array4, function(value, key) {

     finaltotal4 = finaltotal4 + value.invest_los_pub ;
    })

    grantot = grantot + finaltotal1+ finaltotal2 + finaltotal3 + finaltotal4 ;
    return grantot;
    }

//Calculate Gardn Private Total
    $scope.calGrandPvtTotal=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;
    var finaltotal4 = 0;

    var grantot = 0;

    var array1=$scope.dlInvsmntLos.agri_agrarian.Table_6.DildSeasonalCrops;
    var array2 =$scope.dlInvsmntLos.agri_agrarian.Table_6.DildSeasonalCrops;
    var array3 =$scope.dlInvsmntLos.agri_agrarian.Table_6.DildPlantnCrops;
    var array4 =$scope.dlInvsmntLos.agri_agrarian.Table_6.DildExportCrops;


    angular.forEach(array1, function(value, key) {

     finaltotal1 = finaltotal1 + value.invest_los_pvt ;
    })
    angular.forEach(array2, function(value, key) {

     finaltotal2 = finaltotal2 + value.invest_los_pvt ;
    })
    angular.forEach(array3, function(value, key) {

     finaltotal3 = finaltotal3 + value.invest_los_pvt ;
    })
    angular.forEach(array4, function(value, key) {

     finaltotal4 = finaltotal4 + value.invest_los_pvt ;
    })

    grantot = grantot + finaltotal1+ finaltotal2 + finaltotal3 + finaltotal4 ;
    return grantot;
    }

//Clear Function
    $scope.clear = function() {
        console.log('done');
        $scope.is_edit = false;
        $scope.dlInvsmntLos = angular.copy(init_data);
    }
}]);
