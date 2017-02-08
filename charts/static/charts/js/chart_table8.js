
var app = angular.module('dlHsDistrictChartApp', ["nvd3"]);

app.controller("DlHsDistrictChartController", ['$scope','$http',function ($scope,$http) {

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
    data: angular.toJson({'table_name': 'Table_8',
     'chart_stacked_data':
    {'DshPubLmh': {'hfa_pub_dl':
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
    'DshPubMoh': {'hfa_pub_dl':
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
    'DshPubOmf': {'hfa_pub_dl':
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
    'DshPvtFa': {'hfa_pvt_dl':
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
    'DshTdlOwship': {'hfa_ownership_dl':
    {'key_1': ['ownership', 'damages'],
     'key_2': ['ownership', 'losses_y1'],
     'key_3': ['ownership', 'losses_y2']},
    },


    },

     'com_data': {'district': $scope.district,
          'incident': $scope.incident} }),
    }).success(function(data) {

    console.log(data.Table_8.DshPubLmh);

    $scope.dshPubLmhDl = setData('chart_1', data.Table_8.DshPubLmh.hfa_pub_dl);


     $scope.dshPubMohDl = setData('chart_2', data.Table_8.DshPubMoh.hfa_pub_dl);

     $scope.dshPubOmfDl = setData('chart_3', data.Table_8.DshPubOmf.hfa_pub_dl);

     $scope.dshPvtFa = setData('chart_4', data.Table_8.DshPvtFa.hfa_pvt_dl);

     $scope.dshTdlOwshipDl = setData('chart_5', data.Table_8.DshTdlOwship.hfa_ownership_dl);

     $scope.DshPubLmhTotAfc = setDiscreteData('chart_6', data.Table_8.DshPubLmh.hfa_total_affected);

     $scope.DshPubMohTotAfc = setDiscreteData('chart_7', data.Table_8.DshPubMoh.hfa_total_affected);
     $scope.DshPubOmfTotAfc = setDiscreteData('chart_7', data.Table_8.DshPubOmf.hfa_total_affected);

     $scope.DshPvtFaTotAfc = setDiscreteData('chart_8', data.Table_8.DshPvtFa.hfa_total_affected);

     $scope.DshPubLmhTotPaAfc = setData('chart_9', data.Table_8.DshPubLmh.hfa_total_pa_affected);
     $scope.DshPubMohTotPaAfc = setData('chart_10', data.Table_8.DshPubMoh.hfa_total_pa_affected);
     $scope.DshPubOmfTotPaAfc = setData('chart_11', data.Table_8.DshPubOmf.hfa_total_pa_affected);
     $scope.DshPvtFaTotPaAfc = setData('chart_12', data.Table_8.DshPvtFa.hfa_total_pa_affected);

    })

}
}


$scope.districts = [];
$scope.fetchDistricts = function fetchDistricts(incident_id)
{
    $http({
    method: "POST",
    url: "/damage_losses/fetch_incident_districts",
    data: angular.toJson({'incident': $scope.incident }),
    }).success(function(data) {
        $scope.districts = data;
        $scope.district = "";
        console.log(data);

    })

}

 }])


