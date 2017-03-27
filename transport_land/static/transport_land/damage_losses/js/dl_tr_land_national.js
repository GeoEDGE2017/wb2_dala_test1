var app = angular.module('dlSummeryTLNatApp', []);

app.controller("DlSummeryTLNatController", ['$scope','$http',function ($scope,$http) {
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
    $scope.isLoded = false;


     $scope.fetchDlData = function(form){
        $scope.isLoded = true;
        if(form.$valid) {
        $scope.is_edit = true;
        $scope.submitted = true;
        console.log($scope.incident);
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
            $scope.dlLandTransSumNat = data;

            })
        }

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

    $scope.convertTotalInt = function(val1,val2,val3,val4){

        var sum = parseInt(val1) + parseInt(val2) +parseInt(val3) +parseInt(val4);
        console.log(sum);
        return sum;
    }


    $scope.getTotal = function($index,key) {

     $scope.finaltotalprivate = 0;

         $scope.totaldpub = $scope.totaldpub + ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPubNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPubNational[0].damages ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPubNational[0].damages : 0 ):0) ;

         $scope.totaldpvt = $scope.totaldpvt + parseInt($scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0].tot_damages_pvt ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0].tot_damages_pvt : 0 ):0);

         $scope.totalyear1pub = $scope.totalyear1pub + ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_1 ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_1 : 0 ):0) ;

         $scope.totalyear1pvt = $scope.totalyear1pvt + ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_1_pvt ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_1_pvt : 0 ):0) ;

         $scope.totalyear2pub = $scope.totalyear2pub + ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_2 ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_2 : 0 ):0);



         $scope.totalyear2pvt = $scope.totalyear2pvt + ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0]?
                         ($scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_2_pub ?
                         $scope.dlLandTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_2_pub : 0):0) ;


         $scope.finaltotalpublic = $scope.totaldpub + $scope.totalyear1pub + $scope.totalyear2pub;

         console.log('tset',$scope.finaltotalpublic);


        $scope.finaltotalprivate  =  $scope.totaldpvt + $scope.totalyear1pvt +$scope.totalyear2pvt;




    }




 }])
