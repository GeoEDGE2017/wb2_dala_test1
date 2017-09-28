var app = angular.module('dlAgriLivestocknNatApp', []);

app.controller("DlAgriLivestocknNatController", ['$scope','$http',function ($scope,$http) {
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
    $scope.total_num_affected = 0;
    $scope.user_id;


    $scope.fetchDlData = function(form){
        if($scope.incident){
            $scope.is_edit = true;
            $scope.submitted = true;
            $http({
                method: "POST",
                url: '/dl_fetch_summary_disagtn',
                data: angular.toJson({
                    'table_name':  ['Table_6'],
                    'sector': ['agri_livestock'],
                    'com_data': {
                        'incident': $scope.incident,
                     },
                }),
            }).success(function(data) {
            angular.forEach(data, function(value, key) {
            });
            $scope.dlAgriLivestockSumNat = data  ;
            })
        }

        }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlAgriLivestockSumNat ? angular.equals({},
        $scope.dlAgriLivestockSumNat.agri_livestock.Table_6) : true;
        return isNull;
    }

    $scope.totDmgPub = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockSumNat)) {
            var totDmgPub = 0;
            angular.forEach($scope.dlAgriLivestockSumNat.agri_livestock.Table_6, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpNdaPubNational') {
                          totDmgPub = totDmgPub + value_in[0].damages;
                    }
                    })
                })
            return totDmgPub;
        }
    }

    $scope.totDmgPvt = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockSumNat)) {
            var totDmgPvt = 0;
            angular.forEach($scope.dlAgriLivestockSumNat.agri_livestock.Table_6, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpNdaPvtNational') {
                          totDmgPvt = totDmgPvt + value_in[0].damages;
                    }
                    })
                })
            return totDmgPvt;
        }
    }

    $scope.totLosPubY1 = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockSumNat)) {
            var totLosPubY1= 0;
            angular.forEach($scope.dlAgriLivestockSumNat.agri_livestock.Table_6, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpLosPubNational') {
                          totLosPubY1 = totLosPubY1 + value_in[0].los_year_1;
                    }
                    })
                })
            return totLosPubY1;
        }
    }

    $scope.totLosPvtY1 = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockSumNat)) {
            var totLosPvtY1= 0;
            angular.forEach($scope.dlAgriLivestockSumNat.agri_livestock.Table_6, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpLosPvtNational') {
                          totLosPvtY1 = totLosPvtY1 + value_in[0].los_year_1;
                    }
                    })
                })
            return totLosPvtY1;
        }
    }

    $scope.totLosPubY2 = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockSumNat)) {
            var totLosPubY2= 0;
            angular.forEach($scope.dlAgriLivestockSumNat.agri_livestock.Table_6, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpLosPubNational') {
                          totLosPubY2 = totLosPubY2 + value_in[0].los_year_2;
                    }
                    })
                })
            return totLosPubY2;
        }
    }

    $scope.totLosPvtY2 = function() {
        if(!angular.isUndefined($scope.dlAgriLivestockSumNat)) {
            var totLosPvtY2= 0;
            angular.forEach($scope.dlAgriLivestockSumNat.agri_livestock.Table_6, function(value, index) {
            angular.forEach(value, function(value_in, key) {
                    if(key == 'DlpLosPvtNational') {
                          totLosPvtY2 = totLosPvtY2 + value_in[0].los_year_2;
                    }
                    })
                })
            return totLosPvtY2;
        }
    }

 }])
