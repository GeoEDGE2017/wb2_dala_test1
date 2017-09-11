var app = angular.module('dlSummeryAgProApp', []);

app.controller("DlSummeryAgProController", ['$scope','$http',function ($scope,$http) {
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
    $scope.totalyear2pvt = null;
    $scope.finaltotalpublic = null;
    $scope.finaltotalprivate = null;
    $scope.total_num_affected = 0;
    $scope.user_id;
    $scope.provinces;

    // get relevant damage_losses data for calculations
       $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            fetchProvinces();
        }
        if($scope.incident && $scope.province) {
            $scope.fetchDlData();
        }
    }


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
            $scope.province = null;
        })
    }

    $scope.fetchDlData = function(form){
        if($scope.incident && $scope.province){
            $scope.is_edit = true;
            $scope.submitted = true;
                $http({
                    method: "POST",
                    url: '/dl_fetch_district_disagtn',
                    data: angular.toJson({
                        'table_name':  'Table_9',
                        'sector': 'agri_agrarian',
                        'com_data': {
                            'province': $scope.province,
                            'incident': $scope.incident,
                         },
                    }),
                }).success(function(data) {
                    console.log('load ', data);
                    $scope.dlAgriAgrarianPro = data;
                })
        }
    }

    $scope.getTotal = function($index,key) {
        $scope.totaldpub = ($scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorDmgPubProvince[$index] ? (
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorDmgPubProvince[$index].damages ?
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorDmgPubProvince[$index].damages : 0 ): 0) ;

        $scope.totaldpvt = ($scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorDmgPvtProvince[$index] ? (
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorDmgPvtProvince[$index].damages ?
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorDmgPvtProvince[$index].damages : 0 ) : 0) ;

        $scope.totalyear1pub = ($scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear1Province[$index] ? (
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear1Province[$index].dmg_los_pub ?
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear1Province[$index].dmg_los_pub : 0 ) : 0) ;

        $scope.totalyear1pvt = ($scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear1Province[$index] ? (
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear1Province[$index].dmg_los_pvt ?
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear1Province[$index].dmg_los_pvt : 0 ) : 0 );

        $scope.totalyear2pub = ($scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear2Province[$index] ? (
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear2Province[$index].dmg_los_pub ?
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear2Province[$index].dmg_los_pub : 0 ) : 0) ;

        $scope.totalyear2pvt =($scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear2Province[$index] ? (
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear2Province[$index].dmg_los_pvt ?
                 $scope.dlAgriAgrarianPro.agri_agrarian.Table_9[key].DsorLosYear2Province[$index].dmg_los_pvt : 0 ) : 0);


        $scope.finaltotalpublic = $scope.totaldpub + $scope.totalyear1pub  + $scope.totalyear2pub;

        $scope.finaltotalprivate = $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;

    }

      $scope.checkIfNull = function() {
        var isNull = $scope.dlAgriAgrarianPro ? angular.equals({}, $scope.dlAgriAgrarianPro.agri_agrarian.Table_9) : true;
        return isNull;
    }

 }])
