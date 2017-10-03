//Table_4
var app = angular.module('dlSumPowsupDisApp', ['ui.bootstrap', 'popoverToggle']);
app.controller('dlSumPowsupDisController', function($scope, $http) {
    $scope.dlEduDistrict;
    $scope.total;
    $scope.iter_tot;
    $scope.district;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.isLoded = false;
    $scope.user_id;

    $scope.changedValue = function getDlData() {
        if ($scope.incident) {
            $http({
                method: "POST",
                url: '/fetch_incident_districts',
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id,
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.district = "";
                console.log(data);
            })
        }
    }

    $scope.LoadData = function(form) {
        if($scope.incident && $scope.district) {
            $scope.isLoded = true;
            if(form.$valid) {
                $scope.tot_damages = null;
                $scope.is_edit = true;
                $scope.submitted = true;
                $http({
                    method: "POST",
                    url: '/dl_fetch_total_data',
                    data: angular.toJson({
                        'table_name': 'Table_4',
                        'sector':'power_supply',
                        'com_data': {
                            'district': $scope.district.district__id,
                            'incident': $scope.incident,
                        },
                        'is_edit':$scope.is_edit
                   }),
                }).success(function(data) {
                    $scope.data=data;
                    console.log(data);
                })
            }
        }
    }

   $scope.convertTotal = function(val1,val2,val3,val4){
        var sum = 0;
        sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
        return sum;
    }

    $scope.totDmg = function() {
        if(!angular.isUndefined($scope.data)) {
            var totDmg = 0;
            angular.forEach($scope.data.power_supply.Table_4, function(value, key) {
                    if(key == 'TotDmgPvtDistrict') {
                             totDmg = totDmg + value[0].tot_replace_cost;

                    }

                })
            return totDmg;
        }
    }
    $scope.totLosY1 = function() {
        if(!angular.isUndefined($scope.data)) {
            var totLos = 0;
            angular.forEach($scope.data.power_supply.Table_4, function(value, key) {
                    if(key == 'TotLossesPvtDistrict') {
                          totLos = totLos + value[0].los_year1;
                    }

                })
            return totLos;
        }
    }
    $scope.totLosY2 = function() {
        if(!angular.isUndefined($scope.data)) {
            var totLos = 0;
            angular.forEach($scope.data.power_supply.Table_4, function(value, key) {
                    if(key == 'TotLossesPvtDistrict') {
                          totLos = totLos + value[0].los_year2;
                    }

                })
            return totLos;
        }
    }

    $scope.totDmgTwo = function() {
        if(!angular.isUndefined($scope.data)) {
            var totDmg = 0;
            angular.forEach($scope.data.power_supply.Table_4, function(value, key) {
                    if(key == 'TotDmgPvtDistrict') {
                          totDmg = totDmg + value[1].tot_replace_cost;
                    }

                })
            return totDmg;
        }
    }

    $scope.totLosY1Two = function() {
        if(!angular.isUndefined($scope.data)) {
            var totLos = 0;
            angular.forEach($scope.data.power_supply.Table_4, function(value, key) {
            console.log('printing',key);
                    if(key == 'TotLossesPvtDistrict') {
                          console.log('printing',value[0]);
                          totLos = totLos + value[1].los_year1;
                    }

                })
            return totLos;
        }
    }
    $scope.totLosY2Two= function() {
        if(!angular.isUndefined($scope.data)) {
            var totLos = 0;
            angular.forEach($scope.data.power_supply.Table_4, function(value, key) {
                    if(key == 'TotLossesPvtDistrict') {
                          totLos = totLos + value[1].los_year2;
                    }

                })
            return totLos;
        }
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.data ? angular.equals({}, $scope.data.power_supply.Table_4) : true;
        return isNull;
    }
})
