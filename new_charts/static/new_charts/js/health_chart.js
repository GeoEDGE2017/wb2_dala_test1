var app = angular.module('healthChartApp', ['underscore']);
app.controller('HealthChartController', function($scope, $http, $parse, _) {
 $scope.district;
    $scope.incident;
    $scope.bs_data={};
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
    $scope.total_num_affected = 0;
     var tot_damages = 0;
    $scope.pr_tot_damages = 0;
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
				'table_name': 'Table_10',
				'sector': 'health',
				'com_data': {
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {


			console.log('load ', data);
			$scope.data = data;
			$scope.dlhealthsummarydamagenationwide = data;
			$scope.provincenames = [];
			angular.forEach(data.health.Table_10, function(value, key) {
				$scope.provincenames.push(key);
			})
			angular.forEach($scope.provincenames.sort(), function(value, key) {

			google.charts.setOnLoadCallback(drawPieChart);
//				google.charts.setOnLoadCallback(drawBarChart);
				$scope.sumFunc2 = function(val1 = 0, val2 = 0) {
					if(val1 == null) {
						val1 = 0;
					}
					if(val2 == null) {
						val2 = 0;
					}
					return parseInt(val1) + parseInt(val2);
				}
				$scope.sumFunc3 = function(val1 = 0, val2 = 0, val3 = 0) {
					if(val1 == null) {
						val1 = 0;
					}
					if(val2 == null) {
						val2 = 0;
					}
					if(val3 == null) {
						val3 = 0;
					}
					return parseInt(val1) + parseInt(val2) + parseInt(val3);
				}
				$scope.sumFunc4 = function(val1 = 0, val2 = 0, val3 = 0, val4 = 0) {
					if(val1 == null) {
						val1 = 0;
					}
					if(val2 == null) {
						val2 = 0;
					}
					if(val3 == null) {
						val3 = 0;
					}
					if(val4 == null) {
						val4 = 0;
					}
					return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4);
				}
				$scope.sumFunc5 = function(val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0) {
					if(val1 == null) {
						val1 = 0;
					}
					if(val2 == null) {
						val2 = 0;
					}
					if(val3 == null) {
						val3 = 0;
					}
					if(val4 == null) {
						val4 = 0;
					}
					if(val5 == null) {
						val5 = 0;
					}
					return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5);
				}
				$scope.sumFunc6 = function(val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0, val6 = 0) {
					if(val1 == null) {
						val1 = 0;
					}
					if(val2 == null) {
						val2 = 0;
					}
					if(val3 == null) {
						val3 = 0;
					}
					if(val4 == null) {
						val4 = 0;
					}
					if(val5 == null) {
						val5 = 0;
					}
					if(val6 == null) {
						val6 = 0;
					}
					return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6);
				}
				$scope.sumFunc7 = function(val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0, val6 = 0, val7 = 0) {
					if(val1 == null) {
						val1 = 0;
					}
					if(val2 == null) {
						val2 = 0;
					}
					if(val3 == null) {
						val3 = 0;
					}
					if(val4 == null) {
						val4 = 0;
					}
					if(val5 == null) {
						val5 = 0;
					}
					if(val6 == null) {
						val6 = 0;
					}
					if(val7 == null) {
						val7 = 0;
					}
					return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7);
				}
				$scope.sumFunc10 = function(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10) {
					if(val1 == null) {
						val1 = 0;
					}
					if(val2 == null) {
						val2 = 0;
					}
					if(val3 == null) {
						val3 = 0;
					}
					if(val4 == null) {
						val4 = 0;
					}
					if(val5 == null) {
						val5 = 0;
					}
					if(val6 == null) {
						val6 = 0;
					}
					if(val7 == null) {
						val7 = 0;
					}
					if(val8 == null) {
						val8 = 0;
					}
					if(val9 == null) {
						val9 = 0;
					}
					if(val10 == null) {
						val10 = 0;
					}
					var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7) + parseInt(val8) + parseInt(val9) + parseInt(val10);
					return total;
				}
				$scope.sumFunc12 = function(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12) {
					if(val1 == null) {
						val1 = 0;
					}
					if(val2 == null) {
						val2 = 0;
					}
					if(val3 == null) {
						val3 = 0;
					}
					if(val4 == null) {
						val4 = 0;
					}
					if(val5 == null) {
						val5 = 0;
					}
					if(val6 == null) {
						val6 = 0;
					}
					if(val7 == null) {
						val7 = 0;
					}
					if(val8 == null) {
						val8 = 0;
					}
					if(val9 == null) {
						val9 = 0;
					}
					if(val10 == null) {
						val10 = 0;
					}
					if(val11 == null) {
						val11 = 0;
					}
					if(val12 == null) {
						val12 = 0;
					}
					var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7) + parseInt(val8) + parseInt(val9) + parseInt(val10) + parseInt(val11) + parseInt(val12);
					return total;
				}
				$scope.sumFunc14 = function(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, val14) {
					if(val1 == null) {
						val1 = 0;
					}
					if(val2 == null) {
						val2 = 0;
					}
					if(val3 == null) {
						val3 = 0;
					}
					if(val4 == null) {
						val4 = 0;
					}
					if(val5 == null) {
						val5 = 0;
					}
					if(val6 == null) {
						val6 = 0;
					}
					if(val7 == null) {
						val7 = 0;
					}
					if(val8 == null) {
						val8 = 0;
					}
					if(val9 == null) {
						val9 = 0;
					}
					if(val10 == null) {
						val10 = 0;
					}
					if(val11 == null) {
						val11 = 0;
					}
					if(val12 == null) {
						val12 = 0;
					}
					if(val13 == null) {
						val13 = 0;
					}
					if(val14 == null) {
						val14 = 0;
					}
					var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7) + parseInt(val8) + parseInt(val9) + parseInt(val10) + parseInt(val11) + parseInt(val12) + parseInt(val13) + parseInt(val14);
					return total;
				}

//				google.charts.setOnLoadCallback(drawBarChart);
				function grndTotDamagesPub() {
					if(!angular.isUndefined($scope.dlhealthsummarydamagenationwide)) {
						angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
							angular.forEach(value, function(value_in, key) {
								if(value_in.length > 0) {
									if(key == 'DmhDamagesMohNational') {
										tot_damages = tot_damages + $scope.sumFunc2(value_in[0].office, value_in[0].other);
									} else if(key == 'DmhDamagesNational') {
										tot_damages = tot_damages + $scope.sumFunc3(value_in[0].teaching_hospital, value_in[0].provincial_general_hospital, value_in[0].district_general_hospital);
									} else if(key == 'DmfDamagesNational') {
										tot_damages = tot_damages + $scope.sumFunc7(value_in[0].base_hospital, value_in[0].divisional_hospital, value_in[0].rural_hospital, value_in[0].central_dispensary, value_in[0].pmcus, value_in[0].phccs, value_in[0].mchcs);
									}
								}
							})
						})

						return tot_damages;
					}
				}
				function loss() {
					if(!angular.isUndefined($scope.dlhealthsummarydamagenationwide)) {
						angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
							angular.forEach(value, function(value_in, key) {
								if(value_in.length > 0) {
									if(key == 'DapBefPcNational') {
										$scope.pr_tot_damages = $scope.pr_tot_damages + $scope.sumFunc2(value_in[0].est_replacement_cost, 0);
									} else if(key == 'DapBefOtherNational') {
										$scope.pr_tot_damages = $scope.pr_tot_damages + $scope.sumFunc2(value_in[0].total_damages, 0);
									}
								}
							})
						})

					}
				}



				function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Public Damges', grndTotDamagesPub()],
						['Private Damages', loss()],
					]);
					var options = {
						width: 400,
						height: 280
					};
					var chart = new google.visualization.PieChart(document.getElementById('piechart'));
					chart.draw(data, options);
				}

//				function drawBarChart() {
//					var data = [];
//					var chartsdata = [];
//					var Header = ['Province', 'Damages', 'Losses', {
//						role: 'style'
//					}];
//					data.push(Header);
//					angular.forEach($scope.provincenames, function(value, key) {
//						var temp = [];
//						temp.push(value, totalDamages, totalLosses, null);
//						data.push(temp);
//					})
//					var chartdata = new google.visualization.arrayToDataTable(data);
//					var options = {
//						chart: {
//							width: 400,
//							height: 300
//						}
//					};
//					var chart = new google.charts.Bar(document.getElementById('barchart'));
//					chart.draw(chartdata, options);
//				}
			})
		})
	}
	 $scope.checkIfNull = function(){
        var isNull = $scope.dlhealthsummarydamagenationwide ? angular.equals({}, $scope.dlhealthsummarydamagenationwide.health.Table_10) : true;
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
