//Table 8
var app = angular.module('dlHealthSectorDistrictApp', []);

app.controller("DlHealthSectorDistrictController", ['$scope','$http',function ($scope,$http) {

    $scope.district;
    $scope.incident;
    $scope.dl_data={};
    $scope.is_edit=false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.districts=[];
    $scope.user_id;

    $scope.lmh_hospitals = [{property: 'teaching_hospital', name: 'Teaching Hospitals'},
        {property: 'provincial_general_hospital', name: 'Provincial General Hospitals'},
        {property: 'district_general_hospital', name: 'District General Hospitals'}];

    $scope.moh_hospitals = [{ property: 'office', name: 'Offices'}, {property: 'other', name: 'Others'}];

    $scope.getDistrict = function getDistrict() {
        if($scope.incident) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.district = "";
                console.log(data);
            })
        }
    }

    $scope.loadData = function(form) {
        if($scope.incident && $scope.district) {
            $scope.submitted = true;
            if(form.$valid) {
                $scope.tot_damages = null;
                $scope.is_edit = true;
                $scope.submitted = true;
                $http({
                    method: "POST",
                    url: '/dl_fetch_total_data',
                    data: angular.toJson({
                        'table_name':  'Table_8',
                        'sector':'health',
                        'com_data': {
                            'district':  $scope.district.district__id,
                            'incident': $scope.incident,
                        },
                    }),
                }).success(function(data) {
                    console.log(data);
                    $scope.dlSummaryDis = data;
                })
            }
        }
    }

    $scope.sumFunc2 = function(val1=0, val2=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }

        return parseInt(val1) + parseInt(val2);
    }

    $scope.sumFunc3 = function(val1=0, val2=0, val3=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3);
    }

    $scope.sumFunc5 = function(val1=0, val2=0, val3=0, val4=0, val5=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5);
    }

    $scope.sumFunc7 = function(val1=0, val2=0, val3=0, val4=0, val5=0, val6=0, val7=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }
        if(val6 == null) {
            val6=0;
        }
        if(val7 == null) {
            val7=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7);
    }
}])

