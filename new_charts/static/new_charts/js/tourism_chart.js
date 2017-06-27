var app = angular.module('tourismChartApp', ['chart.js','underscore']);
app.controller('TourismChartController',function($scope,$http,$parse, _) {

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
    $scope.total_num_affected = 0;
    $scope.tableDamageLosses = [[],[]];
 $scope.fetchData = function(){

            if($scope.incident){
            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_6',
            'sector': 'tourism',
            'com_data': {

                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('data',data);
            $scope.dlTourismSumNat = data;
            $scope.provincenames=["Western"];

        angular.forEach($scope.provincenames, function(value, key) {


            var totalNumDes = 0;
            totalNumDes =  ($scope.dlTourismSumNat.tourism.Table_6[value].DlDmgBusTotNational[0] ?
                           ($scope.dlTourismSumNat.tourism.Table_6[value].DlDmgBusTotNational[0].tot_damages ?
                            $scope.dlTourismSumNat.tourism.Table_6[value].DlDmgBusTotNational[0].tot_damages : 0):0) +
                            ($scope.dlTourismSumNat.tourism.Table_6[value].DlDmgInfTotNational[0] ?
                           ($scope.dlTourismSumNat.tourism.Table_6[value].DlDmgInfTotNational[0].tot_damages ?
                            $scope.dlTourismSumNat.tourism.Table_6[value].DlDmgInfTotNational[0].tot_damages : 0):0)

             var totalNumLos = 0;
            totalNumLos =  ($scope.dlTourismSumNat.tourism.Table_6[value].DlLosBusTotNational[0] ?
                           ($scope.dlTourismSumNat.tourism.Table_6[value].DlLosBusTotNational[0].los_year1 ?
                            $scope.dlTourismSumNat.tourism.Table_6[value].DlLosBusTotNational[0].los_year1 : 0):0) +
                            ($scope.dlTourismSumNat.tourism.Table_6[value].DlLosBusTotNational[0] ?
                           ($scope.dlTourismSumNat.tourism.Table_6[value].DlLosBusTotNational[0].los_year2 ?
                            $scope.dlTourismSumNat.tourism.Table_6[value].DlLosBusTotNational[0].los_year2 : 0):0)+
                            ($scope.dlTourismSumNat.tourism.Table_6[value].DlLosInfTotNational[0] ?
                           ($scope.dlTourismSumNat.tourism.Table_6[value].DlLosInfTotNational[0].los_year1 ?
                            $scope.dlTourismSumNat.tourism.Table_6[value].DlLosInfTotNational[0].los_year1 : 0):0) +
                            ($scope.dlTourismSumNat.tourism.Table_6[value].DlLosInfTotNational[0] ?
                           ($scope.dlTourismSumNat.tourism.Table_6[value].DlLosInfTotNational[0].los_year2 ?
                            $scope.dlTourismSumNat.tourism.Table_6[value].DlLosInfTotNational[0].los_year2 : 0):0)

            $scope.tableDamageLosses[0][key]=totalNumDes;
            $scope.tableDamageLosses[1][key]=totalNumLos;
//            $scope.totalDamagePartialDamage = [totalNumDes, totalNumPart];

            })

             $scope.damageLossesSeries = ['Total Damages', 'Total Losses'];
//             $scope.totalDamagePartialDamageSeries = ['Number of Totally Destroyed', 'Number of Partially Damaged'];

            })
        }
    }
    {
        var isNull = $scope.dlTourismSumNat ? angular.equals({}, $scope.dlTourismSumNat.tourism.Table_6) : true;
        return isNull;

   }

    $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

 });
