//Table 2
var app = angular.module('dlTouismInfrstrctApp', ['underscore'])

app.controller('dlTouismInfrstrctController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.firms;
    $scope.ownership;
    $scope.isOwnershipPublic;
    $scope.selectedFirm;
    $scope.selectedType;
    $scope.businessTypes = [];
    $scope.is_edit = false;
    $scope.new_firm = {id: null, name: null, ownership: null,};
    $scope.user_id;
    $scope.is_edit_disable = false;

    var init_data = {
        'tourism': {
            'Table_2': {
                'DlNumEmpBusiness':[{
                    'num_emp_male':null,
                    'num_emp_female':null,
                }],
                'DmgBusAstStructures':[{
                    'assets': 'Buildings',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }, {
                    'assets': 'Total',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }],
                'DmgBusAstEquipment':[{
                    'assets': 'Computers',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }, {
                    'assets': 'Total',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }],
                'DmgBusAstMachinery':[{
                    'assets': 'Generators',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }, {
                    'assets': 'Total',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }],
                'DmgBusAstVehicle': [{
                    'assets': 'Cars',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }, {
                    'assets': 'Total',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }],
                'DmgBusAstInventories':[{
                    'assets': 'Beds',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }, {
                    'assets': 'Furniture',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }, {
                    'assets': 'Total',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }],
                'DlBusLosses':[{
                    'los_type':'Income Losses',
                    'avg_val_income_year':null,
                    'val_income_year1':null,
                    'val_income_year2':null,
                    'val_los_year1':null,
                    'val_los_year2':null,
                    'tol_losses':null,
                }, {
                    'los_type':'Cleaning costs',
                    'avg_val_income_year':null,
                    'val_income_year1':null,
                    'val_income_year2':null,
                    'val_los_year1':null,
                    'val_los_year2':null,
                    'tol_losses':null,
                }, {
                    'los_type':'Higher operating costs',
                    'avg_val_income_year':null,
                    'val_income_year1':null,
                    'val_income_year2':null,
                    'val_los_year1':null,
                    'val_los_year2':null,
                    'tol_losses':null,
                }, {
                    'los_type':'Other unexpected expenses',
                    'avg_val_income_year':null,
                    'val_income_year1':null,
                    'val_income_year2':null,
                    'val_los_year1':null,
                    'val_los_year2':null,
                    'tol_losses':null,
                }, {
                    'los_type':'Total',
                    'avg_val_income_year':null,
                    'val_income_year1':null,
                    'val_income_year2':null,
                    'val_los_year1':null,
                    'val_los_year2':null,
                    'tol_losses':null,
                }],
//                'DlInfLosses':[
//                    {
//                    'los_type':'Cleaning up of debris',
//                    'val_los_year1':null,
//                    'val_los_year2':null,
//                    'tol_losses':null,
//                },{
//                    'los_type':'Higher operating costs1',
//                    'val_los_year1':null,
//                    'val_los_year2':null,
//                    'tol_losses':null,
//                },
//                {
//                    'los_type':'Other unexpected expenses',
//                    'val_los_year1':null,
//                    'val_los_year2':null,
//                    'tol_losses':null,
//                }
//                ],

                }
            }
        }

    $scope.dl_tourism_business = angular.copy(init_data);

    $scope.insertBussiness = function(table){
            var new_row;
            if((table == 'DmgBusAstStructures')
                || (table == 'DmgBusAstMachinery')
                || (table == 'DmgBusAstEquipment')
                || (table == 'DmgBusAstVehicle')
                || (table == 'DmgBusAstInventories')
            ) {
                new_row = {'assets': '','val_dst':null, 'val_pdmg':null, 'tot_dmg':null, }
                $scope.dl_tourism_business.tourism.Table_2[table].push(new_row);
            }
        }

        $scope.removeItem = function removeItem(table, index) {
            if((table == 'DmgBusAstStructures')
                || (table == 'DmgBusAstMachinery')
                || (table == 'DmgBusAstEquipment')
                || (table == 'DmgBusAstVehicle')
                || (table == 'DmgBusAstInventories')
            ){
                $scope.dl_tourism_business.tourism.Table_2[table].splice(index, 1);
            }

        }

    $scope.changedValue=function getBsData(selectedValue) {
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
                //console.log($scope.districts);
            })
        }
        if($scope.incident && $scope.district ) {
            $scope.fetchFirms();
            $scope.fetchBusinessTypes();
            $scope.is_edit_disable = true;
        }
    }

    $scope.fetchFirms = function(){
        $http({
            method: "POST",
            url: "/fetch_entities",
            data: angular.toJson({
                'district':  $scope.district.district__id,
                'model': 'Firm',
                'sector':'tourism'
             }),
        }).success(function(data) {
        $scope.firms = data;
        })
    }

    $scope.fetchBusinessTypes = function(){
        $http({
            method: "POST",
            url: "/fetch_business_types",
            data: angular.toJson({
                'district':  $scope.district.district__id,
                'model': 'TouBusiness',
                'sector':'tourism'
             }),
        }).success(function(data) {
        $scope.businessTypes = data;
        })
    }

//  form model saving for save Firm NOT the main data
    $scope.saveForm = function(form) {
        if(form.$valid) {
            $scope.new_firm.ownership = $scope.ownership;
            $http({
                method: "POST",
                url: "/add_entity_with_district",
                data: angular.toJson({
                    'model': 'Firm',
                    'model_fields': $scope.new_firm,
                     'is_edit' : false,
                     'sector':'tourism',
                     'district_id' : $scope.district.district__id
                }),

            }).success(function(data) {
                $scope.new_firm.id = data;
                if(data) {
                   $scope.firms.push($scope.new_firm);
                }
                $("#modal-container-218029").modal('hide');
            })
        }
    }

//    form model saving for edit Firm NOT the main data
    $scope.editFirm = function(form) {
        if(form.$valid) {
        $scope.new_firm.ownership = $scope.ownership;
            $http({
                method: "POST",
                url: "/add_entity",
                data: angular.toJson({
                    'model': 'Firm',
                    'model_fields': $scope.selectedFirm,
                     'is_edit' : true,
                     'sector':'tourism',
                     'district_id' : $scope.district.district__id
                }),
            }).success(function(data) {
                $scope.new_firm.id = data;
                if(data) {
                     $scope.fetchFirms();
                }
                $("#modal-container-218030").modal('hide');
            })
        }
        else {
            alert("Select a firm to edit")
        }
    }


    //Correct way of binding data to avoid NaN
    $scope.sum_of_dst_dpmg = function(a, b, field, totalField){
        if(field){
            field[totalField] = a + b;
            //totalField
            return field[totalField]; //tot_dmg
        }
        return 0;
    }


    $scope.getTotalCol = function(subTable, column, total_object){
        var table = $scope.dl_tourism_business.tourism.Table_2;
        var final_total = 0;
        total_object[column] = 0;
        angular.forEach(table[subTable], function(value, key) {
            final_total += value[column] ;
        })
        return final_total;
    }

    $scope.getGrandTotalCol = function(column){
        var table = $scope.dl_tourism_business.tourism.Table_2;
        var final_total = 0;
        angular.forEach(table, function(subTable, key) {
            angular.forEach(subTable, function(value, key) {
                if(value){
                    if(value[column]){
                        final_total += value[column];
                    }
                }
            })
        })
        return final_total/2;
    }

    $scope.getMulitiplyedYearLoss = function(avgincome, reduction, year){
        var subTable = $scope.dl_tourism_business.tourism.Table_2.DlBusLosses;
        var yearName = 'val_los_year'+year;
        var finalValue;
        finalValue = avgincome * reduction ;
        //To get the precentage
        finalValue = finalValue * 0.01;
        console.log("finalValue",finalValue);
        subTable[0][yearName] = finalValue;
        return finalValue;
    }

    $scope.getSumOfTwo = function(val_a, val_b, total_object, total_field){
            total_object[total_field] = val_a + val_b;
            return total_object[total_field];
    }

     $scope.clear = function(){
            $scope.is_edit = false;
            $scope.dl_tourism_business = angular.copy(init_data);

     }

     $scope.saveDlData = function(form) {
        console.log($scope.selectedType);
        $scope.submitted = true;
//        if (form.$valid) {
            $http({
                method: 'POST',
                url: '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dl_tourism_business,
                    'com_data': {
                    'district_id': $scope.district.district__id,
                    'incident_id': $scope.incident,
                    'firm_id':$scope.selectedFirm.id,
                    'ownership':$scope.selectedFirm.ownership,
                    'user_id': $scope.user_id,
                    'tou_business':$scope.selectedType.business,
                },
                'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).success(function(data) {
                $scope.bs_tourism_facilities = init_data;
                $scope.is_edit = false;
                if (data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');
                })
//        }
//            else{
//                console.log("form Error", form.$error);
//                console.log("invalid data ! You may have entered decimal values for a number11");
//            }
        }


        $scope.dataEdit = function(form) {
            if($scope.district && $scope.incident && $scope.selectedFirm  && $scope.selectedType){
                $scope.is_edit = true;
                $scope.submitted = true;
                if (form.$valid) {
                    $http({
                        method: "POST",
                        url: '/dl_fetch_edit_data',
                        data: angular.toJson({
                            'table_name': 'Table_2',
                            'sector': 'tourism',
                            'com_data': {
                                'district': $scope.district.district__id,
                                'incident': $scope.incident,
                                'firm_id':$scope.selectedFirm.id,
                                'ownership':$scope.selectedFirm.ownership,
                                'tou_business':$scope.selectedType.business
                            }
                        }),
                    }).success(function(data) {
                        console.log("edit", data);
//                        // handling response from server if data are not available in this
//                        if((data.tourism.Table_2.DlBusLosses.length == 0) ||
//                            (data.tourism.Table_2.DlNumEmpBusiness.length == 0) ||
//                            (data.tourism.Table_2.DmgBusAstEquipment.length == 0) ||
//                            (data.tourism.Table_2.DmgBusAstInventories.length == 0) ||
//                            (data.tourism.Table_2.DmgBusAstMachinery.length == 0) ||
//                            (data.tourism.Table_2.DmgBusAstStructures.length == 0) ||
//                            (data.tourism.Table_2.DmgBusAstVehicle.length == 0)
//                             ) {
//                                $scope.is_edit = false;
//                                // do nothing or display msg that data are not available
//                        }
//                        else {
//                                $scope.dl_tourism_business = data;
//                        }
                        var edit_data_not_found = false;
                        if(data != null) {
                            angular.forEach(data.tourism.Table_2, function(value, index) {
                                console.log(value);
                                if(value.length == 0) {
                                    edit_data_not_found = true;
                                }
                            })
                            if(edit_data_not_found != true) {
                                $scope.dl_tourism_business = data;
                                console.log(data);
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
            else {
                alert("enter Incident, District, Firm, ownership, Type")
            }
        }
        $scope.cancelEdit = function()
        {
             $scope.is_edit = false;
             $scope.clear();
        }

        changeSelectedType = function(){
            $scope.selectedFirm = $scope.selectedFirm.ownership;
        }


});



