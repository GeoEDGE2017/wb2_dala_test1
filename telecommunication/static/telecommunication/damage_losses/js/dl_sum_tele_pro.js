//Table 4
var app = angular.module('dlSumTeleProApp', ['underscore']);
app.controller("dlSumTeleProController", function ($scope,$http,$parse, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totalDamages = null;
    $scope.totaldpvt = null;
    $scope.totalyear1pub = null;
    $scope.totalyear1pvt = null;
    $scope.totalyear2pub = null;
    $scope.totalyear2pvt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    // declaring total variables
    $scope.total_num_affected = 0;
    $scope.user_id;
    $scope.provinces;

    // get relevant damage_losses data for calculations
    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }
        if($scope.incident && $scope.province) {
            $scope.fetchDlData();
        }
    }

    function fetchProvinces() {
        $scope.dlSumTelePro = null;
        $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                'incident': $scope.incident
            }),
        }).success(function(data) {
            $scope.provinces = data;
            $scope.province = null;
            console.log(data);
        })
    }

//    $scope.fetchDlData = function(form) {
//        alert($scope.province);
//        $scope.is_edit = true;
//        $scope.submitted = true;
//        $http({
//            method: "POST",
//            url: '/dl_fetch_district_disagtn',
//            data: angular.toJson({
//                'table_name': 'Table_4',
//                'sector': 'telecommunication',
//                'com_data': {
//                    'province': $scope.province,
//                    'incident_id': $scope.incident,
//                },
//            }),
//        }).success(function(data) {
////            console.log('load ', data);
//            $scope.data = data;
//            $scope.dlWaterSupplyPro = data;
//        })
//    }

    $scope.fetchDlData = function(form) {
        console.log('province', $scope.province, ' - province', $scope.incident);
        $scope.is_edit = true;
        $scope.submitted = true;

        $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
                'table_name':  'Table_4',
                'sector': 'telecommunication',
                'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                },
            }),
        }).success(function(data) {
            $scope.data = data;
            $scope.dlSumTelePro = data;
            console.log($scope.dlSumTelePro);
        })
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlWaterSupplyPro ? angular.equals({}, $scope.dlWaterSupplyPro.water_supply.Table_6) : true;
        return isNull;
    }

    $scope.getTotal = function(key) {
        $scope.finaltotalprivate = 0;

        var totalDamages = 0;

        totalDamages =  totalDamages + ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwTotDmgDistrict[0] ?
                          ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwTotDmgDistrict[0].dlcw_tot_dmg ?
                         $scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwTotDmgDistrict[0].dlcw_tot_dmg : 0):0);

        var totaldpubstring = "totalDamages"+ key;

        var model = $parse(totaldpubstring);
        model.assign($scope, totalDamages);

//        $scope.grndtotaldpub = $scope.grndtotaldpub + totaldpub ;

        var totalLossYear1 = 0;

        totalLossYear1 =  totalLossYear1 + ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0] ?
                          ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0].tot_los_year_1 ?
                         $scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0].tot_los_year_1 : 0):0);

        var totalLossYear1string = "totalLossYear1"+ key;

        var model = $parse(totalLossYear1string);
        model.assign($scope, totalLossYear1);



        var totalLossYear2 = 0;

        totalLossYear2 =  totalLossYear2 + ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0] ?
                          ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0].tot_los_year_2 ?
                         $scope.dlWaterSupplyPro.water_supply.Table_6[key].DlcwLosOther[0].tot_los_year_2 : 0):0);

        var totalLossYear2string = "totalLossYear2"+ key;

        var model = $parse(totalLossYear2string);
        model.assign($scope, totalLossYear2);


        $scope.tot = totalDamages + totalLossYear1 + totalLossYear2;
        //Rural

        var ruraltotalDamage = 0;

        ruraltotalDamage =  ruraltotalDamage + ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotDmgDistrict[0]?
                          ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotDmgDistrict[0].tot_damages ?
                         $scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotDmgDistrict[0].tot_damages : 0):0);

        var ruraltotalDamagestring = "ruraltotalDamage"+ key;

        var model = $parse(ruraltotalDamagestring);
        model.assign($scope, ruraltotalDamage);

        var ruralLosstot = 0;

        ruralLosstot =  ruralLosstot + ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotLosDistrict[0]?
                          ($scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotLosDistrict[0].tot_los ?
                         $scope.dlWaterSupplyPro.water_supply.Table_6[key].DlRuralTotLosDistrict[0].tot_los : 0):0);

        var ruralLosstotstring = "ruralLosstot"+ key;

        var model = $parse(ruralLosstotstring);
        model.assign($scope, ruralLosstot);


        $scope.ruraltot = ruraltotalDamage + ruralLosstot ;

        $scope.grandDamge = totalDamages + ruraltotalDamage;
        $scope.grandLossYear1 = totalLossYear1 + ruralLosstot;
        $scope.grandLossYear2 = totalLossYear2;
        $scope.grandTot = totalDamages + ruraltotalDamage + totalLossYear1 + ruralLosstot + totalLossYear2;
    }

    $scope.getTotDistrictDamagesPub = function(dis) {
        var tot_damages_pub=0;
        angular.forEach($scope.dlSumTelePro.telecommunication.Table_4[dis], function(value, key, index) {
            if(key == 'DlDmgFirmDistrict') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Public') {
                        tot_damages_pub = tot_damages_pub + value_in.tot_damages;
                    }
                })
            }
        })

        return tot_damages_pub;
    }

    $scope.getTotDistrictDamagesPvt = function(dis) {
        var tot_damages_pvt=0;
        angular.forEach($scope.dlSumTelePro.telecommunication.Table_4[dis], function(value, key, index) {
            if(key == 'DlDmgFirmDistrict') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Private') {
                        tot_damages_pvt = tot_damages_pvt + value_in.tot_damages;
                    }
                })
            }
        })

        return tot_damages_pvt;
    }

    $scope.getTotDistrictLossesYear1Pub = function(dis) {
        var year1_los_pub=0;
        angular.forEach($scope.dlSumTelePro.telecommunication.Table_4[dis], function(value, key, index) {
            if(key == 'LosFirmYear1District') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Public') {
                        year1_los_pub = year1_los_pub + value_in.year1_los;
                    }
                })
            }
        })

        return year1_los_pub;
    }

    $scope.getTotDistrictLossesYear1Pvt = function(dis) {
        var year1_los_pvt=0;
        angular.forEach($scope.dlSumTelePro.telecommunication.Table_4[dis], function(value, key, index) {
            if(key == 'LosFirmYear1District') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Private') {
                        year1_los_pvt = year1_los_pvt + value_in.year1_los;
                    }
                })
            }
        })

        return year1_los_pvt;
    }

    $scope.getTotDistrictLossesYear2Pub = function(dis) {
        var year2_los_pub=0;
        angular.forEach($scope.dlSumTelePro.telecommunication.Table_4[dis], function(value, key, index) {
            if(key == 'LosFirmYear2District') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Public') {
                        year2_los_pub = year2_los_pub + value_in.year2_los;
                    }
                })
            }
        })

        return year2_los_pub;
    }

    $scope.getTotDistrictLossesYear2Pvt = function(dis) {
        var year2_los_pvt=0;
        angular.forEach($scope.dlSumTelePro.telecommunication.Table_4[dis], function(value, key, index) {
            if(key == 'LosFirmYear2District') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Private') {
                        year2_los_pvt = year2_los_pvt + value_in.year2_los;
                    }
                })
            }
        })

        return year2_los_pvt;
    }

    $scope.getTOTALDistrictDamagesPvt = function() {
        var tot_damages_pvt=0;
        if(typeof $scope.dlSumTelePro != 'undefined') {
            if($scope.dlSumTelePro.telecommunication != 'null') {
                angular.forEach($scope.dlSumTelePro.telecommunication.Table_4, function(value, index) {
                    angular.forEach(value, function(dis, key, index) {
                        if(key == 'DlDmgFirmDistrict') {
                            angular.forEach(value, function(value_in, index_in) {
                                if(value_in.ownership == 'Private') {
                                    tot_damages_pvt = tot_damages_pvt + value_in.tot_damages;
                                }
                            })
                        }
                    })
                })
            }
        }
        return tot_damages_pvt;
    }

    $scope.grndTotDamagesPub = function() {
        if($scope.dlSumTelePro != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTelePro.telecommunication.Table_4, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlDmgFirmDistrict') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Public' && each_firm.company_name != 'Total') {
                                grnd_tot_damages = grnd_tot_damages + parseInt(each_firm.tot_damages);
                            }
                        })
                    }
                })
            })
            return grnd_tot_damages;
        }
    }

    $scope.grndTotDamagesPvt = function() {
        if($scope.dlSumTelePro != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTelePro.telecommunication.Table_4, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlDmgFirmDistrict') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Private' && each_firm.company_name != 'Total') {
                                grnd_tot_damages = grnd_tot_damages + parseInt(each_firm.tot_damages);
                            }
                        })
                    }
                })
            })
            return grnd_tot_damages;
        }
    }

    $scope.grndTotLossesYear1Pub = function() {
        if($scope.dlSumTelePro != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTelePro.telecommunication.Table_4, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear1District') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Public' && each_firm.company_name != 'Total') {
                                grnd_tot_damages = grnd_tot_damages + parseInt(each_firm.year1_los);
                            }
                        })
                    }
                })
            })
            return grnd_tot_damages;
        }
    }

    $scope.grndTotLossesYear1Pvt = function() {
        if($scope.dlSumTelePro != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTelePro.telecommunication.Table_4, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear1District') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Private' && each_firm.company_name != 'Total') {
                                grnd_tot_damages = grnd_tot_damages + parseInt(each_firm.year1_los);
                            }
                        })
                    }
                })
            })
            return grnd_tot_damages;
        }
    }

    $scope.grndTotLosseYear2Pub = function() {
        if($scope.dlSumTelePro != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTelePro.telecommunication.Table_4, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear2District') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Public' && each_firm.company_name != 'Total') {
                                grnd_tot_damages = grnd_tot_damages + parseInt(each_firm.year2_los);
                            }
                        })
                    }
                })
            })
            return grnd_tot_damages;
        }
    }

    $scope.grndTotLosseYear2Pvt = function() {
        if($scope.dlSumTelePro != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTelePro.telecommunication.Table_4, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear2District') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Private' && each_firm.company_name != 'Total') {
                                grnd_tot_damages = grnd_tot_damages + parseInt(each_firm.year2_los);
                            }
                        })
                    }
                })
            })
            return grnd_tot_damages;
        }
    }

    $scope.grndTotDamagesLossesPub = function() {
        if($scope.dlSumTelePro != null) {
            var grnd_tot_damages_losses = 0;
            angular.forEach($scope.dlSumTelePro.telecommunication.Table_4, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear1District') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Public' && each_firm.company_name != 'Total') {
                                grnd_tot_damages_losses = grnd_tot_damages_losses + parseInt(each_firm.year1_los);
                            }
                        })
                    }
                    else if(key == 'LosFirmYear2District') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Public' && each_firm.company_name != 'Total') {
                                grnd_tot_damages_losses = grnd_tot_damages_losses + parseInt(each_firm.year2_los);
                            }
                        })
                    }
                    else if(key == 'DlDmgFirmDistrict') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Public' && each_firm.company_name != 'Total') {
                                grnd_tot_damages_losses = grnd_tot_damages_losses + parseInt(each_firm.tot_damages);
                            }
                        })
                    }
                })
            })
            return grnd_tot_damages_losses;
        }
    }

    $scope.grndTotDamagesLossesPvt = function() {
        if($scope.dlSumTelePro != null) {
            var grnd_tot_damages_losses = 0;
            angular.forEach($scope.dlSumTelePro.telecommunication.Table_4, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear1District') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Private' && each_firm.company_name != 'Total') {
                                grnd_tot_damages_losses = grnd_tot_damages_losses + parseInt(each_firm.year1_los);
                            }
                        })
                    }
                    else if(key == 'LosFirmYear2District') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Private' && each_firm.company_name != 'Total') {
                                grnd_tot_damages_losses = grnd_tot_damages_losses + parseInt(each_firm.year2_los);
                            }
                        })
                    }
                    else if(key == 'DlDmgFirmDistrict') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Private' && each_firm.company_name != 'Total') {
                                grnd_tot_damages_losses = grnd_tot_damages_losses + parseInt(each_firm.tot_damages);
                            }
                        })
                    }
                })
            })
            return grnd_tot_damages_losses;
        }
    }
})
