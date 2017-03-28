//Table 2
var app = angular.module('dlTelcomFirmsApp', [])

app.controller('dlTelcomFirmsController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;

    var init_data = {
        'telecommunication': {
            'Table_2': {
                //Tab 1
                'DlNumEmpDistrict': [{
                    num_emp_male : null,
                    mun_emp_female : null,
                    tot_emp : null,
                    num_clients : null,
                }],
                'DmgAstStructure': [{
                    assets : 'Towers',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Outside plant networks',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Submarine cables',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Network Equipment buildings',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Office buildings & Land properties',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Workshops',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Warehouses',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Total',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }],
                'DmgAstEquipment': [{
                    assets : 'Indoor Customer premises',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Indoor Operator premises',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Outdoor Customer premises',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Outdoor Operator premises',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Warehouse inventory',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Power Systems',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Office equipment',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Total',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }],
                'DmgAstMachinery': [{
                    assets : 'Workshop machinery and Tools',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Heavy machinery',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }, {
                    assets : 'Total',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }],
                'DmgAstVehicles': [{
                    assets : 'Vehicles',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }],
                'DmgAstOthers': [],
                //Tab 2
                'DlLosses': [{
                    assets : 'Foregone income',
                    year1_los : null,
                    year2_los : null,
                    tot_losses : null,
                }, {
                    assets : 'Cleaning up of debris',
                    year1_los : null,
                    year2_los : null,
                    tot_losses : null,
                }, {
                    assets : 'Higher operating costs',
                    year1_los : null,
                    year2_los : null,
                    tot_losses : null,
                },  {
                    assets : 'Other unexpected expenses',
                    year1_los : null,
                    year2_los : null,
                    tot_losses : null,
                },  {
                    assets : 'TOTAL',
                    year1_los : null,
                    year2_los : null,
                    tot_losses : null,
                }],
            }
        }
    }

    $scope.dlTelcomFirms = init_data;

    $scope.insertAsset = function(table) {
        console.log($scope.dlTelcomFirms.telecommunication.Table_2[table]);
        var new_row;
        if(table == 'DmgAstStructure') {
            new_row = {
                assets : '',
                dmg_val_replace : null,
                pdmg_val_repair : null,
                tot_dmg : null,
            }
        }
        else if(table == 'DmgAstEquipment') {
            new_row = {
                assets : '',
                dmg_val_replace : null,
                pdmg_val_repair : null,
                tot_dmg : null,
            }
        }
        else if(table == 'DmgAstMachinery') {
            new_row = {
                assets : '',
                dmg_val_replace : null,
                pdmg_val_repair : null,
                tot_dmg : null,
            }
        }
        else if(table == 'DmgAstOthers') {
            new_row = {
                assets : '',
                dmg_val_replace : null,
                pdmg_val_repair : null,
                tot_dmg : null,
            }
        }
        $scope.dlTelcomFirms.telecommunication.Table_2[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'DmgAstStructure') {
            $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstStructure.splice(index, 1);
        }
        else if(table == 'DmgAstEquipment') {
            $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstEquipment.splice(index, 1);
        }
        else if(table == 'DmgAstMachinery') {
            $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstMachinery.splice(index, 1);
        }
        else if(table == 'DmgAstOthers') {
            $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstOthers.splice(index, 1);
        }
    }

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
                    'table_name': 'Table_2',
                    'sector':'telecommunication',
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

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: 'POST',
                url: '/dl_save_data',
               contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlTelcomFirms,
                    'com_data': {
                       'district_id': $scope.district.district__id,
                       'incident_id' : $scope.incident,
                    },
                    'is_edit':$scope.is_edit,
                    'sector':'telecommunication'
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

    $scope.fetchOwnership = function() {
        if($scope.new_department) {
            $http({
            method: "POST",
            url: "/other_govn_services/damage_losses/fetch_ownership",
            data: angular.toJson({
            'department': $scope.new_department.id,
             }),
            }).success(function(data) {
                $scope.ownership = data;
                console.log(data);
            })
        }
    }
}]);
