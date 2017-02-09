
var app = angular.module('dlHsProvinceChartApp', ["nvd3"]);

app.controller("DlHsProvinceChartController", ['$scope','$http',function ($scope,$http) {

 $scope.province;
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
    data: angular.toJson({'table_name': 'Table_9',
     'chart_stacked_data':
    {'DspPubDnLmh': {'hfa_dsp_pub_dl':
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
    'DspPubDnMoh': {'hfa_dsp_pub_dl':
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
    'DspPubDnOmc': {'hfa_dsp_pub_dl':
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
    'DspPvtDn': {'hfa_dsp_pvt_dl':
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
    'DspTdlOwship': {'hfa_dsp_ownership_dl':
    {'key_1': ['ownership', 'damages'],
     'key_2': ['ownership', 'losses_y1'],
     'key_3': ['ownership', 'losses_y2']},
    },
    },

     'com_data': {'province': $scope.province,
          'incident': $scope.incident} }),
    }).success(function(data) {


    $scope.dspPubDnLmhDl = setData('chart_1', data.Table_9.DspPubDnLmh.hfa_dsp_pub_dl);


     $scope.dspPubDnMohDl = setData('chart_2', data.Table_9.DspPubDnMoh.hfa_dsp_pub_dl);

     $scope.dspPubDnOmcDl = setData('chart_3', data.Table_9.DspPubDnOmc.hfa_dsp_pub_dl);

     $scope.dspPvtDn = setData('chart_4', data.Table_9.DspPvtDn.hfa_dsp_pvt_dl);

     $scope.dspTdlOwship = setData('chart_5', data.Table_9.DspTdlOwship.hfa_dsp_ownership_dl);

     $scope.dspPubDnLmhTotAfc = setDiscreteData('chart_6', data.Table_9.DspPubDnLmh.hfa_total_affected);

     $scope.dspPubDnMohTotAfc = setDiscreteData('chart_7', data.Table_9.DspPubDnMoh.hfa_total_affected);
     $scope.dspPubDnOmcTotAfc = setDiscreteData('chart_7', data.Table_9.DspPubDnOmc.hfa_total_affected);

     $scope.dspPvtDnTotAfc = setDiscreteData('chart_8', data.Table_9.DspPvtDn.hfa_total_affected);

     $scope.dspPubDnLmhTotPaAfc = setData('chart_9', data.Table_9.DspPubDnLmh.hfa_total_pa_affected);
     $scope.dspPubDnMohTotPaAfc = setData('chart_10', data.Table_9.DspPubDnMoh.hfa_total_pa_affected);
     $scope.dspPubDnOmcTotPaAfc = setData('chart_11', data.Table_9.DspPubDnOmc.hfa_total_pa_affected);
     $scope.dspPvtDnTotPaAfc = setData('chart_12', data.Table_9.DspPvtDn.hfa_total_pa_affected);


    })
}
}

$scope.provinces = [];
$scope.fetchProvinces = function fetchProvinces(incident_id)
{
    $http({
    method: "POST",
    url: "/damage_losses/fetch_incident_provinces",
    data: angular.toJson({'incident': $scope.incident }),
    }).success(function(data) {
        $scope.provinces = data;
        $scope.province = "";
        console.log(data);

    })

}


 }])


