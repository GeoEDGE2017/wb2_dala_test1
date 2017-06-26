var app = angular.module('transWaterChartApp', ['chart.js','underscore']);
app.controller('TransWaterChartController',function($scope,$http,$parse, _) {

    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totaldpub = 0;
    $scope.totaldpvt = 0;
    $scope.totalyear1pub = 0;
    $scope.totalyear1pvt = 0;
    $scope.totalyear2pub = 0;
    $scope.totalyear2pvt = 0;
    $scope.finaltotalpublic = 0;
    $scope.finaltotalprivate = 0;
    $scope.total_num_affected = 0;
    $scope.tableDamageLosses = [[],[]];


    $scope.fetchDlData = function(){

        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_5',
            'sector': 'transport_water',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlWaterTransSumNat = data;

            $scope.provincenames=["Western"];

        angular.forEach($scope.provincenames, function(value, key) {

          $scope.totaldpub = $scope.totaldpub + (
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterDmgPubNational[0].tot_dmg_public ?
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterDmgPubNational[0].tot_dmg_public : 0) ;

         $scope.totaldpvt = $scope.totaldpvt +(
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterDmgPvtNational[0].tot_dmg_private ?
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterDmgPvtNational[0].tot_dmg_private : 0 ) ;

         $scope.totalyear1pub = $scope.totalyear1pub +(
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pub ?
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pub : 0) ;

         $scope.totalyear1pvt = $scope.totalyear1pvt +(
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pvt ?
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pvt :0 ) ;

         $scope.totalyear2pub = $scope.totalyear2pub +(
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pub ?
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pub : 0) ;

         $scope.totalyear2pvt = $scope.totalyear2pvt +(
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pvt ?
                         $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pvt : 0 ) ;

            $scope.tableDamageLosses[0][key]=$scope.totaldpub + $scope.totaldpvt ;
            $scope.tableDamageLosses[1][key]=$scope.totalyear1pub + $scope.totalyear1pvt + $scope.totalyear2pub + $scope.totalyear2pvt;

            $scope.totalDamagePrivatePublic = [$scope.totaldpub, $scope.totaldpvt];

            console.log('damages',$scope.totaldpub);
            $scope.totalLossesPrivatePublic = [$scope.totalyear1pub + $scope.totalyear2pub, $scope.totalyear1pvt + $scope.totalyear2pvt];



    })
             $scope.damageLossesSeries = ['Total Damages', 'Total Losses'];
             $scope.totalDamagePrivatePublicSeries = ['Public', 'Private'];
             $scope.totalLossesPrivatePublicSeries = ['Public', 'Private'];
    })
    }
   $scope.checkIfNull = function()
   {
        var isNull = $scope.dlWaterTransSumNat ? angular.equals({}, $scope.dlWaterTransSumNat.transport_water.Table_5) : true;
        return isNull;

   }

    $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }



 });
