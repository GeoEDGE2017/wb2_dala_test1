//Table 6
var app = angular.module('dlSummTouBusiFaciNatApp', ['underscore'])

app.controller('dlSummTouBusiFaciNatController', function($scope, $http, $parse, _) {

    $scope.data;
    $scope.incident;
    $scope.provinces;
    $scope.table;
    $scope.provinceTotals = [];
    $scope.data_available;
    $scope.user_id;

    $scope.fetchData = function(){
        $scope.provinceTotals = [];
        if($scope.incident){
            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name':  'Table_6',
                    'sector': 'tourism',
                    'com_data': {
                            'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.dlSummTouBusiFaciPNat = data;
//                $scope.data = data.tourism.Table_6;
//                $scope.provinces = Object.keys($scope.data);
//                console.log('load ', Object.keys($scope.data));
                console.log('dlSummTouBusiFaciPNat ', $scope.dlSummTouBusiFaciPNat);

//                $scope.data_available = ($scope.provinces.length != 0)
//                if(!$scope.data_available) {
//                    console.log("no data available for your selection");
//                }
//                $scope.provinceTotals = [];
//                $scope.makeTable();
            }).error(function(err) {
                $scope.data = null;
                $scope.provinces = null;
            })
        }
    }

    $scope.makeTable = function(){
        if($scope.data != null){

            $scope.table = {};
            $scope.table.business = {};
            $scope.table.infrastructures = {};

            //district vise objects
            angular.forEach($scope.provinces, function(value, key) {


                $scope.table.business[value] = {'name':value }
                $scope.table.business[value].year1Damage = {};
                $scope.table.business[value].year1Loss = {};
                $scope.table.business[value].year2Loss = {};

                $scope.table.infrastructures[value] = {'name':value }
                $scope.table.infrastructures[value].year1Damage = {};
                $scope.table.infrastructures[value].year1Loss = {};
                $scope.table.infrastructures[value].year2Loss = {};

                angular.forEach($scope.data[value].DlDmgBusTotNational, function(value2, key) {
                    $scope.table.business[value].year1Damage[value2.ownership] = value2.tot_damages;
                })

                angular.forEach($scope.data[value].DlLosBusTotNational, function(value2, key) {
                    $scope.table.business[value].year1Loss[value2.ownership] = value2.los_year1;
                    $scope.table.business[value].year2Loss[value2.ownership] = value2.los_year2;
                })

                angular.forEach($scope.data[value].DlDmgInfTotNational, function(value2, key) {
                    $scope.table.infrastructures[value].year1Damage[value2.ownership] = value2.sum;
                })

                angular.forEach($scope.data[value].DlLosInfTotNational, function(value2, key) {
                    $scope.table.infrastructures[value].year1Loss[value2.ownership] = value2.tot_year1;
                    $scope.table.infrastructures[value].year1Loss[value2.ownership] = value2.tot_year2;
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

    $scope.grndTotDmgPub = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPNat)) {
            var grnd_tot_dmg_pub = 0;
            angular.forEach($scope.dlSummTouBusiFaciPNat.tourism.Table_6, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlDmgFrmNational') {
                        grnd_tot_dmg_pub = grnd_tot_dmg_pub + value_in[0].tot_damages_pub;
                    }
                    else if(key == 'DlDmgInfNational') {
                        grnd_tot_dmg_pub = grnd_tot_dmg_pub + value_in[0].tot_damages_pub;
                    }
                })
            })
            return grnd_tot_dmg_pub;
        }
    }

    $scope.grndTotDmgPvt = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPNat)) {
            var grnd_tot_dmg_pvt = 0;
            angular.forEach($scope.dlSummTouBusiFaciPNat.tourism.Table_6, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlDmgFrmNational') {
                        grnd_tot_dmg_pvt = grnd_tot_dmg_pvt + value_in[0].tot_damages_pvt;
                    }
                    else if(key == 'DlDmgInfNational') {
                        grnd_tot_dmg_pvt = grnd_tot_dmg_pvt + value_in[0].tot_damages_pvt;
                    }
                })
            })
            return grnd_tot_dmg_pvt;
        }
    }

    $scope.grndTotLosYer1Pub = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPNat)) {
            var grnd_tot_los_yer1_pub = 0;
            angular.forEach($scope.dlSummTouBusiFaciPNat.tourism.Table_6, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlLosFrmTotNational') {
                        grnd_tot_los_yer1_pub = grnd_tot_los_yer1_pub + value_in[0].los_year1_pub;
                    }
                    else if(key == 'DlLosInfNational') {
                        grnd_tot_los_yer1_pub = grnd_tot_los_yer1_pub + value_in[0].los_year1_pub;
                    }
                })
            })
            return grnd_tot_los_yer1_pub;
        }
    }

    $scope.grndTotLosYer1Pvt = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPNat)) {
            var grnd_tot_los_yer1_pvt = 0;
            angular.forEach($scope.dlSummTouBusiFaciPNat.tourism.Table_6, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlLosFrmTotNational') {
                        grnd_tot_los_yer1_pvt = grnd_tot_los_yer1_pvt + value_in[0].los_year1_pvt;
                    }
                    else if(key == 'DlLosInfNational') {
                        grnd_tot_los_yer1_pvt = grnd_tot_los_yer1_pvt + value_in[0].los_year1_pvt;
                    }
                })
            })
            return grnd_tot_los_yer1_pvt;
        }
    }

    $scope.grndTotLosYer2Pub = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPNat)) {
            var grnd_tot_los_yer2_pub = 0;
            angular.forEach($scope.dlSummTouBusiFaciPNat.tourism.Table_6, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlLosFrmTotNational') {
                        grnd_tot_los_yer2_pub = grnd_tot_los_yer2_pub + value_in[0].los_year2_pub;
                    }
                    else if(key == 'DlLosInfNational') {
                        grnd_tot_los_yer2_pub = grnd_tot_los_yer2_pub + value_in[0].los_year2_pub;
                    }
                })
            })
            return grnd_tot_los_yer2_pub;
        }
    }

    $scope.grndTotLosYer2Pvt = function() {
        if(!angular.isUndefined($scope.dlSummTouBusiFaciPNat)) {
            var grnd_tot_los_yer2_pvt = 0;
            angular.forEach($scope.dlSummTouBusiFaciPNat.tourism.Table_6, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlLosFrmTotNational') {
                        grnd_tot_los_yer2_pvt = grnd_tot_los_yer2_pvt + value_in[0].los_year2_pvt;
                    }
                    else if(key == 'DlLosInfNational') {
                        grnd_tot_los_yer2_pvt = grnd_tot_los_yer2_pvt + value_in[0].los_year2_pvt;
                    }
                })
            })
            return grnd_tot_los_yer2_pvt;
        }
    }


});
