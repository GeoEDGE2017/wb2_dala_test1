//Table 1
var app = angular.module('bsPubRodsBridsUsrApp', [])

app.controller('bsPubRodsBridsUsrController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;

    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'transport_land': {
            'Table_1': {
                'BsRbuRclassificattion': [{
                    road_classification: 'Class A',
                    avg_replace_concrete: null,
                    avg_replace_asphalt: null,
                    avg_replace_gravel: null,
                    avg_replace_earth: null,
                    avg_repair_concrete: null,
                    avg_repair_asphalt: null,
                    avg_repair_gravel: null,
                    avg_repair_earth: null,
                },{
                    road_classification: 'Class B',
                    avg_replace_concrete: null,
                    avg_replace_asphalt: null,
                    avg_replace_gravel: null,
                    avg_replace_earth: null,
                    avg_repair_concrete: null,
                    avg_repair_asphalt: null,
                    avg_repair_gravel: null,
                    avg_repair_earth: null,
                },{
                    road_classification: 'Class C',
                    avg_replace_concrete: null,
                    avg_replace_asphalt: null,
                    avg_replace_gravel: null,
                    avg_replace_earth: null,
                    avg_repair_concrete: null,
                    avg_repair_asphalt: null,
                    avg_repair_gravel: null,
                    avg_repair_earth: null,
                },{
                    road_classification: 'Class D',
                    avg_replace_concrete: null,
                    avg_replace_asphalt: null,
                    avg_replace_gravel: null,
                    avg_replace_earth: null,
                    avg_repair_concrete: null,
                    avg_repair_asphalt: null,
                    avg_repair_gravel: null,
                    avg_repair_earth: null,
                },{
                    road_classification: 'Class E',
                    avg_replace_concrete: null,
                    avg_replace_asphalt: null,
                    avg_replace_gravel: null,
                    avg_replace_earth: null,
                    avg_repair_concrete: null,
                    avg_repair_asphalt: null,
                    avg_repair_gravel: null,
                    avg_repair_earth: null,
                }],
                'BsRbuTbridges': [{
                    type_bridges: 'Steel Bridges',
                    avg_replace_2_lanes: null,
                    avg_replace_multi_lanes: null,
                    avg_repair_2_lanes: null,
                    avg_repair_multi_lanes: null,
                },{
                    type_bridges: 'Wooden bridges',
                    avg_replace_2_lanes: null,
                    avg_replace_multi_lanes: null,
                    avg_repair_2_lanes: null,
                    avg_repair_multi_lanes: null,
                }],
                'BsRbuTculverts': [{
                    type_culverts: 'Box Culvert',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }],
                'BsRbuTrwalls': [{
                    type_retain_walls: 'RRM',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }],
                'BsRbuTdrains': [{
                    type_drains: 'Concrete',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    type_drains: 'Bricks',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    type_drains: 'Earth',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }]
            }
        }
    }

    $scope.bsPubRodsBridsUsr = angular.copy(init_data);

    $scope.insertAsset = function(table) {
        console.log($scope.bsPubRodsBridsUsr.transport_land.Table_1[table]);
        var new_row;
        if(table == 'BsRbuTbridges') {
            new_row = {
                type_bridges: '',
                avg_replace_2_lanes: null,
                avg_replace_multi_lanes: null,
                avg_repair_2_lanes: null,
                avg_repair_multi_lanes: null,
            }
        }
        else if(table == 'BsRbuTculverts') {
            new_row = {
                type_culverts: '',
                avg_replace_cost: null,
                avg_repair_cost: null,
            }
        }
        else if(table == 'BsRbuTrwalls') {
            new_row = {
                type_retain_walls: '',
                avg_replace_cost: null,
                avg_repair_cost: null,
            }
        }
        else if(table == 'BsRbuTdrains') {
            new_row = {
                type_drains: '',
                avg_replace_cost: null,
                avg_repair_cost: null,
            }
        }

        $scope.bsPubRodsBridsUsr.transport_land.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsRbuTbridges') {
            $scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTbridges.splice(index, 1);
        }
        else if(table == 'BsRbuTculverts') {
            $scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTculverts.splice(index, 1);
        }
        else if(table == 'BsRbuTrwalls') {
            $scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTrwalls.splice(index, 1);
        }
        else if(table == 'BsRbuTdrains') {
            $scope.bsPubRodsBridsUsr.transport_land.Table_1.BsRbuTdrains.splice(index, 1);
        }
    }

    $scope.saveBsData = function(form) {
       $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsPubRodsBridsUsr),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'transport_land'
                }),
            }).success(function(data) {

                $scope.bsPubRodsBridsUsr = init_data;
                $scope.is_edit = false;

                if (data == 'False')
                    {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else
                    $("#modal-container-239453").modal('show');

            })
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
              'sector': 'transport_land',
              'com_data': {'district': $scope.district,
              'bs_date': $scope.bs_date} }),
        }).success(function(data) {

        console.log(data);
        $scope.bsPubRodsBridsUsr = data;
        })


    }

    $scope.cancelEdit = function()
    {
        $scope.is_edit = false;
        $scope.bsPubRodsBridsUsr = init_data;
    }

    //Clear Function
    $scope.clear = function() {
        console.log("clear")
        $scope.is_edit = false;
        $scope.bsPubRodsBridsUsr = angular.copy(init_data);
    }

}]);
