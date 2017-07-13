var app = angular.module('dlHousingDisApp', []);

app.controller("DlHousingDisController",function($scope, $http) {

    $scope.district;
    $scope.incident;
    $scope.dl_data={};
    $scope.is_edit=false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.districts=[];

    $scope.getDistrict = function getDistrict(){
         if($scope.incident){
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

    $scope.changedValue=function getBsData() {
        if($scope.incident && $scope.district){
        $scope.submitted = true;
        $scope.tot_damages = null;
        $scope.is_edit = true;
        $scope.submitted = true;
            $http({
                method: "POST",
                url: '/dl_fetch_total_data',
                data: angular.toJson({
                    'table_name':'Table_4',
                    'sector':'housing',
                    'com_data': {
                    'district':  $scope.district.district__id,
                    'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.data=data;
                $scope.dlHousingDis = data;
            })
            }
    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlHousingDis ? angular.equals({}, $scope.dlHousingDis.housing.Table_4) : true;
        return isNull;

    }

    $scope.convertToInt = function(val1 ,val2,val3){
    var ans = parseInt(val1) + parseInt(val2) + parseInt(val3);
    return ans;

    }

})

