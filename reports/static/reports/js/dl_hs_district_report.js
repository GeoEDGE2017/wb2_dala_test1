var app = angular.module('dlHsDistrictApp', []);

app.controller("DlHsDistrictController", ['$scope','$http',function ($scope,$http) {

 $scope.district;
 $scope.incident;
 $scope.submitted = false;

    $scope.dlhealthsectordistrict = {
        'Table_8': {
            'DshPubLmh': [{
                facilities_assets : 'Teaching Hospitals',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Provincial General Hospitals',
                total_num_affected: null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'District General Hospitals',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                }],
                'DshPubMoh': [{
                facilities_assets : 'Offices',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Others',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                }],
                'DshPubOmf': [{
                facilities_assets : 'Base Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Divisional Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Rural Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Central Dispensary',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'PMCUs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'PHCCs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'MCHCs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'TOTAL',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                }],
                'DshPvtFa': [{
                facilities_assets : 'Private Clinics',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Others',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'TOTAL',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                }],
                'DshTdlOwship': [{
                ownership : 'Public Sector',
                damages :null,
                losses_y1 :null,
                losses_y2 :null,
                total :null,
                },{
                ownership : 'Private Sector',
                damages :null,
                losses_y1 :null,
                losses_y2 :null,
                total :null,
                },{
                ownership : 'TOTAL',
                damages :null,
                losses_y1 :null,
                losses_y2 :null,
                total :null,
                }

                ]
        }
    }

$scope.filterData = function filterData(form)
{
$scope.submitted = true;
if(form.$valid){
    $http({
    method: "POST",
    url: "/reports/dl_fetch_report_data",
    data: angular.toJson({'table_name': 'Table_8', 'com_data': {'district': $scope.district,
          'incident': $scope.incident} }),
    }).success(function(data) {

    console.log(data);
    $scope.dlhealthsectordistrict = data;
    })
}
}

$scope.districts = [];
$scope.fetchDistricts = function fetchDistricts(incident_id)
{
    $http({
    method: "POST",
    url: "/damage_losses/fetch_incident_districts",
    data: angular.toJson({'incident': $scope.incident }),
    }).success(function(data) {
        $scope.districts = data;
        $scope.district = "";
        console.log(data);

    })

}

 }])


