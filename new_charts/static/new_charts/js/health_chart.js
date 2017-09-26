var app = angular.module('healthApp', ['underscore']);
app.controller('HealthChartController', function($scope, $http, $parse, _) {
    var lineminiMale = 0;
    var lineminiFeMale = 0;
    var tot_number_affected = 0;
    var mohMale = 0;
    var mohFemale = 0;
    var otherFemale = 0;
    var otherMale = 0;
    var tot_number_feaffected = 0;
    var  tot_number_affected = 0;
    var tot_male = 0;
    var tot_female = 0;
    var tot_damages = 0;
    var tot_damagesP = 0;
    var tot_losses_year1 = 0;
    var tot_est_losses_y1 = 0;
    var tot_losses_year2 = 0;
     var tot_est_losses_y2 = 0;

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
				google.charts.setOnLoadCallback(drawPieChartTwo);

				google.charts.setOnLoadCallback(drawBarChart);


    $scope.sumFunc2 = function(val1=0, val2=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        return parseInt(val1) + parseInt(val2);
    }

    $scope.sumFunc3 = function(val1=0, val2=0, val3=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        return parseInt(val1) + parseInt(val2) + parseInt(val3);
    }

    $scope.sumFunc4 = function(val1=0, val2=0, val3=0, val4=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4);
    }

    $scope.sumFunc5 = function(val1=0, val2=0, val3=0, val4=0, val5=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5);
    }

    $scope.sumFunc6 = function(val1=0, val2=0, val3=0, val4=0, val5=0, val6=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }
        if(val6 == null) {
            val6=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6);
    }

    $scope.sumFunc7 = function(val1=0, val2=0, val3=0, val4=0, val5=0, val6=0, val7=0) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }
        if(val6 == null) {
            val6=0;
        }
        if(val7 == null) {
            val7=0;
        }

        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7);
    }

    $scope.sumFunc10 = function(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }
        if(val6 == null) {
            val6=0;
        }
        if(val7 == null) {
            val7=0;
        }
        if(val8 == null) {
            val8=0;
        }
        if(val9 == null) {
            val9=0;
        }
        if(val10 == null) {
            val10=0;
        }

        var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) +
            parseInt(val6) + parseInt(val7) + parseInt(val8) + parseInt(val9) + parseInt(val10);
        return total;
    }

    $scope.sumFunc12 = function(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }
        if(val6 == null) {
            val6=0;
        }
        if(val7 == null) {
            val7=0;
        }
        if(val8 == null) {
            val8=0;
        }
        if(val9 == null) {
            val9=0;
        }
        if(val10 == null) {
            val10=0;
        }
        if(val11 == null) {
            val11=0;
        }
        if(val12 == null) {
            val12=0;
        }

        var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) +
            parseInt(val6) + parseInt(val7) + parseInt(val8) + parseInt(val9) + parseInt(val10) + parseInt(val11) + parseInt(val12);
        return total;
    }

    $scope.sumFunc14 = function(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, val14) {
        if(val1 == null) {
            val1=0;
        }
        if(val2 == null) {
            val2=0;
        }
        if(val3 == null) {
            val3=0;
        }
        if(val4 == null) {
            val4=0;
        }
        if(val5 == null) {
            val5=0;
        }
        if(val6 == null) {
            val6=0;
        }
        if(val7 == null) {
            val7=0;
        }
        if(val8 == null) {
            val8=0;
        }
        if(val9 == null) {
            val9=0;
        }
        if(val10 == null) {
            val10=0;
        }
        if(val11 == null) {
            val11=0;
        }
        if(val12 == null) {
            val12=0;
        }
        if(val13 == null) {
            val13=0;
        }
        if(val14 == null) {
            val14=0;
        }

        var total = parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) +
            parseInt(val6) + parseInt(val7) + parseInt(val8) + parseInt(val9) + parseInt(val10) + parseInt(val11) +
            parseInt(val12) + parseInt(val13) + parseInt(val14);
        return total;
    }


            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DmhPafNational') {
                            tot_number_affected = tot_number_affected + $scope.sumFunc3(value_in[1].teaching_hospital,
                                value_in[1].provincial_general_hospital, value_in[1].district_general_hospital);

                            tot_number_feaffected = tot_number_feaffected + $scope.sumFunc2(value_in[1].office, value_in[1].other);
                        }
                        else if(key == 'DmfOmfTpaNational') {
                            tot_number_feaffected = tot_number_feaffected + $scope.sumFunc7(value_in[1].base_hospital,
                                value_in[1].divisional_hospital, value_in[1].rural_hospital,value_in[1].central_dispensary,
                                value_in[1].pmcus, value_in[1].phccs, value_in[1].mchcs);
                        }
                    }
                })
            })


            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DmhPafNational') {
                            tot_number_affected = tot_number_affected + $scope.sumFunc3(value_in[0].teaching_hospital,
                                value_in[0].provincial_general_hospital, value_in[0].district_general_hospital);

                            tot_number_affected = tot_number_affected + $scope.sumFunc2(value_in[0].office, value_in[0].other);
                        }
                        else if(key == 'DmfOmfTpaNational') {
                            tot_number_affected = tot_number_affected + $scope.sumFunc7(value_in[0].base_hospital,
                                value_in[0].divisional_hospital, value_in[0].rural_hospital,value_in[0].central_dispensary,
                                value_in[0].pmcus, value_in[0].phccs, value_in[0].mchcs);
                        }
                    }
                })
            })



            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DapPvtNational') {
                            tot_male = tot_male + $scope.sumFunc2(value_in[1].male, value_in[0].male);
                        }
                    }
                })
            })


            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DapPvtNational') {
                            tot_female = tot_female + $scope.sumFunc2(value_in[1].female, value_in[0].female);
                        }
                    }
                })
            })



            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DmhDamagesMohNational') {
                            tot_damages = tot_damages + $scope.sumFunc2(value_in[0].office, value_in[0].other);
                        }
                        else if(key == 'DmhDamagesNational') {
                            tot_damages = tot_damages + $scope.sumFunc3(value_in[0].teaching_hospital,
                                value_in[0].provincial_general_hospital, value_in[0].district_general_hospital);
                        }
                        else if(key == 'DmfDamagesNational') {
                            tot_damages = tot_damages + $scope.sumFunc7(value_in[0].base_hospital,
                                value_in[0].divisional_hospital, value_in[0].rural_hospital, value_in[0].central_dispensary,
                                value_in[0].pmcus, value_in[0].phccs, value_in[0].mchcs);
                        }
                    }
                })
            })



            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DapBefPcNational') {
                            tot_damagesP = tot_damagesP + $scope.sumFunc2(value_in[0].est_replacement_cost, 0);
                        }
                        else if(key == 'DapBefOtherNational') {
                            tot_damagesP = tot_damagesP + $scope.sumFunc2(value_in[0].total_damages, 0);
                        }
                    }
                })
            })



            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DmhLosNational') {
                            tot_losses_year1 = tot_losses_year1 + $scope.sumFunc3(value_in[0].teaching_hospital,
                                value_in[0].provincial_general_hospital, value_in[0].district_general_hospital);

                            tot_losses_year1 = tot_losses_year1 + $scope.sumFunc2(value_in[0].office, value_in[0].other);
                        }
                        else if(key == 'DmfLosNational') {
                            tot_losses_year1 = tot_losses_year1 + $scope.sumFunc7(value_in[0].base_hospital,
                                value_in[0].divisional_hospital, value_in[0].rural_hospital, value_in[0].central_dispensary,
                                value_in[0].pmcus, value_in[0].phccs, value_in[0].mchcs);
                        }
                    }
                })
            })



            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DapBefPcNational') {
                            tot_est_losses_y1 = tot_est_losses_y1 + $scope.sumFunc2(value_in[0].est_losses_y1, 0);
                        }
                        else if(key == 'DapBefOtherNational') {
                            tot_est_losses_y1 = tot_est_losses_y1 + $scope.sumFunc2(value_in[0].est_losses_y1, 0);
                        }
                    }
                })
            })


            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DmhLosNational') {
                            tot_losses_year2 = tot_losses_year2 + $scope.sumFunc3(value_in[1].teaching_hospital,
                                value_in[1].provincial_general_hospital, value_in[1].district_general_hospital);

                            tot_losses_year2 = tot_losses_year2 + $scope.sumFunc2(value_in[1].office, value_in[1].other);
                        }
                        else if(key == 'DmfLosNational') {
                            tot_losses_year2 = tot_losses_year2 + $scope.sumFunc7(value_in[3].base_hospital,
                                value_in[3].divisional_hospital, value_in[3].rural_hospital, value_in[3].central_dispensary,
                                value_in[3].pmcus, value_in[3].phccs, value_in[3].mchcs);
                        }
                    }
                })
            })


            angular.forEach($scope.dlhealthsummarydamagenationwide.health.Table_10, function(value, index) {
                angular.forEach(value, function(value_in, key) {
                    if(value_in.length > 0) {
                        if(key == 'DapBefPcNational') {
                            tot_est_losses_y2 = tot_est_losses_y2 + $scope.sumFunc2(value_in[0].est_losses_y2, 0);
                        }
                        else if(key == 'DapBefOtherNational') {
                            tot_est_losses_y2 = tot_est_losses_y2 + $scope.sumFunc2(value_in[0].est_losses_y2, 0);
                        }
                    }
                })
            })


            console.log('printing',tot_number_affected);

				function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Male', tot_male],
						['Female', tot_female],
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
						['Male', tot_number_affected],
						['Female', tot_number_feaffected],
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
						temp.push(value,tot_damages + tot_damagesP , tot_losses_year1 + tot_est_losses_y1 +tot_losses_year2 +tot_est_losses_y2 , null);
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
        var isNull = $scope.dlhealthsummarydamagenationwide ? angular.equals({},
        $scope.dlhealthsummarydamagenationwide.health.Table_10) : true;
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
