//Table 4
var app = angular.module('dlRuralWtrSplyApp', [])

app.controller('dlRuralWtrSplyController', ['$scope', '$http', function($scope, $http) {
     $scope.district;
     $scope.incident;
     $scope.bs_data=[];
     $scope.dl_data={};
     $scope.is_edit = false;
     $scope.submitted = false;
     $scope.Districts=[];
     $scope.is_valid_data = true;

//Initialize Data
    var init_data = {
        'water_supply': {
            'Table_4': {
                //Tab 1
                'DlRuralDmg': [{
                    type_water_supply : 'Type 1: Open production well',
                    families_affected : null,
                    tot_destroyed_assets : null,
                    part_damaged_assets : null,
                    tot_damages : null,
                }, {
                    type_water_supply : 'Type 2: Closed well with hand pump',
                    families_affected : null,
                    tot_destroyed_assets : null,
                    part_damaged_assets : null,
                    tot_damages : null,
                }, {
                    type_water_supply : 'Type 3: Closed well with storage and electric water pump and tap stands',
                    families_affected : null,
                    tot_destroyed_assets : null,
                    part_damaged_assets : null,
                    tot_damages : null,
                }, {
                    type_water_supply : 'Type 4: Others',
                    families_affected : null,
                    tot_destroyed_assets : null,
                    part_damaged_assets : null,
                    tot_damages : null,
                }, {
                    type_water_supply : 'TOTAL',
                    families_affected : null,
                    tot_destroyed_assets : null,
                    part_damaged_assets : null,
                    tot_damages : null,
                }],
                //Tab 2
                'DlRuralLos':[{
                    type_water_supply : 'Type 1: Open production well',
                    cleaning_debris : null,
                    high_ocost : null,
                    other_unexpected_exps : null,
                    tot_los : null,
                }, {
                    type_water_supply : 'Type 2: Closed well with hand pump',
                    cleaning_debris : null,
                    high_ocost : null,
                    other_unexpected_exps : null,
                    tot_los : null,
                }, {
                    type_water_supply : 'Type 3: Closed well with storage and electric water pump and tap stands',
                    cleaning_debris : null,
                    high_ocost : null,
                    other_unexpected_exps : null,
                    tot_los : null,
                }, {
                    type_water_supply : 'Type 4: Others',
                    cleaning_debris : null,
                    high_ocost : null,
                    other_unexpected_exps : null,
                    tot_los : null,
                }, {
                    type_water_supply : 'TOTAL',
                    cleaning_debris : null,
                    high_ocost : null,
                    other_unexpected_exps : null,
                    tot_los : null,
                }],
            }
        }
    }

    $scope.dlRuralWtrSply = angular.copy(init_data);

//Get Districts and related baseline Data
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
                    'db_tables': ['BimRuralWater'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_2',
                    'sector': 'water_supply',
                }),
                  dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });
                console.log(data);
            }, function errorCallback(response) {

            });
        }
    }

//Save Data
    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: 'POST',
                url:'/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlRuralWtrSply,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                    },
                    'is_edit' : $scope.is_edit,
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');
            },
            function errorCallback(response) {
                console.log(response);
            });
        }
    }

     $scope.dlDataEdit = function(form){

    $scope.is_edit = true;
    $scope.submitted = true;

    $http({
    method: "POST",
    url: '/dl_fetch_edit_data',
    data: angular.toJson({
    'table_name':  'Table_4',
    'sector':'water_supply',
    'com_data': {
           'district':  $scope.district.district__id,
            'incident': $scope.incident,
          },
           'is_edit':$scope.is_edit
           }),
    }).success(function(data) {

    console.log(data);

    $scope.dlRuralWtrSply = data;
    })

}

//Cancel Edit
    $scope.cancelEdit = function(){
       $scope.is_edit = false;
        $scope.dlRuralWtrSply = init_data;

}

//Clear Function
    $scope.clear = function() {
        console.log('done');
        $scope.is_edit = false;
        $scope.dlRuralWtrSply = angular.copy(init_data);

    }



}]);
