//Table 1
var app = angular.module('bsTelcomCmpnysApp', [])
app.controller('bsTelcomCmpnysController', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.new_company = {id: null, district:null, company_name: null, ownership: null};
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.name;
    $scope.companies = [];
    $scope.is_edit_model = false;
    $scope.ownership;
    $scope.company;

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
                    ownership : $scope.ownership,
                    company : $scope.company,
                }],
            }
        }
    }

    $scope.bsTelcomCmpnys = angular.copy(init_data);

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            var array = $scope.bsTelcomCmpnys.telecommunication.Table_1;
            var details = _.map(array, function(model_array) {
                _.map(model_array, function(model) {
                    model.company = $scope.selectedCompany.id;
                    model.ownership = $scope.selectedCompany.ownership;
                });
            });
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
                console.log(data);
//                $scope.bsInfoFisheries = init_data;
                $scope.is_edit = false;
                if (data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');

            }).error(function(data, status) {
                console.error('Repos error', status, data);
            })
        }
    }

    $scope.saveCompany = function() {
        if($scope.district != null) {
            if(!$scope.is_edit_model) {
                $scope.new_company = {company_name: $scope.company, ownership: $scope.ownership};
                $http({
                    method: "POST",
                    url: "/add_entity_with_district",
                    data: angular.toJson({
                        'model_fields': $scope.new_company,
                        'model': 'CompanyName',
                        'is_edit': $scope.is_edit_model,
                        'sector': 'telecommunication',
                        'district_id': $scope.district,
                    }),
                }).success(function(data) {
                    if(data)
                        $scope.companies.push($scope.new_company);
                        $("#modal-container-218029").modal('hide');
    //                    $("#modal-container-469840").modal('hide');
                        $scope.is_edit_model = false;
                })
            }
        }
        else {
            console.log('District is not selected');
        }
    }

    $scope.fetchCompanies = function() {
        console.log($scope.district);
        if($scope.district != null) {
            $http({
                method: "POST",
                url: "/fetch_company_tele",
                data: angular.toJson({
                    'district': $scope.district,
                    'model': 'CompanyName',
                    'sector': 'telecommunication'
                }),
            }).success(function(data) {
                console.log(data);
                $scope.companies = data;
            })
        }
    }

    //Clear Function
    $scope.clear = function() {
        console.log("init")
        $scope.is_edit = false;
        $scope.bsTelcomCmpnys = angular.copy(init_data);
    }
});
