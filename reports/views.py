from django.shortcuts import render
from django.http import HttpResponse
from settings.models import District, Province
from incidents.models import IncidentReport
import yaml
from django.apps import apps
from django.conf import settings
import json
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from users.decorators import super_user_permission


@super_user_permission()
def index_report(request):
    context = {
        'module': 'reports'
    }
    return render(request, 'reports/index_report.html', context)


def health_summery_damageloss_dis_report(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/health_summery_damageloss_dis_report.html', context)


def report_health(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    provinces = Province.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'provinces': provinces,
        'module': 'reports'
    }
    return render(request, 'reports/report_health.html', context)


def health_summery_damageloss_province_report(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    provinces = Province.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'provinces': provinces,
        'module': 'reports'
    }
    return render(request, 'reports/health_summery_damageloss_province_report.html', context)


def education_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_education.html', context)


def mining_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_mining.html', context)


def other_govn_services_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_other_govn_services.html', context)


def water_supply_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_water_supply.html', context)


def power_supply_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_power_supply.html', context)


def industry_services_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_industry_services.html', context)


def transport_land_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_transport_land.html', context)


def transport_rail_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_transport_rail.html', context)


def transport_water_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_transport_water.html', context)


def transport_air_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_transport_air.html', context)


def agri_agrarian_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_agri_agrarian.html', context)


def agri_fisheries_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_agri_fisheries.html', context)


def agri_livestock_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_agri_livestock.html', context)


def agri_irrigation_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_agri_irrigation.html', context)


def housing_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_housing.html', context)


def telecom_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_telecom.html', context)


def tourism_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_tourism.html', context)


def report_summary(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/report_all.html', context)


def summary_of_damages_and_losses_by_sector(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/summary_of_damages_and_losses_by_sector.html', context)


def summary_of_damages_and_losses_by_province(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
        'module': 'reports'
    }
    return render(request, 'reports/summary_of_damages_and_losses_by_provinces.html', context)


@csrf_exempt
def dl_fetch_report_data(request):

    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    com_data = data['com_data']
    incident = com_data['incident']
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

    for table in tables:
        table_fields = tables[table]
        model_class = apps.get_model('damage_losses', table)
        bs_mtable_data[table_name][table] = list(model_class.objects.
                                                 filter(**filter_fields).
                                                 values(*table_fields))

    return HttpResponse(
        json.dumps(bs_mtable_data),
        content_type='application/javascript; charset=utf8'
    )
