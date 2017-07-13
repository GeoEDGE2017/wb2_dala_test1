//Table 1
var bsHealthStatusApp = angular.module('bsEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle', 'underscore']);
bsHealthStatusApp.controller('BsEduFacilitiesController', function ($scope, $http, $parse, _) {
    $scope.bsEduFacilities;
    $scope.total;
    $scope.user_id;
    $scope.iter_tot;
    $scope.district;
    $scope.bs_date;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.facilitiesTot = null;
    $scope.TotMale = null;
    $scope.TotFemale = null;
    $scope.BefPvt_total_number = null;
    $scope.BefPvt_avg_male = null;
    $scope.BefPvt_avg_female = null;
    $scope.user_id;

    var init_data = {
        'education': {
            'Table_1': {
                'BefPubSchools': [{
                    type_facilities: '1AB, 1C',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'Type 2',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'Type 3',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'Pirivena',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'Training institutes',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'NCOE, Traninig College',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'TC, CRC, RESC',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }],
                'BefPubOffices': [{
                    type_facilities: 'Ministry Offices',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'Provinicial Offices',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'Zonal Offices',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'Divisional Offices',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'NIE',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'TOTAL NUMBER OF STUDENTS',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }],
                'BefPvt': [{
                    type_facilities: 'Pre-school',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'Primary School',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'Secondary School',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'University',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'Technical Institutes',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }, {
                    type_facilities: 'TOTAL NUMBER OF STUDENTS',
                    total_number: null,
                    avg_male: null,
                    avg_female: null,
                }]
            }
        }
    }

    $scope.bsEduFacilities = angular.copy(init_data);

//    $scope.getTotal = function(model, property) {
//
//        var cumulativeschool = 0;
//        var cumulativeoffice = 0;
//        var cumulativeTot = null;
//        var male = 0;
//        var female = 0;
//
//        if(model == 'BefPubSchools') {
//            var arrayschool = $scope.bsEduFacilities.education.Table_1.BefPubSchools;
//            var sums = _.map(arrayschool, function(obj) {
//                cumulativeschool += obj.total_number;
//                return cumulativeschool;
//            });
//
//            var malesum = _.map(arrayschool, function(obj) {
//                male += obj.avg_male * obj.total_number;
//                console.log('male',male);
//                return male;
//            });
//
//            var femalesum = _.map(arrayschool, function(obj) {
//                female += obj.avg_female * obj.total_number;
//                return female;
//            });
//
//            var the_stringmale = 'TotMale';
//            var modelmale = $parse(the_stringmale);
//            modelmale.assign($scope, male);
//
//            var the_stringfemale = 'TotFemale';
//            var modelfemale = $parse(the_stringfemale);
//            modelfemale.assign($scope, female);
//        }
//        if(model == 'BefPubOffices') {
//            var arrayoffice = $scope.bsEduFacilities.education.Table_1.BefPubOffices;
//            var sumsoffce = _.map(arrayoffice, function(obj) {
//                cumulativeoffice += obj.total_number;
//                return cumulativeoffice;
//            });
//        }
//
//        cumulativeTot = cumulativeschool + cumulativeoffice ;
//        console.log('test',cumulativeschool);
//
//        var the_string = 'facilitiesTot';
//        var model = $parse(the_string);
//        model.assign($scope, cumulativeTot);
//    }
//
//    $scope.getPrivateTot = function(model,property) {
//        if (model == 'BefPvt') {
//            var cumalativePrivatetot = null;
//            var cumalativePrivateMale = null;
//            var cumalativePrivatefemale = null;
//
//            var arrayPrivate = $scope.bsEduFacilities.education.Table_1.BefPvt;
//
//            var sumsprivatetot = _.map(arrayPrivate, function(obj) {
//                cumalativePrivatetot += obj.total_number;
//                cumalativePrivateMale += obj.avg_male * obj.total_number;
//                cumalativePrivatefemale += obj.avg_female * obj.total_number;
//                return cumalativePrivatetot;
//            });
//
//            var the_string_private_tot ='BefPvt_total_number' ;
//            var modelPrivateTot = $parse(the_string_private_tot);
//            modelPrivateTot.assign($scope, cumalativePrivatetot);
////            console.log(cumalativePrivatetot);
//
//            var the_string_private_male ='BefPvt_avg_male' ;
//            var modelPrivateMale = $parse(the_string_private_male);
//            modelPrivateMale.assign($scope, cumalativePrivateMale);
////            console.log(cumalativePrivateMale);
//
//            var the_string_private_female ='BefPvt_avg_female' ;
//            var modelPrivateFemale = $parse(the_string_private_female);
//            modelPrivateFemale.assign($scope, cumalativePrivatefemale);
////            console.log(cumalativePrivatefemale);
//        }
//    }
//
//    $scope.pvtTotalNumber = function() {
//        var total_number = 0;
//        angular.forEach($scope.bsEduFacilities.education.Table_1.BefPvt, function(value, key) {
//            console.log(value, key);
//            total_number = total_number + value;
//        })
//        return total_number;
//    }
//
//    $scope.totTest = function(model, property) {
//        if (model == 'BefPvt') {
//            if(property == 'total_number') {
//                var total_number = 0;
//                angular.forEach($scope.bsEduFacilities.education.Table_1.BefPvt, function(value, key) {
//                    console.log(value, key);
//                    if(value == property) {
//                        alert(value, '-> : ' ,key);
//                        total_number = total_number + value;
//                    }
//                })
//
//                bsEduFacilities.education.Table_1.BefPvt[5].total_number = total_number;
//            }
//            else if(property == 'avg_male') {
//                var avg_male = 0;
//                angular.forEach($scope.bsEduFacilities.education.Table_1.BefPvt, function(value, key) {
//                    console.log(value, key);
//                    if(value == property) {
//                        alert(value, '-> : ' ,key);
//                        avg_male = avg_male + value;
//                    }
//                })
//
//                bsEduFacilities.education.Table_1.BefPvt[5].avg_male = avg_male;
//            }
//            else if(property == 'avg_female') {
//                var cumalativePrivatefemale = bsEduFacilities.education.Table_1.BefPvt[5].avg_female;
//            }
//        }
//    }

    //Edit Data
    $scope.editBsData = function(form) {
        $scope.submitted = true;
        $scope.is_edit = true;

        if (form.$valid) {
            $http({
                method: "POST",
                url: "/bs_fetch_edit_data",
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'education',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'user_id': $scope.user_id,
                    }
                }),
            }).success(function(data) {
                console.log(data);
                console.log(data);
                $scope.bsEduFacilities = data;
            })
        }
    }

    //Save Data
    $scope.saveBsData = function(form) {
        console.log($scope.bsEduFacilities);
        $scope.submitted = true;
        if(form.$valid) {
            console.log($scope.data);
            $http({
                method : 'POST',
                url : '/bs_save_data',
                contentType : 'application/json; charset=utf-8',
                data : angular.toJson({
                    'table_data' : $scope.bsEduFacilities,
                    'com_data' : {
                        'district' : $scope.district,
                        'bs_date' : $scope.baselineDate,
                        'user_id' : $scope.user_id,
                    },
                    'is_edit' : $scope.is_edit,
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                console.log(response);
                if(response.data == 'False') {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                else {
                    $("#modal-container-239453").modal('show');
                }
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }

    //Cancel Edit
    $scope.cancelEdit = function() {
        $scope.is_edit = false;
        $scope.bsEduFacilities = init_data;
    }

    //Clear Function
    $scope.clear = function() {
        console.log("clear")
        $scope.is_edit = false;
        $scope.bsEduFacilities = angular.copy(init_data);
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

    $scope.getPubTotal = function(model) {
        console.clear();
        var array1 = $scope.bsEduFacilities.education.Table_1.BefPubSchools;
        var array2 = $scope.bsEduFacilities.education.Table_1.BefPubOffices;

        var schooltotal_number = 0;
        var officetotal_number = 0;

        var schoolavg_male = 0;
        var officeavg_male = 0;

        var schoolavg_female = 0;
        var officeavg_female = 0;

        var sums = _.map(array1, function(obj) {
            schooltotal_number += obj.total_number;
            schoolavg_male += obj.avg_male;
            schoolavg_female += obj.avg_female;
            console.log(schooltotal_number, schoolavg_male, schoolavg_female);
//            return schooltotal_number;
        });

        var sums = _.map(array2, function(obj) {
            if(obj.type_facilities != 'TOTAL NUMBER OF STUDENTS') {
                officetotal_number += obj.total_number;
                officeavg_male += obj.avg_male;
                officeavg_female += obj.avg_female;
                console.log(officetotal_number, officeavg_male, officeavg_female);
//                return officetotal_number;
            }
        });


        console.log(schooltotal_number, officetotal_number);

        angular.forEach($scope.bsEduFacilities.education.Table_1.BefPubOffices, function(value, key) {
            if(value.type_facilities == 'TOTAL NUMBER OF STUDENTS') {
                value.total_number = (schooltotal_number + officetotal_number);
                value.avg_male = (schoolavg_male + officeavg_male);
                value.avg_female = (schoolavg_female + officeavg_female);
            }
        })
    }

    $scope.getPvtTotal = function(model) {
        console.clear();
        var array1 = $scope.bsEduFacilities.education.Table_1.BefPvt;

        var total_number = 0;
        var avg_male = 0;
        var avg_female = 0;

        var sums = _.map(array1, function(obj) {
            if(obj.type_facilities != 'TOTAL NUMBER OF STUDENTS') {
                total_number += obj.total_number;
                avg_male += obj.avg_male;
                avg_female += obj.avg_female;
                console.log(total_number, avg_male, avg_female);
//                return officetotal_number;
            }
        });

//        console.log(schooltotal_number, officetotal_number);

        angular.forEach($scope.bsEduFacilities.education.Table_1.BefPvt, function(value, key) {
            if(value.type_facilities == 'TOTAL NUMBER OF STUDENTS') {
                value.total_number = total_number;
                value.avg_male = avg_male;
                value.avg_female = avg_female;
            }
        })
    }
})
