//Table 1
var app = angular.module('bsTelcomCmpnysApp', [])




app.controller('bsTelcomCmpnysController', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.new_company = {id: null, company_name: null, ownership: null};
    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'telecommunication': {
            'Table_1': {
                'BsTelCompany': [{
                    area_covered : '',
                    fixed_voice : false,
                    fixed_tv : false,
                    fixed_data : false,
                    mobile_voice : false,
                    mobile_data : false,
                }],
            }
        }
    }

    $scope.bsTelcomCmpnys = init_data;

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            console.log($scope.bsTelcomCmpnys);
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data' : ($scope.bsTelcomCmpnys),
                    'com_data': {
                        'district' : $scope.district,
                        'bs_date' : $scope.bs_date,
                    },
                    'is_edit' : $scope.is_edit,
                    'sector' : 'telecommunication'
                }),
            }).success(function(data) {
                $scope.bsInfoFisheries = init_data;
                $scope.is_edit = false;
                if (data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');

            })
        }
    }

    $scope.addCompany = function() {
        $http({
            method: "POST",
            url: "/add_entity",
            data: angular.toJson({
                'model_fields': $scope.new_school[$scope.CompanyName],
                'model': $scope.schoolType,
                'is_edit': $scope.is_edit_model,
                'sector': 'education'
            }),
        }).success(function(data) {
            $("#modal-container-218029").modal('hide');
            $scope.new_school[$scope.schoolType].id = data;
            if(!$scope.is_edit_model) {
                if(data) {
                    $scope.schools[$scope.schoolType].push($scope.new_school[$scope.schoolType]);
                    console.log($scope.schools[$scope.schoolType]);
                }
            }
            else {
                var school = $filter('filter')($scope.schools[$scope.schoolType], {id: data})[0];
                school.name = $scope.new_school[$scope.schoolType].name;
            }
            $scope.is_edit_model = false;
        })
    }
});
