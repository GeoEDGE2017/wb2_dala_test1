

//dl_sum_forml_informl_dis_inputs

//Table 5
var app = angular.module('dlSummFormlInformlDisInputApp', [])

app.controller('dlSummFormlInformlDisInputController', ['$scope', '$http', function($scope, $http) {

    $scope.districts;
    $scope.incident;
    $scope.district;
    $scope.data;
    $scope.industry_names;
    $scope.service_names;

    var init_data = {
        'industry_services': {
            'Table_5': {
                    'DlNumAffBusIndustry': [
                        {
                            'assets': 'Total',
                            'num_bus_public':null,
                            'num_bus_private':null,
                        },
                    ],
                    'DlNumAffBusServices': [
                        {
                            'assets': 'Total',
                            'num_bus_public':null,
                            'num_bus_private':null,

                        },
                    ],
                    }
                }
            }

     $scope.data = angular.copy(init_data);

    $scope.getIndustryNames = function(){
        $http({
            method: "POST",
            url: "/fetch_entities_plain_column", //single column data load
            data: angular.toJson({
            'model': 'BsFrmBusIndustry', //BsFrmBusIndustry
            'sector':'industry_services', //industry_services
            'col': 'industry',
             }),
            }).success(function(data) {
                $scope.industry_names = data;
                $scope.makeIndInitData();
                console.log("data", init_data);
                $scope.clear();
            })


    }

    $scope.getServiceNames = function(){
        $http({
            method: "POST",
            url: "/fetch_entities_plain_column", //single column data load
            data: angular.toJson({
            'model': 'BsFrmBusServices', //BsFrmBusIndustry
            'sector':'industry_services', //industry_services
            'col': 'service',
             }),
            }).success(function(data) {
                $scope.service_names = data;
                $scope.makeSerInitData();
                console.log("data", init_data);
                $scope.clear();
            })

    }

    $scope.makeIndInitData = function(){
        angular.forEach($scope.industry_names, function(value, key) {
                       var ind_obj = {
                            'assets': value.industry,
                            'num_bus_public':null,
                            'num_bus_private':null,
                       }
                       init_data.industry_services.Table_5.DlNumAffBusIndustry.push(ind_obj);

                })


    }

    $scope.makeSerInitData = function(){

         angular.forEach($scope.service_names, function(value, key) {
                       var ser_obj = {
                            'assets': value.service,
                            'num_bus_public':null,
                            'num_bus_private':null,
                       }
                       init_data.industry_services.Table_5.DlNumAffBusServices.push(ser_obj);

                })

    }

    $scope.clear = function()
        {

            $scope.is_edit = false;
            $scope.data = angular.copy(init_data);

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
                ////console.log($scope.districts);
            })
        }

        if($scope.incident && $scope.district ) {
            //when district change
        }
    }

    $scope.clear = function()
        {
            $scope.is_edit = false;
            $scope.data = angular.copy(init_data);
        }


    $scope.getTotalCol = function(subTable, column, total_object){

        var table = $scope.data.industry_services.Table_5;
        var final_total = 0;

        total_object[column] = 0;

        angular.forEach(table[subTable], function(value, key) {
            final_total += value[column] ;
        })

        return final_total;
    }

    $scope.getGrandTotalCol = function(column){

        var table = $scope.data.industry_services.Table_5;
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

    $scope.saveDlData = function(form) {

        console.log($scope.data);

        $scope.submitted = true;
            if (form.$valid) {
                $http({
            method: 'POST',
            url: '/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.data,
                'com_data': {
                    'district_id': $scope.district.district__id,
                    'incident_id': $scope.incident,
                },
                'is_edit': $scope.is_edit
            }),
            dataType: 'json',
        }).success(function(data) {

                    console.log(data);
                    $scope.clear();

                    $scope.is_edit = false;

                    if (data == 'False')
                        $scope.is_valid_data = false;
                    else
                        $("#modal-container-239454").modal('show');

                })
            }
            else{
                 $("#modal-container-239453").modal('show');
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
                    'table_name': 'Table_5',
                    'sector': 'industry_services',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,

                    }
                }),
            }).success(function(data) {
                console.log("edit", data);
                // handling response from server if data are not available in this
                if((data.industry_services.Table_5.DlNumAffBusIndustry.length == 0) ||
                    (data.industry_services.Table_5.DlNumAffBusServices.length == 0)
                     ){
                    $scope.is_edit = false;
                        // do nothing or display msg that data are not available
                    }
                else{
                        $scope.data = data;
                    }
            })

        }
        else{
            alert("enter Incident, District")
        }

        }


    $scope.getIndustryNames();
    $scope.getServiceNames();



}])