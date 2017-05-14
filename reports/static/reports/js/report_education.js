
var bsHealthStatusApp = angular.module('dlEduNationReportApp', ['ui.bootstrap', 'popoverToggle', 'ngPrint']);

bsHealthStatusApp.controller('DlEduNationReportController', function DlEduProvinceController($scope, $http) {

$scope.dlEduProvince;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.submitted = false;
$scope.data = null;
$scope.incident;
$scope.isDataAvailable = false;

    $scope.changedValue = function getDlData() {

        $scope.incident;
    }

   $scope.checkIfNull = function()
   {
        var isNull = $scope.data ? angular.equals({}, $scope.data.education.Table_7) : true;
        return isNull;

   }

    $scope.initprint = function() {
       $("#modal-container-print").modal('show');
       console.log($scope.print_memo);

    }



$scope.loadData = function(form){
$scope.submitted = true;
$scope.isDataAvailable = false;
if(form.$valid){

        $http({
        method: "POST",
        url: '/dl_fetch_district_disagtn',
        data: angular.toJson({
        'table_name':  'Table_7',
        'sector': 'education',
        'com_data': {
                'incident': $scope.incident,
              },
               }),
        }).success(function(data) {
        console.log(data.education.Table_7);
        $scope.data = data;
        $scope.submitted = false;
        $scope.isDataAvailable = $scope.checkIfNull();

        if($scope.checkIfNull())
             $("#modal-container-239456").modal('show');

        })
}
}


    $scope.sumFunc8 = function(val1, val2, val3, val4, val5, val6, val7, val8) {
    //  console.log('hi', val1);
      return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7) + parseInt(val8);
    }

    $scope.sumFunc5 = function(val1, val2, val3, val4, val5) {
    //  console.log('hi', val1);
      return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5);
    }

})
