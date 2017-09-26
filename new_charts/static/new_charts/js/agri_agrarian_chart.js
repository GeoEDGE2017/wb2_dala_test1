var app = angular.module('agriAgrarianApp', ['underscore']);
app.controller('AgriAgrarianAppChartController', function($scope, $http, $parse, _) {

 $scope.district;
    $scope.incident;
    $scope.bs_data={};
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
				'table_name': 'Table_10',
				'sector': 'agri_agrarian',
				'com_data': {
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
			console.log('load ', data);
			$scope.data = data;
			$scope.dlAgriAgrarianSumNat = data;
		$scope.provincenames = [];
			angular.forEach(data.agri_agrarian.Table_10, function(value, key) {
				$scope.provincenames.push(key);
			})
			angular.forEach($scope.provincenames.sort(), function(value, key) {
				google.charts.setOnLoadCallback(drawPieChart);
				google.charts.setOnLoadCallback(drawPieChartTwo);
				google.charts.setOnLoadCallback(drawBarChart);

				$scope.totaldpub = $scope.totaldpub  + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value]? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorDmgPubNational[0].sum ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorDmgPubNational[0].sum : 0 ): 0) ;

                         console.log('printing',$scope.data.agri_agrarian.Table_10[value]);
                         console.log('printing1',key);
                         console.log('printing2',value);

         $scope.totaldpvt = $scope.totaldpvt +  ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value]? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorDmgPvtNational[0].sum ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorDmgPvtNational[0].sum : 0 ) : 0) ;

         $scope.totalyear1pub = $scope.totalyear1pub +  ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear1National[0].dmg_los_pub ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear1National[0].dmg_los_pub : 0 ) : 0) ;

         $scope.totalyear1pvt =  $scope.totalyear1pvt + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value]? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear1National[0].dmg_los_pvt ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear1National[0].dmg_los_pvt : 0 ) : 0 );

         $scope.totalyear2pub = $scope.totalyear2pub + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value] ? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear2National[0].dmg_los_pub ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear2National[0].dmg_los_pub : 0 ) : 0) ;

         $scope.totalyear2pvt = $scope.totalyear2pvt  + ($scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value]? (
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear2National[0].dmg_los_pvt ?
                         $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10[value].DsorLosYear2National[0].dmg_los_pvt : 0 ) : 0);


         $scope.finaltotalpublic = $scope.totaldpub + $scope.totalyear1pub  + $scope.totalyear2pub;

         $scope.finaltotalprivate =  $scope.totaldpvt + $scope.totalyear1pvt + $scope.totalyear2pvt;

         var totdmg = $scope.totaldpub + $scope.totaldpvt;
         var totlos = $scope.totalyear1pub  + $scope.totalyear2pub + $scope.totalyear1pvt + $scope.totalyear2pvt;


				function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Public Damges', $scope.totaldpub],
						['Private Damages', $scope.totaldpvt],
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
						['Public Losses', $scope.totalyear1pub  + $scope.totalyear2pub],
						['Private Losses', $scope.totalyear1pvt + $scope.totalyear2pvt],
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
						temp.push(value, totdmg, totlos, null);
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
        var isNull = $scope.dlAgriAgrarianSumNat ? angular.equals({}, $scope.dlAgriAgrarianSumNat.agri_agrarian.Table_10) : true;
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
