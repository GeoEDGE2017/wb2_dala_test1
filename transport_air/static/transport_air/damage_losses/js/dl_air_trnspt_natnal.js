var app = angular.module('dlSummeryTANatApp', []);

app.controller("DlSummeryTANatController", ['$scope','$http',function ($scope,$http) {
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


     $scope.fetchDlData = function(){
        $scope.is_edit = true;
        $scope.submitted = true;
        console.log($scope.incident);
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
            $scope.dlAirTransSumNat = data;

            })

    }

        $scope.checkIfNull = function()
   {
        var isNull = $scope.dlAirTransSumNat ? angular.equals({}, $scope.dlAirTransSumNat.transport_air.Table_5) : true;
        return isNull;

   }



    $scope.getTotal = function($index,key) {

     $scope.finaltotalprivate = 0;

         $scope.totaldpub = $scope.totaldpub + (
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirDmgPubNational[0].tot_destroyed_pub ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirDmgPubNational[0].tot_destroyed_pub : 0 );

         $scope.totaldpvt = $scope.totaldpvt +(
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirDmgPvtNational[0].tot_destroyed_pvt ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirDmgPvtNational[0].tot_destroyed_pvt : 0  );

         $scope.totalyear1pub = $scope.totalyear1pub +(
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pub ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pub : 0  );

         $scope.totalyear1pvt = $scope.totalyear1pvt +(
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pvt ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pvt : 0  );

         $scope.totalyear2pub = $scope.totalyear2pub +(
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pub ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pub : 0  );

         $scope.totalyear2pvt = $scope.totalyear2pvt +(
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pvt ?
                         $scope.dlAirTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pvt : 0  );


         $scope.finaltotalpublic = $scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;


        $scope.finaltotalprivate  = $scope.totaldpvt+ $scope.totalyear1pvt + $scope.totalyear2pvt;




    }




 }])
