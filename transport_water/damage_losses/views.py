from django.shortcuts import render
from incidents.models import IncidentReport, District,Province
from dala.views import fetch_districts


def dl_water_transport(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents
    }
    return render(request, 'damage_losses/damage_losses_ water_transportation.html', context)


def dl_summary_trans_water_pro(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    province = Province.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'province':province
    }
    return render(request, 'damage_losses/summary_damage_losses_ water_transportation_sub-sector_province.html', context)


def dl_summary_trans_water_nat(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    province = Province.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'province': province
    }
    return render(request, 'damage_losses/summary_damage_losses_ water_transportation_sub-sector_nationwide.html', context)

