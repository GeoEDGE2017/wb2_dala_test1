//Table 6
var app = angular.module('dlGovnAdmnAsetsApp', ['underscore'])

app.controller('dlGovnAdmnAsetsController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;

    $scope.dlDate;
    $scope.bs_data={};

    $scope.baselineDate;

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
                }],
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
                }],
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
                    'db_tables': ['BiaGacLandOequipment'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_3',
                    'sector':'transport_land'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });

                generateRefencedData();
                console.log($scope.dlGovnAdmnAsets);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }

    function generateRefencedData() {
        data_array = ['BiaGacLandOequipment'];
        var dl_model1 = null;
        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;

            if(model_name == 'BiaGacLandOequipment') {
                dl_model1 = 'DlGacPdmgEquipment';
                particular_value_1 = 'Total';
            }
            if(model_name == 'BiaGacLandMachinery') {
                dl_model1 = 'DlGacPdmgMachinery';
                particular_value_1 = 'Total';
            }

            $scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1] = [];

            var obj1 = {
                assets : particular_value_1,
                num_tot_destroyed : null,
                num_part_damaged : null,
                damages : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    assets : value.fields.asset,
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                };

                console.log(value);

                if(model_name == 'BiaGacLandOequipment') {
                    $scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1].push(obj1);
                }
                if(model_name == 'BiaGacLandMachinery') {
                    $scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1].push(obj1);
                }
            });
            $scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1].push(obj1);
        });
        console.log(dl_model1);
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            alert('Save Table 6');
        }
    }
});