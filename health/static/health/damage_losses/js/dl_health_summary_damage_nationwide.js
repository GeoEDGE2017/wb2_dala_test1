//Table 10
var app = angular.module('dlHealthSummaryDamageNationwideApp', []);

app.controller("DlHealthSummaryDamageNationwideController", ['$scope','$http',function ($scope,$http) {
    $scope.incident;
    $scope.dl_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;

    // edit relevant damage_losses data
    $scope.dlDataEdit = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        if(form.$valid){
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':  'Table_10',
                    'sector' : 'health',
                    'com_data': {
                       'incident': $scope.incident,
                    },
                    'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                console.log(data);
                $scope.dlhealthsummarydamagenationwide = data;
            })
        }
    }

    $scope.fetchDlData = function(form) {
        if($scope.incident) {
            $scope.is_edit = true;
            $scope.submitted = true;

            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                'table_name':  'Table_10',
                'sector': 'health',
                'com_data': {
                    'incident': $scope.incident,
                  },
               }),
            }).success(function(data) {
                $scope.data = data;
                $scope.dlhealthsummarydamagenationwide = data;
                console.log($scope.dlhealthsummarydamagenationwide);
            })
        }
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlhealthsummarydamagenationwide ? angular.equals({},
        $scope.dlhealthsummarydamagenationwide.health.Table_10) : true;
        return isNull;
    }

    $scope.sumFunc2 = function(val1=0, val2=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        return parseInt(val1) + parseInt(val2);
    }

    $scope.sumFunc3 = function(val1=0, val2=0, val3=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        return parseInt(val1) + parseInt(val2) + parseInt(val3);
    }

    $scope.sumFunc4 = function(val1=0, val2=0, val3=0, val4=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4);
    }

    $scope.sumFunc5 = function(val1=0, val2=0, val3=0, val4=0, val5=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5);
    }

    $scope.sumFunc6 = function(val1=0, val2=0, val3=0, val4=0, val5=0, val6=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }
        if(val6 == null) {
            val6=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6);
    }

    $scope.sumFunc7 = function(val1=0, val2=0, val3=0, val4=0, val5=0, val6=0, val7=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }
        if(val6 == null) {
            val6=0;
        }
        if(val7 == null) {
            val7=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7);
    }

    $scope.sumFunc10 = function(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }
        if(val6 == null) {
            val6=0;
        }
        if(val7 == null) {
            val7=0;
        }
        if(val8 == null) {
            val8=0;
        }
        if(val9 == null) {
            val9=0;
        }
        if(val10 == null) {
            val10=0;
        }

        var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) +
            parseInt(val6) + parseInt(val7) + parseInt(val8) + parseInt(val9) + parseInt(val10);
        return total;
    }

    $scope.sumFunc12 = function(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }
        if(val6 == null) {
            val6=0;
        }
        if(val7 == null) {
            val7=0;
        }
        if(val8 == null) {
            val8=0;
        }
        if(val9 == null) {
            val9=0;
        }
        if(val10 == null) {
            val10=0;
        }
        if(val11 == null) {
            val11=0;
        }
        if(val12 == null) {
            val12=0;
        }

        var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) +
            parseInt(val6) + parseInt(val7) + parseInt(val8) + parseInt(val9) + parseInt(val10) + parseInt(val11) + parseInt(val12);
        return total;
    }

    $scope.sumFunc14 = function(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, val14) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }
        if(val6 == null) {
            val6=0;
        }
        if(val7 == null) {
            val7=0;
        }
        if(val8 == null) {
            val8=0;
        }
        if(val9 == null) {
            val9=0;
        }
        if(val10 == null) {
            val10=0;
        }
        if(val11 == null) {
            val11=0;
        }
        if(val12 == null) {
            val12=0;
        }
        if(val13 == null) {
            val13=0;
        }
        if(val14 == null) {
            val14=0;
        }

        var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) +
            parseInt(val6) + parseInt(val7) + parseInt(val8) + parseInt(val9) + parseInt(val10) + parseInt(val11) +
            parseInt(val12) + parseInt(val13) + parseInt(val14);
        return total;
    }

    $scope.test = function() {
        console.log($scope.dlhealthsummarydamagenationwide.health.Table_10);
    }

    $scope.totNumberAffectedPub = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamagenationwide)) {
            var tot_number_affected = 0;
            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    console.log(key, value_in);
                    if(key == 'DmhLmhMohNational') {
                        tot_number_affected = tot_number_affected + $scope.sumFunc3(value_in[0].teaching_hospital,
                            value_in[0].provincial_general_hospital, value_in[0].district_general_hospital);

                        tot_number_affected = tot_number_affected + $scope.sumFunc2(value_in[0].office, value_in[0].other);
                    }
                    else if(key == 'DmfTotAffectedNational') {
                        tot_number_affected = tot_number_affected + $scope.sumFunc7(value_in[0].base_hospital,
                            value_in[0].divisional_hospital, value_in[0].rural_hospital,value_in[0].central_dispensary,
                            value_in[0].pmcus, value_in[0].phccs, value_in[0].mchcs);
                    }
                })
            })
            return tot_number_affected;
        }
    }



    $scope.totNumberAffectedPvt = function() {
        console.log('*** totNumberAffectedPvt');
        if(!angular.isUndefined($scope.dlhealthsummarydamagenationwide)) {
            var tot_number_affected = 0;
            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DapPvtNational') {
                        tot_number_affected = tot_number_affected + $scope.sumFunc2(value_in[1].num_affected_fac,
                            value_in[0].num_affected_fac);
                    }
                })
            })
            return tot_number_affected;
        }
    }

    $scope.totNoOfPatientsAffectedMalePvt = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamagenationwide)) {
            var tot_male = 0;
            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DapPvtNational') {
                        tot_male = tot_male + $scope.sumFunc2(value_in[1].male, value_in[0].male);
                    }
                })
            })
            return tot_male;
        }
    }

    $scope.totNoOfPatientsAffectedFemalePvt = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamagenationwide)) {
            var tot_female = 0;
            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DapPvtNational') {
                        tot_female = tot_female + $scope.sumFunc2(value_in[1].female, value_in[0].female);
                    }
                })
            })
            return tot_female;
        }
    }

    $scope.totDamagesPvt = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamagenationwide)) {
            var tot_damages = 0;
//            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
//                angular.forEach(value, function(value_in, key) {
//                    if(key == 'DapBefPcDistrict') {
//                        tot_damages = tot_damages + $scope.sumFunc2(value_in[0].total_damages, 0);
//                    }
//                    else if(key == 'DapBefOtherDistrict') {
//                        tot_damages = tot_damages + $scope.sumFunc2(value_in[0].total_damages, 0);
//                    }
//                })
//            })
            return tot_damages;
        }
    }

    $scope.totLossesYear1Pvt = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamagenationwide)) {
            var tot_est_losses_y1 = 0;
            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DapBefPcNational') {
                        tot_est_losses_y1 = tot_est_losses_y1 + $scope.sumFunc2(value_in[0].est_losses_y1, 0);
                    }
                    else if(key == 'DapBefOtherNational') {
                        tot_est_losses_y1 = tot_est_losses_y1 + $scope.sumFunc2(value_in[0].est_losses_y1, 0);
                    }
                })
            })
            return tot_est_losses_y1;
        }
    }

    $scope.totLossesYear2Pvt = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamagenationwide)) {
            var tot_est_losses_y2 = 0;
            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DapBefPcNational') {
                        tot_est_losses_y2 = tot_est_losses_y2 + $scope.sumFunc2(value_in[0].est_losses_y2, 0);
                    }
                    else if(key == 'DapBefOtherNational') {
                        tot_est_losses_y2 = tot_est_losses_y2 + $scope.sumFunc2(value_in[0].est_losses_y2, 0);
                    }
                })
            })
            return tot_est_losses_y2;
        }
    }
}])



