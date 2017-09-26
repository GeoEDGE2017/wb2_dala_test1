var app = angular.module('agriIrrigationChartApp', ['underscore']);
app.controller('AgriIrrigationChartController', function($scope, $http, $parse, _) {
    var totDmg1 = 0;
    var totDmg1 = 0;
    var totDmg2 = 0;
    var totDmg3 = 0;
    var totDmg4 = 0;
    var totDmg5 = 0;
    var totDmg6 = 0;
    var totDmg7 = 0;
    var totLos8 = 0;
    var totLos9 = 0;
    var totLos10 = 0;
    var totLos11 = 0;
    var totLos12 = 0;
    var totLos13 = 0;
    var totLos14 = 0;
    var totDmg = 0;
    var totLos = 0;

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
                'sector': 'agri_irrigation',
                'com_data': {
                    'incident': $scope.incident,
                },
            }),
        }).success(function(data) {
            console.log('load ', data);
            $scope.data = data;
            $scope.dlagriIrrigationNat = data;
            $scope.provincenames = [];
            angular.forEach(data.agri_irrigation.Table_6, function(value, key) {
                $scope.provincenames.push(key);
            })
            angular.forEach($scope.provincenames.sort(), function(value, key) {
                google.charts.setOnLoadCallback(drawPieChart);
                google.charts.setOnLoadCallback(drawPieChartTwo);
                google.charts.setOnLoadCallback(drawBarChart);

                console.log('printing2', data.agri_irrigation.Table_6[value].DlMajorTanksNational[0].damages);


                totDmg1 = totDmg1 + data.agri_irrigation.Table_6[value].DlMajorTanksNational[0].damages;


                totDmg2 = totDmg2 + data.agri_irrigation.Table_6[value].DlMediumTanksNational[0].damages.damages;


                totDmg3 = totDmg3 + data.agri_irrigation.Table_6[value].DlMinorTanksNational[0].damages;


                totDmg4 = totDmg4 + data.agri_irrigation.Table_6[value].DlAnicutsNational[0].damages;


                totDmg5 = totDmg5 + data.agri_irrigation.Table_6[value].DlOtherStructuresNational[0].damages;


                totDmg6 = totDmg6 + data.agri_irrigation.Table_6[value].DlRiverEmbankmntNational[0].damages;


                totDmg7 = totDmg7 + data.agri_irrigation.Table_6[value].DlBuildingsNational[0].damages;

                totDmg = totDmg1 + totDmg2 + totDmg3 + totDmg4 + totDmg5 + totDmg6 + totDmg7;



                totLos8 = totLos8 + data.agri_irrigation.Table_6[value].DlLosMajorTanksNational[0].total_los;


                totLos9 = totLos9 + data.agri_irrigation.Table_6[value].DlLosMediumTanksNational[0].total_los;


                totLos10 = totLos10 + data.agri_irrigation.Table_6[value].DlLosMinorTanksNational[0].total_los;


                totLos11 = totLos11 + data.agri_irrigation.Table_6[value].DlLosAnicutsNational[0].total_los;


                totLos12 = totLos12 + data.agri_irrigation.Table_6[value].DlLosOtherNational[0].total_los;


                totLos13 = totLos13 + data.agri_irrigation.Table_6[value].DlLosOtherNational[2].total_los;


                totLos14 = totLos14 + data.agri_irrigation.Table_6[value].DlLosOtherNational[1].total_los;

                totLos = totLos8 + totLos9 + totLos10 + totLos11 + totLos12 + totLos13 + totLos14;


                function drawPieChart() {
                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'Name');
                    data.addColumn('number', 'Data');
                    data.addRows([
                        ['Major Tanks', totDmg1],
                        ['Medium Tanks', totDmg2],
                        ['Minor Tanks', totDmg3],
                        ['Anicuts', totDmg4],
                        ['Other Structures', totDmg5],
                        ['River Embankments', totDmg6],
                        ['Buildings', totDmg7],
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
                        ['Major Tanks', totLos8],
                        ['Medium Tanks', totLos9],
                        ['Minor Tanks', totLos10],
                        ['Anicuts', totLos11],
                        ['Other Structures', totLos12],
                        ['River Embankments', totLos13],
                        ['Buildings', totLos14],
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
                        temp.push(value, totDmg, totLos, null);
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
        var isNull = $scope.dlagriIrrigationNat ? angular.equals({}, $scope.dlagriIrrigationNat.agri_irrigation.Table_6) : true;
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
