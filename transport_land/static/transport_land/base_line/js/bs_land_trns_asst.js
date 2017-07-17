//Table 2
var app = angular.module('bsLandTrnsAsstApp', [])

app.controller('BsLandTrnsAsstController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.is_edit_disable = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;

    //initialize data
    var init_data = {
        'transport_land': {
            'Table_2': {
                'BsGtlAstPvehicles': [{
                    private_vehicles: 'Cars',
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    private_vehicles: 'Motorcycles',
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    private_vehicles: 'Bicycles',
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }],
                'BsGtlAstBcompanies': [{
                    bus_companies: 'Busses',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    bus_companies: 'Garage',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    bus_companies: 'Equipment',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    bus_companies: 'Bus Stations',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },],
                'BsGtlAstTcompanies': [{
                    taxi_companies: 'Taxis',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    taxi_companies: 'Garage',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    taxi_companies: 'Equipment',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                }],
                'BsGtlAstTrcompanies': [{
                    truck_companies: 'Trucks',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    truck_companies: 'Garage',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    truck_companies: 'Equipment',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },],
                'BsGtlAstTucompanies': [{
                    tuk_companies: 'Tuk tuks',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    tuk_companies: 'Garage',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },{
                    tuk_companies: 'Equipment',
                    public: null,
                    private: null,
                    avg_replace_cost: null,
                    avg_repair_cost: null,
                },]
            }
        }
    }

    $scope.bsLandTrnsAsst = angular.copy(init_data);

    //disable Edit Button
    $scope.changeDis = function changeDis(){
        if($scope.district && $scope.bs_date){
            $scope.is_edit_disable = true;
        }
        else{
            $scope.is_edit_disable = false;
        }
    }


    //add enumerate fields
    $scope.insertAsset = function(table) {
        console.log($scope.bsLandTrnsAsst.transport_land.Table_2[table]);
        var new_row;
        if(table == 'BsGtlAstPvehicles') {
            new_row = {
                type_bridges: '',
                avg_replace_2_lanes: null,
                avg_replace_multi_lanes: null,
                avg_repair_2_lanes: null,
                avg_repair_multi_lanes: null,
            }
        }
        $scope.bsLandTrnsAsst.transport_land.Table_2[table].push(new_row);
    }

    //remove enumerate fields
    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BsGtlAstPvehicles') {
            $scope.bsLandTrnsAsst.transport_land.Table_2.BsGtlAstPvehicles.splice(index, 1);
        }
    }

    //save data
    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsLandTrnsAsst),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id
                    },
                    'is_edit': $scope.is_edit,
                    'sector':'bsLandTrnsAsst'
                }),
            }).success(function(data) {
                $scope.bsLandTrnsAsst = init_data;
                $scope.is_edit = false;
                if (data == 'False')
                    {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else
                    $("#modal-container-239453").modal('show');
            })
        }
    }

    //edit data
    $scope.bsHsDataEdit = function(form){
        $scope.submitted = true;
        $scope.is_edit = true;
        $http({
        method: "POST",
        url: "/bs_fetch_edit_data",
        data: angular.toJson({
        'table_name': 'Table_2',
        'sector': 'transport_land',
        'com_data': {
            'district': $scope.district,
            'bs_date': $scope.bs_date,
            'user_id': $scope.user_id
            }
        }),
        }).success(function(data) {
            console.log(data);
            $scope.bsLandTrnsAsst = data;
        })
    }

    //cancel edit
    $scope.cancelEdit = function(){
        $scope.is_edit = false;
        $scope.bsLandTrnsAsst = init_data;
    }

    //clear Function
    $scope.clear = function() {
        console.log("clear")
        $scope.is_edit = false;
        $scope.bsLandTrnsAsst = angular.copy(init_data);
    }

}]);
