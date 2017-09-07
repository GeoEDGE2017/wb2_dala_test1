//Table 1
var app = angular.module('mnIndusMinFirmApp', ['underscore']);

app.controller("MnIndusMinFirmController", function($scope, $http, _) {
    $scope.district;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.selectedFirm;
    $scope.editedFirmName;
    $scope.new_firm = {id: null, name: null, ownership: null, district_id: null};
    $scope.ownership;
    $scope.firms = [];
    $scope.is_edit_model = false;
    $scope.is_edit_disable = false;
    $scope.user_id;

    var init_data = {
        'mining': {
            'Table_1': {
                'BmaImFirmNum':[{
                    male :null,
                    female :null,
                    firm_id:$scope.selectedFirm,
                }],
                'BmaImFn': [{
                    name_min_outputs:'Nickel',
                    male: null,
                    female: null,
                    avg_per_year: null,
                    firm_id:$scope.selectedFirm,
                }, {
                    name_min_outputs:'Copper',
                    male: null,
                    female: null,
                    avg_per_year: null,
                    firm_id:$scope.selectedFirm,
                }, {
                    name_min_outputs: 'Gold',
                    male: null,
                    female: null,
                    avg_per_year: null,
                    firm_id:$scope.selectedFirm,
                }]
            }
        }
    }

    $scope.mnIndusMinFirm = angular.copy(init_data);

    //Disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.baselineDate && $scope.selectedFirm){
            $scope.is_edit_disable = true;
        }
        else {
            $scope.is_edit_disable = false;
        }
    }

    $scope.insertFirm = function(table) {
        console.log($scope.mnIndusMinFirm.mining.Table_1[table]);
        var new_row;
        if(table == 'BmaImFn') {
            new_row = {
                name_min_outputs:'',
                public: null,
                private: null,
                male: null,
                female: null,
                avg_per_year:null
            }
        }
        $scope.mnIndusMinFirm.mining.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BmaImFn') {
            $scope.mnIndusMinFirm.mining.Table_1.BmaImFn.splice(index,1);
        }
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        console.log('saveBsData');
        if (form.$valid) {
            var array = $scope.mnIndusMinFirm.mining.Table_1;
            var details = _.map(array, function(model_array) {
                _.map(model_array, function(model) {
                    model.firm_id = $scope.selectedFirm.id;
                });
            });
            console.log($scope.mnIndusMinFirm);
            $http({
                method: 'POST',
                url: '/bs_save_data_with_firm',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.mnIndusMinFirm,
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'firm_id': $scope.selectedFirm.id,
                        'user_id': $scope.user_id,
                    },
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                console.log(response);
                if (response.data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
            }, function errorCallback(response) {
                $("#modal-container-239454").modal('show');
                $scope.is_valid_data = false;
                console.log(response);
            });
        }
        else {
            console.log('saveBsData else');
        }
    }

    $scope.editBsData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: '/bs_mining_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'mining',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'firm' : $scope.selectedFirm.id,
                    }
                }),
            }).success(function(data) {
                console.log(data);
                $scope.mnIndusMinFirm = data;
            })
        }
    }

    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.mnIndusMinFirm = angular.copy(init_data);
    }

    $scope.saveFirm = function(form) {
        if(!$scope.is_edit_model) {
            $http({
                method: "POST",
                url: "/add_entity",
                data: angular.toJson({
                    'model_fields': $scope.new_firm,
                    'model': 'Firm',
                    'is_edit': $scope.is_edit_model,
                    'sector': 'mining'
                }),
            }).success(function(data) {
                if(data) {
                    $scope.firms.push($scope.new_firm);
                    $("#modal-container-469842").modal('hide');
                    $("#modal-container-469840").modal('hide');
                    $scope.is_edit_model = false;
                }
            })
        }
    }

    $scope.saveEditFirm = function(form) {
        console.log($scope.editedFirmName);
        if(!angular.isUndefined($scope.editedFirmName) || $scope.editedFirmName === null) {
            console.log('2');
            $http({
                method: "POST",
                url: "/edit_firm",
                data: angular.toJson({
                    'firm_name': $scope.editedFirmName,
                    'firm_id' : $scope.selectedFirm.id,
                    'ownership': $scope.ownership,
                    'user_id': $scope.user_id,
                }),
            }).success(function(data) {
                console.log(data);
                $scope.editedFirmName = null;
                $scope.fetchFirms();
                $("#modal-container-469840").modal('hide');
            })
        }
        else {
            console.log('@@@');
        }
    }

    $scope.openAddFirm = function() {
        $scope.submitted = true;
//        console.log('in');
        if($scope.district && $scope.baselineDate) {
            $("#modal-container-469842").modal('show');
        }
    }

    $scope.openEditFirm = function() {
        $scope.submitted = true;
        is_edit_model=true;
        if($scope.district && $scope.baselineDate && $scope.selectedFirm) {
            $("#modal-container-469840").modal('show');
        }
    }

    $scope.fetchFirms = function() {
        $scope.new_firm.district_id = $scope.district;
        $http({
            method: "POST",
            url: "/fetch_entities",
            data: angular.toJson({
                'district':  $scope.district,
                'model': 'Firm', //TouBusiness
                'sector':'mining' //tourism
            }),
        }).success(function(data) {
            console.log(data);
            $scope.firms = data;
        })
    }

    //Clear Function
    $scope.clear = function() {
        $scope.is_edit = false;
        $scope.mnIndusMinFirm = angular.copy(init_data);
    }

})
