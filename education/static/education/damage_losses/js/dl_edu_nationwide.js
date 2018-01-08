//Table 7
var bsHealthStatusApp = angular.module('dlEduNationApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('DlEduNationController', function DlEduProvinceController($scope, $http) {
//    $scope.dlNational;
    $scope.total;
    $scope.iter_tot;
    $scope.district;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.data={};
    $scope.incident;
    $scope.user_id;

    $scope.changedValue = function getDlData() {
        $scope.incident;
    }

    $scope.loadData = function() {
        if($scope.incident) {
            $scope.is_edit = true;
            $scope.submitted = true;

            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name': 'Table_7',
                    'sector': 'education',
                    'com_data': {
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.dlNational = data;
                console.log($scope.dlNational);
            })
        }
    }

    $scope.sumFunc2 = function(val1, val2) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }

        return parseInt(val1) + parseInt(val2);
    }

    $scope.sumFunc8 = function(val1, val2, val3, val4, val5, val6, val7, val8) {
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

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7) + parseInt(val8);
    }

    $scope.sumFunc5 = function(val1, val2, val3, val4, val5) {
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

    $scope.sumFunc6 = function(val1, val2, val3, val4, val5, val6) {
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

    $scope.totNumberAffectedPub = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var tot_number_affected = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DugDfNational') {
                            tot_number_affected = tot_number_affected +
                                $scope.sumFunc8(value_in[0].ab1_1c, value_in[0].type_2, value_in[0].type_3, value_in[0].pirivena,
                                value_in[0].training_institutes, value_in[0].training_colleges, value_in[0].tc_crc_resc, value_in[0].min_pzd_offices);
                        }
                    }
                })
            })
            return tot_number_affected;
        }
    }

    $scope.totNoOfPatientsAffectedMalePub = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var tot_no_of_patients_affected = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DugNsaNational') {
                            tot_no_of_patients_affected = tot_no_of_patients_affected +
                                $scope.sumFunc8(value_in[1].ab1_1c, value_in[1].type_2, value_in[1].type_3, value_in[1].pirivena,
                                value_in[1].training_institutes, value_in[1].training_colleges, value_in[1].tc_crc_resc, value_in[1].min_pzd_offices);
                        }
                    }
                })
            })
            return tot_no_of_patients_affected;
        }
    }

    $scope.totNoOfPatientsAffectedFemalePub = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var tot_no_of_patients_affected = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DugNsaNational') {
                            tot_no_of_patients_affected = tot_no_of_patients_affected +
                                $scope.sumFunc8(value_in[0].ab1_1c, value_in[0].type_2, value_in[0].type_3, value_in[0].pirivena,
                                value_in[0].training_institutes, value_in[0].training_colleges, value_in[0].tc_crc_resc, value_in[0].min_pzd_offices);
                        }
                    }
                })
            })
            return tot_no_of_patients_affected;
        }
    }

    $scope.totDamagesPub = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var tot_damages = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DugNdafNational') {
                            tot_damages = tot_damages +
                                $scope.sumFunc8(value_in[0].ab1_1c, value_in[0].type_2, value_in[0].type_3, value_in[0].pirivena,
                                value_in[0].training_institutes, value_in[0].training_colleges, value_in[0].tc_crc_resc, value_in[0].min_pzd_offices);
                        }
                    }
                })
            })
            return tot_damages;
        }
    }

    $scope.totLossesYear1Pub = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var tot_losses_year1 = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DpefBefNational') {
                            tot_losses_year1 = tot_losses_year1 +
                                $scope.sumFunc8(value_in[0].ab1_1c, value_in[0].type_2, value_in[0].type_3, value_in[0].pirivena,
                                value_in[0].training_institutes, value_in[0].training_colleges, value_in[0].tc_crc_resc, value_in[0].min_pzd_offices);
                        }
                    }
                })
            })
            return tot_losses_year1;
        }
    }

    $scope.totLossesYear2Pub = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var tot_losses_year2 = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DpefBefNational') {
                            tot_losses_year2 = tot_losses_year2 +
                                $scope.sumFunc8(value_in[2].ab1_1c, value_in[2].type_2, value_in[2].type_3, value_in[2].pirivena,
                                value_in[2].training_institutes, value_in[2].training_colleges, value_in[2].tc_crc_resc, value_in[2].min_pzd_offices);
                        }
                    }
                })
            })
            return tot_losses_year2;
        }
    }


    $scope.totNumberAffectedPvt = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var tot_number_affected = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DpefNafNational') {
                            console.log('DpefNafNational', value_in, key);
                            angular.forEach(value_in, function(pvt_school, pvt_school_index) {
                                if(pvt_school.edu_facilities == 'Total' || pvt_school.edu_facilities == 'TOTAL') {
                                    tot_number_affected = tot_number_affected + parseInt(pvt_school.num_edu_facilities);
                                    console.log(pvt_school.num_edu_facilities);
                                }
                            })
                        }
                    }
                })
            })
            return tot_number_affected;
        }
    }

    $scope.totNoOfPatientsAffectedMalePvt = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var tot_male = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DpefNafNational') {
                            angular.forEach(value_in, function(pvt_school, pvt_school_index) {
                                if(pvt_school.edu_facilities == 'Total' || pvt_school.edu_facilities == 'TOTAL') {
                                    tot_male = tot_male + parseInt(pvt_school.male);
                                }
                            })
                        }
                    }
                })
            })
            return tot_male;
        }
    }

    $scope.totNoOfPatientsAffectedFemalePvt = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var tot_female = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DpefNafNational') {
                            angular.forEach(value_in, function(pvt_school, pvt_school_index) {
                                if(pvt_school.edu_facilities == 'Total' || pvt_school.edu_facilities == 'TOTAL') {
                                    tot_female = tot_female + parseInt(pvt_school.female);
                                }
                            })
                        }
                    }
                })
            })
            return tot_female;
        }
    }

    $scope.totDamagesPvt = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var tot_damages = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DpefBefPreNational') {
                            tot_damages = tot_damages + $scope.sumFunc2(value_in[0].tot_damages, 0);
                        }
                        else if(key == 'DpefBefPrimaryNational') {
                            tot_damages = tot_damages + $scope.sumFunc2(value_in[0].tot_damages, 0);
                        }
                        else if(key == 'DpefBefSecondaryNational') {
                            tot_damages = tot_damages + $scope.sumFunc2(value_in[0].tot_damages, 0);
                        }
                        else if(key == 'DpefBefUnvNational') {
                            tot_damages = tot_damages + $scope.sumFunc2(value_in[0].tot_damages, 0);
                        }
                        else if(key == 'DpefBefTechNational') {
                            tot_damages = tot_damages + $scope.sumFunc2(value_in[0].tot_damages, 0);
                        }
                        else if(key == 'DpefBefOtherNational') {
                            tot_damages = tot_damages + $scope.sumFunc2(value_in[0].tot_damages, 0);
                        }
                    }
                })
            })
            return tot_damages;
        }
    }

    $scope.totLossesYear1Pvt = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var est_los_year_1 = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DpefBefPreNational') {
                            est_los_year_1 = est_los_year_1 + $scope.sumFunc2(value_in[0].est_los_year_1, 0);
                        }
                        else if(key == 'DpefBefPrimaryNational') {
                            est_los_year_1 = est_los_year_1 + $scope.sumFunc2(value_in[0].est_los_year_1, 0);
                        }
                        else if(key == 'DpefBefSecondaryNational') {
                            est_los_year_1 = est_los_year_1 + $scope.sumFunc2(value_in[0].est_los_year_1, 0);
                        }
                        else if(key == 'DpefBefUnvNational') {
                            est_los_year_1 = est_los_year_1 + $scope.sumFunc2(value_in[0].est_los_year_1, 0);
                        }
                        else if(key == 'DpefBefTechNational') {
                            est_los_year_1 = est_los_year_1 + $scope.sumFunc2(value_in[0].est_los_year_1, 0);
                        }
                        else if(key == 'DpefBefOtherNational') {
                            est_los_year_1 = est_los_year_1 + $scope.sumFunc2(value_in[0].est_los_year_1, 0);
                        }
                    }
                })
            })
            return est_los_year_1;
        }
    }

    $scope.totLossesYear2Pvt = function() {
        if(!angular.isUndefined($scope.dlNational)) {
            var est_los_year_2 = 0;
            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DpefBefPreNational') {
                            est_los_year_2 = est_los_year_2 + $scope.sumFunc2(value_in[0].est_los_year_2, 0);
                        }
                        else if(key == 'DpefBefPrimaryNational') {
                            est_los_year_2 = est_los_year_2 + $scope.sumFunc2(value_in[0].est_los_year_2, 0);
                        }
                        else if(key == 'DpefBefSecondaryNational') {
                            est_los_year_2 = est_los_year_2 + $scope.sumFunc2(value_in[0].est_los_year_2, 0);
                        }
                        else if(key == 'DpefBefUnvNational') {
                            est_los_year_2 = est_los_year_2 + $scope.sumFunc2(value_in[0].est_los_year_2, 0);
                        }
                        else if(key == 'DpefBefTechNational') {
                            est_los_year_2 = est_los_year_2 + $scope.sumFunc2(value_in[0].est_los_year_2, 0);
                        }
                        else if(key == 'DpefBefOtherNational') {
                            est_los_year_2 = est_los_year_2 + $scope.sumFunc2(value_in[0].est_los_year_2, 0);
                        }
                    }
                })
            })
            return est_los_year_2;
        }
    }
})
