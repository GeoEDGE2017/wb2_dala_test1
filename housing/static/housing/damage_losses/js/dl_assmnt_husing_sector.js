//Table 3
var app = angular.module('dlAssmntHusingApp', [])

app.controller('dlAssmntHusingController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    var finaltotal = 0;

    var init_data = {
        'housing': {
            'Table_3': {
                //Tab 1
                'DlDesPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'More than 5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlDesSemiPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlDesImprovised': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_destroyed : null,
                    house_val_affected : null,
                    damages : null,
                }],
                //Tab 2
                'DlPdesPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'More than 5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlPdesSemiPermanent': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }],
                'DlPdesImprovised': [{
                    assets : '1 floor',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }, {
                    assets : 'Total',
                    tot_num_houses : null,
                    per_cent_tot_rent : null,
                    tot_sqm_roof : null,
                    tot_sqm_wall : null,
                    tot_sqm_floor : null,
                    house_val_affected : null,
                    damages : null,
                }],
                //Tab 3
                'DlLosPermanent': [{
                    assets : '1 floor',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'More than 5 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'Total',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }],
                'DlLosSemiPermanent': [{
                    assets : '1 floor',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '4-5 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'Total',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }],
                'DlLosImprovised':[{
                    assets : '1 floor',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : '2-3 floors',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }, {
                    assets : 'Total',
                    tot_num_des_houses : null,
                    tot_num_dmg_houses : null,
                    frg_income : null,
                    avg_cost_clean : null,
                    avg_un_expenses : null,
                    losses : null,
                }],
            }
        }
    }

    $scope.dlAssmntHusing = init_data;

    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }

        if($scope.incident && $scope.district ) {
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables':
                    ['BhClfPermanent',
                    'BhClfSmiPermanent',
                    'BhClfImprovised',
                    'BhClfPermanentCost',
                    'BhClfImprovisedCost',
                    'BhClfSmiPermanentCost'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_1',
                    'sector':'housing',
                        }),
                  dataType: 'json',


            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                  $scope.bs_data[key] = JSON.parse(value);
                });
                console.log(data);

            }, function errorCallback(response) {

            });
        }
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            console.log($scope.dlAssmntHusing);
            $http({
                method: 'POST',
                url: '/dl_save_data',
               contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlAssmntHusing,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id' : $scope.incident,
                    },
                    'is_edit':$scope.is_edit,
                    'sector':'housing'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False')
                    {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
               else
                    $("#modal-container-239453").modal('show');
            }, function errorCallback(response) {

            });
        }
    }


        $scope.calTotal=function(arr,property){
        var finaltotal = 0;

        angular.forEach(arr, function(value, key) {
        if(value.assets !='Total'){
         finaltotal = finaltotal + value[property] ;
         }
        })
          console.log(finaltotal);
        return finaltotal;
        }


   $scope.calTotTotal=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;

    var grantot = 0;

    var array1=$scope.dlAssmntHusing.housing.Table_3.DlDesPermanent;
    var array2 =$scope.dlAssmntHusing.housing.Table_3.DlDesSemiPermanent;
    var array3 =$scope.dlAssmntHusing.housing.Table_3.DlDesImprovised;


    angular.forEach(array1, function(value, key) {
     if(value.assets !='Total'){
     finaltotal1 = finaltotal1 + value.tot_num_houses ;
     }
    })
    angular.forEach(array2, function(value, key) {
     if(value.assets !='Total'){
     finaltotal2 = finaltotal2 + value.tot_num_houses ;
     }
    })
    angular.forEach(array3, function(value, key) {
     if(value.assets !='Total'){
     finaltotal3 = finaltotal3 + value.tot_num_houses ;
     }
    })

    grantot = grantot + finaltotal1+ finaltotal2 + finaltotal3;
    $scope.tot=grantot;
    return grantot;
    }

   $scope.calGrandTotal=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;

    var grantot = 0;

    var array1=$scope.dlAssmntHusing.housing.Table_3.DlDesPermanent;
    var array2 =$scope.dlAssmntHusing.housing.Table_3.DlDesSemiPermanent;
    var array3 =$scope.dlAssmntHusing.housing.Table_3.DlDesImprovised;


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

   $scope.calPartialTotTotal=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;

    var grandparttot = 0;

    var array1=$scope.dlAssmntHusing.housing.Table_3.DlPdesPermanent;
    var array2 =$scope.dlAssmntHusing.housing.Table_3.DlPdesSemiPermanent;
    var array3 =$scope.dlAssmntHusing.housing.Table_3.DlPdesImprovised;


    angular.forEach(array1, function(value, key) {
     if(value.assets !='Total'){
     finaltotal1 = finaltotal1 + value.tot_num_houses ;
     }
    })
    angular.forEach(array2, function(value, key) {
     if(value.assets !='Total'){
     finaltotal2 = finaltotal2 + value.tot_num_houses ;
     }
    })
    angular.forEach(array3, function(value, key) {
     if(value.assets !='Total'){
     finaltotal3 = finaltotal3 + value.tot_num_houses ;
     }
    })

    grandparttot = grandparttot + finaltotal1+ finaltotal2 + finaltotal3;
    $scope.partialtot = grandparttot;
    return grandparttot;

    }

   $scope.calPartialGrandTotal=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;

    var grantot = 0;

    var array1=$scope.dlAssmntHusing.housing.Table_3.DlPdesPermanent;
    var array2 =$scope.dlAssmntHusing.housing.Table_3.DlPdesSemiPermanent;
    var array3 =$scope.dlAssmntHusing.housing.Table_3.DlPdesImprovised;


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



}]);

