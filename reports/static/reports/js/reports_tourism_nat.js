//Table 6
var app = angular.module('reportSummTouBusiFaciNatApp', ['underscore', 'ui.bootstrap', 'popoverToggle', 'ngPrint'])

app.controller('reportSummTouBusiFaciNatController', function($scope, $http, $parse, _) {

    $scope.data;
    $scope.incident;
    $scope.provinces;
    $scope.table;
    $scope.provinceTotals = [];
    $scope.data_available;

     $scope.loadData = function(form){
        $scope.fetchData();
    }

    $scope.initprint = function() {
       $("#modal-container-print").modal('show');
       console.log($scope.print_memo);

    }


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

            $scope.data = data.tourism.Table_6;
            $scope.provinces = Object.keys($scope.data);
            console.log('load ', Object.keys($scope.data));

            $scope.data_available = ($scope.provinces.length != 0)

            if(!$scope.data_available){
//                alert("no data available for your selection");

             $("#modal-container-239456").modal('show');

            }

//            console.log($scope.data);
//            console.log($scope.provinces);
            $scope.makeTable();

            }).error(function(err){
                $scope.data = null;

                $scope.provinces = null;

            })

            }
    }

    $scope.makeTable = function(){
        if($scope.data != null){

            $scope.table = {};
            $scope.table.business = {};
            $scope.table.infrastructures = {};

            //district vise objects
            angular.forEach($scope.provinces, function(value, key) {


                $scope.table.business[value] = {'name':value }
                $scope.table.business[value].year1Damage = {};
                $scope.table.business[value].year1Loss = {};
                $scope.table.business[value].year2Loss = {};

                $scope.table.infrastructures[value] = {'name':value }
                $scope.table.infrastructures[value].year1Damage = {};
                $scope.table.infrastructures[value].year1Loss = {};
                $scope.table.infrastructures[value].year2Loss = {};

                angular.forEach($scope.data[$scope.provinces].DlDmgBusTotNational, function(value2, key) {
                    $scope.table.business[value].year1Damage[value2.ownership] = value2.tot_damages;
                })

                angular.forEach($scope.data[$scope.provinces].DlLosBusTotNational, function(value2, key) {
                    $scope.table.business[value].year1Loss[value2.ownership] = value2.los_year1;
                    $scope.table.business[value].year2Loss[value2.ownership] = value2.los_year2;
                })

                angular.forEach($scope.data[$scope.provinces].DlDmgInfTotNational, function(value2, key) {
                    $scope.table.infrastructures[value].year1Damage[value2.ownership] = value2.sum;
                })

                angular.forEach($scope.data[$scope.provinces].DlLosInfTotNational, function(value2, key) {
                    $scope.table.infrastructures[value].year1Loss[value2.ownership] = value2.tot_year1;
                    $scope.table.infrastructures[value].year1Loss[value2.ownership] = value2.tot_year2;
                })




            })

            console.log('table', $scope.table);


        }
        else{
            console.log("data null");
        }
   }

        $scope.getSum3 = function(val1, val2, val3){
        var final_val = 0;
        if(!isNaN(val1)) final_val += val1;
        if(!isNaN(val2)) final_val += val2;
        if(!isNaN(val3)) final_val += val3;

        return final_val;
    }

    $scope.getGrandTotCol = function(col){
        var final_val = 0;

        angular.forEach($scope.provinceTotals, function(value, key) {

            final_val += $scope.getConvertedVal( value[col] );
        })

        return final_val;
    }

    $scope.getConvertedVal = function(val){
        if(!val)    return 0;
        if(isNaN(val)) return 0;
        return val;
    }


});