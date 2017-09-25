var app = angular.module('transWaterChartApp', ['underscore']);
app.controller('TransWaterChartController', function($scope, $http, $parse, _) {
	$scope.district;
	$scope.incident;
	$scope.bs_data = {};
	$scope.province = "";
	$scope.is_edit = false;
	$scope.submitted = false;
	$scope.is_valid_data = true;
	$scope.totaldpub = 0;
	$scope.totaldpvt = 0;
	$scope.totalyear1pub = 0;
	$scope.totalyear1pvt = 0;
	$scope.totalyear2pub = 0;
	$scope.totalyear2pvt = 0;
	$scope.finaltotalpublic = 0;
	$scope.finaltotalprivate = 0;
	$scope.total_num_affected = 0;
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
				'sector': 'transport_water',
				'com_data': {
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
			console.log('load ', data);
			$scope.data = data;
			$scope.dlWaterTransSumNat = data;
			$scope.provincenames = [];
			angular.forEach(data.transport_water.Table_5, function(value, key) {
				$scope.provincenames.push(key);
			})
			angular.forEach($scope.provincenames.sort(), function(value, key) {
				google.charts.setOnLoadCallback(drawPieChart);
				google.charts.setOnLoadCallback(drawPieTwoChart);
				google.charts.setOnLoadCallback(drawBarChart);
				$scope.totaldpub = $scope.totaldpub + ($scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterDmgPubNational[0].tot_dmg_public ? $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterDmgPubNational[0].tot_dmg_public : 0);
				$scope.totaldpvt = $scope.totaldpvt + ($scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterDmgPvtNational[0].tot_dmg_private ? $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterDmgPvtNational[0].tot_dmg_private : 0);
				$scope.totalyear1pub = $scope.totalyear1pub + ($scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pub ? $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pub : 0);
				$scope.totalyear1pvt = $scope.totalyear1pvt + ($scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pvt ? $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_1_pvt : 0);
				$scope.totalyear2pub = $scope.totalyear2pub + ($scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pub ? $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pub : 0);
				$scope.totalyear2pvt = $scope.totalyear2pvt + ($scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pvt ? $scope.dlWaterTransSumNat.transport_water.Table_5[value].DlWaterLosNational[0].year_2_pvt : 0);

				function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Damage Public', parseInt($scope.totaldpub)],
						['Damage Private', parseInt($scope.totaldpvt)],
					]);
					var options = {
						width: 350,
						height: 200
					};
					var chart = new google.visualization.PieChart(document.getElementById('piechart'));
					chart.draw(data, options);
				}

				function drawPieTwoChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Losses Public', parseInt($scope.totaldpub + $scope.totaldpvt)],
						['Losses Private', parseInt($scope.totalyear1pub + $scope.totalyear2pub + $scope.totalyear1pvt + $scope.totalyear2pvt)],
					]);
					var options = {
						width: 350,
						height: 200
					};
					var chart = new google.visualization.PieChart(document.getElementById('piechartTwo'));
					chart.draw(data, options);
				}

				console.log("testing",$scope.totaldpub + $scope.totaldpvt);
				console.log("testingTwo",$scope.totaldpub + $scope.totaldpvt);

				function drawBarChart() {
					var data = [];
					var chartsdata = [];
					var Header = ['Province', 'Damages', 'Losses', {
						role: 'style'
					}];
					data.push(Header);
					angular.forEach($scope.provincenames, function(value, key) {
						var temp = [];
						temp.push(value, parseInt($scope.totaldpub + $scope.totaldpvt), parseInt($scope.totalyear1pub + $scope.totalyear2pub+ $scope.totalyear1pvt + $scope.totalyear2pvt), null);
						data.push(temp);
					})
					var chartdata = new google.visualization.arrayToDataTable(data);
					var options = {
						chart: {
							width: 400,
							height: 250
						}
					};
					var chart = new google.charts.Bar(document.getElementById('barchart'));
					chart.draw(chartdata, options);
				}
			})
		})
	}
	$scope.checkIfNull = function() {
		var isNull = $scope.dlWaterTransSumNat ? angular.equals({}, $scope.dlWaterTransSumNat.transport_water.Table_5) : true;
		return isNull;
	}
	$scope.convertToInt = function(val1, val2, val3) {
			var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
			return sum;
		}
		//	$scope.printDiv = function() {
		//		window.print();
		//	}
});
