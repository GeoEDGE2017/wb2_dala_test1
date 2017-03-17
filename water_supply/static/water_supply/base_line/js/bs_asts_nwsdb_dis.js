//Table 1
var app = angular.module('bsAstsNwsdbDisApp', []);
app.controller('bsAstsNwsdbDisController', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'water_supply' : {
            'Table_1' : {
                'BiaNumEmployees' : [{
                    male : null,
                    female : null,
                }],
                'BiaWaterUsers': [{
                    type_wusers : 'Residential',
                    num_clients : null,
                    daily_demand : null,
                    annual_demand : null,
                    rate : null,
                }, {
                    type_wusers : 'Commercial',
                    num_clients : null,
                    daily_demand : null,
                    annual_demand : null,
                    rate : null,
                }, {
                    type_wusers : 'Industrial',
                    num_clients : null,
                    daily_demand : null,
                    annual_demand : null,
                    rate : null,
                }, {
                    type_wusers : 'Total',
                    num_clients : null,
                    daily_demand : null,
                    annual_demand : null,
                    rate : null,
                }, {
                    type_wusers : 'Average Income Per Year (LKR/Year)',
                    num_clients : null,
                    daily_demand : null,
                    annual_demand : null,
                    rate : null,
                }],
                'BiaWaterIntake': [{
                    components : 'Structures',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BiaTreatmentPlant': [{
                    components : 'Structures',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BiaWaterDistribution': [{
                    components : 'Structures',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, ],
                'BiaMainOffice' : [{
                    components : 'Structures',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Inventories',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Vehicles',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
            }
        }
    }

    $scope.bsAstsNwsdbDis = init_data;

    $scope.insertAssets = function(table) {
        var new_row;
        if(table == 'BiaWaterUsers') {
            new_row = {
                type_wusers : '',
                num_clients : null,
                daily_demand : null,
                annual_demand : null,
                rate : null,
            }
        }
        else if(table == 'BiaWaterIntake') {
            new_row = {
                components : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BiaTreatmentPlant') {
            new_row = {
                components : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BiaWaterDistribution') {
            new_row = {
                components : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BiaMainOffice') {
            new_row = {
                components : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }

        $scope.bsAstsNwsdbDis.water_supply.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BiaWaterUsers') {
            $scope.bsAstsNwsdbDis.water_supply.Table_1.BiaWaterUsers.splice(index, 1);
        }
        else if(table == 'BiaWaterIntake') {
            $scope.bsAstsNwsdbDis.water_supply.Table_1.BiaWaterIntake.splice(index, 1);
        }
        else if(table == 'BiaTreatmentPlant') {
            $scope.bsAstsNwsdbDis.water_supply.Table_1.BiaTreatmentPlant.splice(index, 1);
        }
        else if(table == 'BiaWaterDistribution') {
            $scope.bsAstsNwsdbDis.water_supply.Table_1.BiaWaterDistribution.splice(index, 1);
        }
        else if(table == 'BiaMainOffice') {
            $scope.bsAstsNwsdbDis.water_supply.Table_1.BiaMainOffice.splice(index, 1);
        }
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            console.log($scope.bsAstsNwsdbDis);
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsAstsNwsdbDis),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                $scope.bsAstsNwsdbDis = init_data;
                $scope.is_edit = false;

                if(data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');
            })
        }
    }
})
