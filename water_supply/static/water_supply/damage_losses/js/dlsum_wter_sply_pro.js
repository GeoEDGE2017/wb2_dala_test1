//Table 6
var app = angular.module('dlWaterSupplyProApp', ['underscore']);

app.controller("DlWaterSupplyProController", function ($scope,$http,$parse, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totalDamages = null;
    $scope.totaldpvt = null;
    $scope.totalyear1pub = null;
    $scope.totalyear1pvt = null;
    $scope.totalyear2pub = null;
    $scope.totalyear2pvt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    // declaring total variables
    $scope.total_num_affected = 0;

    // get relevant damage_losses data for calculations
    $scope.changedValue = function getDlData(selectProvinces) {

        if($scope.incident && selectProvinces) {
          fetchProvinces();
        }

    }
    $scope.provinces = [];

    function fetchProvinces()
    {
          $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                    'incident': $scope.incident
                   }),
            }).success(function(data) {
                $scope.provinces = data;
                $scope.province = "";

            })

    }

    $scope.fetchDlData = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_6',
            'sector': 'water_supply',
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);

            $scope.data = data;
            $scope.dlWaterSupplyPro = data;

            })


    }
//   $scope.checkIfNull = function()
//   {
//        var isNull = $scope.dlWaterTransSumPro ? angular.equals({}, $scope.dlWaterTransSumPro.transport_water.Table_4) : true;
//        return isNull;
//
//   }

// $scope.getTotal = function($index,key) {
//         $scope.totaldpub = $scope.totaldpub + (
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterDmgPubProvince[0].tot_dmg_public ?
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterDmgPubProvince[0].tot_dmg_public : 0 );
//
//         $scope.totaldpvt = $scope.totaldpvt + (
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterDmgPvtProvince[0].tot_dmg_private ?
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterDmgPvtProvince[0].tot_dmg_private : 0 );
//
//         $scope.totalyear1pub = $scope.totalyear1pub + (
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pub ?
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pub : 0);
//
//         $scope.totalyear1pvt = $scope.totalyear1pvt + (
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pvt ?
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pvt : 0 );
//
//         $scope.totalyear2pub = $scope.totalyear2pub + (
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pub ?
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pub : 0);
//
//         $scope.totalyear2pvt = $scope.totalyear2pvt + (
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pvt ?
//                         $scope.dlWaterTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pvt : 0);
//
//
//         $scope.finaltotalpublic =$scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;
//
//         $scope.finaltotalprivate =$scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;
//
//
//
//
//
//
//
//    }

 $scope.getTotal = function(key) {

        $scope.finaltotalprivate = 0;

        var totalDamages = 0;

        totalDamages =  totalDamages + ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwTotDmgDistrict[0] ?
                          ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwTotDmgDistrict[0].dlcw_tot_dmg ?
                         $scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwTotDmgDistrict[0].dlcw_tot_dmg : 0):0);

        var totaldpubstring = "totalDamages"+ key;

        var model = $parse(totaldpubstring);
        model.assign($scope, totalDamages);


//        $scope.grndtotaldpub = $scope.grndtotaldpub + totaldpub ;

        var totalLossYear1 = 0;

        totalLossYear1 =  totalLossYear1 + ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0] ?
                          ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0].tot_los_year_1 ?
                         $scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0].tot_los_year_1 : 0):0);

        var totalLossYear1string = "totalLossYear1"+ key;

        var model = $parse(totalLossYear1string);
        model.assign($scope, totalLossYear1);



        var totalLossYear2 = 0;

        totalLossYear2 =  totalLossYear2 + ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0] ?
                          ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0].tot_los_year_2 ?
                         $scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0].tot_los_year_2 : 0):0);

        var totalLossYear2string = "totalLossYear2"+ key;

        var model = $parse(totalLossYear2string);
        model.assign($scope, totalLossYear2);


        $scope.tot = totalDamages + totalLossYear1 + totalLossYear2;


        //Rural

        var ruraltotalDamage = 0;

        ruraltotalDamage =  ruraltotalDamage + ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotDmgDistrict[0]?
                          ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotDmgDistrict[0].tot_damages ?
                         $scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotDmgDistrict[0].tot_damages : 0):0);

        var ruraltotalDamagestring = "ruraltotalDamage"+ key;

        var model = $parse(ruraltotalDamagestring);
        model.assign($scope, ruraltotalDamage);



         var ruralLosstot = 0;

        ruralLosstot =  ruralLosstot + ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotLosDistrict[0]?
                          ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotLosDistrict[0].tot_los ?
                         $scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotLosDistrict[0].tot_los : 0):0);

        var ruralLosstotstring = "ruralLosstot"+ key;

        var model = $parse(ruralLosstotstring);
        model.assign($scope, ruralLosstot);


        $scope.ruraltot = ruraltotalDamage + ruralLosstot ;


        $scope.grandDamge = totalDamages + ruraltotalDamage;
        $scope.grandLossYear1 = totalLossYear1 + ruralLosstot;
        $scope.grandLossYear2 = totalLossYear2;
        $scope.grandTot = totalDamages + ruraltotalDamage + totalLossYear1 + ruralLosstot + totalLossYear2;





}


 })
