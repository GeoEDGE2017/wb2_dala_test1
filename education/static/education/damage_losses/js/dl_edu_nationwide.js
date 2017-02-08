
var bsHealthStatusApp = angular.module('dlEduNationApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('DlEduNationController', function DlEduProvinceController($scope, $http) {

$scope.dlEduProvince;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;
$scope.data={};
$scope.incident;


    $scope.changedValue = function getDlData() {

        $scope.incident;
    }

   $scope.LoadData = function(){

    $scope.is_edit = true;
    $scope.submitted = true;

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

            console.log('load ', data);
            $scope.data = data;

            })


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
