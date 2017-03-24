//Table 3
var app = angular.module('dlFisheriesDistrictApp', ['underscore'])

app.controller('dlFisheriesDistrictController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.fishing_types;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;

    var init_data = {
        'agri_fisheries' : {
            'Table_3': {
                //Tab 1
                'DlfDmgFequipment' :[{
                    assets : 'Boats',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Engines',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Nets',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Traps and Cages',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Gears',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Total',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DlfDmgOequipment' : [{
                    assets : 'Computers',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Furniture',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Office supplies',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Total',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DlfDmgMachinery' : [{
                    assets : 'Vehicles',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Total',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DlfDmgStructures' : [{
                    assets : 'Harbour',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Cold storage',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }, {
                    assets : 'Total',
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                }],
                'DlfDmgPub': [{
                    assets : '1 floor',
                    tot_dest_num : null,
                    tot_dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    total : null,
                }, {
                    assets : '2-3 floors',
                    tot_dest_num : null,
                    tot_dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    total : null,
                }, {
                    assets : 'More than 3 floors',
                    tot_dest_num : null,
                    tot_dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    total : null,
                },  {
                    assets : 'Total',
                    tot_dest_num : null,
                    tot_dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    total : null,
                }],
                'DlfDmgPvt': [{
                    assets : '1 floor',
                    tot_dest_num : null,
                    tot_dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    total : null,
                }, {
                    assets : '2-3 floors',
                    tot_dest_num : null,
                    tot_dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    total : null,
                }, {
                    assets : 'More than 3 floors',
                    tot_dest_num : null,
                    tot_dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    total : null,
                }, {
                    assets : 'Total',
                    tot_dest_num : null,
                    tot_dest_sqm : null,
                    pdmg_num : null,
                    pdmg_roof : null,
                    pdmg_wall : null,
                    pdmg_floor : null,
                    total : null,
                }],
                //Tab 2
                'DlfLosIfisheries': [{
                    assets : 'Percentage Reduction in Value of Yield (%)',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Production losses (Private)',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Cleaning of Debris',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Higher operating expenses',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Other unexpected expenses',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Total',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }],
                'DlfLosRfisheries': [{
                    assets : 'Percentage Reduction in Value of Yield (%)',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Production losses',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Cleaning of Debris',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Higher operating expenses',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Other unexpected expenses',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Total',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }],
                'DlfLosMfisheries': [{
                    assets : 'Percentage Reduction in Value of Yield (%)',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Production losses',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Cleaning of Debris',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Higher operating expenses',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Other unexpected expenses',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }, {
                    assets : 'Total',
                    los_year_1_pub : null,
                    los_year_1_pvt : null,
                    los_year_2_pub : null,
                    los_year_2_pvt : null,
                    los_pub : null,
                    los_pvt : null,
                }],
            }
        }
    }

    $scope.dlFisheriesDistrict = init_data;

    $scope.changedValue=function getBsData(selectedValue) {

        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                console.log(data);
            })
        }

        if($scope.incident && $scope.district ) {
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BifAstFequipment','BifAstOequipment','BifAstMachinery','BifAstStructures','BifAstBuildings'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_2',
                    'sector': 'agri_fisheries'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });

                generateRefencedData();
                console.log($scope.dlFisheriesDistrict);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }

    $scope.getFishingTypes = function(form) {
        $http({
            method: "POST",
            url: "fetch_fishing_types",
            data: angular.toJson(),

        }).success(function(data) {

           $scope.fishing_types =data;
           console.log(data);

        })
    }

    function generateRefencedData() {
        data_array = ['BifAstFequipment','BifAstOequipment','BifAstMachinery','BifAstStructures'];

        var dl_model1 = null;
        var dl_model2 = null;
        var dl_model3 = null;
        var dl_model4 = null;

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;
            var particular_value_2 = null;
            var particular_value_3 = null;
            var particular_value_4 = null;

            if(model_name == 'BifAstFequipment') {
                dl_model1 = 'DlfDmgFequipment';
                particular_value_1 = 'Total';
                $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model1] = [];
            }
            if(model_name == 'BifAstOequipment') {
                dl_model2 = 'DlfDmgOequipment';
                particular_value_2 = 'Total';
                $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model2] = [];
            }
            if(model_name == 'BifAstMachinery') {
                dl_model3 = 'DlfDmgMachinery';
                particular_value_3 = 'Total';
                $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model3] = [];
            }
            if(model_name == 'BifAstStructures') {
                dl_model4 = 'DlfDmgStructures';
                particular_value_4 = 'Total';
                $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model4] = [];
            }

            var obj1 = {
                assets : particular_value_1,
                dmg_dest_pub : null,
                dmg_dst_pvt : null,
                dmg_pdmg_pub : null,
                dmg_pdmg_pvt : null,
                dmg_pub : null,
                dmg_pvt : null,
            };
            var obj2 = {
                assets : particular_value_2,
                dmg_dest_pub : null,
                dmg_dst_pvt : null,
                dmg_pdmg_pub : null,
                dmg_pdmg_pvt : null,
                dmg_pub : null,
                dmg_pvt : null,
            };
            var obj3 = {
                assets : particular_value_3,
                if_avg_replace_cost : null,
                if_avg_repair_cost : null,
                rf_avg_replace_cost : null,
                rf_avg_repair_cost : null,
                mf_avg_replace_cost : null,
                mf_avg_repair_cost : null,
            };
            var obj4 = {
                assets : particular_value_4,
                if_avg_replace_cost : null,
                if_avg_repair_cost : null,
                rf_avg_replace_cost : null,
                rf_avg_repair_cost : null,
                mf_avg_replace_cost : null,
                mf_avg_repair_cost : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    assets : value.fields.assets,
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                };
                var obj2 = {
                    assets : value.fields.assets,
                    dmg_dest_pub : null,
                    dmg_dst_pvt : null,
                    dmg_pdmg_pub : null,
                    dmg_pdmg_pvt : null,
                    dmg_pub : null,
                    dmg_pvt : null,
                };
                var obj3 = {
                    assets : value.fields.assets,
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                };
                var obj4 = {
                    assets : value.fields.assets,
                    if_avg_replace_cost : null,
                    if_avg_repair_cost : null,
                    rf_avg_replace_cost : null,
                    rf_avg_repair_cost : null,
                    mf_avg_replace_cost : null,
                    mf_avg_repair_cost : null,
                };

                if(model_name == 'BifAstFequipment') {
                    $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model1].push(obj1);
                }
                if(model_name == 'BifAstOequipment') {
                    $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model2].push(obj2);
                }
                if(model_name == 'BifAstMachinery') {
                    $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model3].push(obj3);
                }
                if(model_name == 'BifAstStructures') {
                    $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model4].push(obj4);
                }
            });
            if(model_name == 'BifAstFequipment') {
               $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model1].push(obj1);
            }
            if(model_name == 'BifAstOequipment') {
               $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model2].push(obj2);
            }
            if(model_name == 'BifAstMachinery') {
               $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model3].push(obj3);
            }
            if(model_name == 'BifAstStructures') {
               $scope.dlFisheriesDistrict.agri_fisheries.Table_3[dl_model4].push(obj4);
            }
        });
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            alert($scope.fishing_type);
        }
    }

     $scope.CalTot=function(arr,property){
    var finaltotal = 0;

    angular.forEach(arr, function(value, key) {
    if(value.assets != 'Total'){
     console.log(value[property]);
     finaltotal = finaltotal + value[property] ;

     }
    })
     return finaltotal;
    }


     $scope.calGrandPubTotal=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;
    var finaltotal4 = 0;
    var finaltotal5 = 0;
    var finaltotal6 = 0;
    var finaltotal7 = 0;
    var grantot = 0;

    var array1 = $scope.dlFisheriesDistrict.agri_fisheries.Table_3.DlfDmgFequipment;
    var array2 = $scope.dlFisheriesDistrict.agri_fisheries.Table_3.DlfDmgOequipment;
    var array3 = $scope.dlFisheriesDistrict.agri_fisheries.Table_3.DlfDmgMachinery;
    var array4 = $scope.dlFisheriesDistrict.agri_fisheries.Table_3.DlfDmgStructures;
    var array5 = $scope.dlFisheriesDistrict.agri_fisheries.Table_3.DlfDmgPub;




    angular.forEach(array1, function(value, key) {

     finaltotal1 = finaltotal1 + value.dmg_pub ;
    })
    angular.forEach(array2, function(value, key) {

     finaltotal2 = finaltotal2 + value.dmg_pub ;
    })
    angular.forEach(array3, function(value, key) {

     finaltotal3 = finaltotal3 + value.dmg_pub ;
    })
    angular.forEach(array4, function(value, key) {

     finaltotal4 = finaltotal4 + value.dmg_pub ;
    })
    angular.forEach(array5, function(value, key) {

     finaltotal5 = finaltotal5 + value.total ;
    })

    grantot = finaltotal1+ finaltotal3 + finaltotal4 + finaltotal5;
    return grantot;
    }
});
