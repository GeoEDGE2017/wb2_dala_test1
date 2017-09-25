var app = angular.module('testingApp', ['underscore']);
app.controller('testingChartController', function($scope, $http, $parse, _) {
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
				'sector': 'housing',
				'com_data': {
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
			console.log('load ', data);
			$scope.data = data;
			$scope.dlHousingSumNat = data;
			$scope.provincenames = [];
			angular.forEach(data.housing.Table_6, function(value, key) {
				$scope.provincenames.push(key);
			})
			angular.forEach($scope.provincenames.sort(), function(value, key) {
				google.charts.setOnLoadCallback(drawPieChart);
				google.charts.setOnLoadCallback(drawBarChart);
				var totalNumDes = 0;
				totalNumDes = $scope.convertToInt(
					($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesPerNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesPerNational[0].tot_num_houses ? $scope.dlHousingSumNat.housing.Table_6[value].DlNumDesPerNational[0].tot_num_houses : 0) : 0), ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesSemiPerNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesSemiPerNational[0].tot_num_houses ? $scope.dlHousingSumNat.housing.Table_6[value].DlNumDesSemiPerNational[0].tot_num_houses : 0) : 0), ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesImpNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlNumDesImpNational[0].tot_num_houses ? $scope.dlHousingSumNat.housing.Table_6[value].DlNumDesImpNational[0].tot_num_houses : 0) : 0));
				var totalNumPart = 0;
				totalNumPart = $scope.convertToInt(
					($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesPerNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesPerNational[0].tot_num_houses ? $scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesPerNational[0].tot_num_houses : 0) : 0), ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesSemiPerNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesSemiPerNational[0].tot_num_houses ? $scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesSemiPerNational[0].tot_num_houses : 0) : 0), ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesImpNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesImpNational[0].tot_num_houses ? $scope.dlHousingSumNat.housing.Table_6[value].DlNumPdesImpNational[0].tot_num_houses : 0) : 0));
				var totalDamages = 0;
				totalDamages = $scope.convertToInt(
					($scope.dlHousingSumNat.housing.Table_6[value].DlDmgPerNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlDmgPerNational[0].tot_damages ? $scope.dlHousingSumNat.housing.Table_6[value].DlDmgPerNational[0].tot_damages : 0) : 0), ($scope.dlHousingSumNat.housing.Table_6[value].DlDmgSemiPerNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlDmgSemiPerNational[0].tot_damages ? $scope.dlHousingSumNat.housing.Table_6[value].DlDmgSemiPerNational[0].tot_damages : 0) : 0), ($scope.dlHousingSumNat.housing.Table_6[value].DlDmgImpNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlDmgImpNational[0].tot_damages ? $scope.dlHousingSumNat.housing.Table_6[value].DlDmgImpNational[0].tot_damages : 0) : 0));
				var totalLosses = 0;
				totalLosses = $scope.convertToInt(
					($scope.dlHousingSumNat.housing.Table_6[value].DlLosPerNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlLosPerNational[0].tot_losses ? $scope.dlHousingSumNat.housing.Table_6[value].DlLosPerNational[0].tot_losses : 0) : 0), ($scope.dlHousingSumNat.housing.Table_6[value].DlLosSemiPerNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlLosSemiPerNational[0].tot_losses ? $scope.dlHousingSumNat.housing.Table_6[value].DlLosSemiPerNational[0].tot_losses : 0) : 0), ($scope.dlHousingSumNat.housing.Table_6[value].DlLosImpNational[0] ? ($scope.dlHousingSumNat.housing.Table_6[value].DlLosImpNational[0].tot_losses ? $scope.dlHousingSumNat.housing.Table_6[value].DlLosImpNational[0].tot_losses : 0) : 0));

				function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Totally', totalNumDes],
						['Partially', totalNumPart],
					]);
					var options = {
						width: 400,
						height: 280
					};
					var chart = new google.visualization.PieChart(document.getElementById('piechart'));
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
						temp.push(value, totalDamages, totalLosses, null);
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
		var isNull = $scope.dlHousingSumNat ? angular.equals({}, $scope.dlHousingSumNat.housing.Table_6) : true;
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
