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
            'DlWaterDmgStructures': [ {
                assets: 'Ports',
                num_tdestroyed_num: null,
                num_tdestroyed_meters: null,
                num_pdestroyed_num: null,
                num_pdestroyed_meters: null,
                tot_damages: null,
            },
            {
                assets: 'Total',
                num_tdestroyed_num: null,
                num_tdestroyed_meters: null,
                num_pdestroyed_num: null,
                num_pdestroyed_meters: null,
                tot_damages: null,
            },],
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

    $scope.dlWaterTransportation = init_data;
    $scope.saveDlData = function() {

    console.log($scope.dlWaterTransportation);

    $scope.submitted = true;

        $http({
            method: 'POST',
            url:'/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dlWaterTransportation,
                'com_data': {
                    'district':  $scope.district.district__id,
                    'incident': $scope.incident,

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

            console.log(response);
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
            console.log(data);

    })
        }

        if($scope.incident && $scope.district ){

            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                  'db_tables': ['BsAstWaterWcrafts','BsAstWaterEquipment','BsAstWaterMaterials','BsAstWaterStructures','BsAstWaterBuildings'],
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

                console.log(response);
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
     if(model_name == 'BsAstWaterStructures')
    {
       dl_model2 = 'DlWaterDmgStructures';
       particular_value_2 = 'Total';
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model2] = [];

    }

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
    if(model_name == 'BsAstWaterStructures')
    {
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model2].push(obj2);
    }


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
    if(model_name == 'BsAstWaterStructures')
    {
       $scope.dlWaterTransportation.transport_water.Table_2[dl_model2].push(obj2);
    }


  });




}

  $scope.CalPub=function(arr){
    var finaltotal = 0;
    console.log(arr);
    angular.forEach(arr, function(value, key) {

     finaltotal = finaltotal + value.tot_dmg_public ;
    })
      console.log(finaltotal);
    return finaltotal;
    }

  $scope.CalPvt=function(arr){
    var finaltotal = 0;
     console.log(arr);
    angular.forEach(arr, function(value, key) {

     finaltotal = finaltotal + value.tot_dmg_private ;
    })
      console.log(finaltotal);
    return finaltotal;
    }

  $scope.CalStruTot=function(arr){
    var finaltotal = 0;
     console.log(arr);
    angular.forEach(arr, function(value, key) {

     finaltotal = finaltotal + value.tot_dmg_private ;
    })
      console.log(finaltotal);
    return finaltotal;
    }
     $scope.CalFiPub=function(arr){
    var finaltotal = 0;
     console.log(arr);
    angular.forEach(arr, function(value, key) {

     finaltotal = finaltotal + value.tot_los_pub ;
    })
      console.log(finaltotal);
    return finaltotal;
    }
       $scope.CalFiPvt=function(arr){
    var finaltotal = 0;
     console.log(arr);
    angular.forEach(arr, function(value, key) {

     finaltotal = finaltotal + value.tot_los_pvt ;
    })
      console.log(finaltotal);
    return finaltotal;
    }



})


