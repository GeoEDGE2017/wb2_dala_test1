from django.shortcuts import render
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts
from settings.models import District, Province


# Table 2
@permission_required("district", 'telecommunication')
def dl_telcom_firms(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'telecommunication'
    }

    return render(request, 'damage_losses/damages_losses_telecommunication_firms.html', context)


# Table 3
@permission_required("district", 'telecommunication')
def dl_sum_telecom_dis(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'telecommunication'
    }

    return render(request, 'damage_losses/summary_damages_and_losses_tele_district.html', context)


# Table 4
@permission_required("provincial", 'telecommunication')
def dl_sum_telecom_pro(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'telecommunication'
    }

    return render(request, 'damage_losses/summary_damages_and_losses_tele_province.html', context)


# Table 5
@permission_required("national", 'telecommunication')
def dl_sum_telecom_nat(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'telecommunication'
    }

    return render(request, 'damage_losses/summary_damages_and_losses_tele_nationwide.html', context)


