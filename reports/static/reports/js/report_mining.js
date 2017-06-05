var app = angular.module('dlMinFirmsNatReportApp', ['underscore', 'ngPrint']);


app.controller("DlFirmsNatReportController", function($scope,$http,$parse, _) {

    $scope.district;
    $scope.is_edit = false;
    $scope.incident;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.dmLosMinFirmsNation = null;
    $scope.totaldpub = null;
    $scope.totaldpvt = null;
    $scope.totalyear1pub = null;
    $scope.totalyear1pvt = null;
    $scope.totalyear2pub = null;
    $scope.totalyear2pvt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;


    $scope.initprint = function() {
       $("#modal-container-print").modal('show');
       console.log($scope.print_memo);

    }

    $scope.loadData = function(){
        $scope.is_edit = true;
        $scope.submitted = true;
        $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
                'table_name':'Table_6',
                'sector':'mining',
                'com_data': {
                    'incident': $scope.incident,
                },
                'is_edit':$scope.is_edit
            }),
        }).success(function(data) {

            $scope.dmLosMinFirmsNation = data;
        })
    }

   $scope.checkIfNull = function()
   {
        var isNull = $scope.dmLosMinFirmsNation ? angular.equals({},
         $scope.dmLosMinFirmsNation.mining.Table_6) : true;
        return isNull;

   }


    $scope.getTotal = function($index,key) {
         $scope.totaldpub = $scope.totaldpub +
         ($scope.dmLosMinFirmsNation.mining.Table_6[key].DloDmgNational[1] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloDmgNational[1].tot_damages ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloDmgNational[1].tot_damages : 0 ): 0) +
        ($scope.dmLosMinFirmsNation.mining.Table_6[key].DlaDmgNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DlaDmgNational[0].tot_damages ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DlaDmgNational[0].tot_damages : 0 ): 0);


        console.log($scope.totaldpub);


         $scope.totaldpvt = $scope.totaldpvt +
         ($scope.dmLosMinFirmsNation.mining.Table_6[key].DloDmgNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloDmgNational[0].tot_damages ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloDmgNational[0].tot_damages : 0 ) : 0);

         $scope.totalyear1pub = $scope.totalyear1pub +
         ($scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[1] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[1].los_year1 ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[1].los_year1 : 0 ) : 0) +
         ($scope.dmLosMinFirmsNation.mining.Table_6[key].DlaLosNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DlaLosNational[0].los_year1 ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DlaLosNational[0].los_year1 : 0 ) : 0);

         $scope.totalyear1pvt = $scope.totalyear1pvt +
         ($scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[0].los_year1 ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[0].los_year1 : 0 ) : 0 );

         $scope.totalyear2pub = $scope.totalyear2pub +
         ($scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[1] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[1].los_year2 ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[1].los_year2 : 0 ) : 0) +
         ($scope.dmLosMinFirmsNation.mining.Table_6[key].DlaLosNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DlaLosNational[0].los_year2 ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DlaLosNational[0].los_year2 : 0 ) : 0);

         $scope.totalyear2pvt =$scope.totalyear2pvt +
         ($scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[0] ? (
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[0].los_year2 ?
                         $scope.dmLosMinFirmsNation.mining.Table_6[key].DloLosNational[0].los_year2 : 0 ) : 0);


         $scope.finaltotalpublic = $scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub  + $scope.totalyear2pub;

         $scope.finaltotalprivate = $scope.finaltotalprivate + $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;







    }
})


