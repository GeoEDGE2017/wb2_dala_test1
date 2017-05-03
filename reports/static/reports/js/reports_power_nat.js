//Table 6
var app = angular.module('reportPowerSupplyNatApp', ['underscore']);

app.controller("reportPowerSupplyNatController", function ($scope,$http,$parse, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totaldpub = null;
    $scope.totaldpvt = null;
    $scope.totalyear1pub = null;
    $scope.totalyear1pvt = null;
    $scope.totalyear2pub = null;
    $scope.totalyear2pvt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    // declaring total variables
    $scope.total_num_affected = 0;

     $scope.loadData = function(form){
        $scope.fetchDlData();
    }


    $scope.fetchDlData = function(){

        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_6',
            'sector': 'power_supply',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data= data;
            $scope.dlPowerSupplySumNat = data;

             if($scope.checkIfNull())
             $("#modal-container-239456").modal('show');


            })

    }
            $scope.checkIfNull = function()
   {
        var isNull = $scope.dlPowerSupplySumNat ? angular.equals({}, $scope.dlPowerSupplySumNat.power_supply.Table_6) : true;
        return isNull;

   }




 })
