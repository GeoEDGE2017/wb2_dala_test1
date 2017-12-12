//Table 4
var app = angular.module('dlSummTouBusiFaciDisApp', ['underscore'])
app.controller('dlSummTouBusiFaciDisController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.isLoded = false;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.data;
    $scope.table;
    $scope.businessTypes;
    $scope.inf_type;
    $scope.user_id;

    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id,
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }

        if($scope.incident && $scope.district && $scope.district.district__id) {
            $scope.loadData();
        }
    }

    $scope.loadData = function() {
        if($scope.incident && $scope.district && $scope.district.district__id) {
            $scope.isLoded = true;
            $scope.tot_damages = null;
            $scope.is_edit = true;
            $http({
                method: "POST",
                url: '/dl_fetch_summary_dis_disagtn',
                data: angular.toJson({
                    'table_name': ['Table_4'],
                    'sector': ['tourism'],
                    'com_data': {
                        'district':  $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                console.log('data ', data);
                $scope.dlsumtourismdis = data;
//                console.log('data.tourism.Table_4 ', data.tourism.Table_4);
//                $scope.data = data.tourism.Table_4;
//
//                $scope.makeTable();
//                console.log('data ', $scope.data);
//                console.log('table ', $scope.table);
//                console.log('businessTypes ', $scope.businessTypes);
            })
        }
    }

    $scope.makeTable = function() {
        if($scope.data != null){
            $scope.table = {};
            $scope.table.business = {};
            $scope.table.infrastructures = {};
            //business damage
            angular.forEach($scope.data.DlDmgBusDistrict, function(value, key) {
                if(!$scope.table.business[value.business]){
                    $scope.table.business[value.business] = {'name':value.business}
                    $scope.table.business[value.business].year1Damage = {};
                    $scope.table.business[value.business].year1Loss = {};
                    $scope.table.business[value.business].year2Loss = {};
                }
                $scope.table.business[value.business].year1Damage[value.ownership] = value.tot_damages;
            })
            //business losses
            angular.forEach($scope.data.DlLosBusDistrict, function(value, key) {
                if(!$scope.table.business[value.business]){
                    $scope.table.business[value.business] = {'name':value.business}
                    $scope.table.business[value.business].year1Damage = {};
                    $scope.table.business[value.business].year1Loss = {};
                    $scope.table.business[value.business].year2Loss = {};
                }
                $scope.table.business[value.business].year1Loss[value.ownership] = value.los_year1;
                $scope.table.business[value.business].year2Loss[value.ownership] = value.los_year2;
            })

            //infrastructure damages
            angular.forEach($scope.data.DlDmgInfDistrict, function(value, key) {
                if(!$scope.table.infrastructures[value.inf_type]){
                    $scope.table.infrastructures[value.inf_type] = {'id':value.inf_type}
                    $scope.table.infrastructures[value.inf_type].year1Damage = {};
                    $scope.table.infrastructures[value.inf_type].year1Loss = {};
                    $scope.table.infrastructures[value.inf_type].year2Loss = {};
                }
                $scope.table.infrastructures[value.inf_type].year1Damage[value.ownership] = value.sum;
            })

            //infrastructure losses
            angular.forEach($scope.data.DlDmgInfDistrict, function(value, key) {
                if(!$scope.table.infrastructures[value.inf_type]){
                    $scope.table.infrastructures[value.inf_type] = {'id':value.inf_type}
                    $scope.table.infrastructures[value.inf_type].year1Damage = {};
                    $scope.table.infrastructures[value.inf_type].year1Loss = {};
                    $scope.table.infrastructures[value.inf_type].year2Loss = {};
                }
                $scope.table.infrastructures[value.inf_type].year1Loss[value.ownership] = value.tot_year1;
                $scope.table.infrastructures[value.inf_type].year2Loss[value.ownership] = value.tot_year2;
            })
        }
        else {
            console.log("data null")
        }
    }

    $scope.fetchBusinessTypes = function() {
        $http({
            method: "POST",
            url: "/fetch_business_types_for_summary",
            data: angular.toJson({
//                'district': $scope.district.district__id,
                'model': 'TouBusiness',
                'sector': 'tourism'
             }),
        }).success(function(data) {
            $scope.businessTypes = data;
        })
    }

    $scope.fetchInfTypes = function() {
        $http({
            method: "POST",
            url: "/fetch_entities_plain",
            data: angular.toJson({
                'model': 'InfType',
                'sector': 'tourism',
            }),
        }).success(function(data) {
            console.log(data);
            $scope.inf_types = data;
        })
    }

    $scope.fetchBusinessTypes();
    $scope.fetchInfTypes();

    $scope.getAggrigatedTotal = function(mainCol,sub_col,type) {
        if($scope.table && $scope.table[type]) {
            var final_val = 0;
            angular.forEach($scope.table[type], function(value, key) {
                if(value[mainCol]){
                    if(!isNaN(value[mainCol][sub_col])) {
                        final_val += value[mainCol][sub_col];
                    }
                }
            })
            return final_val;
        }
        else {
            return 0;
        }
    }

    $scope.getSum3 = function(val1, val2, val3) {
        var final_val = 0;
        if(!isNaN(val1)) final_val += val1;
        if(!isNaN(val2)) final_val += val2;
        if(!isNaN(val3)) final_val += val3;
        return final_val;
    }

    $scope.getPrivateColBusinessTotal = function() {
        var final_val = 0;
        angular.forEach($scope.businessTypes, function(value, key) {
            final_val += value.totalPri;
        })
        return final_val;
    }

    $scope.getPublicColBusinessTotal = function() {
        var final_val = 0;
        angular.forEach($scope.businessTypes, function(value, key) {
            final_val += value.totalPub;
        })
//        console.log($scope.table.business.year1DamagePri);
        return final_val;
    }

    $scope.getPrivateColInfrastructuresTotal = function() {
        var final_val = 0;
        angular.forEach($scope.inf_types, function(value, key) {
            final_val += value.totalPri;
        })
        return final_val;
    }

    $scope.getPublicColInfrastructuresTotal = function() {
        var final_val = 0;
        angular.forEach($scope.inf_types, function(value, key) {
            final_val += value.totalPub;
        })
        return final_val;
    }

    $scope.getGrandTotal = function(col) {
        return $scope.table.infrastructures[col] + $scope.table.business[col];
    }

    $scope.getConvertedVal = function(val) {
//        console.log("Type",val);
        if(!val)    return 0;
        if(isNaN(val)) return 0;
        return val;
    }

    $scope.checkIfNull = function() {
        var isNull = $scope.dlsumtourismdis ? angular.equals({},
        $scope.dlsumtourismdis.tourism.Table_4) : true;

        return isNull;
    }

    $scope.calFirmTotalDmgPub = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var tot_dmg_pub = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlDmgBusDistrictN') {
                    angular.forEach(value, function(value_in, index) {
                        tot_dmg_pub = tot_dmg_pub + value_in.sumpub;
                    })
                }
            })

            return tot_dmg_pub;
        }
    }

    $scope.calFirmTotalDmgPvt = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var tot_dmg_pvt = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlDmgBusDistrictN') {
                    angular.forEach(value, function(value_in, index) {
                        tot_dmg_pvt = tot_dmg_pvt + value_in.sumpvt;
                    })
                }
            })

            return tot_dmg_pvt;
        }
    }

    $scope.calFirmTotalLosYer1Pub = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var tot_los_pub = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlLosBusDistrictN') {
                    angular.forEach(value, function(value_in, index) {
                        tot_los_pub = tot_los_pub + value_in.tot_year1_pub;
                    })
                }
            })

            return tot_los_pub;
        }
    }

    $scope.calFirmTotalLosYer1Pvt = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var tot_los_pvt = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlLosBusDistrictN') {
                    angular.forEach(value, function(value_in, index) {
                        tot_los_pvt = tot_los_pvt + value_in.tot_year1_pvt;
                    })
                }
            })

            return tot_los_pvt;
        }
    }

    $scope.calFirmTotalLosYer2Pub = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var tot_los_pub = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlLosBusDistrictN') {
                    angular.forEach(value, function(value_in, index) {
                        tot_los_pub = tot_los_pub + value_in.tot_year2_pub;
                    })
                }
            })

            return tot_los_pub;
        }
    }

    $scope.calFirmTotalLosYer2Pvt = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var tot_los_pvt = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlLosBusDistrictN') {
                    angular.forEach(value, function(value_in, index) {
                        tot_los_pvt = tot_los_pvt + value_in.tot_year2_pvt;
                    })
                }
            })

            return tot_los_pvt;
        }
    }

    //------------

    $scope.calInfTotalDmgPub = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var tot_dmg_pub = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlDmgInfDistrictNN') {
                    angular.forEach(value, function(value_in, index) {
                        tot_dmg_pub = tot_dmg_pub + value_in.tot_dmg_pub;
                    })
                }
            })

            return tot_dmg_pub;
        }
    }

    $scope.calInfTotalDmgPvt = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var tot_dmg_pvt = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlDmgInfDistrictNN') {
                    angular.forEach(value, function(value_in, index) {
                        tot_dmg_pvt = tot_dmg_pvt + value_in.tot_dmg_pvt;
                    })
                }
            })

            return tot_dmg_pvt;
        }
    }

    $scope.calInfTotalLosYer1Pub = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var loss_year1_pub = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlLosInfDistrictNN') {
                    angular.forEach(value, function(value_in, index) {
                        loss_year1_pub = loss_year1_pub + value_in.loss_year1_pub;
                    })
                }
            })

            return loss_year1_pub;
        }
    }

    $scope.calInfTotalLosYer1Pvt = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var loss_year1_pvt = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlLosInfDistrictNN') {
                    angular.forEach(value, function(value_in, index) {
                        loss_year1_pvt = loss_year1_pvt + value_in.loss_year1_pvt;
                    })
                }
            })

            return loss_year1_pvt;
        }
    }

    $scope.calInfTotalLosYer2Pub = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var loss_year2_pub = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlLosInfDistrictNN') {
                    angular.forEach(value, function(value_in, index) {
                        loss_year2_pub = loss_year2_pub + value_in.loss_year2_pub;
                    })
                }
            })

            return loss_year2_pub;
        }
    }

    $scope.calInfTotalLosYer2Pvt = function() {
        if(!angular.isUndefined($scope.dlsumtourismdis)) {
            var loss_year2_pvt = 0;
            angular.forEach($scope.dlsumtourismdis.tourism.Table_4, function(value, key) {
                if(key == 'DlLosInfDistrictNN') {
                    angular.forEach(value, function(value_in, index) {
                        loss_year2_pvt = loss_year2_pvt + value_in.loss_year2_pvt;
                    })
                }
            })

            return loss_year2_pvt;
        }
    }
})
