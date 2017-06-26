var app = angular.module('transSummaryChartApp', ['chart.js','underscore']);
app.controller('TransSummaryChartController',function($scope,$http,$parse, _) {

//    $scope.district;
//    $scope.incident;
//    $scope.bs_data={};
//    $scope.province = "";
//    $scope.is_edit = false;
//    $scope.submitted = false;
//    $scope.is_valid_data = true;
//    $scope.total_num_affected = 0;
//    $scope.totalNumDes = null;
//    $scope.grndtotalNumPart = 0;
//    $scope.grndtotalNumDes = 0;
//    $scope.grndtotalDamages = 0;
//    $scope.grndtotalLosses = 0;
//    $scope.grandTotal = 0;
//    $scope.total_num_affected = 0;
//    $scope.tableDamageLosses = [[],[]];
//
//
//    $scope.fetchDlData = function(){
//
//        $scope.is_edit = true;
//        $scope.submitted = true;
//
//              $scope.is_edit = true;
//        $scope.submitted = true;
//
//            $http({
//            method: "POST",
//            url: '/dl_fetch_summary_disagtn',
//            data: angular.toJson({
//            'table_name':  ['Table_9','Table_5','Table_5','Table_4'],
//            'sector': ['transport_land','transport_air','transport_water','transport_rail'],
//            'com_data': {
//                    'incident': $scope.incident,
//                  },
//                   }),
//            }).success(function(data) {
//
//
//           $scope.dlTransSumNat = data  ;
//
//            $scope.provincenames=["Western"];
//
//           angular.forEach($scope.provincenames, function(value, key) {
//
//            $scope.transLandDamages =
//
//            })
//
//
//
//            })
//
//
//    }
//            $scope.checkIfNull = function()
//   {
//        var isNull = $scope.dlTransSumNat ?
//         ((angular.equals({}, $scope.dlTransSumNat.transport_land.Table_9) ) ||
//         (angular.equals({}, $scope.dlTransSumNat.transport_air.Table_5)) ||
//         (angular.equals({}, $scope.dlTransSumNat.transport_water.Table_5)) ||
//         (angular.equals({}, $scope.dlTransSumNat.transport_rail.Table_4))) : true ;
//        return isNull;
//
//   }
//
//    $scope.convertToInt = function(val1,val2,val3){
//
//        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
//        return sum;
//    }

 });
