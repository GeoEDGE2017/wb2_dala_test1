//Table 2
var app = angular.module('bsRparplCosAsstsApp', [])

app.controller('bsRparplCosAsstsController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.division;
    $scope.region;
    $scope.bs_data={};
    $scope.is_edit = false;

    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'agri_irrigation': {
            'Table_2': {
                'BsRciaMajorTanks': [{
                    irrigation_facility : 'Bund',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Riprap',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Spill',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Main Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Distributor Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Field Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }],
                'BsRciaMediumTanks': [{
                    irrigation_facility : 'Bund',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
//                    avg_replace_cost : null,
//                    avg_repair_cost : null,
                }, {
                    irrigation_facility : 'Riprap',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Spill',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Main Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Distributor Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Field Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }],
                'BsRciaMinorTanks': [{
                    irrigation_facility : 'Bund',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Riprap',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Spill',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Main Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Distributor Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Field Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }],
                'BsRciaAnicuts': [{
                    irrigation_facility : 'Bund',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Riprap',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Spill',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Main Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Distributor Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Field Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }],
                'BsRciaOtherStructures': [{
                    irrigation_facility : 'Roads',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Bridges',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Culverts',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Causeways',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Retaining walls',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Interlock pavings',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Regulators',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Turnout',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Drops',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Retaining walls',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Canal linings',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Trough structures',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Canal spill	',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Under crossing',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Over crossing',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }],
                'BsRciRiverEmbankmnt': [{
                    irrigation_facility : 'River Embankments',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }],
                'BsRciBuildings': [{
                    irrigation_facility : '1 floor',
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : '2-3 floors',
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'More than 3 floors',
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                    avg_replacement_cost : null,
                }],
            }
        }
    }

    $scope.bsRparplCosAssts = init_data;

    $scope.insertAsset = function(table) {
        console.log($scope.bsRparplCosAssts.agri_irrigation.Table_2[table]);
        var new_row;
        if(table == 'BsRciaMajorTanks') {
            new_row = {
                irrigation_facility : '',
                avg_repair_cost : null,
                avg_replacement_cost : null,
            }
        }
        else if(table == 'BsRciaMediumTanks') {
            new_row = {
                irrigation_facility : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BsRciaMinorTanks') {
            new_row = {
                irrigation_facility : '',
                avg_repair_cost : null,
                avg_replacement_cost : null,
            }
        }
        else if(table == 'BsRciaAnicuts') {
            new_row = {
                irrigation_facility : '',
                avg_repair_cost : null,
                avg_replacement_cost : null,
            }
        }
        else if(table == 'BsRciaOtherStructures') {
            new_row = {
                irrigation_facility : '',
                avg_repair_cost : null,
                avg_replacement_cost : null,
            }
        }
        $scope.bsRparplCosAssts.agri_irrigation.Table_2[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsRciaMajorTanks') {
            $scope.bsRparplCosAssts.agri_irrigation.Table_2.BsRciaMajorTanks.splice(index, 1);
        }
        else if(table == 'BsRciaMediumTanks') {
            $scope.bsRparplCosAssts.agri_irrigation.Table_2.BsRciaMediumTanks.splice(index, 1);
        }
        else if(table == 'BsRciaMinorTanks') {
            $scope.bsRparplCosAssts.agri_irrigation.Table_2.BsRciaMinorTanks.splice(index, 1);
        }
        else if(table == 'BsRciaAnicuts') {
            $scope.bsRparplCosAssts.agri_irrigation.Table_2.BsRciaAnicuts.splice(index, 1);
        }
        else if(table == 'BsRciaOtherStructures') {
            $scope.bsRparplCosAssts.agri_irrigation.Table_2.BsRciaOtherStructures.splice(index, 1);
        }
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            console.log($scope.bsRparplCosAssts);
            alert('Save table 2');
        }
    }
}]);
