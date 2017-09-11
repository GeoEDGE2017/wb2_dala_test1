var app = angular.module('dlAgriIrrifationProApp', ['underscore']);

app.controller("DlAgriIrrifationProController", function ($scope, $http, $parse, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totaldamge = null;
    $scope.grnddamage = null;
    $scope.totalLoss = null;
    $scope.grndLoss = null;
    $scope.grndfinaltotal = null;
    $scope.finalgrandtot = null;
    $scope.user_id;
    $scope.provinces;

    // get relevant damage_losses data for calculations
        $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }
        if($scope.incident && $scope.province) {
            $scope.fetchDlData();
        }
    }

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
            $scope.province = null;
            console.log(data);

        })

    }

    $scope.fetchDlData = function(form){
        if($scope.incident && $scope.province){
            $scope.is_edit = true;
            $scope.submitted = true;
            $http({
                method: "POST",
                url: '/dl_fetch_summary_disagtn',
                data: angular.toJson({
                    'table_name':  ['Table_5'],
                    'sector': ['agri_irrigation'],
                    'com_data': {
                            'province': $scope.province,
                            'incident': $scope.incident,
                     },
                }),
            }).success(function(data) {
                $scope.dlAgriIrrifationPro = data;
            })
        }
    }

   $scope.convertToInt = function(val1,val2,val3){
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

   $scope.convertTotal = function(val1,val2,val3,val4){
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
        return sum;
    }

      $scope.checkIfNull = function() {
        var isNull = $scope.dlAgriIrrifationPro ? angular.equals({}, $scope.dlAgriIrrifationPro.agri_irrigation.Table_5) : true;
        return isNull;
    }

   $scope.getTotal = function(key) {
       $scope.finaltotalprivate = 0;

        var totaldamge =
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlMajorTanksDistrict[0] ?
             ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlMajorTanksDistrict[0].damages ?
             $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlMajorTanksDistrict[0].damages : 0) : 0 ) +
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlMediumTanksDistrict[0] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlMediumTanksDistrict[0].damages ?
            $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlMediumTanksDistrict[0].damages : 0):0) +
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlMinorTanksDistrict[0] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlMinorTanksDistrict[0].damages ?
             $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlMinorTanksDistrict[0].damages:0):0) +
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlAnicutsDistrict[0] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlAnicutsDistrict[0].damages ?
            $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlAnicutsDistrict[0].damages : 0) : 0) +
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlOtherStructuresDistrict[0] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlOtherStructuresDistrict[0].damages  ?
            $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlOtherStructuresDistrict[0].damages : 0):0) +
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlRiverEmbankmntDistrict[0] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlRiverEmbankmntDistrict[0].damages ?
            $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlRiverEmbankmntDistrict[0].damages : 0):0) +
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlBuildingsDistrict[0] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlBuildingsDistrict[0].damages ?
            $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlBuildingsDistrict[0].damages : 0):0);


        var totaldamgestring = "totaldamge_"+ key;

        var model = $parse(totaldamgestring);
        model.assign($scope, totaldamge);

        $scope.grnddamage = totaldamge ;

        var totalLoss =
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosMajorTanksDistrict[0] ?
             ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosMajorTanksDistrict[0].total_los ?
             $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosMajorTanksDistrict[0].total_los : 0) : 0 ) +
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosMediumTanksDistrict[0] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosMediumTanksDistrict[0].total_los ?
            $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosMediumTanksDistrict[0].total_los : 0):0) +
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosMinorTanksDistrict[0] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosMinorTanksDistrict[0].total_los ?
             $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosMinorTanksDistrict[0].total_los:0):0) +
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosAnicutsDistrict[0] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosAnicutsDistrict[0].total_los ?
            $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosAnicutsDistrict[0].total_los : 0) : 0) +
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosOtherDistrict[0] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosOtherDistrict[0].total_los  ?
            $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosOtherDistrict[0].total_los : 0):0) +
             ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosOtherDistrict[1] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosOtherDistrict[1].total_los  ?
            $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosOtherDistrict[1].total_los : 0):0) +
             ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosOtherDistrict[2] ?
            ($scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosOtherDistrict[2].total_los  ?
            $scope.dlAgriIrrifationPro.agri_irrigation.Table_5[key].DlLosOtherDistrict[2].total_los : 0):0);


            var totalLossstring = "totalLoss_"+ key;

            var model = $parse(totalLossstring);
            model.assign($scope, totalLoss);

            $scope.grndLoss = totalLoss ;

            var finalgrandtot = $scope.grnddamage + $scope.grndLoss ;

             var finalgrandtotstring = "finalgrandtot_"+ key;

             var model = $parse(finalgrandtotstring);
             model.assign($scope, finalgrandtot);
             $scope.grndfinaltotal = finalgrandtot ;
             console.log('test',finalgrandtot);


   }

 })
