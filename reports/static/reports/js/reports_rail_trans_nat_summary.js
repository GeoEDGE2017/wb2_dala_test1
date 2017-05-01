var app = angular.module('reportRailTransSumNatApp', ['underscore']);

app.controller("reportRailTransSumNatController", function($scope,$http,$parse, _) {


    $scope.district;
    $scope.is_edit = false;
    $scope.incident;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.dmLosTransAirNation = null;
    $scope.total = 0;

     $scope.loadData = function(form){
        $scope.loadData(form);
    }

    $scope.loadData = function(form)
    {
        $scope.isLoded = true;

        $scope.is_edit = true;
        $scope.submitted = true;
        console.log($scope.incident);
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

            console.log('load ', data);
            $scope.dmLosTransAirNation = data;

            })





    }



             $scope.checkIfNull = function()
   {
        var isNull = $scope.dmLosTransAirNation ? angular.equals({}, $scope.dmLosTransAirNation.transport_rail.Table_4) : true;
        return isNull;

   }

     $scope.getTotal = function(model, property,$index,key) {


         $scope.total =  $scope.total + (
                         $scope.dmLosTransAirNation.transport_rail.Table_4[key].TotDmgNational[0].tot_damages ?
                         $scope.dmLosTransAirNation.transport_rail.Table_4[key].TotDmgNational[0].tot_damages : 0 ) ;

    }

})
