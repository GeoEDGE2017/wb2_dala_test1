//Table 6
var app = angular.module('dlSummHousProApp', ['underscore']);

app.controller("DlSummHousroController", function ($scope,$http,$parse, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totalNumDes = null;
    $scope.grndtotalNumPart = 0;
    $scope.grndtotalNumDes = 0;
    $scope.grndtotalDamages = 0;
    $scope.grndtotalLosses = 0;
    $scope.grandTotal = 0;
    $scope.total_num_affected = 0;


    $scope.changedValue = function getDlData(selectProvinces) {

        if($scope.incident && selectProvinces) {
          fetchProvinces();
        }

    }
    $scope.provinces = [];

    function fetchProvinces()
    {
          $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                    'incident': $scope.incident
                   }),
            }).success(function(data) {
                $scope.provinces = data;
                $scope.province = "";

            })

    }

    $scope.fetchDlData = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name': 'Table_5',
            'sector': 'housing',
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {
                $scope.data = data;
                $scope.dlSumHousPro = data;

            })


    }
   $scope.checkIfNull = function()
   {
        var isNull = $scope.dlSumHousPro ? angular.equals({}, $scope.dlSumHousPro.housing.Table_5) : true;
        return isNull;

   }


   $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

 $scope.getTotal = function(key) {

        var totalNumDes = 0;

        totalNumDes =      $scope.convertToInt(
                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumDesPerProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumDesPerProvince[0].tot_num_houses ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlNumDesPerProvince[0].tot_num_houses : 0):0) ,

                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumDesSemiPerProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumDesSemiPerProvince[0].tot_num_houses ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlNumDesSemiPerProvince[0].tot_num_houses : 0):0) ,

                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumDesImpProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumDesImpProvince[0].tot_num_houses ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlNumDesImpProvince[0].tot_num_houses : 0):0));

        var totalNumDesstring = "noTotDes"+ key;

        var model = $parse(totalNumDesstring);
        console.log(totalNumDes);
        model.assign($scope, parseInt(totalNumDes));

        $scope.grndtotalNumDes = $scope.grndtotalNumDes + totalNumDes ;


        var totalNumPart = 0;

        totalNumPart =     $scope.convertToInt(
                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumPdesPerProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumPdesPerProvince[0].tot_num_houses ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlNumPdesPerProvince[0].tot_num_houses : 0):0) ,

                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumPdesSemiPerProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumPdesSemiPerProvince[0].tot_num_houses ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlNumPdesSemiPerProvince[0].tot_num_houses : 0):0) ,

                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumPdesImpProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlNumPdesImpProvince[0].tot_num_houses ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlNumPdesImpProvince[0].tot_num_houses : 0):0));

        var totalNumPartstring = "noPartDes"+ key;

        var model = $parse(totalNumPartstring);
        console.log(totalNumPart);
        model.assign($scope, parseInt(totalNumPart));

        $scope.grndtotalNumPart = $scope.grndtotalNumPart + totalNumPart ;


        var totalDamages = 0;

        totalDamages =  $scope.convertToInt(
                          ($scope.dlSumHousPro.housing.Table_5[key].DlDmgPerProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlDmgPerProvince[0].tot_damages ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlDmgPerProvince[0].tot_damages : 0):0) ,

                          ($scope.dlSumHousPro.housing.Table_5[key].DlDmgSemiPerProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlDmgSemiPerProvince[0].tot_damages ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlDmgSemiPerProvince[0].tot_damages : 0):0) ,

                          ($scope.dlSumHousPro.housing.Table_5[key].DlDmgImpProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlDmgImpProvince[0].tot_damages ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlDmgImpProvince[0].tot_damages : 0):0));

        var totalDamagesstring = "totdamage"+ key;

        var model = $parse(totalDamagesstring);
        console.log(totalDamages);
        model.assign($scope, parseInt(totalDamages));

        $scope.grndtotalDamages = $scope.grndtotalDamages + totalDamages ;



         var totalLosses = 0;

        totalLosses =      $scope.convertToInt(
                          ($scope.dlSumHousPro.housing.Table_5[key].DlLosPerProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlLosPerProvince[0].tot_losses ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlLosPerProvince[0].tot_losses : 0):0) ,

                          ($scope.dlSumHousPro.housing.Table_5[key].DlLosSemiPerProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlLosSemiPerProvince[0].tot_losses ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlLosSemiPerProvince[0].tot_losses : 0):0) ,

                          ($scope.dlSumHousPro.housing.Table_5[key].DlLosImpProvince[0] ?
                          ($scope.dlSumHousPro.housing.Table_5[key].DlLosImpProvince[0].tot_losses ?
                          $scope.dlSumHousPro.housing.Table_5[key].DlLosImpProvince[0].tot_losses : 0):0));

        var totalLossesstring = "totalLosses"+ key;

        var model = $parse(totalLossesstring);
        console.log(totalLosses);
        model.assign($scope, parseInt(totalLosses));

        $scope.grndtotalLosses = $scope.grndtotalLosses + totalLosses ;

        $scope.tot = totalNumDes + totalNumPart + totalDamages + totalLosses;
        $scope.grandTotal =  $scope.grndtotalNumDes + $scope.grndtotalNumPart + $scope.grndtotalDamages + $scope.grndtotalLosses;

}


 })
