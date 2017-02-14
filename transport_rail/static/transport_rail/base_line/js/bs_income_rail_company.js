var app= angular.module('bsIncomeRailCompanyApp', ['underscore'])

app.controller('bsIncomeRailCompanyController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.baselineDate;
    $scope.selectedCompany;
    $scope.bs_data={};
    $scope.is_edit = false;

    $scope.submitted = false;
    $scope.is_valid_data = true;

    $scope.companies = [];
    $scope.company = null;
    $scope.new_company = {id: null, name: null};

    var init_data = {
        'transportation_rail': {
            'Table_1': {
                'BsIncAstRailIncome': [{
                    annual_income: null,
                    company_id:$scope.selectedCompany,
                }],
                'BsTotEmpRailCompny': [{
                    particulars: 'Total Number of Employees',
                    no_of_male: null,
                    no_of_female: null,
                    total_emp: null,
                    company_id:$scope.selectedCompany,
                }],
                'BsMovingAst': [{
                    asset: 'Wagons',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                },
                {
                    asset: 'Engine',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                },
                {
                    asset: 'Others',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                }],
                'BsEquipMachineryAst': [{
                    asset: 'Signal equipment',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                },{
                    asset: 'Track machinery',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,

                },{
                    asset: 'Vehicles',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                },{
                    asset: 'Computers',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                },{
                    asset: 'Furniture',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                },{
                    asset: 'Others',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                }],
                'BsMatSuppliesAst': [{
                    asset: 'Fuel (per Liter)',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                },{
                    asset: 'Others',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                }],
                'BsStructuresAst': [{
                    asset: 'Tracks',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                },{
                    asset: 'Tunnels',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                },{
                    asset: 'Bridges',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                },{
                    asset: 'Culverts',
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                    company_id:$scope.selectedCompany,
                }],
                'BsBuildingAst': [{
                    asset: '1 floor',
                    avg_replace_cost: null,
                    avg_repair_cost_roof: null,
                    avg_repair_cost_wall: null,
                    avg_repair_cost_floor: null,
                    company_id:$scope.selectedCompany,

                },{
                    asset: '2-3 floors',
                    avg_replace_cost: null,
                    avg_repair_cost_roof: null,
                    avg_repair_cost_wall: null,
                    avg_repair_cost_floor: null,
                    company_id:$scope.selectedCompany,

                },{
                    asset: 'More than 3 floors',
                    avg_replace_cost: null,
                    avg_repair_cost_roof: null,
                    avg_repair_cost_wall: null,
                    avg_repair_cost_floor: null,
                    company_id:$scope.selectedCompany,

                },],
            }
        }
    }

    $scope.bsIncomeRailCompany = init_data;

    $scope.saveBsData = function(form) {

        $scope.submitted = true;
        if(form.$valid) {
            var array = $scope.bsIncomeRailCompany.transport_rail.Table_1;
            var details = _.map(array, function(model_array) {
                _.map(model_array, function(model) {
                    model.company_id = parseInt($scope.selectedCompany.id);
                });
            });

            $http({
                method : 'POST',
                url : '/bs_save_data',
                contentType : 'application/json; charset=utf-8',
                data : angular.toJson({
                    'table_data' : $scope.bsIncomeRailCompany,
                    'com_data' : {
                        'district' : $scope.district,
                        'bs_date' : $scope.baselineDate,
                    },
                    'is_edit' : $scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                console.log(response);
                if(response.data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');

                }, function errorCallback(response) {

                console.log(response);
            });
        }
    }

    $scope.saveCompany = function(form) {
        if(form.$valid) {
            $http({
                method: "POST",
                url: "/add_entity",
                data: angular.toJson({
                    'model': 'Company',
                    'model_fields': $scope.new_company,
                     'is_edit' : false,
                     'sector':'transport_rail'
                }),

            }).success(function(data) {
                console.log(data);

                $scope.new_company.id = data;
                if(data) {

                    $scope.companies.push($scope.new_company);
                    console.log($scope.new_company);
                }

                $("#modal-container-218029").modal('hide');
            })
        }
    }

    $scope.fetchCompanies = function() {
        $http({
            method: "POST",
            url: "/transport_rail/base_line/fetch_company_entities",
        }).success(function(data) {
            console.log(data);
            $scope.companies = data;
        })
    }
});
