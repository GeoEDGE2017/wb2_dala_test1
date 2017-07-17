//Table 1

var bsHealthStatusApp = angular.module('bsHousingDisApp', []);

bsHealthStatusApp.controller('BsHousingDisController', function ($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_date;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.is_edit_disable = false;
    $scope.user_id;

    //Initialize Data
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

    $scope.bsHousingDis = angular.copy(init_data);

    //Disable Edit Button
    $scope.changeDis = function changeDis(){
        if($scope.district && $scope.bs_date){
            $scope.is_edit_disable = true;
        }
        else{
            $scope.is_edit_disable = false;
        }
    }

    //Save data
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
                        'user_id': $scope.user_id,
                    },
                    'is_edit': $scope.is_edit
                }),
            }).success(function(data) {
                $scope.bsHousingDis = init_data;
                $scope.is_edit = false;

                if(data == 'False')
                   {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else
                    $("#modal-container-239453").modal('show');
            })
        }
    }

    //Edit data
   $scope.bsHsDataEdit = function(form){
        $scope.submitted = true;
           $scope.is_edit = true;
            $http({
            method: "POST",
            url: "/bs_fetch_edit_data",
            data: angular.toJson({
                  'table_name': 'Table_1',
                  'sector': 'housing',
                  'com_data': {'district': $scope.district,
                  'bs_date': $scope.bs_date,
                  'user_id': $scope.user_id} }),
            }).success(function(data) {
            console.log(data);
            $scope.bsHousingDis = data;
            })
    }

    //Cancel Edit
    $scope.cancelEdit = function(){
        $scope.is_edit = false;
        $scope.bsHousingDis = init_data;
    }

    //Clear Function
    $scope.clear = function() {
        console.log('done');
        $scope.is_edit = false;
        $scope.bsHousingDis = angular.copy(init_data);
    }

});
