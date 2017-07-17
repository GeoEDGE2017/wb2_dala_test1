var app = angular.module('agriFisheriesChartsApp', ['chart.js','underscore']);
app.controller('AgriFisheriesChartsController',function($scope,$http,$parse, _) {

    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.total_num_affected = 0;
    $scope.totalNumDes = null;
    $scope.grndtotalNumPart = 0;
    $scope.grndtotalNumDes = 0;
    $scope.grndtotalDamages = 0;
    $scope.grndtotalLosses = 0;
    $scope.grandTotal = 0;
    $scope.total_num_affected = 0;
    $scope.tableDamageLosses = [[],[]];


    $scope.fetchDlData = function(){

        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_6',
            'sector': 'housing',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlHousingSumNat = data;

            $scope.provincenames=["Western"];

        angular.forEach($scope.provincenames, function(value, key) {

            var totalNumDes = 0;
            totalNumDes =     $scope.convertToInt(
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesPerNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesPerNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumDesPerNational[0].tot_num_houses : 0):0) ,

                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesSemiPerNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesSemiPerNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumDesSemiPerNational[0].tot_num_houses : 0):0) ,

                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesImpNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesImpNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumDesImpNational[0].tot_num_houses : 0):0));

            var totalNumPart = 0;
            totalNumPart =      $scope.convertToInt(
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesPerNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesPerNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesPerNational[0].tot_num_houses : 0):0) ,

                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesSemiPerNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesSemiPerNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesSemiPerNational[0].tot_num_houses : 0):0) ,

                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesImpNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesImpNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesImpNational[0].tot_num_houses : 0):0));

            var totalDamages = 0;
           totalDamages =     $scope.convertToInt(
                          ($scope.dlHousingSumNat.housing.Table_6[value].DlDmgPerNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[value].DlDmgPerNational[0].tot_damages ?
                          $scope.dlHousingSumNat.housing.Table_6[value].DlDmgPerNational[0].tot_damages : 0):0) ,

                          ($scope.dlHousingSumNat.housing.Table_6[value].DlDmgSemiPerNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[value].DlDmgSemiPerNational[0].tot_damages ?
                          $scope.dlHousingSumNat.housing.Table_6[value].DlDmgSemiPerNational[0].tot_damages : 0):0) ,

                          ($scope.dlHousingSumNat.housing.Table_6[value].DlDmgImpNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[value].DlDmgImpNational[0].tot_damages ?
                          $scope.dlHousingSumNat.housing.Table_6[value].DlDmgImpNational[0].tot_damages : 0):0));


            var totalLosses = 0;
            totalLosses = $scope.convertToInt(
                          ($scope.dlHousingSumNat.housing.Table_6[value].DlLosPerNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[value].DlLosPerNational[0].tot_losses ?
                          $scope.dlHousingSumNat.housing.Table_6[value].DlLosPerNational[0].tot_losses : 0):0) ,

                          ($scope.dlHousingSumNat.housing.Table_6[value].DlLosSemiPerNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[value].DlLosSemiPerNational[0].tot_losses ?
                          $scope.dlHousingSumNat.housing.Table_6[value].DlLosSemiPerNational[0].tot_losses : 0):0) ,

                          ($scope.dlHousingSumNat.housing.Table_6[value].DlLosImpNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[value].DlLosImpNational[0].tot_losses ?
                          $scope.dlHousingSumNat.housing.Table_6[value].DlLosImpNational[0].tot_losses : 0):0));


            $scope.tableDamageLosses[0][key]=totalDamages;
            $scope.tableDamageLosses[1][key]=totalLosses;
            $scope.totalDamagePartialDamage = [totalNumDes, totalNumPart];

            })

             $scope.damageLossesSeries = ['Total Damages', 'Total Losses'];
             $scope.totalDamagePartialDamageSeries = ['Number of Totally Destroyed', 'Number of Partially Damaged'];


            })


    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlHousingSumNat ? angular.equals({}, $scope.dlHousingSumNat.housing.Table_6) : true;
        return isNull;

   }

    $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

    $scope.printDiv = function() {
        window.print();
    }

 });
