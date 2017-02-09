from django.shortcuts import render
from incidents.models import IncidentReport, District
from dala.views import fetch_districts


def dl_water_transportation(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents
    }
    return render(request, 'damage_losses/damage_losses_ water_transportation.html', context)

