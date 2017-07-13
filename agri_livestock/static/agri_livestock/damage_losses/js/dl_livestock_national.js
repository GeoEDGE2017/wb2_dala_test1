var app = angular.module('dlAgriLivestocknNatApp', []);

app.controller("DlAgriLivestocknNatController", ['$scope','$http',function ($scope,$http) {
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
    $scope.user_id;


//    $scope.fetchDlData = function(){
//        $scope.is_edit = true;
//        $scope.submitted = true;
//        console.log($scope.incident);
//            $http({
//            method: "POST",
//            url: '/dl_fetch_summary_disagtn',
//            data: angular.toJson({
//            'table_name':'Table_6',
//            'sector': 'agri_livestock',
//            'com_data': {
//                    'incident': $scope.incident,
//                  },
//                   }),
//            }).success(function(data) {
//
//            console.log('load ', data);
//            $scope.dlAgriLivestockSumNat = data;
//
//            })
//
//    }

$scope.fetchDlData = function(form){
        if($scope.incident){
        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_summary_disagtn',
            data: angular.toJson({
            'table_name':  ['Table_6'],
            'sector': ['agri_livestock'],
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            angular.forEach(data, function(value, key) {

            });
           $scope.dlAgriLivestockSumNat = data  ;

            })
            }

    }

               $scope.checkIfNull = function()
   {
        var isNull = $scope.dlAgriLivestockSumNat ? angular.equals({},
         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6) : true;
        return isNull;

   }

 $scope.getTotal = function($index,key) {
         $scope.totaldpub = $scope.totaldpub +
         ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpNdaPubNational[$index] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpNdaPubNational[$index].damages ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpNdaPubNational[$index].damages : 0 ): 0) ;

         $scope.totaldpvt = $scope.totaldpvt + ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpNdaPvtNational[$index] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpNdaPvtNational[$index].damages ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpNdaPvtNational[$index].damages : 0 ) : 0) ;

         $scope.totalyear1pub = $scope.totalyear1pub + ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPubNational[$index] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPubNational[$index].los_year_1 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPubNational[$index].los_year_1 : 0 ) : 0) ;

         $scope.totalyear1pvt = $scope.totalyear1pvt + ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[$index] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[$index].los_year_1 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[$index].los_year_1 : 0 ) : 0 );

        console.log('test', $scope.totalyear1pvt);


         $scope.totalyear2pub = $scope.totalyear2pub + ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPubNational[$index] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPubNational[$index].los_year_2 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPubNational[$index].los_year_2 : 0 ) : 0) ;

         $scope.totalyear2pvt =$scope.totalyear2pvt + ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[$index] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[$index].los_year_2 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[$index].los_year_2 : 0 ) : 0);


         $scope.finaltotalpublic = $scope.finaltotalpublic + $scope.totaldpub + $scope.totalyear1pub  + $scope.totalyear2pub;

         $scope.finaltotalprivate = $scope.finaltotalprivate + $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;







    }



 }])
