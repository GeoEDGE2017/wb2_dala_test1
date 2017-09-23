var app = angular.module('powerChartApp', ['underscore']);
app.controller('PowerChartController', function($scope, $http, $parse, _) {
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
				'sector': 'power_supply',
				'com_data': {
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
			console.log('load ', data);
			$scope.data= data;
            $scope.dlPowerSumNat = data;
			$scope.provincenames = [];

			angular.forEach(data.power_supply.Table_6, function(value, key) {
				$scope.provincenames.push(key);
			})
			angular.forEach($scope.provincenames.sort(), function(value, key) {
				google.charts.setOnLoadCallback(drawPieChart);
				google.charts.setOnLoadCallback(drawPieChartTwo);
				google.charts.setOnLoadCallback(drawPieChartThree);
				google.charts.setOnLoadCallback(drawBarChart);

			var totalAffDomestic = 0;
            totalAffDomestic =  ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0] ?
                           ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].domestic ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].domestic : 0):0)

            var totalAffCommercial = 0;
            totalAffCommercial =  ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0] ?
                           ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].commercial ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].commercial : 0):0)

            var totalAffindustrial = 0;
            totalAffindustrial =  ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0] ?
                           ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].industrial ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].industrial : 0):0)

            var totalAffother = 0;
            totalAffother =  ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0] ?
                           ($scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].other ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].DlNumAffNational[0].other : 0):0)


            var totalCEBDamages = 0;
            totalCEBDamages =totalCEBDamages + ($scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgCebNational[0] ?
                           ($scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgCebNational[0].tot_dmg ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgCebNational[0].tot_dmg : 0):0)


            var totalCebLosses = 0;
            totalCebLosses = totalCebLosses + ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0] ?
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0].losses_y1 ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0].losses_y1 : 0):0) +
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0] ?
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0].losses_y2 ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotLosCebNational[0].losses_y2 : 0):0)

            var totalIPPDamages = 0;
            totalIPPDamages =totalIPPDamages + ($scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgPvtNational[0] ?
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgPvtNational[0].tot_dmg ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgPvtNational[0].tot_dmg : 0):0)

            var totalIPPLosses = 0;
            totalIPPLosses = totalIPPLosses + ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[0] ?
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[0].los_year1 ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[0].los_year1 : 0):0) +
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[0] ?
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[0].los_year2 ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[0].los_year2 : 0):0)


            var totalSPPADamages = 0;
            totalSPPADamages =totalSPPADamages + ($scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgPvtNational[0] ?
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgPvtNational[1].tot_dmg ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotDmgPvtNational[1].tot_dmg : 0):0)

            var totalSPPALosses = 0;
            totalSPPALosses = totalSPPALosses + ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[0] ?
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[1].los_year1 ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[1].los_year1 : 0):0) +
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[1] ?
                            ($scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[1].los_year2 ?
                            $scope.dlPowerSumNat.power_supply.Table_6[value].TotLossesPvtNational[1].los_year2 : 0):0)

            var totalDmg = totalCEBDamages + totalIPPDamages + totalSPPADamages;
            var totalLos = totalCebLosses + totalIPPLosses + totalSPPALosses;

            console.log('printting',totalAffDomestic);
				function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Domestic ', parseInt(totalAffDomestic)],
						['Commercial', parseInt(totalAffCommercial)],
						['Industrial', parseInt(totalAffindustrial)],
						['Other', parseInt(totalAffother)],
					]);
					var options = {
						width: 350,
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
						['CEB', parseInt(totalCebLosses)],
						['IPP', parseInt(totalIPPLosses)],
						['SPPA', parseInt(totalSPPALosses)],

					]);
					var options = {
						width: 350,
						height: 200
					};
					var chart = new google.visualization.PieChart(document.getElementById('piechartTwo'));
					chart.draw(data, options);
				}

				function drawPieChartThree() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['CEB', parseInt(totalCEBDamages)],
						['IPP', parseInt(totalIPPDamages)],
						['SPPA', parseInt(totalSPPADamages)],
					]);
					var options = {
						width: 350,
						height: 200
					};
					var chart = new google.visualization.PieChart(document.getElementById('piechartThree'));
					chart.draw(data, options);
				}


				function drawBarChart() {
					var data = [];
					var chartsdata = [];
					var Header = ['Province', 'Damages', 'Losses',{
						role: 'style'
					}];
					data.push(Header);
					angular.forEach($scope.provincenames, function(value, key) {
						var temp = [];
						temp.push(value, parseInt(totalDmg),parseInt(totalLos), null);
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
        var isNull = $scope.dlPowerSumNat ? angular.equals({}, $scope.dlPowerSumNat.power_supply.Table_6) : true;
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
