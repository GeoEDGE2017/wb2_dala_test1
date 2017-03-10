from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import render

from health.damage_losses.models import DlSessionKeys
from settings.models import District, Province
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts


@permission_required("district", 'Health')
def dl_health_damagelost_other_medical_facilities(request):
    fetch_data = fetch_districts(request.user)
    districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents
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
        'incidents': incidents
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
    }
    return render(request, 'damage_losses/health_summery_damageloss_province.html', context)


def dl_health_summary_sector_district(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
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
    }
    return render(request, 'damage_losses/health_summery_damageloss_national.html', context)


