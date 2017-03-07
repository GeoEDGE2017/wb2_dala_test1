//Table 1
var app = angular.module('bsIrgFacilitiesApp', [])

app.controller('bsIrgFacilitiesController', ['$scope', '$http', function($scope, $http) {
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
            'Table_1': {
                'BsIfMajor': [{
                    irrigation_facility : 'Tank 1',
                    capacity : null,
                    irrigated_area_paddy : null,
                    irrigated_area_ofc : null,
                    income_paddy : null,
                    income_ofc : null,
                    num_farmer_families : null,
                }, {
                    irrigation_facility : 'Tank 2',
                    capacity : null,
                    irrigated_area_paddy : null,
                    irrigated_area_ofc : null,
                    income_paddy : null,
                    income_ofc : null,
                    num_farmer_families : null,
                }],
                'BsIfMedium': [{
                    irrigation_facility : 'Tank 1',
                    capacity : null,
                    irrigated_area_paddy : null,
                    irrigated_area_ofc : null,
                    income_paddy : null,
                    income_ofc : null,
                    num_farmer_families : null,
                }, {
                    irrigation_facility : 'Tank 2',
                    capacity : null,
                    irrigated_area_paddy : null,
                    irrigated_area_ofc : null,
                    income_paddy : null,
                    income_ofc : null,
                    num_farmer_families : null,
                }],
                'BsIfMinor': [{
                    irrigation_facility : 'Tank 1',
                    capacity : null,
                    irrigated_area_paddy : null,
                    irrigated_area_ofc : null,
                    income_paddy : null,
                    income_ofc : null,
                    num_farmer_families : null,
                }, {
                    irrigation_facility : 'Tank 2',
                    capacity : null,
                    irrigated_area_paddy : null,
                    irrigated_area_ofc : null,
                    income_paddy : null,
                    income_ofc : null,
                    num_farmer_families : null,
                }],
                'BsIfAnicuts': [{
                    irrigation_facility : 'Anicut 1',
                    capacity : null,
                    irrigated_area_paddy : null,
                    irrigated_area_ofc : null,
                    income_paddy : null,
                    income_ofc : null,
                    num_farmer_families : null,
                }, {
                    irrigation_facility : 'Anicut 2',
                    capacity : null,
                    irrigated_area_paddy : null,
                    irrigated_area_ofc : null,
                    income_paddy : null,
                    income_ofc : null,
                    num_farmer_families : null,
                }]
            }
        }
    }

    $scope.bsIrgFacilities = init_data;

    $scope.insertAsset = function(table) {
        console.log($scope.bsIrgFacilities.agri_irrigation.Table_1[table]);
        var new_row;
        if(table == 'BsIfMajor') {
            new_row = {
                irrigation_facility : '',
                capacity : null,
                irrigated_area_paddy : null,
                irrigated_area_ofc : null,
                income_paddy : null,
                income_ofc : null,
                num_farmer_families : null,
            }
        }
        else if(table == 'BsIfMedium') {
            new_row = {
                irrigation_facility : '',
                capacity : null,
                irrigated_area_paddy : null,
                irrigated_area_ofc : null,
                income_paddy : null,
                income_ofc : null,
                num_farmer_families : null,
            }
        }
        else if(table == 'BsIfMinor') {
            new_row = {
                irrigation_facility : '',
                capacity : null,
                irrigated_area_paddy : null,
                irrigated_area_ofc : null,
                income_paddy : null,
                income_ofc : null,
                num_farmer_families : null,
            }
        }
        else if(table == 'BsIfAnicuts') {
            new_row = {
                irrigation_facility : '',
                capacity : null,
                irrigated_area_paddy : null,
                irrigated_area_ofc : null,
                income_paddy : null,
                income_ofc : null,
                num_farmer_families : null,
            }
        }
        $scope.bsIrgFacilities.agri_irrigation.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsIfMajor') {
            $scope.bsIrgFacilities.agri_irrigation.Table_1.BsIfMajor.splice(index, 1);
        }
        else if(table == 'BsIfMedium') {
            $scope.bsIrgFacilities.agri_irrigation.Table_1.BsIfMedium.splice(index, 1);
        }
        else if(table == 'BsIfMinor') {
            $scope.bsIrgFacilities.agri_irrigation.Table_1.BsIfMinor.splice(index, 1);
        }
        else if(table == 'BsIfAnicuts') {
            $scope.bsIrgFacilities.agri_irrigation.Table_1.BsIfAnicuts.splice(index, 1);
        }
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            console.log($scope.bsIrgFacilities);
            alert('Save table 1');
        }
    }
}]);
