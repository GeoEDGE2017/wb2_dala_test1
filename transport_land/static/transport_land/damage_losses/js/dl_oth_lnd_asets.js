//Table 5
var app = angular.module('dlOthLndAsetsApp', ['underscore'])

app.controller('dlOthLndAsetsController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;

    $scope.dlDate;
    $scope.bs_data={};

    $scope.baselineDate;

    $scope.is_edit = false;
    $scope.is_valid_data = true;

    var init_data = {
        'transport_land' : {
            'Table_5': {
                //Tab 1
                'DlOtherDmgsPvehicles' :[{
                    private_vehicles : 'Cars',
                    num_tot_dest_pvt : null,
                    num_part_dest_pvt : null,
                    tot_damages_pvt : null,
                },{
                    private_vehicles : 'Motorcycles',
                    num_tot_dest_pvt : null,
                    num_part_dest_pvt : null,
                    tot_damages_pvt : null,
                },{
                    private_vehicles : 'Bicycles',
                    num_tot_dest_pvt : null,
                    num_part_dest_pvt : null,
                    tot_damages_pvt : null,
                },{
                    private_vehicles : 'Total',
                    num_tot_dest_pvt : null,
                    num_part_dest_pvt : null,
                    tot_damages_pvt : null,
                },],
                'DlOtherDmgsBcompanies' : [{
                    bus_companies : 'Busses',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    bus_companies : 'Garage',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    bus_companies : 'Equipment',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    bus_companies : 'Bus stations',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    bus_companies : 'Total',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },],
                'DlOtherDmgsTcompanies' : [{
                    taxi_companies : 'Taxis',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    taxi_companies : 'Garage',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    taxi_companies : 'Equipment',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    taxi_companies : 'Total',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },],
                'DlOtherDmgsTrcompanies' : [{
                    truck_companies : 'Trucks',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    truck_companies : 'Garage',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    truck_companies : 'Equipment',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    truck_companies : 'Total',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                }],
                'DlOtherDmgsTucompanies': [{
                    tuk_companies: 'Tuk tuks',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    tuk_companies: 'Garage',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    tuk_companies: 'Equipment',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },{
                    tuk_companies: 'Total',
                    num_tot_dest_pub : null,
                    num_tot_dest_pvt : null,
                    num_part_dest_pub : null,
                    num_part_dest_pvt : null,
                    tot_damages_pub : null,
                    tot_damages_pvt : null,
                },],
                //Tab 2
                'DlOtherLosPub' : [{
                    tr_company : 'Bus',
                    fi_year_1: null,
                    fi_year_2: null,
                    cl_debris_year_1: null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },{
                    tr_company : 'Taxi',
                    fi_year_1 : null,
                    fi_year_2 : null,
                    cl_debris_year_1 : null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },{
                    tr_company : 'Tracks',
                    fi_year_1 : null,
                    fi_year_2 : null,
                    cl_debris_year_1 : null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },{
                    tr_company : 'Tuk tuk',
                    fi_year_1 : null,
                    fi_year_2 : null,
                    cl_debris_year_1 : null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },{
                    tr_company : 'Total',
                    fi_year_1 : null,
                    fi_year_2 : null,
                    cl_debris_year_1 : null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },],
                'DlOtherLosPvt' : [{
                    tr_company : 'Private vehicles',
                    fi_year_1 : null,
                    fi_year_2 : null,
                    cl_debris_year_1 : null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },{
                    tr_company : 'Bus',
                    fi_year_1 : null,
                    fi_year_2 : null,
                    cl_debris_year_1 : null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },{
                    tr_company : 'Taxi',
                    fi_year_1 : null,
                    fi_year_2 : null,
                    cl_debris_year_1 : null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },{
                    tr_company : 'Truck',
                    fi_year_1 : null,
                    fi_year_2 : null,
                    cl_debris_year_1 : null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },{
                    tr_company : 'Tuk tuk',
                    fi_year_1 : null,
                    fi_year_2 : null,
                    cl_debris_year_1 : null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },{
                    tr_company : 'Total',
                    fi_year_1 : null,
                    fi_year_2 : null,
                    cl_debris_year_1 : null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },{
                    tr_company : 'TOTAL LOSSES',
                    fi_year_1 : null,
                    fi_year_2 : null,
                    cl_debris_year_1 : null,
                    cl_debris_year_2 : null,
                    hoc_year_1 : null,
                    hoc_year_2 : null,
                    oue_year_1 : null,
                    oue_year_2 : null,
                    tot_los : null,
                },],
            }
        }
    }

    $scope.dlOthLndAsets = init_data;

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
                    'db_tables': ['BsGtlAstPvehicles','BsGtlAstBcompanies','BsGtlAstTrcompanies','BsGtlAstTucompanies','BsGtlAstTcompanies'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'table_name': 'Table_2',
                    'sector':'transport_land',
                        }),
                  dataType: 'json',

            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                  $scope.bs_data[key] = JSON.parse(value);
                });
                generateRefencedData();
            }, function errorCallback(response) {

            });
        }
    }

    function generateRefencedData() {
        data_array = ['BsGtlAstPvehicles'];

        angular.forEach(data_array, function(value, key) {
            obj_array = $scope.bs_data[value];
            model_name = value;
            var dl_model1 = null;

            var particular_value_1 = null;

            if(model_name == 'BsGtlAstPvehicles') {
                dl_model1 = 'DlOtherDmgsPvehicles';
                particular_value_1 = 'Total';
            }

            $scope.dlOthLndAsets.transport_land.Table_5[dl_model1] = [];

            var obj1 = {
                private_vehicles : particular_value_1 ,
                num_tot_dest_pvt : null,
                num_part_dest_pvt : null,
                tot_damages_pvt : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    private_vehicles : value.fields.private_vehicles,
                    num_tot_dest_pvt : null,
                    num_part_dest_pvt : null,
                    tot_damages_pvt : null,
                };

                if(model_name == 'BsGtlAstPvehicles') {
                   $scope.dlOthLndAsets.transport_land.Table_5[dl_model1].push(obj1);
                }
            });
            $scope.dlOthLndAsets.transport_land.Table_5[dl_model1].push(obj1);
        });
    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
            method: 'POST',
            url:'/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dlOthLndAsets,
                'com_data': {
                    'district':  $scope.district.district__id,
                    'incident': $scope.incident,

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

            console.log(response);
        });
        }
    }

    $scope.dlDataEdit = function(form)
{

   $scope.is_edit = true;
   $scope.submitted = true;

    $http({
    method: "POST",
    url: '/dl_fetch_edit_data',
    data: angular.toJson({
    'table_name':  'Table_5',
    'sector':'transport_land',
    'com_data': {
           'district':  $scope.district.district__id,
            'incident': $scope.incident,
          },
           'is_edit':$scope.is_edit
           }),
    }).success(function(data) {

    console.log(data);


    $scope.dlOthLndAsets = data;
    })

}
    $scope.cancelEdit = function()
{
     $scope.is_edit = false;
     $scope.dlOthLndAsets = init_data;
}
});
