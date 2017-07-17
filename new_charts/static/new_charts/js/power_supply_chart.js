var app = angular.module('powerChartApp', ['chart.js','underscore']);
app.controller('PowerChartController',function($scope,$http,$parse, _) {

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
            'sector': 'power_supply',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlPowerSumNat = data;
            console.log('data',data);

            $scope.provincenames=["Western"];

        angular.forEach($scope.provincenames, function(value, key) {

            var totalAffDomestic = 0;
            totalAffDomestic =  ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0] ?
                           ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].domestic ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].domestic : 0):0)

            var totalAffCommercial = 0;
            totalAffCommercial =  ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0] ?
                           ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].commercial ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].commercial : 0):0)

            var totalAffindustrial = 0;
            totalAffindustrial =  ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0] ?
                           ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].industrial ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].industrial : 0):0)

            var totalAffother = 0;
            totalAffother =  ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0] ?
                           ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].other ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].other : 0):0)


            var totalCEBDamages = 0;
            totalCEBDamages =($scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgCebNational[0] ?
                           ($scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgCebNational[0].tot_dmg ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgCebNational[0].tot_dmg : 0):0)


            var totalCebLosses = 0;
            totalCebLosses =($scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0] ?
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0].losses_y1 ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0].losses_y1 : 0):0) +
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0] ?
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0].losses_y2 ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0].losses_y2 : 0):0)


            $scope.tableDamageLosses[0][key]=totalCEBDamages;
            $scope.tableDamageLosses[1][key]=totalCebLosses;

            $scope.totalAffected = [totalAffDomestic, totalAffCommercial,totalAffindustrial,totalAffother];

            })

             $scope.damageLossesSeries = ['Total Damages', 'Total Losses'];
             $scope.totalAffectedSeries = ['Number of Domestic Customers Affected ', 'Number of Commercial Customers Affected','Number of Industrial Customers Affected','Number of Other Customers Affected'];


            })


    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlPowerSumNat ? angular.equals({}, $scope.dlPowerSumNat.power_supply.Table_6) : true;
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
