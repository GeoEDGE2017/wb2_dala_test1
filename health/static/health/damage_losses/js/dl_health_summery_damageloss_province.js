var app = angular.module('dlHealthSummeryDamageLossProvinceApp', []);

app.controller("dlHealthSummeryDamageLossProvinceAppController", ['$scope','$http',function ($scope,$http) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;

    // declaring total variables
    $scope.total_num_affected = 0;


    $scope.saveDlHealthSummeryDamagelossProvince = function(form) {
       $scope.submitted = true;

       if(form.$valid){
        console.log($scope.data);
        $http({
            method: 'POST',
            url: '/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dlhealthsummarydamageprovince,
                'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                },
                'is_edit': false
            }),
            dataType: 'json',
        }).then(function mySucces(response) {
            //if data sent to server side method successfull
//$("#modal-container-239453").modal('show');
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

    // get relevant damage_losses data for calculations
    $scope.changedValue = function getDlData(selectProvinces) {

        if($scope.incident && selectProvinces) {
          fetchProvinces();
        }
        if($scope.province && $scope.incident) {
            console.log($scope.district);
            console.log($scope.incident);
            $http({
                method: 'POST',
                url: '/dl_get_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_name': 'Table_9',
                    'db_tables': ['DshPubLmhProvince', 'DshPubMohProvince', 'DshPubOmfProvince',  'DshPvtFaProvince',  'DshTdlOwshipProvince'],
                    'com_data': {
                        'province': $scope.province,
                        'incident': $scope.incident,
                    },
                    'is_edit' : $scope.is_edit,
                    'sector':'health'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);


                });

                console.log($scope.bs_data);

            }, function errorCallback(response) {

                console.log(response);
            });
        }
    }
    $scope.provinces = [];

    function fetchProvinces()
    {
          $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                    'incident': $scope.incident
                   }),
            }).success(function(data) {
                $scope.provinces = data;
                $scope.province = "";

            })

    }

    $scope.fetchDlData = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_9',
            'sector': 'health',
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);



            $scope.dlhealthsummarydamageprovince = data;
            })

    }

    $scope.cancelEdit = function() {
         $scope.is_edit = false;
         $scope.dlhealthsummarydamageprovince = init_data;
    }
 }])
