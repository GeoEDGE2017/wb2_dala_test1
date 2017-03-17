var app = angular.module('dlHealthSummaryDamageNationwideApp', []);

app.controller("DlHealthSummaryDamageNationwideController", ['$scope','$http',function ($scope,$http) {


 $scope.incident;
 $scope.dl_data={};
 $scope.is_edit = false;
 $scope.submitted = false;
 $scope.is_valid_data = true;

    $scope.changedValue = function getDlData()
    {


        if($scope.incident){
        console.log($scope.district);
        console.log($scope.incident);
        $http({
        method: 'POST',
        url: '/dl_get_data',
        contentType: 'application/json; charset=utf-8',
        data: angular.toJson({
//                'db_tables': ['DspPubD1Lmh','DspPubDnLmh','DspPubDnMoh','DspPubD1Moh','DspPubD1Omc','DspPubDnOmc','DspPvtD1','DspPvtDn'],
                'table_name': 'Table_10',
                'sector':'health',
                'db_tables': ['DspPubD1LmhNational','DspPubDnLmhNational','DspPubDnMohNational','DspPubD1MohNational','DspPubD1OmcNational','DspPubDnOmcNational','DspPvtD1National','DspPvtDnNational'],
                'com_data': {

                    'incident': $scope.incident,
                }
            }),
        dataType: 'json',
        }).then(function successCallback(response) {
            var data = response.data;
            angular.forEach(data, function(value, key) {
              $scope.dl_data[key] = JSON.parse(value);
            });

            console.log($scope.dl_data);

        }, function errorCallback(response) {

            console.log(response);
        });
        }

    }

  // edit relevant damage_losses data


    $scope.dlDataEdit = function(form)
{

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
           'is_edit':$scope.is_edit
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
            $scope.dlhealthsummarydamagenationwide = data;

            })

    }



    $scope.cancelEdit = function()
{
     $scope.is_edit = false;
     $scope.dlhealthsummarydamagenationwide = init_data;
}





}])



