var app = angular.module('mnDLArtisanalMinApp', ['underscore']);

app.controller("mnDLArtisanalMinController", function($scope, $http,$parse, _) {


    $scope.district;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.myTotal = 5;
    $scope.is_edit = false;


    var init_data = {
        'mining': {
            'Table_4': {
                'DlaDmgStructures': [{
                        assets: "Tunnels",
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    },
                    {
                        assets: "Total",
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,

                    },


                ],
                'DlaDmgEquipment': [{
                        assets: "Tools",
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    },
                    {
                        assets: "Total",
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,

                    },


                ],
                'DlaDmgMachinery': [{
                        assets: "Generators",
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    },
                    {
                        assets: "Total",
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,

                    },


                ],
                 'DlaDmgStocks': [
                    {
                        assets: "Total",
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    },
                    {
                        assets: "GRAND TOTAL",
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,

                    },


                ],
                 'DlaLosPlos': [

                 {  type_los:"Nickel",
                avg_per_year: null,
                red_voutput_year1: null,
                red_voutput_year2: null,
                los_year1: null,
                los_year2: null,
                tot_losses: null,
                },
                 {  type_los:"Copper",
                avg_per_year: null,
                red_voutput_year1: null,
                red_voutput_year2: null,
                los_year1: null,
                los_year2: null,
                tot_losses: null,
                },
                  {  type_los:"Gold",
                avg_per_year: null,
                red_voutput_year1: null,
                red_voutput_year2: null,
                los_year1: null,
                los_year2: null,
                tot_losses: null,
                },
                   {  type_los:"Total",
                avg_per_year: null,
                red_voutput_year1: null,
                red_voutput_year2: null,
                los_year1: null,
                los_year2: null,
                tot_losses: null,
                }

                ],
                 'DlaLosOlos': [

                 {  type_los:"Cleaning up of debris",
                avg_per_year: null,
                red_voutput_year1: null,
                red_voutput_year2: null,
                los_year1: null,
                los_year2: null,
                tot_losses: null,
                },
                 {  type_los:"Higher operating costs",
                avg_per_year: null,
                red_voutput_year1: null,
                red_voutput_year2: null,
                los_year1: null,
                los_year2: null,
                tot_losses: null,
                },
                  {  type_los:"Other unexpected expenses",
                avg_per_year: null,
                red_voutput_year1: null,
                red_voutput_year2: null,
                los_year1: null,
                los_year2: null,
                tot_losses: null,
                },
                   {  type_los:"Total",
                avg_per_year: null,
                red_voutput_year1: null,
                red_voutput_year2: null,
                los_year1: null,
                los_year2: null,
                tot_losses: null,
                },
                 {  type_los:"GRAND TOTAL",
                avg_per_year: null,
                red_voutput_year1: null,
                red_voutput_year2: null,
                los_year1: null,
                los_year2: null,
                tot_losses: null,
                }]

            }
        }
    }

    $scope.mnDLArtisanalMin = init_data;


    $scope.insertFirm = function(table) {

        console.log($scope.mnDLArtisanalMin.mining.Table_4[table]);
        var new_row;
        if (table == 'DlaDmgStructures') {
            new_row = {
                assets: "",
                rep_tot_dassets: null,
                repair_pdmg_assets: null,
                tot_damages: null,

            }
        } else if (table == 'DlaDmgEquipment') {
            new_row = {
                assets: "",
                rep_tot_dassets: null,
                repair_pdmg_assets: null,
                tot_damages: null,

            }
        } else if (table == 'DlaDmgMachinery') {
            new_row = {
                assets: "",
                rep_tot_dassets: null,
                repair_pdmg_assets: null,
                tot_damages: null,

            }

        }
        else if (table == 'DlaDmgStocks') {
            new_row = {
                assets: "",
                rep_tot_dassets: null,
                repair_pdmg_assets: null,
                tot_damages: null,

            }

        }

        else if(table == 'DlaLosPlos')
        {
         new_row = {
               type_los:"",
                avg_per_year: null,
                red_voutput_year1: null,
                red_voutput_year2: null,
                los_year1: null,
                los_year2: null,
                tot_losses: null,

            }

        }

        $scope.mnDLArtisanalMin.mining.Table_4[table].length;
        $scope.count = $scope.mnDLArtisanalMin.mining.Table_4[table].length - 1;
        $scope.mnDLArtisanalMin.mining.Table_4[table].splice($scope.count, 0, new_row)
    }
    $scope.removeItem = function removeItem(table, index) {
        if (table == 'DlaDmgStructures') {
            $scope.mnDLArtisanalMin.mining.Table_4.DlaDmgStructures.splice(index, 1);
        } else if (table == 'DlaDmgEquipment') {
            $scope.mnDLArtisanalMin.mining.Table_4.DlaDmgEquipment.splice(index, 1);
        } else if (table == 'DlaDmgMachinery') {
            $scope.mnDLArtisanalMin.mining.Table_4.DlaDmgMachinery.splice(index, 1);
        }
        else if (table == 'DlaDmgStocks') {
            $scope.mnDLArtisanalMin.mining.Table_4.DlaDmgStocks.splice(index, 1);
        }
        else if (table == 'DlaLosPlos') {
            $scope.mnDLArtisanalMin.mining.Table_4.DlaLosPlos.splice(index, 1);
        }
    }

    $scope.changedValue = function getDlData(selectDistrict) {
        if($scope.incident && selectDistrict) {
            fetchDistricts();
        }
    }

    function fetchDistricts() {
        if ($scope.incident) {
            $http({
                method: "POST",
                url: '/fetch_incident_districts',
                data: angular.toJson({
                    'incident': $scope.incident
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.district = "";
                console.log(data);

            })
        }
    }


  $scope.getTotal = function(model, property) {

        var array = $scope.mnDLArtisanalMin.mining.Table_4[model];
        var cumulative = null;
        var sums = _.map(array, function(obj) {
            cumulative += obj[property];
            return cumulative;

        });
        var the_string = model + '_' + property;
        var model = $parse(the_string);
        model.assign($scope, cumulative);


    }

    $scope.getColumnTotal = function(model,property) {
        var array = $scope.mnDLArtisanalMin.mining.Table_4[model];
        var cumulative = null;
        var cumulative_two = null;
        var cumulative_total = null;

        if(angular.equals(model, 'DlaLosOlos')){

        var sums = _.map(array, function(obj) {
            cumulative += obj.los_year1;
            cumulative_two += obj.los_year2;

            cumulative_total = cumulative + cumulative_two;

            return cumulative_total;


        });
        var the_string = model + '_total';
        var model = $parse(the_string);
        model.assign($scope, cumulative_total);

        }


        else{


        var sums = _.map(array, function(obj) {
            cumulative += obj.rep_tot_dassets;
            cumulative_two += obj.repair_pdmg_assets;

            cumulative_total = cumulative + cumulative_two;

            return cumulative_total;


        });
        var the_string = model + '_total';
        var model = $parse(the_string);
        model.assign($scope, cumulative_total);
        }



    }


    $scope.getValue = function (model,property){

$scope.DlaLosPlos_total = null;
$scope.DlaLosPlos_los_year1 = null;
$scope.DlaLosPlos_los_year2 = null;


        var array = $scope.mnDLArtisanalMin.mining.Table_4[model];
        var cumulative_los_year1 = null;
        var cumulative_los_year2 = null;
        var cumulative_total = null;

        var cumulative_year1 = _.map(array, function(obj) {
            cumulative_los_year1 += obj.avg_per_year * obj.red_voutput_year1;
            console.log(cumulative_los_year1);
            return cumulative_los_year1;


        });

        var cumulative_year2 = _.map(array, function(obj) {
            cumulative_los_year2 += obj.avg_per_year * obj.red_voutput_year2;
            console.log(cumulative_los_year1);
            return cumulative_los_year1;


        });

        var cumulative_tot = _.map(array, function(obj) {
            cumulative_total += (obj.avg_per_year * obj.red_voutput_year1 )+ (obj.avg_per_year * obj.red_voutput_year2) ;
            console.log(cumulative_total);
            return cumulative_total;


        });


        var the_string_year_1 = model + '_los_year1';
        var year_1 = $parse(the_string_year_1);
        year_1.assign($scope, cumulative_los_year1);

         var the_string_year_2 = model + '_los_year2';
        var year_2 = $parse(the_string_year_2);
        year_2.assign($scope, cumulative_los_year2);

         var the_string_total = model + '_total';
        var tot = $parse(the_string_total);
        tot.assign($scope, cumulative_total);

}


$scope.$watch(
        function() {

            if (isNaN(
                    $scope.DlaDmgStructures_rep_tot_dassets ||
                    $scope.DlaDmgEquipment_rep_tot_dassets ||
                    $scope.DlaDmgMachinery_rep_tot_dassets ||
                    $scope.DlaDmgVehicles_rep_tot_dassets ||
                    $scope.DlaDmgStocks_rep_tot_dassets ||

                    $scope.DlaDmgStructures_repair_pdmg_assets ||
                    $scope.DlaDmgEquipment_repair_pdmg_assets ||
                    $scope.DlaDmgMachinery_repair_pdmg_assets ||
                    $scope.DlaDmgVehicles_repair_pdmg_assets ||
                    $scope.DlaDmgStocks_repair_pdmg_assets||


                    $scope.DlaLosPlos_los_year1||
                    $scope.DlaLosPlos_los_year2||


                    $scope.DlaLosOlos_los_year1||
                    $scope.DlaLosOlos_los_year2



                )) {

                $scope.DlaDmgStructures_rep_tot_dassets = null;
                $scope.DlaDmgEquipment_rep_tot_dassets = null;
                $scope.DlaDmgMachinery_rep_tot_dassets = null;
                $scope.DlaDmgVehicles_rep_tot_dassets = null;
                $scope.DlaDmgStocks_rep_tot_dassets = null;

                $scope.DlaDmgStructures_repair_pdmg_assets = null;
                $scope.DlaDmgEquipment_repair_pdmg_assets = null;
                $scope.DlaDmgMachinery_repair_pdmg_assets = null;
                $scope.DlaDmgVehicles_repair_pdmg_assets = null;
                $scope.DlaDmgStocks_repair_pdmg_assets = null;

                $scope.DlaLosOlos_los_year1 = null;
                $scope.DlaLosOlos_los_year2 = null;

                $scope.DlaLosPlos_los_year1 = null;
                $scope.DlaLosPlos_los_year2 = null;



            } else {


                $scope.DlaDmg_rep_tot_dassets_grnd = $scope.DlaDmgStructures_rep_tot_dassets + $scope.DlaDmgEquipment_rep_tot_dassets +
                    $scope.DlaDmgMachinery_rep_tot_dassets + $scope.DlaDmgVehicles_rep_tot_dassets + $scope.DlaDmgStocks_rep_tot_dassets;
                console.log($scope.DlaDmg_rep_tot_dassets_grnd);

                $scope.DlaDmg_repair_pdmg_assets_grnd = $scope.DlaDmgStructures_repair_pdmg_assets + $scope.DlaDmgEquipment_repair_pdmg_assets +
                    $scope.DlaDmgMachinery_repair_pdmg_assets + $scope.DlaDmgVehicles_repair_pdmg_assets + $scope.DlaDmgStocks_repair_pdmg_assets;

                $scope.DlaDmg_tot_damages_grnd = $scope.DlaDmg_rep_tot_dassets_grnd + $scope.DlaDmg_repair_pdmg_assets_grnd;


                $scope.DlaLosOlos_los_year1_grnd = $scope.DlaLosOlos_los_year1 + $scope.DlaLosPlos_los_year1;

                $scope.DlaLosOlos_los_year2_grnd = $scope.DlaLosOlos_los_year2 + $scope.DlaLosPlos_los_year2;

                $scope.DlaLosOlos_tot_losses_grnd = $scope.DlaLosOlos_los_year1_grnd + $scope.DlaLosOlos_los_year2_grnd;


            }


        },
        true);


$scope.saveData = function(form) {
    $scope.submitted = true;
    console.log('hi', $scope.mnDLArtisanalMin);
    if(form.$valid) {
        $http({
            method : 'POST',
            url : '/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.mnDLArtisanalMin,
                'com_data': {
                    'district_id': $scope.district.district__id,
                    'incident_id': $scope.incident,
                },
                'is_edit': $scope.is_edit
            }),
            dataType: 'json',
        }).then(function mySucces(response) {
            console.log(response);
            if(response.data == 'False')
                $scope.is_valid_data = false;
            else
                $("#modal-container-239453").modal('show');
            }, function myError(response) {
                //if data sent to server side method unsuccessfull
                console.log(response);
        });
    }
}

    $scope.dlDataEdit = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;

        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':  'Table_4',
                    'sector':'mining',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
               }),
            }).success(function(data) {
                console.log(data);
                $scope.mnDLArtisanalMin = data;
            })
        }
    }

    $scope.cancelEdit = function() {
         $scope.is_edit = false;
         $scope.mnDLArtisanalMin = init_data;
    }
})
