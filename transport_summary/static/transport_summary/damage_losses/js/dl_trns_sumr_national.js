var app = angular.module('dlSummeryTSNatApp', ['underscore']);

app.controller("DlSummeryTSNatController", function ($scope,$http,$parse, _) {
    $scope.National;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totaldpub = null;
    $scope.totaldpvt = null;
    $scope.totalyear1pub = null;
    $scope.totalyear1pvt = null;
    $scope.totalyear2pub = null;
    $scope.totalyear2vt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    // declaring total variables
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

    $scope.fetchDlData = function(form){
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

            angular.forEach(data, function(value, key) {
             if(key == 'transport_land'){
              console.log(value.Table_9);
              angular.forEach(value.Table_9, function(value, key) {
                 console.log('land',key);
            });
              }
            });
           $scope.dlTransSumNat = data;

            })

    }

   $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

   $scope.convertTotal = function(val1,val2,val3,val4){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
        return sum;
    }

   $scope.getTotal = function(key) {

        $scope.finaltotalprivate = 0;



        var totaldpub = ($scope.dlTransSumNat.transport_land.Table_9[key].DlGacPubNational[0] ? ($scope.dlTransSumNat.transport_land.Table_9[key].DlGacPubNational[0].damages ?
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlGacPubNational[0].damages : 0):0) +
                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPubNational[0] ? ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPubNational[0].tot_destroyed_pub ?
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPubNational[0].tot_destroyed_pub : 0) : 0)+
                         ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPubNational[0] ? ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPubNational[0].tot_dmg_public ?
                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPubNational[0].tot_dmg_public : 0) : 0) +
                         ($scope.dlTransSumNat.transport_rail.Table_4[key].TotDmgNational[0] ? ($scope.dlTransSumNat.transport_rail.Table_4[key].TotDmgNational[0].tot_damages ?
                         $scope.dlTransSumNat.transport_rail.Table_4[key].TotDmgNational[0].tot_damages : 0) : 0);

        var totaldpubstring = "totaldpub_"+ key;

        var model = $parse(totaldpubstring);
        model.assign($scope, totaldpub);
        $scope.grndtotaldpub = $scope.grndtotaldpub + totaldpub ;

        console.log(totaldpub);



         var totaldpvt =$scope.convertToInt(
                         ($scope.dlTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0]?($scope.dlTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0].tot_damages_pvt ?
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0].tot_damages_pvt : 0 ) : 0),
                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPvtNational[0] ? ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPvtNational[0].tot_destroyed_pvt ?
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPvtNational[0].tot_destroyed_pvt : 0) : 0),
                          ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPvtNational[0]?($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPvtNational[0].tot_dmg_private ?
                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPvtNational[0].tot_dmg_private : 0
                         ):0));

        var totaldpvtstring = "totaldpvt_"+ key;

        var model = $parse(totaldpvtstring);
        model.assign($scope, totaldpvt);
        $scope.grndtotaldpvt = $scope.grndtotaldpvt + totaldpvt ;
        $scope.summaryDamages = $scope.grndtotaldpub + $scope.grndtotaldpvt;



         var totalyear1pub =
                         ($scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0]?($scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_1 ?
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_1 : 0):0)  +
                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0]?($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pub ?
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pub : 0) : 0) +
                         ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0] ?($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_1_pub ?
                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_1_pub : 0 ) : 0);

        var totalyear1pubstring = "totalyear1pub_"+ key;

        var model = $parse(totalyear1pubstring);
        model.assign($scope, totalyear1pub);
        $scope.grndtotalyear1pub = $scope.grndtotalyear1pub + totalyear1pub ;


         var totalyear1pvt =
                         ($scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0] ? ($scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_1_pvt ?
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_1_pvt : 0) :0) +
                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0] ? ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pvt ?
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pvt : 0): 0 )+
                         ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0] ? ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_1_pvt ?
                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_1_pvt : 0 ) : 0);

        var totalyear1pvtstring = "totalyear1pvt_"+ key;

        var model = $parse(totalyear1pvtstring);
        model.assign($scope, totalyear1pvt);
        $scope.grndtotalyear1pvt = $scope.grndtotalyear1pvt + totalyear1pvt ;
        $scope.summaryLossYear1 = $scope.grndtotalyear1pub + $scope.grndtotalyear1pvt;


         var totalyear2pub =
                         ($scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0]?($scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_2 ?
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_2 : 0 ) :0)+
                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0]?($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pub ?
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pub : 0) :0)+
                         ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0]?($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_2_pub ?
                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_2_pub : 0):0);

         var totalyear2pubstring = "totalyear2pub_"+ key;

         var model = $parse(totalyear2pubstring);
         model.assign($scope, totalyear2pub);
         $scope.grndtotalyear2pub = $scope.grndtotalyear2pub + totalyear2pub ;

         var totalyear2pvt =
                         ($scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0] ?($scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_2_pub ?
                         $scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_2_pub : 0 ) : 0)+
                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0] ?($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pvt ?
                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pvt : 0) : 0 ) +
                         ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0] ? ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_2_pvt ?
                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_2_pvt : 0) : 0) ;

         var totalyear2pvtstring = "totalyear2pvt_"+ key;

         var model = $parse(totalyear2pvtstring);
         model.assign($scope, totalyear2pvt);
         $scope.grndtotalyear2pvt = $scope.grndtotalyear2pvt + totalyear2pvt ;
         $scope.summaryLossYear2 = $scope.grndtotalyear2pub + $scope.grndtotalyear2pvt;



         var finaltotalpublic = totaldpub + totalyear1pub + totalyear2pub;

         var finaltotalpublicstring = "finaltotalpublic_"+ key;

         var model = $parse(finaltotalpublicstring);
         model.assign($scope, finaltotalpublic);
         $scope.grndfinaltotalpublic = $scope.grndfinaltotalpublic + finaltotalpublic ;


         var finaltotalprivate = totaldpvt + totalyear1pvt + totalyear2pvt;

         var finaltotalprivatestring = "finaltotalprivate_"+ key;

         var model = $parse(finaltotalprivatestring);
         model.assign($scope, finaltotalprivate);
         $scope.grndfinaltotalprivate = $scope.grndfinaltotalprivate + finaltotalprivate ;
         $scope.summaryTotal = $scope.grndfinaltotalpublic + $scope.grndfinaltotalprivate;



    }


 })
