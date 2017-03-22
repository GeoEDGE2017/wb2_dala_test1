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
    $scope.businessTypes = [];
    $scope.new_firm = {id: null, name: null, ownership: null,};


    var init_data = {
        'tourism': {
            'Table_2': {
                'DlNumEmpBusiness':{
                    num_emp_male:null,
                    num_emp_female:null,
                },
                'DmgBusAstStructures':[
                {
                    'assets': 'Buildings',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                },],
                'DmgBusAstEquipment':[
                {
                    'assets': 'Computers',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                },],
                'DmgBusAstMachinery':[
                {
                    'assets': 'Generators',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                },],
                'DmgBusAstVehicle': [
                {
                    'assets': 'Cars',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                },],
                'DmgBusAstInventories':[
                {
                    'assets': 'Beds',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                },{
                    'assets': 'Furniture',
                    'val_dst':null,
                    'val_pdmg':null,
                    'tot_dmg':null,
                },],
                'DlBusLosses':{
                    'los_type':'Income Losses',
                    'avg_val_income_year':null,
                    'val_income_year1':null,
                    'val_income_year2':null,
                    'val_los_year1':null,
                    'val_los_year2':null,
                    'tol_losses':null,
                },
                'DlInfLosses':[
                    {
                    'los_type':'Cleaning up of debris',
                    'val_los_year1':null,
                    'val_los_year2':null,
                    'tol_losses':null,
                },{
                    'los_type':'Higher operating costs1',
                    'val_los_year1':null,
                    'val_los_year2':null,
                    'tol_losses':null,
                },
                {
                    'los_type':'Other unexpected expenses',
                    'val_los_year1':null,
                    'val_los_year2':null,
                    'tol_losses':null,
                }
                ],

                }
            }
        }

    $scope.dl_tourism_business = angular.copy(init_data);

    //console.log($scope.dl_tourism_business);

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
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                //console.log($scope.districts);
            })
        }

        if($scope.incident && $scope.district ) {
            $scope.fetchFirms();
            $scope.fetchBusinessTypes();
        }
    }

    $scope.fetchFirms = function()
    {

        $http({
        method: "POST",
        url: "/fetch_entities",
        data: angular.toJson({
        'district':  $scope.district.district__id,
        'model': 'Firm',
        'sector':'tourism'
         }),
        }).success(function(data) {

        //console.log(data);
        $scope.firms = data;

        })
    }

       $scope.fetchBusinessTypes = function()
    {

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
        //console.log($scope.businessTypes);

        })
    }

    $scope.saveFirm = function(form) {
    //console.log("adding");
        if(form.$valid) {
        //validate following filds later
        $scope.new_firm.ownership = $scope.ownership;
//        $scope.new_firm.district = {};
//        $scope.new_firm.district.district_id = $scope.district.district__id;
        //district__id': 4, 'district__name

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
                    //console.log($scope.new_firm);
                }

                $("#modal-container-218029").modal('hide');
            })
        }
    }

    $scope.calculate = function(){

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


    $scope.getTotalCol = function(subTable, column){

        var table = $scope.dl_tourism_business.tourism.Table_2;
        var final_total = 0;

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
        return final_total;

    }

    $scope.getMulitiplyedYearLoss = function(avgincome, reduction, year){

        var subTable = $scope.dl_tourism_business.tourism.Table_2.DlBusLosses;

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
            $scope.dl_tourism_business = angular.copy(init_data);

        }

});





