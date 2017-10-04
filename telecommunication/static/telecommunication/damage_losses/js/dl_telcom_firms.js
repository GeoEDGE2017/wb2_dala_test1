//Table 2
var app = angular.module('dlTelcomFirmsApp', [])
app.controller('dlTelcomFirmsController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data = {};
    $scope.baselineDate;
    $scope.bsCreatedDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.selectedCompany;
    $scope.currentBaselineDate = null;
    $scope.user_id;
    $scope.check_search = false;
    $scope.is_search = false;
    $scope.bsCreatedeDate;

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
                'DmgAstTelStructure': [{
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
                'DmgAstTelEquipment': [{
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
                'DmgAstTelMachinery': [{
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
                'DmgAstTelVehicles': [{
                    assets : 'Vehicles',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }],
                'DmgAstTelOthers': [{
                    assets : 'Total',
                    dmg_val_replace : null,
                    pdmg_val_repair : null,
                    tot_dmg : null,
                }],
                //Tab 2
                'DlLosses': [{
                    assets : 'Foregone income',
                    year1_los : null,
                    year2_los : null,
                    tot_losses : null,
                }, {
                    assets : 'Cleaning costs',
                    year1_los : null,
                    year2_los : null,
                    tot_losses : null,
                }, {
                    assets : 'Higher operating costs',
                    year1_los : null,
                    year2_los : null,
                    tot_losses : null,
                }, {
                    assets : 'Other unexpected expenses',
                    year1_los : null,
                    year2_los : null,
                    tot_losses : null,
                }, {
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
        if(table == 'DmgAstTelStructure') {
            new_row = {
                assets : '',
                dmg_val_replace : null,
                pdmg_val_repair : null,
                tot_dmg : null,
            }
        }
        else if(table == 'DmgAstTelEquipment') {
            new_row = {
                assets : '',
                dmg_val_replace : null,
                pdmg_val_repair : null,
                tot_dmg : null,
            }
        }
        else if(table == 'DmgAstTelMachinery') {
            new_row = {
                assets : '',
                dmg_val_replace : null,
                pdmg_val_repair : null,
                tot_dmg : null,
            }
        }
        else if(table == 'DmgAstTelOthers') {
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
        if(table == 'DmgAstTelStructure') {
            $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstTelStructure.splice(index, 1);
        }
        else if(table == 'DmgAstTelEquipment') {
            $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstTelEquipment.splice(index, 1);
        }
        else if(table == 'DmgAstTelMachinery') {
            $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstTelMachinery.splice(index, 1);
        }
        else if(table == 'DmgAstTelOthers') {
            $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstTelOthers.splice(index, 1);
        }
    }

    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id,
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }
        if($scope.incident && $scope.district) {
            $scope.check_search = true;
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BsTelCompany'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_1',
                    'sector':'telecommunication',
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                console.log('response', response);
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });
                var is_null = false;
                angular.forEach($scope.bs_data, function(value, index) {
                    if(value==null) {
                        is_null = true;
                    }
                })
                if(is_null == true) {
                    $("#modal-container-239455").modal('show');
                    console.log('baseline table or tables are empty');
                }
                else {
                    console.log('bs_data', $scope.bs_data);
                    console.log('len ', $scope.bs_data.BsTelCompany.length);

                    var company_array = [];

                    angular.forEach($scope.bs_data.BsTelCompany, function(value, key) {
                        company_array.push($scope.bs_data.BsTelCompany[key].fields);
                    });
                    $scope.companies = company_array;

                    console.log('=======================');

                    $http({
                        method: 'POST',
                        url: '/get_latest_bs_date',
                        contentType: 'application/json; charset=utf-8',
                        data: angular.toJson({
                            'db_tables': [],
                            'com_data': {
                                'district': $scope.district.district__id,
                                'incident': $scope.incident,
                            },
                            'table_name': 'Table_1',
                            'sector': 'telecommunication',
                        }),
                        dataType: 'json',
                    }).then(function successCallback(response) {
                        console.log('response', response);
                        var result = response.data;
                        if(result.bs_date == null) {
                            $("#modal-container-239458").modal('show');
                        }
                        else {
                            var bs_date = result.bs_date.replace(/^"(.*)"$/, '$1');
                            $scope.currentBaselineDate = "Latest baseline data as at " + bs_date;
                            $scope.bsCreatedDate = result.bs_created_date;
                            console.log('bs_date', result.bs_date);
                            console.log('bsCreatedDate', result.bs_created_date);
                        }
                    });
                }
            });
        }
    }

    $scope.calTotal = function(arr) {
        var finaltotal = 0;
        angular.forEach(arr, function(value, key) {
            if(value.assets != 'Total') {
                finaltotal = finaltotal + value.tot_dmg;
            }
        })
        return finaltotal;
    }

    $scope.calTotalInField = function(arr, field_name) {
        var finaltotal = 0;
        angular.forEach(arr, function(value, key) {
            if(value.assets != 'TOTAL') {
                finaltotal = finaltotal + value[field_name];
            }
        })
        return finaltotal;
    }

    $scope.calGrandTotal = function() {
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;
        var finaltotal4 = 0;
        var finaltotal5 = 0;
        var grantot = 0;

        var array1 = $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstTelStructure;
        var array2 = $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstTelEquipment;
        var array3 = $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstTelMachinery;
        var array4 = $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstTelVehicles;
        var array5 = $scope.dlTelcomFirms.telecommunication.Table_2.DmgAstTelOthers;

        angular.forEach(array1, function(value, key) {
            if(value.assets != 'Total') {
                finaltotal1 = finaltotal1 + value.tot_dmg;
            }
        })
        angular.forEach(array2, function(value, key) {
            if(value.assets == 'Total') {
                finaltotal2 = finaltotal2 + value.tot_dmg;
            }
        })
        angular.forEach(array3, function(value, key) {
            if(value.assets == 'Total') {
                finaltotal3 = finaltotal3 + value.tot_dmg;
            }
        })
        angular.forEach(array4, function(value, key) {
            finaltotal4 = finaltotal4 + value.tot_dmg;
        })
        angular.forEach(array5, function(value, key) {
            if(value.assets == 'Total') {
                finaltotal5 = finaltotal5 + value.tot_dmg;
            }
        })

        grantot = grantot + finaltotal1 + finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5;

        return grantot;
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        $scope.is_submit = true;
        if(form.$valid) {
            console.log($scope.dlTelcomFirms);
            $http({
                method : 'POST',
                url : '/dl_save_data',
                contentType : 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data' : $scope.dlTelcomFirms,
                    'com_data': {
                        'district_id' : $scope.district.district__id,
                        'incident_id' : $scope.incident,
                        'company_id' : $scope.selectedCompany.company,
                        'user_id' : $scope.user_id,
                    },
                    'bs_date': $scope.bsCreatedDate,
                    'is_edit' : $scope.is_edit,
                    'sector' : 'telecommunication'
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

            });
        }
        $scope.is_submit = false;
    }

    $scope.test = function(form) {
       console.log($scope.selectedCompany.company);
//        console.log($scope.selectedCompany.id);
    }

    $scope.editDlData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        document.getElementById("clearbtn").disabled = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_2',
                    'sector':'telecommunication',
                    'com_data': {
                        'district_id':  $scope.district.district__id,
                        'incident': $scope.incident,
                        'company_id' : $scope.selectedCompany.company
                    },
                    'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                console.log(data);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.telecommunication.Table_2, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.dlTelcomFirms = data;
                    }
                    else {
                        $("#modal-container-239456").modal('show');
                    }
                }
                else {
                    $("#modal-container-239456").modal('show');
                }
            })
        }
    }

    $scope.searchDlData = function(form) {
        document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;

        $scope.is_search = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_2',
                    'sector':'telecommunication',
                    'com_data': {
                        'district_id':  $scope.district.district__id,
                        'incident': $scope.incident,
                        'company_id' : $scope.selectedCompany.company
                    },
                    'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                console.log(data);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.telecommunication.Table_2, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.dlTelcomFirms = data;
                    }
                    else {
                        $("#modal-container-239456").modal('show');
                    }
                }
                else {
                    $("#modal-container-239456").modal('show');
                }
            })
        }
    }

    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.dlTelcomFirms = init_data;
        location.reload();
    }

//    $scope.fetchCompanies = function() {
//        console.log($scope.district);
//        if($scope.district != null) {
//            $http({
//                method: "POST",
//                url: "/fetch_company_tele",
//                data: angular.toJson({
//                    'district': $scope.district.district__id,
//                    'model': 'CompanyName',
//                    'sector':'telecommunication'
//                }),
//            }).success(function(data) {
//                console.log('see',data);
//                $scope.companies = data;
//            })
//        }
//    }

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

    //Clear Function
    $scope.clear = function() {
        console.log("init")
        $scope.is_edit = false;
        $scope.dlTelcomFirms = angular.copy(init_data);
        location.reload();
    }
}]);
