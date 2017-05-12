//Table 3
var app = angular.module('dlSumTeleDisApp', []);
app.controller("dlSumTeleDisController", ['$scope','$http',function ($scope,$http) {
    $scope.district;
    $scope.incident;
    $scope.dl_data={};
    $scope.is_edit=false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.districts=[];
    $scope.dlSummaryDis = null;
    $scope.tot_damages_pu = 0;
    $scope.tot_damages_pv = 0;
    $scope.year1_los_pu = 0;
    $scope.year1_los_pv = 0;
    $scope.year2_los_pu = 0;
    $scope.year2_los_pv = 0;
    $scope.pub_tot = 0;
    $scope.pvt_tot = 0;

    $scope.getDistrict = function getDistrict() {
        if($scope.incident) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.district = "";
                console.log(data);
            })
        }
    }

    $scope.changedValue = function getBsData() {
        if($scope.incident && $scope.district) {
            $scope.submitted = true;
            $scope.tot_damages = null;
            $scope.is_edit = true;
            $scope.submitted = true;
            $http({
                method: "POST",
                url: '/dl_fetch_total_data',
                data: angular.toJson({
                    'table_name':'Table_3',
                    'sector':'telecommunication',
                    'com_data': {
                        'district':  $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.data=data;
                $scope.dlWaterSupplyDis = data;
            })
        }
    }

    $scope.loadData = function(form) {
        $scope.submitted = true;
        console.log("***");
        if(form.$valid) {
            $scope.tot_damages = null;
            $scope.is_edit = true;
            $scope.submitted = true;
            $http({
                method: "POST",
                url: '/dl_fetch_total_data',
                data: angular.toJson({
                    'table_name':  'Table_3',
                    'sector':'telecommunication',
                    'com_data': {
                        'district':  $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                console.log(data);
                $scope.dlSummaryDis = data;
            })
        }
    }

    $scope.getTotal = function($index) {
        var ownership = $scope.dlSummaryDis.telecommunication.Table_3.DlDmgFirmDistrict[$index].ownership;

        if(ownership == 'Public') {
            $scope.tot_damages_pu = $scope.dlSummaryDis.telecommunication.Table_3.DlDmgFirmDistrict[$index].tot_damages ?
                                 $scope.tot_damages_pu + $scope.dlSummaryDis.telecommunication.Table_3.DlDmgFirmDistrict[$index].tot_damages : 0;

            $scope.year1_los_pu = $scope.dlSummaryDis.telecommunication.Table_3.LosFirmYear1District[$index].year1_los ?
                                 $scope.year1_los_pu + $scope.dlSummaryDis.telecommunication.Table_3.LosFirmYear1District[$index].year1_los : 0;

            $scope.year2_los_pu = $scope.dlSummaryDis.telecommunication.Table_3.LosFirmYear1District[$index].year2_los ?
                                 $scope.year2_los_pu + $scope.dlSummaryDis.telecommunication.Table_3.LosFirmYear1District[$index].year2_los : 0;
        }
        else if(ownership == 'Private') {
            $scope.tot_damages_pv = $scope.dlSummaryDis.telecommunication.Table_3.DlDmgFirmDistrict[$index].tot_damages ?
                                 $scope.tot_damages_pv + $scope.dlSummaryDis.telecommunication.Table_3.DlDmgFirmDistrict[$index].tot_damages : 0;

            $scope.year1_los_pv = $scope.dlSummaryDis.telecommunication.Table_3.LosFirmYear1District[$index].year1_los ?
                                 $scope.year1_los_pv + $scope.dlSummaryDis.telecommunication.Table_3.LosFirmYear1District[$index].year1_los : 0;

            $scope.year2_los_pv = $scope.dlSummaryDis.telecommunication.Table_3.LosFirmYear1District[$index].year2_los ?
                                 $scope.year2_los_pv + $scope.dlSummaryDis.telecommunication.Table_3.LosFirmYear1District[$index].year2_los : 0;

            $scope.pvt_tot = $scope.pvt_tot + $scope.tot_damages_pv + $scope.year1_los_pv + $scope.year2_los_pv;
        }

        $scope.pub_tot = $scope.tot_damages_pu + $scope.year1_los_pu + $scope.year2_los_pu;
        $scope.pvt_tot = $scope.tot_damages_pv + $scope.year1_los_pv + $scope.year2_los_pv;
    }
}])

