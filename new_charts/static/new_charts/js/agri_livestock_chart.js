var app = angular.module('agriLivestockChartApp', ['chart.js','underscore']);
app.controller('AgriLivestockChartController',function($scope,$http,$parse, _) {

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
    $scope.totaldpub = null;
    $scope.totaldpvt = null;
    $scope.totalyear1pub = null;
    $scope.totalyear1pvt = null;
    $scope.totalyear2pub = null;
    $scope.totalyear2pvt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
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
            'sector': 'agri_livestock',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlAgriLivestockSumNat = data;

            $scope.provincenames=["Western"];

        angular.forEach($scope.provincenames, function(value, key) {

            $scope.totaldpub = $scope.totaldpub +
         ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPubNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPubNational[0].damages ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPubNational[0].damages : 0 ): 0) ;

         $scope.totaldpvt = $scope.totaldpvt + ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPvtNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPvtNational[0].damages ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPvtNational[0].damages : 0 ) : 0) ;

         $scope.totalyear1pub = $scope.totalyear1pub + ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0].los_year_1 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0].los_year_1 : 0 ) : 0) ;

         $scope.totalyear1pvt = $scope.totalyear1pvt + ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0].los_year_1 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0].los_year_1 : 0 ) : 0 );

        console.log('test', $scope.totalyear1pvt);


         $scope.totalyear2pub = $scope.totalyear2pub + ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0].los_year_2 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0].los_year_2 : 0 ) : 0) ;

         $scope.totalyear2pvt =$scope.totalyear2pvt + ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0].los_year_2 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0].los_year_2 : 0 ) : 0);


         $scope.finaltotalpublic = $scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub  + $scope.totalyear2pub;

         $scope.finaltotalprivate = $scope.finaltotalprivate + $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;



            $scope.tableDamageLosses[0][key]=$scope.totaldpub + $scope.totaldpvt ;
            $scope.tableDamageLosses[1][key]=$scope.totalyear1pub + $scope.totalyear1pvt + $scope.totalyear2pub + $scope.totalyear2pvt ;
            $scope.totalDamagePrivatePublic = [$scope.totaldpub, $scope.totaldpvt];
            $scope.totalLossesPrivatePublic = [$scope.totalyear1pub + $scope.totalyear2pub , $scope.totalyear1pvt + $scope.totalyear2pvt];


            })

             $scope.damageLossesSeries = ['Total Damages', 'Total Losses'];
             $scope.totalDamagePrivatePublicSeries = ['Number of Public Damages', 'Number of Private Damages'];
             $scope.totalLossesPrivatePublicSeries = ['Number of Public Losses', 'Number of Private Losses'];


            })


    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlAgriLivestockSumNat ? angular.equals({},
        $scope.dlAgriLivestockSumNat.agri_livestock.Table_6) : true;
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
