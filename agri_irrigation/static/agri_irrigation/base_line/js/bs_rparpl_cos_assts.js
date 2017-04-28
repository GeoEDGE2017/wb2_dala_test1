//Table 2
var app = angular.module('bsRparplCosAsstsApp', ['underscore'])

app.controller('bsRparplCosAsstsController',function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.division;
    $scope.region;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;

//Initialize Data
    var init_data = {
        'agri_irrigation': {
            'Table_2': {
                'BsRciaMajorTanks': [{
                    irrigation_facility : 'Bund',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Riprap',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Spill',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                }, {
                    irrigation_facility : 'Main Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Distributor Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Field Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }],
                'BsRciaMediumTanks': [{
                    irrigation_facility : 'Bund',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,

                }, {
                    irrigation_facility : 'Riprap',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Spill',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Main Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Distributor Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Field Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }],
                'BsRciaMinorTanks': [{
                    irrigation_facility : 'Bund',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Riprap',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Spill',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Main Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Distributor Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Field Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }],
                'BsRciaAnicuts': [{
                    irrigation_facility : 'Bund',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Riprap',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Spill',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Main Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Distributor Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Field Canals',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }],
                'BsRciaOtherStructures': [{
                    irrigation_facility : 'Roads',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Bridges',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Culverts',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Causeways',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Retaining walls',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Interlock pavings',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Regulators',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Turnout',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Drops',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Retaining walls',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Canal linings',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Trough structures',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Canal spill	',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Under crossing',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'Over crossing',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }],
                'BsRciRiverEmbankmnt': [{
                    irrigation_facility : 'River Embankments',
                    avg_repair_cost : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }],
                'BsRciBuildings': [{
                    irrigation_facility : '1 floor',
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : '2-3 floors',
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }, {
                    irrigation_facility : 'More than 3 floors',
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                    avg_replacement_cost : null,
                    division:$scope.division,
                    region:$scope.region,
                }],
            }
        }
    }

    $scope.bsRparplCosAssts = angular.copy(init_data);

//Add Enumerate Fields
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

//Remove Enumerate Fileds
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

//Save Data
    $scope.saveBsData = function(form) {
        var array = $scope.bsRparplCosAssts.agri_irrigation.Table_2;
      var details = _.map(array, function(model_array) {
      _.map(model_array, function(model) {
          model.division = $scope.division;
          model.region = $scope.region;


      });
      });
        $scope.submitted = true;
        if (form.$valid) {
            $http({
            method: "POST",
            url: "/bs_save_data",
            data: angular.toJson({
            'table_data': ($scope.bsRparplCosAssts),
            'com_data': {'district': $scope.district,
            'bs_date': $scope.bs_date,
            },
            'is_edit': $scope.is_edit }),
            }).success(function(data) {

             $scope.bsRparplCosAssts = init_data;
             $scope.is_edit = false;

             if(data == 'False')
              {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
             else
              $("#modal-container-239453").modal('show');
        })
        }

        }

//Edit data
    $scope.bsHsDataEdit = function(){
    $scope.submitted = true;

   $scope.is_edit = true;
    $http({
    method: "POST",
    url: "/bs_fetch_edit_data",
    data: angular.toJson({'table_name': 'Table_2', 'sector': 'agri_irrigation',
    'com_data': {
          'district': $scope.district,
          'bs_date': $scope.bs_date,
          'division': $scope.division,
          'region':$scope.region,
          } }),
    }).success(function(data) {

    console.log(data);
    $scope.bsRparplCosAssts = data;
    })
}

//Cancel Edit
    $scope.cancelEdit = function(){
    $scope.is_edit = false;
    $scope.bsRparplCosAssts = init_data;
}

//Clear Function
    $scope.clear = function() {
        console.log('done');
        $scope.is_edit = false;
        $scope.bsRparplCosAssts = angular.copy(init_data);


    }

});
