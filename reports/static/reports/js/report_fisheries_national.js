//Table 7
//Table 6
var app = angular.module('reportAgriFisheriesNatApp', ['underscore', 'ui.bootstrap', 'popoverToggle', 'ngPrint']);

app.controller("reportAgriFisheriesNatController", function ($scope,$http,$parse, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    var damagepublic = null;
    $scope.grnddamagepublic = null;
    var damageprivate = null;
    $scope.grnddamageprivate = null;
    var losPubliceyear1 = null;
    // declaring total variables
    $scope.total_num_affected = 0;
    $scope.grndlosPubliceyear1 = null;
    $scope.grndlosPPrivateyear1 = null;
    $scope.grndlosPublicyear2 = null;
    $scope.grndlosPrivateyear2 = null;
    $scope.finalGrandTotPublic = null;
    $scope.finalGrandTotPrivate = null;


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
            'sector': 'agri_fisheries',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load :', data);
            $scope.data= data;
            $scope.dlAgriFisheriesSumNat = data;


          if($scope.checkIfNull())
             $("#modal-container-239456").modal('show');

            })

    }
            $scope.checkIfNull = function()
   {
        console.log("in")
        var isNull = $scope.dlAgriFisheriesSumNat ? angular.equals({}, $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6) : true;
        return isNull;

   }


       $scope.getTotal = function(key) {

        $scope.finaltotalprivate = 0;

        console.log('test',$scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0]);

        var damagepublic =
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPubNational[0] ?
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPubNational[0].dmg_pub ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPubNational[0].dmg_pub : 0) : 0 ) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPubNational[1] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPubNational[1].dmg_pub ?
        $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPubNational[1].dmg_pub : 0):0) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPubNational[2] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPubNational[2].dmg_pub ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPubNational[2].dmg_pub:0):0)
        ;


        var damagepublicstring = "damagepublic_"+ key;

        var model = $parse(damagepublicstring);
        model.assign($scope, damagepublic);

        $scope.grnddamagepublic = $scope.grnddamagepublic + damagepublic ;


         var damageprivate =
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPvtNational[0] ?
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPvtNational[0].dmg_pvt ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPvtNational[0].dmg_pvt : 0) : 0 ) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPvtNational[1] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPvtNational[1].dmg_pvt ?
        $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPvtNational[1].dmg_pvt : 0):0) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPvtNational[2] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPvtNational[2].dmg_pvt ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfDmgPvtNational[2].dmg_pvt:0):0)
        ;


        var damageprivatestring = "damageprivate_"+ key;

        var model = $parse(damageprivatestring);
        model.assign($scope, damageprivate);

        $scope.grnddamageprivate = $scope.grnddamageprivate + damageprivate ;


          var losPubliceyear1 =
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0] ?
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0].los_year_1_pub ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0].los_year_1_pub : 0) : 0 ) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_1_pub ?
        $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_1_pub : 0):0) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosMfisheriesNational[0] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosMfisheriesNational[0].los_year_1_pub ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosMfisheriesNational[0].los_year_1_pub:0):0)
        ;


        var losPubliceyear1string = "losPubliceyear1_"+ key;

        var model = $parse(losPubliceyear1string);
        model.assign($scope, losPubliceyear1);

        $scope.grndlosPubliceyear1 = $scope.grndlosPubliceyear1 + losPubliceyear1 ;

        var losPrivateyear1 =
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0] ?
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0].los_year_1_pvt ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0].los_year_1_pvt : 0) : 0 ) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_1_pvt ?
        $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_1_pvt : 0):0) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_1_pvt ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_1_pvt:0):0)
        ;


        var losPrivateyear1string = "losPrivateyear1_"+ key;

        var model = $parse(losPrivateyear1string);
        model.assign($scope, losPrivateyear1);

        $scope.grndlosPPrivateyear1 = $scope.grndlosPPrivateyear1 + losPrivateyear1 ;
        console.log('Test',$scope.grndlosPPrivateyear1);

        var losPublicyear2 =
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0] ?
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0].los_year_2_pub ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0].los_year_2_pub : 0) : 0 ) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_2_pub ?
        $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_2_pub : 0):0) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_2_pub ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_2_pub:0):0)
        ;


        var losPublicyear2string = "losPublicyear2_"+ key;

        var model = $parse(losPublicyear2string);
        model.assign($scope, losPublicyear2);

        $scope.grndlosPublicyear2 = $scope.grndlosPublicyear2 + losPublicyear2 ;


        var losPrivateyear2 =
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0] ?
         ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0].los_year_2_pvt ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosIfisheriesNational[0].los_year_2_pvt : 0) : 0 ) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_2_pvt ?
        $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_2_pvt : 0):0) +

        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0] ?
        ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_2_pvt ?
         $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[key].DlfLosRfisheriesNational[0].los_year_2_pvt:0):0)
        ;


        var losPrivateyear2string = "losPrivateyear2_"+ key;

        var model = $parse(losPubliceyear1string);
        model.assign($scope, losPublicyear2);

        $scope.grndlosPrivateyear2 = $scope.grndlosPrivateyear2+ losPrivateyear2 ;

        $scope.finalGrandTotPublic =
        $scope.grnddamagepublic + $scope.grndlosPubliceyear1  + $scope.grndlosPublicyear2 ;

        $scope.finalGrandTotPrivate =
        $scope.grnddamageprivate + $scope.grndlosPPrivateyear1 + $scope.grndlosPrivateyear2;
    }

 })
