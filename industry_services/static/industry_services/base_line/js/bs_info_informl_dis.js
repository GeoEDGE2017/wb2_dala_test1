var app = angular.module('bsindustryServicesInfoInformalApp', [])

app.controller('bsindustryServicesInfoInformalController', ['$scope', '$http', function($scope, $http) {


    $scope.district;
    $scope.bs_date;
    $scope.is_edit = false;

    $scope.submitted = false;
    $scope.is_valid_data = true;


//

    var init_data = {
        'industry_services': {
            'Table_2': {
                'BsNumBusSector':[
                {
                    'components':'Trading',
                    'num_businesses':null,
                    'avg_num_emp_male':null,
                    'avg_num_emp_female':null,
                },{
                    'components':'Services',
                    'num_businesses':null,
                    'avg_num_emp_male':null,
                    'avg_num_emp_female':null,
                },{
                    'components':'Food processing',
                    'num_businesses':null,
                    'avg_num_emp_male':null,
                    'avg_num_emp_female':null,
                },
                ]
            }
        }
    }

     $scope.bs_ind_ser_info_informl = angular.copy(init_data);

     $scope.insertRow = function(table){

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
            // Following conditions can be checked in a single if
            // separated for readability

            if(table == 'BsNumBusSector') {
                $scope.bs_ind_ser_info_informl.industry_services.Table_2.BsNumBusSector.splice(index, 1);
            }
        }

        $scope.getGrandTotalCol = function(column){

        var table = $scope.bs_ind_ser_info_informl.industry_services.Table_2;
        var final_total = 0;

        angular.forEach(table, function(subTable, key) {

            angular.forEach(subTable, function(value, key) {
                if(value){
                    if(value[column]){
                        final_total += value[column];
                    }
                }
        })

        })
        return final_total;

    }

    $scope.cancelEdit = function()
        {
            //console.log("init")
            $scope.is_edit = false;
            $scope.bs_ind_ser_info_informl = angular.copy(init_data);
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
                        },
                        'is_edit': $scope.is_edit,
                        'sector':'industry_services', //check this line
                    }),
                }).success(function(data) {

                    $scope.bs_tourism_facilities = init_data;
                    $scope.is_edit = false;

                    if (data == 'False')
                        $scope.is_valid_data = false;
                    else
                        $("#modal-container-239453").modal('show');

                })
            }
            else{
                console.log("invalid");
            }
        }


}])