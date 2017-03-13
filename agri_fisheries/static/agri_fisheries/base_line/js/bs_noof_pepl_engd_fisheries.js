//Table 1
var app = angular.module('bsNoofPeplEngdFisheriesApp', [])

app.controller('bsNoofPeplEngdFisheriesController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;

    $scope.submitted = false;
    $scope.is_valid_data = true;

    var init_data = {
        'agri_fisheries': {
            'Table_1': {
                'BsPeoFisheries': [{
                    fisheries : 'Inland fisheries',
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }, {
                    fisheries : 'River fishing',
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }, {
                    fisheries : 'Marine fishing',
                    num_families : null,
                    num_male : null,
                    num_female : null,
                }, ],
            }
        }
    }

    $scope.bsNoofPeplEngdFisheries = init_data;

    $scope.saveBsData = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            alert('Table 1');
            console.log($scope.bsNoofPeplEngdFisheries);
        }
    }
}]);
