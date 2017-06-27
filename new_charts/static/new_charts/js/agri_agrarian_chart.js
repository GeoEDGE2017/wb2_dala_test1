var app = angular.module('agriAgrarianChartApp', ['chart.js','underscore']);
app.controller('AgriAgrarianChartController',function($scope,$http,$parse, _) {

    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.total_num_affected = 0;
    $scope.totalNumDes = null;
    $scope.totaldpub = null;
    $scope.totaldpvt = null;
    $scope.totalyear1pub = null;
    $scope.totalyear1pvt = null;
    $scope.totalyear2pub = null;
    $scope.totalyear2pvt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    $scope.tableDamageLosses = [[],[]];


    $scope.fetchDlData = function(){

        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_10',
            'sector': 'agri_agrarian',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlAgriAgrarianSumNat = data;

            $scope.provincenames=["Western"];

        angular.forEach($scope.provincenames, function(value, key) {

            $scope.totaldpub = $scope.totaldpub + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorDmgLosNational[0] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorDmgLosNational[0].dmg_los_pub ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorDmgLosNational[0].dmg_los_pub : 0 ): 0) ;

         $scope.totaldpvt = $scope.totaldpvt + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorDmgLosNational[0] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorDmgLosNational[0].dmg_los_pvt ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorDmgLosNational[0].dmg_los_pvt : 0 ) : 0) ;

         $scope.totalyear1pub = $scope.totalyear1pub + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear1National[0] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear1National[0].dmg_los_pub ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear1National[0].dmg_los_pub : 0 ) : 0) ;

         $scope.totalyear1pvt = $scope.totalyear1pvt + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear1National[0] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear1National[0].dmg_los_pvt ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear1National[0].dmg_los_pvt : 0 ) : 0 );

         $scope.totalyear2pub = $scope.totalyear2pub + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear2National[0] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear2National[0].dmg_los_pub ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear2National[0].dmg_los_pub : 0 ) : 0) ;

         $scope.totalyear2pvt =($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear2National[0] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear2National[0].dmg_los_pvt ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear2National[0].dmg_los_pvt : 0 ) : 0);


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
        var isNull = $scope.dlAgriAgrarianSumNat ? angular.equals({}, $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10) : true;
        return isNull;

   }

    $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

 });
