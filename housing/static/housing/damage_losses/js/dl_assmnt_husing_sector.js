//Table 3
var app = angular.module('dlAssmntHusingApp', [])

app.controller('dlAssmntHusingController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;

    var init_data = {
        'housing': {
            'Table_3': {
                //Tab 1
                'DlDesPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'More than 5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlDesSemiPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlDesImprovised': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }],
                //Tab 2
                'DlPdesPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'More than 5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlPdesSemiPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlPdesImprovised': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }],
                //Tab 3
                'DlLosPermanent': [{
                    assets : '1 floor',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'More than 5 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'Total',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }],
                'DlLosSemiPermanent': [{
                    assets : '1 floor',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'Total',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }],
                'DlLosImprovised':[{
                    assets : '1 floor',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'Total',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }],
            }
        }
    }

    $scope.dlAssmntHusing = init_data;

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
                    'db_tables': ['BsAstAirAircrafts', 'BsAstAirEquipment', 'BsAstAirSupplies', 'BsAstAirStructures','BsAstAirEmployment','BsAstAirOthers'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_1',
                    'sector':'housing',
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

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            console.log($scope.dlAssmntHusing);
            $http({
                method: 'POST',
                url: '/dl_save_data',
               contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlAssmntHusing,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id' : $scope.incident,
                    },
                    'is_edit':$scope.is_edit,
                    'sector':'housing'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False')
                    $scope.is_valid_data = false;
               else
                    $("#modal-container-239453").modal('show');
            }, function errorCallback(response) {

            });
        }
    }
}]);

