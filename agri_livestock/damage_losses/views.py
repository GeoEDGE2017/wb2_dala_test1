from django.shortcuts import render
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts
from models import Organization


# Table 2
@permission_required("district", 'agri_livestock')
def dl_livestock_poultry(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()


    context = {
        'districts': filtered_districts,
        'incidents': incidents,

    }

    return render(request, 'damage_losses/damages_and_losses_for_livestock_and_poultry.html', context)


# Table 3
@permission_required("district", 'agri_livestock')
def dlsum_livestock_poultry_dst(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damages_losses_livestock_poultry_the_district.html', context)


def dl_livestock_pro(request):
    user = request.user
    fetch_data = fetch_districts(user)
    incidents = IncidentReport.objects.all()

    context = {
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damages_losses_livestock_poultry_the_province.html', context)


def dl_livestock_nat(request):
    user = request.user
    fetch_data = fetch_districts(user)
    incidents = IncidentReport.objects.all()

    context = {
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damages_losses_livestock_poultry_the_nationwide.html', context)





