
var app = angular.module('dlHsNationalChartApp', ["nvd3"]);

app.controller("DlHsNationalChartController", ['$scope','$http',function ($scope,$http) {

 $scope.district;
 $scope.incident;

 $scope.options = {
            chart: {
                type: 'multiBarChart',
                height: 450,
                x: function(d){return d[0];},
                y: function(d){return d[1];},
                stacked: true,
                barColor: function(d, i){
                  var colors = d3.scale.category20().range();
                  var rnd = Math.floor(Math.random() * colors.length)
                  return colors[rnd];
                }
            }
        };

$scope.optionsDiscrete = {
    chart: {
        type: "discreteBarChart",
        height: 250,
        x: function(d){return (d[0]);},
        y: function(d){return parseInt(d[1]);},
        showValues: true,
        transitionDuration: 200,
        xAxis: {
            axisLabel: "Date",
            rotateLabels: -20
        },
        yAxis: {
            axisLabel: "No. of Incidents",
            axisLabelDistance: 30
        }
    }
}


function setChartData()
{

//$scope.api.updateWithData($scope.data);
//$scope.api.refresh();

}

function setDiscreteData(chartName, data)
{
chartData = data.key_1;
 chartData = [
            {
                key: "Cumulative Return",
                values: data.key_1

            }
        ];
return chartData;
}

function setData(chartName, data)
{
var chartData;

chartData = [
                {
                    "key": "Total Damages",
                    "values": data.key_1
                }
                , {
                    "key": "Total Losses",
                    "values": data.key_2
                }
            ];


 return chartData;
}

$scope.generateCharts = function generateChart(form)
{
$scope.submitted = true;
if(form.$valid){
    $http({
    method: "POST",
    url: "/charts/dl_fetch_chart_data",
    data: angular.toJson({'table_name': 'Table_10',
     'chart_stacked_data':
    {'DsnPubPnLmh': {'hfa_dsn_pub_dl':
    {'key_1': ['facilities_assets', 'total_damages'],
     'key_2': ['facilities_assets', 'total_losses']},
       'hfa_total_affected':
     {'key_1': ['facilities_assets', 'total_num_affected'],
     },
     'hfa_total_pa_affected':
     {'key_1': ['facilities_assets', 'male'],
     'key_2': ['facilities_assets', 'female'],
     },
    },
    'DsnPubPnMoh': {'hfa_dsn_pub_dl':
    {'key_1': ['facilities_assets', 'total_damages'],
     'key_2': ['facilities_assets', 'total_losses']},
     'hfa_total_affected':
     {'key_1': ['facilities_assets', 'total_num_affected'],
     },
     'hfa_total_pa_affected':
     {'key_1': ['facilities_assets', 'male'],
     'key_2': ['facilities_assets', 'female'],
     },
    },
    'DsnPubPnOmc': {'hfa_dsn_pub_dl':
    {'key_1': ['facilities_assets', 'total_damages'],
     'key_2': ['facilities_assets', 'total_losses']},
     'hfa_total_affected':
     {'key_1': ['facilities_assets', 'total_num_affected'],
     },
     'hfa_total_pa_affected':
     {'key_1': ['facilities_assets', 'male'],
     'key_2': ['facilities_assets', 'female'],
     },
    },
    'DsnPvtPn': {'hfa_dsn_pvt_dl':
    {'key_1': ['facilities_assets', 'total_damages'],
     'key_2': ['facilities_assets', 'total_losses']},
     'hfa_total_affected':
     {'key_1': ['facilities_assets', 'total_num_affected'],
     },
     'hfa_total_pa_affected':
     {'key_1': ['facilities_assets', 'male'],
     'key_2': ['facilities_assets', 'female'],
     },
    },
    'DsnTdlOwship': {'hfa_dsn_ownership_dl':
    {'key_1': ['ownership', 'damages'],
     'key_2': ['ownership', 'losses_y1'],
     'key_3': ['ownership', 'losses_y2']},
    },
    },

     'com_data': {'incident': $scope.incident}
      }),
    }).success(function(data) {


    $scope.dsnPubPnLmhDl = setData('chart_1', data.Table_10.DsnPubPnLmh.hfa_dsn_pub_dl);


     $scope.dsnPubPnMohDl = setData('chart_2', data.Table_10.DsnPubPnMoh.hfa_dsn_pub_dl);

     $scope.dsnPubPnOmcDl = setData('chart_3', data.Table_10.DsnPubPnOmc.hfa_dsn_pub_dl);

     $scope.dsnPvtPnDn = setData('chart_4', data.Table_10.DsnPvtPn.hfa_dsn_pvt_dl);

     $scope.dsnTdlOwship = setData('chart_5', data.Table_10.DsnTdlOwship.hfa_dsn_ownership_dl);

     $scope.dsnPubPnLmhTotAfc = setDiscreteData('chart_6', data.Table_10.DsnPubPnLmh.hfa_total_affected);

     $scope.dsnPubPnMohTotAfc = setDiscreteData('chart_7', data.Table_10.DsnPubPnMoh.hfa_total_affected);
     $scope.dsnPubPnOmcTotAfc = setDiscreteData('chart_7', data.Table_10.DsnPubPnOmc.hfa_total_affected);

     $scope.dsnPvtPnTotAfc = setDiscreteData('chart_8', data.Table_10.DsnPvtPn.hfa_total_affected);

     $scope.dsnPubPnLmhTotPaAfc = setData('chart_9', data.Table_10.DsnPubPnLmh.hfa_total_pa_affected);
     $scope.dsnPubPnMohTotPaAfc = setData('chart_10', data.Table_10.DsnPubPnMoh.hfa_total_pa_affected);
     $scope.dsnPubPnOmcTotPaAfc = setData('chart_11', data.Table_10.DsnPubPnOmc.hfa_total_pa_affected);
     $scope.dsnPvtPnTotPaAfc = setData('chart_12', data.Table_10.DsnPvtPn.hfa_total_pa_affected);


    })

}
}


 }])


