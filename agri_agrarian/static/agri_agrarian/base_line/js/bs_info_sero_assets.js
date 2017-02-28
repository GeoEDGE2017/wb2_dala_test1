//Table 3
var app = angular.module('bsInfoSeroAssetsApp', [])
app.controller('bsInfoSeroAssetsController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'agri_agrarian': {
            'Table_3': {
                'BsoeStructure': [{
                    assets : '1 floor structure',
                    avg_replace_cost : null,
                    avg_repair_wall : null,
                    avg_repair_roof : null,
                    avg_repair_flooring : null,
                }, {
                    assets : '2-3 floors structure',
                    avg_replace_cost : null,
                    avg_repair_wall : null,
                    avg_repair_roof : null,
                    avg_repair_flooring : null,
                }, {
                    assets : 'More than 3 floors',
                    avg_replace_cost : null,
                    avg_repair_wall : null,
                    avg_repair_roof : null,
                    avg_repair_flooring : null,
                }],
                'BsoeOequipment': [{
                    assets : 'Computers',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Furniture',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BsoeMachinery': [{
                    assets : 'Vehicles',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Generators',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Elevators',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }]
            }
        }
    }

    $scope.bsInfoSeroAssets = init_data;

    $scope.insertAsset = function(table) {
        console.log($scope.bsInfoSeroAssets.agri_agrarian.Table_3[table]);
        var new_row;
        if(table == 'BsoeStructure') {
            new_row = {
                assets : '',
                avg_replace_cost : null,
                avg_repair_wall : null,
                avg_repair_roof : null,
                avg_repair_flooring : null,
            }
        }
        else if(table == 'BsoeOequipment') {
            new_row = {
                assets : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BsoeMachinery') {
            new_row = {
                assets : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        $scope.bsInfoSeroAssets.agri_agrarian.Table_3[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsoeStructure') {
            $scope.bsInfoSeroAssets.agri_agrarian.Table_3.BsoeStructure.splice(index, 1);
        }
        else if(table == 'BsoeOequipment') {
            $scope.bsInfoSeroAssets.agri_agrarian.Table_3.BsoeOequipment.splice(index, 1);
        }
        else if(table == 'BsoeMachinery') {
            $scope.bsInfoSeroAssets.agri_agrarian.Table_3.BsoeMachinery.splice(index, 1);
        }
    }

    $scope.saveBsData = function(form) {
       $scope.submitted = true;
        if (form.$valid) {
            alert('Save');
        }
    }
}]);