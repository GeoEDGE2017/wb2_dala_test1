//Table 5
var app = angular.module('dlStrutsOthAsetsApp', [])

app.controller('dlStrutsOthAsetsController', ['$scope', '$http', function($scope, $http) {

    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;

    var init_data = {
        'agri_agrarian': {
            'Table_5': {
                //Tab 1
                'DsorDestStructures': [{
                    assets : '1 floor structure',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    tot_dest_pub : null,
                    tot_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : '2-3 floors structure',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    tot_dest_pub : null,
                    tot_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'More than 3 floors',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    tot_dest_pub : null,
                    tot_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    tot_dest_pub : null,
                    tot_dest_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                //Tab 2
                'DsorDmgPubStructure': [{
                    assets : '1 floor structure',
                    num_part_dmg : null,
                    tot_dmg_roof : null,
                    tot_dmg_walls : null,
                    tot_dmg_floors : null,
                    damages : null,
                }, {
                    assets : '2-3 floors structure',
                    num_part_dmg : null,
                    tot_dmg_roof : null,
                    tot_dmg_walls : null,
                    tot_dmg_floors : null,
                    damages : null,
                }, {
                    assets : 'More than 3 floors',
                    num_part_dmg : null,
                    tot_dmg_roof : null,
                    tot_dmg_walls : null,
                    tot_dmg_floors : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    num_part_dmg : null,
                    tot_dmg_roof : null,
                    tot_dmg_walls : null,
                    tot_dmg_floors : null,
                    damages : null,
                }],
                'DsorDmgPvtStructures': [{
                    assets : '1 floor structure',
                    num_part_dmg : null,
                    tot_dmg_roof : null,
                    tot_dmg_walls : null,
                    tot_dmg_floors : null,
                    damages : null,
                }, {
                    assets : '2-3 floors structure',
                    num_part_dmg : null,
                    tot_dmg_roof : null,
                    tot_dmg_walls : null,
                    tot_dmg_floors : null,
                    damages : null,
                }, {
                    assets : 'More than 3 floors',
                    num_part_dmg : null,
                    tot_dmg_roof : null,
                    tot_dmg_walls : null,
                    tot_dmg_floors : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    num_part_dmg : null,
                    tot_dmg_roof : null,
                    tot_dmg_walls : null,
                    tot_dmg_floors : null,
                    damages : null,
                }],
                'DsorDmgPvtOequipment': [{
                    assets : 'Computers',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Furniture',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DsorDmgPvtMachinery': [{
                    assets : 'Vehicles',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Generators',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Elevators',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Total',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'GRAND TOTAL',
                    num_dest_pub : null,
                    num_dest_pvt : null,
                    num_dmg_pub : null,
                    num_dmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
            }
        }
    }

    $scope.dlStrutsOthAsets = init_data;

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
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BsoeOequipment', 'BsoeMachinery'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_5',
                    'sector':'agri_agrarian',
                        }),
                  dataType: 'json',


            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                  $scope.bs_data[key] = JSON.parse(value);
                });
                console.log(data);
                generateRefencedData();
            }, function errorCallback(response) {

            });
        }
    }

    function generateRefencedData() {
        data_array = ['BsoeOequipment', 'BsoeMachinery'];
            var dl_model1 = null;
            var dl_model2 = null;

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;
            var particular_value_2 = null;

            if(model_name == 'BsoeOequipment') {
               dl_model1 = 'DsorDmgPvtOequipment';
               particular_value_1 = 'Total';
               $scope.dlStrutsOthAsets.agri_agrarian.Table_5[dl_model1] = [];
            }
            if(model_name == 'BsoeMachinery') {
               dl_model2 = 'DsorDmgPvtMachinery';
               particular_value_2 = 'Total';
               $scope.dlStrutsOthAsets.agri_agrarian.Table_5[dl_model2] = [];
            }

            var obj1 = {
                assets : particular_value_1,
                avg_replace_cost : null,
                avg_repair_cost : null,
            };
            var obj2 = {
                assets : particular_value_2,
                avg_replace_cost : null,
                avg_repair_cost : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    assets : value.fields.assets,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                };
                var obj2 = {
                    assets : value.fields.assets,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                };

                if(model_name == 'BsoeOequipment') {
                   $scope.dlStrutsOthAsets.agri_agrarian.Table_5[dl_model1].push(obj1);
                }
                if(model_name == 'BsoeMachinery') {
                   $scope.dlStrutsOthAsets.agri_agrarian.Table_5[dl_model2].push(obj2);
                }
            });

            if(model_name == 'BsoeOequipment') {
                $scope.dlStrutsOthAsets.agri_agrarian.Table_5[dl_model1].push(obj1);
            }
            if(model_name == 'BsoeMachinery') {
                $scope.dlStrutsOthAsets.agri_agrarian.Table_5[dl_model2].push(obj2);
            }
        });
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            alert('Save Table 5');
        }
    }
}]);
