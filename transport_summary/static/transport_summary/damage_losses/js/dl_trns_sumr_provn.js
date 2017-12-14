var app = angular.module('dlSummeryTSProApp', ['underscore']);

app.controller("DlSummeryTSProController", function ($scope, $http, $parse, _) {
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
    $scope.totalyear2vt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    // declaring total variables
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
    $scope.provinces;

    // get relevant damage_losses data for calculations
    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }
        if($scope.incident && $scope.province) {
            $scope.fetchDlData();
        }
    }

    function fetchProvinces() {
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

    $scope.fetchDlData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        $http({
            method: "POST",
            url: '/dl_fetch_summary_disagtn',
            data: angular.toJson({
                'table_name':  ['Table_8', 'Table_4', 'Table_4', 'Table_3'],
                'sector': ['transport_land', 'transport_air', 'transport_water', 'transport_rail'],
                'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                },
            }),
        }).success(function(data) {
            $scope.dlTransSumPro = data;
            console.log($scope.dlTransSumPro);
        })
    }

    $scope.grndTotDmgPub = function() {
        var tot_damages_lnd = 0;
        var tot_damages_air = 0;
        var tot_damages_wat = 0;
        var tot_damages_ral = 0;
        if(!angular.isUndefined($scope.dlTransSumPro)) {
            angular.forEach($scope.dlTransSumPro, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_8, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlGacPubProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + row.damages;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirDmgPubProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.tot_destroyed_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterDmgPubProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_wat = tot_damages_wat + row.tot_dmg_public;
                                })
                            }
                        })
                    })
                }
//                2958559450 + 86691775278 + 265822400 + 427387640
                else if(key == 'transport_rail') {
                    angular.forEach(secter.Table_3, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'TotDmgProvince') {
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
        var tot_damages_ral = 0;
        if(!angular.isUndefined($scope.dlTransSumPro)) {
            angular.forEach($scope.dlTransSumPro, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_8, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlGacPvtProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + parseFloat(row.tot_damages_pvt);
                                     console.log(row.tot_damages_pvt);
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirDmgPvtProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.tot_destroyed_pvt;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterDmgPvtProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_wat = tot_damages_wat + row.tot_dmg_private;
                                })
                            }
                        })
                    })
                }
            })
        }
        console.log(tot_damages_lnd, tot_damages_air, tot_damages_wat);
        return tot_damages_lnd + tot_damages_air + tot_damages_wat;
    }

    $scope.grndTotLosY1Pub = function() {
        var tot_damages_lnd = 0;
        var tot_damages_air = 0;
        var tot_damages_wat = 0;
        var tot_damages_ral = 0;
        if(!angular.isUndefined($scope.dlTransSumPro)) {
            angular.forEach($scope.dlTransSumPro, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_8, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlYearsPubProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + row.year_1;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirLosProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.year_1_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterLosProvince') {
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
        if(!angular.isUndefined($scope.dlTransSumPro)) {
            angular.forEach($scope.dlTransSumPro, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_8, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlOtherLosPvtDistrict') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + parseFloat(row.year_1_pvt);
                                     console.log(row.tot_damages_pvt);
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirLosProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.year_1_pvt;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterLosProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_wat = tot_damages_wat + row.year_1_pvt;
                                })
                            }
                        })
                    })
                }
            })
        }
        console.log(tot_damages_lnd, tot_damages_air, tot_damages_wat);
        return tot_damages_lnd + tot_damages_air + tot_damages_wat;
    }

    $scope.grndTotLosY2Pub = function() {
        var tot_damages_lnd = 0;
        var tot_damages_air = 0;
        var tot_damages_wat = 0;
        var tot_damages_ral = 0;
        if(!angular.isUndefined($scope.dlTransSumPro)) {
            angular.forEach($scope.dlTransSumPro, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_8, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlYearsPubProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + row.year_2;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirLosProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.year_2_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterLosProvince') {
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
        if(!angular.isUndefined($scope.dlTransSumPro)) {
            angular.forEach($scope.dlTransSumPro, function(secter, key) {
                if(key == 'transport_land') {
                    angular.forEach(secter.Table_8, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlOtherLosPvtDistrict') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_lnd = tot_damages_lnd + parseFloat(row.year_2_pub);
                                     console.log(row.year_2_pub);
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_air') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlAirLosProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_air = tot_damages_air + row.year_2_pvt;
                                })
                            }
                        })
                    })
                }
                else if(key == 'transport_water') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlWaterLosProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_wat = tot_damages_wat + row.year_2_pvt;
                                })
                            }
                        })
                    })
                }
            })
        }
        console.log(tot_damages_lnd, tot_damages_air, tot_damages_wat);
        return tot_damages_lnd + tot_damages_air + tot_damages_wat;
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlTransSumPro ?
         ((angular.equals({}, $scope.dlTransSumPro.transport_land.Table_8) ) ||
         (angular.equals({}, $scope.dlTransSumPro.transport_air.Table_4)) ||
         (angular.equals({}, $scope.dlTransSumPro.transport_water.Table_4)) ||
         (angular.equals({}, $scope.dlTransSumPro.transport_rail.Table_3))) : true ;
        return isNull;
    }

    $scope.convertToInt = function(val1, val2, val3) {
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
        return sum;
    }

    $scope.convertTotal = function(val1, val2, val3, val4){
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
        return sum;
    }

    $scope.getTotal = function(key) {
        $scope.finaltotalprivate = 0;

        var totaldpub =  ($scope.dlTransSumPro.transport_land.Table_8[key].DlGacPubProvince[0] ? ($scope.dlTransSumPro.transport_land.Table_8[key].DlGacPubProvince[0].damages ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlGacPubProvince[0].damages : 0):0) +
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirDmgPubProvince[0] ? ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirDmgPubProvince[0].tot_destroyed_pub ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirDmgPubProvince[0].tot_destroyed_pub : 0) : 0)+
                         ($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterDmgPubProvince[0] ? ($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterDmgPubProvince[0].tot_dmg_public ?
                         $scope.dlTransSumPro.transport_water.Table_4[key].DlWaterDmgPubProvince[0].tot_dmg_public : 0) : 0) +
                         ($scope.dlTransSumPro.transport_rail.Table_3[key].TotDmgProvince[0] ? ($scope.dlTransSumPro.transport_rail.Table_3[key].TotDmgProvince[0].tot_damages ?
                         $scope.dlTransSumPro.transport_rail.Table_3[key].TotDmgProvince[0].tot_damages : 0) : 0);

        var totaldpubstring = "totaldpub_"+ key;

        var model = $parse(totaldpubstring);
        model.assign($scope, totaldpub);

        $scope.grndtotaldpub = $scope.grndtotaldpub + totaldpub ;

        var totaldpvt =$scope.convertToInt(
                         ($scope.dlTransSumPro.transport_land.Table_8[key].DlGacPvtProvince[0]?($scope.dlTransSumPro.transport_land.Table_8[key].DlGacPvtProvince[0].tot_damages_pvt ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlGacPvtProvince[0].tot_damages_pvt : 0 ) : 0),
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirDmgPvtProvince[0] ? ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirDmgPvtProvince[0].tot_destroyed_pvt ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirDmgPvtProvince[0].tot_destroyed_pvt : 0) : 0),
                          ($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterDmgPvtProvince[0]?($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterDmgPvtProvince[0].tot_dmg_private ?
                         $scope.dlTransSumPro.transport_water.Table_4[key].DlWaterDmgPvtProvince[0].tot_dmg_private : 0
                         ):0));

        var totaldpvtstring = "totaldpvt_"+ key;

        var model = $parse(totaldpvtstring);
        model.assign($scope, totaldpvt);
        $scope.grndtotaldpvt = $scope.grndtotaldpvt + totaldpvt ;
        $scope.summaryDamages = $scope.grndtotaldpub + $scope.grndtotaldpvt;

        var totalyear1pub = ($scope.dlTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0]?($scope.dlTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0].year_1 ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0].year_1 : 0):0)  +
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0]?($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_1_pub ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_1_pub : 0) : 0) +
                         ($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0] ?($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pub ?
                         $scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pub : 0 ) : 0);

        var totalyear1pubstring = "totalyear1pub_"+ key;

        var model = $parse(totalyear1pubstring);
        model.assign($scope, totalyear1pub);
        $scope.grndtotalyear1pub = $scope.grndtotalyear1pub + totalyear1pub ;

        var totalyear1pvt = ($scope.dlTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0] ? ($scope.dlTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0].year_1_pvt ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0].year_1_pvt : 0) :0) +
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0] ? ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_1_pvt ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_1_pvt : 0): 0 )+
                         ($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0] ? ($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pvt ?
                         $scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_1_pvt : 0 ) : 0);

        var totalyear1pvtstring = "totalyear1pvt_"+ key;

        var model = $parse(totalyear1pvtstring);
        model.assign($scope, totalyear1pvt);
        $scope.grndtotalyear1pvt = $scope.grndtotalyear1pvt + totalyear1pvt ;
        $scope.summaryLossYear1 = $scope.grndtotalyear1pub + $scope.grndtotalyear1pvt;

        var totalyear2pub = ($scope.dlTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0]?($scope.dlTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0].year_2 ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlYearsPubProvince[0].year_2 : 0 ) :0)+
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0]?($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_2_pub ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_2_pub : 0) :0)+
                         ($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0]?($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pub ?
                         $scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pub : 0):0);

        var totalyear2pubstring = "totalyear2pub_"+ key;

        var model = $parse(totalyear2pubstring);
        model.assign($scope, totalyear2pub);
        $scope.grndtotalyear2pub = $scope.grndtotalyear2pub + totalyear2pub ;

        var totalyear2pvt = ($scope.dlTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0] ?($scope.dlTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0].year_2_pub ?
                         $scope.dlTransSumPro.transport_land.Table_8[key].DlOtherLosPvtDistrict[0].year_2_pub : 0 ) : 0)+
                         ($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0] ?($scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_2_pvt ?
                         $scope.dlTransSumPro.transport_air.Table_4[key].DlAirLosProvince[0].year_2_pvt : 0) : 0 ) +
                         ($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0] ? ($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pvt ?
                         $scope.dlTransSumPro.transport_water.Table_4[key].DlWaterLosProvince[0].year_2_pvt : 0) : 0) ;

        var totalyear2pvtstring = "totalyear2pvt_"+ key;

        var model = $parse(totalyear2pvtstring);
        model.assign($scope, totalyear2pvt);
        $scope.grndtotalyear2pvt = $scope.grndtotalyear2pvt + totalyear2pvt ;
        $scope.summaryLossYear2 = $scope.grndtotalyear2pub + $scope.grndtotalyear2pvt;

        var finaltotalpublic = totaldpub + totalyear1pub + totalyear2pub;

        var finaltotalpublicstring = "finaltotalpublic_"+ key;

        var model = $parse(finaltotalpublicstring);
        model.assign($scope, finaltotalpublic);
        $scope.grndfinaltotalpublic = $scope.grndfinaltotalpublic + finaltotalpublic ;

        var finaltotalprivate = totaldpvt + totalyear1pvt + totalyear2pvt;

        var finaltotalprivatestring = "finaltotalprivate_"+ key;

        var model = $parse(finaltotalprivatestring);
        model.assign($scope, finaltotalprivate);
        $scope.grndfinaltotalprivate = $scope.grndfinaltotalprivate + finaltotalprivate ;
        $scope.summaryTotal = $scope.grndfinaltotalpublic + $scope.grndfinaltotalprivate;
    }
})
