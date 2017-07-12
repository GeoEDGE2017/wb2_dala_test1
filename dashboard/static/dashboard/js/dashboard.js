//dashboard
var app = angular.module('dashboardApp', []);
app.controller('DashboardController', function($scope, $http) {
$scope.total_damages  = 0;
$scope.month_losses  = 0;
$scope.total_all_damages = 0;
$scope.lastIncident = null;
$scope.lastIncidentDamge = 0;
$scope.haveData = false;

    $scope.fetchIncidentData = function() {
        $http({
            method: "POST",
            url: '/fetch_dashboard_data',
        }).success(function(data) {

            if(data[0]){
            $scope.haveData = true;
            $scope.lastIncident = data[0].name;
            $scope.lastIncidentDamge = data[0].tot_dmgloss;

            angular.forEach(data,function(value,index){
            $scope.getDate = value.reported_date_time;
//            $scope.total_all_damages = $scope.total_all_damages + value.tot_dmgloss;
            console.log(value.tot_dmgloss);

//            console.log(value.reported_date_time);
            var resMonth = value.reported_date_time.slice(0, 2);
            var resYear = value.reported_date_time.slice(6, 10);
            var d = new Date();
            var currentmonth = d.getMonth() + 1;
            var currentYear = d.getFullYear()
            $scope.thisYear = currentYear;
             if(angular.equals(currentYear.toString(), resYear)){
                     $scope.total_damages = $scope.total_damages + value.tot_dmgloss;
                     $scope.total_all_damages = $scope.total_all_damages + value.tot_dmgloss;
                     if(angular.equals(currentmonth.toString(), resMonth)){
                        $scope.month_losses = $scope.month_losses + value.tot_dmgloss;
                     }
                 }
            })
            }
        })
    }

})
