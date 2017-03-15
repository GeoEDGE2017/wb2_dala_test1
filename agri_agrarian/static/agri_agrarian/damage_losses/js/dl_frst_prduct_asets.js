//Table 4
var app = angular.module('dlFrstPrductAsetsApp', [])

app.controller('dlFrstPrductAsetsController', ['$scope', '$http', function($scope, $http) {

    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;


    var init_data = {
        'agri_agrarian': {
            'Table_4': {
                'DcpfFarmEquipment': [{
                    assets : 'Tractor',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfSeasonalCrops': [{
                    assets : 'Rice',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Maize',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Vegetables',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Floriculture crops',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfPlantnCrops': [{
                    assets : 'Coconut',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Tea',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Rubber',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfExportCrops': [{
                    assets : 'Coffee',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Fruit trees',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Cinnamon',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfForestry': [{
                    assets : 'Timber',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfOther': [{
                    assets : 'Honey',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DcpfStocks': [{
                    assets : 'Seeds',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Fertilizers',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Pesticides',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                },{
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
            }
        }
    }

    $scope.dlFrstPrductAsets = init_data;

    $scope.changedValue=function getBsData(selectedValue) {
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
                    'db_tables': ['BacfFarmEquipment','BacfSeasonalCrops', 'BacfPlantnCrops', 'BacfExportCrops', 'BacfForestry', 'BacfOther', 'BacfStocks'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_2',
                    'sector':'agri_agrarian',
                        }),
                  dataType: 'json',


            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                  $scope.bs_data[key] = JSON.parse(value);
                });
                console.log(data);
                generateRefencedData();
            }, function errorCallback(response) {

            });
        }
    }

    function generateRefencedData() {
        data_array = ['BacfFarmEquipment','BacfSeasonalCrops', 'BacfPlantnCrops', 'BacfExportCrops', 'BacfForestry', 'BacfOther', 'BacfStocks'];
            var dl_model1 = null;
            var dl_model2 = null;
            var dl_model3 = null;
            var dl_model4 = null;
            var dl_model5 = null;
            var dl_model6 = null;
            var dl_model7 = null;

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;
            var particular_value_2 = null;
            var particular_value_3 = null;
            var particular_value_4 = null;
            var particular_value_5 = null;
            var particular_value_6 = null;
            var particular_value_7 = null;

            if(model_name == 'BacfFarmEquipment') {
               dl_model1 = 'DcpfFarmEquipment';
               particular_value_1 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model1] = [];
            }
            if(model_name == 'BacfSeasonalCrops') {
               dl_model2 = 'DcpfSeasonalCrops';
               particular_value_2 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model2] = [];
            }
            if(model_name == 'BacfPlantnCrops') {
               dl_model3 = 'DcpfPlantnCrops';
               particular_value_3 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model3] = [];
            }
            if(model_name == 'BacfExportCrops') {
               dl_model4 = 'DcpfExportCrops';
               particular_value_4 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model4] = [];
            }
            if(model_name == 'BacfForestry') {
               dl_model5 = 'DcpfForestry';
               particular_value_5 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model5] = [];
            }
            if(model_name == 'BacfOther') {
               dl_model6 = 'DcpfOther';
               particular_value_6 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model6] = [];
            }
            if(model_name == 'BacfStocks') {
               dl_model7 = 'DcpfStocks';
               particular_value_7 = 'Total';
               $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model7] = [];
            }

            var obj1 = {
                assets : particular_value_1,
                avg_replace_cost : null,
                avg_repair_cost : null,
            };
            var obj2 = {
                seasonal_crops : particular_value_2,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj3 = {
                plantn_crops : particular_value_3,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj4 = {
                export_crops : particular_value_4,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj5 = {
                forestry : particular_value_5,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj6 = {
                other_products : particular_value_6,
                areas_cultivated : null,
                avg_val_land : null,
                num_families : null,
                num_male : null,
                num_female : null,
            };
            var obj7 = {
                assets : particular_value_7,
                avg_value : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    assets : value.fields.assets,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                };
                var obj2 = {
                    seasonal_crops : value.fields.seasonal_crops,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj3 = {
                    plantn_crops : value.fields.plantn_crops,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj4 = {
                    export_crops : value.fields.export_crops,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj5 = {
                    forestry : value.fields.forestry,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj6 = {
                    other_products : value.fields.other_products,
                    areas_cultivated : null,
                    avg_val_land : null,
                    num_families : null,
                    num_male : null,
                    num_female : null,
                };
                var obj7 = {
                    assets : value.fields.assets,
                    avg_value : null,
                };

                if(model_name == 'BacfFarmEquipment') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model1].push(obj1);
                }
                if(model_name == 'BacfSeasonalCrops') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model2].push(obj2);
                }
                if(model_name == 'BacfPlantnCrops') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model3].push(obj3);
                }
                if(model_name == 'BacfExportCrops') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model4].push(obj4);
                }
                if(model_name == 'BacfForestry') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model5].push(obj5);
                }
                if(model_name == 'BacfOther') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model6].push(obj6);
                }
                if(model_name == 'BacfStocks') {
                    $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model7].push(obj7);
                }

            });

            if(model_name == 'BacfFarmEquipment') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model1].push(obj1);
            }
            if(model_name == 'BacfSeasonalCrops') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model2].push(obj2);
            }
            if(model_name == 'BacfPlantnCrops') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model3].push(obj3);
            }
            if(model_name == 'BacfExportCrops') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model4].push(obj4);
            }
            if(model_name == 'BacfForestry') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model5].push(obj5);
            }
            if(model_name == 'BacfOther') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model6].push(obj6);
            }
            if(model_name == 'BacfStocks') {
                $scope.dlFrstPrductAsets.agri_agrarian.Table_4[dl_model7].push(obj7);
            }
        });
    }

    $scope.saveDlData = function(form) {

        $scope.submitted = true;
        if(form.$valid){

            $http({
                method: 'POST',
                url: '/dl_save_data',
               contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlFrstPrductAsets,
                    'com_data': {
                       'district': $scope.district.district__id,
                        'incident' : $scope.incident,
                    },
                    'is_edit':$scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False')
                    $scope.is_valid_data = false;
               else
                    $("#modal-container-239453").modal('show');
            }, function errorCallback(response) {
                console.log(response);
            });

        }
    }

    $scope.dlDataEdit = function(form){

   $scope.is_edit = true;
   $scope.submitted = true;

    $http({
    method: "POST",
    url: '/dl_fetch_edit_data',
    data: angular.toJson({
    'table_name':  'Table_4',
    'sector':'agri_agrarian',
    'com_data': {
           'district':  $scope.district.district__id,
            'incident': $scope.incident,
          },
           'is_edit':$scope.is_edit
           }),
    }).success(function(data) {

    console.log(data);


    $scope.dlFrstPrductAsets = data;
    })

}

    $scope.cancelEdit = function(){
     $scope.is_edit = false;
     $scope.dlFrstPrductAsets = init_data;
}

    $scope.calPubTotal=function(arr){
    var finaltotal = 0;
     console.log(arr);
    angular.forEach(arr, function(value, key) {

     finaltotal = finaltotal + value.dmg_pub ;
    })
      console.log(finaltotal);
    return finaltotal;
    }

    $scope.calPvtTotal=function(arr){
    var finaltotal = 0;
     console.log(arr);
    angular.forEach(arr, function(value, key) {

     finaltotal = finaltotal + value.dmg_pvt ;
    })
      console.log(finaltotal);
    return finaltotal;
    }

    $scope.calGrandPubTotal=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;
    var finaltotal4 = 0;
    var finaltotal5 = 0;
    var finaltotal6 = 0;
    var finaltotal7 = 0;
    var grantot = 0;

    var array1=$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfFarmEquipment;
    var array2 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfSeasonalCrops;
    var array3 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfPlantnCrops;
    var array4 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfExportCrops;
    var array5 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfForestry;
    var array6 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfOther;
    var array7 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfStocks;

    angular.forEach(array1, function(value, key) {

     finaltotal1 = finaltotal1 + value.dmg_pub ;
    })
    angular.forEach(array2, function(value, key) {

     finaltotal2 = finaltotal2 + value.dmg_pub ;
    })
    angular.forEach(array3, function(value, key) {

     finaltotal3 = finaltotal3 + value.dmg_pub ;
    })
    angular.forEach(array4, function(value, key) {

     finaltotal4 = finaltotal4 + value.dmg_pub ;
    })
    angular.forEach(array5, function(value, key) {

     finaltotal5 = finaltotal5 + value.dmg_pub ;
    })
    angular.forEach(array6, function(value, key) {

     finaltotal6 = finaltotal6 + value.dmg_pub ;
    })
    angular.forEach(array7, function(value, key) {

     finaltotal7 = finaltotal7 + value.dmg_pub ;
    })
    grantot = grantot + finaltotal1+ finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5+ finaltotal6 + finaltotal7;
    return grantot;
    }

    $scope.calGrandPvtTotal=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;
    var finaltotal4 = 0;
    var finaltotal5 = 0;
    var finaltotal6 = 0;
    var finaltotal7 = 0;
    var grantot = 0;

    var array1=$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfFarmEquipment;
    var array2 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfSeasonalCrops;
    var array3 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfPlantnCrops;
    var array4 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfExportCrops;
    var array5 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfForestry;
    var array6 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfOther;
    var array7 =$scope.dlFrstPrductAsets.agri_agrarian.Table_4.DcpfStocks;

    angular.forEach(array1, function(value, key) {

     finaltotal1 = finaltotal1 + value.dmg_pvt ;
    })
    angular.forEach(array2, function(value, key) {

     finaltotal2 = finaltotal2 + value.dmg_pvt ;
    })
    angular.forEach(array3, function(value, key) {

     finaltotal3 = finaltotal3 + value.dmg_pvt ;
    })
    angular.forEach(array4, function(value, key) {

     finaltotal4 = finaltotal4 + value.dmg_pvt ;
    })
    angular.forEach(array5, function(value, key) {

     finaltotal5 = finaltotal5 + value.dmg_pvt ;
    })
    angular.forEach(array6, function(value, key) {

     finaltotal6 = finaltotal6 + value.dmg_pvt ;
    })
    angular.forEach(array7, function(value, key) {

     finaltotal7 = finaltotal7 + value.dmg_pvt ;
    })
    grantot = grantot + finaltotal1+ finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5+ finaltotal6 + finaltotal7;
    return grantot;
    }


}]);
