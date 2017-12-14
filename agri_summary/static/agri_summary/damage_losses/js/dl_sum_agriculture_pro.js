var app = angular.module('dlSummeryAgriProApp', ['underscore']);

app.controller("DlSummeryAgriProController", function ($scope, $http, $parse, _) {
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
                'table_name':  ['Table_9','Table_5','Table_5','Table_4'],
                'sector': ['agri_agrarian', 'agri_livestock','agri_fisheries','agri_irrigation'],
                'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                },
            }),
         }).success(function(data) {
            $scope.dlAgriSumPro = data;
            console.log($scope.dlAgriSumPro);
        })
    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlAgriSumPro ?
        ((angular.equals({}, $scope.dlAgriSumPro.agri_agrarian.Table_9) ) ||
        (angular.equals({}, $scope.dlAgriSumPro.agri_livestock.Table_5))) : true
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
        var tot_damages_agri = 0;
        var tot_damages_live = 0;
        var tot_damages_fish = 0;
        var tot_damages_irri = 0;
        if(!angular.isUndefined($scope.dlAgriSumPro)) {
            angular.forEach($scope.dlAgriSumPro, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_9, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorDmgPubProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_agri = tot_damages_agri + row.damages;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpNdaPubProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_live = tot_damages_live + row.damages;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfDmgPubProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_fish = tot_damages_fish + row.dmg_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_irrigation') {
                    angular.forEach(secter.Table_4, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlIrrigatnDmgDistrict') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_irri = tot_damages_irri + row.damages;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages_agri + tot_damages_live + tot_damages_fish + tot_damages_irri;
    }

    $scope.grndTotDmgPvt = function() {
        var tot_damages = 0;
        if(!angular.isUndefined($scope.dlAgriSumPro)) {
            angular.forEach($scope.dlAgriSumPro, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_9, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorDmgPvtProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.damages;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpNdaPvtProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.damages;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfDmgPvtProvince') {
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
        if(!angular.isUndefined($scope.dlAgriSumPro)) {
            angular.forEach($scope.dlAgriSumPro, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_9, function(district, dkey) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorLosYear1Province') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_agri = tot_damages_agri + row.dmg_los_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_5, function(district, dkey) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpLosPubProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_live = tot_damages_live + row.los_year_1;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_5, function(district, dkey) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfLosProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_fish = tot_damages_fish + row.los_year_1_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_irrigation') {
                    angular.forEach(secter.Table_4, function(district, dkey) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlIrrigatnLosDistrictNew') {
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
        if(!angular.isUndefined($scope.dlAgriSumPro)) {
            angular.forEach($scope.dlAgriSumPro, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_9, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorLosYear1Province') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.dmg_los_pvt;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpLosPvtProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages = tot_damages + row.los_year_1;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfLosProvince') {
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
        var tot_damages_agri = 0;
        var tot_damages_live = 0;
        var tot_damages_fish = 0;
        var tot_damages_irri = 0;
        if(!angular.isUndefined($scope.dlAgriSumPro)) {
            angular.forEach($scope.dlAgriSumPro, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_9, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorLosYear2Province') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_agri = tot_damages_agri + row.dmg_los_pub;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpLosPubProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_live = tot_damages_live + row.los_year_2;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfLosProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_fish = tot_damages_fish + row.los_year_2_pub;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages_agri + tot_damages_live + tot_damages_fish;
    }

    $scope.grndTotLosY2Pvt = function() {
        var tot_damages_agri = 0;
        var tot_damages_live = 0;
        var tot_damages_fish = 0;
        if(!angular.isUndefined($scope.dlAgriSumPro)) {
            angular.forEach($scope.dlAgriSumPro, function(secter, key) {
                if(key == 'agri_agrarian') {
                    angular.forEach(secter.Table_9, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DsorLosYear2Province') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_agri = tot_damages_agri + row.dmg_los_pvt;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_livestock') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlpLosPvtProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_live = tot_damages_live + row.los_year_2;
                                })
                            }
                        })
                    })
                }
                else if(key == 'agri_fisheries') {
                    angular.forEach(secter.Table_5, function(district) {
                        angular.forEach(district, function(db_table, db_table_key) {
                            if(db_table_key == 'DlfLosProvince') {
                                angular.forEach(db_table, function(row) {
                                    tot_damages_fish = tot_damages_fish + row.los_year_2_pvt;
                                })
                            }
                        })
                    })
                }
            })
        }
        return tot_damages_agri + tot_damages_live + tot_damages_fish;
    }

//    $scope.getTotal = function(key) {
//        $scope.finaltotalprivate = 0;
//
//        var totaldpub = $scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorDmgPubProvince[0].damages+
//                        $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpNdaPubProvince[0].damages+
//                        $scope.dlAgriSumPro.agri_fisheries.Table_5[key].DlfDmgPubProvince[0].dmg_pub+
//                        $scope.dlAgriSumPro.agri_irrigation.Table_4[key].DlIrrigatnDmgDistrict[0].damages;
//
//        var totaldpubstring = "totaldpub_"+ key;
//
//        var model = $parse(totaldpubstring);
//        model.assign($scope, totaldpub);
//
//        $scope.grndtotaldpub =  $scope.grndtotaldpub  + totaldpub ;
//
////        console.log('test',$scope.dlAgriSumPro.agri_agrarian);
//
//        var totaldpvt =  $scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorDmgPvtProvince[0].damages+
//                        $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpNdaPvtProvince[0].damages+
//                        $scope.dlAgriSumPro.agri_fisheries.Table_5[key].DlfDmgPvtProvince[0].dmg_pvt ;
//
//
//        var totaldpvtstring = "totaldpvt_"+ key;
//
//        var model = $parse(totaldpvtstring);
//        model.assign($scope, totaldpvt);
//        $scope.grndtotaldpvt = $scope.grndtotaldpvt + totaldpvt ;
//        $scope.summaryDamages = $scope.grndtotaldpub + $scope.grndtotaldpvt;
//
//        var totalyear1pub =$scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear1Province[0].dmg_los_pub+
//                        $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPubProvince[0].los_year_1+
//                        $scope.dlAgriSumPro.agri_fisheries.Table_5[key].DlfLosProvince[0].los_year_1_pub+
//                        $scope.dlAgriSumPro.agri_irrigation.Table_4[key].DlIrrigatnLosDistrictNew[0].total_los;
//
//        var totalyear1pubstring = "totalyear1pub_"+ key;
//
//        var model = $parse(totalyear1pubstring);
//        model.assign($scope, totalyear1pub);
//        $scope.grndtotalyear1pub = $scope.grndtotalyear1pub + totalyear1pub ;
//
//        var totalyear1pvt =$scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear1Province[0].dmg_los_pvt+
//                        $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPvtProvince[0].los_year_1+
//                        $scope.dlAgriSumPro.agri_fisheries.Table_5[key].DlfLosProvince[0].los_year_1_pvt;
//
//        var totalyear1pvtstring = "totalyear1pvt_"+ key;
//
//        var model = $parse(totalyear1pvtstring);
//        model.assign($scope, totalyear1pvt);
//        $scope.grndtotalyear1pvt = $scope.grndtotalyear1pvt + totalyear1pvt ;
//        $scope.summaryLossYear1 = $scope.grndtotalyear1pub + $scope.grndtotalyear1pvt;
//
//        var totalyear2pub =$scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear2Province[0].dmg_los_pub+
//                        $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPubProvince[0].los_year_2+
//                        $scope.dlAgriSumPro.agri_fisheries.Table_5[key].DlfLosProvince[0].los_year_2_pub;
//
//        var totalyear2pubstring = "totalyear2pub_"+ key;
//
//        var model = $parse(totalyear2pubstring);
//        model.assign($scope, totalyear2pub);
//        $scope.grndtotalyear2pub = $scope.grndtotalyear2pub + totalyear2pub ;
//
//        var totalyear2pvt =$scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear2Province[0].dmg_los_pvt+
//                        $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPvtProvince[0].los_year_2+
//                        $scope.dlAgriSumPro.agri_fisheries.Table_5[key].DlfLosProvince[0].los_year_2_pvt;
//
//        var totalyear2pvtstring = "totalyear2pvt_"+ key;
//
//        var model = $parse(totalyear2pvtstring);
//         model.assign($scope, totalyear2pvt);
//         $scope.grndtotalyear2pvt = $scope.grndtotalyear2pvt + totalyear2pvt ;
//         $scope.summaryLossYear2 = $scope.grndtotalyear2pub + $scope.grndtotalyear2pvt;
//
//        var finaltotalpublic = totaldpub + totalyear1pub + totalyear2pub;
//
//        var finaltotalpublicstring = "finaltotalpublic_"+ key;
//
//        var model = $parse(finaltotalpublicstring);
//         model.assign($scope, finaltotalpublic);
//         $scope.grndfinaltotalpublic = $scope.grndfinaltotalpublic + finaltotalpublic ;
//
//
//        var finaltotalprivate = totaldpvt + totalyear1pvt + totalyear2pvt;
//
//        var finaltotalprivatestring = "finaltotalprivate_"+ key;
//
//        var model = $parse(finaltotalprivatestring);
//         model.assign($scope, finaltotalprivate);
//         $scope.grndfinaltotalprivate = $scope.grndfinaltotalprivate + finaltotalprivate ;
//         $scope.summaryTotal = $scope.grndfinaltotalpublic + $scope.grndfinaltotalprivate;
//    }
 })
