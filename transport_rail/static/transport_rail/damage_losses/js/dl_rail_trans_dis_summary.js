//Table_3
var app = angular.module('dlRailTransSumDisApp', ['underscore']);

app.controller("dlRailTransSumDisController", function($scope,$http,$parse, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.total = null;
    $scope.isLoded = false;
    $scope.user_id;
    $scope.provinces;

    // declaring total variables
    $scope.total_num_affected = 0;

//    $scope.dlRailTransSumDis;

    // get relevant damage_losses data for calculations
    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }
        if($scope.incident && $scope.province) {
            $scope.fetchDlData();
        }
    }

    function fetchProvinces() {
        $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                'incident': $scope.incident
            }),
        }).success(function(data) {
            $scope.provinces = data;
            $scope.province = null;
        })
    }

    $scope.fetchDlData = function(form) {
        if($scope.incident && $scope.province) {
            $scope.total_num_affected = 0;

            $scope.dlRailTransSumDis = null;
            console.log($scope.dlRailTransSumDis);

            $scope.is_edit = true;
            $scope.submitted = true;
            $scope.isLoded = true;
//            if (form.$valid) {
                $http({
                    method: "POST",
                    url: '/dl_fetch_district_disagtn',
                    data: angular.toJson({
                    'table_name':  'Table_3',
                        'sector': 'transport_rail',
                        'com_data': {
                            'province': $scope.province,
                            'incident': $scope.incident,
                        },
                    }),
                }).success(function(data) {
//                    console.log('load ', data);
                    $scope.dlRailTransSumDis = data;
                })
//            }
        }
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlRailTransSumDis ? angular.equals({}, $scope.dlRailTransSumDis.transport_rail.Table_3) : true;
        return isNull;
    }

//    $scope.getTotal = function(model, property,$index,key) {
//         $scope.total = $scope.total + ($scope.dlRailTransSumDis.transport_rail.Table_3[key].TotDmgProvince[0].tot_damages ?
//                         $scope.dlRailTransSumDis.transport_rail.Table_3[key].TotDmgProvince[0].tot_damages : 0 ) ;
//    }

    $scope.getTotal = function() {
        var total = 0;
        if(!angular.isUndefined($scope.dlRailTransSumDis) || $scope.dlRailTransSumDis != null) {
            angular.forEach($scope.dlRailTransSumDis.transport_rail.Table_3, function(value, index) {
                angular.forEach(value.TotDmgProvince, function(value_in, key_in) {
                    total = total + value_in.tot_damages;
                })
            })
        }
        return total;
    }
})
