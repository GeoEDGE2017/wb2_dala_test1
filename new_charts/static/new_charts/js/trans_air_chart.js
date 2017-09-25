var app = angular.module('transAirChartApp', ['underscore']);
app.controller('TransAirChartController', function($scope, $http, $parse, _) {
	$scope.district;
	$scope.incident;
	$scope.bs_data = {};
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
				'sector': 'transport_air',
				'com_data': {
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
			console.log('load ', data);
			$scope.data = data;
			$scope.dlAirTransSumNat = data;
			$scope.provincenames = [];
			angular.forEach(data.transport_air.Table_5, function(value, key) {
				$scope.provincenames.push(key);
			})
			angular.forEach($scope.provincenames.sort(), function(value, key) {
				google.charts.setOnLoadCallback(drawPieChart);
				google.charts.setOnLoadCallback(drawPieTwoChart);
				google.charts.setOnLoadCallback(drawBarChart);
				$scope.totaldpub = $scope.totaldpub + ($scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirDmgPubNational[0].tot_destroyed_pub ? $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirDmgPubNational[0].tot_destroyed_pub : 0);
				$scope.totaldpvt = $scope.totaldpvt + ($scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirDmgPvtNational[0].tot_destroyed_pvt ? $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirDmgPvtNational[0].tot_destroyed_pvt : 0);
				$scope.totalyear1pub = $scope.totalyear1pub + ($scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pub ? $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pub : 0);
				$scope.totalyear1pvt = $scope.totalyear1pvt + ($scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pvt ? $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_1_pvt : 0);
				$scope.totalyear2pub = $scope.totalyear2pub + ($scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pub ? $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pub : 0);
				$scope.totalyear2pvt = $scope.totalyear2pvt + ($scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pvt ? $scope.dlAirTransSumNat.transport_air.Table_5[value].DlAirLosNational[0].year_2_pvt : 0);

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
						['Losses Public', parseInt($scope.totalyear1pub + $scope.totalyear2pub)],
						['Losses Private', parseInt($scope.totalyear1pvt + $scope.totalyear2pvt)],
					]);
					var options = {
						width: 350,
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
						console.log("tttt", $scope.totaldpub + $scope.totaldpvt);
						console.log("rrr", $scope.totalyear1pub + $scope.totalyear2pub, $scope.totalyear1pvt + $scope.totalyear2pvt);
						var temp = [];
						temp.push(value, parseInt($scope.totaldpub + $scope.totaldpvt), parseInt($scope.totalyear1pub + $scope.totalyear1pvt + $scope.totalyear2pub + $scope.totalyear2pvt), null),
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
		var isNull = $scope.dlAirTransSumNat ? angular.equals({}, $scope.dlAirTransSumNat.transport_air.Table_5) : true;
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
