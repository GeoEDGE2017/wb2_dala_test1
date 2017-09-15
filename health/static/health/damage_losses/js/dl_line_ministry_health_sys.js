//Table 5
var app = angular.module('dlInTheLineMinistryHealthSysApp', [])

app.controller('dlInTheLineMinistryHealthSysAppController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.Districts=[];
    $scope.dlDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.is_null = false;
    $scope.currentBaselineDate = null;
    $scope.user_id;
    $scope.is_edit_disable = false;
    $scope.is_submit = false;

    //initialize model
    var init_data = {
        'health': {
            'Table_5': {
                //Tab 1
                'DmhDfNum': [{
                    num_des_facilities : 'Number of Destroyed Facilities',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
                'DmhDfPaf': [{
                    num_patients_affected : 'Male',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    num_patients_affected : 'Female',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
                //tab 2
                'DmhPdfaNum': [{
                    num_des_facilities : 'Number of Destroyed Facilities',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
                'DmhPdfaPaf': [{
                    num_patients_affected : 'Male',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    num_patients_affected : 'Female',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
                //tab 3
                'DmhNdatFacStructure': [{
                    asset : '1 Floor Structure',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : '2-3 Floors Structure',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'More Than 3 Floors Structure',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Value of Destroyed Structures',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
                'DmhNdatFacSupplies': [{
                    asset : 'Medicines',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }, {
                    asset : 'Medical Supplies',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }, {
                    asset : 'Others',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }, {
                    asset : 'Value of Destroyed Supplies',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }],
                'DmhNdatFacMequipment': [{
                    asset : 'CT Scan',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }, {
                    asset : 'X-ray Machine',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }, {
                    asset : 'MRI Machine',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }, {
                    asset : 'Other Equipment (Specify)',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }, {
                    asset : 'Value of Destroyed Medical Equipment',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }],
                'DmhNdatFacOassets': [{
                    asset : 'Computers',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Vehicles',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Furniture',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Office Equipment',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Others',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Value of Destroyed Other Assets',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'VALUE OF DESTROYED ASSETS',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
                //tab 4
                'DmhPdfaStructure': [{
                    asset : 'Roof',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Wall',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Flooring',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Value of Partially Damaged Structure',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
                'DmhPdfaMequipment': [{
                    asset : 'CT Scan',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }, {
                    asset : 'X-ray Machine',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }, {
                    asset : 'MRI Machine',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }, {
                    asset : 'Other Equipment',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }, {
                    asset : 'Value of Partially Damaged Medical Equipment',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    total : null,
                }],
                'DmhPdfaOassets': [{
                    asset : 'Computers',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Vehicles',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Furniture',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Office Equipment',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Others',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'Value of Partially Damaged Other Assets',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'VALUE OF PARTIALLY DAMAGED ASSETS',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    asset : 'GRAND TOTAL OF DAMAGES',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
                //tab 5
                'DmhLosFi': [{
                    type_of_losses : 'Disaster Year 1',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    type_of_losses : 'Year 2',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    type_of_losses : 'Total',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
                'DmhLosCud': [{
                    type_of_losses : 'Disaster Year 1',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    type_of_losses : 'Year 2',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    type_of_losses : 'Total',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
                'DmhLosHoc': [{
                    type_of_losses : 'Disaster Year 1',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    type_of_losses : 'Year 2',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    type_of_losses : 'Total',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
                'DmhLosOue': [{
                    type_of_losses : 'Disaster Year 1',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    type_of_losses : 'Year 2',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }, {
                    type_of_losses : 'Total',
                    teaching_hospital : null,
                    provincial_general_hospital : null,
                    district_general_hospital : null,
                    office : null,
                    other : null,
                    total : null,
                }],
            }
        }
    }

    $scope.dlMinistryHealthSys = angular.copy(init_data);

    //Save Data
    $scope.dlSaveData = function(form) {
        $scope.submitted = true;
        $scope.is_submit = true;
        if(form.$valid){
            $http({
                method : 'POST',
                url : '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlMinistryHealthSys,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                        'user_id': $scope.user_id,
                    },
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).then(function mySucces(response) {
                console.log(response);
                if(response.data == 'False') {
                    $scope.is_valid_data = false;
                    $("#modal-container-239454").modal('show');
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
            }, function myError(response) {
                //if data sent to server side method unsuccessfull
                console.log(response);
            });
        }
        $scope.is_submit = false;
    }

    //Edit Data
    $scope.dlEditData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;

        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':  'Table_5',
                    'sector':'health',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.health.Table_5, function(value, index) {
//                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.dlMinistryHealthSys = data;
                        console.log('bs_data', $scope.bs_data);
                        console.log(data);
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

    //Cancel Edit
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.dlMinistryHealthSys = init_data;
    }

    //Fetch district
    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                console.log(data);
            })
        }

        if($scope.incident && $scope.district) {
            $scope.is_edit_disable = true;

            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BucMarStructure', 'BucMarSupplies', 'BucMarMequipment', 'BucMarOassets', 'BucMarcStructures', 'BucMarcCrpm', 'BucMarcMequipment', 'BucMarcOassets'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_3',
                    'sector': 'health'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                console.log('*', response);
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });

                console.log('*', $scope.bs_data);
                var is_null = false;
                angular.forEach($scope.bs_data, function(value, index) {
                    if(value == null) {
                        is_null = true;
                    }
                })

                if(is_null == true) {
                    $("#modal-container-239458").modal('show');
                    console.log('baseline table or tables are empty');
                    console.log($scope.bs_data);
                    $scope.currentBaselineDate = null;
                }
                else {
                    $http({
                        method: 'POST',
                        url: '/get_latest_bs_date',
                        contentType: 'application/json; charset=utf-8',
                        data: angular.toJson({
                            'com_data': {
                                'district': $scope.district.district__id,
                                'incident': $scope.incident,
                            },
                            'table_name': 'Table_3',
                            'sector': 'health'
                        }),
                        dataType: 'json',
                    }).then(function successCallback(response) {
                        var result = response.data;
                        if(result == null) {
                            $("#modal-container-239458").modal('show');
                        }
                        else {
                            result = result.replace(/^"(.*)"$/, '$1');
                            $scope.currentBaselineDate = "Latest baseline data as at " + result;
                        }
                    });
                }
            }, function errorCallback(response) {
                console.log('baseline tables data retrieving error');
                console.log(response);
            });
        }
    }

    $scope.parseIntFunc = function(val=0) {
        if(val == null) {
            val = 0;
        }
        return parseInt(val);
    }

    //Clear Function
    $scope.clear = function() {
        console.log("clear")
        $scope.is_edit = false;
        $scope.dlMinistryHealthSys = angular.copy(init_data);
    }
}])
