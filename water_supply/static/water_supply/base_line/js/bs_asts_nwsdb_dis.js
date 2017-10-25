//Table 1
var app = angular.module('bsAstsNwsdbDisApp', ['underscore']);
app.controller('bsAstsNwsdbDisController', function($scope, $http,$parse, _) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.BiaWaterUsers_num_clients = null;
    $scope.BiaWaterUsers_daily_demand = null;
    $scope.BiaWaterUsers_annual_demand = null;
    $scope.BiaWaterUsers_rate = null;
    $scope.is_edit_disable = false;
    $scope.user_id;
    $scope.check_search = false;
    $scope.is_search = false;

    //initialize model
    var init_data = {
        'water_supply' : {
            'Table_1' : {
                'BiaNumEmployees' : [{
                    male : null,
                    female : null,
                }],
                'BiaWaterUsers': [{
                    type_wusers : 'Residential',
                    num_clients : null,
                    daily_demand : null,
                    annual_demand : null,
                    rate : null,
                }, {
                    type_wusers : 'Commercial',
                    num_clients : null,
                    daily_demand : null,
                    annual_demand : null,
                    rate : null,
                }, {
                    type_wusers : 'Industrial',
                    num_clients : null,
                    daily_demand : null,
                    annual_demand : null,
                    rate : null,
                }, {
                    type_wusers : 'Total',
                    num_clients : null,
                    daily_demand : null,
                    annual_demand : null,
                    rate : null,
                }, {
                    type_wusers : 'Average Income Per Year (LKR/Year)',
                    num_clients : null,
                    daily_demand : null,
                    annual_demand : null,
                    rate : null,
                }],
                'BiaWaterIntake': [{
                    components : 'Structures',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BiaTreatmentPlant': [{
                    components : 'Structures',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
                'BiaWaterDistribution': [{
                    components : 'Structures',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, ],
                'BiaMainOffice' : [{
                    components : 'Structures',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Inventories',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }, {
                    components : 'Vehicles',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                }],
            }
        }
    }

    $scope.bsAstsNwsdbDis = angular.copy(init_data);

    //Disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.bs_date){
            $scope.is_edit_disable = true;
            $scope.check_search = true;
        }
        else {
            $scope.is_edit_disable = false;
            $scope.check_search = false;

        }
    }

    //Add Enumerate Fileds
    $scope.insertAssets = function(table) {
        var new_row;
        if(table == 'BiaWaterUsers') {
            new_row = {
                type_wusers : '',
                num_clients : null,
                daily_demand : null,
                annual_demand : null,
                rate : null,
            }
        }
        else if(table == 'BiaWaterIntake') {
            new_row = {
                components : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BiaTreatmentPlant') {
            new_row = {
                components : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BiaWaterDistribution') {
            new_row = {
                components : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }
        else if(table == 'BiaMainOffice') {
            new_row = {
                components : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
            }
        }

        $scope.bsAstsNwsdbDis.water_supply.Table_1[table].push(new_row);
    }

    //Remove Enumerate Fileds
    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BiaWaterUsers') {
            $scope.bsAstsNwsdbDis.water_supply.Table_1.BiaWaterUsers.splice(index, 1);
        }
        else if(table == 'BiaWaterIntake') {
            $scope.bsAstsNwsdbDis.water_supply.Table_1.BiaWaterIntake.splice(index, 1);
        }
        else if(table == 'BiaTreatmentPlant') {
            $scope.bsAstsNwsdbDis.water_supply.Table_1.BiaTreatmentPlant.splice(index, 1);
        }
        else if(table == 'BiaWaterDistribution') {
            $scope.bsAstsNwsdbDis.water_supply.Table_1.BiaWaterDistribution.splice(index, 1);
        }
        else if(table == 'BiaMainOffice') {
            $scope.bsAstsNwsdbDis.water_supply.Table_1.BiaMainOffice.splice(index, 1);
        }
    }

    //Save Data
    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            console.log($scope.bsAstsNwsdbDis);
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsAstsNwsdbDis),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id':$scope.user_id,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                $scope.updateEnums();
                if(data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
                $scope.bsAstsNwsdbDis = init_data;
                $scope.is_edit = false;
            })
        }
    }

    //Calculate Total
    $scope.getTotal = function(model, property) {
        var array = $scope.bsAstsNwsdbDis.water_supply.Table_1[model];
        var cumulative = null;
        var sums = _.map(array, function(obj) {
            if(obj.type_wusers != 'Total' &&  obj.type_wusers != 'Average Income Per Year (LKR/Year)'){
                cumulative += obj[property];
                console.log(cumulative);
                return cumulative;
            }
        });

        var the_string = model + '_' + property;
        var model = $parse(the_string);
        model.assign($scope, cumulative);
    }

    //Edit Data
    $scope.editBsData = function(form) {
        $scope.submitted = true;
        $scope.is_edit = true;
        document.getElementById("clearbtn").disabled = true;
        $http({
        method: "POST",
        url: "/bs_fetch_edit_data",
        data: angular.toJson({
              'table_name': 'Table_1',
              'sector': 'water_supply',
              'com_data': {'district': $scope.district,
              'bs_date': $scope.bs_date} }),
        }).success(function(data) {
            console.log(data);
            var edit_data_not_found = false;
            if(data != null) {
                angular.forEach(data.water_supply.Table_1, function(value, index) {
                    console.log(value);
                    if(value.length == 0) {
                        edit_data_not_found = true;
                    }
                })
                if(edit_data_not_found != true) {
                    $scope.bsAstsNwsdbDis = data;
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

    //Search Data
    $scope.searchBsData = function(form) {
        document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		console.log("test", $scope.district);
		console.log("test", $scope.bs_date);
		$scope.is_search = true;
        $http({
            method: "POST",
            url: "/bs_fetch_edit_data",
            data: angular.toJson({
                'table_name': 'Table_1',
                'sector': 'water_supply',
                'com_data': {'district': $scope.district,
                'bs_date': $scope.bs_date}
            }),
        }).success(function(data) {
            console.log(data);
            var edit_data_not_found = false;
            if(data != null) {
                angular.forEach(data.water_supply.Table_1, function(value, index) {
                    console.log(value);
                    if(value.length == 0) {
                        edit_data_not_found = true;
                    }
                })
                if(edit_data_not_found != true) {
                    $scope.bsAstsNwsdbDis = data;
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

    //Cancel Edit
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bsLandTrnsAsst = init_data;
        location.reload();
    }

    //Calculate Grand Total
    $scope.calGrandTotal=function() {
        var finaltotal = 0;
        var grantot = 0;
        var array1 = $scope.bsAstsNwsdbDis.water_supply.Table_1.BiaWaterUsers;
        console.log('array',array1);
        angular.forEach(array1, function(value, key) {
            if(value.type_wusers != 'Total' && value.type_wusers != 'Average Income Per Year (LKR/Year)'){
                finaltotal = finaltotal + (value.annual_demand  * value.rate);
                console.log('key',value.rate);
            }
        })

        grantot = finaltotal;
        return grantot;
    }

    //Clear Function
    $scope.clear = function() {
        console.log('done');
        $scope.is_edit = false;
        $scope.bsAstsNwsdbDis = angular.copy(init_data);
        location.reload();
    }

    $scope.totalFunc = function(array,property) {
        if(!angular.isUndefined($scope.bsAstsNwsdbDis)) {
            var tot = 0;
            angular.forEach($scope.bsAstsNwsdbDis.water_supply.Table_1[array], function(value, index) {
                if(value[property] != null && value.type_wusers != 'Total') {
                    tot = tot + value[property];
                }
            })
            return tot;
        }
    }

    $scope.enum_data = {
        'water_supply': {
            'Table_1': {
                'BiaWaterIntake': [],
                'BiaTreatmentPlant': [],
                'BiaWaterDistribution': [],
                'BiaMainOffice': [],
            }
        }
    }

    $scope.getEnumDataFromStart = function() {
        var biaWaterIntake_e_index = 0;
        angular.forEach($scope.bsAstsNwsdbDis.water_supply.Table_1.BiaWaterIntake, function(value, index, key) {
            if(value.components != 'Structures' && value.components != 'Equipment') {
                var enum_val = {
                    oldasset: value.components,
                    newasset: null,
                    enum_index: biaWaterIntake_e_index,
                    bs_asset_field: 'components',
                    dl_tables: {
                        'Table_3': {
                            'DlcwDmgWaterIntake': {
                                dl_asset_field: 'assets'
                            }
                        }
                    }
                };
                biaWaterIntake_e_index = biaWaterIntake_e_index + 1;
                $scope.enum_data.water_supply.Table_1.BiaWaterIntake.push(enum_val);
            }
        })
        var biaTreatmentPlant_e_index = 0;
        angular.forEach($scope.bsAstsNwsdbDis.water_supply.Table_1.BiaTreatmentPlant, function(value, index, key) {
            if(value.components != 'Structures' && value.components != 'Equipment') {
                var enum_val = {
                    oldasset: value.components,
                    newasset: null,
                    enum_index: biaTreatmentPlant_e_index,
                    bs_asset_field: 'components',
                    dl_tables: {
                        'Table_3': {
                            'DlcwDmgWaterTreatment': {
                                dl_asset_field: 'assets'
                            }
                        }
                    }
                };
                biaTreatmentPlant_e_index = biaTreatmentPlant_e_index + 1;
                $scope.enum_data.water_supply.Table_1.BiaTreatmentPlant.push(enum_val);
            }
        })
        var biaWaterDistribution_e_index = 0;
        angular.forEach($scope.bsAstsNwsdbDis.water_supply.Table_1.BiaWaterDistribution, function(value, index, key) {
            if(value.components != 'Structures' && value.components != 'Equipment') {
                var enum_val = {
                    oldasset: value.components,
                    newasset: null,
                    enum_index: biaWaterDistribution_e_index,
                    bs_asset_field: 'components',
                    dl_tables: {
                        'Table_3': {
                            'DlcwDmgWaterDisribution': {
                                dl_asset_field: 'assets'
                            }
                        }
                    }
                };
                biaWaterDistribution_e_index = biaWaterDistribution_e_index + 1;
                $scope.enum_data.water_supply.Table_1.BiaWaterDistribution.push(enum_val);
            }
        })
        var biaMainOffice_e_index = 0;
        angular.forEach($scope.bsAstsNwsdbDis.water_supply.Table_1.BiaMainOffice, function(value, index, key) {
            if(value.components != 'Structures' && value.components != 'Equipment') {
                var enum_val = {
                    oldasset: value.components,
                    newasset: null,
                    enum_index: biaMainOffice_e_index,
                    bs_asset_field: 'components',
                    dl_tables: {
                        'Table_3': {
                            'DlcwDmgMainOffice': {
                                dl_asset_field: 'assets'
                            }
                        }
                    }
                };
                biaMainOffice_e_index = biaMainOffice_e_index + 1;
                $scope.enum_data.water_supply.Table_1.BiaMainOffice.push(enum_val);
            }
        })
        console.log('getEnumDataFromStart', $scope.enum_data);
    }

    $scope.getEnumDataFromEnd = function() {
        console.log($scope.bsAstsNwsdbDis.water_supply.Table_1);
        var biaWaterIntake_e_index = 0;
        angular.forEach($scope.bsAstsNwsdbDis.water_supply.Table_1.BiaWaterIntake, function(value, key) {
            if(value.components != 'Structures' && value.components != 'Equipment') {
                angular.forEach($scope.enum_data.water_supply.Table_1.BiaWaterIntake, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.water_supply.Table_1.BiaWaterIntake);
                    if(each_enum.enum_index == biaWaterIntake_e_index) {
                        $scope.enum_data.water_supply.Table_1.BiaWaterIntake[index].newasset = value.components;
                    }
                })
                biaWaterIntake_e_index = biaWaterIntake_e_index + 1;
            }
        })
        var biaTreatmentPlant_e_index = 0;
        angular.forEach($scope.bsAstsNwsdbDis.water_supply.Table_1.BiaTreatmentPlant, function(value, key) {
            if(value.components != 'Structures' && value.components != 'Equipment') {
                angular.forEach($scope.enum_data.water_supply.Table_1.BiaTreatmentPlant, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.water_supply.Table_1.BiaTreatmentPlant);
                    if(each_enum.enum_index == biaTreatmentPlant_e_index) {
                        $scope.enum_data.water_supply.Table_1.BiaTreatmentPlant[index].newasset = value.components;
                    }
                })
                biaTreatmentPlant_e_index = biaTreatmentPlant_e_index + 1;
            }
        })
        var biaWaterDistribution_e_index = 0;
        angular.forEach($scope.bsAstsNwsdbDis.water_supply.Table_1.BiaWaterDistribution, function(value, key) {
            if(value.components != 'Asset_01' && value.components != 'Asset_02') {
                angular.forEach($scope.enum_data.water_supply.Table_1.BiaWaterDistribution, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.water_supply.Table_1.BiaWaterDistribution);
                    if(each_enum.enum_index == biaWaterDistribution_e_index) {
                        $scope.enum_data.water_supply.Table_1.BiaWaterDistribution[index].newasset = value.components;
                    }
                })
                biaWaterDistribution_e_index = biaWaterDistribution_e_index + 1;
            }
        })
        var biaMainOffice_e_index = 0;
        angular.forEach($scope.bsAstsNwsdbDis.water_supply.Table_1.BiaMainOffice, function(value, key) {
            if(value.components != 'Structures' && value.components != 'Equipment') {
                angular.forEach($scope.enum_data.water_supply.Table_1.BiaMainOffice, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.water_supply.Table_1.BiaMainOffice);
                    if(each_enum.enum_index == biaMainOffice_e_index) {
                        $scope.enum_data.water_supply.Table_1.BiaMainOffice[index].newasset = value.components;
                    }
                })
                biaMainOffice_e_index = biaMainOffice_e_index + 1;
            }
        })
        console.log('getEnumDataFromEnd', $scope.enum_data);
    }

    $scope.updateEnums = function() {
        $scope.getEnumDataFromEnd();
        $http({
            method: 'POST',
            url: '/update_enumirate_dl_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'enum_data': ($scope.enum_data),
                'com_data': {
                    'district': $scope.district,
                    'bs_date': $scope.bs_date,
                    'user_id': $scope.user_id
                },
                'is_edit': $scope.is_edit,
                'sector': 'water_supply'
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
            console.log(response);
//            if(response.data == 'False') {
//                alert('False');
//            }
//            else {
//                alert('True');
//            }
        }, function errorCallback(response) {

        });
    }

})
