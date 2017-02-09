var app = angular.module('dmLosOfMinFirmsDisApp', ['underscore']);

app.controller("DmLosOfMinFirmsDisController", function($scope,$http,$parse, _) {


    $scope.district;
    $scope.is_edit = false;
    $scope.incident;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.data;
    $scope.tot_damages;
    $scope.los_year1;
    $scope.los_year2;
    $scope.tot_losses;
    $scope.dPubTot = null;
    $scope.dPvtTot = null;
    $scope.dPubLosyear1 = null;
    $scope.dPubLosyear2 = null;
    $scope.dPvtLosTot = null;
    $scope.dPubLosTot = null;


    $scope.changedValue = function getDlData() {

        if ($scope.incident) {


            $http({
                method: "POST",
                url: '/fetch_incident_districts',
                data: angular.toJson({
                    'incident': $scope.incident
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.district = "";
                console.log(data);

            })
        }
    }

    $scope.LoadData = function(){

   $scope.tot_damages = null;
   $scope.is_edit = true;
   $scope.submitted = true;
    $http({
    method: "POST",
    url: '/dl_fetch_total_data',
    data: angular.toJson({
    'table_name':  'Table_5',
    'sector':'mining',
    'com_data': {
            'district':  $scope.district.district__id,
            'incident': $scope.incident,
          },
           'is_edit':$scope.is_edit
           }),
    }).success(function(data) {


    $scope.data=data;

    var arrayArti =  $scope.data.mining.Table_5.DlaDmgDistrict[0];
    var arrayLosArti = $scope.data.mining.Table_5.DlaLosDistrict[0];


     $scope.dPvtTot = arrayArti.tot_damages;
     $scope.dPvtLosyear1 = arrayLosArti.los_year1;
     $scope.dPvtLosyear2 = arrayLosArti.los_year2;


    })


}
    $scope.getTotal = function(model, property,$index) {

        var ownership = $scope.data.mining.Table_5.DloDmgDistrict[$index].ownership;

        if(ownership == 'Private'){

        $scope.dPvtTot = $scope.dPvtTot +
                         $scope.data.mining.Table_5.DloDmgDistrict[$index].tot_damages ?
                         $scope.data.mining.Table_5.DloDmgDistrict[$index].tot_damages : 0;

        $scope.dPvtLosyear1 = $scope.dPvtLosyear1 +
                         $scope.data.mining.Table_5.DloDmgDistrict[$index].los_year1 ?
                         $scope.data.mining.Table_5.DloDmgDistrict[$index].los_year1 : 0;

        $scope.dPvtLosyear2 = $scope.dPvtLosyear2 +
                         $scope.data.mining.Table_5.DloDmgDistrict[$index].los_year2 ?
                         $scope.data.mining.Table_5.DloDmgDistrict[$index].los_year2 : 0;

        }
        else{

         $scope.dPubTot = $scope.dPubTot +
                         $scope.data.mining.Table_5.DloDmgDistrict[$index].tot_damages ?
                         $scope.data.mining.Table_5.DloDmgDistrict[$index].tot_damages : 0 ;

         $scope.dPubLosyear1 = $scope.dPubLosyear1 +
                         $scope.data.mining.Table_5.DloLosDistrict[$index].los_year1 ?
                         $scope.data.mining.Table_5.DloLosDistrict[$index].los_year1 : 0;

         $scope.dPubLosyear2 = $scope.dPubLosyear2 +
                         $scope.data.mining.Table_5.DloLosDistrict[$index].los_year2 ?
                         $scope.data.mining.Table_5.DloLosDistrict[$index].los_year2 : 0;




        }

        $scope.dPvtLosTot = $scope.dPvtTot + $scope.dPvtLosyear1 + $scope.dPvtLosyear2 ;
        $scope.dPubLosTot = $scope.dPubTot + $scope.dPubLosyear1 + $scope.dPubLosyear2;

    }

})
