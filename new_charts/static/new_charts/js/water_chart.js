var app = angular.module('waterChartApp', ['underscore']);
app.controller('WaterChartController', function($scope, $http, $parse, _) {
var residential = 0;
var commercial = 0;
var industrial = 0;
var others = 0;
var industrial = 0;
var totalCommercialDamages = 0;
var totalRuralDamage = 0;
var totalRuralLosses = 0;
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
				'table_name': 'Table_7',
				'sector': 'water_supply',
				'com_data': {
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
			console.log('load ', data);
			$scope.data= data;
            $scope.dlWaterSumNat = data;
			$scope.provincenames = [];

			angular.forEach(data.water_supply.Table_7, function(value, key) {
				$scope.provincenames.push(key);
			})
			angular.forEach($scope.provincenames.sort(), function(value, key) {
				google.charts.setOnLoadCallback(drawPieChart);
				google.charts.setOnLoadCallback(drawPieTwoChart);
				google.charts.setOnLoadCallback(drawBarChart);


                residential = parseInt(residential) + parseInt($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwNumAfNational[0].tot_dmg_residential);
                commercial = parseInt(commercial) + parseInt($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwNumAfNational[0].tot_dmg_commercial);
                industrial = parseInt(industrial) + parseInt($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwNumAfNational[0].tot_dmg_industrial);
                others =  parseInt(others) + parseInt($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwNumAfNational[0].tot_dmg_others);

                var type1 = $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralNumAfNational[0].families_affected;

                var type2 = $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralNumAfNational[3].families_affected;
                var type3 = $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralNumAfNational[2].families_affected;
                var type4 = $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralNumAfNational[1].families_affected;

                totalCommercialDamages = totalCommercialDamages + ($scope.dlWaterSumNat.water_supply.Table_7[value] ? ($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwDmgNational[0].sum ? $scope.dlWaterSumNat.water_supply.Table_7[value].DlcwDmgNational[0].sum : 0) : 0);

                console.log('tessss',totalCommercialDamages);

                totalRuralDamage = totalRuralDamage + ($scope.dlWaterSumNat.water_supply.Table_7[value] ? ($scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralDmgNational[0].tot_damages ? $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralDmgNational[0].tot_damages : 0) : 0);

                var totalCommercialLossYear1 = 0;
                totalCommercialLossYear1 =  ($scope.dlWaterSumNat.water_supply.Table_7[value]? ($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwLosNational[0].tot_los_year1 ? $scope.dlWaterSumNat.water_supply.Table_7[value].DlcwLosNational[0].tot_los_year1 : 0) : 0);

                var totalCommercialLossYear2 = 0;
                totalCommercialLossYear2 =  ($scope.dlWaterSumNat.water_supply.Table_7[value]? ($scope.dlWaterSumNat.water_supply.Table_7[value].DlcwLosNational[0].tot_los_year2 ? $scope.dlWaterSumNat.water_supply.Table_7[value].DlcwLosNational[0].tot_los_year2 : 0) : 0);

                var totalCommercialLosses = totalCommercialLossYear1 + totalCommercialLossYear2;

                totalRuralLosses = totalRuralLosses + ($scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralLosNational ? ($scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralLosNational[0].tot_los ? $scope.dlWaterSumNat.water_supply.Table_7[value].DlRuralLosNational[0].tot_los : 0) : 0);

				function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Residential', parseInt(residential)],
						['Commercial', parseInt(commercial)],
						['Industrial', parseInt(industrial)],
						['Others', parseInt(others)],
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
						['Type1', parseInt(type1)],
						['Type2', parseInt(type2)],
						['Type2', parseInt(type3)],
						['Type4', parseInt(type4)],
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
					var Header = ['Province', 'CommercialDamages', 'RuralDamages','CommercialLosses','RuralLosses',{
						role: 'style'
					}];
					data.push(Header);
					angular.forEach($scope.provincenames, function(value, key) {
						var temp = [];
						console.log("mytest",totalCommercialDamages,totalRuralDamage,totalCommercialLosses,totalRuralLosses);
						temp.push(value, parseInt(totalCommercialDamages), parseInt(totalRuralDamage), parseInt(totalCommercialLosses),parseInt(totalRuralLosses),null);
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
	$scope.checkIfNull = function(){
        var isNull = $scope.dlWaterSumNat ? angular.equals({}, $scope.dlWaterSumNat.water_supply.Table_7) : true;
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
