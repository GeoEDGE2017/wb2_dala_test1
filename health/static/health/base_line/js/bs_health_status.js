//Table 1
var bsHealthStatusApp = angular.module('bsHealthStatusApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('BsHealthStatusController', function BsHealthStatusController($scope, $http) {
    $scope.district;
    $scope.number1;
    $scope.number2;
    $scope.sum;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;

    //initialize model
    var init_data = {
        'health': {
            'Table_1': {
                'BhsPlc': [{
                    male: null,
                    female: null,
                    children: null,
                    elderly: null,
                }],
                'BhsComDiseases': [{
                        com_disease: 'Diarrhea',
                        male: null,
                        female: null,
                        children: null,
                        elderly: null,
                    },
                    {
                        com_disease: 'Dengue',
                        male: null,
                        female: null,
                        children: null,
                        elderly: null,
                    }
                ],
                'BhsVi': [{
                        vital_indicators: 'Under-5 Mortality Rate',
                        male: null,
                        female: null,
                        children: null,
                        elderly: null,
                    },
                    {
                        vital_indicators: 'Mortality Rate',
                        male: null,
                        female: null,
                        children: null,
                        elderly: null,
                    }
                ],
                'BhsOi': [{
                        other_indicators: 'Crude Birth Rate',
                        unit_measure: null
                    },
                    {
                        other_indicators: 'Maternal Mortality Rate',
                        unit_measure: null
                    }
                ]
            }
        }
    }

    $scope.dataHealthStatus = angular.copy(init_data);

    //Save Data
    $scope.hSDataSubmit = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.dataHealthStatus),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                $scope.dataHealthStatus = init_data;
                $scope.is_edit = false;
                if (data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');
            })
        }
    }

    //Add Enumerate Fileds
    $scope.insertDisease = function(table) {
        var new_row;
        if (table == 'BhsOi') {
            new_row = {
                other_indicators: '',
                unit_measure: null
            }
        } else if (table == 'BhsComDiseases') {
            new_row = {
                com_disease: '',
                male: null,
                female: null,
                children: null,
                elderly: null,
            }
        } else if (table == 'BhsVi') {
            new_row = {
                vital_indicators: '',
                male: null,
                female: null,
                children: null,
                elderly: null,
            }
        }

        $scope.dataHealthStatus.health.Table_1[table].push(new_row);

    }

    //Edit Data
    $scope.bsHsDataEdit = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            $scope.is_edit = true;
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'health',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date
                    }
                }),
            }).success(function(data) {
                console.log(data);
                $scope.dataHealthStatus = data;
            })
        }

    }

    //Cancel Edit
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.dataHealthStatus = init_data;
    }

    //Remove Enumerate Fileds
    $scope.removeItem = function removeItem(table, index) {
        if (table == 'BhsComDiseases')
            $scope.dataHealthStatus.health.Table_1.BhsComDiseases.splice(index, 1);
        else if (table == 'BhsVi')
            $scope.dataHealthStatus.health.Table_1.BhsVi.splice(index, 1);
        else if (table == 'BhsOi')
            $scope.dataHealthStatus.health.Table_1.BhsOi.splice(index, 1);
    }

    //Clear Function
    $scope.clear = function() {
        console.log("init")
        $scope.is_edit = false;
        $scope.dataHealthStatus = angular.copy(init_data);

    }

    $scope.getLatestBsDate = function() {
        alert($scope.district);
        $http({
            method: 'POST',
            url: '/get_latest_bs_date',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_name': 'Table_3',
                'sector': 'health',
                'district': $scope.district,
            }),
            dataType: 'json',
        }).then(function successCallback(response) {

        })
    }
})
