//Table 6
var app = angular.module('dlGovnAdmnAsetsApp', ['underscore'])

app.controller('dlGovnAdmnAsetsController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;

    $scope.dlDate;
    $scope.bs_data={};

    $scope.baselineDate;

    $scope.is_edit = false;
    $scope.is_valid_data = true;

    var init_data = {
        'transport_land' : {
            'Table_6': {
                'DlGacDmgStructures' :[{
                    assets : '1 floor structure',
                    num_tot_destroyed : null,
                    num_square_meters : null,
                    damages : null,
                },{
                    assets : '2-3 floors structure',
                    num_tot_destroyed : null,
                    num_square_meters : null,
                    damages : null,
                },{
                    assets : 'More than 3 floors',
                    num_tot_destroyed : null,
                    num_square_meters : null,
                    damages : null,
                },{
                    assets : 'Total',
                    num_tot_destroyed : null,
                    num_square_meters : null,
                    damages : null,
                }],
                'DlGacPdmgStructures' : [{
                    assets : '1 floor structure',
                    num_part_damaged : null,
                    damaged_roof : null,
                    damaged_walls : null,
                    damaged_floors : null,
                    damages : null,
                },{
                    assets : '2-3 floors structure',
                    num_part_damaged : null,
                    damaged_roof : null,
                    damaged_walls : null,
                    damaged_floors : null,
                    damages : null,
                },{
                    assets : 'More than 3 floors',
                    num_part_damaged : null,
                    damaged_roof : null,
                    damaged_walls : null,
                    damaged_floors : null,
                    damages : null,
                },{
                    assets : 'Total',
                    num_part_damaged : null,
                    damaged_roof : null,
                    damaged_walls : null,
                    damaged_floors : null,
                    damages : null,
                }],
                'DlGacPdmgEquipment' : [{
                    assets : 'Computers',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Furniture',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Total',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },],
                'DlGacPdmgMachinery' : [{
                    assets : 'Vehicles',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Generators',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Elevators',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'Total',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },{
                    assets : 'TOTAL DAMAGES',
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                },],
                'DlGacLosType': [{
                    assets : 'Foregone income',
                    los_year_1 : null,
                    los_year_2 : null,
                    total : null,
                },{
                    assets : 'Cleaning up of debris',
                    los_year_1 : null,
                    los_year_2 : null,
                    total : null,
                },{
                    assets : 'Higher operating costs',
                    los_year_1 : null,
                    los_year_2 : null,
                    total : null,
                },{
                    assets : 'Other unexpected expenses',
                    los_year_1 : null,
                    los_year_2 : null,
                    total : null,
                },{
                    assets : 'TOTAL LOSSES',
                    los_year_1 : null,
                    los_year_2 : null,
                    total : null,
                },],
            }
        }
    }

    $scope.dlGovnAdmnAsets = init_data;

    $scope.changedValue=function getBsData(selectedValue) {

        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                console.log(data);
            })
        }

        if($scope.incident && $scope.district ){
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BiaGacLandOequipment','BiaGacLandStructure','BiaGacLandPbuilding','BiaGacLandMachinery'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_3',
                    'sector':'transport_land'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });

                generateRefencedData();
                console.log($scope.dlGovnAdmnAsets);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }

    function generateRefencedData() {
        data_array = ['BiaGacLandOequipment'];
        var dl_model1 = null;
        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;

            if(model_name == 'BiaGacLandOequipment') {
                dl_model1 = 'DlGacPdmgEquipment';
                particular_value_1 = 'Total';
            }
            if(model_name == 'BiaGacLandMachinery') {
                dl_model1 = 'DlGacPdmgMachinery';
                particular_value_1 = 'Total';
            }

            $scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1] = [];

            var obj1 = {
                assets : particular_value_1,
                num_tot_destroyed : null,
                num_part_damaged : null,
                damages : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    assets : value.fields.asset,
                    num_tot_destroyed : null,
                    num_part_damaged : null,
                    damages : null,
                };

                console.log(value);

                if(model_name == 'BiaGacLandOequipment') {
                    $scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1].push(obj1);
                }
                if(model_name == 'BiaGacLandMachinery') {
                    $scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1].push(obj1);
                }
            });
            $scope.dlGovnAdmnAsets.transport_land.Table_6[dl_model1].push(obj1);
        });
        console.log(dl_model1);
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
            method: 'POST',
            url:'/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dlGovnAdmnAsets,
                'com_data': {
                    'district':  $scope.district.district__id,
                    'incident': $scope.incident,

                },
                'is_edit' : $scope.is_edit,

            }),
            dataType: 'json',
        }).then(function successCallback(response) {

                 if(response.data == 'False')
             $scope.is_valid_data = false;
                else
             $("#modal-container-239453").modal('show');

        }, function errorCallback(response) {

            console.log(response);
        });
        }
    }

    $scope.dlDataEdit = function(form){

   $scope.is_edit = true;
   $scope.submitted = true;

    $http({
    method: "POST",
    url: '/dl_fetch_edit_data',
    data: angular.toJson({
    'table_name':  'Table_6',
    'sector':'transport_land',
    'com_data': {
           'district':  $scope.district.district__id,
            'incident': $scope.incident,
          },
           'is_edit':$scope.is_edit
           }),
    }).success(function(data) {

    console.log(data);


    $scope.dlGovnAdmnAsets = data;
    })

}

    $scope.cancelEdit = function(){
     $scope.is_edit = false;
     $scope.dlGovnAdmnAsets = init_data;
}

    $scope.calTotal=function(arr){
        var finaltotal = 0;
         console.log(arr);
        angular.forEach(arr, function(value, key) {

         finaltotal = finaltotal + value.damages ;
        })
          console.log(finaltotal);
        return finaltotal;
        }

    $scope.calGrandTotal=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;

    var grantot = 0;

    var array1=$scope.dlGovnAdmnAsets.transport_land.Table_6.DlGacPdmgStructures;
    var array2 =$scope.dlGovnAdmnAsets.transport_land.Table_6.DlGacPdmgEquipment;
    var array3 =$scope.dlGovnAdmnAsets.transport_land.Table_6.DlGacPdmgMachinery;


    angular.forEach(array1, function(value, key) {

     finaltotal1 = finaltotal1 + value.damages ;
    })
    angular.forEach(array2, function(value, key) {

     finaltotal2 = finaltotal2 + value.damages ;
    })
    angular.forEach(array3, function(value, key) {

     finaltotal3 = finaltotal3 + value.damages ;
    })

    grantot = grantot + finaltotal1+ finaltotal2 + finaltotal3;
    return grantot;
    }

    $scope.calGrandTypeLossTotal=function(){
    var finaltotal1 = 0;
    var grantot = 0;

    var array1=$scope.dlGovnAdmnAsets.transport_land.Table_6.DlGacLosType;


    angular.forEach(array1, function(value, key) {

     finaltotal1 = finaltotal1 + value.total ;
    })

    grantot = grantot + finaltotal1;
    return grantot;
    }
});
