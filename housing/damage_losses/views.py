from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import render
from settings.models import District, Province
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts


# Table 3
@permission_required("district", 'housing')
def dl_asesmnt_housing(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
        'module': 'housing'
    }
    return render(request, 'damage_losses/damage_loss_assessment_the_housing_sector_district.html', context)


# Table 3
@permission_required("district", 'housing')
def dl_summary_housing_dis(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
        'module': 'housing'
    }
    return render(request, 'damage_losses/summary_damage_losses_housing_sector_in_the_district.html', context)


# Table 4
@permission_required("provincial", 'housing')
def dl_summary_housing_pro(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
        'module': 'housing'
    }
    return render(request, 'damage_losses/summary_damage_losses_housing_sector_in_the_province.html', context)


# Table 5
@permission_required("national", 'housing')
def dl_summary_housing_nat(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
        'module': 'housing'
    }
    return render(request, 'damage_losses/summary_damage_losses_housing_sector_in_the_nationwide.html', context)










