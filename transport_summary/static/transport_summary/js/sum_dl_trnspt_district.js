//var bsHealthStatusApp = angular.module('sumDlTrnsptDistApp', ['ui.bootstrap', 'popoverToggle']);
//
//bsHealthStatusApp.controller('sumDlTrnsptDistController', function DlEduDistrictController($scope, $http) {
//    $scope.changedValue = function getDlData() {
//        if ($scope.incident) {
//            $http({
//                method: "POST",
//                url: '/fetch_incident_districts',
//                data: angular.toJson({
//                    'incident': $scope.incident
//                }),
//            }).success(function(data) {
//                $scope.districts = data;
//                $scope.district = "";
//                console.log(data);
//            })
//        }
//    }
//})
