//Table 4
var bsHealthStatusApp = angular.module('dlPvtEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('DlPvtEduFacilitiesController', function DlPvtEduFacilitiesController($scope, $http, $filter) {

$scope.dlPvtEduFacilities;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.incident;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;

// declaring school name property
$scope.schoolName = null;
$scope.schoolType = null;
$scope.schools = [];
$scope.new_school = {id: null, name: null, district_id: null};
$scope.schoolData = null;
$scope.is_edit_model = false;

$scope.new_school = {'PreSchools': {id: null, name: null, district_id: null},
                     'PrimarySchools': {id: null, name: null, district_id: null},
                     'SecondarySchools': {id: null, name: null, district_id: null},
                     'Universities': {id: null, name: null, district_id: null},
                     'TechInstitutes': {id: null, name: null, district_id: null}};

var init_data = {
'education':{
'Table_4':{
'DpefNaf':[
{
edu_facilities: 'Pre-school',
num_edu_facilities: null,
male: null,
female: null
},
{
edu_facilities: 'Primary School',
num_edu_facilities: null,
male: null,
female: null
},
{
edu_facilities: 'Secondary School',
num_edu_facilities: null,
male: null,
female: null
},
{
edu_facilities: 'University',
num_edu_facilities: null,
male: null,
female: null
},
{
edu_facilities: 'Technical Institutes',
num_edu_facilities: null,
male: null,
female: null
},
{
edu_facilities: 'TOTAL',
num_edu_facilities: null,
male: null,
female: null
}
],
'DpefBefPreSchool':[
{
asset: 'Structure',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Supplies and materials',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Equipment',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Total',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
],
'DpefBefPrmSchool':[
{
asset: 'Structure',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Supplies and materials',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Equipment',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Total',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
],
'DpefBefSecSchool':[
{
asset: 'Structure',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Supplies and materials',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Equipment',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Total',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
],
'DpefBefUnv':[
{
asset: 'Structure',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Supplies and materials',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Equipment',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Total',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
],
'DpefBefTechInst':[
{
asset: 'Structure',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Supplies and materials',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Equipment',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Total',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
]
}
}
}

$scope.dlPvtEduFacilities = init_data;

// adding schools
$scope.addSchool = function()
{

    $scope.new_school[$scope.schoolType].district_id = $scope.district.district__id;
    console.log($scope.new_school[$scope.schoolType]);
    $http({
    method: "POST",
    url: "/add_entity",
    data: angular.toJson({
    'model_fields': $scope.new_school[$scope.schoolType],
    'model': $scope.schoolType,
    'is_edit': $scope.is_edit_model,
    'sector': 'education'
     }),
    }).success(function(data) {

        $("#modal-container-218029").modal('hide');
        $scope.new_school[$scope.schoolType].id = data;

        if(!$scope.is_edit_model){

        if(data){
            $scope.schools[$scope.schoolType].push($scope.new_school[$scope.schoolType]);
            console.log($scope.schools[$scope.schoolType]);
            }
         }
         else{
            var school = $filter('filter')($scope.schools[$scope.schoolType], {id: data})[0];
            school.name = $scope.new_school[$scope.schoolType].name;

         }
         $scope.is_edit_model = false;

    })
}

$scope.fetchSchools = function()
{

    angular.forEach($scope.new_school, function(value, key) {
        value.district_id = $scope.district;
    });

    $http({
    method: "POST",
    url: "/education/damage_losses/fetch_schools",
    data: angular.toJson({
    'district':  $scope.district.district__id,
    'schools': ['PreSchools', 'PrimarySchools', 'SecondarySchools', 'TechInstitutes', 'Universities']
     }),
    }).success(function(data) {

        $scope.schools = data;

    })
}

$scope.dlDataSubmit = function()
{
$scope.submitted = true;

 $http({
    method: "POST",
    url: "/dl_save_data",
    data: angular.toJson({
    'table_data': ($scope.dlPvtEduFacilities),
    'com_data': {'district_id': $scope.district.district__id,
    'incident_id': $scope.incident,
    },
    'is_edit': $scope.is_edit }),
    }).success(function(data) {

     $scope.dlPvtEduFacilities = init_data;
     $scope.is_edit = false;

     if(data == 'False')
      $scope.is_valid_data = false;
     else
      $("#modal-container-239453").modal('show');

 })
}

$scope.fetchSchoolData = function(){

    $http({
    method: "POST",
    url: '/education/damage_losses/dl_fetch_school_disagtn',
    data: angular.toJson({
    'table_name':  'Table_4',
    'sector': 'education',
    'com_data': {
            'incident': $scope.incident,
            'district': $scope.district.district__id
          },
           }),
    }).success(function(data) {
       $scope.schoolData = data;
       console.log('load ', data);

    })

}

    $scope.insertAsset = function(table) {
        console.log($scope.dlPvtEduFacilities.education.Table_4[table]);
        var new_row;
        if(table == 'DpefNaf') {
            new_row = {
                edu_facilities: '',
                num_edu_facilities: null,
                male: null,
                female: null
            }
        }

        $scope.dlPvtEduFacilities.education.Table_4[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'DpefNaf') {
            $scope.dlPvtEduFacilities.education.Table_4.DpefNaf.splice(index, 1);
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
                console.log(data);
            })
        }
    }

    $scope.saveDlData = function(form) {
        alert('dis '+$scope.district.district__id+ '-ind '+$scope.incident);
        $scope.submitted = true;
        console.log($scope.dlPvtEduFacilities);
        if(form.$valid) {
            $http({
                method : 'POST',
                url : '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlPvtEduFacilities,
                    'com_data': {
                        'district_id': $scope.district.district__id,
                        'incident_id': $scope.incident,
                    },
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).then(function mySucces(response) {
                console.log(response);
                if(response.data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');
                }, function myError(response) {
                    console.log(response);
            });
        }
    }

})
