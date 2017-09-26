var app = angular.module('teleChartApp', ['underscore']);
app.controller('TeleChartController', function($scope, $http, $parse, _) {
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
    var tot_damages_pub = 0;
    var tot_los_firm_year1_pub = 0;
    var tot_los_firm_year2_pvt = 0;
    var tot_damages_pvt = 0;
    var tot_los_firm_year2_pub = 0;
    var tot_los_firm_year1_pvt = 0;

	google.charts.load('current', {
		'packages': ['corechart', 'bar']
	});
	$scope.fetchDlData = function() {
		$scope.is_edit = true;
		$scope.submitted = true;
		$http({
			method: "POST",
			url: '/dl_fetch_district_disagtn',
			data: angular.toJson({
				'table_name': 'Table_5',
				'sector': 'telecommunication',
				'com_data': {
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
			console.log('load ', data);
			$scope.data = data;
			$scope.dlSumTeleNat = data;
			$scope.provincenames = [];
			angular.forEach(data.telecommunication.Table_5, function(value, key) {
				$scope.provincenames.push(key);
			})
			angular.forEach($scope.provincenames.sort(), function(value, key) {
				google.charts.setOnLoadCallback(drawPieChart);
				google.charts.setOnLoadCallback(drawPieChartTwo);
				google.charts.setOnLoadCallback(drawBarChart);



        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[value], function(value, key, index) {
            if(key == 'DlDmgFirmGroupNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Private') {
                        tot_damages_pvt = tot_damages_pvt + value_in.tot_damages;
                    }
                })
            }
        })



        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[value], function(value, key, index) {
            if(key == 'DlDmgFirmGroupNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Public') {
                        tot_damages_pub = tot_damages_pub + value_in.tot_damages;
                    }
                })
            }
        })




        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[value], function(value, key, index) {
            if(key == 'LosFirmYear1GroupsNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Public') {
                        tot_los_firm_year1_pub = tot_los_firm_year1_pub + value_in.year1_los;
                    }
                })
            }
        })




        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[value], function(value, key, index) {
            if(key == 'LosFirmYear1GroupsNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Private') {
                        tot_los_firm_year1_pvt = tot_los_firm_year1_pvt + value_in.year1_los;
                    }
                })
            }
        })




        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[value], function(value, key, index) {
            if(key == 'LosFirmYear2GroupsNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Public') {
                        tot_los_firm_year2_pub = tot_los_firm_year2_pub + value_in.year2_los;
                    }
                })
            }
        })




        angular.forEach($scope.dlSumTeleNat.telecommunication.Table_5[value], function(value, key, index) {
            if(key == 'LosFirmYear2GroupsNational') {
                angular.forEach(value, function(value_in, index_in) {
                    if(value_in.ownership == 'Private') {
                        tot_los_firm_year2_pvt = tot_los_firm_year2_pvt + value_in.year2_los;
                    }
                })
            }
        })



 			function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Private Damages', tot_damages_pvt],
						['Public damages', tot_damages_pub],
					]);
					var options = {
						width: 400,
						height: 200
					};
					var chart = new google.visualization.PieChart(document.getElementById('piechart'));
					chart.draw(data, options);
				}

		     function drawPieChartTwo() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Private Losses', tot_los_firm_year2_pvt + tot_los_firm_year1_pvt],
						['Public Losses', tot_los_firm_year1_pub + tot_los_firm_year2_pub],
					]);
					var options = {
						width: 400,
						height: 200
					};
					var chart = new google.visualization.PieChart(document.getElementById('piechartTwo'));
					chart.draw(data, options);
				}

            function drawBarChart() {
                var data = [];
                var chartsdata = [];
                var Header = ['Province', 'Damages', 'Losses', {
                    role: 'style'
                }];
                data.push(Header);
                angular.forEach($scope.provincenames, function(value, key) {
                    var temp = [];
                    temp.push(value, tot_damages_pvt + tot_damages_pub, tot_los_firm_year2_pvt + tot_los_firm_year1_pvt + tot_los_firm_year1_pub + tot_los_firm_year2_pub, null);
                    data.push(temp);
                })
                var chartdata = new google.visualization.arrayToDataTable(data);
                var options = {
                    chart: {
                        width: 400,
                        height: 300
                    }
                };
                var chart = new google.charts.Bar(document.getElementById('barchart'));
                chart.draw(chartdata, options);
            }


		})
	})
	}
	$scope.checkIfNull = function() {
        var isNull = $scope.dlSumTeleNat ? angular.equals({}, $scope.dlSumTeleNat.telecommunication.Table_5) : true;
        return isNull;
    }
	$scope.convertToInt = function(val1, val2, val3) {
		var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
		return sum;
	}
	$scope.printDiv = function() {
		window.print();
	}
});
