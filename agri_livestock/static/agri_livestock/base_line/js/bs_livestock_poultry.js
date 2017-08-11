//Table 2
var app = angular.module('bsLivestockPoultryApp', [])

app.controller('bsLivestockPoultryController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.bs_date;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.selectedOrganization;
    $scope.editedOrganizationName;
    $scope.new_organization = {id: null, name: null, ownership: null, district_id: null};
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.organizations = [];
    $scope.user_id;
    $scope.is_edit_disable = false;

    //Initialize data
    var init_data = {
        'agri_livestock': {
            'Table_2': {
                //Tab 1
                'BlpAnmLivestock': [{
                    livestock : 'Swine',
                    young_male : null,
                    young_female : null,
                    juvenile_male : null,
                    juvenile_female : null,
                    mature_male : null,
                    mature_female : null,
                    avg_val_young_male : null,
                    avg_val_young_female : null,
                    avg_val_juvenile_female : null,
                    avg_val_juvenile_male : null,
                    avg_val_mature_male : null,
                    avg_val_mature_female : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Sheep',
                    young_male : null,
                    young_female : null,
                    juvenile_male : null,
                    juvenile_female : null,
                    mature_male : null,
                    mature_female : null,
                    avg_val_young_male : null,
                    avg_val_young_female : null,
                    avg_val_juvenile_female : null,
                    avg_val_juvenile_male : null,
                    avg_val_mature_male : null,
                    avg_val_mature_female : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Goat',
                    young_male : null,
                    young_female : null,
                    juvenile_male : null,
                    juvenile_female : null,
                    mature_male : null,
                    mature_female : null,
                    avg_val_young_male : null,
                    avg_val_young_female : null,
                    avg_val_juvenile_female : null,
                    avg_val_juvenile_male : null,
                    avg_val_mature_male : null,
                    avg_val_mature_female : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Cattle',
                    young_male : null,
                    young_female : null,
                    juvenile_male : null,
                    juvenile_female : null,
                    mature_male : null,
                    mature_female : null,
                    avg_val_young_male : null,
                    avg_val_young_female : null,
                    avg_val_juvenile_female : null,
                    avg_val_juvenile_male : null,
                    avg_val_mature_male : null,
                    avg_val_mature_female : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Buffalo',
                    young_male : null,
                    young_female : null,
                    juvenile_male : null,
                    juvenile_female : null,
                    mature_male : null,
                    mature_female : null,
                    avg_val_young_male : null,
                    avg_val_young_female : null,
                    avg_val_juvenile_female : null,
                    avg_val_juvenile_male : null,
                    avg_val_mature_male : null,
                    avg_val_mature_female : null,
                    organization_id:$scope.selectedOrganization,
                }],
                'BlpAnmPoultry': [{
                    poultry : 'Chicken',
                    young_male : null,
                    young_female : null,
                    juvenile_male : null,
                    juvenile_female : null,
                    mature_male : null,
                    mature_female : null,
                    avg_val_young_male : null,
                    avg_val_young_female : null,
                    avg_val_juvenile_female : null,
                    avg_val_juvenile_male : null,
                    avg_val_mature_male : null,
                    avg_val_mature_female : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    poultry : 'Ducks',
                    young_male : null,
                    young_female : null,
                    juvenile_male : null,
                    juvenile_female : null,
                    mature_male : null,
                    mature_female : null,
                    avg_val_young_male : null,
                    avg_val_young_female : null,
                    avg_val_juvenile_female : null,
                    avg_val_juvenile_male : null,
                    avg_val_mature_male : null,
                    avg_val_mature_female : null,
                    organization_id:$scope.selectedOrganization,
                }],
                //Tab 2
                'BlpAstLivestock': [{
                    livestock : 'Swine',
                    avg_replacec_anm_shed : null,
                    avg_replacec_feeds : null,
                    avg_replacec_medicines : null,
                    avg_replacec_tools : null,
                    avg_replacec_others : null,
                    avg_repairc_anm_shed : null,
                    avg_repairc_tools : null,
                    avg_repairc_others : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Sheep',
                    avg_replacec_anm_shed : null,
                    avg_replacec_feeds : null,
                    avg_replacec_medicines : null,
                    avg_replacec_tools : null,
                    avg_replacec_others : null,
                    avg_repairc_anm_shed : null,
                    avg_repairc_tools : null,
                    avg_repairc_others : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Goat',
                    avg_replacec_anm_shed : null,
                    avg_replacec_feeds : null,
                    avg_replacec_medicines : null,
                    avg_replacec_tools : null,
                    avg_replacec_others : null,
                    avg_repairc_anm_shed : null,
                    avg_repairc_tools : null,
                    avg_repairc_others : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Cattle',
                    avg_replacec_anm_shed : null,
                    avg_replacec_feeds : null,
                    avg_replacec_medicines : null,
                    avg_replacec_tools : null,
                    avg_replacec_others : null,
                    avg_repairc_anm_shed : null,
                    avg_repairc_tools : null,
                    avg_repairc_others : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Buffalo',
                    avg_replacec_anm_shed : null,
                    avg_replacec_feeds : null,
                    avg_replacec_medicines : null,
                    avg_replacec_tools : null,
                    avg_replacec_others : null,
                    avg_repairc_anm_shed : null,
                    avg_repairc_tools : null,
                    avg_repairc_others : null,
                    organization_id:$scope.selectedOrganization,
                }],
                'BlpAstPoultry': [{
                    poultry : 'Chicken',
                    avg_replacec_anm_shed : null,
                    avg_replacec_feeds : null,
                    avg_replacec_medicines : null,
                    avg_replacec_tools : null,
                    avg_replacec_others : null,
                    avg_repairc_anm_shed : null,
                    avg_repairc_tools : null,
                    avg_repairc_others : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    poultry : 'Ducks',
                    avg_replacec_anm_shed : null,
                    avg_replacec_feeds : null,
                    avg_replacec_medicines : null,
                    avg_replacec_tools : null,
                    avg_replacec_others : null,
                    avg_repairc_anm_shed : null,
                    avg_repairc_tools : null,
                    avg_repairc_others : null,
                    organization_id:$scope.selectedOrganization,
                }],
                'BlpAstStructures': [{
                    structures : '1 floor',
                    avg_replace_cost : null,
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    structures : '2-3 floors',
                    avg_replace_cost : null,
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    structures : 'More than 3 floors',
                    avg_replace_cost : null,
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                    organization_id:$scope.selectedOrganization,
                }],
                'BlpAstOther': [{
                    other_assets : 'Computers',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                    created_user : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    other_assets : 'Furniture',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                    created_user : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    other_assets : 'Office supplies',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                    created_user : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    other_assets : 'Vehicles',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                    created_user : null,
                    organization_id:$scope.selectedOrganization,
                },
                {
                    other_assets : 'Other Office equipment',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                    created_user : null,
                    organization_id:$scope.selectedOrganization,
                },
                ],
                //Tab 3
                'BlpApyLivestock': [{
                    livestock : 'Swine',
                    milk : null,
                    meat : null,
                    eggs : null,
                    others : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Sheep',
                    milk : null,
                    meat : null,
                    eggs : null,
                    others : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Goat',
                    milk : null,
                    meat : null,
                    eggs : null,
                    others : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Cattle',
                    milk : null,
                    meat : null,
                    eggs : null,
                    others : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    livestock : 'Buffalo',
                    milk : null,
                    meat : null,
                    eggs : null,
                    others : null,
                    organization_id:$scope.selectedOrganization,
                }],
                'BlpApyPoultry': [{
                    poultry : 'Chicken',
                    meat : null,
                    eggs : null,
                    others : null,
                    organization_id:$scope.selectedOrganization,
                }, {
                    poultry : 'Ducks',
                    meat : null,
                    eggs : null,
                    others : null,
                    organization_id:$scope.selectedOrganization,
                }],
            }
        }
    }

    $scope.bsLivestockPoultry = angular.copy(init_data);

     //Disable Edit Button
    $scope.changeDis = function changeDis() {
        if($scope.district && $scope.bs_date) {
            $scope.is_edit_disable = true;
        }
        else{
            $scope.is_edit_disable = false;
        }
    }

    //Add Enumerate Fileds
    $scope.insertAsset = function(table) {
        console.log($scope.bsLivestockPoultry.agri_livestock.Table_2[table]);
        var new_row;
        if(table == 'BlpAnmLivestock') {
            new_row = {
                livestock : '',
                young_male : null,
                young_female : null,
                juvenile_male : null,
                juvenile_female : null,
                mature_male : null,
                mature_female : null,
                avg_val_young_male : null,
                avg_val_young_female : null,
                avg_val_juvenile_female : null,
                avg_val_juvenile_male : null,
                avg_val_mature_male : null,
                avg_val_mature_female : null,
            }
        }
        else if(table == 'BlpAnmPoultry') {
            new_row = {
                poultry : '',
                young_male : null,
                young_female : null,
                juvenile_male : null,
                juvenile_female : null,
                mature_male : null,
                mature_female : null,
                avg_val_young_male : null,
                avg_val_young_female : null,
                avg_val_juvenile_female : null,
                avg_val_juvenile_male : null,
                avg_val_mature_male : null,
                avg_val_mature_female : null,
            }
        }
        else if(table == 'BlpAstLivestock') {
            new_row = {
                livestock : '',
                avg_replacec_anm_shed : null,
                avg_replacec_feeds : null,
                avg_replacec_medicines : null,
                avg_replacec_tools : null,
                avg_replacec_others : null,
                avg_repairc_anm_shed : null,
                avg_repairc_tools : null,
                avg_repairc_others : null,
            }
        }
        else if(table == 'BlpAstPoultry') {
            new_row = {
                poultry : '',
                avg_replacec_anm_shed : null,
                avg_replacec_feeds : null,
                avg_replacec_medicines : null,
                avg_replacec_tools : null,
                avg_replacec_others : null,
                avg_repairc_anm_shed : null,
                avg_repairc_tools : null,
                avg_repairc_others : null,
            }
        }
        else if(table == 'BlpAstOther') {
            new_row = {
                other_assets : '',
                avg_replace_cost : null,
                avg_repair_cost : null,
                created_user : null,
            }
        }
        else if(table == 'BlpApyLivestock') {
            new_row = {
                livestock : '',
                milk : null,
                meat : null,
                eggs : null,
                others : null,
            }
        }
        else if(table == 'BlpApyPoultry') {
            new_row = {
                poultry : '',
                meat : null,
                eggs : null,
                others : null,
            }
        }

        $scope.bsLivestockPoultry.agri_livestock.Table_2[table].push(new_row);
    }

    //Remove Enumerate Fileds
    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BlpAnmLivestock') {
            $scope.bsLivestockPoultry.agri_livestock.Table_2.BlpAnmLivestock.splice(index, 1);
        }
        else if(table == 'BlpAnmPoultry') {
            $scope.bsLivestockPoultry.agri_livestock.Table_2.BlpAnmPoultry.splice(index, 1);
        }
        else if(table == 'BlpAstLivestock') {
            $scope.bsLivestockPoultry.agri_livestock.Table_2.BlpAstLivestock.splice(index, 1);
        }
        else if(table == 'BlpAstPoultry') {
            $scope.bsLivestockPoultry.agri_livestock.Table_2.BlpAstPoultry.splice(index, 1);
        }
        else if(table == 'BlpAstOther') {
            $scope.bsLivestockPoultry.agri_livestock.Table_2.BlpAstOther.splice(index, 1);
        }
        else if(table == 'BlpApyLivestock') {
            $scope.bsLivestockPoultry.agri_livestock.Table_2.BlpApyLivestock.splice(index, 1);
        }
        else if(table == 'BlpApyPoultry') {
            $scope.bsLivestockPoultry.agri_livestock.Table_2.BlpApyPoultry.splice(index, 1);
        }
    }

    //Save data
    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        var array = $scope.bsLivestockPoultry.agri_livestock.Table_2;
        var details = _.map(array, function(model_array) {
            _.map(model_array, function(model) {
                model.organization_id = $scope.selectedOrganization.id;
            });
        })
        if(form.$valid){
            $http({
                method: 'POST',
                url: '/bs_save_data_with_organization',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.bsLivestockPoultry,
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'organization_id': $scope.selectedOrganization.id,
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

    //Save Organization
    $scope.saveOrganization = function(form) {
        $scope.new_organization.district_id = $scope.district;
        if($scope.selectedOrganization) {
            $scope.new_organization.id = $scope.selectedOrganization.id;
            $scope.new_organization.name = $scope.selectedOrganization.name;
            $scope.new_organization.ownership = $scope.selectedOrganization.ownership;
        }
        $http({
            method: "POST",
            url: "/add_entity",
            data: angular.toJson({
                'model_fields': $scope.new_organization,
                'is_edit' :$scope.is_edit,
                'model': 'Organization',
                'sector': 'agri_livestock',
            }),
        }).success(function(data) {
            console.log(data);
            if(data) {
                $scope.organizations.push($scope.new_organization);
                $scope.new_organization.id = data;
                console.log($scope.new_organization);
            }
            $("#modal-container-469842").modal('hide');
        })
    }

    $scope.saveEditOrganization = function(form) {
        console.log($scope.editedOrganizationName);
        if(!angular.isUndefined($scope.editedOrganizationName) || $scope.editedOrganizationName === null) {
            console.log('2');
            $http({
                method: "POST",
                url: "/edit_organization",
                data: angular.toJson({
                    'firm_name': $scope.editedOrganizationName,
                    'firm_id' : $scope.selectedOrganization.id,
                    'ownership': $scope.ownership,
                    'user_id': $scope.user_id,
                }),
            }).success(function(data) {
                console.log(data);
                $scope.editedOrganizationName = null;
                $scope.fetchOrganization();
                $("#modal-container-0002").modal('hide');
            })
        }
        else {
            console.log('@@@');
        }
    }

    //Fetch Organizations
    $scope.fetchOrganization = function() {
        $scope.new_organization.district_id = $scope.district;
        $http({
            method: "POST",
            url: "/fetch_entities",
            data: angular.toJson({
                'district':  $scope.district,
                'model': 'Organization',
                'sector':'agri_livestock'
            }),
        }).success(function(data) {
            console.log(data);
            $scope.organizations = data;
        })
    }

    $scope.getBsData = function() {
        if($scope.district && $scope.bs_date) {
            $http({
                method: 'POST',
                url: '/bs_get_data_mock_for_bs',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BelLivestock','BelPoultry'],
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    },
                    'table_name': 'Table_1',
                    'sector':'agri_livestock',
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });
                console.log($scope.bs_data);
                generateRefencedData();
            }, function errorCallback(response) {
            });
        }
    }

    function generateRefencedData() {
        data_array = ['BelLivestock', 'BelPoultry'];

        var bs_model1 = null;
        var bs_model2 = null;
        var bs_model3 = null;
        var bs_model4 = null;
        var bs_model5 = null;
        var bs_model6 = null;

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;

            if(model_name == 'BelLivestock') {
                bs_model1 = 'BlpAnmLivestock';
                bs_model3 = 'BlpAstLivestock';
                bs_model5 = 'BlpApyLivestock';
                $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model1] = [];
                $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model3] = [];
                $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model5] = [];
            }
            if(model_name == 'BelPoultry') {
                bs_model2 = 'BlpAnmPoultry';
                bs_model4 = 'BlpAstPoultry';
                bs_model6 = 'BlpApyPoultry';
                $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model2] = [];
                $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model4] = [];
                $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model6] = [];
            }

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    livestock : value.fields.livestock,
                    young_male : null,
                    young_female : null,
                    juvenile_male : null,
                    juvenile_female : null,
                    mature_male : null,
                    mature_female : null,
                    avg_val_young_male : null,
                    avg_val_young_female : null,
                    avg_val_juvenile_female : null,
                    avg_val_juvenile_male : null,
                    avg_val_mature_male : null,
                    avg_val_mature_female : null,
                    organization_id : null,
                };
                var obj2 = {
                    poultry : value.fields.poultry,
                    young_male : null,
                    young_female : null,
                    juvenile_male : null,
                    juvenile_female : null,
                    mature_male : null,
                    mature_female : null,
                    avg_val_young_male : null,
                    avg_val_young_female : null,
                    avg_val_juvenile_female : null,
                    avg_val_juvenile_male : null,
                    avg_val_mature_male : null,
                    avg_val_mature_female : null,
                };

                var obj3 = {
                    livestock : value.fields.livestock,
                    avg_replacec_anm_shed : null,
                    avg_replacec_feeds : null,
                    avg_replacec_medicines : null,
                    avg_replacec_tools : null,
                    avg_replacec_others : null,
                    avg_repairc_anm_shed : null,
                    avg_repairc_tools : null,
                    avg_repairc_others : null,
                };
                var obj4 = {
                    poultry : value.fields.poultry,
                    avg_replacec_anm_shed : null,
                    avg_replacec_feeds : null,
                    avg_replacec_medicines : null,
                    avg_replacec_tools : null,
                    avg_replacec_others : null,
                    avg_repairc_anm_shed : null,
                    avg_repairc_tools : null,
                    avg_repairc_others : null,
                };

                var obj5 = {
                    livestock : value.fields.livestock,
                    milk : null,
                    meat : null,
                    eggs : null,
                    others : null,
                };
                var obj6 = {
                    poultry : value.fields.poultry,
                    meat : null,
                    eggs : null,
                    others : null,
                };

                if(model_name == 'BelLivestock') {
                    console.log(model_name);
                    $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model1].push(obj1);
                    $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model3].push(obj3);
                    $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model5].push(obj5);
                }
                if(model_name == 'BelPoultry') {
                    console.log(model_name);
                    $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model2].push(obj2);
                    $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model4].push(obj4);
                    $scope.bsLivestockPoultry.agri_livestock.Table_2[bs_model6].push(obj6);
                }
            });
        });
    }

    //Edit Data
    $scope.bsHsDataEdit = function(form) {
        $scope.submitted = true;
        $scope.is_edit = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_livestock_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_2',
                    'sector': 'agri_livestock',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'organization_id': $scope.selectedOrganization.id,
                    }
                }),
            }).success(function(data) {
                console.log(data);
//                $scope.bsLivestockPoultry = data;

                var edit_data_not_found = false;
                if(data != null) {
                    console.log('----if');
                    angular.forEach(data.agri_livestock.Table_2, function(value, index) {
                        console.log('----forEach');
                        console.log(value);
                        if(value.length == 0) {
                            console.log('----');
                            edit_data_not_found = true;
                        }
                    })
                    if(edit_data_not_found != true) {
                        $scope.bsLivestockPoultry = data;
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

    //Cancel Edit
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bsLivestockPoultry = init_data;
    }

    //Clear Function
    $scope.clear = function() {
        console.log('done');
        $scope.is_edit = false;
        $scope.bsLivestockPoultry = angular.copy(init_data);
    }
}]);
