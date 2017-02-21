//Table 4
var app = angular.module('dlRoadBrdgsApp', ['underscore'])

app.controller('dlRoadBrdgsController', function($scope, $http, $parse, _) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;
    $scope.dlDate;
    $scope.bs_data={};
    $scope.baselineDate;
    var total=0;
    $scope.is_edit = false;
    $scope.is_valid_data = true;
    $scope.DlRbdLosses_year_2 = null;
    $scope.DlRbdLosses_year_1 = null;
    $scope.tot = null;

    var init_data = {
        'transport_land' : {
            'Table_4': {
                'DlRbdRclassification' :[{
                    road_classification : 'Class A',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },{
                    road_classification : 'Class B',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },{
                    road_classification : 'Class C',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },{
                    road_classification : 'Class D',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },{
                    road_classification : 'Class E',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },{
                    road_classification : 'Total',
                    tot_dest_concrete : null,
                    tot_dest_asphalt : null,
                    tot_dest_gravel : null,
                    tot_dest_earth : null,
                    part_dest_concrete : null,
                    part_dest_asphalt : null,
                    part_dest_gravel : null,
                    part_dest_earth : null,
                    damages : null,
                },],
                'DlRbdTbridges' : [{
                    type_bridges : 'Steel Bridges',
                    tot_dest_2_lanes : null,
                    tot_dest_multi_lanes : null,
                    part_dest_2_lanes : null,
                    part_dest_multi_lanes : null,
                    damages : null,
                },{
                    type_bridges : 'Wooden bridges',
                    tot_dest_2_lanes : null,
                    tot_dest_multi_lanes : null,
                    part_dest_2_lanes : null,
                    part_dest_multi_lanes : null,
                    damages : null,
                }, {
                    type_bridges : 'Total',
                    tot_dest_2_lanes : null,
                    tot_dest_multi_lanes : null,
                    part_dest_2_lanes : null,
                    part_dest_multi_lanes : null,
                    damages : null,
                }],
                'DlRbdTculverts' : [{
                    type_culverts : 'Box Culvert',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }, {
                    type_culverts : 'Total',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }],
                'DlRbdTrwalls' : [{
                    type_retain_walls : 'RRM',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }, {
                    type_retain_walls : 'Total',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }],
                'DlRbdTdrains' : [{
                    type_drains : 'Concrete',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                },{
                    type_drains : 'Bricks',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                },{
                    type_drains : 'Earth',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                },{
                    type_drains : 'Total',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                },{
                    type_drains : 'TOTAL DAMAGES',
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                }],
                'DlRbdLosses' : [{
                    loss_type : 'Foregone income from toll fees',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                 },{
                    loss_type : 'Cleaning up of debris',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                 },{
                    loss_type : 'Higher operating costs',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                 },{
                    loss_type : 'Other unexpected expenses',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                 },{
                    loss_type : 'TOTAL LOSSES',
                    year_1 : null,
                    year_2 : null,
                    part_destroyed : null,
                    losses : null,
                 }]
            }
        }
    }

    $scope.dlRoadBrdgs = init_data;

    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";

            })
        }

        if($scope.incident && $scope.district ){
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                  'db_tables': ['BsRbuTbridges', 'BsRbuTculverts', 'BsRbuTrwalls', 'BsRbuTdrains','BsRbuRclassificattion'],
                  'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        },
                   'table_name': 'Table_1',
                   'sector':'transport_land'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                  $scope.bs_data[key] = JSON.parse(value);
                });

                generateRefencedData();
                 $scope.calTotal();

            }, function errorCallback(response) {
            });
        }
    }

    function generateRefencedData() {
        data_array = ['BsRbuTbridges', 'BsRbuTculverts', 'BsRbuTrwalls', 'BsRbuTdrains'];
            var dl_model1 = null;
            var dl_model2 = null;
            var dl_model3 = null;
            var dl_model4 = null;

        angular.forEach(data_array, function(value, key) {
            var obj_array = $scope.bs_data[value];
            model_name = value;

            var particular_value_1 = null;
            var particular_value_2 = null;
            var particular_value_3 = null;
            var particular_value_4 = null;


            if(model_name == 'BsRbuTbridges') {
               dl_model1 = 'DlRbdTbridges';
               particular_value_1 = 'Total';
               $scope.dlRoadBrdgs.transport_land.Table_4[dl_model1] = [];
            }
            if(model_name == 'BsRbuTculverts') {
               dl_model2 = 'DlRbdTculverts';
               particular_value_2 = 'Total';
               $scope.dlRoadBrdgs.transport_land.Table_4[dl_model2] = [];

            }
            if(model_name == 'BsRbuTrwalls') {
               dl_model3 = 'DlRbdTrwalls';
               particular_value_3 = 'Total';
               $scope.dlRoadBrdgs.transport_land.Table_4[dl_model3] = [];
            }
            if(model_name == 'BsRbuTdrains') {
               dl_model4 = 'DlRbdTdrains';
               particular_value_4 = 'Total';
               $scope.dlRoadBrdgs.transport_land.Table_4[dl_model4] = [];
            }



            var obj1 = {
                type_bridges :particular_value_1 ,
                tot_dest_2_lanes : null,
                tot_dest_multi_lanes : null,
                part_dest_2_lanes : null,
                part_dest_multi_lanes : null,
                damages : null,
            };
            var obj2 = {
                type_culverts : particular_value_2,
                tot_destroyed : null,
                part_destroyed : null,
                damages : null,
            };
            var obj3 = {
                type_retain_walls : particular_value_3,
                tot_destroyed : null,
                part_destroyed : null,
                damages : null,
            };
            var obj4 = {
                type_drains : particular_value_4,
                tot_destroyed : null,
                part_destroyed : null,
                damages : null,
            };

            angular.forEach(obj_array, function(value, key) {
                var obj1 = {
                    type_bridges: value.fields.type_bridges,
                    tot_dest_2_lanes : null,
                    tot_dest_multi_lanes : null,
                    part_dest_2_lanes : null,
                    part_dest_multi_lanes : null,
                    damages : null,
                };
                var obj2 = {
                    type_culverts : value.fields.type_culverts,
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                };
                var obj3 = {
                    type_retain_walls : value.fields.type_retain_walls,
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                };
                var obj4 = {
                    type_drains : value.fields.type_drains,
                    tot_destroyed : null,
                    part_destroyed : null,
                    damages : null,
                };


                if(model_name == 'BsRbuTbridges') {
                   $scope.dlRoadBrdgs.transport_land.Table_4[dl_model1].push(obj1);
                }
                if(model_name == 'BsRbuTculverts') {
                   $scope.dlRoadBrdgs.transport_land.Table_4[dl_model2].push(obj2);
                }
                if(model_name == 'BsRbuTrwalls') {
                   $scope.dlRoadBrdgs.transport_land.Table_4[dl_model3].push(obj3);
                }
                if(model_name == 'BsRbuTdrains') {
                   $scope.dlRoadBrdgs.transport_land.Table_4[dl_model4].push(obj4);
                }
            });

            if(model_name == 'BsRbuTbridges') {
                $scope.dlRoadBrdgs.transport_land.Table_4[dl_model1].push(obj1);
            }
            if(model_name == 'BsRbuTculverts') {

                $scope.dlRoadBrdgs.transport_land.Table_4[dl_model2].push(obj2);
            }
            if(model_name == 'BsRbuTrwalls') {

               $scope.dlRoadBrdgs.transport_land.Table_4[dl_model3].push(obj3);
            }
            if(model_name == 'BsRbuTdrains') {

              $scope.dlRoadBrdgs.transport_land.Table_4[dl_model4].push(obj4);

            }

        });


    }

    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid) {
            $http({
                method: 'POST',
                url: '/dl_save_data',
               contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlRoadBrdgs,
                    'com_data': {
                       'district': $scope.district.district__id,
                        'incident' : $scope.incident,
                    },
                    'is_edit':$scope.is_edit,
                    'sector':'transport_land'
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
    }

    $scope.dlDataEdit = function(form){

   $scope.is_edit = true;
   $scope.submitted = true;

    $http({
    method: "POST",
    url: '/dl_fetch_edit_data',
    data: angular.toJson({
    'table_name':  'Table_4',
    'sector':'transport_land',
    'com_data': {
           'district':  $scope.district.district__id,
            'incident': $scope.incident,
          },
           'is_edit':$scope.is_edit
           }),
    }).success(function(data) {

    $scope.dlRoadBrdgs = data;
    })

}

    $scope.cancelEdit = function(){
     $scope.is_edit = false;
     $scope.dlRoadBrdgs = init_data;
}

$scope.calTotal = function(model,property){
     var obj_array;
     total=0;
     obj_array = $scope.bs_data.BsRbuRclassificattion;



     if( property == 'tot_dest_concrete')
      {

        bsProperty = 'avg_replace_concrete' ;

      }
       if( property == 'tot_dest_asphalt')
      {

        bsProperty = 'avg_replace_asphalt' ;

      }
       if( property == 'tot_dest_gravel')
      {

        bsProperty = 'avg_replace_gravel' ;

      }
       if( property == 'tot_dest_earth')
      {

        bsProperty = 'avg_replace_earth' ;

      }
       if( property == 'part_dest_concrete')
      {

        bsProperty = 'avg_repair_concrete' ;

      }
       if( property == 'part_dest_asphalt')
      {

        bsProperty = 'avg_repair_asphalt' ;

      }
      if( property == 'part_dest_gravel')
      {

        bsProperty = 'avg_repair_gravel' ;

      }
       if( property == 'part_dest_earth')
      {

        bsProperty = 'avg_repair_earth' ;

      }


    angular.forEach(obj_array, function(value, key) {


//    total = total + ($scope.dlRoadBrdgs.transport_land.Table_4[model][key][property] * value.fields[bsProperty]);


    })

    return total;
    }

$scope.tot=0;


function getObj(){
 return $scope.dlRoadBrdgs.transport_land.Table_4.DlRbdTculverts;
}

$scope.calculateTotal=function(arr){
//var obj_array = getObj();

console.log("array-",arr);
var finaltotal = 0;

angular.forEach(arr, function(value, key) {

 finaltotal = finaltotal + value.damages;
 console.log(value);
})


return finaltotal;

}


});

