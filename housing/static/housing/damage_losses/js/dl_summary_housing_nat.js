//Table 6
var app = angular.module('dlSummHouNatApp', ['underscore']);

app.controller("DlSummHouNatController", function ($scope,$http,$parse, _) {
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
    $scope.user_id;


    $scope.fetchDlData = function(){
    if($scope.incident){

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
        })
        }

    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlHousingSumNat ? angular.equals({}, $scope.dlHousingSumNat.housing.Table_6) : true;
        return isNull;
    }

    $scope.convertToInt = function(val1,val2,val3){
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

    $scope.getTotal = function(key) {

        var totalNumDes = 0;

        totalNumDes = $scope.convertToInt(
                  ($scope.dlHousingSumNat.housing.Table_6[key].DlNumDesPerNational[0] ?
                  ($scope.dlHousingSumNat.housing.Table_6[key].DlNumDesPerNational[0].tot_num_houses ?
                  $scope.dlHousingSumNat.housing.Table_6[key].DlNumDesPerNational[0].tot_num_houses : 0):0) ,
                  ($scope.dlHousingSumNat.housing.Table_6[key].DlNumDesSemiPerNational[0] ?
                  ($scope.dlHousingSumNat.housing.Table_6[key].DlNumDesSemiPerNational[0].tot_num_houses ?
                  $scope.dlHousingSumNat.housing.Table_6[key].DlNumDesSemiPerNational[0].tot_num_houses : 0):0) ,
                  ($scope.dlHousingSumNat.housing.Table_6[key].DlNumDesImpNational[0] ?
                  ($scope.dlHousingSumNat.housing.Table_6[key].DlNumDesImpNational[0].tot_num_houses ?
                  $scope.dlHousingSumNat.housing.Table_6[key].DlNumDesImpNational[0].tot_num_houses : 0):0));

        var totalNumDesstring = "noTotDes"+ key;

        var model = $parse(totalNumDesstring);

        model.assign($scope, parseInt(totalNumDes));

        $scope.grndtotalNumDes = $scope.grndtotalNumDes + totalNumDes ;

        var totalNumPart = 0;

        totalNumPart =    $scope.convertToInt(
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlNumPdesPerNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlNumPdesPerNational[0].tot_num_houses ?
                          $scope.dlHousingSumNat.housing.Table_6[key].DlNumPdesPerNational[0].tot_num_houses : 0):0) ,
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlNumPdesSemiPerNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlNumPdesSemiPerNational[0].tot_num_houses ?
                          $scope.dlHousingSumNat.housing.Table_6[key].DlNumPdesSemiPerNational[0].tot_num_houses : 0):0) ,
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlNumPdesImpNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlNumPdesImpNational[0].tot_num_houses ?
                          $scope.dlHousingSumNat.housing.Table_6[key].DlNumPdesImpNational[0].tot_num_houses : 0):0));

        var totalNumPartstring = "noPartDes"+ key;

        var model = $parse(totalNumPartstring);

        model.assign($scope, parseInt(totalNumPart));

        $scope.grndtotalNumPart = $scope.grndtotalNumPart + totalNumPart ;

        var totalDamages = 0;

        totalDamages =    $scope.convertToInt(
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlDmgPerNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlDmgPerNational[0].tot_damages ?
                          $scope.dlHousingSumNat.housing.Table_6[key].DlDmgPerNational[0].tot_damages : 0):0) ,
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlDmgSemiPerNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlDmgSemiPerNational[0].tot_damages ?
                          $scope.dlHousingSumNat.housing.Table_6[key].DlDmgSemiPerNational[0].tot_damages : 0):0) ,
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlDmgImpNational[0] ?
                          ($scope.dlHousingSumNat.housing.Table_6[key].DlDmgImpNational[0].tot_damages ?
                          $scope.dlHousingSumNat.housing.Table_6[key].DlDmgImpNational[0].tot_damages : 0):0));

        var totalDamagesstring = "totdamage"+ key;

        var model = $parse(totalDamagesstring);

        model.assign($scope, parseInt(totalDamages));

        $scope.grndtotalDamages = $scope.grndtotalDamages + totalDamages ;

         var totalLosses = 0;

         totalLosses = $scope.convertToInt(
                      ($scope.dlHousingSumNat.housing.Table_6[key].DlLosPerNational[0] ?
                      ($scope.dlHousingSumNat.housing.Table_6[key].DlLosPerNational[0].tot_losses ?
                      $scope.dlHousingSumNat.housing.Table_6[key].DlLosPerNational[0].tot_losses : 0):0) ,
                      ($scope.dlHousingSumNat.housing.Table_6[key].DlLosSemiPerNational[0] ?
                      ($scope.dlHousingSumNat.housing.Table_6[key].DlLosSemiPerNational[0].tot_losses ?
                      $scope.dlHousingSumNat.housing.Table_6[key].DlLosSemiPerNational[0].tot_losses : 0):0) ,
                      ($scope.dlHousingSumNat.housing.Table_6[key].DlLosImpNational[0] ?
                      ($scope.dlHousingSumNat.housing.Table_6[key].DlLosImpNational[0].tot_losses ?
                      $scope.dlHousingSumNat.housing.Table_6[key].DlLosImpNational[0].tot_losses : 0):0));

        var totalLossesstring = "totalLosses"+ key;

        var model = $parse(totalLossesstring);

        model.assign($scope, parseInt(totalLosses));

        $scope.grndtotalLosses = $scope.grndtotalLosses + totalLosses ;

        $scope.tot = totalNumDes + totalNumPart + totalDamages + totalLosses;

        $scope.grandTotal =  $scope.grndtotalNumDes + $scope.grndtotalNumPart + $scope.grndtotalDamages + $scope.grndtotalLosses;

    }

 })
