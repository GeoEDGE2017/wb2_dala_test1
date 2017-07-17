var app = angular.module('healthChartApp', ['chart.js','underscore']);
app.controller('HealthChartController',function($scope,$http,$parse, _) {

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
    $scope.PrivatetableDamageLosses = [[],[]];


    $scope.fetchDlData = function(){
        $scope.is_edit = true;
        $scope.submitted = true;
        $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_10',
            'sector': 'health',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlhealthsummarydamagenationwide = data;

            $scope.provincenames=["Western"];

            angular.forEach($scope.provincenames, function(value, key) {

            var totalAffectedMale = 0;
            totalAffectedMale = $scope.convertToInt(($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0].teaching_hospital ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0].teaching_hospital : 0):0) ,
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0].provincial_general_hospital ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0].provincial_general_hospital : 0):0),
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0].district_general_hospital ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0].district_general_hospital : 0):0) ,
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0].office ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0].office : 0):0) ,
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0].other ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[0].other : 0):0) ,
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].base_hospital ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].base_hospital : 0):0),
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].divisional_hospital ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].divisional_hospital : 0):0),
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].rural_hospital ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].rural_hospital : 0):0) ,
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].central_dispensary ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].central_dispensary : 0):0) ,
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].pmcus ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].pmcus : 0):0) ,
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].phccs ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].phccs : 0):0) ,
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0] ?
                                  ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].mchcs ?
                                  $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[0].mchcs : 0):0))


            var totalAffectedFemale = 0;
                        totalAffectedFemale = $scope.convertToInt(($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1].teaching_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1].teaching_hospital : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1].provincial_general_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1].provincial_general_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1].district_general_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1].district_general_hospital : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1].office ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1].office : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1].other ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhPafNational[1].other : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].base_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].base_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].divisional_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].divisional_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].rural_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].rural_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].central_dispensary ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].central_dispensary : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].pmcus ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].pmcus : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].phccs ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].phccs : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].mchcs ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfOmfTpaNational[1].mchcs : 0):0))


             var totalDamages = 0;
                        totalDamages = $scope.convertToInt(($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesNational[0].teaching_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesNational[0].teaching_hospital : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesNational[0].provincial_general_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesNational[0].provincial_general_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesNational[0].district_general_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesNational[0].district_general_hospital : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesMohNational[0].office ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesMohNational[0].office : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesMohNational[0].other ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhDamagesMohNational[0].other : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].base_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].base_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].divisional_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].divisional_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].rural_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].rural_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].central_dispensary ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].central_dispensary : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].pmcus ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].pmcus : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].phccs ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].phccs : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].mchcs ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[0].mchcs : 0):0))


               var totalLosses = 0;
                        totalLosses = $scope.convertToInTwo(($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0].teaching_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0].teaching_hospital : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1].teaching_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1].teaching_hospital : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0].provincial_general_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0].provincial_general_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1].provincial_general_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1].provincial_general_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0].district_general_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0].district_general_hospital : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1].district_general_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1].district_general_hospital : 0):0) ,
                                     ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0].office ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0].office : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1].office ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1].office : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0].other ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[0].other : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1].other ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmhLosNational[1].other : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].base_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].base_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].base_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].base_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].divisional_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].divisional_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].divisional_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].divisional_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].rural_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].rural_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfDamagesNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].rural_hospital ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].rural_hospital : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].central_dispensary ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].central_dispensary : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].central_dispensary ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].central_dispensary : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].pmcus ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].pmcus : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].pmcus ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].pmcus : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].phccs ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].phccs : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].phccs ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].phccs : 0):0) ,
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].mchcs ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[0].mchcs : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].mchcs ?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DmfLosNational[1].mchcs : 0):0))


             var pritvateAffectedMale = 0;
                 pritvateAffectedMale = $scope.convertToIntTwoPara(($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[1].male?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[1].male : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[2] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[2].male?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[2].male : 0):0))

             var pritvateAffectedFemale = 0;
                 pritvateAffectedFemale = $scope.convertToIntTwoPara(($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[1] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[1].female?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[1].female : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[2] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[2].female?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapPvtNational[2].female : 0):0))


              var pritvateTotalDamages = 0;
                 pritvateTotalDamages = $scope.convertToIntTwoPara(($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefPcNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefPcNational[0].est_replacement_cost?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefPcNational[0].est_replacement_cost : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefOtherNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefOtherNational[0].est_replacement_cost?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefOtherNational[0].est_replacement_cost : 0):0))

              var pritvateTotalLosses = 0;
                 pritvateTotalLosses = $scope.convertToInttest(($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefPcNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefPcNational[0].est_losses_y1?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefPcNational[0].est_losses_y1 : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefPcNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefPcNational[0].est_losses_y2?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefPcNational[0].est_losses_y2 : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefOtherNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefOtherNational[0].est_losses_y1?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefOtherNational[0].est_losses_y1 : 0):0),
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefOtherNational[0] ?
                                      ($scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefOtherNational[0].est_losses_y2?
                                      $scope.dlhealthsummarydamagenationwide.health.Table_10[value].DapBefOtherNational[0].est_losses_y2 : 0):0))


            $scope.tableDamageLosses[0][key]=totalDamages;
            $scope.tableDamageLosses[1][key]=totalLosses;

            $scope.PrivatetableDamageLosses[0][key]=pritvateTotalDamages;
            $scope.PrivatetableDamageLosses[1][key]=pritvateTotalLosses;


            $scope.totalPatientsAffected = [totalAffectedMale, totalAffectedFemale];
            $scope.totalPatientsAffectedPrivate = [pritvateAffectedMale, pritvateAffectedFemale];


            })

             $scope.damageLossesSeries = ['Total Damages', 'Total Losses'];
             $scope.privateDamageLossesSeries = ['Total Damages', 'Total Losses'];
             $scope.totalPatientsAffectedSeries = ['Male', 'Female'];
             $scope.totalPatientsAffectedPrivateSeries = ['Male', 'Female'];
///          $scope.totalDamagesLossesSeries = ['Damages', 'Losses'];


            })


    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlhealthsummarydamagenationwide ? angular.equals({}, $scope.dlhealthsummarydamagenationwide.health.Table_10) : true;
        return isNull;

   }

    $scope.convertToInt = function(val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12){
        var sum =
                parseInt(val1) + parseInt(val2) +
                parseInt(val3) + parseInt(val4) +
                parseInt(val5) + parseInt(val6)+
                parseInt(val7) + parseInt(val8) +
                parseInt(val9) + parseInt(val10) +
                parseInt(val11) + parseInt(val12);
        return sum;
    }

    $scope.convertToInttest = function(val1,val2,val3,val4){
        var sum =
                parseInt(val1) + parseInt(val2) +
                parseInt(val3) + parseInt(val4);
        return sum;
    }

    $scope.convertToIntTwoPara = function(val1,val2,val3,val4){
        var sum =
                parseInt(val1) + parseInt(val2);
        return sum;
    }

    $scope.convertToInTwo = function(val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12,val13,val14,val15,val16,val17,val18,val19,val20,val21,val22,val23,val24){
        var sum =
                parseInt(val1) + parseInt(val2) +
                parseInt(val3) + parseInt(val4) +
                parseInt(val5) + parseInt(val6)+
                parseInt(val7) + parseInt(val8) +
                parseInt(val9) + parseInt(val10) +
                parseInt(val11) + parseInt(val12)+
                parseInt(val13) + parseInt(val14);
                parseInt(val15) + parseInt(val16);
                parseInt(val17) + parseInt(val18);
                parseInt(val19) + parseInt(val20);
                parseInt(val21) + parseInt(val22);
                parseInt(val23) + parseInt(val24);
        return sum;
    }

    $scope.printDiv = function() {
        window.print();
    }

 });
