//Table 2
var app = angular.module('bsindustryServicesInfoInformalApp', [])

app.controller('bsindustryServicesInfoInformalController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;
    $scope.is_edit_disable = false;
    $scope.check_search = false;
	$scope.is_search = false;

    var init_data = {
        'industry_services': {
            'Table_2': {
                'BsNumBusSector':[{
                    'components':'Trading',
                    'num_businesses':null,
                    'avg_num_emp_male':null,
                    'avg_num_emp_female':null,
                }, {
                    'components':'Services',
                    'num_businesses':null,
                    'avg_num_emp_male':null,
                    'avg_num_emp_female':null,
                }, {
                    'components':'Food processing',
                    'num_businesses':null,
                    'avg_num_emp_male':null,
                    'avg_num_emp_female':null,
                }]
            }
        }
    }

    $scope.bs_ind_ser_info_informl = angular.copy(init_data);

     //disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.bs_date){
            $scope.is_edit_disable = true;
            $scope.check_search = true;

        }
        else{
            $scope.is_edit_disable = false;
            $scope.check_search = false;
        }
    }

    $scope.insertRow = function(table) {
        var new_row;
        if(table == 'BsNumBusSector') {
            new_row = {
                'components':'',
                'num_businesses':null,
                'avg_num_emp_male':null,
                'avg_num_emp_female':null,
            }
        }

        $scope.bs_ind_ser_info_informl.industry_services.Table_2[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsNumBusSector') {
            $scope.bs_ind_ser_info_informl.industry_services.Table_2.BsNumBusSector.splice(index, 1);
        }
    }

    $scope.getGrandTotalCol = function(column) {
        var table = $scope.bs_ind_ser_info_informl.industry_services.Table_2;
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

    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bs_ind_ser_info_informl = angular.copy(init_data);
        location.reload();
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bs_ind_ser_info_informl),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id,
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'industry_services', //check this line
                }),
            }).success(function(data) {
                $scope.bs_tourism_facilities = init_data;
                $scope.is_edit = false;
                if (data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
            })
        }
    }

    $scope.editBsData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        document.getElementById("clearbtn").disabled = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: '/bs_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_2',
                    'sector': 'industry_services',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    }
                }),
            }).success(function(data) {
                console.log(data);
                console.log(data.industry_services.industry_services);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.industry_services.Table_2, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                            $scope.is_edit = false;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bs_ind_ser_info_informl = data;
                    }
                    else {
                        $("#modal-container-239456").modal('show');
                    }
                }
                else {
                    $("#modal-container-239456").modal('show');
                }
            })
        }
    }

    $scope.searchBsData = function(form) {
       document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		console.log("test", $scope.district);
		console.log("test", $scope.bs_date);
		$scope.is_search = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: '/bs_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_2',
                    'sector': 'industry_services',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    }
                }),
            }).success(function(data) {
                console.log(data);
                console.log(data.industry_services.industry_services);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.industry_services.Table_2, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                            $scope.is_edit = false;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bs_ind_ser_info_informl = data;
                    }
                    else {
                        $("#modal-container-239456").modal('show');
                    }
                }
                else {
                    $("#modal-container-239456").modal('show');
                }
            })
        }
    }

    $scope.clear = function() {
        $scope.bs_ind_ser_info_informl = angular.copy(init_data);
        location.reload();
    }

    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.clear();
        location.reload();
    }
}])
