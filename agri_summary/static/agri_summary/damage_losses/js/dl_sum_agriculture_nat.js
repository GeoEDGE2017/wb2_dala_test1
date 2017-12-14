//Table 3
var app = angular.module('dlSummeryAgriNatApp', ['underscore']);

app.controller("DlSummeryAgriNatController", function ($scope, $http, $parse, _) {
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

    // get relevant damage_losses data for calculations

    $scope.fetchDlData = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;
        $http({
            method: "POST",
            url: '/dl_fetch_summary_disagtn',
            data: angular.toJson({
                'table_name':  ['Table_10', 'Table_6', 'Table_6', 'Table_6'],
                'sector': ['agri_agrarian', 'agri_livestock', 'agri_fisheries', 'agri_irrigation'],
                'com_data': {
                    'incident': $scope.incident,
                },
            }),
        }).success(function(data) {
            $scope.dlAgriSumNat = data;
            console.log($scope.dlAgriSumNat);
        })
    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlAgriSumNat ?
        ((angular.equals({}, $scope.dlAgriSumNat.agri_agrarian.Table_10) ) ||
        (angular.equals({}, $scope.dlAgriSumNat.agri_livestock.Table_6))) : true
        return isNull;
    }

    $scope.convertToInt = function(val1,val2){
        var sum = parseInt(val1) + parseInt(val2);
        return sum;
    }

    $scope.convertTotal = function(val1,val2,val3,val4){
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
        return sum;
    }

    $scope.grndTotDmgPub = function() {
        var tot_damages = 0;
        if(!angular.isUndefined($scope.dlAgriSumNat)) {
            angular.forEach($scope.dlAgriSumNat, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_10, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorDmgPubNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.sum;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_6, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpNdaPubNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.damages;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_6, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfLosPubNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.dmg_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_irrigation') {
                    angular.forEach(secter.Table_6, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlIrrigatnDmgNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.damages;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages;
    }

    $scope.grndTotDmgPvt = function() {
        var tot_damages = 0;
        if(!angular.isUndefined($scope.dlAgriSumNat)) {
            angular.forEach($scope.dlAgriSumNat, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_10, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorDmgPvtNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.sum;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_6, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpNdaPvtNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.damages;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_6, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfLosPvtNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.dmg_pvt;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages;
    }

    $scope.grndTotLosY1Pub = function() {
        var tot_damages_agri = 0;
        var tot_damages_live = 0;
        var tot_damages_fish = 0;
        var tot_damages_irri = 0;

        if(!angular.isUndefined($scope.dlAgriSumNat)) {
            angular.forEach($scope.dlAgriSumNat, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_10, function(province, pkey) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorLosYear1National') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_agri = tot_damages_agri + row.dmg_los_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_6, function(province, pkey) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpLosPubNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_live = tot_damages_live + row.los_year_1;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_6, function(province, pkey) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_fish = tot_damages_fish + row.los_year_1_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_irrigation') {
                    angular.forEach(secter.Table_6, function(province, pkey) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlLosPubNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_irri = tot_damages_irri + row.total_los;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages_agri + tot_damages_live + tot_damages_fish + tot_damages_irri;
    }

    $scope.grndTotLosY1Pvt = function() {
        var tot_damages = 0;
        if(!angular.isUndefined($scope.dlAgriSumNat)) {
            angular.forEach($scope.dlAgriSumNat, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_10, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorLosYear1National') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.dmg_los_pvt;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_6, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpLosPvtNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.los_year_1;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_6, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.los_year_1_pvt;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages;
    }

    $scope.grndTotLosY2Pub = function() {
        var tot_damages = 0;
        if(!angular.isUndefined($scope.dlAgriSumNat)) {
            angular.forEach($scope.dlAgriSumNat, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_10, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorLosYear2National') {

                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.dmg_los_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_6, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpLosPubNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.los_year_2;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_6, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.los_year_2_pub;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages;
    }

    $scope.grndTotLosY2Pvt = function() {
        var tot_damages = 0;
        if(!angular.isUndefined($scope.dlAgriSumNat)) {
            angular.forEach($scope.dlAgriSumNat, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_10, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorLosYear2National') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.dmg_los_pvt;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_6, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpLosPvtNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.los_year_2;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_6, function(province) {
                        angular.forEach(province, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfLosNational') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.los_year_2_pvt;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages;
    }
 })
