
var app = angular.module('dmLosOfMinFirmsNatApp', ['underscore']);

app.controller("DmLosOfMinFirmsNatController", function($scope,$http,$parse, _) {
    $scope.district;
    $scope.is_edit = false;
    $scope.incident;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.dmLosMinFirmsNation = null;


    $scope.loadData = function(){
        $scope.is_edit = true;
        $scope.submitted = true;
        $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
                'table_name':  'Table_6',
                'sector':'mining',
                'com_data': {
                    'incident': $scope.incident,
                },
                'is_edit':$scope.is_edit
            }),
        }).success(function(data) {
            console.log(data);
            $scope.dmLosMinFirmsNation = data;
        })
    }
})
