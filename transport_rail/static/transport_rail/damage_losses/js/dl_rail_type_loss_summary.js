var app = angular.module('dlTypeLossRailApp', ['underscore'])

app.controller('DlTypeLossRailController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.incident;
    $scope.company;
    $scope.dlDate;
    $scope.bs_data={};
    var total=0;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.DlTypeLos_year_1 = 0;
    $scope.DlTypeLos_year_2 = 0;


    var init_data = {
        'transport_rail' : {
            'Table_5': {
                'DlTypeLos' :[{
                    loss_type : 'Foregone income of rail company',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                },
                {   loss_type : 'Cleaning up of debris',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                },
                {   loss_type : 'Higher operating costs',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                },
                {   loss_type : 'Other unexpected expenses',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                },
                {   loss_type : 'TOTAL LOSSES',
                    year_1 : null,
                    year_2 : null,
                    tot_los : null,
                }],
            }
        }
    }

    $scope.dlTypeLossRail = init_data;

    $scope.getTotal = function(property) {
        var array = $scope.dlTypeLossRail.transport_rail.Table_5.DlTypeLos;
        var cumulative = null;
        var sums = _.map(array, function(obj) {
            cumulative += obj[property];
            return cumulative;
            console.log(array);

        });
        var the_string = 'DlTypeLos_' + property;
        var model = $parse(the_string);
        model.assign($scope, cumulative);



    }

    $scope.saveDlData = function(form) {
        alert($scope.incident);
        $scope.submitted = true;
            $http({
                method: 'POST',
                url: '/dl_save_data',
               contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlTypeLossRail,
                    'com_data': {
                        'incident_id' : $scope.incident,
                    },
                    'is_edit':$scope.is_edit
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                if(response.data == 'False')
                    $scope.is_valid_data = false;
               else
                    $("#modal-container-239453").modal('show');
            }, function errorCallback(response) {
                console.log(response);
            });

            }

   $scope.dlDataEdit = function(form){

   $scope.is_edit = true;
   $scope.submitted = true;

    $http({
    method: "POST",
    url: '/dl_fetch_edit_data',
    data: angular.toJson({
    'table_name':  'Table_5',
    'sector':'transport_rail',
    'com_data': {

            'incident': $scope.incident,
          },
           'is_edit':$scope.is_edit
           }),
    }).success(function(data) {

    $scope.dlTypeLossRail = data;
    })

}

    $scope.cancelEdit = function(){
     $scope.is_edit = false;
     $scope.dlTypeLossRail = init_data;
}






});
