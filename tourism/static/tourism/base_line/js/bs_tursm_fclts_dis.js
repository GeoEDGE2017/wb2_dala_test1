
var app = angular.module('bsTursmFcltsFisApp', [])

app.controller('bsTursmFcltsFisController', ['$scope', '$http', function($scope, $http) {

    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;
    $scope.is_edit_disable = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.user_id;

        var init_data = {
        'tourism': {
            'Table_1': {
                'BsTouBusiness': [
                {
                    business: "Hotels",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                    },{
                    business: "Guest Houses",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                    },{
                    business: "Travel Agents",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                    },{
                    business: "Tour Guides",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                    },{
                    business: "Adventure Tourism Operators",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                    },{
                    business: "Ayurveda Resorts",
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                    }],

                    'BsCultSites': [
                    {
                        site: "Temples",
                        num_bis_private: null,
                        num_bis_public: null,
                        num_emp_male: null,
                        num_empfemale: null,
                    }
                    ],

                    'BsNatFormation': [
                    {
                        site: "Waterfalls",
                        num_bis_private: null,
                        num_bis_public: null,
                        num_emp_male: null,
                        num_empfemale: null,
                    }
                    ]
                 ,
                }
            }
        }

        /*
        *use angular copy instead of assigning
        *to prevent init variable getting assigned to scope variable
        *to use in clear function
        */
        //$scope.bs_tourism_faciliti = angular.copy($scope.master);
        $scope.bs_tourism_facilities = angular.copy(init_data);

        console.log(init_data);

        //Disable Edit Button
        $scope.changeDis = function changeDis()
        {
            if($scope.district && $scope.bs_date){
                $scope.is_edit_disable = true;
            }
            else{
                $scope.is_edit_disable = false;
            }
        }

        $scope.insertBussiness = function(table){

            var new_row;
            if(table == 'BsTouBusiness') {
                new_row = {
                    business: '',
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                }
            }

            if(table == 'BsCultSites'){
                new_row = {
                    site: '',
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                }
            }

            if(table == 'BsNatFormation'){
                new_row = {
                    site: '',
                    num_bis_private: null,
                    num_bis_public: null,
                    num_emp_male: null,
                    num_empfemale: null,
                }
            }

            $scope.bs_tourism_facilities.tourism.Table_1[table].push(new_row);

        }

        $scope.removeItem = function removeItem(table, index) {
            // Following conditions can be checked in a single if
            // separated for readability

            if(table == 'BsTouBusiness') {
                $scope.bs_tourism_facilities.tourism.Table_1.BsTouBusiness.splice(index, 1);
            }
            else if(table == 'BsCultSites'){
                $scope.bs_tourism_facilities.tourism.Table_1.BsCultSites.splice(index, 1);
            }
            else if(table == 'BsNatFormation'){
                $scope.bs_tourism_facilities.tourism.Table_1.BsNatFormation.splice(index, 1);
            }
        }

        $scope.saveBsData = function(form) {
            $scope.submitted = true;
            
            if (form.$valid) {
                $http({
                    method: "POST",
                    url: "/bs_save_data",
                    data: angular.toJson({
                        'table_data': ($scope.bs_tourism_facilities),
                        'com_data': {
                            'district': $scope.district,
                            'bs_date': $scope.bs_date,
                            'user_id': $scope.user_id,
                        },
                        'is_edit': $scope.is_edit,
                        'sector':'tourism', //check this line
                    }),
                }).success(function(data) {

                    $scope.bs_tourism_facilities = init_data;
                    $scope.is_edit = false;

                    if (data == 'False')
                       {
                    $("#modal-container-239454").modal('show');
                    $scope.is_valid_data = false;
                }
                    else
                        $("#modal-container-239453").modal('show');

                })
            }
            else{
                alert("invalid data ! You may have entered decimal values for a number");
            }
        }

        //clear the data from table
        $scope.clear = function()
        {
            console.log("init")
            $scope.is_edit = false;
            $scope.bs_tourism_facilities = angular.copy(init_data);

        }

        $scope.bsTouDataEdit = function() {

        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
                method: "POST",
                url: '/bs_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'tourism',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.bs_date,
                        'user_id': $scope.user_id,

                    }
                }),
            }).success(function(data) {

                // handling response from server if data are not available in this
                if((data.tourism.Table_1.BsCultSites.length == 0) ||
                    (data.tourism.Table_1.BsNatFormation.length == 0) ||
                    (data.tourism.Table_1.BsTouBusiness.length == 0) ){
                    $scope.is_edit = false;
                        // do nothing or display msg that data are not available
                    }
                else{
                        $scope.bs_tourism_facilities = data;
                    }
            })

        }
        $scope.cancelEdit = function()
        {
             $scope.is_edit = false;
             $scope.bs_tourism_facilities = angular.copy(init_data);
        }


    }]);


