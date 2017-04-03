from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import render

from health.damage_losses.models import DlSessionKeys
from settings.models import District, Province
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts
from django.views.decorators.csrf import csrf_exempt
import yaml, json
from django.http import HttpResponse
from django.apps import apps
from health.base_line.models import PrivateClinic


@permission_required("district", 'Health')
def dl_health_damagelost_other_medical_facilities(request):
    fetch_data = fetch_districts(request.user)
    districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'health'
    }
    return render(request, 'damage_losses/health_damagelost_other_medi.html', context)


#dileepa
@permission_required("district", 'Health')
def health_damagelost_ministry_helth(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
        'module': 'health'
    }
    return render(request, 'damage_losses/health_damagelost_ministry_helth.html', context)


@permission_required("district", 'Health')
def health_damagelost_private(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
        'module': 'health'
    }
    return render(request, 'damage_losses/health_damagelost_private.html', context)


@permission_required("provincial", 'Health')
def health_summery_damageloss_province(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
        'module': 'health'
    }
    return render(request, 'damage_losses/health_summery_damageloss_province.html', context)


def dl_health_summary_sector_district(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'health'
    }
    return render(request, 'damage_losses/health_summery_damageloss_dis.html', context)


@permission_required("national", "Health")
def dl_health_summary_damage_nationwide(request):
    districts = District.objects.all()
    fetch_data = fetch_districts(request.user)
    incidents = fetch_data['incidents']
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'health'
    }
    return render(request, 'damage_losses/health_summery_damageloss_national.html', context)


@csrf_exempt
def fetch_entities(request):
    data = (yaml.safe_load(request.body))
    district_id = data['district']
    model_name = data['model']
    sector = data['sector']

    sub_app_name = sector + '.base_line'
    model_class = apps.get_model(sub_app_name, model_name)
    fetched_data = model_class.objects.filter(district_id=district_id).values('name', 'id')

    return HttpResponse(
        json.dumps(list(fetched_data)),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def dl_fetch_pvt_clinic_disagtn(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    sector = data['sector']
    com_data = data['com_data']
    incident = com_data['incident']
    district = com_data['district']
    pvt_clinics = PrivateClinic.objects.filter(district=district, incident=incident)
    models = ['DlagdDmgDistrict', 'DlagdLossesDistrict']

    dl_mtable_data = {sector: {}}
    dl_mtable_data[sector][table_name] = {}

    filter_fields = {}

    category_name = None

    for pvt_clinic in pvt_clinics:
        pvt_clinic_name = pvt_clinic.name
        print pvt_clinic_name
        dl_mtable_data[sector][table_name][pvt_clinic_name] = {}

        depmnt_filter_fields = {'incident': incident, 'district': district, 'department__ownership': ownership.id}
        departments = DlagdDmgDistrict.objects.filter(**depmnt_filter_fields).values('department__ownership', 'department', 'department__name')

        for department in departments:
            department_id = department['department']
            department_name = department['department__name']
            department_ownership = department['department__ownership']

            print department_ownership
            filter_fields = {'incident': incident, 'district': district, 'department': department_id}
            dl_mtable_data[sector][table_name][ownership_name][department_name] = {}
            for model in models:
                model_class = apps.get_model('other_govn_services.damage_losses', model)
                model_fields = settings.TABLE_PROPERTY_MAPPER[sector][table_name][model]
                dmg_data = model_class.objects.filter(**filter_fields).values(*model_fields)
                dl_mtable_data[sector][table_name][ownership_name][department_name][model] = list(dmg_data)

    return HttpResponse(
        json.dumps((dl_mtable_data), cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )
