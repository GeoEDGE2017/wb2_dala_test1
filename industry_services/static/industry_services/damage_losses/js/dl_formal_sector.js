
//Table 3
var app = angular.module('dlindustryServicesFormalSecApp', [])

app.controller('dlindustryServicesFormalSecController', ['$scope', '$http', function($scope, $http) {

    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.firms;
    $scope.ownership;
    $scope.isOwnershipPublic;
    $scope.selectedFirm = { 'sector':null};
    $scope.selectedType;
    $scope.businessTypes = [];
    $scope.formal_formal_types = [];
    $scope.selected_formal_type = {};
    $scope.is_edit = false;
    $scope.services = [];
    $scope.subSectors = {};
    $scope.subSector = {};
    $scope.indSubSec;
    $scope.serSubSec;
    $scope.currentSubSector = [];
    $scope.selectedSubSector;
    $scope.selectedSubSectorInd;
    $scope.selectedSubSectorSer;
    $scope.classificationTypes = [];
    $scope.classification;
    $scope.selectedClassificationType;
    $scope.firm_num_male;
    $scope.firm_num_female;
    $scope.firm_description;
    $scope.firm_name;
    $scope.new_firm = {};
    $scope.isIndustrySelected = false;
    $scope.dataForm;
    $scope.firms = [];
    $scope.user_id;

    var init_data = {
        'industry_services': {
            'Table_3': {
                'DmgAstStructures':[
                    {
                        'assets':'Office buildings',
                        'replace_val_destroyed':null,
                        'repair_val_damaged':null,
                        'tot_damaged':null,
                    },
                    {
                        'assets':'Total',
                        'replace_val_destroyed':null,
                        'repair_val_damaged':null,
                        'tot_damaged':null,
                    },
                ],
                'DmgAstEquipment':[
                    {
                        'assets':'Computers',
                        'replace_val_destroyed':null,
                        'repair_val_damaged':null,
                        'tot_damaged':null,
                    },
                    {
                        'assets':'Total',
                        'replace_val_destroyed':null,
                        'repair_val_damaged':null,
                        'tot_damaged':null,
                    },
                ],
                'DmgAstMachinery':[
                    {
                        'assets':'Generators',
                        'replace_val_destroyed':null,
                        'repair_val_damaged':null,
                        'tot_damaged':null,
                    },
                    {
                        'assets':'Total',
                        'replace_val_destroyed':null,
                        'repair_val_damaged':null,
                        'tot_damaged':null,
                    },
                ],
                'DmgAstVehicles':[
                    {
                        'assets':'Trucks',
                        'replace_val_destroyed':null,
                        'repair_val_damaged':null,
                        'tot_damaged':null,
                    },
                    {
                        'assets':'Cars',
                        'replace_val_destroyed':null,
                        'repair_val_damaged':null,
                        'tot_damaged':null,
                    },
                    {
                        'assets':'Total',
                        'replace_val_destroyed':null,
                        'repair_val_damaged':null,
                        'tot_damaged':null,
                    },
                ],
                'DmgAstStocks':[
                    {
                        'assets':'Finished products',
                        'replace_val_destroyed':null,
                        'repair_val_damaged':null,
                        'tot_damaged':null,
                    },
                    {
                        'assets':'Total',
                        'replace_val_destroyed':null,
                        'repair_val_damaged':null,
                        'tot_damaged':null,
                    },
                ],
                'LosTypeLossses':[
                    {
                        'assets':'Production Losses',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },{
                        'assets':'Cleaning up of debris',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },{
                        'assets':'Higher operating costs',
                        'avg_val_output_year':null,
                        'est_val_output_year1':null,
                        'est_val_output_year2':null,
                        'los_year1':null,
                        'los_year2':null,
                        'tot_losses':null,
                    },{
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
                    }
                ],
                }
            }
        }

    $scope.dl_dmg_loss_foml_sec = angular.copy(init_data);

    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                ////console.log($scope.districts);
            })
        }
        if($scope.incident && $scope.district ) {
        }
    }

    $scope.fetchFormalFirmTypes = function(){
        $http({
            method: "POST",
            url: "/fetch_entities_plain",
            data: angular.toJson({
                'model': 'FormalFirmTypes', //FormalFirmTypes
                'sector':'industry_services' //industry_services
            }),
        }).success(function(data) {
            $scope.formal_formal_types = data;
        })
    }


    $scope.loadBusinessSubSectorsInd = function(){
        $http({
            method: "POST",
            url: "/fetch_entities_plain_column", //single column data load
            data: angular.toJson({
                'model': 'BsFrmBusIndustry', //BsFrmBusIndustry
                'sector':'industry_services', //industry_services
                'col': 'industry',
             }),
        }).success(function(data) {
            $scope.indSubSec = data;
        })
    }

    $scope.loadBusinessSubSectorsSer = function(){
        $http({
            method: "POST",
            url: "/fetch_entities_plain_column", //single column data load
            data: angular.toJson({
                'model': 'BsFrmBusServices', //BsFrmBusServices
                'sector':'industry_services', //industry_services
                'col': 'service',
            }),
        }).success(function(data) {
            $scope.serSubSec = data;
        })
    }

    $scope.changeBusinessSubSectors = function(){
        $scope.currentSubSector = $scope.subSectors[$scope.selected_formal_type.firm_type.toLowerCase()];
        $scope.subSector = null;
        $scope.isIndustrySelected = ($scope.selected_formal_type.firm_type.toLowerCase() == 'services');
        $scope.selectedFirm.firm_type_id = $scope.selected_formal_type.id;
        console.log("seltd Firm", $scope.selectedFirm);
    }

    $scope.loadBusinessClassification = function(){
        $http({
            method: "POST",
            url: "/fetch_entities_plain",
            data: angular.toJson({
                'model': 'BusinessClassification', //BsFrmBusServices
                'sector':'industry_services', //industry_services
            }),
        }).success(function(data) {
            $scope.classificationTypes = data;
        })
    }

    $scope.loadFirms = function(){
        $http({
            method: "POST",
            url: "/fetch_entities_all",
            data: angular.toJson({
                'model': 'FrmFirm',
                'sector':'industry_services',
                'district': $scope.district.district__id,
            }),
        }).success(function(data) {

            $scope.firms = data;

        })
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

    $scope.getMulitiplyedYearLoss =function(value, percentage){
        if(isNaN(value)) return 0;
        if(isNaN(percentage)) return 0;
        return value * percentage * 0.01;
    }

    $scope.getTotalCol = function(subTable, column, total_object){
        var table = $scope.dl_dmg_loss_foml_sec.industry_services.Table_3;
        var final_total = 0;
        total_object[column] = 0;
        angular.forEach(table[subTable], function(value, key) {
            final_total += value[column] ;
        })
        total_object[column] = final_total;
        return final_total;
    }

    $scope.getGrandTotalCol = function(column){
        var table = $scope.dl_dmg_loss_foml_sec.industry_services.Table_3;
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

    $scope.insertRow = function(table){
        var new_row;
        if((table == 'DmgAstStructures') ||(table == 'DmgAstEquipment') ||(table == 'DmgAstMachinery') ||(table == 'DmgAstVehicles') ||(table == 'DmgAstStocks')){
            new_row = {
            'assets':'',
            'replace_val_destroyed':null,
            'repair_val_damaged':null,
            'tot_damaged':null,
            }
            $scope.dl_dmg_loss_foml_sec.industry_services.Table_3[table].push(new_row);

        }

        $scope.removeItem = function removeItem(table, index) {
            if((table == 'DmgAstStructures') ||(table == 'DmgAstEquipment') ||(table == 'DmgAstMachinery') ||(table == 'DmgAstVehicles') ||(table == 'DmgAstStocks')){
                $scope.dl_dmg_loss_foml_sec.industry_services.Table_3[table].splice(index, 1);
            }
        }
    }


    $scope.clear = function(){
        $scope.is_edit = false;
        $scope.dl_dmg_loss_foml_sec = angular.copy(init_data);
        $scope.selectedFirm = {};
    }

    $scope.saveData = function(form){
        console.log("save firm" , $scope.selectedFirm);
        if($scope.is_edit){
            $scope.saveFirm(form);
            $scope.saveDlData(form);
        }
        else{
            $scope.setFirmData(form);
        }

    }

    $scope.setFirmData = function(form){
        if($scope.selected_formal_type.firm_type.toLowerCase() == 'industry') {
            $scope.selectedSubSector = $scope.selectedSubSectorInd;
        }
        else{
            $scope.selectedSubSector =     $scope.selectedSubSectorSer;
            console.log("ind:", $scope.subSector);
        }
        if(($scope.district ) &&($scope.selectedFirm.sector )){
             $scope.selectedFirm.district_id = $scope.district.district__id;
             $scope.saveFirm(form);
        }
        else{
            console.log("firmdata", $scope.district )
            console.log($scope.selectedFirm.firm_name )
            console.log($scope.selected_formal_type )
            console.log($scope.selectedFirm.ownership )
            console.log($scope.selectedFirm.description )
            console.log($scope.selectedFirm.classification_id )
            console.log($scope.selectedFirm.sector )
        }
    }

    //Do not call this function directly
    $scope.saveFirm = function(form){
        $scope.dataForm = form;
        if(!$scope.is_edit_model){
            $http({
                method: "POST",
                url: "/add_entity",
                data: angular.toJson({
                    'model_fields': $scope.selectedFirm,
                    'model': 'FrmFirm',
                    'is_edit': $scope.is_edit,
                    'sector': 'industry_services'
                 }),
            }).success(function(data) {
                if(data){
                    $scope.selectedFirm.id = data;
                    $("#modal-container-469842").modal('hide');
                    $("#modal-container-469840").modal('hide');
                    $scope.is_edit_model = false;
                    $scope.saveDlData(form);
                }
             }).error(function(){

             })
        }
    }

    // do not call this directly
    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if($scope.is_edit){
            $http({
                method: 'POST',
                url: '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dl_dmg_loss_foml_sec,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                        'frm_firm_id':$scope.selectedFirm.id,
                        'user_id':$scope.user_id,
                        'ownership':$scope.selectedFirm.ownership,
                    },
                    'is_edit': $scope.is_edit
                }),
            dataType: 'json',
        }).success(function(data) {
            $scope.is_edit = false;
            if (data == 'False'){
                $("#modal-container-239454").modal('show');
                $scope.is_valid_data = false;
            }
            else
                $("#modal-container-239453").modal('show');
            })
        }else if (form.$valid) {
            $http({
                method: 'POST',
                url: '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dl_dmg_loss_foml_sec,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                        'frm_firm_id':$scope.selectedFirm.id,
                        'user_id':$scope.user_id,
                        'ownership':$scope.selectedFirm.ownership,
                    },
                    'is_edit': $scope.is_edit
                 }),
                dataType: 'json',
            }).success(function(data) {
                $scope.bs_tourism_facilities = init_data;
                $scope.is_edit = false;
                if (data == 'False')
                    $scope.is_valid_data = false;
                else{
                    $("#modal-container-239453").modal('show');
                }

            })
        }else if (!form.$valid){
            console.log(form.$error);
        }
    }

    $scope.initiateEdit = function(){
        $scope.loadFirms();
        if($scope.classification && $scope.district && $scope.incident){
            $("#modal-container-218029").modal('show');
        }
        else{
            alert("please select Indident, District and Classification")
        }
    }


    $scope.dataEdit = function() {
        $("#modal-container-218029").modal('hide');
        if($scope.district && $scope.incident && $scope.selectedFirm.id){
            $scope.is_edit = true;
            $scope.submitted = true;
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                'table_name': 'Table_3',
                'sector': 'industry_services',
                'com_data': {
                    'district': $scope.district.district__id,
                    'incident': $scope.incident,
                    'frm_firm': $scope.selectedFirm.id,
                }
            }),
            }).success(function(data) {
                console.log("edit", data);
                if((data.industry_services.Table_3.DmgAstEquipment.length == 0) ||(data.industry_services.Table_3.DmgAstMachinery.length == 0) ||(data.industry_services.Table_3.DmgAstStocks.length == 0) ||(data.industry_services.Table_3.DmgAstStructures.length == 0) ||(data.industry_services.Table_3.LosTypeLossses.length == 0) ||(data.industry_services.Table_3.DmgAstVehicles.length == 0)){
                    $scope.is_edit = false;
                }
                else{
                    $scope.dl_dmg_loss_foml_sec = data;
                }
            })

        }
        else{
           console.log("enter Incident, District")
        }


    }

    $scope.setClassificationID = function(){
        $scope.selectedFirm.classification_id = $scope.classification.id;
        console.log("selectedFirm", $scope.selectedFirm);
    }


   $scope.loadAllData = function(){

        if($scope.district && $scope.incident && $scope.selectedFirm){
                    $scope.is_edit = true;
        $scope.submitted = true;
        $scope.new_firm = $scope.selectedFirm;
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_3',
                    'sector': 'industry_services',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        'frm_firm': $scope.selectedFirm.id,
                    }
                }),
            }).success(function(data) {
                console.log("edit", data);
                // handling response from server if data are not available in this
                if((data.industry_services.Table_3.DmgAstEquipment.length == 0) ||
                    (data.industry_services.Table_3.DmgAstMachinery.length == 0) ||
                    (data.industry_services.Table_3.DmgAstStocks.length == 0) ||
                    (data.industry_services.Table_3.DmgAstStructures.length == 0) ||
                    (data.industry_services.Table_3.DmgAstVehicles.length == 0) ||
                    (data.industry_services.Table_3.LosTypeLossses.length == 0)
                     ){
                    $scope.is_edit = false;
                    }
                else
                {
                    $scope.dl_dmg_loss_foml_sec = data;
                    $scope.classification = {};
                    $scope.classification.id = $scope.selectedFirm.classification_id;
                    $scope.selected_formal_type.id = $scope.selectedFirm.firm_type_id;
                    $scope.subSector.industry = $scope.selectedFirm.sector;
                    $scope.subSector.service = $scope.selectedFirm.sector;
                    console.log("classification set4", $scope.selectedFirm);
                    $("#modal-container-469842").modal('hide');
                    $("#modal-container-469840").modal('hide');

                }
            })
        }
        else{

            if(!$scope.district) { console.log("no district") }
            if(!$scope.incident) { console.log("no incident") }
            if(!$scope.selectedFirm) { console.log("no firm") }
            alert("District, Incident needed ! ")
        }
   }

   $scope.changeSubSector = function(){
        $scope.selectedFirm.sector = $scope.subSector;
   }

    $scope.fetchFormalFirmTypes();
    $scope.loadBusinessSubSectorsInd();
    $scope.loadBusinessSubSectorsSer();
    $scope.loadBusinessClassification();

}])
