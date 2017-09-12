//Table 5
var app = angular.module('dlSumTeleNatApp', ['underscore']);
app.controller("dlSumTeleNatController", function ($scope,$http,$parse, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totaldpub = null;
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

    $scope.fetchDlData = function() {
        $scope.is_edit = true;
        $scope.submitted = true;

        $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
                'table_name':'Table_5',
                'sector': 'telecommunication',
                'com_data': {
                    'incident': $scope.incident,
                },
            }),
        }).success(function(data) {
            $scope.data= data;
            $scope.dlSumTeleNat = data;
            console.log($scope.dlSumTeleNat);
        })
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlSumTeleNat ? angular.equals({}, $scope.dlSumTeleNat.telecommunication.Table_5) : true;
        return isNull;
    }

    $scope.getTotal = function(key) {
        $scope.finaltotalprivate = 0;
        var totalDamages = 0;
        totalDamages =  totalDamages + ($scope.dlSumTeleNat.water_supply.Table_7[key].DlcwTotDmgNational[0] ?
                          ($scope.dlSumTeleNat.water_supply.Table_7[key].DlcwTotDmgNational[0].total_dmgs ?
                         $scope.dlSumTeleNat.water_supply.Table_7[key].DlcwTotDmgNational[0].total_dmgs : 0):0);

        var totaldpubstring = "totalDamages"+ key;

        var model = $parse(totaldpubstring);
        model.assign($scope, totalDamages);

//        $scope.grndtotaldpub = $scope.grndtotaldpub + totaldpub ;
        var totalLossYear1 = 0;

        totalLossYear1 =  totalLossYear1 + ($scope.dlSumTeleNat.water_supply.Table_7[key].DlcwTotLosNational[0] ?
                          ($scope.dlSumTeleNat.water_supply.Table_7[key].DlcwTotLosNational[0].tot_los_year1 ?
                         $scope.dlSumTeleNat.water_supply.Table_7[key].DlcwTotLosNational[0].tot_los_year1 : 0):0);

        var totalLossYear1string = "totalLossYear1"+ key;

        var model = $parse(totalLossYear1string);
        model.assign($scope, totalLossYear1);

        var totalLossYear2 = 0;

        totalLossYear2 =  totalLossYear2 + ($scope.dlSumTeleNat.water_supply.Table_7[key].DlcwTotLosNational[0] ?
                          ($scope.dlSumTeleNat.water_supply.Table_7[key].DlcwTotLosNational[0].tot_los_year2 ?
                         $scope.dlSumTeleNat.water_supply.Table_7[key].DlcwTotLosNational[0].tot_los_year2 : 0):0);

        var totalLossYear2string = "totalLossYear2"+ key;

        var model = $parse(totalLossYear2string);
        model.assign($scope, totalLossYear2);

        $scope.tot = totalDamages + totalLossYear1 + totalLossYear2;

        //Rural

        var ruraltotalDamage = 0;

        ruraltotalDamage =  ruraltotalDamage + ($scope.dlSumTeleNat.water_supply.Table_7[key].DlRuralTotDmgNational[0]?
                          ($scope.dlSumTeleNat.water_supply.Table_7[key].DlRuralTotDmgNational[0].tot_damages ?
                         $scope.dlSumTeleNat.water_supply.Table_7[key].DlRuralTotDmgNational[0].tot_damages : 0):0);

        var ruraltotalDamagestring = "ruraltotalDamage"+ key;

        var model = $parse(ruraltotalDamagestring);
        model.assign($scope, ruraltotalDamage);

        var ruralLosstot = 0;

        ruralLosstot =  ruralLosstot + ($scope.dlSumTeleNat.water_supply.Table_7[key].DlRuralTotLosNational[0]?
                          ($scope.dlSumTeleNat.water_supply.Table_7[key].DlRuralTotLosNational[0].tot_los ?
                         $scope.dlSumTeleNat.water_supply.Table_7[key].DlRuralTotLosNational[0].tot_los : 0):0);

        var ruralLosstotstring = "ruralLosstot"+ key;

        var model = $parse(ruralLosstotstring);
        model.assign($scope, ruralLosstot);

        $scope.ruraltot = ruraltotalDamage + ruralLosstot ;

        $scope.grandDamge = totalDamages + ruraltotalDamage;
        $scope.grandLossYear1 = totalLossYear1 + ruralLosstot;
        $scope.grandLossYear2 = totalLossYear2;
        $scope.grandTot = totalDamages + ruraltotalDamage + totalLossYear1 + ruralLosstot + totalLossYear2;
    }

    $scope.getPublicTotal = function(pro, dbtbl) {
//        var pub_tot = 0;
//        console.log(pro);
//        if($scope.dlSumTeleNat != null) {
//            console.log('# ', $scope.dlSumTeleNat.telecommunication.Table_5[pro]);
//            angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[pro], function(value, index, key) {
//                console.log('pro value', value, index, key);
//                if(value==pro) {
//
//                }
//            })
//        }

//        return pub_tot;
    }

    $scope.getTotDistrictDamagesPvt = function(dis) {
        var tot_damages_pvt = 0;
        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[dis], function(value, key, index) {
            if(key == 'DlDmgFirmGroupNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Private') {
                        tot_damages_pvt = tot_damages_pvt + value_in.tot_damages;
                    }
                })
            }
        })
        return tot_damages_pvt;
    }

    $scope.getTotDistrictDamagesPub = function(dis) {
        var tot_damages_pub = 0;
        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[dis], function(value, key, index) {
            if(key == 'DlDmgFirmGroupNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Public') {
                        tot_damages_pub = tot_damages_pub + value_in.tot_damages;
                    }
                })
            }
        })
        return tot_damages_pub;
    }

    $scope.getTotLosFirmYear1Pub = function(dis) {
        var tot_los_firm_year1_pub = 0;
        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[dis], function(value, key, index) {
            if(key == 'LosFirmYear1GroupsNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Public') {
                        tot_los_firm_year1_pub = tot_los_firm_year1_pub + value_in.year1_los;
                    }
                })
            }
        })
        return tot_los_firm_year1_pub;
    }

    $scope.getTotLosFirmYear1Pvt = function(dis) {
        var tot_los_firm_year1_pvt = 0;
        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[dis], function(value, key, index) {
            if(key == 'LosFirmYear1GroupsNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Private') {
                        tot_los_firm_year1_pvt = tot_los_firm_year1_pvt + value_in.year1_los;
                    }
                })
            }
        })
        return tot_los_firm_year1_pvt;
    }

    $scope.getTotLosFirmYear2Pub = function(dis) {
        var tot_los_firm_year2_pub = 0;
        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[dis], function(value, key, index) {
            if(key == 'LosFirmYear2GroupsNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Public') {
                        tot_los_firm_year2_pub = tot_los_firm_year2_pub + value_in.year2_los;
                    }
                })
            }
        })
        return tot_los_firm_year2_pub;
    }

    $scope.getTotLosFirmYear2Pvt = function(dis) {
        var tot_los_firm_year2_pvt = 0;
        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[dis], function(value, key, index) {
            if(key == 'LosFirmYear2GroupsNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Private') {
                        tot_los_firm_year2_pvt = tot_los_firm_year2_pvt + value_in.year2_los;
                    }
                })
            }
        })
        return tot_los_firm_year2_pvt;
    }

    $scope.getTotPub = function(dis) {
        var totpPub = $scope.getTotDistrictDamagesPub(dis) + $scope.getTotLosFirmYear1Pub(dis) + $scope.getTotLosFirmYear2Pub(dis);
        return totpPub;
    }

    $scope.getTotPvt = function(dis) {
        var totpPvt = $scope.getTotDistrictDamagesPvt(dis) + $scope.getTotLosFirmYear1Pvt(dis) + $scope.getTotLosFirmYear2Pvt(dis);
        return totpPvt;
    }

    $scope.grndTotDamagesPub = function() {
        if($scope.dlSumTeleNat != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlDmgFirmGroupNational') {
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
        if($scope.dlSumTeleNat != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'DlDmgFirmGroupNational') {
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
        if($scope.dlSumTeleNat != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear1GroupsNational') {
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
        if($scope.dlSumTeleNat != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear1GroupsNational') {
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
        if($scope.dlSumTeleNat != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear2GroupsNational') {
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
        if($scope.dlSumTeleNat != null) {
            var grnd_tot_damages = 0;
            angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear2GroupsNational') {
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
        if($scope.dlSumTeleNat != null) {
            var grnd_tot_damages_losses = 0;
            angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear1GroupsNational') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Public' && each_firm.company_name != 'Total') {
                                grnd_tot_damages_losses = grnd_tot_damages_losses + parseInt(each_firm.year1_los);
                            }
                        })
                    }
                    else if(key == 'LosFirmYear2GroupsNational') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Public' && each_firm.company_name != 'Total') {
                                grnd_tot_damages_losses = grnd_tot_damages_losses + parseInt(each_firm.year2_los);
                            }
                        })
                    }
                    else if(key == 'DlDmgFirmGroupNational') {
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
        if($scope.dlSumTeleNat != null) {
            var grnd_tot_damages_losses = 0;
            angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(key == 'LosFirmYear1GroupsNational') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Private' && each_firm.company_name != 'Total') {
                                grnd_tot_damages_losses = grnd_tot_damages_losses + parseInt(each_firm.year1_los);
                            }
                        })
                    }
                    else if(key == 'LosFirmYear2GroupsNational') {
                        angular.forEach(value_in, function(each_firm, firm_index) {
                            if(each_firm.ownership == 'Private' && each_firm.company_name != 'Total') {
                                grnd_tot_damages_losses = grnd_tot_damages_losses + parseInt(each_firm.year2_los);
                            }
                        })
                    }
                    else if(key == 'DlDmgFirmGroupNational') {
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
