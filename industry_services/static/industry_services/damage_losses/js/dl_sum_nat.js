//Table 7
var app = angular.module('dl_sum_natApp', ['underscore'])
app.controller('dl_sum_natController', function($scope, $http, $parse, _) {
    $scope.data;
    $scope.incident;
    $scope.provinces;
    $scope.table;
    $scope.provinceTotals = [];
    $scope.data_available;
    $scope.isDataAvailable = false;
    $scope.user_id;
    $scope.dlSumNat;

    $scope.fetchData = function() {
        if($scope.incident){
            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name': 'Table_7',
                    'sector': 'industry_services',
                    'com_data': {
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.dlSumNat = data;
                console.log($scope.dlSumNat);

//                $scope.provinces = Object.keys($scope.data);
//                console.log('load ', Object.keys($scope.data));
//                console.log("data", $scope.data);
//                $scope.data_available = ($scope.provinces.length != 0)
//                if(!$scope.data_available){
//                    console.log("no data available for your selection");
//                    $scope.isDataAvailable = false;
//                }
//                $scope.isDataAvailable = true;;
//                $scope.makeTable();

            }).error(function(err){
                $scope.data = null;
                $scope.provinces = null;
            })
        }
    }

    $scope.makeTable = function(){
        if($scope.data != null){
            $scope.table = {};
            $scope.table.formal = {};
            $scope.table.informal = {};

            angular.forEach($scope.provinces, function(value, key) {
                $scope.table.formal[value] = {'name':value }
                $scope.table.formal[value].year1Damage = {};
                $scope.table.formal[value].year1Loss = {};
                $scope.table.formal[value].year2Loss = {};

                $scope.table.informal[value] = {'name':value }
                $scope.table.informal[value].year1Damage = {};
                $scope.table.informal[value].year1Loss = {};
                $scope.table.informal[value].year2Loss = {};

                console.log('provinces',$scope.data);

                angular.forEach($scope.data[$scope.provinces].DmgTotFrmYear1National, function(value2, key) {
                    $scope.table.formal[value].year1Damage[value2.ownership] = value2.tot_damages;
                })

                angular.forEach($scope.data[$scope.provinces].LosTotFrmYear1National, function(value2, key) {
                    $scope.table.formal[value].year1Loss[value2.ownership] = value2.los_year1;
                })

                angular.forEach($scope.data[$scope.provinces].LosTotFrmYear2National, function(value2, key) {
                    $scope.table.formal[value].year2Loss[value2.ownership] = value2.los_year2;
                })


                angular.forEach($scope.data[$scope.provinces].DmgTotInfYear1National, function(value2, key) {
                    $scope.table.informal[value].year1Damage['Private'] = value2.tot_damages;
                })

                angular.forEach($scope.data[$scope.provinces].LosTotInfYear1National, function(value2, key) {
                    $scope.table.informal[value].year1Loss['Private'] = value2.los_year1;
                })

                angular.forEach($scope.data[$scope.provinces].LosTotInfYear2National, function(value2, key) {
                    $scope.table.informal[value].year2Loss['Private'] = value2.los_year2;
                })
            })
            console.log('table', $scope.table);
        }
        else{
            console.log("data null");
        }
   }

    $scope.getSum3 = function(val1, val2, val3){
        var final_val = 0;
        if(!isNaN(val1)) final_val += val1;
        if(!isNaN(val2)) final_val += val2;
        if(!isNaN(val3)) final_val += val3;
        return final_val;
    }

    $scope.getGrandTotCol = function(col){
        var final_val = 0;
        console.log("$scope.provinceTotals ",$scope.provinceTotals);
        angular.forEach($scope.provinceTotals, function(value, key) {
            final_val += $scope.getConvertedVal( value[col] );
        })
        return final_val;
    }

    $scope.getConvertedVal = function(val){
        if(!val)    return 0;
        if(isNaN(val)) return 0;
        return val;
    }
})
