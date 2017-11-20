//Table 1
var app = angular.module('bsLivestockPoultryDstApp', [])

app.controller('bsLivestockPoultryDstController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data = {};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;
    $scope.is_edit_disable = false;
    $scope.check_search = false;
    $scope.is_search = false;

    //initialize Data
    var init_data = {
        'agri_livestock': {
            'Table_1': {
                'BelLivestock': [{
                    livestock : 'Swine',
                    pub_own_families : null,
                    pub_own_male : null,
                    pub_own_female : null,
                    pvt_own_families : null,
                    pvt_own_male : null,
                    pvt_own_female : null,
                }, {
                    livestock : 'Sheep',
                    pub_own_families : null,
                    pub_own_male : null,
                    pub_own_female : null,
                    pvt_own_families : null,
                    pvt_own_male : null,
                    pvt_own_female : null,
                }, {
                    livestock : 'Goat',
                    pub_own_families : null,
                    pub_own_male : null,
                    pub_own_female : null,
                    pvt_own_families : null,
                    pvt_own_male : null,
                    pvt_own_female : null,
                }, {
                    livestock : 'Cattle',
                    pub_own_families : null,
                    pub_own_male : null,
                    pub_own_female : null,
                    pvt_own_families : null,
                    pvt_own_male : null,
                    pvt_own_female : null,
                }, {
                    livestock : 'Buffalo',
                    pub_own_families : null,
                    pub_own_male : null,
                    pub_own_female : null,
                    pvt_own_families : null,
                    pvt_own_male : null,
                    pvt_own_female : null,
                }, ],
                'BelPoultry': [{
                    poultry : 'Chicken',
                    pub_own_families : null,
                    pub_own_male : null,
                    pub_own_female : null,
                    pvt_own_families : null,
                    pvt_own_male : null,
                    pvt_own_female : null,
                },{
                    poultry : 'Ducks',
                    pub_own_families : null,
                    pub_own_male : null,
                    pub_own_female : null,
                    pvt_own_families : null,
                    pvt_own_male : null,
                    pvt_own_female : null,
                }, ],
            }
        }
    }

    $scope.bsLivestockPoultryDst = angular.copy(init_data);

     //Disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.bs_date) {
            $scope.is_edit_disable = true;
            $scope.check_search = true;
        }
        else {
            $scope.is_edit_disable = false;
            $scope.check_search = false;
        }
    }

    //add Enumerate Fields
    $scope.insertAsset = function(table) {
        console.log($scope.bsLivestockPoultryDst.agri_livestock.Table_1[table]);
        var new_row;
        if(table == 'BelLivestock') {
            new_row = {
                livestock : '',
                pub_own_families : null,
                pub_own_male : null,
                pub_own_female : null,
                pvt_own_families : null,
                pvt_own_male : null,
                pvt_own_female : null,
            }
        }
        else if(table == 'BelPoultry') {
            new_row = {
                poultry : '',
                pub_own_families : null,
                pub_own_male : null,
                pub_own_female : null,
                pvt_own_families : null,
                pvt_own_male : null,
                pvt_own_female : null,
            }
        }
        $scope.bsLivestockPoultryDst.agri_livestock.Table_1[table].push(new_row);
    }

    //remove Fields
    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BelLivestock') {
            $scope.bsLivestockPoultryDst.agri_livestock.Table_1.BelLivestock.splice(index, 1);
        }
        else if(table == 'BelPoultry') {
            $scope.bsLivestockPoultryDst.agri_livestock.Table_1.BelPoultry.splice(index, 1);
        }
    }

    //Save Data
    $scope.saveBsData = function(form) {
        console.log('done');
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': $scope.bsLivestockPoultryDst,
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id' : $scope.user_id,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).then(function successCallback(response) {
                $scope.is_edit = false;
                console.log('response', response);
                if(response.data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $scope.updateEnums();
                    $("#modal-container-239453").modal('show');
                }
                $scope.bsLivestockPoultryDst = init_data;
            })
        }
    }

    //Edit Data
    $scope.editBsData = function(form) {
        $scope.submitted = true;
        $scope.is_edit = true;
        document.getElementById("clearbtn").disabled = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'agri_livestock',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    }
                }),
            }).success(function(data) {
                console.log(data);
//                $scope.bsLivestockPoultryDst = data;
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.agri_livestock.Table_1, function(value, index) {
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsLivestockPoultryDst = data;
                        console.log('editBsData ', $scope.bsLivestockPoultryDst);
                        $scope.getEnumDataFromStart();
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

    //Search Data
    $scope.searchBsData = function(form) {
        document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;

		$scope.is_search = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'agri_livestock',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    }
                }),
            }).success(function(data) {
                console.log(data);
//                $scope.bsLivestockPoultryDst = data;

                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.agri_livestock.Table_1, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsLivestockPoultryDst = data;
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
        $scope.bsLivestockPoultryDst = init_data;
        location.reload();
    }

    //Clear Function
    $scope.clear = function() {
        console.log('done');
        $scope.is_edit = false;
        $scope.bsLivestockPoultryDst = angular.copy(init_data);
        location.reload();
    }

    $scope.enum_data = {
        'agri_livestock': {
            'Table_1': {
                'BelLivestock': [],
                'BelPoultry': [],
            }
        }
    }

    $scope.getEnumDataFromStart = function() {
        var belLivestock_e_index = 0;
        angular.forEach($scope.bsLivestockPoultryDst.agri_livestock.Table_1.BelLivestock, function(value, index, key) {
            if(value.livestock != 'Swine' && value.livestock != 'Sheep' && value.livestock != 'Goat' &&
                value.livestock != 'Cattle' && value.livestock != 'Buffalo') {
                console.log('-----if getEnumDataFrom Start');
                var enum_val = {
                    oldasset: value.livestock,
                    newasset: null,
                    enum_index: belLivestock_e_index,
                    bs_asset_field: 'livestock',
                    dl_tables: {
                        'Table_2': {
                            'BlpAnmLivestock': {
                                dl_asset_field: 'livestock'
                            }
                        }
                    }
                };
                belLivestock_e_index = belLivestock_e_index + 1;
                $scope.enum_data.agri_livestock.Table_1.BelLivestock.push(enum_val);
            }
        })
        console.log('getEnumDataFrom Start', $scope.enum_data);
    }

    $scope.getEnumDataFromEnd = function() {
        console.log($scope.bsLivestockPoultryDst.agri_livestock.Table_1);
        var belLivestock_e_index = 0;
        angular.forEach($scope.bsLivestockPoultryDst.agri_livestock.Table_1.BelLivestock, function(value, key) {
            console.log('-----for', value.livestock);
            console.log('-----for', value.livestock != 'Swine' && value.livestock != 'Sheep' && value.livestock != 'Goat' &&
                value.livestock != 'Cattle' && value.livestock != 'Buffalo');
//            console.log('-----for', value.livestock);
//            console.log('-----for', value.livestock);
//            console.log('-----for', value.livestock);
            if(value.livestock != 'Swine' && value.livestock != 'Sheep' && value.livestock != 'Goat' &&
                value.livestock != 'Cattle' && value.livestock != 'Buffalo') {
                console.log('-----if');
                angular.forEach($scope.enum_data.agri_livestock.Table_1.BelLivestock, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.agri_livestock.Table_1.BelLivestock);
                    if(each_enum.enum_index == belLivestock_e_index) {
                        console.log('-----');
                        $scope.enum_data.agri_livestock.Table_1.BelLivestock[index].newasset = value.livestock;
                    }
                })
                belLivestock_e_index = belLivestock_e_index + 1;
            }
        })
        console.log('getEnumDataFrom End', $scope.enum_data);
    }

    $scope.updateEnums = function() {
        $scope.getEnumDataFromEnd();
        console.log('updateEnums ', $scope.enum_data);
        $http({
            method: 'POST',
            url: '/update_enumirate_dl_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'enum_data': ($scope.enum_data),
                'com_data': {
                    'district': $scope.district,
                    'bs_date': $scope.bs_date,
                    'user_id': $scope.user_id
                },
                'is_edit': $scope.is_edit,
                'sector': 'agri_livestock'
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
            console.log(response);
//            if(response.data == 'False') {
//                alert('False');
//            }
//            else {
//                alert('True');
//            }
        }, function errorCallback(response) {

        });
    }
}]);
