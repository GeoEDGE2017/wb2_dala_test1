from django.shortcuts import render
from django.http import HttpResponse
from settings.models import District, Province
from incidents.models import IncidentReport
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.apps import apps
from django.conf import settings
import yaml
import json

def index_chart(request):   
    return render(request, 'charts/index_chart.html')

def chart_tabel8(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents
    }
    return render(request, 'charts/chart_tabel8.html', context)


def chart_tabel9(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    provinces = Province.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'provinces': provinces
    }
    return render(request, 'charts/chart_tabel9.html', context)


def chart_tabel10(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents
    }
    return render(request, 'charts/chart_tabel10.html', context)


@csrf_exempt
def dl_fetch_chart_data(request):

    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    com_data = data['com_data']
    incident = com_data['incident']
    chart_details = data['chart_stacked_data']
    tables = settings.TABLE_PROPERTY_MAPPER[table_name]

    bs_mtable_data = {table_name: {}}

    filter_fields = {}

    if table_name == 'Table_9':
        admin_area = com_data['province']
        filter_fields = {'incident': incident, 'province': admin_area}
    elif table_name == 'Table_10':
        filter_fields = {'incident': incident}
    else:
        admin_area = com_data['district']
        filter_fields = {'incident': incident, 'district': admin_area}

    for chart_model in chart_details:
        print chart_model
        bs_mtable_data[table_name][chart_model] = {}
        for chart_type in chart_details[chart_model]:
            print chart_type
            bs_mtable_data[table_name][chart_model][chart_type] = {}
            print bs_mtable_data
            for stacked_key in chart_details[chart_model][chart_type]:
                print bs_mtable_data
                #bs_mtable_data[table_name][chart_model][chart_type][stacked_key] = {}
                print chart_details[chart_model][chart_type][stacked_key]
                table_fields = chart_details[chart_model][chart_type][stacked_key]
                model_class = apps.get_model('damage_losses', chart_model)
                chart_data = list(model_class.objects.filter(**filter_fields).values_list(*table_fields))

                #bs_mtable_data[table_name] = {chart_model: {chart_type: {stacked_key: chart_data}}}
                bs_mtable_data[table_name][chart_model][chart_type][stacked_key] = chart_data

    return HttpResponse(
        json.dumps(bs_mtable_data),
        content_type='application/javascript; charset=utf8'
    )
