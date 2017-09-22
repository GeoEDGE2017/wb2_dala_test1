var app = angular.module('transRailChartApp', ['underscore']);
app.controller('TransRailChartController', function($scope, $http, $parse, _) {

    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.is_valid_data = true;
    $scope.totalDamages = 0;
    $scope.totaldpvt = 0;
    $scope.totalyear1pub = 0;
    $scope.totalyear1pvt = 0;
    $scope.totalyear2pub = 0;
    $scope.totalyear2pvt = 0;
    $scope.foregone = 0;
    $scope.cleaning = 0;
    $scope.Higher = 0;
    $scope.Other = 0;
    $scope.finaltotalpublic = 0;
    $scope.finaltotalprivate = 0;
    $scope.total_num_affected = 0;
	google.charts.load('current', {
		'packages': ['corechart', 'bar']
	});

	$scope.fetchDlData = function(){


        $scope.is_edit = true;
        $scope.submitted = true;
            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':'Table_4',
            'sector': 'transport_rail',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {
		    $scope.data= data;
            $scope.dmLosTransAirNation = data;
			$scope.provincenames = [];

			angular.forEach(data.transport_rail.Table_4, function(value, key) {
				$scope.provincenames.push(key);
			})


            angular.forEach($scope.provincenames, function(value, key) {
            $scope.totalDamages =  $scope.totalDamages + (
                         $scope.dmLosTransAirNation.transport_rail.Table_4[value].TotDmgNational[0].tot_damages ?
                         $scope.dmLosTransAirNation.transport_rail.Table_4[value].TotDmgNational[0].tot_damages : 0 ) ;

                    })
            })

            $http({
            method: "POST",
            url: '/dl_fetch_edit_data',
            data: angular.toJson({
            'table_name':  'Table_5',
            'sector':'transport_rail',
            'com_data': {

                    'incident': $scope.incident,
                  },
                   'is_edit':$scope.is_edit
                   }),
            }).success(function(data) {

            $scope.dlTypeLossRail = data;
             console.log('table 5',data);
              console.log('one',data.transport_rail.Table_5.DlTypeLos[0].tot_los)
             angular.forEach($scope.provincenames, function(value, key) {
                  $scope.foregone = data.transport_rail.Table_5.DlTypeLos[0].tot_los;
                  $scope.cleaning = data.transport_rail.Table_5.DlTypeLos[1].tot_los;
                  $scope.Higher = data.transport_rail.Table_5.DlTypeLos[2].tot_los;
                  $scope.Other = data.transport_rail.Table_5.DlTypeLos[3].tot_los;
                  })

            console.log('ttt',$scope.foregone);
            console.log('feff',$scope.cleaning);
            console.log('three',$scope.Higher);
            console.log('fff',$scope.Other);

            google.charts.setOnLoadCallback(drawPieChart);
            google.charts.setOnLoadCallback(drawBarChart);


            function drawPieChart() {
					var data = new google.visualization.DataTable();
					data.addColumn('string', 'Name');
					data.addColumn('number', 'Data');
					data.addRows([
						['Foregone', parseInt($scope.foregone)],
						['Cleaning', parseInt($scope.cleaning)],
						['Higher', parseInt($scope.Higher)],
						['Other', parseInt($scope.Other)],
					]);
					var options = {
						width: 350,
						height: 200
					};
					var chart = new google.visualization.PieChart(document.getElementById('piechart'));
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
						temp.push(value, parseInt($scope.totalDamages), parseInt($scope.foregone + $scope.cleaning + $scope.Higher + $scope.Other),null);
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
    }


	  $scope.checkIfNull = function(){
        var isNull = $scope.dlTypeLossRail ? angular.equals({}, $scope.dlTypeLossRail.transport_rail.Table_5) : true;
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
