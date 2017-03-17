var app = angular.module('dlHealthDamagelostPrivateApp', [])

app.controller('dlHealthDamagelostPrivateAppController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.dlDate;
    $scope.incident;
    $scope.submitted = false;
    $scope.Districts=[];

    $scope.is_edit = false;

    $scope.is_valid_data = true;

    var init_data = {
        'health': {
            'Table_7': {
                //tab 1
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
                //tab 2
                'DapBefPc1': [{
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
                'DapBefPcn': [{
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
                }]
            }
        }
    }

    $scope.dlHealthDamagelostPrivateSys = init_data;

    $scope.saveDlHealthDamagelostPrivate = function(form) {
        console.log($scope.data);
        $scope.submitted = true;
       if(form.$valid){
        $http({
            method : 'POST',
            url : '/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dlHealthDamagelostPrivateSys,
                'com_data':{
                    'district_id': $scope.district,
                    'incident_id': $scope.incident,

                },
                'is_edit': $scope.is_edit
            }),
            dataType: 'json',
        }).then(function mySucces(response) {
//            $("#modal-container-239453").modal('show');
//            //if data sent to server side method successfull
//            console.log(response);
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
               'district': $scope.district,
                'incident': $scope.incident,
              },
               }),
        }).success(function(data) {

        console.log(data);

        $scope.dlHealthDamagelostPrivateSys = data;
        })
        }
    }

    $scope.cancelEdit = function() {
         $scope.is_edit = false;
         $scope.dlHealthDamagelostPrivateSys = init_data;
    }

    $scope.changeIncident = function getDistrictData()
    {

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
}])
