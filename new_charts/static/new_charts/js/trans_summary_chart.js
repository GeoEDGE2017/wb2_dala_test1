var app = angular.module('transSummaryChartApp', ['chart.js','underscore']);
app.controller('TransSummaryChartController',function($scope,$http,$parse, _) {

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
    $scope.totaldpub = null;
    $scope.totaldpvt = null;
    $scope.totalyear1pub = null;
    $scope.totalyear1pvt = null;
    $scope.totalyear2pub = null;
    $scope.totalyear2vt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    $scope.total_num_affected = 0;
    $scope.grndtotaldpub = 0;
    $scope.grndtotaldpvt = 0;
    $scope.grndtotalyear1pub = 0;
    $scope.grndtotalyear1pvt = 0;
    $scope.grndtotalyear2pub = 0;
    $scope.grndtotalyear2pvt = 0;
    $scope.grndfinaltotalpublic = 0;
    $scope.grndfinaltotalprivate = 0;
    $scope.summaryDamages = 0;
    $scope.summaryLossYear1 = 0;
    $scope.summaryLossYear2 = 0;
    $scope.summaryTotal = 0;


    $scope.fetchDlData = function(){

        $scope.is_edit = true;
        $scope.submitted = true;

        $http({
            method: "POST",
            url: '/dl_fetch_summary_disagtn',
            data: angular.toJson({
            'table_name':  ['Table_9','Table_5','Table_5','Table_4'],
            'sector': ['transport_land','transport_air','transport_water','transport_rail'],
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
        }).success(function(data) {
           $scope.dlTransSumNat = data  ;
            $scope.provincenames=["Western"];
           angular.forEach($scope.provincenames, function(value, key) {

                $scope.finaltotalprivate = 0;
                var totaldpub = ($scope.dlTransSumNat.transport_land.Table_9[value].DlGacPubNational[0] ? ($scope.dlTransSumNat.transport_land.Table_9[value].DlGacPubNational[0].damages ?
                                 $scope.dlTransSumNat.transport_land.Table_9[value].DlGacPubNational[0].damages : 0):0) +
                                 ($scope.dlTransSumNat.transport_air.Table_5[value].DlAirDmgPubNational[0] ? ($scope.dlTransSumNat.transport_air.Table_5[value].DlAirDmgPubNational[0].tot_destroyed_pub ?
                                 $scope.dlTransSumNat.transport_air.Table_5[value].DlAirDmgPubNational[0].tot_destroyed_pub : 0) : 0)+
                                 ($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterDmgPubNational[0] ? ($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterDmgPubNational[0].tot_dmg_public ?
                                 $scope.dlTransSumNat.transport_water.Table_5[value].DlWaterDmgPubNational[0].tot_dmg_public : 0) : 0) +
                                 ($scope.dlTransSumNat.transport_rail.Table_4[value].TotDmgNational[0] ? ($scope.dlTransSumNat.transport_rail.Table_4[value].TotDmgNational[0].tot_damages ?
                                 $scope.dlTransSumNat.transport_rail.Table_4[value].TotDmgNational[0].tot_damages : 0) : 0);


                $scope.grndtotaldpub = $scope.grndtotaldpub + totaldpub ;

                 var totaldpvt =$scope.convertToInt(
                                 ($scope.dlTransSumNat.transport_land.Table_9[value].DlGacPvtNational[0]?($scope.dlTransSumNat.transport_land.Table_9[value].DlGacPvtNational[0].tot_damages_pvt ?
                                 $scope.dlTransSumNat.transport_land.Table_9[value].DlGacPvtNational[0].tot_damages_pvt : 0 ) : 0),
                                 ($scope.dlTransSumNat.transport_air.Table_5[value].DlAirDmgPvtNational[0] ? ($scope.dlTransSumNat.transport_air.Table_5[value].DlAirDmgPvtNational[0].tot_destroyed_pvt ?
                                 $scope.dlTransSumNat.transport_air.Table_5[value].DlAirDmgPvtNational[0].tot_destroyed_pvt : 0) : 0),
                                  ($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterDmgPvtNational[0]?($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterDmgPvtNational[0].tot_dmg_private ?
                                 $scope.dlTransSumNat.transport_water.Table_5[value].DlWaterDmgPvtNational[0].tot_dmg_private : 0
                                 ):0));

                $scope.grndtotaldpvt = $scope.grndtotaldpvt + totaldpvt ;
                $scope.summaryDamages = $scope.grndtotaldpub + $scope.grndtotaldpvt;



                 var totalyear1pub =
                                 ($scope.dlTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0]?($scope.dlTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0].year_1 ?
                                 $scope.dlTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0].year_1 : 0):0)  +
                                 ($scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0]?($scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pub ?
                                 $scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pub : 0) : 0) +
                                 ($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0] ?($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pub ?
                                 $scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pub : 0 ) : 0);


                $scope.grndtotalyear1pub = $scope.grndtotalyear1pub + totalyear1pub ;


                 var totalyear1pvt =
                                 ($scope.dlTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0] ? ($scope.dlTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0].year_1_pvt ?
                                 $scope.dlTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0].year_1_pvt : 0) :0) +
                                 ($scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0] ? ($scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pvt ?
                                 $scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pvt : 0): 0 )+
                                 ($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0] ? ($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pvt ?
                                 $scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pvt : 0 ) : 0);

                $scope.grndtotalyear1pvt = $scope.grndtotalyear1pvt + totalyear1pvt ;
                $scope.summaryLossYear1 = $scope.grndtotalyear1pub + $scope.grndtotalyear1pvt;


                 var totalyear2pub =
                                 ($scope.dlTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0]?($scope.dlTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0].year_2 ?
                                 $scope.dlTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0].year_2 : 0 ) :0)+
                                 ($scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0]?($scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pub ?
                                 $scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pub : 0) :0)+
                                 ($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0]?($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pub ?
                                 $scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pub : 0):0);


                 $scope.grndtotalyear2pub = $scope.grndtotalyear2pub + totalyear2pub ;

                 var totalyear2pvt =
                                 ($scope.dlTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0] ?($scope.dlTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0].year_2_pub ?
                                 $scope.dlTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0].year_2_pub : 0 ) : 0)+
                                 ($scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0] ?($scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pvt ?
                                 $scope.dlTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pvt : 0) : 0 ) +
                                 ($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0] ? ($scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pvt ?
                                 $scope.dlTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pvt : 0) : 0) ;


                 $scope.grndtotalyear2pvt = $scope.grndtotalyear2pvt + totalyear2pvt ;
                 $scope.summaryLossYear2 = $scope.grndtotalyear2pub + $scope.grndtotalyear2pvt;



                 var finaltotalpublic = totaldpub + totalyear1pub + totalyear2pub;

                 $scope.grndfinaltotalpublic = $scope.grndfinaltotalpublic + finaltotalpublic ;


                 var finaltotalprivate = totaldpvt + totalyear1pvt + totalyear2pvt;

                 $scope.grndfinaltotalprivate = $scope.grndfinaltotalprivate + finaltotalprivate ;
                 $scope.summaryTotal = $scope.grndfinaltotalpublic + $scope.grndfinaltotalprivate;


                $scope.tableDamageLosses[0][key]=$scope.summaryDamages;
                $scope.tableDamageLosses[1][key]=$scope.summaryLossYear1 + $scope.summaryLossYear2;
//                $scope.totalDamagePartialDamage = [totalNumDes, totalNumPart];
            })



        })


    }
   $scope.checkIfNull = function(){
        var isNull = $scope.dlTransSumNat ?
         ((angular.equals({}, $scope.dlTransSumNat.transport_land.Table_9) ) ||
         (angular.equals({}, $scope.dlTransSumNat.transport_air.Table_5)) ||
         (angular.equals({}, $scope.dlTransSumNat.transport_water.Table_5)) ||
         (angular.equals({}, $scope.dlTransSumNat.transport_rail.Table_4))) : true ;
        return isNull;
   }

    $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

 });
