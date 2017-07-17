var app = angular.module('miningChartApp', ['chart.js','underscore']);
app.controller('MiningChartController',function($scope,$http,$parse, _) {

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
    $scope.totaldpub = 0;
    $scope.totaldpvt = 0;
    $scope.gettotalDamages = 0;
    $scope.totalyear1pub = 0;
    $scope.totalyear1pvt = 0;
    $scope.totalyear2pub = 0;
    $scope.totalyear2pvt = 0;
    $scope.getIndusTotalDamages = 0;
    $scope.getArtisanalTotalDamages = 0;
    $scope.getArtisTotalLosses = 0;
    $scope.getIndusTotalLosses = 0;
    $scope.total_num_affected = 0;
    $scope.tableDamageLosses = [[],[]];
    $scope.tableIndustrialDL = [[],[]];
    $scope.tableArtisanalDL = [[],[]];



    $scope.fetchDlData = function(){

        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_6',
            'sector': 'mining',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dmLosMinFirmsNation = data;

            $scope.provincenames=["Western"];

            angular.forEach($scope.provincenames, function(value, key) {

            $scope.totaldpub = $scope.totaldpub +
                         ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1].tot_damages ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1].tot_damages : 0 ): 0) +
                         ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0].tot_damages ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0].tot_damages : 0 ): 0);

            $scope.totaldpvt = $scope.totaldpvt +
                         ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0].tot_damages ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0].tot_damages : 0 ) : 0);

             $scope.gettotalDamages = $scope.totaldpub + $scope.totaldpvt;


             $scope.getIndusTotalDamages = $scope.getIndusTotalDamages + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1].tot_damages ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1].tot_damages : 0 ): 0) +
                         ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0].tot_damages ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0].tot_damages : 0 ) : 0);

             $scope.getArtisanalTotalDamages = $scope.getArtisanalTotalDamages + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0].tot_damages ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0].tot_damages : 0 ): 0);


             $scope.totalyear1pub = $scope.totalyear1pub +
                        ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year1 ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year1 : 0 ) : 0) +
                        ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year1 ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year1 : 0 ) : 0);

             $scope.totalyear1pvt = $scope.totalyear1pvt +
                            ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0] ? (
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year1 ?
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year1 : 0 ) : 0 );

             $scope.totalyear2pub = $scope.totalyear2pub +
                            ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1] ? (
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year2 ?
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year2 : 0 ) : 0) +
                             ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0] ? (
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year2 ?
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year2 : 0 ) : 0);

               $scope.totalyear2pvt =$scope.totalyear2pvt +
                            ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0] ? (
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year2 ?
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year2 : 0 ) : 0);


                $scope.getTotalLosses = $scope.totalyear1pub + $scope.totalyear1pvt + $scope.totalyear2pub + $scope.totalyear2pvt;



                $scope.getIndusTotalLosses = $scope.getIndusTotalLosses +
                            ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1] ? (
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year1 ?
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year1 : 0 ) : 0) +
                             ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0] ? (
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year1 ?
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year1 : 0 ) : 0 ) +
                             ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1] ? (
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year2 ?
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year2 : 0 ) : 0) +
                             ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0] ? (
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year2 ?
                             $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year2 : 0 ) : 0);

                $scope.getArtisTotalLosses = $scope.getArtisTotalLosses +
                        ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year1 ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year1 : 0 ) : 0) +
                         ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year2 ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year2 : 0 ) : 0);


            $scope.tableDamageLosses[0][key]=$scope.gettotalDamages;
            $scope.tableDamageLosses[1][key]=$scope.getTotalLosses;


            $scope.tableIndustrialDL[0][key]=$scope.getIndusTotalDamages;
            $scope.tableIndustrialDL[1][key]=$scope.getIndusTotalLosses;



            $scope.tableArtisanalDL[0][key]=$scope.getArtisanalTotalDamages;
            $scope.tableArtisanalDL[1][key]=$scope.getArtisTotalLosses;

            $scope.IndustrialtotalDamage = [ $scope.getIndusTotalDamages, $scope.getArtisanalTotalDamages];
            $scope.ArtisanaltotalDamage = [ $scope.getArtisanalTotalDamages,$scope.getArtisTotalLosses];

            })

                 $scope.damageLossesSeries = ['Total Damages', 'Total Losses'];
                 $scope.IndustrailDamageLossesSeries = ['Total Damages', 'Total Losses'];
                 $scope.ArtisanalDamageLossesSeries = ['Total Damages', 'Total Losses'];

                 $scope.IndustrialtotalDamageSeries = ['Number of Industrial Damages', 'Number of Artisanal Damages'];
                 $scope.ArtisanaltotalDamageSeries = ['Number of Industrial Losses', 'Number of Artisanal Losses'];


            })


    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dmLosMinFirmsNation ? angular.equals({}, $scope.dmLosMinFirmsNation.mining.Table_6) : true;
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
