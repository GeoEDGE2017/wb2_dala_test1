//dashboard
var app = angular.module('dashboardApp', []);
app.controller('DashboardController', function($scope, $http) {
$scope.total_damages  = 0;
$scope.month_losses  = 0;
    $scope.fetchIncidentData = function() {
        $http({
            method: "POST",
            url: '/fetch_dashboard_data',
        }).success(function(data) {

            $scope.lastIncident = data[0].name;
            $scope.lastIncidentDamge = data[0].tot_dmgloss;
            console.log($scope.lastIncident);
            angular.forEach(data,function(value,index){
            $scope.getDate = value.reported_date_time;
//            console.log(value.reported_date_time);
            var resMonth = value.reported_date_time.slice(0, 2);
            var resYear = value.reported_date_time.slice(6, 10);
            var d = new Date();
            var currentmonth = d.getMonth() + 1;
            var currentYear = d.getFullYear()
             if(angular.equals(currentYear.toString(), resYear)){
                     $scope.total_damages = $scope.total_damages + value.tot_dmgloss;
                     if(angular.equals(currentmonth.toString(), resMonth)){
                        $scope.month_losses = $scope.month_losses + value.tot_dmgloss;
                     }
                 }
            })
        })
    }

})
