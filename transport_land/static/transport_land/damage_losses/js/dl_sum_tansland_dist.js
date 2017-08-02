//Table 7
var app = angular.module('dlSumTransLandDistApp', ['underscore'])

app.controller('dlSumTransLandDistController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.isLoded = false;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.data;
    $scope.user_id;

    $scope.changedValue = function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user': $scope.user_id
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }
    }

    $scope.loadData = function(form) {
        if($scope.district && $scope.incident) {
            $scope.isLoded = true;
            $scope.tot_damages = null;
            $scope.is_edit = true;

            $http({
                method: "POST",
                url: '/dl_fetch_total_data',
                data: angular.toJson({
                    'table_name':  'Table_7',
                    'sector':'transport_land',
                    'com_data': {
                        'district':  $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                $scope.data=data;
            })
        }
    }

     $scope.convertTwoVariables = function(val1,val2){
        console.log("Try",val1,val2);
        var sum = 0;
        sum = parseInt(val1) + parseInt(val2);
        return sum;
    }
     $scope.convertTenVariables = function(val1,val2,val3,val4,val5,val6,val7,val8,val9,val10){
        console.log("Try",val1,val2);
        var sum = 0;
        sum = parseInt(val1) + parseInt(val2) + parseInt(val3)+parseInt(val4)+parseInt(val5) + parseInt(val6) + parseInt(val7) + parseInt(val8) + parseInt(val9) + parseInt(val10);
        return sum;
    }
     $scope.convertFiveVariables = function(val1,val2,val3,val4,val5){
        console.log("Try",val1,val2);
        var sum = 0;
        sum = parseInt(val1) + parseInt(val2) + parseInt(val3)+parseInt(val4)+parseInt(val5);
        return sum;
    }
     $scope.convertFifteenVariables = function(val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12,val13,val14,val15){
        console.log("Try",val1,val2);
        var sum = 0;
        sum = parseInt(val1) + parseInt(val2) + parseInt(val3)+parseInt(val4)+parseInt(val5) + parseInt(val6) + parseInt(val7) + parseInt(val8) + parseInt(val9) + parseInt(val10) + parseInt(val11) + parseInt(val12) + parseInt(val13)+parseInt(val14)+parseInt(val15) ;
        return sum;
    }
});
