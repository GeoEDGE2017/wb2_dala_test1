var app = angular.module('waterChartApp', ['chart.js','underscore']);
app.controller('WaterChartController',function($scope,$http,$parse, _) {

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
    $scope.tableDamageLosses = [[],[],[],[]];

    $scope.fetchDlData = function(){
        $scope.is_edit = true;
        $scope.submitted = true;
            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_7',
            'sector': 'water_supply',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlWaterSumNat = data;

            $scope.provincenames=["Western"];

            angular.forEach($scope.provincenames, function(value, key)
            {
                var residential = $scope.dlWaterSumNat.water_supply.Table_7[value].DlcwNumAfNational[0].tot_dmg_residential;
                var commercial = $scope.dlWaterSumNat.water_supply.Table_7[value].DlcwNumAfNational[0].tot_dmg_commercial;
                var industrial = $scope.dlWaterSumNat.water_supply.Table_7[value].DlcwNumAfNational[0].tot_dmg_industrial;
                var others = $scope.dlWaterSumNat.water_supply.Table_7[value].DlcwNumAfNational[0].tot_dmg_others;

                var type1 = $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralNumAfNational[0].tot_num_fam_aff;
                var type2 = $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralNumAfNational[3].tot_num_fam_aff;
                var type3 = $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralNumAfNational[2].tot_num_fam_aff;
                var type4 = $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralNumAfNational[1].tot_num_fam_aff;


               var totalCommercialDamages =  ($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwTotDmgNational[0] ?
                                             ($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwTotDmgNational[0].total_dmgs ?
                                             $scope.dlWaterSumNat.water_supply.Table_7[value].DlcwTotDmgNational[0].total_dmgs : 0):0);

               var totalRuralDamage =  ($scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralTotDmgNational[0]?
                                       ($scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralTotDmgNational[0].tot_damages ?
                                       $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralTotDmgNational[0].tot_damages : 0):0);



               var totalCommercialLossYear1 = 0;
               totalLossYear1 =  ($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwTotLosNational[0] ?
                                 ($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwTotLosNational[0].tot_los_year1 ?
                                 $scope.dlWaterSumNat.water_supply.Table_7[value].DlcwTotLosNational[0].tot_los_year1 : 0):0);

               var totalCommercialLossYear2 = 0;
               totalCommercialLossYear2  =  ($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwTotLosNational[0] ?
                                  ($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwTotLosNational[0].tot_los_year2 ?
                                  $scope.dlWaterSumNat.water_supply.Table_7[value].DlcwTotLosNational[0].tot_los_year2 : 0):0);

                var totalCommercialLosses = totalCommercialLossYear1 + totalCommercialLossYear2;


                var totalRuralLosses = ($scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralTotLosNational[0]?
                                       ($scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralTotLosNational[0].tot_los ?
                                       $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralTotLosNational[0].tot_los : 0):0);


                $scope.tableDamageLosses[0][key]=totalCommercialDamages;
                $scope.tableDamageLosses[1][key]=totalRuralDamage;
                $scope.tableDamageLosses[2][key]=totalCommercialLosses;
                $scope.tableDamageLosses[3][key]=totalRuralLosses;


                $scope.totalAffectedCommercial = [residential, commercial, industrial, others];
                $scope.totalAffectedRural = [type1, type2, type3, type4];

            })
             $scope.totalAffectedCommercialSeries = ['Residential', 'Commercial','Industrial','Others'];
             $scope.totalAffectedRuralSeries = ['Type1', 'Type2','Type3','Type4'];
             $scope.damageLossesSeries = ['Total Commercial Damages','Total Rural Damages', 'Total Commercial Losses', 'Total Rural Losses',];
            })
    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlWaterSumNat ? angular.equals({}, $scope.dlWaterSumNat.water_supply.Table_7) : true;
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
