//Table 2
var app = angular.module('bsPubMedicalFacilitiesApp', []);

app.controller("BsPubMedicalFacilitiesController", ['$scope', '$http', function($scope, $http) {

    $scope.district;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;

//initialize model
    var init_data = {
        'health': {
            'Table_2': {
                'BmfPubMf': [{
                    type_pub_mf: 'Teaching Hospital (TH)',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'Provincial General Hospital (PGH)',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'District General Hospital (DGH)',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'Base Hospital (BH )',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'Divisional Hospital (DH )',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'Rural Hospital (RH )',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'Central Dispensary (CH )',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'Primary Medical Care Units (PMCU)',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'Primary Health Care Centers (PHCC)',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'Maternal and Child Health Clinics (MCHC)',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'MOH Offices ',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'Others (Specify)',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pub_mf: 'TOTAL',
                    number: null,
                    male: null,
                    female: null,
                }],
                'BmfPvtMf': [{
                    type_pvt_mf: 'Private Clinics',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pvt_mf: 'Others',
                    number: null,
                    male: null,
                    female: null,
                }, {
                    type_pvt_mf: 'TOTAL',
                    number: null,
                    male: null,
                    female: null,
                }]

            }
        }
    }
    $scope.bsDataMedicalFacilities = angular.copy(init_data);

//Save Data
    $scope.saveBsData = function(form) {

        $scope.submitted = true;

        if (form.$valid) {

            $http({
                method: 'POST',
                url: '/bs_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.bsDataMedicalFacilities,
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate
                    },
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
//                $scope.bsDataMedicalFacilities = init_data;
//                $scope.is_edit = false;
                if (response.data == 'False')
                   {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else
                    $("#modal-container-239453").modal('show');
          }, function errorCallback(data) {

                console.log(data);
            });
        }

    }

//Edit Data
    $scope.bsHsDataEdit = function(form) {
        $scope.submitted = true;
        $scope.is_edit = true;
        if (form.$valid) {

            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_2',
                    'sector': 'health',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                    }
                }),
            }).success(function(data) {

                console.log(data);
                $scope.bsDataMedicalFacilities = data;
            })

        }


    }

//Cancel Edit
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bsDataMedicalFacilities = init_data;
    }

//Clear Function
    $scope.clear = function() {
        console.log("init")
        $scope.is_edit = false;
        $scope.bsDataMedicalFacilities = angular.copy(init_data);

    }


}])
