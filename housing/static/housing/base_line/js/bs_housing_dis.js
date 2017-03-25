//Table 1

var bsHealthStatusApp = angular.module('bsHousingDisApp', []);

bsHealthStatusApp.controller('BsHousingDisController', function ($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'housing' : {
            'Table_1' : {
                'BhClfPermanent': [{
                    components : '1 floor',
                    tot_num_house : null,
                    tot_num_house_rent : null,
                    avg_rent_mont : null,
                    ang_num_occ_female : null,
                    avg_num_occ_male : null,
                    avg_period_construct : null,
                    avg_period_repair : null,
                }, {
                    components : '2-3 floors',
                    tot_num_house : null,
                    tot_num_house_rent : null,
                    avg_rent_mont : null,
                    ang_num_occ_female : null,
                    avg_num_occ_male : null,
                    avg_period_construct : null,
                    avg_period_repair : null,
                }, {
                    components : '4-5 floors',
                    tot_num_house : null,
                    tot_num_house_rent : null,
                    avg_rent_mont : null,
                    ang_num_occ_female : null,
                    avg_num_occ_male : null,
                    avg_period_construct : null,
                    avg_period_repair : null,
                }, {
                    components : 'More than 5 floors',
                    tot_num_house : null,
                    tot_num_house_rent : null,
                    avg_rent_mont : null,
                    ang_num_occ_female : null,
                    avg_num_occ_male : null,
                    avg_period_construct : null,
                    avg_period_repair : null,
                }],
                'BhClfSmiPermanent': [{
                    components : '1 floor',
                    tot_num_house : null,
                    tot_num_house_rent : null,
                    avg_rent_mont : null,
                    ang_num_occ_female : null,
                    avg_num_occ_male : null,
                    avg_period_construct : null,
                    avg_period_repair : null,
                }, {
                    components : '2-3 floors',
                    tot_num_house : null,
                    tot_num_house_rent : null,
                    avg_rent_mont : null,
                    ang_num_occ_female : null,
                    avg_num_occ_male : null,
                    avg_period_construct : null,
                    avg_period_repair : null,
                }, {
                    components : '4-5 floors',
                    tot_num_house : null,
                    tot_num_house_rent : null,
                    avg_rent_mont : null,
                    ang_num_occ_female : null,
                    avg_num_occ_male : null,
                    avg_period_construct : null,
                    avg_period_repair : null,
                }],
                'BhClfImprovised': [{
                    components : '1 floor',
                    tot_num_house : null,
                    tot_num_house_rent : null,
                    avg_rent_mont : null,
                    ang_num_occ_female : null,
                    avg_num_occ_male : null,
                    avg_period_construct : null,
                    avg_period_repair : null,
                }, {
                    components : '2-3 floors',
                    tot_num_house : null,
                    tot_num_house_rent : null,
                    avg_rent_mont : null,
                    ang_num_occ_female : null,
                    avg_num_occ_male : null,
                    avg_period_construct : null,
                    avg_period_repair : null,
                }]
            }
        }
    }

    $scope.bsHousingDis = init_data;

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            console.log($scope.bsHousingDis);
            $http({
                method: "POST",
                url: "/bs_save_data",
                data: angular.toJson({
                    'table_data': ($scope.bsHousingDis),
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                $scope.bsHousingDis = init_data;
                $scope.is_edit = false;

                if(data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');
            })
        }
    }
});
