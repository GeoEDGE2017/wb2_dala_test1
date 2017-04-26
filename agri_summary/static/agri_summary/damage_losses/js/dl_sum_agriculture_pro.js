var app = angular.module('dlSummeryAgriProApp', ['underscore']);

app.controller("DlSummeryAgriProController", function ($scope, $http, $parse, _) {
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
    // declaring total variables
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

    // get relevant damage_losses data for calculations
    $scope.changedValue = function getDlData(selectProvinces) {

        if($scope.incident && selectProvinces) {

         fetchProvinces();
        }

    }
    $scope.provinces = [];

    function fetchProvinces()
    {

          $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                    'incident': $scope.incident
                   }),
            }).success(function(data) {
                $scope.provinces = data;
                $scope.province = "";
                console.log(data);

            })

    }

    $scope.fetchDlData = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;
            $http({
            method: "POST",
            url: '/dl_fetch_summary_disagtn',
            data: angular.toJson({
            'table_name':  ['Table_9','Table_5',],
            'sector': ['agri_agrarian','agri_livestock'],
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {



            $scope.dlAgriSumPro = data;

            })
    }

           $scope.checkIfNull = function()
   {
        var isNull = $scope.dlAgriSumPro ?
         ((angular.equals({}, $scope.dlAgriSumPro.agri_agrarian.Table_9) ) ||
         (angular.equals({}, $scope.dlAgriSumPro.agri_livestock.Table_5))
//         ||(angular.equals({}, $scope.dlAgriSumPro.agri_fisheries.Table_5))
         ) : true
         return isNull;
//         ||
//         (angular.equals({}, $scope.dlAgriSumPro.transport_rail.Table_3))) : true ;


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



        var totaldpub =  ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorDmgLosProvince[0] ?
                         ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorDmgLosProvince[0].dmg_los_pub ?
                         $scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorDmgLosProvince[0].dmg_los_pub : 0):0) +
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpNdaPubProvince[0] ?
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpNdaPubProvince[0].damages ?
                         $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpNdaPubProvince[0].damages : 0) : 0)
//                         ($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterDmgPubProvince[0] ?
//                         ($scope.dlTransSumPro.transport_water.Table_4[key].DlWaterDmgPubProvince[0].tot_dmg_public ?
//                         $scope.dlTransSumPro.transport_water.Table_4[key].DlWaterDmgPubProvince[0].tot_dmg_public : 0) : 0) +
//                         ($scope.dlTransSumPro.transport_rail.Table_3[key].TotDmgProvince[0] ?
//                         ($scope.dlTransSumPro.transport_rail.Table_3[key].TotDmgProvince[0].tot_damages ?
//                         $scope.dlTransSumPro.transport_rail.Table_3[key].TotDmgProvince[0].tot_damages : 0) : 0);

        var totaldpubstring = "totaldpub_"+ key;

        var model = $parse(totaldpubstring);
        model.assign($scope, totaldpub);

        $scope.grndtotaldpub = $scope.grndtotaldpub + totaldpub ;

        console.log('test',$scope.dlAgriSumPro.agri_agrarian);

       var totaldpvt =
                         ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorDmgLosProvince[0]?
                         ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorDmgLosProvince[0].dmg_los_pvt ?
                         $scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorDmgLosProvince[0].dmg_los_pvt : 0 ) : 0)+
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpNdaPvtProvince[0] ?
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpNdaPvtProvince[0].damages ?
                         $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpNdaPvtProvince[0].damages : 0) : 0);


        var totaldpvtstring = "totaldpvt_"+ key;

        var model = $parse(totaldpvtstring);
        model.assign($scope, totaldpvt);
        $scope.grndtotaldpvt = $scope.grndtotaldpvt + totaldpvt ;
        $scope.summaryDamages = $scope.grndtotaldpub + $scope.grndtotaldpvt;


         var totalyear1pub =
                         ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear1Province[0]?
                         ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear1Province[0].dmg_los_pub ?
                         $scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear1Province[0].dmg_los_pub : 0):0)  +
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPubProvince[0]?
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPubProvince[0].los_year_1 ?
                         $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPubProvince[0].los_year_1 : 0) : 0);


        var totalyear1pubstring = "totalyear1pub_"+ key;

        var model = $parse(totalyear1pubstring);
        model.assign($scope, totalyear1pub);
        $scope.grndtotalyear1pub = $scope.grndtotalyear1pub + totalyear1pub ;




         var totalyear1pvt =
                         ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear1Province[0] ?
                         ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear1Province[0].dmg_los_pvt ?
                         $scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear1Province[0].dmg_los_pvt : 0) :0) +
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPvtProvince[0] ?
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPvtProvince[0].los_year_1 ?
                         $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPvtProvince[0].los_year_1 : 0): 0 );

        var totalyear1pvtstring = "totalyear1pvt_"+ key;

        var model = $parse(totalyear1pvtstring);
        model.assign($scope, totalyear1pvt);
        $scope.grndtotalyear1pvt = $scope.grndtotalyear1pvt + totalyear1pvt ;
        $scope.summaryLossYear1 = $scope.grndtotalyear1pub + $scope.grndtotalyear1pvt;



         var totalyear2pub =
                         ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear2Province[0]?
                         ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear2Province[0].dmg_los_pub ?
                         $scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear2Province[0].dmg_los_pub : 0 ) :0)+
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPubProvince[0]?
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPubProvince[0].los_year_2 ?
                         $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPubProvince[0].los_year_2 : 0) :0)
                         ;

         var totalyear2pubstring = "totalyear2pub_"+ key;

         var model = $parse(totalyear2pubstring);
         model.assign($scope, totalyear2pub);
         $scope.grndtotalyear2pub = $scope.grndtotalyear2pub + totalyear2pub ;

         var totalyear2pvt =
                         ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear2Province[0] ?
                         ($scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear2Province[0].dmg_los_pvt ?
                         $scope.dlAgriSumPro.agri_agrarian.Table_9[key].DsorLosYear2Province[0].dmg_los_pvt : 0 ) : 0)+
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPvtProvince[0] ?
                         ($scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPvtProvince[0].los_year_2 ?
                         $scope.dlAgriSumPro.agri_livestock.Table_5[key].DlpLosPvtProvince[0].los_year_2 : 0) : 0 );

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
