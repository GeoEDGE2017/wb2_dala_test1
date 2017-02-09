
var bsHealthStatusApp = angular.module('dlEduProvinceApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('DlEduProvinceController', function DlEduProvinceController($scope, $http) {

$scope.dlEduProvince;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.province;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;
$scope.data={};


    $scope.changedValue = function getDlData() {

        if ($scope.incident) {

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
    }

   $scope.LoadData = function(){
    $scope.is_edit = true;
   $scope.submitted = true;

   $scope.province;
            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_6',
            'sector': 'education',
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            $scope.data=data;

            })


}

    $scope.sumFunc8 = function(val1, val2, val3, val4, val5, val6, val7, val8) {
        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7) + parseInt(val8);
    }

    $scope.sumFunc5 = function(val1, val2, val3, val4, val5) {
        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5);
    }

})
