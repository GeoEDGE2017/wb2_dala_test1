var app = angular.module('miningChartApp', ['underscore']);
app.controller('MiningChartController', function($scope, $http, $parse, _) {
	$scope.district;
	$scope.incident;
	$scope.bs_data = {};
	$scope.province = "";
	$scope.is_edit = false;
	$scope.submitted = false;
	$scope.is_valid_data = true;
	$scope.total_num_affected = 0;
	$scope.totalNumDes = null;
	$scope.grndtotalNumPart = 0;
	$scope.grndtotalNumDes = 0;
	$scope.grndtotalDamages = 0;
	$scope.grndtotalLosses = 0;
	$scope.grandTotal = 0;
	$scope.totaldpub = 0;
	$scope.totaldpvt = 0;
	$scope.gettotalDamages = 0;
	$scope.totalyear1pub = 0;
	$scope.totalyear1pvt = 0;
	$scope.totalyear2pub = 0;
	$scope.totalyear2pvt = 0;
	$scope.getIndusTotalDamages = 0;
	$scope.getArtisanalTotalDamages = 0;
	$scope.getArtisTotalLosses = 0;
	$scope.getIndusTotalLosses = 0;
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
				'table_name': 'Table_6',
				'sector': 'mining',
				'com_data': {
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
			console.log('load ', data);
			$scope.data = data;
			$scope.dmLosMinFirmsNation = data;
			$scope.provincenames = [];
			angular.forEach(data.mining.Table_6, function(value, key) {
				$scope.provincenames.push(key);
			})
			angular.forEach($scope.provincenames.sort(), function(value, key) {
				google.charts.setOnLoadCallback(drawPieChart);
				google.charts.setOnLoadCallback(drawPieTwoChart);
				google.charts.setOnLoadCallback(drawBarChart);
				google.charts.setOnLoadCallback(drawBarChartTwo);
				google.charts.setOnLoadCallback(drawBarChartThree);
				$scope.totaldpub = $scope.totaldpub + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1].tot_damages ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1].tot_damages : 0) : 0) + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0].tot_damages ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0].tot_damages : 0) : 0);
				$scope.totaldpvt = $scope.totaldpvt + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0].tot_damages ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0].tot_damages : 0) : 0);
				$scope.gettotalDamages = $scope.totaldpub + $scope.totaldpvt;
				$scope.getIndusTotalDamages = $scope.getIndusTotalDamages + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1].tot_damages ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[1].tot_damages : 0) : 0) + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0].tot_damages ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloDmgNational[0].tot_damages : 0) : 0);
				$scope.getArtisanalTotalDamages = $scope.getArtisanalTotalDamages + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0].tot_damages ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaDmgNational[0].tot_damages : 0) : 0);
				$scope.totalyear1pub = $scope.totalyear1pub + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year1 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year1 : 0) : 0) + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year1 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year1 : 0) : 0);
				$scope.totalyear1pvt = $scope.totalyear1pvt + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year1 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year1 : 0) : 0);
				$scope.totalyear2pub = $scope.totalyear2pub + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year2 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year2 : 0) : 0) + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year2 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year2 : 0) : 0);
				$scope.totalyear2pvt = $scope.totalyear2pvt + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year2 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year2 : 0) : 0);
				$scope.getTotalLosses = $scope.totalyear1pub + $scope.totalyear1pvt + $scope.totalyear2pub + $scope.totalyear2pvt;
				$scope.getIndusTotalLosses = $scope.getIndusTotalLosses + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year1 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year1 : 0) : 0) + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year1 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year1 : 0) : 0) + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year2 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[1].los_year2 : 0) : 0) + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year2 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DloLosNational[0].los_year2 : 0) : 0);
				$scope.getArtisTotalLosses = $scope.getArtisTotalLosses + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year1 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year1 : 0) : 0) + ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0] ? ($scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year2 ? $scope.dmLosMinFirmsNation.mining.Table_6[value].DlaLosNational[0].los_year2 : 0) : 0);

				function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Industrial Damages', parseInt($scope.getIndusTotalDamages)],
						['Artisanal Damages', parseInt($scope.getArtisanalTotalDamages)],
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
						['Industrial Losses', parseInt($scope.getIndusTotalLosses)],
						['Artisanal Losses', parseInt($scope.getArtisTotalLosses)],
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
					var Header = ['Province', 'Total Damages', 'Total Losses', {
						role: 'style'
					}];
					data.push(Header);
					angular.forEach($scope.provincenames, function(value, key) {
						var temp = [];
						temp.push(value, parseInt($scope.gettotalDamages), parseInt($scope.getTotalLosses), null);
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

				function drawBarChartTwo() {
					var data = [];
					var chartsdata = [];
					var Header = ['Province', 'Industrial Damages', 'Industrial Losses', {
						role: 'style'
					}];
					data.push(Header);
					angular.forEach($scope.provincenames, function(value, key) {
						var temp = [];
						temp.push(value, parseInt($scope.getIndusTotalDamages), parseInt($scope.getIndusTotalLosses), null);
						data.push(temp);
					})
					var chartdata = new google.visualization.arrayToDataTable(data);
					var options = {
						chart: {
							width: 400,
							height: 250
						}
					};
					var chart = new google.charts.Bar(document.getElementById('barchartTwo'));
					chart.draw(chartdata, options);
				}

				function drawBarChartThree() {
					var data = [];
					var chartsdata = [];
					var Header = ['Province', 'Artisanal Damages', 'Artisanal Losses', {
						role: 'style'
					}];
					data.push(Header);
					angular.forEach($scope.provincenames, function(value, key) {
						var temp = [];
						temp.push(value, parseInt($scope.getArtisanalTotalDamages), parseInt($scope.getArtisTotalLosses), null);
						data.push(temp);
					})
					var chartdata = new google.visualization.arrayToDataTable(data);
					var options = {
						chart: {
							width: 400,
							height: 250
						}
					};
					var chart = new google.charts.Bar(document.getElementById('barchartThree'));
					chart.draw(chartdata, options);
				}
			})
		})
	}
	$scope.checkIfNull = function() {
		var isNull = $scope.dmLosMinFirmsNation ? angular.equals({}, $scope.dmLosMinFirmsNation.mining.Table_6) : true;
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
