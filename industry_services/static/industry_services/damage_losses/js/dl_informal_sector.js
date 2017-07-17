//Table 4
var app = angular.module('dlindustryServicesInfoSecApp', [])

app.controller('dlindustryServicesInfoSecController', ['$scope', '$http', function($scope, $http) {
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
    $scope.user_id;

    var init_data = {
        'industry_services': {
            'Table_4': {
                    'DlInfDmgTypBusiness':[
                    {
                        'assets':'Trading',
                        'tot_num_bus_affected':null,
                        'replace_val_ast_destroyed':null,
                        'repair_val_ast_damaged':null,
                        'tot_damages':null,
                    },{
                        'assets':'Services',
                        'tot_num_bus_affected':null,
                        'replace_val_ast_destroyed':null,
                        'repair_val_ast_damaged':null,
                        'tot_damages':null,
                    },{
                        'assets':'Food processing',
                        'tot_num_bus_affected':null,
                        'replace_val_ast_destroyed':null,
                        'repair_val_ast_damaged':null,
                        'tot_damages':null,
                    },{
                        'assets':'Others',
                        'tot_num_bus_affected':null,
                        'replace_val_ast_destroyed':null,
                        'repair_val_ast_damaged':null,
                        'tot_damages':null,
                    },{
                        'assets':'Total',
                        'tot_num_bus_affected':null,
                        'replace_val_ast_destroyed':null,
                        'repair_val_ast_damaged':null,
                        'tot_damages':null,
                    },

                ],
                'DlInfLosTypTrading': [
                    {
                        'assets':'Production Losses',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Cleaning up of debris',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Higher operating costs',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Other unexpected expenses',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Total',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },],
                'DlInfLosTypServices': [
                    {
                        'assets':'Production Losses',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Cleaning up of debris',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Higher operating costs',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Other unexpected expenses',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Total',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },],
                'DlInfLosTypFood':[
                    {
                        'assets':'Production Losses',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Cleaning up of debris',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Higher operating costs',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Other unexpected expenses',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Total',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },],
                'DlInfLosTypOther':[
                    {
                        'assets':'Production Losses',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Cleaning up of debris',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Higher operating costs',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Other unexpected expenses',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                    {
                        'assets':'Total',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },
                ],
            }
        }
    }


     $scope.dl_dmg_loss_infoml_sec = angular.copy(init_data);


    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                'incident': $scope.incident,
                'user':$scope.user_id}),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                //console.log($scope.districts);
            })
        }

        if($scope.incident && $scope.district ) {
//            $scope.fetchFirms();
//            $scope.fetchBusinessTypes();
        }
    }

     $scope.getSum2 = function(val1, val2){
        var final_val = 0;
        if(!isNaN(val1)) final_val += val1;
        if(!isNaN(val2)) final_val += val2;

        return final_val;
    }

    $scope.getSum3 = function(val1, val2, val3){
        var final_val = 0;
        if(!isNaN(val1)) final_val += val1;
        if(!isNaN(val2)) final_val += val2;
        if(!isNaN(val3)) final_val += val3;


        return final_val;
    }

    $scope.getMultiply2 = function(val1, val2){

        if(isNaN(val1)) return 0;
        if(isNaN(val2)) return 0;

        return val1 * val2 * 0.01;
    }

        $scope.getMulitiplyedYearLoss = function(value, percentage){
        if(isNaN(value)) return 0;
        if(isNaN(percentage)) return 0;

        return value * percentage * 0.01;
    }


    $scope.getTotalCol = function(subTable, column, total_object){

        var table = $scope.dl_dmg_loss_infoml_sec.industry_services.Table_4;
        var final_total = 0;

        total_object[column] = 0;

        angular.forEach(table[subTable], function(value, key) {
            final_total += value[column] ;
        })

        return final_total;
    }



    $scope.getGrandTotalCol = function(column){

        var table = $scope.dl_dmg_loss_infoml_sec.industry_services.Table_4;
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

        //console.log(table);

        return final_total/2; //since we have total fields in the initial model

    }


    $scope.clear = function()
        {

            $scope.is_edit = false;
            $scope.dl_dmg_loss_infoml_sec = angular.copy(init_data);

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
                'table_data': $scope.dl_dmg_loss_infoml_sec,
                'com_data': {
                    'district_id': $scope.district.district__id,
                    'incident_id': $scope.incident,
                    'user_id':$scope.user_id,
//                    'firm_id':$scope.selectedFirm.id,
//                    'ownership':$scope.ownership,
//                    'tou_business':$scope.selectedType.business,



                },
                'is_edit': $scope.is_edit
            }),
            dataType: 'json',
        }).success(function(data) {

                    console.log(data);
                    $scope.clear();

                    $scope.is_edit = false;

                    if (data == 'False')
                       {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                    else
                        $("#modal-container-239453").modal('show');

                })
            }
            else{
                alert("invalid data! you may have entered decimal values for number field!")
            }
        }

        $scope.dataEdit = function() {

        if($scope.district && $scope.incident ){
                    $scope.is_edit = true;
        $scope.submitted = true;

            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_4',
                    'sector': 'industry_services',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
//                        'firm_id':$scope.selectedFirm.id,
//                        'ownership':$scope.ownership,
//                        'tou_business':$scope.selectedType.business

                    }
                }),
            }).success(function(data) {
                console.log("edit", data);
                // handling response from server if data are not available in this
                if((data.industry_services.Table_4.DlInfDmgTypBusiness.length == 0) ||
                    (data.industry_services.Table_4.DlInfLosTypFood.length == 0) ||
                    (data.industry_services.Table_4.DlInfLosTypOther.length == 0) ||
                    (data.industry_services.Table_4.DlInfLosTypServices.length == 0) ||
                    (data.industry_services.Table_4.DlInfLosTypTrading.length == 0)
                     ){
                    $scope.is_edit = false;
                        // do nothing or display msg that data are not available
                    }
                else{
                        $scope.dl_dmg_loss_infoml_sec = data;
                    }
            })

        }
        else{
            alert("enter Incident, District")
        }

        }


        $scope.cancelEdit = function()
        {
             $scope.is_edit = false;
             $scope.clear();
        }


}])
