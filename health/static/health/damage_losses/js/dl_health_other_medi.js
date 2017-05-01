//Table 6
var app = angular.module('dsHealthDamagelostOtherMediApp', []);

app.controller("DsHealthDamagelostOtherMediController", ['$scope','$http',function ($scope,$http) {

 $scope.district;
 $scope.incident;
 $scope.bs_data={};
 $scope.dl_data={};
 $scope.is_edit = false;
 $scope.submitted = false;
 $scope.Districts = [];
 $scope.is_valid_data = true;

//initialize model
    var init_data = {
    'health':{
        'Table_6': {
            'DmfDfaNum': [{
                num_des_facilities: 'Number of Destroyed Facilities',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfDfaPaf': [{
                num_patients_affected: 'Male',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                num_patients_affected: 'Female',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfDaStructure': [{
                asset: '1 Floor Structure',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: '2-3 Floors Structure',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'More Than 3 Floors Structure',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Value of Destroyed Structure',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfDaSupplies': [{
                asset: 'Medicines',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Medical Supplies',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Others',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Value of Destroyed Supplies',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfDaMequipment': [{
                asset: 'CT Scan',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'X-ray Machine',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'MRI Machine',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Other Equipment (Specify)',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Value of Destroyed Medical Equipment',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfDaOassets': [{
                asset: 'Computers',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Vehicles',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Furniture',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Office Equipment',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Others',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Value of Destroyed Other Assets',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'VALUE OF DESTROYED ASSETS',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfPdfaNum': [{
                num_pdamaged_facilities: 'Number of Partially Damaged Facilities',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfPdfaPaf': [{
                num_patients_affected: 'Male',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                num_patients_affected: 'Female',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],

           'DmfPdaStructure': [{
                asset: 'Roof',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Wall',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Flooring',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Value of Partially Damaged Structure',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfPdaMequipment': [{
                asset: 'CT Scan',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'X-ray Machine',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'MRI Machine',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Other Equipment (Specify)',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Value of Partially Damaged Medical Equipment',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfPdaOassets': [{
                asset: 'Computers',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Vehicles',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Furniture',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Office Equipment',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Others',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'Value of Partially Damaged Other Assets',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'VALUE OF PARTIALLY DAMAGED ASSETS',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                asset: 'TOTAL VALUE OF DAMAGES',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfLosFi': [{
                type_of_losses: 'Disaster Year 1',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                type_of_losses: 'Year 2',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                type_of_losses: 'Total',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfLosCud': [{
                type_of_losses: 'Disaster Year 1',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                type_of_losses: 'Year 2',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                type_of_losses: 'Total',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfLosHoc': [{
                type_of_losses: 'Disaster Year 1',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                type_of_losses: 'Year 2',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                type_of_losses: 'Total',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }],
            'DmfLosOue': [{
                type_of_losses: 'Disaster Year 1',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                type_of_losses: 'Year 2',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },{
                type_of_losses: 'Total',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            },
            {
                type_of_losses: 'TOTAL VALUE OF LOSSES',
                base_hospital : null,
                divisional_hospital: null,
                rural_hospital : null,
                central_dispensary: null,
                pmcus : null,
                phccs: null,
                mchcs : null,
                total: null,
            }]


            }



        }
    }

    $scope.dlDataHealthDamagelostOtherMedicalFacilities = angular.copy(init_data);

//Save Data
    $scope.saveDlData = function(form) {
        $scope.submitted = true;
        if(form.$valid){
            $http({
                method: 'POST',
                url:'/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlDataHealthDamagelostOtherMedicalFacilities,
                    'com_data': {
                        'district_id':  $scope.district.district__id,
                        'incident_id': $scope.incident,
                    },
                    'is_edit' : $scope.is_edit
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
    }

//Get Baseline Data
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

        if( $scope.incident && $scope.district){

        $http({
            method: 'POST',
            url: '/bs_get_data_mock',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
              'db_tables': ['BucOmarStructure','BucOmarSupplies','BucOmarMequipment','BucOmarOassets','BucOmarcStructure','BucOmarcCrpm','BucOmarcMequipment','BucOmarcOassets'],
               'com_data': {
                    'district': $scope.district.district__id,
                    'incident': $scope.incident,
                    },
               'table_name': 'Table_4',
               'sector': 'health'
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
            var data = response.data;
            angular.forEach(data, function(value, key) {
              $scope.bs_data[key] = JSON.parse(value);
            });

            console.log($scope.bs_data);

        }, function errorCallback(response) {

            console.log(response);
        });
    }
    }

//Edit data
    $scope.dlDataEdit = function(form){
       $scope.is_edit = true;
       $scope.submitted = true;
        if(form.$valid){

        $http({
        method: "POST",
        url: '/dl_fetch_edit_data',
        data: angular.toJson({
        'table_name':  'Table_6',
        'sector':'health',
        'com_data': {
               'district':  $scope.district.district__id,
                'incident': $scope.incident,
              },
               'is_edit':$scope.is_edit
               }),
    }).success(function(data) {

    console.log(data);


    $scope.dlDataHealthDamagelostOtherMedicalFacilities = data;
    })
    }


}

//Cancel Data
    $scope.cancelEdit = function(){
     $scope.is_edit = false;
     $scope.dlDataHealthDamagelostOtherMedicalFacilities = init_data;
}

//Clear Function
    $scope.clear = function() {
        console.log("init")
        $scope.is_edit = false;
        $scope.dlDataHealthDamagelostOtherMedicalFacilities = angular.copy(init_data);

    }


}])


