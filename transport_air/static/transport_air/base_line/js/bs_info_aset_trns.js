var app = angular.module('bsInfoAsetTransApp', [])

app.controller('bsInfoAsetTransController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;

    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'transport_air': {
            'Table_1': {
                //Tab 1
                'BsAstAirAircrafts': [{
                    assets : 'Airplanes',
                    num_pub : null,
                    num_pvt : null,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Helicopters',
                    num_pub : null,
                    num_pvt : null,
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BsAstAirEquipment': [{
                    assets : 'Office equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Baggage handling system',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Cargo handling system',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Aero bridges',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Security equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Vehicles',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BsAstAirSupplies': [{
                    assets : 'Fuel (per Liter)',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BsAstAirOthers': [{
                    assets : 'Runway',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Apron Parking areas',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    assets : 'Piers',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                //Tab 2
                'BsAstAirStructures': [{
                    assets : 'Airport Terminal buildings',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Aircraft Hangars and associated buildings',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Administrative buildings',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Fire services buildings',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Airport Maintenance',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Sri Lankan Airlines office complex',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Navigation services complex',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }, {
                    assets: 'Control tower',
                    repc_1_floor : null,
                    repc_2_3_floor : null,
                    repc_moret_3_floor : null,
                    repairc_roof : null,
                    repairc_wall : null,
                    repairc_floor : null,
                }],
                'BsAstAirEmployment': [{
                    assets : 'Total Number of Employees of Air Transportation Companies',
                    male : null,
                    female : null,
                    total : null,
                },{
                    assets : 'Total Number of Other Employees in Air Transport',
                    male : null,
                    female : null,
                    total : null,
                }],
            }
        }
    }

    $scope.bsInfoAsetTrans = init_data;

    $scope.insertAsset = function(table) {
        console.log($scope.bsInfoAsetTrans.transport_air.Table_1[table]);
        var new_row;
        if(table == 'BsAstAirAircrafts') {
            new_row = {
                assets : '',
                num_pub : null,
                num_pvt : null,
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BsAstAirEquipment') {
            new_row = {
                assets : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BsAstAirSupplies') {
            new_row = {
                assets : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BsAstAirStructures') {
            new_row = {
                tuk_companies: '',
                public: null,
                private: null,
                avg_replace_cost: null,
                avg_repair_cost: null,
            }
        }
        $scope.bsInfoAsetTrans.transport_air.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsAstAirAircrafts') {
            $scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirAircrafts.splice(index, 1);
        }
        else if(table == 'BsAstAirEquipment') {
            $scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirEquipment.splice(index, 1);
        }
        else if(table == 'BsAstAirSupplies') {
            $scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirSupplies.splice(index, 1);
        }
        else if(table == 'BsAstAirStructures') {
//            alert('BsAstAirStructures');
            $scope.bsInfoAsetTrans.transport_air.Table_1.BsAstAirStructures.splice(index, 1);
        }
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            alert('Table 1 Save');
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsInfoAsetTrans),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'transport_air'
                }),
            }).success(function(data) {

                $scope.bsLandTrnsAsst = init_data;
                $scope.is_edit = false;

                if (data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');

            })
        }
    }
}]);