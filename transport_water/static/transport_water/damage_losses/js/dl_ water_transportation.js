var app = angular.module('dlWaterTransApp', ['underscore']);

app.controller("DlWaterTransController", function ($scope,$http,$parse, _) {

 $scope.district;
 $scope.incident;
 $scope.bs_data=[];
 $scope.dl_data={};
 $scope.is_edit = false;
 $scope.submitted = false;
 $scope.Districts=[];
 $scope.is_valid_data = true;
 $scope.DlWaterDmgWcrafts_num_tdestroyed_public = null;
 $scope.DlWaterDmgWcrafts_num_tdestroyed_private = null;
 $scope.DlWaterDmgWcrafts_num_pdestroyed_public = null;
 $scope.DlWaterDmgWcrafts_num_pdestroyed_private = null;


    var init_data = {
    'transport_water':{
        'Table_2': {
            'DlWaterDmgWcrafts': [ {
                assets: 'Ships',
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
            },
            {
                assets: 'Ferries',
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
            },
            {
                assets: 'Total',
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
            }],
            'DlWaterDmgEquipment': [ {
                assets: 'Navigation equipment',
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
            },
            {
                assets: 'Baggage handling',
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
            },
            {
                assets: 'Security equipment',
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
            },
            {
                assets: 'Vehicles',
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
            },
            {
                assets: 'Office equipment',
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
            },
            {
                assets: 'Total',
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
            }],
             'DlWaterDmgMaterials': [ {
                assets: 'Fuel (Liters)',
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
            },
            {
                assets: 'Total',
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
            },
            ],
//            'DlWaterDmgStructures': [ {
//                assets: 'Ports',
//                num_tdestroyed_num: null,
//                num_tdestroyed_meters: null,
//                num_pdestroyed_num: null,
//                num_pdestroyed_meters: null,
//                tot_damages: null,
//            },
//            {
//                assets: 'Total',
//                num_tdestroyed_num: null,
//                num_tdestroyed_meters: null,
//                num_pdestroyed_num: null,
//                num_pdestroyed_meters: null,
//                tot_damages: null,
//            },],
            'DlWaterDmgBuildings': [{
                assets:'1 floor',
                tdestroyed_num: null,
                tdestroyed_smeters: null,
                pdamaged_num: null,
                pdamaged_roof: null,
                wall: null,
                floor: null,
                tot_damages: null,
            },
            {
                assets:'2-3 floors',
                tdestroyed_num: null,
                tdestroyed_smeters: null,
                pdamaged_num: null,
                pdamaged_roof: null,
                wall: null,
                floor: null,
                tot_damages: null,
            },
            {
                assets:'More than 3 floors',
                tdestroyed_num: null,
                tdestroyed_smeters: null,
                pdamaged_num: null,
                pdamaged_roof: null,
                wall: null,
                floor: null,
                tot_damages: null,
            },
            {
                assets:'Total',
                tdestroyed_num: null,
                tdestroyed_smeters: null,
                pdamaged_num: null,
                pdamaged_roof: null,
                wall: null,
                floor: null,
                tot_damages: null,
            },],
            'DlWaterLosFi': [{
                type_los:'Income of companies',
                year_1_pub: null,
                year_1_pvt: null,
                year_2_pub: null,
                year_2_pvt: null,
                tot_los_pub: null,
                tot_los_pvt: null,
            },
            {
                type_los:'Income of ports',
                year_1_pub: null,
                year_1_pvt: null,
                year_2_pub: null,
                year_2_pvt: null,
                tot_los_pub: null,
                tot_los_pvt: null,
            },
            {
                type_los:'Total',
                year_1_pub: null,
                year_1_pvt: null,
                year_2_pub: null,
                year_2_pvt: null,
                tot_los_pub: null,
                tot_los_pvt: null,
            }],
            'DlWaterLosOther': [{
                type_los:'Cleaning up of debris',
                year_1_pub: null,
                year_1_pvt: null,
                year_2_pub: null,
                year_2_pvt: null,
                tot_los_pub: null,
                tot_los_pvt: null,
            },
            {
                type_los:'Higher operating costs',
                year_1_pub: null,
                year_1_pvt: null,
                year_2_pub: null,
                year_2_pvt: null,
                tot_los_pub: null,
                tot_los_pvt: null,
            },
            {
                type_los:'Other unexpected expenses',
                year_1_pub: null,
                year_1_pvt: null,
                year_2_pub: null,
                year_2_pvt: null,
                tot_los_pub: null,
                tot_los_pvt: null,
            },
            {
                type_los:'TOTAL LOSSES',
                year_1_pub: null,
                year_1_pvt: null,
                year_2_pub: null,
                year_2_pvt: null,
                tot_los_pub: null,
                tot_los_pvt: null,
            }]

            }

        }
    }

    $scope.dlWaterTransportation = angular.copy(init_data);
    $scope.saveDlData = function() {

    $scope.submitted = true;

        $http({
            method: 'POST',
            url:'/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dlWaterTransportation,
                'com_data': {
                    'district_id':  $scope.district.district__id,
                    'incident_id': $scope.incident,

                },
                'is_edit' : $scope.is_edit,

            }),
            dataType: 'json',
        }).then(function successCallback(response) {

                 if(response.data == 'False')
             $scope.is_valid_data = false;
                else
             $("#modal-container-239453").modal('show');

        }, function errorCallback(response) {


        });

    }

    // get relevant base-line data for calculations
    $scope.changedValue=function getBsData(selectedValue) {

        if($scope.incident && selectedValue){

           $http({
               method: "POST",
               url: "/fetch_incident_districts",
               data: angular.toJson({'incident': $scope.incident }),
        }).success(function(data) {
            $scope.districts = data;
            $scope.district = "";


    })
        }

        if($scope.incident && $scope.district ){

            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                  'db_tables': ['BsAstWaterWcrafts','BsAstWaterEquipment','BsAstWaterMaterials','BsAstWaterBuildings'],
                  'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        },
                   'sector':'transport_water',
                   'table_name': 'Table_1'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                  $scope.bs_data[key] = JSON.parse(value);
                });

                generateRefencedData();


            }, function errorCallback(response) {


            });
        }

    }

  function generateRefencedData(){
  data_array = ['BsAstWaterWcrafts','BsAstWaterEquipment','BsAstWaterMaterials','BsAstWaterStructures'];
  var dl_model1 = null;
  var dl_model2 = null;
  angular.forEach(data_array, function(value, key) {
    obj_array = $scope.bs_data[value];
    model_name = value;

    var particular_value_1 = null;
    var particular_value_2 = null;
    var particular_value_3 = null;

    if(model_name == 'BsAstWaterWcrafts')
    {
       dl_model1 = 'DlWaterDmgWcrafts';
       particular_value_1 = 'Total';
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model1] = [];

    }
    if(model_name == 'BsAstWaterEquipment')
    {
       dl_model1 = 'DlWaterDmgEquipment';
       particular_value_1 = 'Total';
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model1] = [];

    }
     if(model_name == 'BsAstWaterMaterials')
    {
       dl_model1 = 'DlWaterDmgMaterials';
       particular_value_1 = 'Total';
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model1] = [];

    }
//     if(model_name == 'BsAstWaterStructures')
//    {
//       dl_model2 = 'DlWaterDmgStructures';
//       particular_value_2 = 'Total';
//       $scope.dlWaterTransportation.transport_water.Table_2[dl_model2] = [];
//
//    }

    var obj1 = {
       assets: particular_value_1,
       num_tdestroyed_public: null,
       num_tdestroyed_private: null,
       num_pdestroyed_public: null,
       num_pdestroyed_private: null,
       tot_dmg_private: null,
       tot_dmg_public: null,
    };
      var obj2 = {
        assets: particular_value_2,
        num_tdestroyed_num: null,
        num_tdestroyed_meters: null,
        num_pdestroyed_num: null,
        num_pdestroyed_meters: null,
    };

    angular.forEach(obj_array, function(value, key) {
    var obj1 = {
                assets: value.fields.assets,
                num_tdestroyed_public: null,
                num_tdestroyed_private: null,
                num_pdestroyed_public: null,
                num_pdestroyed_private: null,
                tot_dmg_private: null,
                tot_dmg_public: null,
              };
    var obj2 = {
                assets: value.fields.assets,
                num_tdestroyed_num: null,
                num_tdestroyed_meters: null,
                num_pdestroyed_num: null,
                num_pdestroyed_meters: null,
              };



    if(model_name == 'BsAstWaterWcrafts')
    {
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
    }
    if(model_name == 'BsAstWaterEquipment')
    {
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
    }
    if(model_name == 'BsAstWaterMaterials')
    {
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
    }
//    if(model_name == 'BsAstWaterStructures')
//    {
//       $scope.dlWaterTransportation.transport_water.Table_2[dl_model2].push(obj2);
//    }


    });

    if(model_name == 'BsAstWaterWcrafts')
    {
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
    }
    if(model_name == 'BsAstWaterEquipment')
    {
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
    }
    if(model_name == 'BsAstWaterMaterials')
    {
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model1].push(obj1);
    }
//    if(model_name == 'BsAstWaterStructures')
//    {
//       $scope.dlWaterTransportation.transport_water.Table_2[dl_model2].push(obj2);
//    }

  });

}

  $scope.CalPub=function(arr){
    var finaltotal = 0;

    angular.forEach(arr, function(value, key) {

     finaltotal = finaltotal + value.tot_dmg_public ;
    })

    return finaltotal;
    }

  $scope.CalPvt=function(arr){
    var finaltotal = 0;

    angular.forEach(arr, function(value, key) {

     finaltotal = finaltotal + value.tot_dmg_private ;
    })

    return finaltotal;
    }

  $scope.CalStruTot=function(arr){

    var finaltotal = 0;

    angular.forEach(arr, function(value, key) {
     if(value.tot_damages){
     finaltotal = finaltotal + value.tot_damages ;

     }
    })

    return finaltotal;
    }

   $scope.CalBuildingTot=function(arr){

    var finaltotal = 0;
    angular.forEach(arr, function(value, key) {
     finaltotal = finaltotal + value.tot_damages ;
    })

    return finaltotal;
    }

  $scope.CalFiPub=function(arr){
    var finaltotal = 0;

    angular.forEach(arr, function(value, key) {

     finaltotal = finaltotal + value.tot_los_pub ;
    })

    return finaltotal;
    }

  $scope.CalFiPvt=function(arr){
    var finaltotal = 0;

    angular.forEach(arr, function(value, key) {

     finaltotal = finaltotal + value.tot_los_pvt ;
    })

    return finaltotal;
    }

  $scope.calGrandTotalPub=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;
    var finaltotal4 = 0;
    var finaltotal5 = 0;
    var grantot = 0;

    var array1 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgWcrafts;
    var array2 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgEquipment;
    var array3 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgMaterials;
    var array4 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgStructures;
    var array5 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgBuildings;


    angular.forEach(array1, function(value, key) {

     finaltotal1 = finaltotal1 + value.tot_dmg_public ;
    })
    angular.forEach(array2, function(value, key) {

     finaltotal2 = finaltotal2 + value.tot_dmg_public ;
    })
    angular.forEach(array3, function(value, key) {

     finaltotal3 = finaltotal3 + value.tot_dmg_public ;
    })
    angular.forEach(array4, function(value, key) {
     finaltotal4 = finaltotal4 + value.tot_damages ;
    })
    angular.forEach(array5, function(value, key) {

     finaltotal5 = finaltotal5 + value.tot_damages;
    })
    grantot = grantot + finaltotal1+ finaltotal2 + finaltotal3  + finaltotal5;

    return grantot;
    }

  $scope.calGrandTotalPvt=function(){
    var finaltotal1 = 0;
    var finaltotal2 = 0;
    var finaltotal3 = 0;

    var grantot = 0;

    var array1 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgWcrafts;
    var array2 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgEquipment;
    var array3 = $scope.dlWaterTransportation.transport_water.Table_2.DlWaterDmgMaterials;



    angular.forEach(array1, function(value, key) {

     finaltotal1 = finaltotal1 + value.tot_dmg_private ;
    })
    angular.forEach(array2, function(value, key) {

     finaltotal2 = finaltotal2 + value.tot_dmg_private ;
    })
    angular.forEach(array3, function(value, key) {

     finaltotal3 = finaltotal3 + value.tot_dmg_private ;
    })

    grantot = grantot + finaltotal1+ finaltotal2 + finaltotal3 ;
    return grantot;
    }

  $scope.getTotal = function(model, property) {

        var array = $scope.dlWaterTransportation.transport_water.Table_2[model];
         console.log(array);
        var cumulative = null;
        var sums = _.map(array, function(obj) {
          if(obj.assets != 'Total')
            cumulative += obj[property];
            console.log(obj);
            return cumulative;

        });

        var the_string = model + '_' + property;
        var model = $parse(the_string);
        model.assign($scope, cumulative);



    }

  //Clear Function
  $scope.clear = function() {
        console.log("init")
        $scope.is_edit = false;
        $scope.dlWaterTransportation = angular.copy(init_data);
    }

    //Edit Data
  $scope.dlDataEdit = function(){

    $scope.is_edit = true;
    $scope.submitted = true;

    $http({
    method: "POST",
    url: '/dl_fetch_edit_data',
    data: angular.toJson({
    'table_name':  'Table_2',
    'sector':'transport_water',
    'com_data': {
           'district':  $scope.district.district__id,
            'incident': $scope.incident,
          },
           'is_edit':$scope.is_edit
           }),
    }).success(function(data) {

    console.log(data);


    $scope.dlWaterTransportation = data;
    })

}

   //Cancel Edit
    $scope.cancelEdit = function(){
       $scope.is_edit = false;
       $scope.dlComWtrSply = init_data;

    }

})


