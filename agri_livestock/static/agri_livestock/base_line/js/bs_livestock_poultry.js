//Table 2
var app = angular.module('bsLivestockPoultryApp', [])

app.controller('bsLivestockPoultryController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;

    $scope.submitted = false;
    $scope.is_valid_data = true;

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
                }],
                'BlpAstStructures': [{
                    structures : '1 floor',
                    avg_replace_cost : null,
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                }, {
                    structures : '2-3 floors',
                    avg_replace_cost : null,
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                }, {
                    structures : 'More than 3 floors',
                    avg_replace_cost : null,
                    avg_repair_roof : null,
                    avg_repair_wall : null,
                    avg_repair_floor : null,
                }],
                'BlpAstOther': [{
                    other_assets : 'Computers',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                    created_user : null,
                }, {
                    other_assets : 'Furniture',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                    created_user : null,
                }, {
                    other_assets : 'Office supplies',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                    created_user : null,
                }, {
                    other_assets : 'Vehicles',
                    avg_replace_cost : null,
                    avg_repair_cost : null,
                    created_user : null,
                }],
                //Tab 3
                'BlpApyLivestock': [{
                    livestock : 'Swine',
                    milk : null,
                    meat : null,
                    eggs : null,
                    others : null,
                }, {
                    livestock : 'Sheep',
                    milk : null,
                    meat : null,
                    eggs : null,
                    others : null,
                }, {
                    livestock : 'Goat',
                    milk : null,
                    meat : null,
                    eggs : null,
                    others : null,
                }, {
                    livestock : 'Cattle',
                    milk : null,
                    meat : null,
                    eggs : null,
                    others : null,
                }, {
                    livestock : 'Buffalo',
                    milk : null,
                    meat : null,
                    eggs : null,
                    others : null,
                }],
                'BlpApyPoultry': [{
                    poultry : 'Chicken',
                    meat : null,
                    eggs : null,
                    others : null,
                }, {
                    poultry : 'Ducks',
                    meat : null,
                    eggs : null,
                    others : null,
                }],
            }
        }
    }

    $scope.bsLivestockPoultry = init_data;

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

    $scope.saveBsData = function(form) {
       $scope.submitted = true;
        if (form.$valid) {
            console.log($scope.bsLivestockPoultry);
        }
    }
}]);
