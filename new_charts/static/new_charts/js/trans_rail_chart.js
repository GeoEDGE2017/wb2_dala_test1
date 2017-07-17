var app = angular.module('transRailChartApp', ['chart.js','underscore']);
app.controller('TransRailChartController',function($scope,$http,$parse, _) {

    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totalDamages = 0;
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
            'table_name':'Table_4',
            'sector': 'transport_rail',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {
            $scope.dmLosTransAirNation = data;
            console.log('table 4',data);
            $scope.provincenames=["Western"];
            angular.forEach($scope.provincenames, function(value, key) {
            $scope.totalDamages =  $scope.totalDamages + (
                         $scope.dmLosTransAirNation.transport_rail.Table_4[value].TotDmgNational[0].tot_damages ?
                         $scope.dmLosTransAirNation.transport_rail.Table_4[value].TotDmgNational[0].tot_damages : 0 ) ;
            console.log('key',key);
            $scope.tableDamageLosses[0][0]=$scope.totalDamages ;

                    })
            })

            $http({
            method: "POST",
            url: '/dl_fetch_edit_data',
            data: angular.toJson({
            'table_name':  'Table_5',
            'sector':'transport_rail',
            'com_data': {

                    'incident': $scope.incident,
                  },
                   'is_edit':$scope.is_edit
                   }),
            }).success(function(data) {

            $scope.dlTypeLossRail = data;
             console.log('table 5',data);
             angular.forEach($scope.provincenames, function(value, key) {
                  $scope.foregone = $scope.dlTypeLossRail.transport_rail.Table_5.DlTypeLos[0].tot_los;
                  $scope.cleaning = $scope.dlTypeLossRail.transport_rail.Table_5.DlTypeLos[1].tot_los;
                  $scope.Higher = $scope.dlTypeLossRail.transport_rail.Table_5.DlTypeLos[2].tot_los;
                  $scope.Other = $scope.dlTypeLossRail.transport_rail.Table_5.DlTypeLos[3].tot_los;


                  $scope.tableDamageLosses[1][0]=$scope.foregone + $scope.cleaning + $scope.Higher + $scope.Other;

                  $scope.totalLosses = [$scope.foregone,$scope.cleaning,$scope.Higher,$scope.Other];

                  })
            })

             $scope.provincenames=["Western"];
             $scope.totalLossesSeries = ['Foregone income of Rail Company', 'Cleaning up of debris','Higher Operating costs','Other unexpected expenses'];

    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlTypeLossRail ? angular.equals({}, $scope.dlTypeLossRail.transport_rail.Table_5) : true;
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
