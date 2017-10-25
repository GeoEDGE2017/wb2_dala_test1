//Table 4
var app = angular.module('dlTypeLossRailApp', ['underscore'])

app.controller('DlTypeLossRailController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.incident;
    $scope.company;
    $scope.dlDate;
    $scope.bs_data={};
    var total=0;
    $scope.baselineDate;
    $scope.bsCreatedDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.DlTypeLos_year_1 = 0;
    $scope.DlTypeLos_year_2 = 0;
    $scope.user_id;

    var init_data = {
        'transport_rail' : {
            'Table_5': {
                'DlTypeLos' :[{
                    loss_type : 'Foregone income of rail company',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                }, {   loss_type : 'Cleaning costs',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                }, {   loss_type : 'Higher operating costs',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                }, {   loss_type : 'Other unexpected expenses',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                }, {   loss_type : 'TOTAL LOSSES',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                }],
            }
        }
    }

    $scope.dlTypeLossRail = init_data;

    $scope.changedValue = function(selectedValue) {
//		if($scope.incident) {
//            $http({
//                method: 'POST',
//                url: '/get_latest_bs_date',
//                contentType: 'application/json; charset=utf-8',
//                data: angular.toJson({
//                    'db_tables': ['DlTypeLos'],
//                    'com_data': {
//                        'district': $scope.district.district__id,
//                        'incident': $scope.incident,
//                    },
//                    'sector': 'transport_rail',
//                    'table_name': 'Table_1'
//                }),
//                dataType: 'json',
//            }).then(function successCallback(response) {
//                console.log('response', response.data.bs_created_date);
//                var result = response.data;
//                if(result.bs_date == null) {
//                    $("#modal-container-239458").modal('show');
//                }
//                else {
//                    var bs_date = result.bs_date.replace(/^"(.*)"$/, '$1');
//                    $scope.currentBaselineDate = "Latest baseline data as at " + bs_date;
//                    $scope.bsCreatedDate = result.bs_created_date;
//                    console.log('bs_date', result.bs_date);
//                    console.log('bsCreatedDate', result.bs_created_date);
//                }
//            });
//        }
	}

    $scope.getTotal = function(property) {
        var array = $scope.dlTypeLossRail.transport_rail.Table_5.DlTypeLos;
        var cumulative = null;
        var sums = _.map(array, function(obj) {
            cumulative += obj[property];
            return cumulative;
            console.log(array);

        });
        var the_string = 'DlTypeLos_' + property;
        var model = $parse(the_string);
        model.assign($scope, cumulative);
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: 'POST',
                url: '/dl_save_data',
               contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlTypeLossRail,
                    'com_data': {
                        'incident_id' : $scope.incident,
                        'user_id': $scope.user_id
                    },
    //                'bs_date': $scope.bsCreatedDate,
                    'is_edit': $scope.is_edit,
                    'sector': 'transport_rail'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
            },
            function errorCallback(response) {
                console.log(response);
            });
        }
    }

    $scope.editDlData = function(form) {
        if(form.$valid) {
            $scope.is_edit = true;
            $scope.submitted = true;
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_5',
                    'sector': 'transport_rail',
                    'com_data': {
                        'incident': $scope.incident,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
    //            $scope.dlTypeLossRail = data;
                console.log(data);
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.transport_rail.Table_5, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.dlTypeLossRail = data;
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

    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.dlTypeLossRail = init_data;
    }
});
