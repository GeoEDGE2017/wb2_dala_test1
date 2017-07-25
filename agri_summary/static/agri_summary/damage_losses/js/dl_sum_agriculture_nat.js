//Table 3
var app = angular.module('dlSummeryAgriNatApp', ['underscore']);

app.controller("DlSummeryAgriNatController", function ($scope, $http, $parse, _) {
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
    $scope.totalyear2vt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    $scope.total_num_affected = 0;
    $scope.grndtotaldpub = 0;
    $scope.grndtotaldpvt = 0;
    $scope.grndtotalyear1pub = 0;
    $scope.grndtotalyear1pvt = 0;
    $scope.grndtotalyear2pub = 0;
    $scope.grndtotalyear2pvt = 0;
    $scope.grndfinaltotalpublic = 0;
    $scope.grndfinaltotalprivate = 0;
    $scope.summaryDamages = 0;
    $scope.summaryLossYear1 = 0;
    $scope.summaryLossYear2 = 0;
    $scope.summaryTotal = 0;
    $scope.user_id;

    // get relevant damage_losses data for calculations

    $scope.fetchDlData = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;
        $http({
            method: "POST",
            url: '/dl_fetch_summary_disagtn',
            data: angular.toJson({
                'table_name':  ['Table_10','Table_6',],
                'sector': ['agri_agrarian','agri_livestock'],
                'com_data': {
                    'incident': $scope.incident,
                },
            }),
        }).success(function(data) {
            $scope.dlAgriSumNat = data;
        })
    }

    $scope.checkIfNull = function(){
        var isNull = $scope.dlAgriSumNat ?
        ((angular.equals({}, $scope.dlAgriSumNat.agri_agrarian.Table_10) ) ||
        (angular.equals({}, $scope.dlAgriSumNat.agri_livestock.Table_6))) : true
        return isNull;
    }

   $scope.convertToInt = function(val1,val2){
        var sum = parseInt(val1) + parseInt(val2);
        return sum;
    }

   $scope.convertTotal = function(val1,val2,val3,val4){
        var sum = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) ;
        return sum;
    }

   $scope.getTotal = function(key) {

        $scope.finaltotalprivate = 0;

        var totaldpub =  ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[0] ?
                         ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[0].dmg_los_pub ?
                         $scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[0].dmg_los_pub : 0):0) +
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpNdaPubNational[0] ?
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpNdaPubNational[0].damages ?
                         $scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpNdaPubNational[0].damages : 0) : 0)


        var totaldpubstring = "totaldpub_"+ key;

        var model = $parse(totaldpubstring);
        model.assign($scope, totaldpub);

        $scope.grndtotaldpub = $scope.grndtotaldpub + totaldpub ;

        console.log('test',$scope.dlAgriSumNat.agri_agrarian);

       var totaldpvt =
                         ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[0]?
                         ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[0].dmg_los_pvt ?
                         $scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorDmgLosNational[0].dmg_los_pvt : 0 ) : 0)+
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpNdaPvtNational[0] ?
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpNdaPvtNational[0].damages ?
                         $scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpNdaPvtNational[0].damages : 0) : 0);


        var totaldpvtstring = "totaldpvt_"+ key;

        var model = $parse(totaldpvtstring);
        model.assign($scope, totaldpvt);
        $scope.grndtotaldpvt = $scope.grndtotaldpvt + totaldpvt ;
        $scope.summaryDamages = $scope.grndtotaldpub + $scope.grndtotaldpvt;


         var totalyear1pub =
                         ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[0]?
                         ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[0].dmg_los_pub ?
                         $scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[0].dmg_los_pub : 0):0)  +
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPubNational[0]?
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPubNational[0].los_year_1 ?
                         $scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPubNational[0].los_year_1 : 0) : 0);


        var totalyear1pubstring = "totalyear1pub_"+ key;

        var model = $parse(totalyear1pubstring);
        model.assign($scope, totalyear1pub);
        $scope.grndtotalyear1pub = $scope.grndtotalyear1pub + totalyear1pub ;




         var totalyear1pvt =
                         ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[0] ?
                         ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[0].dmg_los_pvt ?
                         $scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear1National[0].dmg_los_pvt : 0) :0) +
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[0] ?
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[0].los_year_1 ?
                         $scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[0].los_year_1 : 0): 0 );

        var totalyear1pvtstring = "totalyear1pvt_"+ key;

        var model = $parse(totalyear1pvtstring);
        model.assign($scope, totalyear1pvt);
        $scope.grndtotalyear1pvt = $scope.grndtotalyear1pvt + totalyear1pvt ;
        $scope.summaryLossYear1 = $scope.grndtotalyear1pub + $scope.grndtotalyear1pvt;



         var totalyear2pub =
                         ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[0]?
                         ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[0].dmg_los_pub ?
                         $scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[0].dmg_los_pub : 0 ) :0)+
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPubNational[0]?
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPubNational[0].los_year_2 ?
                         $scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPubNational[0].los_year_2 : 0) :0)
                         ;

         var totalyear2pubstring = "totalyear2pub_"+ key;

         var model = $parse(totalyear2pubstring);
         model.assign($scope, totalyear2pub);
         $scope.grndtotalyear2pub = $scope.grndtotalyear2pub + totalyear2pub ;

         var totalyear2pvt =
                         ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[0] ?
                         ($scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[0].dmg_los_pvt ?
                         $scope.dlAgriSumNat.agri_agrarian.Table_10[key].DsorLosYear2National[0].dmg_los_pvt : 0 ) : 0)+
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[0] ?
                         ($scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[0].los_year_2 ?
                         $scope.dlAgriSumNat.agri_livestock.Table_6[key].DlpLosPvtNational[0].los_year_2 : 0) : 0 );

         var totalyear2pvtstring = "totalyear2pvt_"+ key;

         var model = $parse(totalyear2pvtstring);
         model.assign($scope, totalyear2pvt);
         $scope.grndtotalyear2pvt = $scope.grndtotalyear2pvt + totalyear2pvt ;
         $scope.summaryLossYear2 = $scope.grndtotalyear2pub + $scope.grndtotalyear2pvt;


         var finaltotalpublic = totaldpub + totalyear1pub + totalyear2pub;

         var finaltotalpublicstring = "finaltotalpublic_"+ key;

         var model = $parse(finaltotalpublicstring);
         model.assign($scope, finaltotalpublic);
         $scope.grndfinaltotalpublic = $scope.grndfinaltotalpublic + finaltotalpublic ;


         var finaltotalprivate = totaldpvt + totalyear1pvt + totalyear2pvt;

         var finaltotalprivatestring = "finaltotalprivate_"+ key;

         var model = $parse(finaltotalprivatestring);
         model.assign($scope, finaltotalprivate);
         $scope.grndfinaltotalprivate = $scope.grndfinaltotalprivate + finaltotalprivate ;
         $scope.summaryTotal = $scope.grndfinaltotalpublic + $scope.grndfinaltotalprivate;
    }

 })
