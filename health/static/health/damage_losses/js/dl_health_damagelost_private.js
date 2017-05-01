//Table 7
var app = angular.module('dlHealthDamagelostPrivateApp', [])

app.controller('dlHealthDamagelostPrivateAppController', function($scope, $http, $filter) {
    $scope.district;
    $scope.dlDate;
    $scope.incident;
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.privateClinics = [];
    $scope.private_clinic = {id: null, name: null, district_id: null};
    $scope.is_edit_model = false;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.is_null = false;

//initialize model
    var init_data = {
        'health': {
            'Table_7': {
                'DapNapTmf' : [{
                    type_med_fac : 'Private Clinics',
                    num_affected_fac : null,
                    male : null,
                    female : null,
                }, {
                    type_med_fac : 'Others',
                    num_affected_fac : null,
                    male : null,
                    female : null,
                }, {
                    type_med_fac : 'TOTAL',
                    num_affected_fac : null,
                    male : null,
                    female : null,
                }],
                'DapBefOther': [{
                    pvt_clinics : 'Structure',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }, {
                    pvt_clinics : 'Supplies and Materials',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }, {
                    pvt_clinics : 'Equipment',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }, {
                    pvt_clinics : 'Total',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }, {
                    pvt_clinics : 'TOTAL',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }],
                //tab 2
                'DapBefPc': [{
                    pvt_clinics : 'Structure',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }, {
                    pvt_clinics : 'Supplies and Materials',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }, {
                    pvt_clinics : 'Equipment',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }, {
                    pvt_clinics : 'Total',
                    est_replacement_cost : null,
                    est_repair_cost : null,
                    total_damages : null,
                    est_losses_y1 : null,
                    est_losses_y2 : null,
                    total_losses : null,
                }],
//                'DapBefPc1': [{
//                    pvt_clinics : 'Structure',
//                    est_replacement_cost : null,
//                    est_repair_cost : null,
//                    total_damages : null,
//                    est_losses_y1 : null,
//                    est_losses_y2 : null,
//                    total_losses : null,
//                }, {
//                    pvt_clinics : 'Supplies and Materials',
//                    est_replacement_cost : null,
//                    est_repair_cost : null,
//                    total_damages : null,
//                    est_losses_y1 : null,
//                    est_losses_y2 : null,
//                    total_losses : null,
//                }, {
//                    pvt_clinics : 'Equipment',
//                    est_replacement_cost : null,
//                    est_repair_cost : null,
//                    total_damages : null,
//                    est_losses_y1 : null,
//                    est_losses_y2 : null,
//                    total_losses : null,
//                }, {
//                    pvt_clinics : 'Total',
//                    est_replacement_cost : null,
//                    est_repair_cost : null,
//                    total_damages : null,
//                    est_losses_y1 : null,
//                    est_losses_y2 : null,
//                    total_losses : null,
//                }],
//                'DapBefPcn': [{
//                    pvt_clinics : 'Structure',
//                    est_replacement_cost : null,
//                    est_repair_cost : null,
//                    total_damages : null,
//                    est_losses_y1 : null,
//                    est_losses_y2 : null,
//                    total_losses : null,
//                }, {
//                    pvt_clinics : 'Supplies and Materials',
//                    est_replacement_cost : null,
//                    est_repair_cost : null,
//                    total_damages : null,
//                    est_losses_y1 : null,
//                    est_losses_y2 : null,
//                    total_losses : null,
//                }, {
//                    pvt_clinics : 'Equipment',
//                    est_replacement_cost : null,
//                    est_repair_cost : null,
//                    total_damages : null,
//                    est_losses_y1 : null,
//                    est_losses_y2 : null,
//                    total_losses : null,
//                }, {
//                    pvt_clinics : 'Total',
//                    est_replacement_cost : null,
//                    est_repair_cost : null,
//                    total_damages : null,
//                    est_losses_y1 : null,
//                    est_losses_y2 : null,
//                    total_losses : null,
//                }],

            }
        }
    }

    $scope.dlHealthDamagelostPrivateSys = angular.copy(init_data);

//Save Data
    $scope.saveDlHealthDamagelostPrivate = function(form, model) {
        var data = {'health':{'Table_7': {model: []}}};
        data['health']['Table_7'][model] = $scope.dlHealthDamagelostPrivateSys['health']['Table_7'][model];
        $scope.submitted = true;
        if(form.$valid){
            $http({
                method : 'POST',
                url : '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': data,
                    'com_data':{
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                        'private_clinic_id': $scope.private_clinic.id

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

//Save Data
    $scope.saveDlHealthData = function(form) {
        var data = {'health':{'Table_7': {'DapNapTmf': []}}};
        data = {'health':{'Table_7': {'DapBefOther': []}}};
        data['health']['Table_7']['DapNapTmf'] = $scope.dlHealthDamagelostPrivateSys['health']['Table_7']['DapNapTmf'];
        data['health']['Table_7']['DapBefOther'] = $scope.dlHealthDamagelostPrivateSys['health']['Table_7']['DapBefOther'];
        $scope.submitted = true;
        if(form.$valid) {
            console.log($scope.district);
            $http({
                method : 'POST',
                url : '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': data,
                    'com_data':{
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident
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

//Fetch Entities
    $scope.fetchPrivateClinics = function() {
        $scope.private_clinic.district_id = $scope.district;

        $http({
            method: "POST",
            url: "/health/damage_losses/fetch_entities",
            data: angular.toJson({
                'district':  $scope.district.district__id,
                'model': "PrivateClinic",
                'sector': 'health'
            }),
        }).success(function(data) {
            $scope.privateClinics = data;
            console.log(data);
        })
    }

//Add Entities
    $scope.addPrivateClinic = function() {
        if($scope.private_clinic) {
        console.log()
            $scope.private_clinic.district_id = $scope.district.district__id;
            console.log($scope.private_clinic);
            $http({
                method: "POST",
                url: "/add_entity",
                data: angular.toJson({
                    'model_fields': $scope.private_clinic,
                    'model': 'PrivateClinic',
                    'is_edit': $scope.is_edit_model,
                    'sector': 'health'
                }),
            }).success(function(data) {
                $("#modal-container-218029").modal('hide');
                $scope.private_clinic.id = data;

                if(!$scope.is_edit_model){
                    if(data){
                        $scope.privateClinics.push($scope.private_clinic);
                        console.log($scope.privateClinics);
                    }
                }
                else {
                    var private_clinic = $filter('filter')($scope.privateClinics, {id: data})[0];
                    private_clinic.name = $scope.private_clinic.name;
                }
                $scope.is_edit_model = false;
            })
        }
    }

//Edit Data
    $scope.dlDataEdit = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;

    if(form.$valid){

        $http({
        method: "POST",
        url: '/dl_fetch_edit_data',
        data: angular.toJson({
        'table_name':  'Table_7',
        'sector':'health',
        'com_data': {
               'district': $scope.district.district__id,
                'incident': $scope.incident,
              },
               }),
        }).success(function(data) {

        console.log(data);

        $scope.dlHealthDamagelostPrivateSys = data;
        })
        }
    }

//Cancel Data
    $scope.cancelEdit = function() {
         $scope.is_edit = false;
         $scope.dlHealthDamagelostPrivateSys = init_data;
    }

//Fetch Districts
    $scope.changeIncident = function getDistrictData(){
    if($scope.incident) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.district = "";
                console.log(data);
            })
        }


  }

//Clear Function
    $scope.clear = function() {
        console.log("init")
        $scope.is_edit = false;
        $scope.dlHealthDamagelostPrivateSys = angular.copy(init_data);

    }


})
