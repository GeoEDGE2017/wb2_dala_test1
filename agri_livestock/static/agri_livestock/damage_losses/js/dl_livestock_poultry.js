//Table 3
var app = angular.module('dlLivestockPoultryApp', [])
app.controller('dlLivestockPoultryController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.organizations = [];
    $scope.selectedOrganization;
    $scope.is_null = false;
    $scope.user_id;
    $scope.is_edit_disable = false;
    $scope.check_search = false;
    $scope.is_search = false;
    $scope.bsCreatedeDate;

    //initialize Data
    var init_data = {
        'agri_livestock': {
            'Table_3': {
                //Tab 1
                'DlpNdaLivestock': [{
                    animals : 'Swine',
                    dead_young_male : null,
                    dead_young_female : null,
                    dead_juvenile_male : null,
                    dead_juvenile_female : null,
                    dead_mature_female : null,
                    dead_mature_male : null,
                    damages : null,
                }, {
                    animals : 'Sheep',
                    dead_young_male : null,
                    dead_young_female : null,
                    dead_juvenile_male : null,
                    dead_juvenile_female : null,
                    dead_mature_female : null,
                    dead_mature_male : null,
                    damages : null,
                }, {
                    animals : 'Goat',
                    dead_young_male : null,
                    dead_young_female : null,
                    dead_juvenile_male : null,
                    dead_juvenile_female : null,
                    dead_mature_female : null,
                    dead_mature_male : null,
                    damages : null,
                }, {
                    animals : 'Cattle',
                    dead_young_male : null,
                    dead_young_female : null,
                    dead_juvenile_male : null,
                    dead_juvenile_female : null,
                    dead_mature_female : null,
                    dead_mature_male : null,
                    damages : null,
                }, {
                    animals : 'Buffalo',
                    dead_young_male : null,
                    dead_young_female : null,
                    dead_juvenile_male : null,
                    dead_juvenile_female : null,
                    dead_mature_female : null,
                    dead_mature_male : null,
                    damages : null,
                }, {
                    animals : 'Total',
                    dead_young_male : null,
                    dead_young_female : null,
                    dead_juvenile_male : null,
                    dead_juvenile_female : null,
                    dead_mature_female : null,
                    dead_mature_male : null,
                    damages : null,
                }],
                'DlpNdaPoultry': [{
                    animals : 'Chicken',
                    dead_young_male : null,
                    dead_young_female : null,
                    dead_juvenile_male : null,
                    dead_juvenile_female : null,
                    dead_mature_female : null,
                    dead_mature_male : null,
                    damages : null,
                }, {
                    animals : 'Ducks',
                    dead_young_male : null,
                    dead_young_female : null,
                    dead_juvenile_male : null,
                    dead_juvenile_female : null,
                    dead_mature_female : null,
                    dead_mature_male : null,
                    damages : null,
                }, {
                    animals : 'Total',
                    dead_young_male : null,
                    dead_young_female : null,
                    dead_juvenile_male : null,
                    dead_juvenile_female : null,
                    dead_mature_female : null,
                    dead_mature_male : null,
                    damages : null,
               }],
                //Tab 2
                'DlpPafLivestock':[{
                    animals : 'Swine',
                    dest_animal_shed : null,
                    dest_feeds : null,
                    dest_medicines : null,
                    dest_tools : null,
                    dest_others : null,
                    dmg_animal_shed : null,
                    dmg_tools : null,
                    dmg_others : null,
                    damages : null,
                }, {
                    animals : 'Sheep',
                    dest_animal_shed : null,
                    dest_feeds : null,
                    dest_medicines : null,
                    dest_tools : null,
                    dest_others : null,
                    dmg_animal_shed : null,
                    dmg_tools : null,
                    dmg_others : null,
                    damages : null,
                }, {
                    animals : 'Goat',
                    dest_animal_shed : null,
                    dest_feeds : null,
                    dest_medicines : null,
                    dest_tools : null,
                    dest_others : null,
                    dmg_animal_shed : null,
                    dmg_tools : null,
                    dmg_others : null,
                    damages : null,
                }, {
                    animals : 'Cattle',
                    dest_animal_shed : null,
                    dest_feeds : null,
                    dest_medicines : null,
                    dest_tools : null,
                    dest_others : null,
                    dmg_animal_shed : null,
                    dmg_tools : null,
                    dmg_others : null,
                    damages : null,
                }, {
                    animals : 'Buffalo',
                    dest_animal_shed : null,
                    dest_feeds : null,
                    dest_medicines : null,
                    dest_tools : null,
                    dest_others : null,
                    dmg_animal_shed : null,
                    dmg_tools : null,
                    dmg_others : null,
                    damages : null,
                }, {
                    animals : 'Total',
                    dest_animal_shed : null,
                    dest_feeds : null,
                    dest_medicines : null,
                    dest_tools : null,
                    dest_others : null,
                    dmg_animal_shed : null,
                    dmg_tools : null,
                    dmg_others : null,
                    damages : null,
                }],
                'DlpPafPoultry':[{
                    animals : 'Chicken',
                    dest_animal_shed : null,
                    dest_feeds : null,
                    dest_medicines : null,
                    dest_tools : null,
                    dest_others : null,
                    dmg_animal_shed : null,
                    dmg_tools : null,
                    dmg_others : null,
                    damages : null,
                }, {
                    animals : 'Ducks',
                    dest_animal_shed : null,
                    dest_feeds : null,
                    dest_medicines : null,
                    dest_tools : null,
                    dest_others : null,
                    dmg_animal_shed : null,
                    dmg_tools : null,
                    dmg_others : null,
                    damages : null,
                }, {
                    animals : 'Total',
                    dest_animal_shed : null,
                    dest_feeds : null,
                    dest_medicines : null,
                    dest_tools : null,
                    dest_others : null,
                    dmg_animal_shed : null,
                    dmg_tools : null,
                    dmg_others : null,
                    damages : null,
                }],
                'DlpStructStructures':[{
                    structures : '1 floor',
                    dest_num : null,
                    dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    damages : null,
                }, {
                    structures : '2-3 floors',
                    dest_num : null,
                    dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    damages : null,
                }, {
                    structures : 'More than 3 floors',
                    dest_num : null,
                    dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    damages : null,
                }, {
                    structures : 'Total',
                    dest_num : null,
                    dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    damages : null,
                }],
                'DlpStructOther':[{
                    other_assets : 'Computers',
                    num_tot_dest : null,
                    num_part_dmg : null,
                    damages : null,
                }, {
                    other_assets : 'Furniture',
                    num_tot_dest : null,
                    num_part_dmg : null,
                    damages : null,
                }, {
                    other_assets : 'Office supplies',
                    num_tot_dest : null,
                    num_part_dmg : null,
                    damages : null,
                }, {
                    other_assets : 'Vehicles',
                    num_tot_dest : null,
                    num_part_dmg : null,
                    damages : null,
                },
//                 {
//                    other_assets : 'Other office equipment',
//                    num_tot_dest : null,
//                    num_part_dmg : null,
//                    damages : null,
//                },
                {
                    other_assets : 'Total',
                    num_tot_dest : null,
                    num_part_dmg : null,
                    damages : null,
                }],
                //Tab 3
                'DlpLosLivestock':[{
                    animals : 'Swine',
                    milk_year_1 : null,
                    milk_year_2 : null,
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                }, {
                    animals : 'Sheep',
                    milk_year_1 : null,
                    milk_year_2 : null,
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                }, {
                    animals : 'Goat',
                    milk_year_1 : null,
                    milk_year_2 : null,
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                }, {
                    animals : 'Cattle',
                    milk_year_1 : null,
                    milk_year_2 : null,
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                }, {
                    animals : 'Buffalo',
                    milk_year_1 : null,
                    milk_year_2 : null,
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                }, {
                    animals : 'Total',
                    milk_year_1 : null,
                    milk_year_2 : null,
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                }],
                'DlpLosPoultry':[{
                    animals : 'Chicken',
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    eggs_year_1 : null,
                    eggs_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                }, {
                    animals : 'Ducks',
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    eggs_year_1 : null,
                    eggs_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                }
                , {
                    animals : 'Total',
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    eggs_year_1 : null,
                    eggs_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                }, {
                    animals : 'Total Production Losses',
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    eggs_year_1 : null,
                    eggs_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                }],
                'DlpLosOther':[{
                    others : 'Cleaning costs',
                    los_year_1 : null,
                    los_year_2 : null,
                }, {
                    others : 'Higher Operating Costs',
                    los_year_1 : null,
                    los_year_2 : null,
                }, {
                    others : 'Other Unexpected Expenses',
                    los_year_1 : null,
                    los_year_2 : null,
                }, {
                    others : 'TOTAL OF LOSSES',
                    los_year_1 : null,
                    los_year_2 : null,
                }],
            }
        }
    }

    $scope.dlLivestockPoultry = angular.copy(init_data);

    //Get Districts and related baseline Data
    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user':$scope.user_id
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }

        if($scope.incident && $scope.district && $scope.selectedOrganization) {
//            console.log('**** changedValue');
//            console.log('incident ', $scope.incident);
//            console.log('district ', $scope.district);
//            console.log('selectedOrganization ', $scope.selectedOrganization);
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BlpAnmLivestock', 'BlpAnmPoultry', 'BlpAstLivestock', 'BlpAstPoultry', 'BlpAstOther',
                        'BlpApyLivestock', 'BlpApyPoultry','BlpAstStructures'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        'organization_id': $scope.selectedOrganization.id,
                    },
                    'table_name': 'Table_2',
                    'sector': 'agri_livestock',
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                console.log('response', response);
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });

                console.log($scope.bs_data);
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
                    console.log('is not null');
                    $http({
                        method: 'POST',
                        url: '/getlatest_bs_date_with_organization',
                        contentType: 'application/json; charset=utf-8',
                        data: angular.toJson({
                            'db_tables': ['BlpAnmLivestock', 'BlpAnmPoultry', 'BlpAstLivestock', 'BlpAstPoultry',
                                'BlpAstOther', 'BlpApyLivestock', 'BlpApyPoultry','BlpAstStructures'],
                            'com_data': {
                                'district': $scope.district.district__id,
                                'incident': $scope.incident,
                                'organization_id': $scope.selectedOrganization.id,
                            },
                            'table_name': 'Table_2',
                            'sector': 'agri_livestock',
                        }),
                        dataType: 'json',
                    }).then(function successCallback(response) {
                        console.log('is not null response', response);
                        var result = response.data;
                        if(result.bs_date == null) {
//                            alert('!');
                            $("#modal-container-239458").modal('show');
                        }
                        else {
                            var bs_date = result.bs_date.replace(/^"(.*)"$/, '$1');
                            $scope.currentBaselineDate = "Latest baseline data as at " + bs_date;
                            $scope.bsCreatedeDate = result.bs_created_date;
                            console.log('bs_date', result.bs_date);
                            console.log('bsCreatedeDate', result.bs_created_date);
                            generateRefencedData();
                            alert('bsCreatedeDate', $scope.bsCreatedeDate);
                        }
                    });
                }
            }, function errorCallback(response) {

            });
        }

        if($scope.incident && $scope.district ) {
            $scope.is_edit_disable = true;
            $scope.check_search = true;
        }
    }

    //save Data
    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: 'POST',
                url:'/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlLivestockPoultry,
                    'com_data': {
                        'district_id':  $scope.district.district__id,
                        'incident_id': $scope.incident,
                        'organizationtype_id': $scope.selectedOrganization.id,
                        'user_id':$scope.user_id
                    },
                    'bs_date': $scope.bsCreatedeDate,
                    'is_edit': $scope.is_edit,
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False') {
                    $scope.is_valid_data = false;
                    $("#modal-container-239454").modal('show');
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
            },
            function errorCallback(response) {
            });
        }
    }

    //fetch Organization
    $scope.fetchOrganization = function() {
        $http({
            method: "POST",
            url: "/fetch_entities",
            data: angular.toJson({
                'district':  $scope.district.district__id,
                'model': 'Organization',
                'sector':'agri_livestock'
            }),
        }).success(function(data) {
            $scope.organizations = data;
        })
    }

    //edit Data
    $scope.editDlData = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;
        document.getElementById("clearbtn").disabled = true;

        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_3',
                    'sector': 'agri_livestock',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        'organizationtype_id': $scope.selectedOrganization.id,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                console.log('editDlData');
                console.log(data);
                var edit_data_not_found = false;
                if (data != null) {
                    angular.forEach(data.agri_livestock.Table_3, function(value, index) {
                        if (value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if (edit_data_not_found != true) {
                        $scope.dlLivestockPoultry = data;
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
    $scope.searchDlData = function(form) {
        document.getElementById("clearbtn").disabled = true;
		document.getElementById("editbtn").disabled = true;
		document.getElementById("subbtn").disabled = true;

		$scope.is_search = true;
        if(form.$valid){
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_3',
                    'sector': 'agri_livestock',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        'organizationtype_id': $scope.selectedOrganization.id,
                    },
                    'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                console.log('searchDlData');
                console.log(data);
                var edit_data_not_found = false;
                if (data != null) {
                    angular.forEach(data.agri_livestock.Table_3, function(value, index) {
//                        console.log(value);
                        if (value.length == 0) {
                            edit_data_not_found = true;
                        }
                    })
                    if (edit_data_not_found != true) {
                        $scope.dlLivestockPoultry = data;
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

    //cancel Data
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.dlLivestockPoultry = init_data;
        location.reload();
    }

    //clear Function
    $scope.clear = function() {
        $scope.is_edit = false;
        $scope.dlLivestockPoultry = angular.copy(init_data);
        location.reload();
    }

    //get fields from baseline data
    function generateRefencedData() {
        data_array = ['BlpAnmLivestock', 'BlpAnmPoultry', 'BlpAstLivestock', 'BlpAstPoultry', 'BlpAstOther', 'BlpApyLivestock', 'BlpApyPoultry'];

        var dl_model1 = null;
        var dl_model2 = null;
        var dl_model3 = null;
        var dl_model4 = null;
        var dl_model5 = null;
        var dl_model6 = null;
        var dl_model7 = null;

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
//            console.log('bs_data', $scope.bs_data[value]);
//            console.log('value', value);

            model_name = value;

            if(model_name) {
//                console.log('name', model_name);

                var particular_value_1 = null;
                var particular_value_2 = null;
                var particular_value_3 = null;
                var particular_value_4 = null;
                var particular_value_5 = null;
                var particular_value_6 = null;
                var particular_value_7 = null;

                if(model_name == 'BlpAnmLivestock') {
                    dl_model1 = 'DlpNdaLivestock';
                    particular_value_1 = 'Total';
                    $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model1] = [];
                }
                if(model_name == 'BlpAnmPoultry') {
                    dl_model2 = 'DlpNdaPoultry';
                    particular_value_2 = 'Total';
                    $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model2] = [];
                }
                if(model_name == 'BlpAstLivestock') {
                    dl_model3 = 'DlpPafLivestock';
                    particular_value_3 = 'Total';
                    $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model3] = [];
                }
                if(model_name == 'BlpAstPoultry') {
                    dl_model4 = 'DlpPafPoultry';
                    particular_value_4 = 'Total';
                    $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model4] = [];
                }
                if(model_name == 'BlpAstOther') {
                    dl_model5 = 'DlpStructOther';
                    particular_value_5 = 'Total';
                    $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model5] = [];
                }
                if(model_name == 'BlpApyLivestock') {
                    dl_model6 = 'DlpLosLivestock';
                    particular_value_6 = 'Total';
                    $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model6] = [];
                }
                if(model_name == 'BlpApyPoultry') {
                    dl_model7 = 'DlpLosPoultry';
                    particular_value_7 = 'Total';
                    $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model7] = [];
                }

                var obj1 = {
                    animals : particular_value_1,
                    dead_young_male : null,
                    dead_young_female : null,
                    dead_juvenile_male : null,
                    dead_juvenile_female : null,
                    dead_mature_female : null,
                    dead_mature_male : null,
                    damages : null,
                };
                var obj2 = {
                    animals : particular_value_2,
                    dead_young_male : null,
                    dead_young_female : null,
                    dead_juvenile_male : null,
                    dead_juvenile_female : null,
                    dead_mature_female : null,
                    dead_mature_male : null,
                    damages : null,
                };
                var obj3 = {
                    animals : particular_value_3,
                    dest_animal_shed : null,
                    dest_feeds : null,
                    dest_medicines : null,
                    dest_tools : null,
                    dest_others : null,
                    dmg_animal_shed : null,
                    dmg_tools : null,
                    dmg_others : null,
                    damages : null,
                };
                var obj4 = {
                    animals : particular_value_4,
                    dest_animal_shed : null,
                    dest_feeds : null,
                    dest_medicines : null,
                    dest_tools : null,
                    dest_others : null,
                    dmg_animal_shed : null,
                    dmg_tools : null,
                    dmg_others : null,
                    damages : null,
                };
                var obj5 = {
                    other_assets : particular_value_5,
                    num_tot_dest : null,
                    num_part_dmg : null,
                    damages : null,
                };
                var obj6 = {
                    animals : particular_value_6,
                    milk_year_1 : null,
                    milk_year_2 : null,
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                };
                var obj7 = {
                    animals : particular_value_7,
                    meat_year_1 : null,
                    meat_year_2 : null,
                    others_year_1 : null,
                    others_year_2 : null,
                    eggs_year_1 : null,
                    eggs_year_2 : null,
                    los_year_1 : null,
                    los_year_2 : null,
                };

                angular.forEach(obj_array, function(value, key) {
                    var obj1 = {
                        animals : value.fields.livestock,
                        dead_young_male : null,
                        dead_young_female : null,
                        dead_juvenile_male : null,
                        dead_juvenile_female : null,
                        dead_mature_female : null,
                        dead_mature_male : null,
                        damages : null,
                    };
                    var obj2 = {
                        animals : value.fields.poultry,
                        dead_young_male : null,
                        dead_young_female : null,
                        dead_juvenile_male : null,
                        dead_juvenile_female : null,
                        dead_mature_female : null,
                        dead_mature_male : null,
                        damages : null,
                    };
                    var obj3 = {
                        animals : value.fields.livestock,
                        dest_animal_shed : null,
                        dest_feeds : null,
                        dest_medicines : null,
                        dest_tools : null,
                        dest_others : null,
                        dmg_animal_shed : null,
                        dmg_tools : null,
                        dmg_others : null,
                        damages : null,
                    };
                    var obj4 = {
                        animals : value.fields.poultry,
                        dest_animal_shed : null,
                        dest_feeds : null,
                        dest_medicines : null,
                        dest_tools : null,
                        dest_others : null,
                        dmg_animal_shed : null,
                        dmg_tools : null,
                        dmg_others : null,
                        damages : null,
                    };
                    var obj5 = {
                        other_assets : value.fields.other_assets,
                        num_tot_dest : null,
                        num_part_dmg : null,
                        damages : null,
                    };
                    var obj6 = {
                        animals : value.fields.livestock,
                        milk_year_1 : null,
                        milk_year_2 : null,
                        meat_year_1 : null,
                        meat_year_2 : null,
                        others_year_1 : null,
                        others_year_2 : null,
                        los_year_1 : null,
                        los_year_2 : null,
                    };
                    var obj7 = {
                        animals : value.fields.poultry,
                        meat_year_1 : null,
                        meat_year_2 : null,
                        others_year_1 : null,
                        others_year_2 : null,
                        eggs_year_1 : null,
                        eggs_year_2 : null,
                        los_year_1 : null,
                        los_year_2 : null,
                    };

                    if(model_name == 'BlpAnmLivestock') {
                        $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model1].push(obj1);
                    }
                    if(model_name == 'BlpAnmPoultry') {
                        $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model2].push(obj2);
                    }
                    if(model_name == 'BlpAstLivestock') {
                        $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model3].push(obj3);
                    }
                    if(model_name == 'BlpAstPoultry') {
                        $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model4].push(obj4);
                    }
                    if(model_name == 'BlpAstOther') {
                        $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model5].push(obj5);
                    }
                    if(model_name == 'BlpApyLivestock') {
                        $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model6].push(obj6);
                    }
                    if(model_name == 'BlpApyPoultry') {
                        $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model7].push(obj7);
                    }
                });

                if(model_name == 'BlpAnmLivestock') {
                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model1].push(obj1);
                }
                if(model_name == 'BlpAnmPoultry') {
                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model2].push(obj2);
                }
                if(model_name == 'BlpAstLivestock') {
                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model3].push(obj3);
                }
                if(model_name == 'BlpAstPoultry') {
                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model4].push(obj4);
                }
                if(model_name == 'BlpAstOther') {
                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model5].push(obj5);
                }
                if(model_name == 'BlpApyLivestock') {
                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model6].push(obj6);
                }
                if(model_name == 'BlpApyPoultry') {
                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model7].push(obj7);
                }
            }
        });
    }

    //Get Calculate data
    $scope.CalTot = function(arr) {
        var finaltotal = 0;
        angular.forEach(arr, function(value, key) {
            if(value.animals != 'Total' && value.structures != 'Total' && value.other_assets != 'Total') {
                finaltotal = finaltotal + value.damages ;
            }
        })
        return finaltotal;
    }

    $scope.calTotaltabOne = function() {
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var grantot = 0;
        var array1 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpNdaLivestock;
        var array2 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpNdaPoultry;

        angular.forEach(array1, function(value, key) {
            if(value.animals != 'Total'){
                finaltotal1 = finaltotal1 + value.damages;
            }
        })

        angular.forEach(array2, function(value, key) {
            if(value.animals != 'Total' ){
                finaltotal2 = finaltotal2 + value.damages;
            }
        })

        grantot = grantot + finaltotal1 + finaltotal2;

        return grantot;
    }

    $scope.calTotalProduction = function() {
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var grantot = 0;
        var array1 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpPafLivestock;
        var array2 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpPafPoultry;

        angular.forEach(array1, function(value, key) {
            if(value.animals != 'Total') {
                finaltotal1 = finaltotal1 + value.damages ;
            }
        })

        angular.forEach(array2, function(value, key) {
            if(value.animals != 'Total' ) {
                finaltotal2 = finaltotal2 + value.damages ;
            }
        })

        grantot = grantot + finaltotal1+ finaltotal2;

        return grantot;
    }

    $scope.calTotalStructures = function() {
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;
        var finaltotal4 = 0;
        var finaltotal5 = 0;
        var finaltotal6 = 0;
        var grantot = 0;

        var array1 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpNdaLivestock;
        var array2 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpNdaPoultry;
        var array3 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpPafPoultry;
        var array4 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpPafLivestock;
        var array4 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpPafLivestock;
        var array4 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpPafLivestock;
        var array5 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpStructStructures;
        var array6 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpStructOther;

        angular.forEach(array1, function(value, key) {
            if(value.animals != 'Total') {
                finaltotal1 = finaltotal1 + value.damages;
            }
        })

        angular.forEach(array2, function(value, key) {
            if(value.animals != 'Total' ) {
                finaltotal2 = finaltotal2 + value.damages;
            }
        })

        angular.forEach(array3, function(value, key) {
            if(value.animals != 'Total') {
                finaltotal3 = finaltotal3 + value.damages;
            }
        })

        angular.forEach(array4, function(value, key) {
            if(value.animals != 'Total' ) {
                finaltotal4 = finaltotal4 + value.damages;
            }
        })

        angular.forEach(array5, function(value, key) {
            if(value.structures != 'Total' ) {
                finaltotal5 = finaltotal5 + value.damages;
            }
        })

        angular.forEach(array6, function(value, key) {
            if(value.other_assets != 'Total' ) {
                finaltotal6 = finaltotal6 + value.damages ;
            }
        })

        grantot = finaltotal1 + finaltotal2 + finaltotal3 + finaltotal4 + finaltotal5 + finaltotal6;

        return grantot;
    }

    //Get Calculate data
    $scope.CalTotlosses = function(arr,property) {
        var finaltotal = 0;
        angular.forEach(arr, function(value, key) {
            if(value.animals != 'Total') {
                finaltotal = finaltotal + value[property];
            }
        })
        return finaltotal;
    }

    $scope.totalProLossesYear1 = function() {
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var grantot = 0;
        var array1 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpLosLivestock;
        var array2 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpLosPoultry;

        angular.forEach(array1, function(value, key) {
            if(value.animals != 'Total'){
                finaltotal1 = finaltotal1 + value.los_year_1;
            }
        })

        angular.forEach(array2, function(value, key) {
            if(value.animals != 'Total'){
                finaltotal2 = finaltotal2 + value.los_year_1;
            }
        })
        grantot = grantot + finaltotal1+ finaltotal2;

        return grantot;
    }

    $scope.totalProLossesYear2 = function() {
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var grantot = 0;
        var array1 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpLosLivestock;
        var array2 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpLosPoultry;

        angular.forEach(array1, function(value, key) {
            if(value.animals != 'Total'){
                finaltotal1 = finaltotal1 + value.los_year_2 ;
            }
        })

        angular.forEach(array2, function(value, key) {
            if(value.animals != 'Total'){
                finaltotal2 = finaltotal2 + value.los_year_2 ;
            }
        })
        grantot = grantot + finaltotal1+ finaltotal2;

        return grantot;
    }

    $scope.totalOtherLossesYear1 = function() {
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;
        var grantot = 0;
        var array1 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpLosLivestock;
        var array2 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpLosPoultry;
        var array3 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpLosOther;

        angular.forEach(array1, function(value, key) {
            if(value.animals != 'Total'){
                finaltotal1 = finaltotal1 + value.los_year_1 ;
            }
        })
        angular.forEach(array2, function(value, key) {
            if(value.animals != 'Total') {
                finaltotal2 = finaltotal2 + value.los_year_1 ;
            }
        })
        angular.forEach(array3, function(value, key) {
            if(value.others !='TOTAL OF LOSSES') {
                finaltotal3 = finaltotal3 + value.los_year_1 ;
            }
        })
        grantot = grantot + finaltotal1+ finaltotal2 +finaltotal3 ;

        return grantot;
    }

    $scope.totalOtherLossesYear2 = function() {
        var finaltotal1 = 0;
        var finaltotal2 = 0;
        var finaltotal3 = 0;
        var grantot = 0;
        var array1 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpLosLivestock;
        var array2 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpLosPoultry;
        var array3 = $scope.dlLivestockPoultry.agri_livestock.Table_3.DlpLosOther;

        angular.forEach(array1, function(value, key) {
            if(value.animals != 'Total'){
                finaltotal1 = finaltotal1 + value.los_year_2;
            }
        })

        angular.forEach(array2, function(value, key) {
            if(value.animals != 'Total'){
                finaltotal2 = finaltotal2 + value.los_year_2;
            }
        })

        angular.forEach(array3, function(value, key) {
            if(value.others !='TOTAL OF LOSSES') {
                finaltotal3 = finaltotal3 + value.los_year_2;
            }
        })

        grantot = grantot + finaltotal1+ finaltotal2 +finaltotal3;

        return grantot;
    }
}]);
