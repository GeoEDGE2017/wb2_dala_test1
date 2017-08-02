//Table 1
var app = angular.module('bsindustryServicesInfoFormalApp', [])

app.controller('bsindustryServicesInfoFormalController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;

    var init_data = {
        'industry_services': {
            'Table_1': {
                'BsFrmNumBusIndustry':[{
                    'industry':'Textile and Garments',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }, {
                    'industry':'Tea processing',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }, {
                    'industry':'Petroleum',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }, {
                    'industry':'Construction',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }, {
                    'industry':'Beverages',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }, {
                    'industry':'Chemicals',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }, {
                    'industry':'Pharmaceutical',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }],
                'BsFrmNumBusServices':[{
                    'service':'Finance and Insurance',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }, {
                    'service':'Wholesale Trade',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }, {
                    'service':'Retail Trade',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }, {
                    'service':'Real estate',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }, {
                    'service':'Private services',
                    'num_micro':null,
                    'num_small':null,
                    'num_medium': null,
                    'num_large': null,
                    'num_male': null,
                    'num_female': null,
                }],
            }
        }
    }

    $scope.bs_ind_ser_info_forml = angular.copy(init_data);

    $scope.insertRow = function(table) {
        var new_row;
        if(table == 'BsFrmNumBusIndustry') {
            new_row = {
                'industry':'',
                'num_micro':null,
                'num_small':null,
                'num_medium': null,
                'num_large': null,
                'num_male': null,
                'num_female': null,
            }
        }

        if(table == 'BsFrmNumBusServices') {
            new_row = {
                'service':'',
                'num_micro':null,
                'num_small':null,
                'num_medium': null,
                'num_large': null,
                'num_male': null,
                'num_female': null,
            }
        }
        $scope.bs_ind_ser_info_forml.industry_services.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        $scope.bs_ind_ser_info_forml.industry_services.Table_1[table].splice(index, 1);
    }

    $scope.getGrandTotalCol = function(column) {
        var table = $scope.bs_ind_ser_info_forml.industry_services.Table_1;
        var final_total = 0;
        angular.forEach(table, function(subTable, key) {
            angular.forEach(subTable, function(value, key) {
                if(value) {
                    if(value[column]) {
                        final_total += value[column];
                    }
                }
            })
        })
        return final_total;
    }

    //clear the data from table
    $scope.cancelEdit = function(){
        $scope.is_edit = false;
        $scope.bs_ind_ser_info_forml = angular.copy(init_data);
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': $scope.bs_ind_ser_info_forml,
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'industry_services', //check this line
                }),
            }).success(function(data) {
                $scope.bs_ind_ser_info_forml = init_data;
                $scope.is_edit = false;
                if (data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                $("#modal-container-239453").modal('show');
            })
        }
    }

    $scope.editBsData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: '/bs_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'industry_services',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    }
                }),
            }).success(function(data) {
                console.log("data" , data);
                // handling response from server if data are not available in this
                if((data.industry_services.Table_1.BsFrmNumBusIndustry.length == 0) ||(data.industry_services.Table_1.BsFrmNumBusServices.length == 0)){
                    $scope.is_edit = false;
                        // do nothing or display msg that data are not available
                }
                else {
                    $scope.bs_ind_ser_info_forml = data;
                }
            })
        }
    }

    $scope.clear = function() {
        $scope.bs_ind_ser_info_forml = angular.copy(init_data);
    }

    $scope.cancelEdit = function() {
         $scope.is_edit = false;
         $scope.clear();
    }
}]);
