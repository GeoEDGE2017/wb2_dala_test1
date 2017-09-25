//Table 1
var app = angular.module('bsPowGenFrimDisApp', []);

app.controller("BsPowGenFrimDisController", function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.selectedFirm;
    $scope.ownership;
    $scope.is_edit_disable = false;
    $scope.user_id;
    $scope.is_edit_disable = false;
    $scope.is_valid_data = true;
     $scope.check_search = false;
    $scope.is_search = false;

    //Initialize model
    var init_data = {
        'power_supply':{
            'Table_1': {
                 'BsPwGenFirm':[],
            }
        }
    }

    $scope.bsPowGenFrimDis = angular.copy(init_data);

    //Disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.bs_date){
            $scope.is_edit_disable = true;
             $scope.check_search = true;
        }
        else{
            $scope.is_edit_disable = false;
             $scope.check_search = false;
        }
    }

    //Insert Firm
    $scope.insertFirm = function(table) {
        var new_row;
        if(table == 'BsPwGenFirm') {
            new_row = {
                ownership:'',
                assets:'',
                description:'',
                num_hydro:null,
                num_coal:null,
                num_diesel:null,
                num_other:null,
                tot_capacity:null,
                avg_income:null,
            }
        }

        $scope.bsPowGenFrimDis.power_supply.Table_1[table].push(new_row);
    }

    //Remove Enumerate Filed
    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsPwGenFirm'){
            $scope.bsPowGenFrimDis.power_supply.Table_1.BsPwGenFirm.splice(index,1);
        }
    }

    //Save Data
    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            console.log($scope.district);
            $http({
                method: 'POST',
                url: '/bs_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.bsPowGenFrimDis,
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id,

                    },
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
	            $("#modal-container-239453").modal('show');
                console.log(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }

    //Edit Data
    $scope.editBsData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        document.getElementById("clearbtn").disabled = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector':'power_supply',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    }
                }),
            }).success(function(data) {
                console.log(data);
                $scope.bsPowGenFrimDis = data;
                var edit_data_not_found = false;
            if(data != null) {
                angular.forEach(data.power_supply.Table_1, function(value, index) {
                    console.log(value);
                    if(value.length == 0) {
                        console.log('----');
                        edit_data_not_found = true;
                    }
                })
                if(edit_data_not_found != true) {
                    $scope.bsPowGenFrimDis = data;
                }
                else {
                    $("#modal-container-239456").modal('show');
                }
            }
            else {
                console.log('----else');
                $("#modal-container-239456").modal('show');
            }
            })
        }
    }

    //Edit Data
    $scope.searchBsData = function(form) {
         document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		console.log("test", $scope.district);
		console.log("test", $scope.bs_date);
		$scope.is_search = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector':'power_supply',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    }
                }),
            }).success(function(data) {
                console.log(data);
                $scope.bsPowGenFrimDis = data;
                var edit_data_not_found = false;
            if(data != null) {
                angular.forEach(data.power_supply.Table_1, function(value, index) {
                    console.log(value);
                    if(value.length == 0) {
                        console.log('----');
                        edit_data_not_found = true;
                    }
                })
                if(edit_data_not_found != true) {
                    $scope.bsPowGenFrimDis = data;
                }
                else {
                    $("#modal-container-239456").modal('show');
                }
            }
            else {
                console.log('----else');
                $("#modal-container-239456").modal('show');
            }
            })
        }
    }

    //Cancel Edit Data
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bsPowGenFrimDis = init_data;
        location.reload();
    }

    //Clear Function
    $scope.clear = function() {
        console.log('clear');
        $scope.is_edit = false;
        $scope.bsPowGenFrimDis = angular.copy(init_data);
        location.reload();
    }
})
