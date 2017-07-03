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

    // get relevant damage_losses data for calculations
    $scope.changedValue = function getDlData(selectProvinces) {

        if($scope.incident && selectProvinces) {
            fetchProvinces();
        }
//        if($scope.province && $scope.incident) {
//            console.log($scope.district);
//            console.log($scope.incident);
//            $http({
//                method: 'POST',
//                url: '/dl_get_data',
//                contentType: 'application/json; charset=utf-8',
//                data: angular.toJson({
//                    'table_name': 'Table_9',
//                    'db_tables': ['DshPubLmhProvince', 'DshPubMohProvince', 'DshPubOmfProvince',  'DshPvtFaProvince',  'DshTdlOwshipProvince'],
//                    'com_data': {
//                        'province': $scope.province,
//                        'incident': $scope.incident,
//                    },
//                    'is_edit' : $scope.is_edit,
//                    'sector':'health'
//                }),
//                dataType: 'json',
//            }).then(function successCallback(response) {
//                var data = response.data;
//                angular.forEach(data, function(value, key) {
//                    $scope.bs_data[key] = JSON.parse(value);
//
//
//                });
//
//                console.log($scope.bs_data);
//
//            }, function errorCallback(response) {
//
//                console.log(response);
//            });
//        }
    }

    $scope.provinces = [];

    function fetchProvinces() {
        $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                'incident': $scope.incident
            }),
        }).success(function(data) {
            $scope.provinces = data;
            $scope.province = "";
        })
    }

    $scope.fetchDlData = function() {
        if($scope.incident && $scope.province) {
            console.log($scope.province);
            console.log($scope.incident);
            $scope.is_edit = true;
            $scope.submitted = true;

            $http({
                method: "POST",
                url: '/dl_fetch_district_disagtn',
                data: angular.toJson({
                    'table_name':'Table_8',
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
 }])
