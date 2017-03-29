//Table 5
var app = angular.module('dlSummTouBusiFaciPovApp', ['underscore'])

app.controller('dlSummTouBusiFaciPovController', function($scope, $http, $parse, _) {

    $scope.incident;
    $scope.province;
    $scope.provinces;
    $scope.data;
    $scope.districts;
    $scope.table;
    $scope.districtTotals = [];
    $scope.data_available;

    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }

        if($scope.incident && $scope.province) {
            $scope.fetchData();
        }
    }
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
                $scope.province = null;

            })

    }

    $scope.fetchData = function(){
//        $scope.is_edit = true;
//        $scope.submitted = true;
            if($scope.province && $scope.incident){
            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_5',
            'sector': 'tourism',
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            $scope.data = data.tourism.Table_5;

            $scope.districts = Object.keys($scope.data);
            console.log('load ', Object.keys($scope.data));
            console.log($scope.data);
            $scope.data_available = ($scope.districts.length != 0);

            if(!$scope.data_available){
                alert("no data available for your selection");
            }

            $scope.makeTable();

            }).error(function(err){
                $scope.data = null;

                $scope.districts = null;

            })

            }

            $scope.makeTable = function(){
        if($scope.data != null){

            $scope.table = {};
            $scope.table.business = {};
            $scope.table.infrastructures = {};

            //district vise objects
            angular.forEach($scope.districts, function(value, key) {


                    $scope.table.business[value] = {'name':value }
                    $scope.table.business[value].year1Damage = {};
                    $scope.table.business[value].year1Loss = {};
                    $scope.table.business[value].year2Loss = {};

                    $scope.table.infrastructures[value] = {'name':value }
                    $scope.table.infrastructures[value].year1Damage = {};
                    $scope.table.infrastructures[value].year1Loss = {};
                    $scope.table.infrastructures[value].year2Loss = {};

                angular.forEach($scope.data[$scope.districts].DlDmgbusTotDistrict, function(value2, key) {
                    $scope.table.business[value].year1Damage[value2.ownership] = value2.tot_damages;
                })

                angular.forEach($scope.data[$scope.districts].DlLosbusTotDistrict, function(value2, key) {
                    $scope.table.business[value].year1Loss[value2.ownership] = value2.los_year1;
                    $scope.table.business[value].year2Loss[value2.ownership] = value2.los_year2;
                })

                angular.forEach($scope.data[$scope.districts].DlDmgInfTotDistrict, function(value2, key) {
                    $scope.table.infrastructures[value].year1Damage[value2.ownership] = value2.sum;
                })

                angular.forEach($scope.data[$scope.districts].DlLosInfTotDistrict, function(value2, key) {
                    $scope.table.infrastructures[value].year1Loss[value2.ownership] = value2.tot_year1;
                    $scope.table.infrastructures[value].year1Loss[value2.ownership] = value2.tot_year2;
                })




            })

            console.log('table', $scope.table);


        }
        else{
            console.log("data null")
        }
    }


    }


    $scope.getSum3 = function(val1, val2, val3){
        var final_val = 0;
        if(!isNaN(val1)) final_val += val1;
        if(!isNaN(val2)) final_val += val2;
        if(!isNaN(val3)) final_val += val3;

        return final_val;
    }

    $scope.getGrandTotCol = function(col){
        var final_val = 0;

        angular.forEach($scope.districtTotals, function(value, key) {

            final_val += $scope.getConvertedVal( value[col] );
        })

        return final_val;
    }

        $scope.getConvertedVal = function(val){
        if(!val)    return 0;
        if(isNaN(val)) return 0;
        return val;
    }


})