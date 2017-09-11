//Table 9
var app = angular.module('dlHealthSummeryDamageLossProvinceApp', []);

app.controller("dlHealthSummeryDamageLossProvinceAppController", ['$scope','$http',function ($scope,$http) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.is_null = false;
    $scope.user_id;
    $scope.provinces;

    // declaring total variables
    $scope.total_num_affected = 0;

    $scope.saveDlHealthSummeryDamagelossProvince = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            console.log($scope.data);
            $http({
                method: 'POST',
                url: '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlhealthsummarydamageprovince,
                    'com_data': {
                        'province': $scope.province,
                        'incident_id': $scope.incident,
                    },
                    'is_edit': false
                }),
                dataType: 'json',
            }).then(function mySucces(response) {
                console.log(response);
                if(response.data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');
                }, function myError(response) {
                    //if data sent to server side method unsuccessfull
                    console.log(response);
            });
        }
    }

           $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }
        if($scope.incident && $scope.province) {
            $scope.fetchData();
        }
    }

    function fetchProvinces(){
        $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                    'incident': $scope.incident
                   }),
        }).success(function(data) {
            $scope.provinces = data;
            $scope.province = null;
        })

    }

    $scope.fetchData = function(){
        if($scope.province && $scope.incident){
            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name':  'Table_8',
                    'sector': 'health',
                    'com_data': {
                        'province': $scope.province,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {

                console.log('load ', data);
                $scope.data = data;
                $scope.dlhealthsummarydamageprovince = data;
            })

        }
        }




    $scope.checkIfNull = function() {
        var isNull = $scope.dlhealthsummarydamageprovince ? angular.equals({},
        $scope.dlhealthsummarydamageprovince.health.Table_8) : true;

        return isNull;
    }

    $scope.sumFunc2 = function(val1, val2) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }

        var total = parseInt(val1) + parseInt(val2);
        return total;
    }

    $scope.sumFunc3 = function(val1, val2, val3) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }

        var total = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return total;
    }

    $scope.sumFunc4 = function(val1, val2, val3, val4) {
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

        var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4);
        return total;
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

        var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5);
        return total;
    }

    $scope.sumFunc7 = function(val1, val2, val3, val4, val5, val6, val7) {
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

        var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7);
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

    $scope.totNumberAffectedPub = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_number_affected = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DmhLmhMohDistrict') {
                        tot_number_affected = tot_number_affected + $scope.sumFunc3(value_in[0].teaching_hospital,
                            value_in[0].provincial_general_hospital, value_in[0].district_general_hospital);

                        tot_number_affected = tot_number_affected + $scope.sumFunc2(value_in[0].office, value_in[0].other);
                    }
                    else if(key == 'DmfTotAffectedDistrict') {
                        tot_number_affected = tot_number_affected + $scope.sumFunc7(value_in[0].base_hospital,
                            value_in[0].divisional_hospital, value_in[0].rural_hospital,value_in[0].central_dispensary,
                            value_in[0].pmcus, value_in[0].phccs, value_in[0].mchcs);
                    }

//                    angular.forEach($scope.privateClinics, function(pvt_clinic, pvt_clinic_index) {
//                        if(value_in.private_clinic == pvt_clinic.id) {
//                            $scope.privateClinicsData[index] = pvt_clinic;
//                        }
//                    })
                })
            })
            return tot_number_affected;
        }
    }

    $scope.totNoOfPatientsAffectedMalePub = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_no_of_patients_affected = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DmhPafDistrict') {
                        tot_no_of_patients_affected = tot_no_of_patients_affected +
                            $scope.sumFunc3(value_in[1].teaching_hospital, value_in[1].provincial_general_hospital,
                            value_in[1].district_general_hospital);

                        tot_no_of_patients_affected = tot_no_of_patients_affected + $scope.sumFunc2(value_in[1].office,
                            value_in[1].other);
                    }
                    else if(key == 'DmfOmfTpaDistrict') {
                        tot_no_of_patients_affected = tot_no_of_patients_affected +
                            $scope.sumFunc7(value_in[1].base_hospital, value_in[1].divisional_hospital, value_in[1].rural_hospital,
                            value_in[1].central_dispensary, value_in[1].pmcus, value_in[1].phccs, value_in[1].mchcs);
                    }
                })
            })
            return tot_no_of_patients_affected;
        }
    }

    $scope.totNoOfPatientsAffectedFemalePub = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_no_of_patients_affected = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DmhPafDistrict') {
                        tot_no_of_patients_affected = tot_no_of_patients_affected +
                            $scope.sumFunc3(value_in[0].teaching_hospital,
                                    value_in[0].provincial_general_hospital,
                                    value_in[0].district_general_hospital);

                        tot_no_of_patients_affected = tot_no_of_patients_affected + $scope.sumFunc2(value_in[0].office,
                            value_in[0].other);
                    }
                    else if(key == 'DmfOmfTpaDistrict') {
                        tot_no_of_patients_affected = tot_no_of_patients_affected +
                            $scope.sumFunc7(value_in[0].base_hospital, value_in[0].divisional_hospital, value_in[0].rural_hospital,
                            value_in[0].central_dispensary, value_in[0].pmcus, value_in[0].phccs, value_in[0].mchcs);
                    }
                })
            })
            return tot_no_of_patients_affected;
        }
    }

    $scope.totDamagesPub = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_damages = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DmhDamagesDistrict') {
                        console.log('DmhDamagesDistrict', value_in);
                        tot_damages = tot_damages + $scope.sumFunc3(value_in[0].teaching_hospital,
                                    value_in[0].provincial_general_hospital, value_in[0].district_general_hospital);

//                        tot_damages = tot_damages + $scope.sumFunc2(value_in[0].office, value_in[0].other);
                    }
                    else if(key == 'DmhDamagesMohDistrict') {
                        console.log('DmhDamagesMohDistrict', value_in);

                        tot_damages = tot_damages + $scope.sumFunc2(value_in[0].office, value_in[0].other);

                        console.log('DmhDamagesMohDistrict', $scope.sumFunc2(value_in[0].office, value_in[0].other));
                    }
                    else if(key == 'DmfDamagesDistrict') {
                        console.log('DmhDamagesMohDistrict', value_in);
                        tot_damages = tot_damages + $scope.sumFunc7(value_in[0].base_hospital, value_in[0].divisional_hospital,
                        value_in[0].rural_hospital, value_in[0].central_dispensary, value_in[0].pmcus,value_in[0].phccs, value_in[0].mchcs);
                    }
                })
            })
            return tot_damages;
        }
    }

    $scope.totLossesYear1Pub = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_losses_year1 = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DmhLosDistrict') {
                        tot_losses_year1 = tot_losses_year1 + $scope.sumFunc3(value_in[0].teaching_hospital,
                            value_in[0].provincial_general_hospital, value_in[0].district_general_hospital);

                        tot_losses_year1 = tot_losses_year1 + $scope.sumFunc2(value_in[0].office, value_in[0].other);
                    }
                    else if(key == 'DmfLosDistrict') {
                        tot_losses_year1 = tot_losses_year1 + $scope.sumFunc7(value_in[0].base_hospital,
                            value_in[0].divisional_hospital, value_in[0].rural_hospital, value_in[0].central_dispensary,
                            value_in[0].pmcus, value_in[0].phccs, value_in[0].mchcs);
                    }
                })
            })
            return tot_losses_year1;
        }
    }

    $scope.totLossesYear2Pub = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_losses_year2 = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    console.log(key, value_in);
                    if(key == 'DmhLosDistrict') {
                        tot_losses_year2 = tot_losses_year2 + $scope.sumFunc3(value_in[1].teaching_hospital,
                            value_in[1].provincial_general_hospital, value_in[1].district_general_hospital);

                        tot_losses_year2 = tot_losses_year2 + $scope.sumFunc2(value_in[1].office, value_in[1].other);
                    }
                    else if(key == 'DmfLosDistrict') {
                        tot_losses_year2 = tot_losses_year2 + $scope.sumFunc7(value_in[3].base_hospital,
                            value_in[3].divisional_hospital, value_in[3].rural_hospital, value_in[3].central_dispensary,
                            value_in[3].pmcus, value_in[3].phccs, value_in[3].mchcs);
                    }
                })
            })
            return tot_losses_year2;
        }
    }


    $scope.totNumberAffectedPvt = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_number_affected = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DapPvtDistrict') {
                        tot_number_affected = tot_number_affected + $scope.sumFunc2(value_in[1].num_affected_fac,
                            value_in[0].num_affected_fac);
                    }

//                    angular.forEach($scope.privateClinics, function(pvt_clinic, pvt_clinic_index) {
//                        if(value_in.private_clinic == pvt_clinic.id) {
//                            $scope.privateClinicsData[index] = pvt_clinic;
//                        }
//                    })
                })
            })
            return tot_number_affected;
        }
    }

    $scope.totNoOfPatientsAffectedMalePvt = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_male = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DapPvtDistrict') {
                        tot_male = tot_male + $scope.sumFunc2(value_in[1].male, value_in[0].male);
                    }
                })
            })
            return tot_male;
        }
    }

    $scope.totNoOfPatientsAffectedFemalePvt = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_female = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DapPvtDistrict') {
                        tot_female = tot_female + $scope.sumFunc2(value_in[1].female, value_in[0].female);
                    }
                })
            })
            return tot_female;
        }
    }

    $scope.totDamagesPvt = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_damages = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DapBefPcDistrict') {
                        tot_damages = tot_damages + $scope.sumFunc2(value_in[0].total_damages, 0);
                    }
                    else if(key == 'DapBefOtherDistrict') {
                        tot_damages = tot_damages + $scope.sumFunc2(value_in[0].total_damages, 0);
                    }
                })
            })
            return tot_damages;
        }
    }

    $scope.totLossesYear1Pvt = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_est_losses_y1 = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DapBefPcDistrict') {
                        tot_est_losses_y1 = tot_est_losses_y1 + $scope.sumFunc2(value_in[0].est_losses_y1, 0);
                    }
                    else if(key == 'DapBefOtherDistrict') {
                        tot_est_losses_y1 = tot_est_losses_y1 + $scope.sumFunc2(value_in[0].est_losses_y1, 0);
                    }
                })
            })
            return tot_est_losses_y1;
        }
    }

    $scope.totLossesYear2Pvt = function() {
        if(!angular.isUndefined($scope.dlhealthsummarydamageprovince)) {
            var tot_est_losses_y2 = 0;
            angular.forEach($scope.dlhealthsummarydamageprovince.health.Table_8, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DapBefPcDistrict') {
                        tot_est_losses_y2 = tot_est_losses_y2 + $scope.sumFunc2(value_in[0].est_losses_y2, 0);
                    }
                    else if(key == 'DapBefOtherDistrict') {
                        tot_est_losses_y2 = tot_est_losses_y2 + $scope.sumFunc2(value_in[0].est_losses_y2, 0);
                    }
                })
            })
            return tot_est_losses_y2;
        }
    }

 }])
