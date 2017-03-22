//Table 2
var app = angular.module('dlTouismInfrstrctApp', ['underscore'])

app.controller('dlTouismInfrstrctController', function($scope, $http, $parse, _) {


    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.firms;
    $scope.ownership;
    $scope.isOwnershipPublic;
    $scope.selectedFirm;
    $scope.businessTypes = [];
    $scope.new_firm = {id: null, name: null, ownership: null,};


    var init_data = {
        'tourism': {
            'Table_2': {


                }
            }
        }

    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                console.log($scope.districts);
            })
        }

        if($scope.incident && $scope.district ) {
            $scope.fetchFirms();
            $scope.fetchBusinessTypes();
        }
    }

    $scope.fetchFirms = function()
    {

        $http({
        method: "POST",
        url: "/fetch_entities",
        data: angular.toJson({
        'district':  $scope.district.district__id,
        'model': 'Firm',
        'sector':'tourism'
         }),
        }).success(function(data) {

        console.log(data);
        $scope.firms = data;

        })
    }

       $scope.fetchBusinessTypes = function()
    {

        $http({
        method: "POST",
        url: "/fetch_business_types",
        data: angular.toJson({
        'district':  $scope.district.district__id,
        'model': 'TouBusiness',
        'sector':'tourism'
         }),
        }).success(function(data) {

        $scope.businessTypes = data;
        console.log($scope.businessTypes);

        })
    }

    $scope.saveFirm = function(form) {
    console.log("adding");
        if(form.$valid) {
        //validate following filds later
        $scope.new_firm.ownership = $scope.ownership;
//        $scope.new_firm.district = {};
//        $scope.new_firm.district.district_id = $scope.district.district__id;
        //district__id': 4, 'district__name

            $http({
                method: "POST",
                url: "/add_entity_with_district",
                data: angular.toJson({
                    'model': 'Firm',
                    'model_fields': $scope.new_firm,
                     'is_edit' : false,
                     'sector':'tourism',
                     'district_id' : $scope.district.district__id
                }),

            }).success(function(data) {

                $scope.new_firm.id = data;
                if(data) {

                    $scope.firms.push($scope.new_firm);
                    console.log($scope.new_firm);
                }

                $("#modal-container-218029").modal('hide');
            })
        }
    }



});





