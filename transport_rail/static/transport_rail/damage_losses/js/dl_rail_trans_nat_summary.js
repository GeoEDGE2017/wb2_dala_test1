var app = angular.module('dlRailTransSumNatApp', ['underscore']);

app.controller("dlRailTransSumNatController", function($scope,$http,$parse, _) {
    $scope.district;
    $scope.is_edit = false;
    $scope.incident;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.dmLosTransAirNation = null;
    $scope.total = 0;
    $scope.finaltotalTotal = 0;
    $scope.finaltotalYear1 =0;
    $scope.finaltotalYear2 =0;
    $scope.user_id;

    $scope.loadData = function(form) {
        if($scope.incident) {
            $scope.isLoded = true;
            $scope.is_edit = true;
            $scope.submitted = true;
            console.log($scope.incident);

            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name': 'Table_4',
                    'sector': 'transport_rail',
                    'com_data': {
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.dmLosTransAirNation = data;
                console.log('table 4',data);
            })

            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_5',
                    'sector': 'transport_rail',
                    'com_data': {
                        'incident': $scope.incident,
                    },
                    'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                $scope.dlTypeLossRail = data;
                console.log('table 5',data);
            })
        }
    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dmLosTransAirNation ? angular.equals({}, $scope.dmLosTransAirNation.transport_rail.Table_4) : true;
        return isNull;
    }

    $scope.getTotal = function(model, property,$index,key) {
        $scope.total =  $scope.total + ($scope.dmLosTransAirNation.transport_rail.Table_4[key].TotDmgNational[0].tot_damages ?
            $scope.dmLosTransAirNation.transport_rail.Table_4[key].TotDmgNational[0].tot_damages : 0 ) ;
    }
})
