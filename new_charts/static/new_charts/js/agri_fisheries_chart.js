var app = angular.module('agriFisheriesChartsApp', ['underscore']);
app.controller('AgriFisheriesChartsController', function($scope, $http, $parse, _) {

 $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    var damagepublic = null;
    $scope.grnddamagepublic = null;
    var damageprivate = null;
    $scope.grnddamageprivate = null;
    var losPubliceyear1 = null;
    // declaring total variables
    $scope.total_num_affected = 0;
    $scope.grndlosPubliceyear1 = null;
    $scope.grndlosPPrivateyear1 = null;
    $scope.grndlosPublicyear2 = null;
    $scope.grndlosPrivateyear2 = null;
    $scope.finalGrandTotPublic = null;
    $scope.finalGrandTotPrivate = null;
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
				'sector': 'agri_fisheries',
				'com_data': {
					'incident': $scope.incident,
				},
			}),
		}).success(function(data) {
			console.log('load ', data);
			$scope.data = data;
			 $scope.dlAgriFisheriesSumNat = data;
			$scope.provincenames = [];
			angular.forEach(data.agri_fisheries.Table_6, function(value, key) {
				$scope.provincenames.push(key);
			})
			angular.forEach($scope.provincenames.sort(), function(value, key) {
				google.charts.setOnLoadCallback(drawPieChart);
				google.charts.setOnLoadCallback(drawPieChartTwo);
				google.charts.setOnLoadCallback(drawBarChart);

                $scope.finaltotalprivate = 0;


            var damagepublic =
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPubNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPubNational[0].dmg_pub ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPubNational[0].dmg_pub : 0) : 0 ) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPubNational[1] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPubNational[1].dmg_pub ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPubNational[1].dmg_pub : 0):0) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPubNational[2] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPubNational[2].dmg_pub ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPubNational[2].dmg_pub:0):0);


            var damagepublicstring = "damagepublic_"+ value;

            var model = $parse(damagepublicstring);
            model.assign($scope, damagepublic);

            $scope.grnddamagepublic = $scope.grnddamagepublic + damagepublic ;
            console.log('errr',$scope.grnddamagepublic);


            var damageprivate =
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPvtNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPvtNational[0].dmg_pvt ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPvtNational[0].dmg_pvt : 0) : 0 ) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPvtNational[1] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPvtNational[1].dmg_pvt ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPvtNational[1].dmg_pvt : 0):0) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPvtNational[2] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPvtNational[2].dmg_pvt ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfDmgPvtNational[2].dmg_pvt:0):0);


            var damageprivatestring = "damageprivate_"+ value;

            var model = $parse(damageprivatestring);
            model.assign($scope, damageprivate);

            $scope.grnddamageprivate = $scope.grnddamageprivate + damageprivate ;


            var losPubliceyear1 =
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0].los_year_1_pub ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0].los_year_1_pub : 0) : 0 ) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0].los_year_1_pub ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0].los_year_1_pub : 0):0) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0].los_year_1_pub ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0].los_year_1_pub:0):0);


            var losPubliceyear1string = "losPubliceyear1_"+ value;

            var model = $parse(losPubliceyear1string);
            model.assign($scope, losPubliceyear1);

            $scope.grndlosPubliceyear1 = $scope.grndlosPubliceyear1 + losPubliceyear1 ;

            var losPrivateyear1 =
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0].los_year_1_pvt ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0].los_year_1_pvt : 0) : 0 ) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0].los_year_1_pvt ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0].los_year_1_pvt : 0):0) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0].los_year_1_pvt ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0].los_year_1_pvt:0):0);


            var losPrivateyear1string = "losPrivateyear1_"+ value;

            var model = $parse(losPrivateyear1string);
            model.assign($scope, losPrivateyear1);

            $scope.grndlosPPrivateyear1 = $scope.grndlosPPrivateyear1 + losPrivateyear1 ;
            console.log('Test',$scope.grndlosPPrivateyear1);

            var losPublicyear2 =
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0].los_year_2_pub ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0].los_year_2_pub : 0) : 0 ) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0].los_year_2_pub ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0].los_year_2_pub : 0):0) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0].los_year_2_pub ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0].los_year_2_pub:0):0);


            var losPublicyear2string = "losPublicyear2_"+ value;

            var model = $parse(losPublicyear2string);
            model.assign($scope, losPublicyear2);

            $scope.grndlosPublicyear2 = $scope.grndlosPublicyear2 + losPublicyear2 ;


            var losPrivateyear2 =
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0].los_year_2_pvt ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosIfisheriesNational[0].los_year_2_pvt : 0) : 0 ) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0].los_year_2_pvt ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosRfisheriesNational[0].los_year_2_pvt : 0):0) +

                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0] ?
                ($scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0].los_year_2_pvt ?
                $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6[value].DlfLosMfisheriesNational[0].los_year_2_pvt:0):0);


            var losPrivateyear2string = "losPrivateyear2_"+ value;

            var model = $parse(losPrivateyear2string);

            model.assign($scope, losPrivateyear2);

            $scope.grndlosPrivateyear2 = $scope.grndlosPrivateyear2 + losPrivateyear2 ;

            $scope.finalGrandTotPublic =
            $scope.grnddamagepublic + $scope.grndlosPubliceyear1  + $scope.grndlosPublicyear2 ;

            $scope.finalGrandTotPrivate =
            $scope.grnddamageprivate + $scope.grndlosPPrivateyear1 + $scope.grndlosPrivateyear2;


				function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Public', $scope.grnddamagepublic],
						['Private',  $scope.grnddamageprivate],
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
						['Public', $scope.grndlosPubliceyear1  + $scope.grndlosPublicyear2],
						['Private',$scope.grndlosPPrivateyear1 + $scope.grndlosPrivateyear2],
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
						temp.push(value, $scope.grnddamagepublic +$scope.grnddamageprivate , $scope.grndlosPubliceyear1  + $scope.grndlosPublicyear2 +$scope.grndlosPPrivateyear1 + $scope.grndlosPrivateyear2 , null);
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
            var isNull = $scope.dlAgriFisheriesSumNat ? angular.equals({}, $scope.dlAgriFisheriesSumNat.agri_fisheries.Table_6) : true;
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
