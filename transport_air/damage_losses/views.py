from django.shortcuts import render
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts


# Table 2
@permission_required("district", 'transport_air')
def dl_air_trnspt(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/damages_losses_air_transportation.html', context)


# Table 3
@permission_required("district", 'transport_air')
def dl_air_trnspt_dstrct(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damages_losses_air_transportation_district.html', context)


