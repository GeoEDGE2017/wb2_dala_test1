var app = angular.module('dlSummFormlInformldisApp', [])

app.controller('dlSummFormlInformldisController', ['$scope', '$http', function($scope, $http) {

    $scope.districts;
    $scope.incident;
    $scope.district;
    $scope.data;
    $scope.table;
    $scope.table2;
    $scope.table3;
    $scope.informalTable;
    $scope.businessTypes;
    $scope.summaryTotal = {};
    $scope.summaryTotalInf = {};
    $scope.businessData = [];
    $scope.indSubSec;
    $scope.serSubSec;
    $scope.industryTotals = [];
    $scope.industryTotal = {};
    $scope.serviceTotals = [];
    $scope.serviceTotal = {};
    $scope.data2;
    $scope.data3;
    $scope.user_id;

    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({
                    'incident': $scope.incident,
                    'user':$scope.user_id,
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
            })
        }
        if($scope.incident && $scope.district ) {
             $scope.loadData();
             $scope.loadData2();
             $scope.loadData3();
        }
    }

    $scope.loadData = function() {
        if($scope.incident && $scope.district && $scope.district.district__id) {
                $scope.isLoded = true;
                $scope.tot_damages = null;
                $scope.is_edit = true;
                $http({
                    method: "POST",
                    url: '/dl_fetch_summary_dis_disagtn',
                    data: angular.toJson({
                        'table_name':  ['Table_6'],
                        'sector': ['industry_services'],
                        'com_data': {
                            'district':  $scope.district.district__id,
                            'incident': $scope.incident,
                        },
                    }),
                }).success(function(data) {
                $scope.data=data.industry_services.Table_6;
                $scope.makeTable();
                console.log($scope.data);
            })
        }
    }

    $scope.loadData2 = function() {
        if($scope.incident && $scope.district && $scope.district.district__id) {
            $scope.isLoded = true;
            $scope.tot_damages = null;
            $scope.is_edit = true;
            $http({
                method: "POST",
                url: '/dl_fetch_summary_dis_disagtn',
                data: angular.toJson({
                    'table_name':  ['Table_6_2'],
                    'sector': ['industry_services'],
                    'com_data': {
                        'district':  $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.data2=data.industry_services.Table_6_2;
                $scope.makeTable2();
            })
        }
    }

    $scope.loadData3 = function() {
        if($scope.incident && $scope.district && $scope.district.district__id) {
            $scope.isLoded = true;
            $scope.tot_damages = null;
            $scope.is_edit = true;
            $http({
                method: "POST",
                url: '/dl_fetch_summary_dis_disagtn',
                    data: angular.toJson({
                    'table_name':  ['Table_6_3'],
                    'sector': ['industry_services'],
                    'com_data': {
                        'district':  $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                }),
            }).success(function(data) {
                $scope.data3=data.industry_services.Table_6_3;
                $scope.makeTable3();
            })
        }
    }


   $scope.makeTable = function(){
        if($scope.data != null){

            $scope.table = {};
            $scope.table.industry = {};
            $scope.table.service = {};

            angular.forEach($scope.indSubSec, function(value, key) {

//                console.log(value);
                $scope.table.industry[value.industry] = {'name':value.industry }
                $scope.table.industry[value.industry].numAffected = {};
                $scope.table.industry[value.industry].year1Damage = {};
                $scope.table.industry[value.industry].year1Damage = {};
                $scope.table.industry[value.industry].year1Loss = {};
                $scope.table.industry[value.industry].year2Loss = {};


                angular.forEach($scope.data.DlNumAffBusIndustry, function(value2, key) {
                    if($scope.table.industry[value.industry].name == value2.assets)
                        {
                            $scope.table.industry[value.industry].numAffected = value2;
                        }
                })

                angular.forEach($scope.data.DmgFrmYear1District, function(value2, key) {
                    if($scope.table.industry[value.industry].name == value2.sector)
                        {
//                              console.log("secotr", value2.sector);
                              if(value2.ownership){
                                  $scope.table.industry[value.industry].year1Damage[value2.ownership] = value2.tot_damages;
                              }
                        }
                })

                angular.forEach($scope.data.LosFrmYear1District, function(value2, key) {
                    if($scope.table.industry[value.industry].name == value2.sector)
                        {

                              if(value2.ownership){
                                  $scope.table.industry[value.industry].year1Loss[value2.ownership] = value2.los_year1;
                              }
                        }
                })

                angular.forEach($scope.data.LosFrmYear2District, function(value2, key) {
                    if($scope.table.industry[value.industry].name == value2.sector)
                        {

                              if(value2.ownership){
                                  $scope.table.industry[value.industry].year2Loss[value2.ownership] = value2.los_year2;
                              }
                        }
                })

            })


//            service sub sec
            angular.forEach($scope.serSubSec, function(value, key) {

//                console.log(value);
                $scope.table.service[value.service] = {'name':value.service }
                $scope.table.service[value.service].numAffected = {};
                $scope.table.service[value.service].year1Damage = {};
                $scope.table.service[value.service].year1Damage = {};
                $scope.table.service[value.service].year1Loss = {};
                $scope.table.service[value.service].year2Loss = {};


                angular.forEach($scope.data.DlNumAffBusServices, function(value2, key) {
                    if($scope.table.service[value.service].name == value2.assets)
                        {
                            $scope.table.service[value.service].numAffected = value2;
                        }
                })

                angular.forEach($scope.data.DmgFrmYear1District, function(value2, key) {
                    if($scope.table.service[value.service].name == value2.sector)
                        {
                            console.log("secotr ser ", value2);
                              if(value2.ownership){
                                  $scope.table.service[value.service].year1Damage[value2.ownership] = value2.tot_damages;
                              }
                        }
                })

                angular.forEach($scope.data.LosFrmYear1District, function(value2, key) {
                    if($scope.table.service[value.service].name == value2.sector)
                        {

                              if(value2.ownership){
                                  $scope.table.service[value.service].year1Loss[value2.ownership] = value2.los_year1;
                              }
                        }
                })

                angular.forEach($scope.data.LosFrmYear2District, function(value2, key) {
                    if($scope.table.service[value.service].name == value2.sector)
                        {

                              if(value2.ownership){
                                  $scope.table.service[value.service].year2Loss[value2.ownership] = value2.los_year2;
                              }
                        }
                })

            })

            console.log('table', $scope.table);
         }
    }

   $scope.makeTable2 = function(){
        if($scope.data2 != null){

            $scope.table2 = {};

           angular.forEach($scope.data2.DlInfNumBusDistrict, function(value, key) {


                $scope.table2[value.assets] = {'name':value.assets }
                $scope.table2[value.assets].year1Damage = {};
                $scope.table2[value.assets].year1Loss = {};
                $scope.table2[value.assets].year2Loss = {};

                console.log($scope.data2);

                angular.forEach($scope.data2.DlInfNumBusDistrict, function(value2, key) {
                      if(value2.assets == value.assets){
                            $scope.table2[value.assets].tot_num_bus_affected = value2.tot_num_bus_affected;
                      }
                })

                angular.forEach($scope.data2.DlInfTotLodTrdY1District, function(value2, key) {
                      if('Trading' == value.assets){
                            $scope.table2[value.assets].tot_los_year1 = value2.tot_los_year1;
                      }
                })

                angular.forEach($scope.data2.DlInfTotLodTrdY2District, function(value2, key) {
                      if('Trading' == value.assets){
                            $scope.table2[value.assets].tot_los_year2 = value2.tot_los_year2;
                      }
                })

                angular.forEach($scope.data2.DlInfTotLosSerY1District, function(value2, key) {
                      if('Services' == value.assets){
                            $scope.table2[value.assets].tot_los_year1 = value2.tot_los_year1;
                      }
                })

                angular.forEach($scope.data2.DlInfTotLosSerY2District, function(value2, key) {
                      if('Services' == value.assets){
                            $scope.table2[value.assets].tot_los_year2 = value2.tot_los_year2;
                      }
                })

                angular.forEach($scope.data2.DlInfTotLosOthY1District, function(value2, key) {
                      if('Others' == value.assets){
                            $scope.table2[value.assets].tot_los_year1 = value2.tot_los_year1;
                      }
                })

                angular.forEach($scope.data2.DlInfTotLosOthY2District, function(value2, key) {
                      if('Others' == value.assets){
                            $scope.table2[value.assets].tot_los_year2 = value2.tot_los_year2    ;
                      }
                })

                angular.forEach($scope.data2.DlInfTotLosFoodY1District, function(value2, key) {
                      if('Food processing' == value.assets){
                            $scope.table2[value.assets].tot_los_year1 = value2.tot_los_year1   ;
                      }
                })

                angular.forEach($scope.data2.DlInfTotLosFoodY2District, function(value2, key) {
                      if('Food processing' == value.assets){
                            $scope.table2[value.assets].tot_los_year2 = value2.tot_los_year2    ;
                      }
                })

             })
                console.log('table2', $scope.table2);
        }
    }

   $scope.makeTable3 = function(){
        if($scope.data3 != null){

            $scope.table3 = {};

           angular.forEach($scope.data3.DlInfDmgDistrict, function(value, key) {


                $scope.table3[value.assets] = {'name':value.assets }


                 angular.forEach($scope.data3.DlInfDmgDistrict, function(value2, key) {
                      if(value2.assets == value.assets){
                            console.log("found", value2)
                            $scope.table3[value.assets].tot_damages = value2.tot_damages;
                      }
//                    $scope.table.formal[value].year1Damage[value2.ownership] = value2.tot_damages;
                })

//               $scope.table3[value.assets].year1Loss['Private'] = $scope.data2.DlInfTotLodTrdY1District[value.assets].tot_los_year1;

             })
                console.log('table3', $scope.table3);
        }
    }

    $scope.loadBusinessSubSectorsInd = function(){
        $http({
            method: "POST",
            url: "/fetch_entities_plain_column", //single column data load
            data: angular.toJson({
            'model': 'BsFrmBusIndustry', //BsFrmBusIndustry
            'sector':'industry_services', //industry_services
            'col': 'industry',
             }),
            }).success(function(data) {


            $scope.indSubSec = data;

            //console.log("ind", $scope.indSubSec);


            })

    }

    $scope.loadBusinessSubSectorsSer = function(){
        $http({
            method: "POST",
            url: "/fetch_entities_plain_column", //single column data load
            data: angular.toJson({
            'model': 'BsFrmBusServices', //BsFrmBusServices
            'sector':'industry_services', //industry_services
            'col': 'service',
             }),
            }).success(function(data) {

            //console.log(data);
            $scope.serSubSec = data;

            })

    }




    $scope.getindustryTotal = function(col){
        var sum = 0;
        angular.forEach($scope.industryTotals, function(value, key) {
            sum += value[col];
        })
        return sum;
    }

    $scope.getserviceTotal = function(col){
        var sum = 0;
        angular.forEach($scope.serviceTotals, function(value, key) {
            sum += value[col];
        })
        return sum;
    }

    $scope.getSum3 = function(val1, val2, val3){
        var final_val = 0;
        if(!isNaN(val1)) final_val += val1;
        if(!isNaN(val2)) final_val += val2;
        if(!isNaN(val3)) final_val += val3;

        return final_val;
    }

    $scope.getSum2 = function(val1, val2){
        var final_val = 0;
        if(!isNaN(val1)) final_val += val1;
        if(!isNaN(val2)) final_val += val2;
        return final_val;
    }

    $scope.getGrandTotCol = function(col){
        var final_val = 0;

        angular.forEach($scope.provinceTotals, function(value, key) {

            final_val += $scope.getConvertedVal( value[col] );
        })

        return final_val;
    }


    $scope.getConvertedVal = function(val){
        if(!val)    return 0;
        if(isNaN(val)) return 0;
        return val;
    }


    $scope.loadBusinessSubSectorsInd();
    $scope.loadBusinessSubSectorsSer();


}])
