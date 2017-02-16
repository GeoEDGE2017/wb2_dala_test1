//Table 4
var app = angular.module('dlRoadBrdgsApp', ['underscore'])

app.controller('dlRoadBrdgsController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;

    $scope.dlDate;
    $scope.bs_data={};

    $scope.baselineDate;

    $scope.is_edit = false;
    $scope.is_valid_data = true;

    alert("table 4");

    var init_data = {
        'transport_land' : {
            'Table_4': {
                'DlRbdRclassification' :[{
                    road_classification : 'Class A',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },{
                    road_classification : 'Class B',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },{
                    road_classification : 'Class C',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },{
                    road_classification : 'Class D',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },{
                    road_classification : 'Class E',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },{
                    road_classification : 'Total',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },],
                'DlRbdTbridges' : [{
                    type_bridges : 'Steel Bridges',
                    tot_dest_2_lanes : null,
                    tot_dest_multi_lanes : null,
                    part_dest_2_lanes : null,
                    part_dest_multi_lanes : null,
                    damages : null,
                },{
                    type_bridges : 'Wooden bridges',
                    tot_dest_2_lanes : null,
                    tot_dest_multi_lanes : null,
                    part_dest_2_lanes : null,
                    part_dest_multi_lanes : null,
                    damages : null,
                }, {
                    type_bridges : 'Total',
                    tot_dest_2_lanes : null,
                    tot_dest_multi_lanes : null,
                    part_dest_2_lanes : null,
                    part_dest_multi_lanes : null,
                    damages : null,
                },],
                'DlRbdTculverts' : [{
                    type_culverts : 'Box Culvert',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }, {
                    type_culverts : 'Total',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }],
                'DlRbdTrwalls' : [{
                    type_retain_walls : 'RRM',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }, {
                    type_retain_walls : 'Total',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }],
                'DlRbdTdrains' : [{
                    type_drains : 'Concrete',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                },{
                    type_drains : 'Bricks',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                },{
                    type_drains : 'Earth',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                },{
                    type_drains : 'Total',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                },{
                    type_drains : 'TOTAL DAMAGES',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }],
                'DlRbdLosses' : [{
                    loss_type : 'Foregone income from toll fees',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                 },{
                    loss_type : 'Cleaning up of debris',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                 },{
                    loss_type : 'Higher operating costs',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                 },{
                    loss_type : 'Other unexpected expenses',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                 },{
                    loss_type : 'TOTAL LOSSES',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                 },]
            }
        }
    }

    $scope.dlRoadBrdgs = init_data;

    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                console.log(data);
            })
        }

        if($scope.incident && $scope.district ){

            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                  'db_tables': ['BsMovingAst','BsEquipMachineryAst','BsMatSuppliesAst','BsStructuresAst','BsBuildingAst'],
                  'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        },
                   'table_name': 'Table_1',
                   'sector': 'transport_land',
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                  $scope.bs_data[key] = JSON.parse(value);
                });

                console.log($scope.bs_data);

            }, function errorCallback(response) {

                console.log(response);
            });
        }
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            alert('Save Table 4');
        }
    }
});