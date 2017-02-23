var app = angular.module('dlRailTransSumNatApp', ['underscore']);

app.controller("dlRailTransSumNatController", function($scope,$http,$parse, _) {


    $scope.district;
    $scope.is_edit = false;
    $scope.incident;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.dmLosTransAirNation = null;
    $scope.total = 0;


    $scope.loadData = function()
    {

       $scope.is_edit = true;
       $scope.submitted = true;
        $http({
        method: "POST",
        url: '/dl_fetch_district_disagtn',
        data: angular.toJson({
        'table_name':  'Table_4',
        'sector':'transport_rail',
        'com_data': {
                'incident': $scope.incident,
              },
               'is_edit':$scope.is_edit
               }),
        }).success(function(data) {

            $scope.dmLosTransAirNation = data;



        })


    }

     $scope.getTotal = function(model, property,$index,key) {


         $scope.total =  $scope.total +
                         $scope.dmLosTransAirNation.transport_rail.Table_4[key].TotDmgNational[$index].tot_damages ?
                         $scope.dmLosTransAirNation.transport_rail.Table_4[key].TotDmgNational[$index].tot_damages : 0 ;
         console.log($scope.dmLosTransAirNation.transport_rail.Table_4[key].TotDmgNational[$index].tot_damages);
    }

})
