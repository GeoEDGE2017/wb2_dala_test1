//Table 6
var app = angular.module('dlGovnAdmnAsetsApp', ['underscore'])

app.controller('dlGovnAdmnAsetsController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.incident;

    $scope.is_edit = false;
    $scope.is_valid_data = true;

    var init_data = {
        'transport_land' : {
            'Table_6': {
                'DlGacDmgStructures' :[{
                    assets : '1 floor structure',
                    num_tot_destroyed : null,
                    num_square_meters : null,
                    damages : null,
                },{
                    assets : '2-3 floors structure',
                    num_tot_destroyed : null,
                    num_square_meters : null,
                    damages : null,
                },{
                    assets : 'More than 3 floors',
                    num_tot_destroyed : null,
                    num_square_meters : null,
                    damages : null,
                },{
                    assets : 'Total',
                    num_tot_destroyed : null,
                    num_square_meters : null,
                    damages : null,
                },],
                'DlGacPdmgStructures' : [{
                    assets : '1 floor structure',
                    num_part_damaged : null,
                    damaged_roof : null,
                    damaged_walls : null,
                    damaged_floors : null,
                    damages : null,
                },{
                    assets : '2-3 floors structure',
                    num_part_damaged : null,
                    damaged_roof : null,
                    damaged_walls : null,
                    damaged_floors : null,
                    damages : null,
                },{
                    assets : 'More than 3 floors',
                    num_part_damaged : null,
                    damaged_roof : null,
                    damaged_walls : null,
                    damaged_floors : null,
                    damages : null,
                },{
                    assets : 'Total',
                    num_part_damaged : null,
                    damaged_roof : null,
                    damaged_walls : null,
                    damaged_floors : null,
                    damages : null,
                },],
                'DlGacPdmgEquipment' : [{
                    assets : 'Computers',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Furniture',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Others',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Total',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },],
                'DlGacPdmgMachinery' : [{
                    assets : 'Vehicles',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Generators',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Elevators',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Others',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Total',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'TOTAL DAMAGES',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },],
                'DlGacLosType': [{
                    assets : 'Foregone income',
                    los_year_1 : null,
                    los_year_2 : null,
                    total : null,
                },{
                    assets : 'Cleaning up of debris',
                    los_year_1 : null,
                    los_year_2 : null,
                    total : null,
                },{
                    assets : 'Higher operating costs',
                    los_year_1 : null,
                    los_year_2 : null,
                    total : null,
                },{
                    assets : 'Other unexpected expenses',
                    los_year_1 : null,
                    los_year_2 : null,
                    total : null,
                },{
                    assets : 'TOTAL LOSSES',
                    los_year_1 : null,
                    los_year_2 : null,
                    total : null,
                },],
            }
        }
    }

    $scope.dlGovnAdmnAsets = init_data;

    alert("table 6");
});