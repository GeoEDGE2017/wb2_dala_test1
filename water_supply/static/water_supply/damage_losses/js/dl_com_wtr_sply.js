//Table 3
var app = angular.module('dlComWtrSplyApp', [])

app.controller('dlComWtrSplyController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.incident;
    $scope.bs_data=[];
    $scope.dl_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.is_valid_data = true;

    var init_data = {
        'water_supply': {
            'Table_3': {
                'DlcwNumClients': [{
                    residential : null,
                    commerciadlpNdaLivestockl : null,
                    industrial : null,
                    others : null,
                    total : null,
                }],
                'DlcwNumEmployees': [{
                    male : null,
                    female : 10,
                    total : null,
                }],
                'DlcwDmgWaterIntake': [{
                    assets : 'Structures',
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                }, {
                    assets : 'Equipment',
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                }],
                'DlcwDmgWaterTreatment': [{
                    assets : 'Structures',
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                }, {
                    assets : 'Equipment',
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                }],
                'DlcwDmgWaterDisribution': [{
                    assets : 'Structures',
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                }, {
                    assets : 'Equipment',
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                }],
                'DlcwDmgMainOffice': [{
                    assets : 'Structures',
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                }, {
                    assets : 'Equipment',
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                }, {
                    assets : 'Inventories',
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                }, {
                    assets : 'Vehicles',
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                }, {
                    assets : 'TOTAL',
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                }],
                //Tab 2
                'DlcwLosProduction':[{
                    avg_income : null,
                    est_inc_year_1 : null,
                    est_inc_year_2 : null,
                    tot_los_year_1 : null,
                    tot_los_year_2 : null,
                    tot_los : null,
                }],
                'DlcwLosOther':[{
                    other_los : 'Cleaning up of debris',
                    tot_los_year_1 : null,
                    tot_los_year_2 : null,
                    tot_los : null,
                }, {
                    other_los : 'Higher operating costs',
                    tot_los_year_1 : null,
                    tot_los_year_2 : null,
                    tot_los : null,
                }, {
                    other_los : 'Other unexpected expenses',
                    tot_los_year_1 : null,
                    tot_los_year_2 : null,
                    tot_los : null,
                }, {
                    other_los : 'TOTAL',
                    tot_los_year_1 : null,
                    tot_los_year_2 : null,
                    tot_los : null,
                }],
            }
        }
    }

    $scope.dlComWtrSply = init_data;

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
                    'db_tables': ['BiaWaterIntake', 'BiaTreatmentPlant', 'BiaWaterDistribution', 'BiaMainOffice'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_1',
                    'sector': 'water_supply',
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
        data_array = ['BiaWaterIntake', 'BiaTreatmentPlant', 'BiaWaterDistribution', 'BiaMainOffice'];

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

            if(model_name == 'BiaWaterIntake') {
                console.log($scope.dlComWtrSply);
                dl_model1 = 'DlcwDmgWaterIntake';

                $scope.dlComWtrSply.water_supply.Table_3[dl_model1] = [];
                console.log($scope.dlComWtrSply);
            }
            if(model_name == 'BiaTreatmentPlant') {
                dl_model2 = 'DlcwDmgWaterTreatment';

               $scope.dlComWtrSply.water_supply.Table_3[dl_model2] = [];
            }
            if(model_name == 'BiaWaterDistribution') {
                dl_model3 = 'DlcwDmgWaterDisribution';

                $scope.dlComWtrSply.water_supply.Table_3[dl_model3] = [];
            }
            if(model_name == 'BiaMainOffice') {
                dl_model4 = 'DlcwDmgMainOffice';

                $scope.dlComWtrSply.water_supply.Table_3[dl_model4] = [];
            }

            var obj1 = {
                assets : particular_value_1,
                num_tot_destoyed : null,
                num_part_damaged : null,
                total_dmgs : null,
            };
            var obj2 = {
                assets : particular_value_2,
                num_tot_destoyed : null,
               num_part_damaged : null,
                total_dmgs : null,
            };
            var obj3 = {
                assets : particular_value_3,
                num_tot_destoyed : null,
                num_part_damaged : null,
                total_dmgs : null,
            };
           var obj4 = {
                assets : particular_value_4,
                num_tot_destoyed : null,
                num_part_damaged : null,
                total_dmgs : null,
           };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    assets : value.fields.components,
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                };
                var obj2 = {
                    assets : value.fields.components,
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                };
                var obj3 = {
                    assets : value.fields.components,
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                };
                var obj4 = {
                    assets : value.fields.components,
                    num_tot_destoyed : null,
                    num_part_damaged : null,
                    total_dmgs : null,
                };

                if(model_name == 'BiaWaterIntake') {
                   $scope.dlComWtrSply.water_supply.Table_3[dl_model1].push(obj1);
                }
                if(model_name == 'BiaTreatmentPlant') {
                   $scope.dlComWtrSply.water_supply.Table_3[dl_model2].push(obj2);
                }
                if(model_name == 'BiaWaterDistribution') {
                   $scope.dlComWtrSply.water_supply.Table_3[dl_model3].push(obj3);
                }
                if(model_name == 'BiaMainOffice') {
                   $scope.dlComWtrSply.water_supply.Table_3[dl_model4].push(obj4);
                }
            });

            if(model_name == 'BiaWaterIntake') {
                $scope.dlComWtrSply.water_supply.Table_3[dl_model1].push(obj1);
           }
            if(model_name == 'BiaTreatmentPlant') {
                $scope.dlComWtrSply.water_supply.Table_3[dl_model2].push(obj2);
            }
            if(model_name == 'BiaWaterDistribution') {
                $scope.dlComWtrSply.water_supply.Table_3[dl_model3].push(obj3);
            }
            if(model_name == 'BiaMainOffice') {
                $scope.dlComWtrSply.water_supply.Table_3[dl_model4].push(obj4);
            }
        });
    }

//    $scope.saveDlData = function(form) {
//        $scope.submitted = true;
//        if(form.$valid) {
//            console.log($scope.dlComWtrSply);
//        }
//    }

    $scope.saveDlData = function(form) {
        if(form.$valid) {
            $scope.submitted = true;
            $http({
                method: 'POST',
                url:'/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlComWtrSply,
                    'com_data': {
                        'district' :  $scope.district.district__id,
                        'incident' : $scope.incident,
                    },
                    'is_edit' : $scope.is_edit,
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');
            }, function errorCallback(response) {

            });
        }
    }

    $scope.displayObject = function(form) {
        console.log($scope.dlComWtrSply);
        console.log($scope.incident);
        console.log($scope.district);
    }
}]);
