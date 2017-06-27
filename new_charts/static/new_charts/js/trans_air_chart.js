var app = angular.module('transAirChartApp', ['chart.js','underscore']);
app.controller('TransAirChartController',function($scope,$http,$parse, _) {
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
    $scope.tableDamageLosses = [[],[]];


    $scope.fetchDlData = function(){
        $scope.is_edit = true;
        $scope.submitted = true;
            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_5',
            'sector': 'transport_air',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlAirTransSumNat = data;

            $scope.provincenames=["Western"];

        angular.forEach($scope.provincenames, function(value, key) {

            $scope.totaldpub = $scope.totaldpub + (
                         $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirDmgPubNational[0].tot_destroyed_pub ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirDmgPubNational[0].tot_destroyed_pub : 0 );

            $scope.totaldpvt = $scope.totaldpvt +(
                         $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirDmgPvtNational[0].tot_destroyed_pvt ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirDmgPvtNational[0].tot_destroyed_pvt : 0  );


            $scope.totalyear1pub = $scope.totalyear1pub +(
                         $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pub ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pub : 0  );

             $scope.totalyear1pvt = $scope.totalyear1pvt +(
                             $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pvt ?
                             $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pvt : 0  );

             $scope.totalyear2pub = $scope.totalyear2pub +(
                             $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pub ?
                             $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pub : 0  );

             $scope.totalyear2pvt = $scope.totalyear2pvt +(
                             $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pvt ?
                             $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pvt : 0  );

            $scope.tableDamageLosses[0][key]=$scope.totaldpub + $scope.totaldpvt ;
            $scope.tableDamageLosses[1][key]=$scope.totalyear1pub + $scope.totalyear1pvt + $scope.totalyear2pub + $scope.totalyear2pvt;



            $scope.totalDamagePrivatePublic = [$scope.totaldpub, $scope.totaldpvt];
            $scope.totalLossesPrivatePublic = [$scope.totalyear1pub + $scope.totalyear2pub, $scope.totalyear1pvt + $scope.totalyear2pvt];


            })

             $scope.damageLossesSeries = ['Total Damages', 'Total Losses'];
             $scope.totalDamagePrivatePublicSeries = ['Public', 'Private'];
             $scope.totalLossesPrivatePublicSeries = ['Public', 'Private'];


            })
            }


            $scope.checkIfNull = function()
   {
        var isNull = $scope.dlAirTransSumNat ? angular.equals({}, $scope.dlAirTransSumNat.transport_air.Table_5) : true;
        return isNull;

   }

    $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }


 });
