var app = angular.module('dlTypeLossRailApp', ['underscore'])

app.controller('DlTypeLossRailController', function($scope, $http, $parse, _) {
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
            'Table_5': {
                'DlTypeLos' :[{
                    loss_type : 'Foregone income of rail company',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                },
                {   loss_type : 'Cleaning up of debris',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                },
                {   loss_type : 'Higher operating costs',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                },
                {   loss_type : 'Other unexpected expenses',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                },
                {   loss_type : 'TOTAL LOSSES',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                }],
            }
        }
    }

    $scope.dlTypeLossRail = init_data;

//    $scope.changedValue=function getBsData(selectedValue) {
//        if($scope.incident && selectedValue) {
//            $http({
//                method: "POST",
//                url: "/fetch_incident_districts",
//                data: angular.toJson({'incident': $scope.incident }),
//            }).success(function(data) {
//                $scope.districts = data;
//                $scope.selectedDistrict = "";
//                console.log(data);
//            })
//        }
//
//        if($scope.incident && $scope.district ){
//
//            $http({
//                method: 'POST',
//                url: '/bs_get_data_mock',
//                contentType: 'application/json; charset=utf-8',
//                data: angular.toJson({
//                  'db_tables': ['BsMovingAst','BsEquipMachineryAst','BsMatSuppliesAst','BsStructuresAst','BsBuildingAst'],
//                  'com_data': {
//                        'district': $scope.district.district__id,
//                        'incident': $scope.incident,
//                        },
//                   'sector':'transport_rail',
//                   'table_name': 'Table_1'
//                }),
//                dataType: 'json',
//            }).then(function successCallback(response) {
//                var data = response.data;
//                angular.forEach(data, function(value, key) {
//                  $scope.bs_data[key] = JSON.parse(value);
//                });
//
//                console.log($scope.bs_data);
//
//            }, function errorCallback(response) {
//
//                console.log(response);
//            });
//        }
//    }
//
//    $scope.getCompany = function(){
//
//    $scope.company;
//
//    }
//
//    $scope.saveDlData = function(form) {
//
//        $scope.submitted = true;
//        if(form.$valid){
//        if($scope.company){
//
//        var array = $scope.dlIncomeRailCompany.transport_rail.Table_2;
//            var details = _.map(array, function(model_array) {
//                _.map(model_array, function(model) {
//                    model.company_id = parseInt($scope.company);
//                });
//            });
//            $http({
//                method: 'POST',
//                url: '/dl_save_data',
//               contentType: 'application/json; charset=utf-8',
//                data: angular.toJson({
//                    'table_data': $scope.dlIncomeRailCompany,
//                    'com_data': {
//                       'district': $scope.district.district__id,
//                        'incident' : $scope.incident,
//                    },
//                    'is_edit':$scope.is_edit
//                }),
//                dataType: 'json',
//            }).then(function successCallback(response) {
//                if(response.data == 'False')
//                    $scope.is_valid_data = false;
//               else
//                    $("#modal-container-239453").modal('show');
//            }, function errorCallback(response) {
//                console.log(response);
//            });
//            }
//        }
//    }
//
//     $scope.getTotal = function(property) {
//        var array = $scope.dlIncomeRailCompany.transport_rail.Table_2.DlBuildingAstLoss;
//        var cumulative = null;
//        var sums = _.map(array, function(obj) {
//            cumulative += obj[property];
//            return cumulative;
//            console.log(array);
//
//        });
//        var the_string = 'DlBuildingAstLoss_' + property;
//        var model = $parse(the_string);
//        model.assign($scope, cumulative);
//
//
//
//    }




});
