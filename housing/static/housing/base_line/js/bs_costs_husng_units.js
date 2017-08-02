//Table 2
var app = angular.module('bsCostsHusngUnitsApp', [])
app.controller('bsCostsHusngUnitsController',  ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.is_edit_disable = false;
    $scope.user_id;

    //Initialize Data
    var init_data = {
        'housing' : {
            'Table_2' : {
                'BhClfPermanentCost': [{
                    components : '1 floor',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                    avg_val_content : null,
                }, {
                    components : '2-3 floors',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                    avg_val_content : null,
                }, {
                    components : '4-5 floors',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                    avg_val_content : null,
                }, {
                    components : 'More than 5 floors',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                    avg_val_content : null,
                }],
                'BhClfSmiPermanentCost': [{
                    components : '1 floor',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                    avg_val_content : null,
                }, {
                    components : '2-3 floors',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                    avg_val_content : null,
                }, {
                    components : '4-5 floors',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                    avg_val_content : null,
                }],
                'BhClfImprovisedCost': [{
                    components : '1 floor',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                    avg_val_content : null,
                }, {
                    components : '2-3 floors',
                    avg_replace_cost : null,
                    avg_repair_cost_roof : null,
                    avg_repair_cost_wall : null,
                    avg_repair_cost_floor : null,
                    avg_val_content : null,
                }]
            }
        }
    }

    $scope.bsCostsHusngUnits = angular.copy(init_data);

    //Disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.bs_date) {
            $scope.is_edit_disable = true;
        }
        else {
            $scope.is_edit_disable = false;
        }
    }

    //Save Data
    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsCostsHusngUnits),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                $scope.bsCostsHusngUnits = init_data;
                $scope.is_edit = false;

                if(data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
            })
        }
    }

    //Edit Data
    $scope.editBsData = function(form) {
        $scope.submitted = true;
        $scope.is_edit = true;
        $http({
            method: "POST",
            url: "/bs_fetch_edit_data",
            data: angular.toJson({
                'table_name': 'Table_2',
                'sector': 'housing',
                'com_data': {
                    'district': $scope.district,
                    'bs_date': $scope.bs_date,
                    'user_id': $scope.user_id
                }
            }),
        }).success(function(data) {
            console.log(data);
//            $scope.bsCostsHusngUnits = data;

            var edit_data_not_found = false;
            if(data != null) {
                console.log('----if');
                angular.forEach(data.housing.Table_2, function(value, index) {
                    console.log('----forEach');
                    console.log(value);
                    if(value.length == 0) {
                        console.log('----');
                        edit_data_not_found = true;
                    }
                })
                if(edit_data_not_found != true) {
                    $scope.bsCostsHusngUnits = data;
                }
                else {
                    $("#modal-container-239456").modal('show');
                }
            }
            else {
                console.log('----else');
                $("#modal-container-239456").modal('show');
            }
        })
    }

    //Cancel Edit
    $scope.cancelEdit = function(){
        $scope.is_edit = false;
        $scope.bsCostsHusngUnits = init_data;
    }

    //Clear Function
    $scope.clear = function() {
        console.log('done');
        $scope.is_edit = false;
        $scope.bsCostsHusngUnits = angular.copy(init_data);
    }

}])
