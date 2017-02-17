//Table 2
var app = angular.module('dlAirTrnspotationApp', [])

app.controller('dlAirTrnspotationController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;

    $scope.dlDate;
    $scope.bs_data={};

    $scope.baselineDate;

    $scope.is_edit = false;
    $scope.is_valid_data = true;

    var init_data = {
        'transport_air': {
            'Table_2': {
                //Tab 1
                'DlAirDmgAircrafts': [{
                    assets : 'Airplanes',
                    tot_destroyed_pub : null,
                    tot_destroyed_pvt : null,
                    part_damaged_pub : null,
                    part_damaged_pvt : null,
                }, {
                    assets : 'Helicopters',
                    tot_destroyed_pub : null,
                    tot_destroyed_pvt : null,
                    part_damaged_pub : null,
                    part_damaged_pvt : null,
                }, {
                    assets : 'Total',
                    tot_destroyed_pub : null,
                    tot_destroyed_pvt : null,
                    part_damaged_pub : null,
                    part_damaged_pvt : null,
                }],
                'DlAirDmgEquipment': [{
                    assets : 'Office equipment',
                    tot_destroyed : null,
                    part_damaged : null,
                    tot_dmg_pub : null,
                }, {
                    assets : 'Baggage handling system',
                    tot_destroyed : null,
                    part_damaged : null,
                    tot_dmg_pub : null,
                }, {
                    assets : 'Cargo handling system',
                    tot_destroyed : null,
                    part_damaged : null,
                    tot_dmg_pub : null,
                }, {
                    assets : 'Aero bridges',
                    tot_destroyed : null,
                    part_damaged : null,
                    tot_dmg_pub : null,
                }, {
                    assets : 'Security equipment',
                    tot_destroyed : null,
                    part_damaged : null,
                    tot_dmg_pub : null,
                }, {
                    assets : 'Vehicles',
                    tot_destroyed : null,
                    part_damaged : null,
                    tot_dmg_pub : null,
                }, {
                    assets : 'Total',
                    tot_destroyed : null,
                    part_damaged : null,
                    tot_dmg_pub : null,
                }],
                'DlAirDmgSupplies': [{
                    assets : 'Fuel (per Liter)',
                    tot_destroyed_pub : null,
                    tot_destroyed_pvt : null,
                    part_damaged_pub : null,
                    part_damaged_pvt : null,
                    tot_dmg_pub : null,
                    tot_dmg_pvt : null,
                }, {
                    assets : 'Total',
                    tot_destroyed_pub : null,
                    tot_destroyed_pvt : null,
                    part_damaged_pub : null,
                    part_damaged_pvt : null,
                    tot_dmg_pub : null,
                    tot_dmg_pvt : null,
                }],
                'DlAirDmgOthers': [{
                    assets : 'Runway',
                    tot_destroyed : null,
                    part_damaged : null,
                    tot_dmg_pub : null,
                }, {
                    assets : 'Apron Parking areas',
                    tot_destroyed : null,
                    part_damaged : null,
                    tot_dmg_pub : null,
                }, {
                    assets : 'Piers',
                    tot_destroyed : null,
                    part_damaged : null,
                    tot_dmg_pub : null,
                }, {
                    assets : 'Total',
                    tot_destroyed : null,
                    part_damaged : null,
                    tot_dmg_pub : null,
                }],
                'BsAstAirStructures': [{
                    assets : 'Airport Terminal buildings',
                    tdest_floor_1 : null,
                    tdest_floor_2_3 : null,
                    tdest_floor_than_3 : null,
                    pdmg_number : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    tot_pub : null,
                }, {
                    assets: 'Aircraft Hangars and associated buildings',
                    tdest_floor_1 : null,
                    tdest_floor_2_3 : null,
                    tdest_floor_than_3 : null,
                    pdmg_number : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    tot_pub : null,
                }, {
                    assets: 'Administrative buildings',
                    tdest_floor_1 : null,
                    tdest_floor_2_3 : null,
                    tdest_floor_than_3 : null,
                    pdmg_number : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    tot_pub : null,
                }, {
                    assets: 'Fire services buildings',
                    tdest_floor_1 : null,
                    tdest_floor_2_3 : null,
                    tdest_floor_than_3 : null,
                    pdmg_number : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    tot_pub : null,
                }, {
                    assets: 'Airport Maintenance',
                    tdest_floor_1 : null,
                    tdest_floor_2_3 : null,
                    tdest_floor_than_3 : null,
                    pdmg_number : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    tot_pub : null,
                }, {
                    assets: 'Sri Lankan Airlines office complex',
                    tdest_floor_1 : null,
                    tdest_floor_2_3 : null,
                    tdest_floor_than_3 : null,
                    pdmg_number : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    tot_pub : null,
                }, {
                    assets: 'Navigation services complex',
                    tdest_floor_1 : null,
                    tdest_floor_2_3 : null,
                    tdest_floor_than_3 : null,
                    pdmg_number : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    tot_pub : null,
                }, {
                    assets: 'Control tower',
                    tdest_floor_1 : null,
                    tdest_floor_2_3 : null,
                    tdest_floor_than_3 : null,
                    pdmg_number : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    tot_pub : null,
                }, {
                    assets: 'Total',
                    tdest_floor_1 : null,
                    tdest_floor_2_3 : null,
                    tdest_floor_than_3 : null,
                    pdmg_number : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    tot_pub : null,
                }, {
                    assets: 'TOTAL DAMAGES',
                    tdest_floor_1 : null,
                    tdest_floor_2_3 : null,
                    tdest_floor_than_3 : null,
                    pdmg_number : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    tot_pub : null,
                }],
                //Tab 2
                'DlAirLosFi': [{
                    assets : 'Income of airline companies',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_los_pub : null,
                    tot_los_pvt : null,
                }, {
                    assets : 'Income of airports',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_spvt : null,
                    tot_los_pub : null,
                    tot_los_pvt : null,
                }, {
                    assets : 'Total',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_los_pub : null,
                    tot_los_pvt : null,
                }],
                'DlAirLosHoc': [{
                    type_los : 'Costs incurred in placing alternate arrangements',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_los_pub : null,
                    tot_los_pvt : null,
                }, {
                    type_los : 'Hiring costs',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_los_pub : null,
                    tot_los_pvt : null,
                }, {
                    type_los : 'Standards assessment costs',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_los_pub : null,
                    tot_los_pvt : null,
                }, {
                    type_los : 'Losses due to operational constraints',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_los_pub : null,
                    tot_los_pvt : null,
                }, {
                    type_los : 'Total',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_los_pub : null,
                    tot_los_pvt : null,
                }, {
                    type_los : 'Cleaning up of debris',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_los_pub : null,
                    tot_los_pvt : null,
                }, {
                    type_los : 'Other unexpected expenses',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_los_pub : null,
                    tot_los_pvt : null,
                }, {
                    type_los : 'TOTAL LOSSES',
                    year_1_pub : null,
                    year_1_pvt : null,
                    year_2_pub : null,
                    year_2_pvt : null,
                    tot_los_pub : null,
                    tot_los_pvt : null,
                }],
            }
        }
    }

    $scope.dlAirTrnspotation = init_data;

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
//            $http({
//                method: 'POST',
//                url: '/bs_get_data_mock',
//                contentType: 'application/json; charset=utf-8',
//                data: angular.toJson({
//                    'db_tables': ['BsGtlAstPvehicles'],
//                    'com_data': {
//                        'district': $scope.district.district__id,
//                        'incident': $scope.incident,
//                    },
//                    'table_name': 'Table_2',
//                    'sector':'transport_land',
//                        }),
//                  dataType: 'json',
//
//            }).then(function successCallback(response) {
//                var data = response.data;
//                angular.forEach(data, function(value, key) {
//                  $scope.bs_data[key] = JSON.parse(value);
//                });
//                generateRefencedData();
//            }, function errorCallback(response) {
//
//            });
        }
    }
}]);