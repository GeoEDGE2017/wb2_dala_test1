//var app = angular.module('educationChartApp', ['underscore']);
//app.controller('EducationChartController', function($scope, $http, $parse, _) {
//
//    var tot_damages = 0;
//    var tot_damages_private = 0;
//	google.charts.load('current', {
//		'packages': ['corechart', 'bar']
//	});
//	$scope.fetchDlData = function() {
//		$scope.is_edit = true;
//		$scope.submitted = true;
//		$http({
//			method: "POST",
//			url: '/dl_fetch_district_disagtn',
//			data: angular.toJson({
//				'table_name': 'Table_7',
//				'sector': 'education',
//				'com_data': {
//					'incident': $scope.incident,
//				},
//			}),
//		}).success(function(data) {
//			console.log('load ', data);
//			$scope.data = data;
//			$scope.dlNational = data;
//			$scope.provincenames = [];
//			angular.forEach(data.education.Table_7, function(value, key) {
//				$scope.provincenames.push(key);
//			})
//			angular.forEach($scope.provincenames.sort(), function(value, key) {
//				google.charts.setOnLoadCallback(drawPieChart);
//				google.charts.setOnLoadCallback(drawPieChartTwo);
//				google.charts.setOnLoadCallback(drawBarChart);
//
//				$scope.sumFunc2 = function(val1, val2) {
//        if(val1 == null) {
//            val1=0;
//        }
//        if(val2 == null) {
//            val2=0;
//        }
//
//        return parseInt(val1) + parseInt(val2);
//    }
//
//                $scope.sumFunc8 = function(val1, val2, val3, val4, val5, val6, val7, val8) {
//                    if(val1 == null) {
//                        val1=0;
//                    }
//                    if(val2 == null) {
//                        val2=0;
//                    }
//                    if(val3 == null) {
//                        val3=0;
//                    }
//                    if(val4 == null) {
//                        val4=0;
//                    }
//                    if(val5 == null) {
//                        val5=0;
//                    }
//                    if(val6 == null) {
//                        val6=0;
//                    }
//                    if(val7 == null) {
//                        val7=0;
//                    }
//                    if(val8 == null) {
//                        val8=0;
//                    }
//
//                    return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6) + parseInt(val7) + parseInt(val8);
//                }
//
//                $scope.sumFunc5 = function(val1, val2, val3, val4, val5) {
//                    if(val1 == null) {
//                        val1=0;
//                    }
//                    if(val2 == null) {
//                        val2=0;
//                    }
//                    if(val3 == null) {
//                        val3=0;
//                    }
//                    if(val4 == null) {
//                        val4=0;
//                    }
//                    if(val5 == null) {
//                        val5=0;
//                    }
//
//                    return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5);
//                }
//
//                $scope.sumFunc6 = function(val1, val2, val3, val4, val5, val6) {
//        if(val1 == null) {
//            val1=0;
//        }
//        if(val2 == null) {
//            val2=0;
//        }
//        if(val3 == null) {
//            val3=0;
//        }
//        if(val4 == null) {
//            val4=0;
//        }
//        if(val5 == null) {
//            val5=0;
//        }
//        if(val6 == null) {
//            val6=0;
//        }
//
//        return parseInt(val1) + parseInt(val2) + parseInt(val3) + parseInt(val4) + parseInt(val5) + parseInt(val6);
//    }
//
//
//            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
//                angular.forEach(value, function(value_in, key) {
//                    if(value_in.length > 0) {
//                        if(key == 'DugNdafNational') {
//
//                            tot_damages =tot_damages +
//                                $scope.sumFunc8(value_in[0].ab1_1c, value_in[0].type_2, value_in[0].type_3, value_in[0].pirivena,
//                                value_in[0].training_institutes, value_in[0].training_colleges, value_in[0].tc_crc_resc, value_in[0].min_pzd_offices);
//
//                        }
//                    }
//                    console.log('try',tot_damages);
//                })
//            })
//
//
//
//
//
//            angular.forEach($scope.dlNational.education.Table_7, function(value, index) {
//                angular.forEach(value, function(value_in, key) {
//                tot_damages_private =0;
//                    if(value_in.length > 0) {
//
//                        if(key == 'DpefBefPreNational') {
//                            tot_damages_private = tot_damages_private + $scope.sumFunc2(value_in[0].tot_damages, 0);
//                        }
//                        else if(key == 'DpefBefPrimaryNational') {
//                            tot_damages_private = tot_damages_private + $scope.sumFunc2(value_in[0].tot_damages, 0);
//                        }
//                        else if(key == 'DpefBefSecondaryNational') {
//                            tot_damages_private = tot_damages_private + $scope.sumFunc2(value_in[0].tot_damages, 0);
//                        }
//                        else if(key == 'DpefBefUnvNational') {
//                            tot_damages_private = tot_damages_private + $scope.sumFunc2(value_in[0].tot_damages, 0);
//                        }
//                        else if(key == 'DpefBefTechNational') {
//                            tot_damages_private = tot_damages_private + $scope.sumFunc2(value_in[0].tot_damages, 0);
//                        }
//                        else if(key == 'DpefBefOtherNational') {
//                            tot_damages_private = tot_damages_private + $scope.sumFunc2(value_in[0].tot_damages, 0);
//                        }
//
//
//                    }
//                })
//            })
//
//
//
//				function drawPieChart() {
//					var data = new google.visualization.DataTable();
//					data.addColumn('string', 'Name');
//					data.addColumn('number', 'Data');
//					data.addRows([
//						['public', tot_damages],
//						['private', tot_damages_private],
//					]);
//					var options = {
//						width: 400,
//						height: 200
//					};
//					var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//					chart.draw(data, options);
//				}
//
//
//				function drawPieChartTwo() {
//					var data = new google.visualization.DataTable();
//					data.addColumn('string', 'Name');
//					data.addColumn('number', 'Data');
//					data.addRows([
//						['public', 0],
//						['private', 0],
//					]);
//					var options = {
//						width: 400,
//						height: 200
//					};
//					var chart = new google.visualization.PieChart(document.getElementById('piechartTwo'));
//					chart.draw(data, options);
//				}
//
//				function drawBarChart() {
//					var data = [];
//					var chartsdata = [];
//					var Header = ['Province', 'Damages', 'Losses', {
//						role: 'style'
//					}];
//					data.push(Header);
//					angular.forEach($scope.provincenames, function(value, key) {
//						var temp = [];
//						temp.push(value, 0, 0, null);
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
//			})
//		})
//	}
//	$scope.checkIfNull = function() {
//		var isNull = $scope.dlNational ? angular.equals({}, $scope.dlNational.education.Table_7) : true;
//		return isNull;
//	}
//	$scope.convertToInt = function(val1, val2, val3) {
//		var sum = parseInt(val1) + parseInt(val2) + parseInt(val3);
//		return sum;
//	}
//	$scope.printDiv = function() {
//		window.print();
//	}
//});
