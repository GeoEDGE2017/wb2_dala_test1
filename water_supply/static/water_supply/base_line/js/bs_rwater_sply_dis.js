//Table 2
var app = angular.module('bsRwaterSplyDisApp', []);
app.controller('bsRwaterSplyDisController', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;

//initialize model
    var init_data = {
        'water_supply' : {
            'Table_2' : {
                'BimRuralWater': [{
                    type_water_supply : 'Type 1: Open production well',
                    num_users : null,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    type_water_supply : 'Type 2: Closed well with hand pump',
                    num_users : null,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    type_water_supply : 'Type 3: Closed well with storage and electric water pump and tap stands',
                    num_users : null,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    type_water_supply : 'Type 4: Others',
                    num_users : null,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
            }
        }
    }

    $scope.bsRwaterSplyDis = angular.copy(init_data);

//Save Data
    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            console.log($scope.bsRwaterSplyDis);
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsRwaterSplyDis),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                $scope.bsRwaterSplyDis = init_data;
                $scope.is_edit = false;

                if(data == 'False')
                    {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else
                    $("#modal-container-239453").modal('show');
            })
        }
    }

//Edit Data
     $scope.bsHsDataEdit = function(form)
    {
    $scope.submitted = true;

       $scope.is_edit = true;
        $http({
        method: "POST",
        url: "/bs_fetch_edit_data",
        data: angular.toJson({
              'table_name': 'Table_2',
              'sector': 'water_supply',
              'com_data': {'district': $scope.district,
              'bs_date': $scope.bs_date} }),
        }).success(function(data) {

        console.log(data);
        $scope.bsRwaterSplyDis = data;
        })


    }

//Cancel Edit
    $scope.cancelEdit = function()
    {
        $scope.is_edit = false;
        $scope.bsRwaterSplyDis = init_data;
    }

//Clear Function
    $scope.clear = function() {
        console.log('done');
        $scope.is_edit = false;
        $scope.bsRwaterSplyDis = angular.copy(init_data);


    }


})
