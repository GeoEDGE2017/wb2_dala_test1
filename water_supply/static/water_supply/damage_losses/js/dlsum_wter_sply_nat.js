//Table 7
//Table 6
var app = angular.module('dlWaterSupplyNatApp', ['underscore']);

app.controller("DlWaterSupplyNatController", function ($scope,$http,$parse, _) {
    $scope.district;
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
    $scope.totalyear2pvt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    // declaring total variables
    $scope.total_num_affected = 0;
    $scope.user_id;

    $scope.fetchDlData = function(){
    if($scope.incident){

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
            $scope.dlWaterSupplySumNat = data;

            })
            }

    }
$scope.checkIfNull = function()
   {
        var isNull = $scope.dlWaterSupplySumNat ? angular.equals({}, $scope.dlWaterSupplySumNat.water_supply.Table_7) : true;
        return isNull;

   }

 $scope.getTotal = function(key) {

        $scope.finaltotalprivate = 0;

        var totalDamages = 0;

        totalDamages =  totalDamages + ($scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlcwTotDmgNational[0] ?
                          ($scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlcwTotDmgNational[0].total_dmgs ?
                         $scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlcwTotDmgNational[0].total_dmgs : 0):0);

        var totaldpubstring = "totalDamages"+ key;

        var model = $parse(totaldpubstring);
        model.assign($scope, totalDamages);


//$scope.grndtotaldpub = $scope.grndtotaldpub + totaldpub ;

        var totalLossYear1 = 0;

        totalLossYear1 =  totalLossYear1 + ($scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlcwTotLosNational[0] ?
                          ($scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlcwTotLosNational[0].tot_los_year1 ?
                         $scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlcwTotLosNational[0].tot_los_year1 : 0):0);

        var totalLossYear1string = "totalLossYear1"+ key;

        var model = $parse(totalLossYear1string);
        model.assign($scope, totalLossYear1);



        var totalLossYear2 = 0;

        totalLossYear2 =  totalLossYear2 + ($scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlcwTotLosNational[0] ?
                          ($scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlcwTotLosNational[0].tot_los_year2 ?
                         $scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlcwTotLosNational[0].tot_los_year2 : 0):0);

        var totalLossYear2string = "totalLossYear2"+ key;

        var model = $parse(totalLossYear2string);
        model.assign($scope, totalLossYear2);


        $scope.tot = totalDamages + totalLossYear1 + totalLossYear2;


        //Rural

        var ruraltotalDamage = 0;

        ruraltotalDamage =  ruraltotalDamage + ($scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlRuralTotDmgNational[0]?
                          ($scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlRuralTotDmgNational[0].tot_damages ?
                         $scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlRuralTotDmgNational[0].tot_damages : 0):0);

        var ruraltotalDamagestring = "ruraltotalDamage"+ key;

        var model = $parse(ruraltotalDamagestring);
        model.assign($scope, ruraltotalDamage);



         var ruralLosstot = 0;

        ruralLosstot =  ruralLosstot + ($scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlRuralTotLosNational[0]?
                          ($scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlRuralTotLosNational[0].tot_los ?
                         $scope.dlWaterSupplySumNat.water_supply.Table_7[key].DlRuralTotLosNational[0].tot_los : 0):0);

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
