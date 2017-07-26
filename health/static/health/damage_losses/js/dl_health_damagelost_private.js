//Table 7
var app = angular.module('dlHealthDamagelostPrivateApp', [])

app.controller('dlHealthDamagelostPrivateAppController', function($scope, $http, $filter) {
    $scope.district;
    $scope.dlDate;
    $scope.incident;
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.privateClinics = [];
    $scope.private_clinic = {id: null, name: null, district_id: null};
    $scope.is_edit_model = false;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.is_null = false;
    $scope.currentBaselineDate = null;
    $scope.user_id;
    $scope.selectedCliniEdit = null;

    //initialize model
    var init_data = {
        'health': {
            'Table_7': {
                //tab 1
                'DapNapTmf' : [{
                    type_med_fac : 'Private Clinics',
                    num_affected_fac : null,
                    male : null,
                    female : null,
                }, {
                    type_med_fac : 'Others',
                    num_affected_fac : null,
                    male : null,
                    female : null,
                }, {
                    type_med_fac : 'TOTAL',
                    num_affected_fac : null,
                    male : null,
                    female : null,
                }],
                //tab 2
                'DapBefPc': [ ],
                //tab 3
                'DapBefOther': [{
                    pvt_clinics : 'Structure',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }, {
                    pvt_clinics : 'Supplies and Materials',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }, {
                    pvt_clinics : 'Equipment',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }, {
                    pvt_clinics : 'Total',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }],
            }
        }
    }

    $scope.grand_totals = { }

    $scope.dlHealthDamagelostPrivateSys = angular.copy(init_data);

    //Save Data
    $scope.saveDlData = function(form) {
        console.log($scope.dlHealthDamagelostPrivateSys);
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: 'POST',
                url: '/dl_save_data_with_array',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlHealthDamagelostPrivateSys,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                        'private_clinic': $scope.clinic,
                    },
                    'is_edit':$scope.is_edit,
                    'user_id': $scope.user_id
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False') {
                    $scope.is_valid_data = false;
                    $("#modal-container-239454").modal('show');
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }

    //Fetch Entities
    $scope.fetchPrivateClinics = function() {
        $scope.private_clinic.district_id = $scope.district;
        $http({
            method: "POST",
            url: "/health/damage_losses/fetch_entities",
            data: angular.toJson({
                'district':  $scope.district.district__id,
                'model': "PrivateClinic",
                'sector': 'health'
            }),
        }).success(function(data) {

            $scope.privateClinics = data;
            console.log('#', data);

            $http({
                //this table does not get any data from baseline tables,
                //but we pass baseline table 3, for get baseline data only
                method: 'POST',
                url: '/get_latest_bs_date',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BucMarStructure', 'BucMarSupplies', 'BucMarMequipment', 'BucMarOassets', 'BucMarcStructures', 'BucMarcCrpm', 'BucMarcMequipment', 'BucMarcOassets'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_3',
                    'sector': 'health'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'null') {
                    $scope.currentBaselineDate = "Baseline data not available in  Table 3: Baseline Information of Unit Cost of the Ministry Health System in a District";
                }
                else {
                    var result = response.data;
                    result = result.replace(/^"(.*)"$/, '$1');
                    $scope.currentBaselineDate = "Latest baseline data as at " + result;
                    console.log($scope.currentBaselineDate);
                }
            });
        })
    }

    //Add Entities
    $scope.addPrivateClinic = function() {
        if($scope.private_clinic) {
            $scope.private_clinic.district_id = $scope.district.district__id;
            console.log($scope.private_clinic);
            $http({
                method: "POST",
                url: "/add_entity",
                data: angular.toJson({
                    'model_fields': $scope.private_clinic,
                    'model': 'PrivateClinic',
                    'is_edit': $scope.is_edit_model,
                    'sector': 'health'
                }),
            }).success(function(data) {
                $("#modal-container-218029").modal('hide');
                $scope.private_clinic.id = data;

                if(!$scope.is_edit_model) {
                    if(data) {
                        $scope.privateClinics.push($scope.private_clinic);
                        console.log($scope.privateClinics);
                    }
                }
                else {
                    var private_clinic = $filter('filter')($scope.privateClinics, {id: data})[0];
                    private_clinic.name = $scope.private_clinic.name;
                }
                $scope.is_edit_model = false;
            })
        }
    }

    //Edit Entities
    $scope.editPrivateClinic = function() {
        console.log("*");
        if($scope.selectedCliniEdit) {
            $scope.selectedCliniEdit.district_id = $scope.district.district__id;
            console.log($scope.selectedCliniEdit);
            $http({
                method: "POST",
                url: "/add_entity",
                data: angular.toJson({
                    'model_fields': $scope.selectedCliniEdit,
                    'model': 'PrivateClinic',
                    'is_edit': true,
                    'sector': 'health'
                }),
            }).success(function(data) {
                $("#modal-container-218029").modal('hide');
                $scope.selectedCliniEdit.id = data;
                var selectedCliniEdit = $filter('filter')($scope.privateClinics, {id: data})[0];
                selectedCliniEdit.name = $scope.selectedCliniEdit.name;
                location.reload();
            })
        }
    }

    $scope.dlDataEdit = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;

        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':  'Table_7',
                    'sector':'health',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        'user_id': $scope.user_id,
                    },
                }),
            }).success(function(data) {
                $scope.dlHealthDamagelostPrivateSys = data;
                console.log($scope.dlHealthDamagelostPrivateSys);
            })
        }
    }

    //Edit Data
    $scope.editDlData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;

        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data_with_array',
                data: angular.toJson({
                    'table_name': 'Table_7',
                    'sector': 'health',
                    'keys': {
                        'DapBefPc': 'private_clinic',
                    },
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        'user_id': $scope.user_id,
                    },
                    'is_edit': $scope.is_edit
               }),
            }).success(function(data) {
                $scope.dlHealthDamagelostPrivateSys = data;
                console.log($scope.dlHealthDamagelostPrivateSys);
            })
        }
    }

    //Cancel Data
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.dlHealthDamagelostPrivateSys = init_data;
    }

    //Fetch Districts
    $scope.changeIncident = function getDistrictData() {
        if($scope.incident) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.district = "";
                console.log(data);
            })
        }

        if($scope.incident && $scope.district) {
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BucMarStructure', 'BucMarSupplies', 'BucMarMequipment', 'BucMarOassets', 'BucMarcStructures', 'BucMarcCrpm', 'BucMarcMequipment', 'BucMarcOassets'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_3',
                    'sector': 'health'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                console.log('*', response);
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });

                console.log('*', $scope.bs_data);
                var is_null = false;
                angular.forEach($scope.bs_data, function(value, index) {
                    if(value == null) {
                        is_null = true;
                    }
                })

                if(is_null == true) {
                    $("#modal-container-239458").modal('show');
                    console.log('baseline table or tables are empty');
                    console.log($scope.bs_data);
                    $scope.currentBaselineDate = null;
                }
                else {
                    $http({
                        method: 'POST',
                        url: '/get_latest_bs_date',
                        contentType: 'application/json; charset=utf-8',
                        data: angular.toJson({
                            'com_data': {
                                'district': $scope.district.district__id,
                                'incident': $scope.incident,
                            },
                            'table_name': 'Table_3',
                            'sector': 'health'
                        }),
                        dataType: 'json',
                    }).then(function successCallback(response) {
                        var result = response.data;
                        if(result == null) {
                            $("#modal-container-239458").modal('show');
                        }
                        else {
                            result = result.replace(/^"(.*)"$/, '$1');
                            $scope.currentBaselineDate = "Latest baseline data as at " + result;
                        }
                    });
                }
            }, function errorCallback(response) {
                console.log('baseline tables data retrieving error');
                console.log(response);
            });
        }
    }

    //Clear Function
    $scope.clear = function() {
        console.log("clear")
        $scope.is_edit = false;
        $scope.dlHealthDamagelostPrivateSys = angular.copy(init_data);
    }

    $scope.addPrivateClinicObject = function(form) {
        if(form.$valid) {
            var new_row_one =[ {
                pvt_clinics : 'Structure',
                est_replacement_cost : null,
                est_repair_cost : null,
                total_damages : null,
                est_losses_y1 : null,
                est_losses_y2 : null,
                total_losses : null,
            }, {
                pvt_clinics : 'Supplies and Materials',
                est_replacement_cost : null,
                est_repair_cost : null,
                total_damages : null,
                est_losses_y1 : null,
                est_losses_y2 : null,
                total_losses : null,
            }, {
                pvt_clinics : 'Equipment',
                est_replacement_cost : null,
                est_repair_cost : null,
                total_damages : null,
                est_losses_y1 : null,
                est_losses_y2 : null,
                total_losses : null,
            }, {
                pvt_clinics : 'Total',
                est_replacement_cost : null,
                est_repair_cost : null,
                total_damages : null,
                est_losses_y1 : null,
                est_losses_y2 : null,
                total_losses : null,
            }]
            $scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc.unshift(new_row_one);

            console.log($scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc);
        }
    }

    $scope.Test = function() {
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;
        var finaltotal4 = 0;
        var finaltotal5 = 0;
        var finaltotal6 = 0;

        var array_out = $scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc;
        angular.forEach(array_out, function(value, key) {
            var array_in = value
            angular.forEach(array_in, function(value_in, key_in) {
                if(value_in.pvt_clinics == 'Total') {
                    finaltotal1 = finaltotal1 + value_in.est_replacement_cost;
                    finaltotal2 = finaltotal2 + value_in.est_repair_cost;
                    finaltotal3 = finaltotal3 + value_in.total_damages;
                    finaltotal4 = finaltotal4 + value_in.est_losses_y1;
                    finaltotal5 = finaltotal5 + value_in.est_losses_y2;
                    finaltotal6 = finaltotal6 + value_in.total_losses;
                }
            })
        })

        var dapBefOther_array = $scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefOther;
        angular.forEach(dapBefOther_array, function(value, key) {
            if(value.pvt_clinics == 'Total') {
                finaltotal1 = finaltotal1 + value.est_replacement_cost;
                finaltotal2 = finaltotal2 + value.est_repair_cost;
                finaltotal3 = finaltotal3 + value.total_damages;
                finaltotal4 = finaltotal4 + value.est_losses_y1;
                finaltotal5 = finaltotal5 + value.est_losses_y2;
                finaltotal6 = finaltotal6 + value.total_losses;
            }
        })

        $scope.grand_totals = {
            est_replacement_cost: finaltotal1,
            est_repair_cost: finaltotal2,
            total_damages: finaltotal3,
            est_losses_y1: finaltotal4,
            est_losses_y2: finaltotal5,
            total_losses: finaltotal6,
        };

        console.log($scope.grand_totals);
        console.log($scope.dlHealthDamagelostPrivateSys);

        return $scope.grand_totals;
    }

    $scope.calTotalDapBefPc = function() {
        var array_out = $scope.dlHealthDamagelostPrivateSys.health.Table_7.DapBefPc;
        angular.forEach(array_out, function(value, key) {
            var array_in = value
            angular.forEach(array_in, function(value_in, key_in) {
                if(value_in.pvt_clinics == 'Total') {
                    finaltotal1 = finaltotal1 + value_in.est_replacement_cost;
                    finaltotal2 = finaltotal2 + value_in.est_repair_cost;
                    finaltotal3 = finaltotal3 + value_in.total_damages;
                    finaltotal4 = finaltotal4 + value_in.est_losses_y1;
                    finaltotal5 = finaltotal5 + value_in.est_losses_y2;
                    finaltotal6 = finaltotal6 + value_in.total_losses;
                }
            })
        })
    }

    $scope.tt = function() {
        console.log($scope.private_clinic);
        console.log($scope.selectedCliniEdit);
    }

    $scope.tt2 = function() {
        console.log($scope.private_clinic);
        console.log($scope.selectedCliniEdit);
    }
})
