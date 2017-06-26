var app = angular.module('transLandChartApp', ['chart.js','underscore']);
app.controller('TransLandChartController',function($scope,$http,$parse, _) {
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
    $scope.total_num_affected = 0;
    $scope.tableDamageLosses = [[],[]];


    $scope.fetchDlData = function(){

        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_9',
            'sector': 'transport_land',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlLandTransSumNat = data;

            $scope.provincenames=["Western"];

        angular.forEach($scope.provincenames, function(value, key) {

            $scope.totaldpub = $scope.totaldpub + ($scope.dlLandTransSumNat.transport_land.Table_9[value].DlGacPubNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[value].DlGacPubNational[0].damages ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[value].DlGacPubNational[0].damages : 0 ):0) ;

            $scope.totaldpvt = $scope.totaldpvt + parseInt($scope.dlLandTransSumNat.transport_land.Table_9[value].DlGacPvtNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[value].DlGacPvtNational[0].tot_damages_pvt ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[value].DlGacPvtNational[0].tot_damages_pvt : 0 ):0);


            $scope.totalyear1pub = $scope.totalyear1pub + ($scope.dlLandTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0].year_1 ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0].year_1 : 0 ):0) ;

            $scope.totalyear1pvt = $scope.totalyear1pvt + ($scope.dlLandTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0]?
                             ($scope.dlLandTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0].year_1_pvt ?
                             $scope.dlLandTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0].year_1_pvt : 0 ):0) ;

            $scope.totalyear2pub = $scope.totalyear2pub + ($scope.dlLandTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0]?
                             ($scope.dlLandTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0].year_2 ?
                             $scope.dlLandTransSumNat.transport_land.Table_9[value].DlYearsPubNational[0].year_2 : 0 ):0);



            $scope.totalyear2pvt = $scope.totalyear2pvt + ($scope.dlLandTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0]?
                             ($scope.dlLandTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0].year_2_pub ?
                             $scope.dlLandTransSumNat.transport_land.Table_9[value].DlOtherLosPvtNational[0].year_2_pub : 0):0) ;

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
        var isNull = $scope.dlLandTransSumNat ? angular.equals({}, $scope.dlLandTransSumNat.transport_land.Table_9) : true;
        return isNull;

   }

    $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }



 });
