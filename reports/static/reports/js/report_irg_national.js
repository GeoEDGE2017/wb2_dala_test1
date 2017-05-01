var app = angular.module('reportAgriIrrifationNatApp', ['underscore']);

app.controller("reportAgriIrrifationNatController", function ($scope,$http,$parse, _) {
    $scope.National;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totaldamge = null;
    $scope.grnddamage = null;
    $scope.totalLoss = null;
    $scope.grndLoss = null;
    $scope.grndfinaltotal = null;
    $scope.finalgrandtot = null;

     $scope.loadData = function(form){
        $scope.fetchDlData();
    }

    $scope.fetchDlData = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_summary_disagtn',
            data: angular.toJson({
            'table_name':  ['Table_6'],
            'sector': ['agri_irrigation'],
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            angular.forEach(data, function(value, key) {

            });
           $scope.dlagriIrrigationNat = data  ;

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



        var totaldamge =
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlMajorTanksNational[0] ?
         ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlMajorTanksNational[0].damages ?
         $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlMajorTanksNational[0].damages : 0) : 0 ) +
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlMediumTanksNational[0] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlMediumTanksNational[0].damages ?
        $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlMediumTanksNational[0].damages : 0):0) +
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlMinorTanksNational[0] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlMinorTanksNational[0].damages ?
         $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlMinorTanksNational[0].damages:0):0) +
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlAnicutsNational[0] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlAnicutsNational[0].damages ?
        $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlAnicutsNational[0].damages : 0) : 0) +
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlOtherStructuresNational[0] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlOtherStructuresNational[0].damages  ?
        $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlOtherStructuresNational[0].damages : 0):0) +
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlRiverEmbankmntNational[0] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlRiverEmbankmntNational[0].damages ?
        $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlRiverEmbankmntNational[0].damages : 0):0) +
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlBuildingsNational[0] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlBuildingsNational[0].damages ?
        $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlBuildingsNational[0].damages : 0):0)
        ;


        var totaldamgestring = "totaldamge_"+ key;

        var model = $parse(totaldamgestring);
        model.assign($scope, totaldamge);

        $scope.grnddamage = $scope.grnddamage + totaldamge ;




    var totalLoss =
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosMajorTanksNational[0] ?
         ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosMajorTanksNational[0].total_los ?
         $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosMajorTanksNational[0].total_los : 0) : 0 ) +
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosMediumTanksNational[0] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosMediumTanksNational[0].total_los ?
        $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosMediumTanksNational[0].total_los : 0):0) +
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosMinorTanksNational[0] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosMinorTanksNational[0].total_los ?
         $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosMinorTanksNational[0].total_los:0):0) +
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosAnicutsNational[0] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosAnicutsNational[0].total_los ?
        $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosAnicutsNational[0].total_los : 0) : 0) +
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosOtherNational[0] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosOtherNational[0].total_los  ?
        $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosOtherNational[0].total_los : 0):0) +
         ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosOtherNational[1] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosOtherNational[1].total_los  ?
        $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosOtherNational[1].total_los : 0):0) +
         ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosOtherNational[3] ?
        ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosOtherNational[3].total_los  ?
        $scope.dlagriIrrigationNat.agri_irrigation.Table_6[key].DlLosOtherNational[3].total_los : 0):0)
        ;


        var totalLossstring = "totalLoss_"+ key;

        var model = $parse(totalLossstring);
        model.assign($scope, totalLoss);

        $scope.grndLoss = $scope.grndLoss + totalLoss ;

        var finalgrandtot = $scope.grndLoss + $scope.grnddamage ;

         var finalgrandtotstring = "finalgrandtot_"+ key;

         var model = $parse(finalgrandtotstring);
         model.assign($scope, finalgrandtot);
         $scope.grndfinaltotal = $scope.grndfinaltotal + finalgrandtot ;


    }



 })
