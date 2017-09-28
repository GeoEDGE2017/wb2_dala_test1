//Table 1
var app = angular.module('bsTursmFcltsFisApp', [])

app.controller('bsTursmFcltsFisController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.is_edit_disable = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;
    $scope.check_search = false;
    $scope.is_search = false;

    var init_data = {
        'tourism': {
            'Table_1': {
                'BsTouBusiness': [
                {
                    business: "Hotels",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                },{
                    business: "Guest Houses",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                },{
                    business: "Travel Agents",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                    },{
                    business: "Tour Guides",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                    },{
                    business: "Adventure Tourism Operators",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                    },{
                    business: "Ayurveda Resorts",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                    }],
                    'BsCultSites': [{
                        site: "Temples",
                        num_bis_private: null,
                        num_bis_public: null,
                        num_emp_male: null,
                        num_empfemale: null,
                    }
                    ],

                    'BsNatFormation': [
                    {
                        site: "Waterfalls",
                        num_bis_private: null,
                        num_bis_public: null,
                        num_emp_male: null,
                        num_empfemale: null,
                    }
                    ]
                 ,
                }
            }
        }

    $scope.bs_tourism_facilities = angular.copy(init_data);

    console.log(init_data);

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

    $scope.insertBussiness = function(table) {
        var new_row;
        if(table == 'BsTouBusiness') {
            new_row = {
                business: '',
                num_bis_private: null,
                num_bis_public: null,
                num_emp_male: null,
                num_empfemale: null,
            }
        }

        if(table == 'BsCultSites'){
            new_row = {
                site: '',
                num_bis_private: null,
                num_bis_public: null,
                num_emp_male: null,
                num_empfemale: null,
            }
        }

        if(table == 'BsNatFormation'){
            new_row = {
                site: '',
                num_bis_private: null,
                num_bis_public: null,
                num_emp_male: null,
                num_empfemale: null,
            }
        }
        $scope.bs_tourism_facilities.tourism.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsTouBusiness') {
            $scope.bs_tourism_facilities.tourism.Table_1.BsTouBusiness.splice(index, 1);
        }
        else if(table == 'BsCultSites'){
            $scope.bs_tourism_facilities.tourism.Table_1.BsCultSites.splice(index, 1);
        }
        else if(table == 'BsNatFormation'){
            $scope.bs_tourism_facilities.tourism.Table_1.BsNatFormation.splice(index, 1);
        }
    }

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bs_tourism_facilities),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id,
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'tourism', //check this line
                }),
            }).success(function(data) {
                $scope.bs_tourism_facilities = init_data;
                $scope.is_edit = false;
                if (data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
            })
        }
        else {
            console.log("invalid data ! You may have entered decimal values for a number");
        }
    }

    //clear the data from table
    $scope.clear = function(){
        console.log("init")
        $scope.is_edit = false;
        $scope.bs_tourism_facilities = angular.copy(init_data);
        location.reload();
    }

    $scope.bsTouDataEdit = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        document.getElementById("clearbtn").disabled = true;
        if(form.$valid) {
            $http({
                method: "POST",
                url: '/bs_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'tourism',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id,
                    }
                }),
            }).success(function(data) {
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.tourism.Table_1, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bs_tourism_facilities = data;
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

    $scope.searchBsData = function(form) {
        document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;
		console.log("test", $scope.district);
		console.log("test", $scope.bs_date);
		$scope.is_search = true;
        if(form.$valid){
            $http({
                method: "POST",
                url: '/bs_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'tourism',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id,
                    }
                }),
            }).success(function(data) {
//                if((data.tourism.Table_1.BsCultSites.length == 0) ||
//                    (data.tourism.Table_1.BsNatFormation.length == 0) ||
//                    (data.tourism.Table_1.BsTouBusiness.length == 0) ) {
//                    $scope.is_edit = false;
//                }
//                else {
//                    $scope.bs_tourism_facilities = data;
//                }
                var edit_data_not_found = false;
                if(data != null) {
                    angular.forEach(data.tourism.Table_1, function(value, index) {
                        console.log(value);
                        if(value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bs_tourism_facilities = data;
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

    $scope.cancelEdit = function(){
        $scope.is_edit = false;
        $scope.bs_tourism_facilities = angular.copy(init_data);
        location.reload();
    }

    $scope.enum_data = {
        'tourism': {
            'Table_1': {
                'BsTouBusiness': [],
                'BS_Table2': [],
                'BS_Table3': [],
                'BS_Table4': [],
            }
        }
    }

    $scope.getEnumDataFromStart = function() {
        var bsTouBusiness_e_index = 0;
        angular.forEach($scope.bs_tourism_facilities.tourism.Table_1.BsTouBusiness, function(value, index, key) {
            if(value.business != 'Asset_01' && value.business != 'Asset_02') {
                var enum_val = {
                    oldasset: value.business,
                    newasset: null,
                    enum_index: bsTouBusiness_e_index,
                    bs_asset_field: 'business',
                    dl_tables: {
                        'dl_interface_table': {
                            'DL_Table1': {
                                dl_asset_field: 'dl_asset_field_name'
                            }
                        }
                    }
                };
                bsTouBusiness_e_index = bsTouBusiness_e_index + 1;
                $scope.enum_data.tourism.Table_1.BsTouBusiness.push(enum_val);
            }
        })
        console.log('getEnumDataFromStart', $scope.enum_data);
    }

    $scope.getEnumDataFromEnd = function() {
        console.log($scope.bs_tourism_facilities.tourism.Table_1);
        var bsTouBusiness_e_index = 0;
        angular.forEach($scope.bs_tourism_facilities.tourism.Table_1.BsTouBusiness, function(value, key) {
            if(value.business != 'Hotels' && value.business != 'Guest Houses' &&
                value.business != 'Travel Agents' && value.business != 'Tour Guides' &&
                value.business != 'Adventure Tourism Operators' && value.business != 'Ayurveda Resorts') {
                angular.forEach($scope.enum_data.tourism.Table_1.BsTouBusiness, function(each_enum, index, key_in) {
                    console.log($scope.enum_data.tourism.Table_1.BsTouBusiness);
                    if(each_enum.enum_index == bsTouBusiness_e_index) {
                        $scope.enum_data.tourism.Table_1.BsTouBusiness[index].newasset = value.business;
                    }
                })
                bsTouBusiness_e_index = bsTouBusiness_e_index + 1;
            }
        })
        console.log('getEnumDataFromEnd', $scope.enum_data);
    }

    $scope.updateEnums = function() {
        $scope.getEnumDataFromEnd();
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
                'sector': 'tourism'
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


