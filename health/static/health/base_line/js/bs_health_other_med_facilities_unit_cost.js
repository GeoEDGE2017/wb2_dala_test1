//Table 4
var app = angular.module('bsOtherMedFaciUnitCostApp', []);

app.controller("BsOtherMedFaciUnitCostController", ['$scope', '$http', function($scope, $http) {

    $scope.district;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;

    //initialize model
    var init_data = {
        'health': {
            'Table_4': {
                'BucOmarStructure': [{
                    particulars: '1 Floor Structure',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: '2-3 Floors Structure',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'More Than 3 Floors Structure',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }],
                'BucOmarSupplies': [{
                    particulars: 'Medicine',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Medical Supplies',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Others',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }],
                'BucOmarMequipment': [{
                    particulars: 'CT Scan',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'X-ray Machine',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'MRI Machine',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Other Equipment (Specify)',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }],
                'BucOmarOassets': [{
                    particulars: 'Computers',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Vehicles',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Furniture',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Office Equipment',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Others',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }],
                'BucOmarcCrpm': [{
                    particulars: 'Average Construction Period',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Average Repair Period',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }],
                'BucOmarcStructure': [{
                    particulars: 'Roof',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Wall',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Flooring',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }],
                'BucOmarcMequipment': [{
                    particulars: 'CT Scan',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'X-ray Machine',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'MRI Machine',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Other Equipment (Specify)',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }],
                'BucOmarcOassets': [{
                    particulars: 'Computers',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Vehicles',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Furniture',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Office Equipment',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }, {
                    particulars: 'Others',
                    base_hospital: null,
                    divisional_hospital: null,
                    rural_hospital: null,
                    central_dispensary: null,
                    pri_med_cunits: null,
                    pri_health_ccenters: null,
                    mat_child_health_clinics: null,
                }]
            }
        }
    }

    $scope.bsDataOtherMedicalFacilities = angular.copy(init_data);

//Save Data
    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {

            $http({
                method: 'POST',
                url: '/bs_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.bsDataOtherMedicalFacilities,
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,

                    },
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
//                $scope.bsDataOtherMedicalFacilities = init_data;
//                $scope.is_edit = false;

                if (response.data == 'False'){
                     $("#modal-container-239454").modal('show');
                        $scope.is_valid_data = false;
                    }
                else
                {
                    $("#modal-container-239453").modal('show');
                }


            }, function errorCallback(data) {

                console.log(data);
            });
        }
    }

//Edit Data
    $scope.bsHsDataEdit = function(form) {

        $scope.is_edit = true;
        $scope.submitted = true;

        if (form.$valid) {

            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_4',
                    'sector': 'health',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                    }
                }),
            }).success(function(data) {

                console.log(data);
                $scope.bsDataOtherMedicalFacilities = data;
            })
        }


    }

//Cancel Edit
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bsDataOtherMedicalFacilities = init_data;
    }

//Clear Function
    $scope.clear = function() {
        console.log("init")
        $scope.is_edit = false;
        $scope.bsDataOtherMedicalFacilities = angular.copy(init_data);

    }


}])
