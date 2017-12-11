//Table 5
var app = angular.module('dlSummFormlInformldisApp', [])

app.controller('dlSummFormlInformldisController', ['$scope', '$http', function($scope, $http) {
    $scope.districts;
    $scope.incident;
    $scope.district;
    $scope.data;
    $scope.table;
    $scope.table2;
    $scope.table3;
    $scope.informalTable;
    $scope.businessTypes;
    $scope.summaryTotal = {};
    $scope.summaryTotalInf = {};
    $scope.businessData = [];
    $scope.indSubSec;
    $scope.serSubSec;
    $scope.industryTotals = [];
    $scope.industryTotal = {};
    $scope.serviceTotals = [];
    $scope.serviceTotal = {};
    $scope.data2;
    $scope.data3;
    $scope.data4;
    $scope.user_id;

    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user':$scope.user_id,
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }
        if($scope.incident && $scope.district ) {
            $scope.loadData();
        }
    }

    $scope.loadData = function() {
        console.log('loadData, dl_fetch_total_data');
        if($scope.incident && $scope.district && $scope.district.district__id) {
            $scope.isLoded = true;
            $scope.tot_damages = null;
            $scope.is_edit = true;
            $http({
                method: "POST",
                url: '/dl_fetch_total_data',
                data: angular.toJson({
                    'table_name': 'Table_5',
                    'sector': 'industry_services',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.dlSummFormlInformlDis = data;
                console.log($scope.dlSummFormlInformlDis);
            })
        }
    }

    $scope.loadBusinessSubSectorsInd = function() {
        $http({
            method: "POST",
            url: "/fetch_entities_plain_column", //single column data load
            data: angular.toJson({
                'model': 'BsFrmBusIndustry', //BsFrmBusIndustry
                'sector':'industry_services', //industry_services
                'col': 'industry',
             }),
        }).success(function(data) {
            $scope.indSubSec = data;
            //console.log("ind", $scope.indSubSec);
        })
    }

    $scope.loadBusinessSubSectorsSer = function() {
        $http({
            method: "POST",
            url: "/fetch_entities_plain_column", //single column data load
            data: angular.toJson({
                'model': 'BsFrmBusServices', //BsFrmBusServices
                'sector':'industry_services', //industry_services
                'col': 'service',
            }),
        }).success(function(data) {
            //console.log(data);
            $scope.serSubSec = data;
        })
    }


//    industry
    $scope.totFormalIndNoAffBusPub = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_no_aff_bus_pub = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'DlNuAffBisIndDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_no_aff_bus_pub = tot_no_aff_bus_pub + value_in.count_no_pub;
                    })
                }
            })
            return tot_no_aff_bus_pub;
        }
    }

    $scope.totFormalIndNoAffBusPvt = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_no_aff_bus_pvt = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'DlNuAffBisIndDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_no_aff_bus_pvt = tot_no_aff_bus_pvt + value_in.count_no_pvt;
                    })
                }
            })
            return tot_no_aff_bus_pvt;
        }
    }

    $scope.totFormalIndDmgPub = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_dmg_pub = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'DmgFrmYear1IndDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_dmg_pub = tot_dmg_pub + value_in.tot_dmg_pub;
                    })
                }
            })
            return tot_dmg_pub;
        }
    }

    $scope.totFormalIndDmgPvt = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_dmg_pvt = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'DmgFrmYear1IndDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_dmg_pvt = tot_dmg_pvt + value_in.tot_dmg_pvt;
                    })
                }
            })
            return tot_dmg_pvt;
        }
    }

    $scope.totFormalIndLosYer1Pub = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_los_yer1_pub = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'LosFrmYear1IndDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_yer1_pub = tot_los_yer1_pub + value_in.los_year1_pub;
                    })
                }
            })
            return tot_los_yer1_pub;
        }
    }

    $scope.totFormalIndLosYer1Pvt = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_los_yer1_pvt = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'LosFrmYear1IndDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_yer1_pvt = tot_los_yer1_pvt + value_in.los_year1_pvt;
                    })
                }
            })
            return tot_los_yer1_pvt;
        }
    }

    $scope.totFormalIndLosYer2Pub = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_los_yer2_pub = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'LosFrmYear2IndDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_yer2_pub = tot_los_yer2_pub + value_in.los_year2_pub;
                    })
                }
            })
            return tot_los_yer2_pub;
        }
    }

    $scope.totFormalIndLosYer2Pvt = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_los_yer2_pvt = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'LosFrmYear2IndDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_yer2_pvt = tot_los_yer2_pvt + value_in.los_year2_pvt;
                    })
                }
            })
            return tot_los_yer2_pvt;
        }
    }

//    services
    $scope.totFormalSerNoAffBusPub = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_no_aff_bus_pub = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'DlNuAffBisSerDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_no_aff_bus_pub = tot_no_aff_bus_pub + value_in.count_no_pub;
                    })
                }
            })
            return tot_no_aff_bus_pub;
        }
    }

    $scope.totFormalSerNoAffBusPvt = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_no_aff_bus_pvt = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'DlNuAffBisSerDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_no_aff_bus_pvt = tot_no_aff_bus_pvt + value_in.count_no_pvt;
                    })
                }
            })
            return tot_no_aff_bus_pvt;
        }
    }

    $scope.totFormalSerDmgPub = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_dmg_pub = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'DmgFrmYear1SerDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_dmg_pub = tot_dmg_pub + value_in.tot_dmg_pub;
                    })
                }
            })
            return tot_dmg_pub;
        }
    }

    $scope.totFormalSerDmgPvt = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_dmg_pvt = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'DmgFrmYear1SerDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_dmg_pvt = tot_dmg_pvt + value_in.tot_dmg_pvt;
                    })
                }
            })
            return tot_dmg_pvt;
        }
    }

    $scope.totFormalSerLosYer1Pub = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_los_yer1_pub = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'LosFrmYear1SerDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_yer1_pub = tot_los_yer1_pub + value_in.los_year1_pub;
                    })
                }
            })
            return tot_los_yer1_pub;
        }
    }

    $scope.totFormalSerLosYer1Pvt = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_los_yer1_pvt = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'LosFrmYear1SerDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_yer1_pvt = tot_los_yer1_pvt + value_in.los_year1_pvt;
                    })
                }
            })
            return tot_los_yer1_pvt;
        }
    }

    $scope.totFormalSerLosYer2Pub = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_los_yer2_pub = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'LosFrmYear2SerDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_yer2_pub = tot_los_yer2_pub + value_in.los_year2_pub;
                    })
                }
            })
            return tot_los_yer2_pub;
        }
    }

    $scope.totFormalSerLosYer2Pvt = function() {
        if(!angular.isUndefined($scope.dlSummFormlInformlDis)) {
            var tot_los_yer2_pvt = 0;
            angular.forEach($scope.dlSummFormlInformlDis.industry_services.Table_5, function(value, key) {
                if(key == 'LosFrmYear2SerDistrict') {
                    angular.forEach(value, function(value_in, key) {
                        tot_los_yer2_pvt = tot_los_yer2_pvt + value_in.los_year2_pvt;
                    })
                }
            })
            return tot_los_yer2_pvt;
        }
    }
}])
