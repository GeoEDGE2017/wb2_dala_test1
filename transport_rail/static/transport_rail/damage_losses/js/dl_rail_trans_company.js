var app = angular.module('dlIncomeRailCompanyApp', ['underscore'])

app.controller('dlIncomeRailCompanyController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.incident;
    $scope.company;
    $scope.dlDate;
    $scope.bs_data={};
    var total=0;
    $scope.baselineDate;
    $scope.DlMovingAstLoss_tot_damages = null;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.DlBuildingAstLoss_no_of_tot_destroyed = null;
    $scope.DlBuildingAstLoss_no_of_partially_damaged = null;

    var init_data = {
        'transport_rail' : {
            'Table_2': {
                'DlMovingAstLoss' :[{
                    asset : 'Wagon',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }, {
                    asset : 'Engine',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }, {
                    asset : 'Others',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                },
                {
                    asset : 'Total',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }],
                'DlEquipMachineryAstLoss' : [{
                    asset : 'Signal equipment',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,
                }, {
                    asset : 'Track machinery',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }, {
                    asset : 'Vehicles',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }, {
                    asset : 'Computers',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }, {
                    asset : 'Furniture',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }, {
                    asset : 'Others',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                },
                {
                    asset : 'Total',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }],
                'DlMatSuppliesAstLoss' : [{
                    asset : 'Fuel (Liters)',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }, {
                    asset : 'Others',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                },
                {
                    asset : 'Total',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }],
                'DlStructuresAstLoss' : [{
                    asset : 'Tracks',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }, {
                    asset : 'Tunnels',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,


                }, {
                    asset : 'Bridges',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }, {
                    asset : 'Culverts',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                },{
                    asset : 'Total',
                    no_of_tot_destroyed : null,
                    no_of_partially_damaged : null,
                    tot_damages : null,

                }],
                'DlBuildingAstLoss': [{
                    asset: '1 floor',
                    no_of_tot_destroyed : null,
                    no_of_tot_destroyed_sqr_meters : null,
                    no_of_partially_damaged : null,
                    no_of_partially_damaged_roof : null,
                    no_of_partially_damaged_wall : null,
                    no_of_partially_damaged_floor : null,
                    tot_damages : null,

                }, {
                    asset: '2-3 floors',
                    no_of_tot_destroyed : null,
                    no_of_tot_destroyed_sqr_meters : null,
                    no_of_partially_damaged : null,
                    no_of_partially_damaged_roof : null,
                    no_of_partially_damaged_wall : null,
                    no_of_partially_damaged_floor : null,
                    tot_damages : null,

                }, {
                    asset: 'More than 3 floors',
                    no_of_tot_destroyed : null,
                    no_of_tot_destroyed_sqr_meters : null,
                    no_of_partially_damaged : null,
                    no_of_partially_damaged_roof : null,
                    no_of_partially_damaged_wall : null,
                    no_of_partially_damaged_floor : null,
                    tot_damages : null,

                },
                {
                    asset: 'Total',
                    no_of_tot_destroyed : null,
                    no_of_tot_destroyed_sqr_meters : null,
                    no_of_partially_damaged : null,
                    no_of_partially_damaged_roof : null,
                    no_of_partially_damaged_wall : null,
                    no_of_partially_damaged_floor : null,
                    tot_damages : null,


                },
                ],
            }
        }
    }

    $scope.dlIncomeRailCompany = init_data;

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
                  'db_tables': ['BsMovingAst','BsEquipMachineryAst','BsMatSuppliesAst','BsStructuresAst','BsBuildingAst'],
                  'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        },
                   'sector':'transport_rail',
                   'table_name': 'Table_1'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                  $scope.bs_data[key] = JSON.parse(value);
                });

                console.log($scope.bs_data);

            }, function errorCallback(response) {

                console.log(response);
            });
        }
    }

    $scope.getCompany = function(){

    $scope.company;

    }

    $scope.saveDlData = function(form) {
        console.log($scope.company);
        $scope.submitted = true;
        if(form.$valid){
        if($scope.company){

            $http({
                method: 'POST',
                url: '/dl_save_data',
               contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlIncomeRailCompany,
                    'com_data': {
                       'district_id': $scope.district.district__id,
                        'incident_id' : $scope.incident,
                        'company_id' : $scope.company.id,

                    },
                    'is_edit':$scope.is_edit
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
    }

    $scope.calTotal=function(arr){
    var finaltotal = 0;
     console.log(arr);
    angular.forEach(arr, function(value, key) {
     if(value.asset != 'Total'){
     finaltotal = finaltotal + value.tot_damages ;
     }
    })
      console.log(finaltotal);
    return finaltotal;
    }

    $scope.calGrandTotal=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;
    var finaltotal4 = 0;
    var finaltotal5 = 0;
    var grantot = 0;

    var array1=$scope.dlIncomeRailCompany.transport_rail.Table_2.DlMovingAstLoss;
    var array2 =$scope.dlIncomeRailCompany.transport_rail.Table_2.DlEquipMachineryAstLoss;
    var array3 =$scope.dlIncomeRailCompany.transport_rail.Table_2.DlMatSuppliesAstLoss;
    var array4 =$scope.dlIncomeRailCompany.transport_rail.Table_2.DlStructuresAstLoss;
    var array5 =$scope.dlIncomeRailCompany.transport_rail.Table_2.DlBuildingAstLoss;

    angular.forEach(array1, function(value, key) {

     finaltotal1 = finaltotal1 + value.tot_damages ;
    })
    angular.forEach(array2, function(value, key) {

     finaltotal2 = finaltotal2 + value.tot_damages ;
    })
    angular.forEach(array3, function(value, key) {

     finaltotal3 = finaltotal3 + value.tot_damages ;
    })
    angular.forEach(array4, function(value, key) {

     finaltotal4 = finaltotal4 + value.tot_damages ;
    })
    angular.forEach(array5, function(value, key) {

     finaltotal5 = finaltotal5 + value.tot_damages ;
    })
    grantot = grantot + finaltotal1+ finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5;
    return grantot;
    }

    $scope.dlDataEdit = function(form){

   $scope.is_edit = true;
   $scope.submitted = true;

    $http({
    method: "POST",
    url: '/dl_fetch_edit_data',
    data: angular.toJson({
    'table_name':  'Table_2',
    'sector':'transport_rail',
    'com_data': {
           'district':  $scope.district.district__id,
            'incident': $scope.incident,
          },
           'is_edit':$scope.is_edit
           }),
    }).success(function(data) {

    console.log(data);


    $scope.dlIncomeRailCompany = data;
    })

}

    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.dlIncomeRailCompany = init_data;
    }

    //Clear Function
    $scope.clear = function() {
        console.log("init")
        $scope.is_edit = false;
        $scope.dlIncomeRailCompany = angular.copy(init_data);
    }
});
