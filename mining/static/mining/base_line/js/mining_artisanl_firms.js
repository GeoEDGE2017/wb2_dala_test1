//Table 2
var app = angular.module('mnArtisanalFirmApp', []);

app.controller("MnArtisanalFirmController", ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.selectedFirm;
    $scope.ownership;
    $scope.is_edit_disable = false;
    $scope.user_id;

    var init_data = {
        'mining':{
            'Table_2': {
                'BmaAmMinNum':[{
                    male:null,
                    female :null,
                    firm_id:$scope.selectedFirm,
                    ownership :$scope.ownership,
                 }],
                'BmaAmMin': [{
                    minerals : 'Nickel',
                    avg_per_year:null,
                    firm_id:$scope.selectedFirm,
                    ownership :$scope.ownership,
                }, {
                    minerals : 'Copper',
                    avg_per_year:null,firm_id:$scope.selectedFirm,
                    ownership :$scope.ownership,
                }, {
                    minerals : 'Gold',
                    avg_per_year:null,firm_id:$scope.selectedFirm,
                    ownership :$scope.ownership,

                }]
            }
        }
    }

    $scope.mnArtisanalFirm = init_data;

    //Disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.baselineDate){
            $scope.is_edit_disable = true;
        }
        else {
            $scope.is_edit_disable = false;
        }
    }

    $scope.insertFirm = function(table) {
        var new_row;
        if(table == 'BmaAmMin') {
            new_row = {
                minerals:'',
                male: null,
                female: null,
                avg_per_year: null,
            }
        }
        $scope.mnArtisanalFirm.mining.Table_2[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BmaAmMin') {
            $scope.mnArtisanalFirm.mining.Table_2.BmaAmMin.splice(index,1);
        }
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: 'POST',
                url: '/bs_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.mnArtisanalFirm,
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'user_id': $scope.user_id,
                    },
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
	            $("#modal-container-239453").modal('show');
                console.log(response);
            }, function errorCallback(response) {
                $("#modal-container-239454").modal('show');
                console.log(response);
            });
        }
    }

    $scope.editBsData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_2',
                    'sector':'mining',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'user_id': $scope.user_id,
                    }
                }),
            }).success(function(data) {
                console.log(data);
                $scope.mnArtisanalFirm = data;
            })
        }
    }

    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.mnArtisanalFirm = init_data;
    }

    //Clear Function
    $scope.clear = function() {
        console.log("init")
        $scope.is_edit = false;
        $scope.mnArtisanalFirm = angular.copy(init_data);
    }
}])
