//Table 2
var app = angular.module('dlPowSupCebApp', [])

app.controller('DlPowSupCebAppController',  function($scope, $http) {
    $scope.district;
    $scope.incident;
    $scope.bs_data=[];
    $scope.dl_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.is_valid_data = true;

    var init_data = {
        'power_supply': {
            'Table_2': {
                'CebDmgAstGeneration': [{
                    assets : 'Dams',
                    num_dst_ast:null,
                    tot_replace_cost:null,
                    num_dmg_ast :null,
                    to_repair_cost:null,
                    tot_dmg:null,
                }]
            }
        }
    }

    $scope.dlPowSupCeb = init_data;

//    $scope.changedValue=function getBsData(selectedValue) {
//        if($scope.incident && selectedValue) {
//            $http({
//                method: "POST",
//                url: "/fetch_incident_districts",
//                data: angular.toJson({'incident': $scope.incident }),
//            }).success(function(data) {
//                $scope.districts = data;
//                $scope.selectedDistrict = "";
//            })
//        }
//
//        if($scope.incident && $scope.district ) {
//            $http({
//                method: 'POST',
//                url: '/bs_get_data_mock',
//                contentType: 'application/json; charset=utf-8',
//                data: angular.toJson({
//                    'db_tables': ['BiaWaterIntake', 'BiaTreatmentPlant', 'BiaWaterDistribution', 'BiaMainOffice'],
//                    'com_data': {
//                        'district': $scope.district.district__id,
//                        'incident': $scope.incident,
//                    },
//                    'table_name': 'Table_1',
//                    'sector': 'water_supply',
//                }),
//                  dataType: 'json',
//            }).then(function successCallback(response) {
//                var data = response.data;
//                angular.forEach(data, function(value, key) {
//                    $scope.bs_data[key] = JSON.parse(value);
//                });
//                console.log(data);
//                generateRefencedData();
//            }, function errorCallback(response) {
//
//            });
//        }
//    }

//
//    $scope.saveDlData = function(form) {
//        if(form.$valid) {
//            $scope.submitted = true;
//            $http({
//                method: 'POST',
//                url:'/dl_save_data',
//                contentType: 'application/json; charset=utf-8',
//                data: angular.toJson({
//                    'table_data': $scope.dlComWtrSply,
//                    'com_data': {
//                        'district_id': $scope.district.district__id,
//                        'incident_id': $scope.incident,
//                    },
//                    'is_edit' : $scope.is_edit,
//                }),
//                dataType: 'json',
//            }).then(function successCallback(response) {
//                if(response.data == 'False')
//                    $scope.is_valid_data = false;
//                else
//                    $("#modal-container-239453").modal('show');
//            }, function errorCallback(response) {
//
//            });
//        }
//    }
//
//    $scope.dlDataEdit = function(form){
//
//    $scope.is_edit = true;
//    $scope.submitted = true;
//
//    $http({
//    method: "POST",
//    url: '/dl_fetch_edit_data',
//    data: angular.toJson({
//    'table_name':  'Table_3',
//    'sector':'water_supply',
//    'com_data': {
//           'district':  $scope.district.district__id,
//            'incident': $scope.incident,
//          },
//           'is_edit':$scope.is_edit
//           }),
//    }).success(function(data) {
//
//    console.log(data);
//
//
//    $scope.dlComWtrSply = data;
//    })
//
//}
//
//    $scope.cancelEdit = function(){
//       $scope.is_edit = false;
//        $scope.dlComWtrSply = init_data;
//
//}


});
