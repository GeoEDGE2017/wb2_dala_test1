var app = angular.module('newChartApp', ['chart.js','underscore']);
app.controller('NewChartController',function($scope,$http,$parse, _) {

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
    $scope.table = [[],[]];


    $scope.fetchDlData = function(){

        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_6',
            'sector': 'housing',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlHousingSumNat = data;

            $scope.labels=["Western","Southern"];

        angular.forEach($scope.labels, function(value, key) {

            var totalNumDes = 0;
            totalNumDes =     $scope.convertToInt(
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesPerNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesPerNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumDesPerNational[0].tot_num_houses : 0):0) ,

                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesSemiPerNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesSemiPerNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumDesSemiPerNational[0].tot_num_houses : 0):0) ,

                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesImpNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesImpNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumDesImpNational[0].tot_num_houses : 0):0));

            var totalNumDesstring = "noTotDes"+ value;

            var model = $parse(totalNumDesstring);
            console.log(totalNumDes);
            model.assign($scope, parseInt(totalNumDes));

            $scope.grndtotalNumDes = $scope.grndtotalNumDes + totalNumDes ;

            var totalNumPart = 0;
            totalNumPart =     $scope.convertToInt(
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesPerNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesPerNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesPerNational[0].tot_num_houses : 0):0) ,

                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesSemiPerNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesSemiPerNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesSemiPerNational[0].tot_num_houses : 0):0) ,

                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesImpNational[0] ?
                              ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesImpNational[0].tot_num_houses ?
                              $scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesImpNational[0].tot_num_houses : 0):0));

            $scope.table[key][0]=totalNumDes;
            $scope.table[key][1]=totalNumPart;


            $scope.data1 = [23444444, 44666666];


            console.log('testing',$scope.table);
            })

             $scope.series = ['Number of Totally Destroyed', 'Number of Partially Damaged'];
             $scope.label = ['Number of Totally Destroyed', 'Number of Partially Damaged'];


            })


    }
            $scope.checkIfNull = function()
   {
        var isNull = $scope.dlHousingSumNat ? angular.equals({}, $scope.dlHousingSumNat.housing.Table_6) : true;
        return isNull;

   }

    $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }



//  $scope.data = [
//    [$scope.table[0][0], $scope.table[0][1]],
//    [$scope.table[1][0], $scope.table[1][1]]
//  ];



 });
