var app = angular.module('reportHealthSummaryDamageNationwideApp', ['ui.bootstrap', 'popoverToggle', 'ngPrint']);

app.controller("reportHealthSummaryDamageNationwideController", ['$scope','$http',function ($scope,$http) {
 $scope.incident;
 $scope.dl_data={};
 $scope.is_edit = false;
 $scope.submitted = false;
 $scope.is_valid_data = true;

  // edit relevant damage_losses data

    $scope.loadData = function(form){
        $scope.fetchDlData(form);
    }

    $scope.initprint = function() {
       $("#modal-container-print").modal('show');
       console.log($scope.print_memo);

    }

    $scope.dlDataEdit = function(form){
       $scope.is_edit = true;
       $scope.submitted = true;
        if(form.$valid){
        $http({
        method: "POST",
        url: '/dl_fetch_edit_data',
        data: angular.toJson({
        'table_name':  'Table_10',
        'sector' : 'health',
        'com_data': {
                'incident': $scope.incident,
              },
               'is_edit':true
               }),
        }).success(function(data) {

        console.log(data);
        $scope.dlhealthsummarydamagenationwide = data;
        })
        }
    }

    $scope.fetchDlData = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;
            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_10',
            'sector': 'health',
            'com_data': {
                    'incident': $scope.incident,
                  },
               }),
            }).success(function(data) {
            console.log('load ', data);
            $scope.data= data;
            $scope.dlhealthsummarydamagenationwide = data;
            if($scope.checkIfNull())
             $("#modal-container-239456").modal('show');
            })
    }

   $scope.checkIfNull = function(){
        var isNull = $scope.dlhealthsummarydamagenationwide ? angular.equals({},
        $scope.dlhealthsummarydamagenationwide.health.Table_10) : true;
        return isNull;

   }




}])

