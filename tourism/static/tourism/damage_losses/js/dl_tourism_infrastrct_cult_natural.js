//Table 3
var app = angular.module('dlTouismInfrstrctCultNaturalApp', ['underscore'])

app.controller('dlTouismInfrstrctCultNaturalController', function($scope, $http, $parse, _) {


    $scope.incident;
    $scope.districts;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.selectedInfrastructure;
    $scope.selectedType;
    $scope.ownership;
    $scope.new_infra;
    $scope.is_edit = false;
    $scope.inf_types = [];
    $scope.infrastructures = [];

    var init_data = {
        'tourism': {
            'Table_3': {
                'DmgInfAssets':[
                {
                    'assets':'Structure',
                    'val_dst': null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                },{
                    'assets':'Equipment',
                    'val_dst': null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                },{
                    'assets':'Total',
                    'val_dst': null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                }
                ],
                'DlInfLosses':[
                {
                    'los_type':'Income Losses',
                    'avg_val_income_year': null,
                    'val_income_year1': null,
                    'val_income_year2': null,
                    'val_los_year1': null,
                    'val_los_year2':null,
                    'tol_losses':null
                },
                {
                    'los_type':'Cleaning up of debris',
                    'avg_val_income_year': null,
                    'val_income_year1': null,
                    'val_income_year2': null,
                    'val_los_year1': null,
                    'val_los_year2':null,
                    'tol_losses':null
                },
                {
                    'los_type':'Higher operating costs',
                    'avg_val_income_year': null,
                    'val_income_year1': null,
                    'val_income_year2': null,
                    'val_los_year1': null,
                    'val_los_year2':null,
                    'tol_losses':null
                },
                {
                    'los_type':'Other unexpected expenses',
                    'avg_val_income_year': null,
                    'val_income_year1': null,
                    'val_income_year2': null,
                    'val_los_year1': null,
                    'val_los_year2':null,
                    'tol_losses':null
                },{
                    'los_type':'Total',
                    'avg_val_income_year': null,
                    'val_income_year1': null,
                    'val_income_year2': null,
                    'val_los_year1': null,
                    'val_los_year2':null,
                    'tol_losses':null
                },
                ]

            }
        }
    }

        $scope.dl_tourism_infrs = angular.copy(init_data);

    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                //console.log($scope.districts);
            })
        }

        if($scope.incident && $scope.district ) {
            $scope.fetchInfTypes();
            $scope.fetchTourismInfrastructures();
        }
    }

    $scope.fetchInfTypes = function()
    {

        $http({
        method: "POST",
//        url: "/fetch_tourism_infrastructure_types",

        url: "/fetch_entities_plain",

        data: angular.toJson({
//        'district':  $scope.district.district__id,
        'model': 'InfType',
        'sector':'tourism',
         }),
        }).success(function(data) {

        console.log(data);
        $scope.inf_types = data;

        })
    }

    $scope.fetchTourismInfrastructures = function()
    {
        console.log("fetching");
        $http({
        method: "POST",
        url: "/fetch_entities_all",
        data: angular.toJson({
        'district':  $scope.district.district__id,
        'model': 'Infrastructure',
        'sector':'tourism'
         }),
        }).success(function(data) {

        //console.log(data);
        $scope.infrastructures = data;

        })
    }

    $scope.insertAsset = function(table){

            var new_row;
            if(table == 'DmgInfAssets')
                 {
                new_row = {'assets': '','val_dst':null, 'val_pdmg':null, 'tot_dmg':null, }
                $scope.dl_tourism_infrs.tourism.Table_3[table].push(new_row);
            }
        }

    $scope.removeItem = function removeItem(table, index) {

            if(table == 'DmgInfAssets')
                {
                $scope.dl_tourism_infrs.tourism.Table_3[table].splice(index, 1);
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

//    $scope.getTotalCol = function(subTable, column){
//
//        var table = $scope.dl_tourism_infrs.tourism.Table_3;
//        var final_total = 0;
//
//        angular.forEach(table[subTable], function(value, key) {
//            final_total += value[column] ;
//        })
//
//        return final_total;
//    }

    $scope.getTotalCol = function(subTable, column, total_object){

        var table = $scope.dl_tourism_infrs.tourism.Table_3;
        var final_total = 0;

        total_object[column] = 0;

        angular.forEach(table[subTable], function(value, key) {
            final_total += value[column] ;
        })

        return final_total;
    }
    $scope.getMulitiplyedYearLoss = function(avgincome, reduction, year){

        var subTable = $scope.dl_tourism_infrs.tourism.Table_3.DlInfLosses;

        var yearName = 'val_los_year'+year;

        var finalValue;

        finalValue = avgincome * reduction;

        subTable[yearName] = finalValue;

        return finalValue;
    }

     $scope.getSumOfTwo = function(val_a, val_b, total_object, total_field){

            total_object[total_field] = val_a + val_b;

            return total_object[total_field];
    }

     $scope.clear = function()
        {

            $scope.is_edit = false;
            $scope.dl_tourism_infrs = angular.copy(init_data);

        }




        $scope.saveDlData = function(form) {

        console.log($scope.selectedType);
        $scope.submitted = true;
            if (form.$valid) {
                $http({
            method: 'POST',
            url: '/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dl_tourism_infrs,
                'com_data': {
                    'district_id': $scope.district.district__id,
                    'incident_id': $scope.incident,
                    'inf_id':$scope.selectedInfrastructure.id,
//                    'inf_type_id':$scope.selectedType.id,

                    'ownership':$scope.selectedInfrastructure.ownership,
//                    'tou_business':$scope.selectedType.business,



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
            }
            else{
                console.log("invalid");

            }
        }

        $scope.dataEdit = function() {

    if($scope.district && $scope.incident && $scope.selectedInfrastructure  ){
        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_3',
                    'sector': 'tourism',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        'inf_id': $scope.selectedInfrastructure.id,
//                        'inf_type_id': $scope.selectedType.id,
                        'ownership': $scope.selectedInfrastructure.ownership

                    }
                }),
            }).success(function(data) {
                console.log("edit", data);
                // handling response from server if data are not available in this
                if((data.tourism.Table_3.DlInfLosses.length == 0) ||
                    (data.tourism.Table_3.DmgInfAssets.length == 0)
                     ){
                    $scope.is_edit = false;
                        // do nothing or display msg that data are not available
                    }
                else{
                        $scope.dl_tourism_infrs = data;
                    }
            })
        }
            else{
                alert("enter Incident, District, Infrastructure, ownership");
                    console.log($scope.district);
                    console.log($scope.incident);
                    console.log($scope.selectedFirm);
                    console.log($scope.ownership);
            }

        }
        $scope.cancelEdit = function()
        {
             $scope.is_edit = false;
             $scope.clear();
        }

        $scope.saveInfrastructure = function(form) {
        if(!$scope.district && !$scope.selectedType){
            alert("please select an Incident, Inf Type and a District" );
            return;
        }
        if(form.$valid) {
        $scope.new_infra.ownership = $scope.ownership;
        $scope.new_infra.inf_type_id = $scope.selectedType.id;
            $http({
                method: "POST",
                url: "/add_entity_with_district",
                data: angular.toJson({
                    'model': 'Infrastructure',
                    'model_fields': $scope.new_infra,
                     'is_edit' : false,
                     'sector':'tourism',
                     'district_id' : $scope.district.district__id,
                     'inf_type_id' : $scope.selectedType.id,
                }),

            }).success(function(data) {

                console.log(data);
                $scope.new_infra.id = data;
                if(data) {

                    $scope.infrastructures.push($scope.new_infra);
                    //console.log($scope.new_firm);
                }

                $("#modal-container-218029").modal('hide');
            })
        }
    }

    //    form model saving for edit Firm NOT the main data
    $scope.editInf = function(form) {
    //console.log("adding");
        if(form.$valid) {
        //validate following filds later
            $http({
                method: "POST",
                url: "/add_entity",
                data: angular.toJson({
                    'model': 'Infrastructure',
                    'model_fields': $scope.selectedInfrastructure,
                     'is_edit' : true,
                     'sector':'tourism',
                     'district_id' : $scope.district.district__id
                }),

            }).success(function(data) {

                if(data) {
                     $scope.fetchTourismInfrastructures();
                    //$scope.firms.push($scope.new_firm);
                    //console.log($scope.new_firm);
                }

                $("#modal-container-218030").modal('hide');
            })
        }
        else{
            alert("Select an Infrastructure to edit")
        }
    }



})
