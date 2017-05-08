//Taable 3
var app = angular.module('dmLosOfMinFirmsApp', ['underscore']);

app.controller("DmLosOfMinFirmsAppController", function($scope, $http, $parse, _) {


    $scope.district;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.incident;
    $scope.dl_data = {};
    $scope.submitted = false;
    $scope.sRepTotDassets;
    $scope.sTotDamages;
    $scope.sRepairPdmgAssets;
    $scope.Districts = [];
    $scope.firm_id;
    $scope.selectedFirm;
    $scope.new_firm = {id: null, name: null, ownership: null};
    $scope.ownership;
//    $scope.DloDmg_rep_tot_dassets_grnd = null;
//    $scope.DloDmg_repair_pdmg_assets_grnd = null;
//    $scope.DloDmg_tot_damages_grnd = null;
    $scope.is_valid_data = true;

    var init_data = {
        'mining': {
            'Table_3': {
                'DloNumEmps': [{
                    male: null,
                    female: null,



                }],
                'DloDmgStructures': [{
                        assets: 'Tunnels',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,

                    },
                    {
                        assets: 'Office buildings',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,

                    },
                    {
                        assets: 'Total',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,

                    },
                ],
                'DloDmgEquipment': [{
                        assets: 'Loaders',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    },
                    {
                        assets: 'Computers',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    },
                    {
                        assets: 'Total',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    }
                ],
                'DloDmgMachinery': [{
                        assets: 'Generators',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    },
                    {
                        assets: 'Total',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    }
                ],
                'DloDmgVehicles': [{
                        assets: 'Trucks',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    },
                    {
                        assets: 'Cars',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    }, {
                        assets: 'Total',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    }

                ],
                'DloDmgStocks': [{
                        assets: 'Total',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    }, {
                        assets: 'GRAND TOTAL',
                        rep_tot_dassets: null,
                        repair_pdmg_assets: null,
                        tot_damages: null,
                    }

                ],
                'DloLosPlos': [{
                        type_los: 'Nickel',
                        avg_per_year: null,
                        red_voutput_year1: null,
                        red_voutput_year2: null,
                        los_year1: null,
                        los_year2: null,
                        tot_losses: null,
                    },
                    {
                        type_los: 'Copper',
                        avg_per_year: null,
                        red_voutput_year1: null,
                        red_voutput_year2: null,
                        los_year1: null,
                        los_year2: null,
                        tot_losses: null,

                    },

                    {
                        type_los: 'Gold',
                        avg_per_year: null,
                        red_voutput_year1: null,
                        red_voutput_year2: null,
                        los_year1: null,
                        los_year2: null,
                        tot_losses: null,

                    },

                    {
                        type_los: 'Total',
                        avg_per_year: null,
                        red_voutput_year1: null,
                        red_voutput_year2: null,
                        los_year1: null,
                        los_year2: null,
                        tot_losses: null,
                    }


                ],
                'DloLosOlos': [{
                        type_los: 'Cleaning up of debris',
                        los_year1: null,
                        los_year2: null,
                        tot_losses: null,
                        firm_id: null,

                    },
                    {
                        type_los: 'Higher operating costs',
                        los_year1: null,
                        los_year2: null,
                        tot_losses: null,
                        firm_id: null,


                    }, {
                        type_los: 'Other unexpected expenses',
                        los_year1: null,
                        los_year2: null,
                        tot_losses: null,
                        firm_id: null,


                    },
                    {
                        type_los: 'Total',
                        los_year1: null,
                        los_year2: null,
                        tot_losses: null,
                        firm_id: null,

                    },
                    {
                        type_los: 'GRAND TOTAL',
                        los_year1: null,
                        los_year2: null,
                        tot_losses: null,
                        firm_id: null,

                    }
                ]




            }
        }
    }

    $scope.dmLosOfMinFirms = angular.copy(init_data);

    $scope.getTotal = function(model, property) {
        var array = $scope.dmLosOfMinFirms.mining.Table_3[model];
        var cumulative = null;

        var sums = _.map(array, function(obj) {
            if(obj.assets != 'Total'&&  obj.assets != 'GRAND TOTAL' && obj.type_los !='Total' && obj.type_los !='GRAND TOTAL'){
            cumulative += obj[property];
            return cumulative;
            console.log(cumulative);
            }

        });

        var the_string = model + '_' + property;
        var model = $parse(the_string);
        model.assign($scope, cumulative);
    }

    $scope.getColumnTotal = function(model, property) {
        var array = $scope.dmLosOfMinFirms.mining.Table_3[model];
        var cumulative = null;
        var cumulative_two = null;
        var cumulative_total = null;

        if (angular.equals(model, 'DloLosOlos')) {

            var sums = _.map(array, function(obj) {
            if(obj.assets != 'Total' && obj.type_los !='Total' && obj.type_los !='GRAND TOTAL'){
                cumulative += obj.los_year1;
                cumulative_two += obj.los_year2;

                cumulative_total = cumulative + cumulative_two;

                return cumulative_total;
                }


            });
            var the_string = model + '_total';
            var model = $parse(the_string);
            model.assign($scope, cumulative_total);

        }
        else {
            var sums = _.map(array, function(obj) {
              if(obj.assets != 'Total' &&  obj.assets != 'GRAND TOTAL'){
                cumulative += obj.rep_tot_dassets;
                cumulative_two += obj.repair_pdmg_assets;

                cumulative_total = cumulative + cumulative_two;

                return cumulative_total;
                }


            });
            var the_string = model + '_total';
            var model = $parse(the_string);
            model.assign($scope, cumulative_total);
        }
    }


    $scope.getValue = function(model, property) {

        $scope.DloLosPlos_total = null;
        $scope.DloLosPlos_los_year1 = null;
        $scope.DloLosPlos_los_year2 = null;


        var array = $scope.dmLosOfMinFirms.mining.Table_3[model];
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
            cumulative_total += (obj.avg_per_year * obj.red_voutput_year1) + (obj.avg_per_year * obj.red_voutput_year2);
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

    //get Grand Total using watch
    $scope.$watch(
        function() {

            if (isNaN(
                    $scope.DloDmgStructures_rep_tot_dassets ||
                    $scope.DloDmgEquipment_rep_tot_dassets ||
                    $scope.DloDmgMachinery_rep_tot_dassets ||
                    $scope.DloDmgVehicles_rep_tot_dassets ||
                    $scope.DloDmgStocks_rep_tot_dassets ||

                    $scope.DloDmgStructures_repair_pdmg_assets ||
                    $scope.DloDmgEquipment_repair_pdmg_assets ||
                    $scope.DloDmgMachinery_repair_pdmg_assets ||
                    $scope.DloDmgVehicles_repair_pdmg_assets ||
                    $scope.DloDmgStocks_repair_pdmg_assets ||

                    $scope.DloLosPlos_los_year1 ||
                    $scope.DloLosPlos_los_year2 ||

                    $scope.DloLosOlos_los_year1 ||
                    $scope.DloLosOlos_los_year2


                )) {

                $scope.DloDmgStructures_rep_tot_dassets = null;
                $scope.DloDmgEquipment_rep_tot_dassets = null;
                $scope.DloDmgMachinery_rep_tot_dassets = null;
                $scope.DloDmgVehicles_rep_tot_dassets = null;
                $scope.DloDmgStocks_rep_tot_dassets = null;

                $scope.DloDmgStructures_repair_pdmg_assets = null;
                $scope.DloDmgEquipment_repair_pdmg_assets = null;
                $scope.DloDmgMachinery_repair_pdmg_assets = null;
                $scope.DloDmgVehicles_repair_pdmg_assets = null;
                $scope.DloDmgStocks_repair_pdmg_assets = null;

                $scope.DloLosOlos_los_year1 = null;
                $scope.DloLosOlos_los_year2 = null;

                $scope.DloLosPlos_los_year1 = null;
                $scope.DloLosPlos_los_year2 = null;


            } else {

                $scope.DloDmg_rep_tot_dassets_grnd = $scope.DloDmgStructures_rep_tot_dassets + $scope.DloDmgEquipment_rep_tot_dassets +
                    $scope.DloDmgMachinery_rep_tot_dassets + $scope.DloDmgVehicles_rep_tot_dassets + $scope.DloDmgStocks_rep_tot_dassets;
                console.log($scope.DloDmg_rep_tot_dassets_grnd);

                $scope.DloDmg_repair_pdmg_assets_grnd = $scope.DloDmgStructures_repair_pdmg_assets + $scope.DloDmgEquipment_repair_pdmg_assets +
                    $scope.DloDmgMachinery_repair_pdmg_assets + $scope.DloDmgVehicles_repair_pdmg_assets + $scope.DloDmgStocks_repair_pdmg_assets;

                $scope.DloDmg_tot_damages_grnd = $scope.DloDmg_rep_tot_dassets_grnd + $scope.DloDmg_repair_pdmg_assets_grnd;

                $scope.DloLosOlos_los_year1_grnd = $scope.DloLosOlos_los_year1 + $scope.DloLosPlos_los_year1;

                $scope.DloLosOlos_los_year2_grnd = $scope.DloLosOlos_los_year2 + $scope.DloLosPlos_los_year2;

                $scope.DloLosOlos_tot_losses_grnd = $scope.DloLosOlos_los_year1_grnd + $scope.DloLosOlos_los_year2_grnd;



            }

        },
        true);

    $scope.insertFirm = function(table) {

        console.log($scope.dmLosOfMinFirms.mining.Table_3[table]);
        var new_row;
        if (table == 'DloDmgStructures') {
            new_row = {
                assets: '',
                rep_tot_dassets: null,
                repair_pdmg_assets: null,
                tot_damages: null,

            }
        } else if (table == 'DloDmgEquipment') {
            new_row = {
                assets: '',
                rep_tot_dassets: null,
                repair_pdmg_assets: null,
                tot_damages: null,

            }
        } else if (table == 'DloDmgMachinery') {

            new_row = {
                assets: '',
                rep_tot_dassets: null,
                repair_pdmg_assets: null,
                tot_damages: null,

            }

        } else if (table == 'DloDmgVehicles') {

            new_row = {
                assets: '',
                rep_tot_dassets: null,
                repair_pdmg_assets: null,
                tot_damages: null,

            }

        } else if (table == 'DloDmgStocks') {

            new_row = {
                assets: '',
                rep_tot_dassets: null,
                repair_pdmg_assets: null,
                tot_damages: null,

            }

        } else if (table == 'DloLosPlos') {

            new_row = {
                assets: '',
                rep_tot_dassets: null,
                repair_pdmg_assets: null,
                tot_damages: null,

            }

        }



        $scope.dmLosOfMinFirms.mining.Table_3[table].length;
        $scope.count = $scope.dmLosOfMinFirms.mining.Table_3[table].length - 1;
        $scope.dmLosOfMinFirms.mining.Table_3[table].splice($scope.count, 0, new_row)
    }


    $scope.removeItem = function removeItem(table, index) {
        if (table == 'DloDmgStructures') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloDmgStructures.splice(index, 1);
        } else if (table == 'DloDmgEquipment') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloDmgEquipment.splice(index, 1);
        } else if (table == 'DloDmgMachinery') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloDmgMachinery.splice(index, 1);
        } else if (table == 'DloDmgVehicles') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloDmgVehicles.splice(index, 1);
        } else if (table == 'DloDmgStocks') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloDmgStocks.splice(index, 1);
        } else if (table == 'DloLosPlos') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloLosPlos.splice(index, 1);
        }
    }


    $scope.fetchFirms = function(){

    $scope.new_firm.district = $scope.district;

    $http({
    method: "POST",
    url: "/fetch_entities",
    data: angular.toJson({
    'district':  $scope.district.district__id,
    'model': 'Firm',
    'sector':'mining'
     }),
    }).success(function(data) {

    console.log(data);
    $scope.firms = data;

    })
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

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: 'POST',
                url: '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dmLosOfMinFirms,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                        'firm_id': $scope.selectedFirm.id,
                    },
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
               console.log('test',$scope.dmLosOfMinFirms);

                if (response.data == 'False')
                    {
                        $("#modal-container-239454").modal('show');
                        $scope.is_valid_data = false;
                    }
                else
                    $("#modal-container-239453").modal('show');

            }, function errorCallback(response) {

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
                    'table_name': 'Table_3',
                    'sector':'mining',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        'firm_id': $scope.selectedFirm.id,
                    },
                    'is_edit':$scope.is_edit
               }),
            }).success(function(data) {
                console.log('***');
                console.log(data);
                $scope.dmLosOfMinFirms = data;


            })
        }
    }

    $scope.cancelEdit = function() {
         $scope.is_edit = false;
         $scope.dmLosOfMinFirms = angular.copy(init_data);
    }

    //Clear Function
    $scope.clear = function() {
        console.log("init")
        $scope.is_edit = false;
        $scope.dmLosOfMinFirms = angular.copy(init_data);
    }


})
