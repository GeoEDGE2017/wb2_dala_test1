var app = angular.module('dlAssessmentOfGovnDeptOrOfcInADistrictApp', ['underscore']);

app.controller("dlAssessmentOfGovnDeptOrOfcInADistrictController", function ($scope,$http,$parse, _, $filter) {

    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.dl_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.is_edit_model = false;
    $scope.is_valid_data = true;

    $scope.districtData = [];

    $scope.departments = [];
    $scope.department = null;
    $scope.ownership = null;
    $scope.new_department = {id: null, name: null, ownership_id: null, district_id: null};


    var init_data = {
        'other_govn_services': {
            'Table_2': {
                'DlagdDmgStructure': [{
                    name_dept : '1 Floor Structure',
                    td_num_structures : null,
                    td_total_squarem : null,
                    pd_num_structures : null,
                    pd_total_squarem_roof : null,
                    pd_total_squarem_wall : null,
                    pd_total_squarem_floor : null,
                    damages : null,
                }, {
                    name_dept : '2-3 Floors Structure',
                    td_num_structures : null,
                    td_total_squarem : null,
                    pd_num_structures : null,
                    pd_total_squarem_roof : null,
                    pd_total_squarem_wall : null,
                    pd_total_squarem_floor : null,
                    damages : null,
                }, {
                    name_dept : 'More Than 3 Floors',
                    td_num_structures : null,
                    td_total_squarem : null,
                    pd_num_structures : null,
                    pd_total_squarem_roof : null,
                    pd_total_squarem_wall : null,
                    pd_total_squarem_floor : null,
                    damages : null,
                }, {
                    name_dept : 'Total',
                    td_num_structures : null,
                    td_total_squarem : null,
                    pd_num_structures : null,
                    pd_total_squarem_roof : null,
                    pd_total_squarem_wall : null,
                    pd_total_squarem_floor : null,
                    damages : null,
                }],
                'DlagdDmgOfficeEquipment': [{
                    name_dept : 'Computers',
                    num_tot_destroyed : null,
                    num_partial_damaged : null,
                    damages : null,
                }, {
                    name_dept : 'Furniture',
                    num_tot_destroyed : null,
                    num_partial_damaged : null,
                    damages : null,
                }, {
                    name_dept : 'Total',
                    num_tot_destroyed : null,
                    num_partial_damaged : null,
                    damages : null,
                }],
                'DlagdDmgMachinery': [{
                    name_dept : 'Vehicles',
                    num_tot_destroyed : null,
                    num_partial_damaged : null,
                    damages : null,
                }, {
                    name_dept : 'Generators',
                    num_tot_destroyed : null,
                    num_partial_damaged : null,
                    damages : null,
                }, {
                    name_dept : 'Elevators',
                    num_tot_destroyed : null,
                    num_partial_damaged : null,
                    damages : null,
                }, {
                    name_dept : 'Total',
                    num_tot_destroyed : null,
                    num_partial_damaged : null,
                    damages : null,
                }],
                'DlagdLosses': [{
                    name_dept : 'Foregone Income',
                    los_year1 : null,
                    los_year2 : null,
                    total_losses : null,
                }, {
                    name_dept : 'Cleaning up of debris',
                    los_year1 : null,
                    los_year2 : null,
                    total_losses : null,
                }, {
                    name_dept : 'Higher Operating Costs',
                    los_year1 : null,
                    los_year2 : null,
                    total_losses : null,
                }, {
                    name_dept : 'Other Unexpected Expenses',
                    los_year1 : null,
                    los_year2 : null,
                    total_losses : null,
                }, {
                    name_dept : 'TOTAL LOSSES',
                    los_year1 : null,
                    los_year2 : null,
                    total_losses : null,
                }],
            }
        }
    }

    $scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys = init_data;

    $scope.insertAsset = function(table) {
        console.log($scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys.other_govn_services.Table_2[table]);
        var new_row;
        if(table == 'DlagdDmgOfficeEquipment') {
            new_row = {
                name_dept : '',
                num_tot_destroyed : null,
                num_partial_damaged : null,
                damages : null,
            }
        }
        else if(table == 'DlagdDmgMachinery') {
            new_row = {
                name_dept : '',
                num_tot_destroyed : null,
                num_partial_damaged : null,
                damages : null,
            }
        }

        $scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys.other_govn_services.Table_2[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'DlagdDmgOfficeEquipment') {
            $scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys.other_govn_services.Table_2.DlagdDmgOfficeEquipment.splice(index, 1);
        }
        else if(table == 'DlagdDmgMachinery') {
            $scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys.other_govn_services.Table_2.DlagdDmgMachinery.splice(index, 1);
        }
    }

    //get Grand Total using watch
    $scope.$watch(
        function() {

            if (isNaN(
                    $scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys.other_govn_services.Table_2.DlagdDmgStructure[3].damages ||
                    $scope.DlagdDmgOfficeEquipment_damages ||
                    $scope.DlagdDmgMachinery_damages


                )) {

                $scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys.other_govn_services.Table_2.DlagdDmgStructure[3].damages = null;
                $scope.DlagdDmgOfficeEquipment_damages = null;
                $scope.DlagdDmgMachinery_damages= null;


            } else {


                $scope.Total =$scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys.other_govn_services.Table_2.DlagdDmgStructure[3].damages +
                              $scope.DlagdDmgOfficeEquipment_damages +
                              $scope.DlagdDmgMachinery_damages;

            }

        },
        true);

    // get relevant base-line data for calculations
    $scope.changedValue=function getBsData(selectedValue) {

        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                console.log(data);
            })
        }

        if($scope.incident && $scope.district ) {
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'db_tables': ['BcsStructure', 'BcsOfficeEquipment', 'BcsMachinery'],
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                   'table_name': 'Table_1',
                   'sector': 'other_govn_services',
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

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
       if(form.$valid){
        $http({
            method: 'POST',
            url:'/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys,
                'com_data': {
                    'district_id': $scope.district.district__id,
                    'incident_id': $scope.incident,
                    'department_id': $scope.new_department.id
                },
                'is_edit' : $scope.is_edit
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
            if(response.data == 'False')
                $scope.is_valid_data = false;
            else
                $("#modal-container-239453").modal('show');
            console.log(response);

        }, function errorCallback(response) {

            console.log(response);
        });
        }

    }

    $scope.dlDataEdit = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;

        if(form.$valid){
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':  'Table_2',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        'department_id': $scope.new_department.id
                    },
                   'sector': 'other_govn_services',
                   'is_edit':$scope.is_edit
                }),
            }).success(function(data) {
                console.log(data);
                $scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys = data;
            })
        }
    }

    $scope.cancelEdit = function() {
         $scope.is_edit = false;
         $scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys = init_data;
    }


    $scope.getTotal = function(model, property) {
        var array = $scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys.other_govn_services.Table_2[model];
        var cumulative = 0;

        var sums = _.map(array,function(obj){
            cumulative += obj[property];
            return cumulative;
        });

        var the_string = model+'_'+property;
        var model = $parse(the_string);
        model.assign($scope, cumulative);
    }

    $scope.getColumnTotal = function(model) {
        var array = $scope.dlAssessmentOfGovnDeptOrOfcInADistrictSys.other_govn_services.Table_2[model];
        var cumulative = 0;
        var cumulative_two = 0;
        var cumulative_total = 0;

        var sums = _.map(array, function(obj) {
            cumulative += obj.num_tot_destroyed;
            cumulative_two += obj.num_partial_damaged;
            cumulative_total = cumulative + cumulative_two;
            return cumulative_total;
        });

        var the_string = model+'_damages';
        var model = $parse(the_string);
        model.assign($scope, cumulative_total);
    }

$scope.fetchDepartments = function()
{
  if($scope.district){
    console.log($scope.district);
    $scope.new_department.district_id = $scope.district.district__id;

    $http({
    method: "POST",
    url: "/fetch_entities",
    data: angular.toJson({
    'district':  $scope.district.district__id,
    'model': 'Department',
    'sector':'other_govn_services'
     }),
    }).success(function(data) {
        $scope.departments = data;
        console.log(data);


    })
   }
   else{
      $scope.departments = null;
   }
}

$scope.saveDepartment = function(form)
{
   delete $scope.new_department['ownership']
   $scope.new_department.district_id = $scope.district.district__id;

   if(!$scope.is_edit_model)
        $scope.new_department.id = null;

    $http({
    method: "POST",
    url: "/add_entity",
    data: angular.toJson({
    'model': 'Department',
    'model_fields': $scope.new_department,
    'is_edit': $scope.is_edit_model,
    'sector': 'other_govn_services'
     }),
    }).success(function(data) {
      console.log(data);


       if(!$scope.is_edit_model){
       if(data)
        $scope.departments.push($scope.new_department);

        $scope.new_department.id = data;
       }
       else{
        var department = $filter('filter')($scope.departments, {id: data})[0];
        department.name = $scope.new_department.name;
       }

       $("#modal-container-218029").modal('hide');
       $("#modal-container-218020").modal('hide');
       $scope.is_edit_model = false;

    })

}

$scope.fetchOwnership = function()
{
    if($scope.new_department){
        $http({
        method: "POST",
        url: "/other_govn_services/damage_losses/fetch_ownership",
        data: angular.toJson({
        'department': $scope.new_department.id,
         }),
        }).success(function(data) {
            $scope.ownership = data;
            console.log(data);


        })
    }

}

$scope.fetchDlData = function(){

    $http({
    method: "POST",
    url: '/other_govn_services/damage_losses/dl_fetch_district_disagtn',
    data: angular.toJson({
    'table_name':  'Table_3',
    'sector': 'other_govn_services',
    'com_data': {
            'incident': $scope.incident,
             'district': $scope.district.district__id
          },
           }),
    }).success(function(data) {
       $scope.districtData = data;
       console.log('load ', data);

    })

}
})


