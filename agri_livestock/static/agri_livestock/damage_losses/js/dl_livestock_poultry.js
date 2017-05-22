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

//Initialize Data
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
                }, {
                    animals : 'TOTAL',
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
                },{
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
                },{
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
                },{
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
                },{
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
                },{
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
                }, {
                    animals : 'TOTAL',
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
                }, {
                    other_assets : 'Other office equipment',
                    num_tot_dest : null,
                    num_part_dmg : null,
                    damages : null,
                }, {
                    other_assets : 'Total',
                    num_tot_dest : null,
                    num_part_dmg : null,
                    damages : null,
                }, {
                    other_assets : 'TOTAL OF DAMAGES',
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
                }, {
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
                    others : 'Cleaning of Debris',
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
    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }

        if($scope.incident && $scope.district ) {
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BlpAnmLivestock', 'BlpAnmPoultry', 'BlpAstLivestock', 'BlpAstPoultry', 'BlpAstOther', 'BlpApyLivestock', 'BlpApyPoultry'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_2',
                    'sector':'agri_livestock',
                        }),
                  dataType: 'json',


            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });
                var is_null = false;

                angular.forEach($scope.bs_data, function(value, index) {
                    if(value==null) {
                        is_null = true;
                    }
                })

                if(is_null == true) {
                    $("#modal-container-239455").modal('show');
                    console.log('baseline table or tables are empty');
                    console.log($scope.bs_data);
                }
                else{
                generateRefencedData();

                }
            }, function errorCallback(response) {
                console.log('baseline tables data retrieving error');
                console.log(response);
            });
        }
    }

//get fields from baseline data
    function generateRefencedData() {
        data_array = ['BlpAnmLivestock', 'BlpAnmPoultry', 'BlpAstLivestock', 'BlpAstPoultry', 'BlpAstOther', 'BlpApyLivestock', 'BlpApyPoultry'];

//        console.log(data_array);

        var dl_model1 = null;
        var dl_model2 = null;
        var dl_model3 = null;
        var dl_model4 = null;
        var dl_model5 = null;
        var dl_model6 = null;
        var dl_model7 = null;

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            console.log(obj_array);

            model_name = obj_array;

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
//            if(model_name == 'BlpAnmPoultry') {
//               dl_model2 = 'DlpNdaPoultry';
//               particular_value_2 = 'Total';
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model2] = [];
//            }
//            if(model_name == 'BlpAstLivestock') {
//               dl_model2 = 'DlpPafLivestock';
//               particular_value_2 = 'Total';
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model3] = [];
//            }
//            if(model_name == 'BlpAstPoultry') {
//               dl_model2 = 'DlpPafPoultry';
//               particular_value_2 = 'Total';
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model4] = [];
//            }
//            if(model_name == 'BlpAstOther') {
//               dl_model2 = 'DlpStructOther';
//               particular_value_2 = 'Total';
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model5] = [];
//            }
//            if(model_name == 'BlpApyLivestock') {
//               dl_model2 = 'DlpLosLivestock';
//               particular_value_2 = 'Total';
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model6] = [];
//            }
//            if(model_name == 'BlpApyPoultry') {
//               dl_model2 = 'DlpLosPoultry';
//               particular_value_2 = 'Total';
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model7] = [];
//            }

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
//            var obj2 = {
//                animals : particular_value_2,
//                dead_young_male : null,
//                dead_young_female : null,
//                dead_juvenile_male : null,
//                dead_juvenile_female : null,
//                dead_mature_female : null,
//                dead_mature_male : null,
//                damages : null,
//            };
//            var obj3 = {
//                animals : particular_value_3,
//                dest_animal_shed : null,
//                dest_feeds : null,
//                dest_medicines : null,
//                dest_tools : null,
//                dest_others : null,
//                dmg_animal_shed : null,
//                dmg_tools : null,
//                dmg_others : null,
//                damages : null,
//            };
//            var obj4 = {
//                animals : particular_value_4,
//                dest_animal_shed : null,
//                dest_feeds : null,
//                dest_medicines : null,
//                dest_tools : null,
//                dest_others : null,
//                dmg_animal_shed : null,
//                dmg_tools : null,
//                dmg_others : null,
//                damages : null,
//            };
//            var obj5 = {
//                other_assets : particular_value_5,
//                num_tot_dest : null,
//                num_part_dmg : null,
//                damages : null,
//            };
//            var obj6 = {
//                animals : particular_value_6,
//                milk_year_1 : null,
//                milk_year_2 : null,
//                meat_year_1 : null,
//                meat_year_2 : null,
//                others_year_1 : null,
//                others_year_2 : null,
//                los_year_1 : null,
//                los_year_2 : null,
//            };
//            var obj7 = {
//                animals : particular_value_7,
//                meat_year_1 : null,
//                meat_year_2 : null,
//                others_year_1 : null,
//                others_year_2 : null,
//                eggs_year_1 : null,
//                eggs_year_2 : null,
//                los_year_1 : null,
//                los_year_2 : null,
//            };

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
//                var obj2 = {
//                    animals : value.fields.animals,
//                    dead_young_male : null,
//                    dead_young_female : null,
//                    dead_juvenile_male : null,
//                    dead_juvenile_female : null,
//                    dead_mature_female : null,
//                    dead_mature_male : null,
//                    damages : null,
//                };
//                var obj3 = {
//                    animals : value.fields.animals,
//                    dest_animal_shed : null,
//                    dest_feeds : null,
//                    dest_medicines : null,
//                    dest_tools : null,
//                    dest_others : null,
//                    dmg_animal_shed : null,
//                    dmg_tools : null,
//                    dmg_others : null,
//                    damages : null,
//                };
//                var obj4 = {
//                    animals : value.fields.animals,
//                    dest_animal_shed : null,
//                    dest_feeds : null,
//                    dest_medicines : null,
//                    dest_tools : null,
//                    dest_others : null,
//                    dmg_animal_shed : null,
//                    dmg_tools : null,
//                    dmg_others : null,
//                    damages : null,
//                };
//                var obj5 = {
//                    other_assets : value.fields.other_assets,
//                    num_tot_dest : null,
//                    num_part_dmg : null,
//                    damages : null,
//                };
//                var obj6 = {
//                    animals : value.fields.animals,
//                    milk_year_1 : null,
//                    milk_year_2 : null,
//                    meat_year_1 : null,
//                    meat_year_2 : null,
//                    others_year_1 : null,
//                    others_year_2 : null,
//                    los_year_1 : null,
//                    los_year_2 : null,
//                };
//                var obj7 = {
//                    animals : value.fields.animals,
//                    meat_year_1 : null,
//                    meat_year_2 : null,
//                    others_year_1 : null,
//                    others_year_2 : null,
//                    eggs_year_1 : null,
//                    eggs_year_2 : null,
//                    los_year_1 : null,
//                    los_year_2 : null,
//                };

                if(model_name == 'BlpAnmLivestock') {
                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model1].push(obj1);
                }
//                if(model_name == 'BlpAnmPoultry') {
//                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model2].push(obj2);
//                }
//                if(model_name == 'BlpAstLivestock') {
//                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model3].push(obj3);
//                }
//                if(model_name == 'BlpAstPoultry') {
//                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model4].push(obj4);
//                }
//                if(model_name == 'BlpAstOther') {
//                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model5].push(obj5);
//                }
//                if(model_name == 'BlpApyLivestock') {
//                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model6].push(obj6);
//                }
//                if(model_name == 'BlpApyPoultry') {
//                   $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model7].push(obj7);
//                }
            });

            if(model_name == 'BlpAnmLivestock') {
               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model1].push(obj1);
            }
//            if(model_name == 'BlpAnmPoultry') {
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model2].push(obj2);
//            }
//            if(model_name == 'BlpAstLivestock') {
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model3].push(obj3);
//            }
//            if(model_name == 'BlpAstPoultry') {
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model4].push(obj4);
//            }
//            if(model_name == 'BlpAstOther') {
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model5].push(obj5);
//            }
//            if(model_name == 'BlpApyLivestock') {
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model6].push(obj6);
//            }
//            if(model_name == 'BlpApyPoultry') {
//               $scope.dlLivestockPoultry.agri_livestock.Table_3[dl_model7].push(obj7);
//            }
        });
    }

//Save Data
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

                },
                'is_edit' : $scope.is_edit,

            }),
            dataType: 'json',
        }).then(function successCallback(response) {

                 if(response.data == 'False')
             $scope.is_valid_data = false;
                else
             $("#modal-container-239453").modal('show');

        }, function errorCallback(response) {


        });
        }
    }

//fetch Organization
    $scope.fetchOrganization = function(){

    $http({
    method: "POST",
    url: "/fetch_entities",
    data: angular.toJson({
    'district':  $scope.district.district__id,
    'model': 'Organization',
    'sector':'agri_livestock'
     }),
    }).success(function(data) {

//    console.log(data);
    $scope.organizations = data;

    })
}


//Edit Data
    $scope.dlDataEdit = function(){

   $scope.is_edit = true;
   $scope.submitted = true;

    $http({
    method: "POST",
    url: '/dl_fetch_edit_data',
    data: angular.toJson({
    'table_name':  'Table_3',
    'sector':'agri_livestock',
    'com_data': {
           'district':  $scope.district.district__id,
            'incident': $scope.incident,
          },
           'is_edit':$scope.is_edit
           }),
    }).success(function(data) {

//    console.log(data);
    $scope.dlLivestockPoultry = data;
    })

}

//Cancel Data
    $scope.cancelEdit = function(){
     $scope.is_edit = false;
     $scope.dlLivestockPoultry = init_data;
}

//Clear Function
    $scope.clear = function() {
//        console.log('done');
        $scope.is_edit = false;
        $scope.dlLivestockPoultry = angular.copy(init_data);


    }

}]);
