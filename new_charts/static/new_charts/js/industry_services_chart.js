var app = angular.module('industryServicesChartApp', ['chart.js','underscore']);
app.controller('IndustryServicesController',function($scope,$http,$parse, _) {

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

            if($scope.incident){
            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_9',
            'sector': 'industry_services',
            'com_data': {

                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {
            $scope.dlIndustryServices = data;
            console.log(data);
            $scope.provincenames=["Western"];
            angular.forEach($scope.provincenames, function(value, key) {


            var totalNumDam = 0;
            totalNumDam =    $scope.convertToIntTWo(
                              ($scope.dlIndustryServices.industry_services.Table_9[value].DmgTotFrmYear1National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].DmgTotFrmYear1National[0].tot_damages ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].DmgTotFrmYear1National[0].tot_damages: 0):0),

                              ($scope.dlIndustryServices.industry_services.Table_9[value].DmgTotInfYear1National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].DmgTotInfYear1National[0].tot_damages ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].DmgTotInfYear1National[0].tot_damages: 0):0))

            var totalNumLos = 0;
            totalNumLos =     $scope.convertToInt(
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear1National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear1National[0].los_year1 ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear1National[0].los_year1: 0):0),
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear2National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear2National[0].los_year2 ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear2National[0].los_year2: 0):0) ,
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear1National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear1National[0].los_year1 ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear1National[0].los_year1: 0):0) ,
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear2National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear2National[0].los_year2 ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear2National[0].los_year2: 0):0))

            $scope.tableDamageLosses[0][key]=totalNumDam;
            $scope.tableDamageLosses[1][key]=totalNumLos;


            $scope.formalDamages = ($scope.dlIndustryServices.industry_services.Table_9[value].DmgTotFrmYear1National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].DmgTotFrmYear1National[0].tot_damages ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].DmgTotFrmYear1National[0].tot_damages: 0):0)

            $scope.formalLosses = ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear1National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear1National[0].los_year1 ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear1National[0].los_year1: 0):0) +
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear2National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear2National[0].los_year2 ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].LosTotFrmYear2National[0].los_year2: 0):0)


            $scope.InformalDamages = ($scope.dlIndustryServices.industry_services.Table_9[value].DmgTotInfYear1National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].DmgTotInfYear1National[0].tot_damages ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].DmgTotInfYear1National[0].tot_damages: 0):0)

            $scope.InformalLosses = ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear1National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear1National[0].los_year1 ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear1National[0].los_year1: 0):0) +
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear2National[0] ?
                              ($scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear2National[0].los_year2 ?
                              $scope.dlIndustryServices.industry_services.Table_9[value].LosTotInfYear2National[0].los_year2: 0):0)


            $scope.totalDamage = [$scope.formalDamages, $scope.InformalDamages];
            $scope.totalLosses = [$scope.formalLosses, $scope.InformalLosses];

            })
             $scope.damageLossesSeries = ['Total Damages', 'Total Losses'];
             $scope.totalDamageSeries = ['Number of Formal Damages', 'Number of Informal Damages'];
             $scope.totalLossesSeries = ['Number of Formal Losses', 'Number of Informal Losses'];

            })


    }
    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlIndustryServices ? angular.equals({}, $scope.dlIndustryServices.industry_services.Table_9) : true;
        return isNull;

   }

    $scope.convertToInt = function(val1,val2,val3,val4){

        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4);
        return sum;
    }

    $scope.convertToIntTWo = function(val1,val2){

        var sum = parseInt(val1) + parseInt(val2);
        return sum;
    }

    $scope.printDiv = function() {
        window.print();
    }


 });
