var app = angular.module('agriIrrigationChartApp', ['chart.js','underscore']);
app.controller('AgriIrrigationChartController',function($scope,$http,$parse, _) {

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
    $scope.tableDamageLosses = [[],[]];


    $scope.fetchDlData = function(){
    $scope.is_edit = true;
    $scope.submitted = true;

        $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_6',
            'sector': 'agri_irrigation',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
        }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlagriIrrigationNat = data  ;

            $scope.provincenames=["Western"];

            angular.forEach($scope.provincenames, function(value, key) {

            var totaldamge = 0;
            totaldamge = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMajorTanksNational[0] ?
             ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMajorTanksNational[0].damages ?
             $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMajorTanksNational[0].damages : 0) : 0 ) +
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMediumTanksNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMediumTanksNational[0].damages ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMediumTanksNational[0].damages : 0):0) +
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMinorTanksNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMinorTanksNational[0].damages ?
             $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMinorTanksNational[0].damages:0):0) +
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlAnicutsNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlAnicutsNational[0].damages ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlAnicutsNational[0].damages : 0) : 0) +
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlOtherStructuresNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlOtherStructuresNational[0].damages  ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlOtherStructuresNational[0].damages : 0):0) +
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlRiverEmbankmntNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlRiverEmbankmntNational[0].damages ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlRiverEmbankmntNational[0].damages : 0):0) +
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlBuildingsNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlBuildingsNational[0].damages ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlBuildingsNational[0].damages : 0):0);


            var totalLoss = 0;
            totalLoss = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMajorTanksNational[0] ?
             ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMajorTanksNational[0].total_los ?
             $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMajorTanksNational[0].total_los : 0) : 0 ) +
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMediumTanksNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMediumTanksNational[0].total_los ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMediumTanksNational[0].total_los : 0):0) +
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMinorTanksNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMinorTanksNational[0].total_los ?
             $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMinorTanksNational[0].total_los:0):0) +
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosAnicutsNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosAnicutsNational[0].total_los ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosAnicutsNational[0].total_los : 0) : 0) +
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[0].total_los  ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[0].total_los : 0):0) +
             ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[1] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[1].total_los  ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[1].total_los : 0):0) +
             ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[3] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[3].total_los  ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[3].total_los : 0):0);


            var majorTanksDamages = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMajorTanksNational[0] ?
             ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMajorTanksNational[0].damages ?
             $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMajorTanksNational[0].damages : 0) : 0 );

             var majorTanksLosses = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMajorTanksNational[0] ?
             ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMajorTanksNational[0].total_los ?
             $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMajorTanksNational[0].total_los : 0) : 0 );

             var mediumTanksDamages = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMediumTanksNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMediumTanksNational[0].damages ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMediumTanksNational[0].damages : 0):0);

            var mediumTanksLosses = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMediumTanksNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMediumTanksNational[0].total_los ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMediumTanksNational[0].total_los : 0):0);


            var minorTanksDamages = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMinorTanksNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMinorTanksNational[0].damages ?
             $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlMinorTanksNational[0].damages:0):0);


             var minorTanksLosses = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMinorTanksNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMinorTanksNational[0].total_los ?
             $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosMinorTanksNational[0].total_los:0):0);

             var anicutDamages = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlAnicutsNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlAnicutsNational[0].damages ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlAnicutsNational[0].damages : 0) : 0);


            var anicutLosses = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosAnicutsNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosAnicutsNational[0].total_los ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosAnicutsNational[0].total_los : 0) : 0);

            var otherStructuresDamages = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlOtherStructuresNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlOtherStructuresNational[0].damages  ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlOtherStructuresNational[0].damages : 0):0);


            var otherStructuresLosses = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[0].total_los  ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[0].total_los : 0):0);

            var riverDamages  = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlRiverEmbankmntNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlRiverEmbankmntNational[0].damages ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlRiverEmbankmntNational[0].damages : 0):0);


            var riverLosses = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[1] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[1].total_los  ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[1].total_los : 0):0);


            var buildingDamages = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlBuildingsNational[0] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlBuildingsNational[0].damages ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlBuildingsNational[0].damages : 0):0);

            var buildingLosses = ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[3] ?
            ($scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[3].total_los  ?
            $scope.dlagriIrrigationNat.agri_irrigation.Table_6[value].DlLosOtherNational[3].total_los : 0):0);


            $scope.tableDamageLosses[0][key]=totaldamge;
            $scope.tableDamageLosses[1][key]=totalLoss;
            $scope.alltotalDamage = [majorTanksDamages, mediumTanksDamages,minorTanksDamages,anicutDamages,otherStructuresDamages,riverDamages,buildingDamages];
            $scope.alltotalLosses = [majorTanksLosses, mediumTanksLosses,minorTanksLosses,anicutLosses,otherStructuresLosses,riverLosses,buildingLosses];
        })

             $scope.damageLossesSeries = ['Total Damages', 'Total Losses'];
             $scope.alltotalDamageSeries = ['Major Tanks Damages','Medium Tanks Damages','Minor Tanks Damages','Anicut Damages','Other Structure Damages','River Embankments Damages','Building Damages',];
             $scope.alltotalLossesSeries = ['Major Tanks Losses','Medium Tanks Losses','Minor Tanks Losses','Anicut Losses','Other Structure Losses','River Embankments Losses','Building Losses',];


                })


        }

    $scope.checkIfNull = function(){
                var isNull = $scope.dlagriIrrigationNat ? angular.equals({}, $scope.dlagriIrrigationNat.agri_irrigation.Table_6) : true;
                return isNull;

           }

    $scope.convertToInt = function(val1,val2,val3){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

    $scope.printDiv = function() {
        window.print();
    }

 });
