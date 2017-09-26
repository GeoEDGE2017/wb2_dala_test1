var app = angular.module('agriLivestocksChartsApp', ['underscore']);
app.controller('AgriLivestockController', function($scope, $http, $parse, _) {
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
				'sector': 'agri_livestock',
				'com_data': {
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
			console.log('load ', data);
			$scope.data = data;
			$scope.dlAgriLivestockSumNat = data;
			$scope.provincenames = [];
			angular.forEach(data.agri_livestock.Table_6, function(value, key) {
				$scope.provincenames.push(key);
			})
			angular.forEach($scope.provincenames.sort(), function(value, key) {
				google.charts.setOnLoadCallback(drawPieChart);
				google.charts.setOnLoadCallback(drawPieChartTwo);
				google.charts.setOnLoadCallback(drawBarChart);

				$scope.totaldpub =
         ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPubNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPubNational[0].damages ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPubNational[0].damages : 0 ): 0) ;

         $scope.totaldpvt =  ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPvtNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPvtNational[0].damages ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPvtNational[0].damages : 0 ) : 0) ;

         $scope.totalyear1pub =  ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0].los_year_1 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0].los_year_1 : 0 ) : 0) ;

         $scope.totalyear1pvt = ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0].los_year_1 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0].los_year_1 : 0 ) : 0 );

        console.log('test', $scope.totalyear1pvt);


         $scope.totalyear2pub =  ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0].los_year_2 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0].los_year_2 : 0 ) : 0) ;

         $scope.totalyear2pvt = ($scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0] ? (
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0].los_year_2 ?
                         $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0].los_year_2 : 0 ) : 0);


         $scope.finaltotalpublic =  $scope.totaldpub + $scope.totalyear1pub  + $scope.totalyear2pub;

         $scope.finaltotalprivate =   $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;

         var privatedmagetot = $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPubNational[0].damages ;
         var publicdmagetot = $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpNdaPvtNational[0].damages;


         var privateLosstot = $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0].los_year_1 + $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPvtNational[0].los_year_2  ;
         var publicLosstot = $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0].los_year_1  + $scope.dlAgriLivestockSumNat.agri_livestock.Table_6[value].DlpLosPubNational[0].los_year_2;



				function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Private', privatedmagetot],
						['Public', publicdmagetot],
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
						['Private', privateLosstot],
						['Public', publicLosstot],
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
						temp.push(value, privatedmagetot, publicdmagetot, null);
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
	$scope.checkIfNull = function(){
        var isNull = $scope.dlAgriLivestockSumNat ? angular.equals({},
        $scope.dlAgriLivestockSumNat.agri_livestock.Table_6) : true;
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
