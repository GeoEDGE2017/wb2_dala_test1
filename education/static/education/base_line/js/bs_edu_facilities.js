//Table 1
var bsHealthStatusApp = angular.module('bsEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle', 'underscore']);

bsHealthStatusApp.controller('BsEduFacilitiesController', function ($scope, $http, $parse, _) {

$scope.bsEduFacilities;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;
$scope.is_valid_data = true;
$scope.facilitiesTot = null;
$scope.TotMale = null;
$scope.TotFemale = null;
$scope.BefPvt_total_number = null;
$scope.BefPvt_avg_male = null;
$scope.BefPvt_avg_female = null;




var init_data = {
'education':{
'Table_1':{
'BefPubSchools':[
{
type_facilities: '1AB, 1C',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Type 2',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Type 3',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Pirivena',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Training institutes',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'NCOE, Traninig College',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'TC, CRC, RESC',
total_number: null,
avg_male: null,
avg_female: null,
}
],
'BefPubOffices':[
{
type_facilities: 'Ministry Offices',
total_number: null
},
{
type_facilities: 'Provinicial Offices',
total_number: null
},
{
type_facilities: 'Zonal Offices',
total_number: null
},
{
type_facilities: 'Divisional Offices',
total_number: null
},
{
type_facilities: 'NIE',
total_number: null
}
],
'BefPvt':[
{
type_facilities: 'Pre-school',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Primary School',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Secondary School',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'University',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Technical Institutes',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'TOTAL',
total_number: null,
avg_male: null,
avg_female: null,
}
]
}
}
}

$scope.bsEduFacilities = init_data;


 $scope.getTotal = function(model, property) {

        var cumulativeschool = 0;
        var cumulativeoffice = 0;
        var cumulativeTot = null;
        var male = 0;
        var female = 0;

        if(model == 'BefPubSchools');
        {

        var arrayschool = $scope.bsEduFacilities.education.Table_1.BefPubSchools;

        var sums = _.map(arrayschool, function(obj) {
            cumulativeschool += obj.total_number;
            return cumulativeschool;

        });

        var malesum = _.map(arrayschool, function(obj) {
            male += obj.avg_male;
            return male;

        });

        var femalesum = _.map(arrayschool, function(obj) {
            female += obj.avg_female;
            return female;

        });


        var the_stringmale = 'TotMale';
        var modelmale = $parse(the_stringmale);
        modelmale.assign($scope, male);


         var the_stringfemale = 'TotFemale';
        var modelfemale = $parse(the_stringfemale);
        modelfemale.assign($scope, female);


        }
         if(model == 'BefPubOffices'){

        var arrayoffice = $scope.bsEduFacilities.education.Table_1.BefPubOffices;

        var cumulativeoffice = null;
        var sumsoffce = _.map(arrayoffice, function(obj) {
            cumulativeoffice += obj.total_number;
            return cumulativeoffice;
        });

         }


        cumulativeTot = cumulativeschool + cumulativeoffice ;


        var the_string = 'facilitiesTot';
        var model = $parse(the_string);
        model.assign($scope, cumulativeTot);


    }

$scope.getPrivateTot = function(model,property){

if ( model == 'BefPvt'){

         var cumalativePrivatetot = null;
         var cumalativePrivateMale = null;
         var cumalativePrivatefemale = null;

          var arrayPrivate = $scope.bsEduFacilities.education.Table_1.BefPvt;

        var sumsprivatetot = _.map(arrayPrivate, function(obj) {
            cumalativePrivatetot += obj.total_number;
            cumalativePrivateMale += obj.avg_male;
            cumalativePrivatefemale += obj.avg_female;
            return cumalativePrivatetot;
        });

         var the_string_private_tot ='BefPvt_total_number' ;
        var modelPrivateTot = $parse(the_string_private_tot);
        modelPrivateTot.assign($scope, cumalativePrivatetot);
        console.log(cumalativePrivatetot);

         var the_string_private_male ='BefPvt_avg_male' ;
        var modelPrivateMale = $parse(the_string_private_male);
        modelPrivateMale.assign($scope, cumalativePrivateMale);
        console.log(cumalativePrivateMale);

        var the_string_private_female ='BefPvt_avg_female' ;
        var modelPrivateFemale = $parse(the_string_private_female);
        modelPrivateFemale.assign($scope, cumalativePrivatefemale);
        console.log(cumalativePrivatefemale);



        }
}



$scope.bsEduDataSubmit = function(form){
$scope.submitted = true;

if(form.$valid){
 $http({
    method: "POST",
    url: "/bs_save_data",
    data: angular.toJson({'table_data': ($scope.bsEduFacilities), 'com_data': {'district': $scope.district,
          'bs_date': $scope.bs_date}, 'is_edit': $scope.is_edit }),
    }).success(function(data) {

     $scope.bsEduDataSubmit = init_data;
     $scope.is_edit = false;

     if(data == 'False')
      {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
     else
      $("#modal-container-239453").modal('show');

 })
 }

}

    $scope.insertAsset = function(table) {
        console.log($scope.bsEduFacilities.education.Table_1[table]);
        var new_row;
        if(table == 'BefPvt') {
            new_row = {
                type_facilities: '',
                total_number: null,
                avg_male: null,
                avg_female: null,
            }
        }
        $scope.bsEduFacilities.education.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BefPvt') {
            $scope.bsEduFacilities.education.Table_1.BefPvt.splice(index, 1);
        }
    }

})
