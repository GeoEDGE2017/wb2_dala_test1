var app = angular.module('dlSummeryTSNatApp', ['underscore']);

app.controller("DlSummeryTSNatController", function ($scope,$http,$parse, _) {
    $scope.National;
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
    $scope.totalyear2vt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    $scope.total_num_affected = 0;
    $scope.grndtotaldpub = 0;
    $scope.grndtotaldpvt = 0;
    $scope.grndtotalyear1pub = 0;
    $scope.grndtotalyear1pvt = 0;
    $scope.grndtotalyear2pub = 0;
    $scope.grndtotalyear2pvt = 0;
    $scope.grndfinaltotalpublic = 0;
    $scope.grndfinaltotalprivate = 0;
    $scope.summaryDamages = 0;
    $scope.summaryLossYear1 = 0;
    $scope.summaryLossYear2 = 0;
    $scope.summaryTotal = 0;
    $scope.user_id;

    $scope.changedValue = function(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }
        if($scope.incident && $scope.province) {
            $scope.fetchDlData();
        }
    }

    $scope.fetchDlData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        $http({
            method: "POST",
            url: '/dl_fetch_summary_disagtn',
            data: angular.toJson({
                'table_name':  ['Table_9', 'Table_5', 'Table_5', 'Table_4'],
                'sector': ['transport_land', 'transport_air', 'transport_water', 'transport_rail'],
                'com_data': {
                    'incident': $scope.incident,
                },
            }),
        }).success(function(data) {
            $scope.dlTransSumNat = data;
            console.log($scope.dlTransSumNat);

            $http({
                method: "POST",
                url: '/fetch_trans_rail_losses',
                data: angular.toJson({
                    'models': 'DlTypeLos',
                    'sector': 'transport_rail',
                    'incident': $scope.incident,
                }),
            }).success(function(rail_data) {
                $scope.dlTransRailNat = rail_data;
                console.log($scope.dlTransRailNat);
            })
        })
    }

    $scope.grndTotDmgPub = function() {
        var tot_damages_lnd = 0;
        var tot_damages_air = 0;
        var tot_damages_wat = 0;
        var tot_damages_ral = 0;
        if(!angular.isUndefined($scope.dlTransSumNat)) {
            angular.forEach($scope.dlTransSumNat, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_9, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlGacPubNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + row.damages;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirDmgPubNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.tot_destroyed_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterDmgPubNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_wat = tot_damages_wat + row.tot_dmg_public;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_rail') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'TotDmgNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_ral = tot_damages_ral + row.tot_damages;
                                })
                            }
                        })
                    })
                }
            })
        }
//        console.log(tot_damages_lnd, tot_damages_air, tot_damages_wat, tot_damages_ral);
        return tot_damages_lnd + tot_damages_air + tot_damages_wat + tot_damages_ral;
    }

    $scope.grndTotDmgPvt = function() {
        var tot_damages_lnd = 0;
        var tot_damages_air = 0;
        var tot_damages_wat = 0;
        if(!angular.isUndefined($scope.dlTransSumNat)) {
            angular.forEach($scope.dlTransSumNat, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_9, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlGacPvtNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + parseFloat(row.tot_damages_pvt);
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirDmgPvtNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.tot_destroyed_pvt;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterDmgPvtNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_wat = tot_damages_wat + row.tot_dmg_private;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages_lnd + tot_damages_air + tot_damages_wat;
    }

    $scope.grndTotLosY1Pub = function() {
        var tot_damages_lnd = 0;
        var tot_damages_air = 0;
        var tot_damages_wat = 0;
        var tot_damages_ral = 0;
        if(!angular.isUndefined($scope.dlTransSumNat)) {
            angular.forEach($scope.dlTransSumNat, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_9, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlYearsPubNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + row.year_1;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.year_1_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_wat = tot_damages_wat + row.year_1_pub;
                                })
                            }
                        })
                    })
                }
            })
        }
//        console.log(tot_damages_lnd, tot_damages_air, tot_damages_wat, tot_damages_ral);
        return tot_damages_lnd + tot_damages_air + tot_damages_wat + tot_damages_ral;
    }

    $scope.grndTotLosY1Pvt = function() {
        var tot_damages_lnd = 0;
        var tot_damages_air = 0;
        var tot_damages_wat = 0;
        var tot_damages_ral = 0;
        if(!angular.isUndefined($scope.dlTransSumNat)) {
            angular.forEach($scope.dlTransSumNat, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_9, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlOtherLosPvtNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + parseFloat(row.year_1_pvt);
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.year_1_pvt;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_wat = tot_damages_wat + row.year_1_pvt;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages_lnd + tot_damages_air + tot_damages_wat;
    }

    $scope.grndTotLosY2Pub = function() {
        var tot_damages_lnd = 0;
        var tot_damages_air = 0;
        var tot_damages_wat = 0;
        var tot_damages_ral = 0;
        if(!angular.isUndefined($scope.dlTransSumNat)) {
            angular.forEach($scope.dlTransSumNat, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_9, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlYearsPubNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + row.year_2;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.year_2_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_wat = tot_damages_wat + row.year_2_pub;
                                })
                            }
                        })
                    })
                }
            })
        }
//        console.log(tot_damages_lnd, tot_damages_air, tot_damages_wat, tot_damages_ral);
        return tot_damages_lnd + tot_damages_air + tot_damages_wat + tot_damages_ral;
    }

    $scope.grndTotLosY2Pvt = function() {
        var tot_damages_lnd = 0;
        var tot_damages_air = 0;
        var tot_damages_wat = 0;
        var tot_damages_ral = 0;
        if(!angular.isUndefined($scope.dlTransSumNat)) {
            angular.forEach($scope.dlTransSumNat, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_9, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlOtherLosPvtNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + parseFloat(row.year_2_pub);
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.year_2_pvt;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_wat = tot_damages_wat + row.year_2_pvt;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages_lnd + tot_damages_air + tot_damages_wat;
    }

    $scope.grndTotRailLosY1 = function() {
        var tot_los_y1 = 0;
        if(!angular.isUndefined($scope.dlTransRailNat)) {
            angular.forEach($scope.dlTransRailNat, function(row) {
                if(row.loss_type == 'TOTAL LOSSES') {
                    tot_los_y1 = tot_los_y1 + row.year_1;
                }
            })
        }
        return tot_los_y1;
    }

    $scope.grndTotRailLosY2 = function() {
        var tot_los_y2 = 0;
        if(!angular.isUndefined($scope.dlTransRailNat)) {
            angular.forEach($scope.dlTransRailNat, function(row) {
                if(row.loss_type == 'TOTAL LOSSES') {
                    tot_los_y2 = tot_los_y2 + row.year_2;
                }
            })
        }
        return tot_los_y2;
    }

    $scope.convertToInt = function(val1,val2,val3) {
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

    $scope.convertTotal = function(val1,val2,val3,val4) {
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
        return sum;
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlTransSumNat ?
            ((angular.equals({}, $scope.dlTransSumNat.transport_land.Table_9) ) ||
            (angular.equals({}, $scope.dlTransSumNat.transport_air.Table_5)) ||
            (angular.equals({}, $scope.dlTransSumNat.transport_water.Table_5)) ||
            (angular.equals({}, $scope.dlTransSumNat.transport_rail.Table_4))) : true ;
        return isNull;
    }

//    $scope.getTotal = function(key) {
//        $scope.finaltotalprivate = 0;
//
//        var totaldpub = ($scope.dlTransSumNat.transport_land.Table_9[key].DlGacPubNational[0] ? ($scope.dlTransSumNat.transport_land.Table_9[key].DlGacPubNational[0].damages ?
//                         $scope.dlTransSumNat.transport_land.Table_9[key].DlGacPubNational[0].damages : 0):0) +
//                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPubNational[0] ? ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPubNational[0].tot_destroyed_pub ?
//                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPubNational[0].tot_destroyed_pub : 0) : 0)+
//                         ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPubNational[0] ? ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPubNational[0].tot_dmg_public ?
//                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPubNational[0].tot_dmg_public : 0) : 0) +
//                         ($scope.dlTransSumNat.transport_rail.Table_4[key].TotDmgNational[0] ? ($scope.dlTransSumNat.transport_rail.Table_4[key].TotDmgNational[0].tot_damages ?
//                         $scope.dlTransSumNat.transport_rail.Table_4[key].TotDmgNational[0].tot_damages : 0) : 0);
//
//        var totaldpubstring = "totaldpub_"+ key;
//
//        var model = $parse(totaldpubstring);
//        model.assign($scope, totaldpub);
//        $scope.grndtotaldpub = $scope.grndtotaldpub + totaldpub ;
//
////        console.log(totaldpub);
//
//        var totaldpvt =$scope.convertToInt(
//                         ($scope.dlTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0]?($scope.dlTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0].tot_damages_pvt ?
//                         $scope.dlTransSumNat.transport_land.Table_9[key].DlGacPvtNational[0].tot_damages_pvt : 0 ) : 0),
//                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPvtNational[0] ? ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPvtNational[0].tot_destroyed_pvt ?
//                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirDmgPvtNational[0].tot_destroyed_pvt : 0) : 0),
//                          ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPvtNational[0]?($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPvtNational[0].tot_dmg_private ?
//                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterDmgPvtNational[0].tot_dmg_private : 0
//                         ):0));
//
//        var totaldpvtstring = "totaldpvt_"+ key;
//
//        var model = $parse(totaldpvtstring);
//        model.assign($scope, totaldpvt);
//        $scope.grndtotaldpvt = $scope.grndtotaldpvt + totaldpvt ;
//        $scope.summaryDamages = $scope.grndtotaldpub + $scope.grndtotaldpvt;
//
//        var totalyear1pub = ($scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0]?($scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_1 ?
//                         $scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_1 : 0):0)  +
//                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0]?($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pub ?
//                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pub : 0) : 0) +
//                         ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0] ?($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_1_pub ?
//                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_1_pub : 0 ) : 0);
//
//        var totalyear1pubstring = "totalyear1pub_"+ key;
//
//        var model = $parse(totalyear1pubstring);
//        model.assign($scope, totalyear1pub);
//        $scope.grndtotalyear1pub = $scope.grndtotalyear1pub + totalyear1pub ;
//
//
//        var totalyear1pvt = ($scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0] ? ($scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_1_pvt ?
//                         $scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_1_pvt : 0) :0) +
//                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0] ? ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pvt ?
//                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_1_pvt : 0): 0 )+
//                         ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0] ? ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_1_pvt ?
//                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_1_pvt : 0 ) : 0);
//
//        var totalyear1pvtstring = "totalyear1pvt_"+ key;
//
//        var model = $parse(totalyear1pvtstring);
//        model.assign($scope, totalyear1pvt);
//        $scope.grndtotalyear1pvt = $scope.grndtotalyear1pvt + totalyear1pvt ;
//        $scope.summaryLossYear1 = $scope.grndtotalyear1pub + $scope.grndtotalyear1pvt;
//
//
//        var totalyear2pub = ($scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0]?($scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_2 ?
//                         $scope.dlTransSumNat.transport_land.Table_9[key].DlYearsPubNational[0].year_2 : 0 ) :0)+
//                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0]?($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pub ?
//                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pub : 0) :0)+
//                         ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0]?($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_2_pub ?
//                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_2_pub : 0):0);
//
//        var totalyear2pubstring = "totalyear2pub_"+ key;
//
//        var model = $parse(totalyear2pubstring);
//        model.assign($scope, totalyear2pub);
//        $scope.grndtotalyear2pub = $scope.grndtotalyear2pub + totalyear2pub ;
//
//        var totalyear2pvt = ($scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0] ?($scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_2_pub ?
//                         $scope.dlTransSumNat.transport_land.Table_9[key].DlOtherLosPvtNational[0].year_2_pub : 0 ) : 0)+
//                         ($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0] ?($scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pvt ?
//                         $scope.dlTransSumNat.transport_air.Table_5[key].DlAirLosNational[0].year_2_pvt : 0) : 0 ) +
//                         ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0] ? ($scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_2_pvt ?
//                         $scope.dlTransSumNat.transport_water.Table_5[key].DlWaterLosNational[0].year_2_pvt : 0) : 0) ;
//
//        var totalyear2pvtstring = "totalyear2pvt_"+ key;
//
//        var model = $parse(totalyear2pvtstring);
//        model.assign($scope, totalyear2pvt);
//        $scope.grndtotalyear2pvt = $scope.grndtotalyear2pvt + totalyear2pvt ;
//        $scope.summaryLossYear2 = $scope.grndtotalyear2pub + $scope.grndtotalyear2pvt;
//
//        var finaltotalpublic = totaldpub + totalyear1pub + totalyear2pub;
//
//        var finaltotalpublicstring = "finaltotalpublic_"+ key;
//
//        var model = $parse(finaltotalpublicstring);
//        model.assign($scope, finaltotalpublic);
//        $scope.grndfinaltotalpublic = $scope.grndfinaltotalpublic + finaltotalpublic ;
//
//        var finaltotalprivate = totaldpvt + totalyear1pvt + totalyear2pvt;
//
//        var finaltotalprivatestring = "finaltotalprivate_"+ key;
//
//        var model = $parse(finaltotalprivatestring);
//        model.assign($scope, finaltotalprivate);
//        $scope.grndfinaltotalprivate = $scope.grndfinaltotalprivate + finaltotalprivate ;
//        $scope.summaryTotal = $scope.grndfinaltotalpublic + $scope.grndfinaltotalprivate;
//    }
})
