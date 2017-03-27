var app= angular.module('bsInfoforCostsOfAssetsOnTheDistrictApp', [])

app.controller('bsInfoforCostsOfAssetsOnTheDistrictController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;

    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'other_govn_services': {
            'Table_1': {
                'BcsStructure': [{
                    asset : '1 floor structure',
                    avg_rep_cost: null,
                    avg_repair_cost_roof: null,
                    avg_repair_cost_wall: null,
                    avg_repair_cost_flooring: null,
                }, {
                    asset : '2-3 floors structure',
                    avg_rep_cost: null,
                    avg_repair_cost_roof: null,
                    avg_repair_cost_wall: null,
                    avg_repair_cost_flooring: null,
                }, {
                    asset : 'More than 3 floors',
                    avg_rep_cost: null,
                    avg_repair_cost_roof: null,
                    avg_repair_cost_wall: null,
                    avg_repair_cost_flooring: null,
                }],
                'BcsOfficeEquipment' : [{
                    asset : 'Computers',
                    avg_rep_cost : null,
                    avg_repair_cost : null,
                }, {
                    asset : 'Furniture',
                    avg_rep_cost : null,
                    avg_repair_cost : null,
                }],
                'BcsMachinery': [{
                    asset : 'Vehicles',
                    avg_rep_cost : null,
                    avg_repair_cost : null,
                }, {
                    asset : 'Generators',
                    avg_rep_cost : null,
                    avg_repair_cost : null,
                }, {
                    asset : 'Elevators',
                    avg_rep_cost : null,
                    avg_repair_cost : null,
                }]
            }
        }
    }

    $scope.bsCostsOfAssetsOnTheDistrict = init_data;

    $scope.insertAsset = function(table)
    {
        console.log($scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1[table]);
        var new_row;
        if(table == 'BcsOfficeEquipment') {
            new_row = {
                asset : '',
                avg_rep_cost : null,
                avg_repair_cost : null,
                district_general_hospital : null,
            }
        }
        else if(table == 'BcsMachinery') {
            new_row = {
                asset : '',
                avg_rep_cost : null,
                avg_repair_cost : null,
                district_general_hospital : null,
            }
        }

        $scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index)
    {
        if(table == 'BcsOfficeEquipment')
        {
            $scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsOfficeEquipment.splice(index, 1);
        }
        else if(table == 'BcsMachinery')
        {
            $scope.bsCostsOfAssetsOnTheDistrict.other_govn_services.Table_1.BcsMachinery.splice(index, 1);
        }
    }

    $scope.save = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method : 'POST',
                url : '/bs_save_data',
                contentType : 'application/json; charset=utf-8',
                data : angular.toJson({
                    'table_data' : $scope.bsCostsOfAssetsOnTheDistrict,
                    'com_data' : {
                        'district' : $scope.district,
                        'bs_date' : $scope.baselineDate,
                    },
                    'is_edit' : $scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                console.log(response);
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

      $scope.bsHsDataEdit = function(form)
    {
    $scope.submitted = true;

       $scope.is_edit = true;
        $http({
        method: "POST",
        url: "/bs_fetch_edit_data",
        data: angular.toJson({
              'table_name': 'Table_1',
              'sector': 'other_govn_services',
              'com_data': {'district': $scope.district,
              'bs_date': $scope.baselineDate} }),
        }).success(function(data) {

        console.log(data);
        $scope.bsCostsOfAssetsOnTheDistrict = data;
        })


    }

    $scope.cancelEdit = function()
    {
        $scope.is_edit = false;
        $scope.bsCostsOfAssetsOnTheDistrict = init_data;
    }


}])
