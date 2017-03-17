from django.shortcuts import render
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts
from models import FishingTypes
from django.views.decorators.csrf import csrf_exempt
from settings.models import District, Province
from django.http import HttpResponse
import json
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder


@csrf_exempt
def fetch_fishing_types(user):

    fishing_types = list(FishingTypes.objects.values('name','id'))

    print fishing_types

    return HttpResponse(
        json.dumps(fishing_types, cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )


# Table 3
@permission_required("district", 'agri_fisheries')
def dl_fisheries_dst(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()
    fishing_types = FishingTypes.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'fishing_types': fishing_types,
        'module': 'agri_fisheries',
    }

    return render(request, 'damage_losses/damages_and_losses_fisheries_district.html', context)


# Table 4
@permission_required("district", 'agri_fisheries')
def dl_sum_fisheries_dst(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'agri_fisheries',
    }

    return render(request, 'damage_losses/summary_damages_losses_fisheries_in_the_district.html', context)


# Table 5
@permission_required("provincial", 'agri_fisheries')
def dl_sum_fisheries_pro(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'agri_fisheries',
    }

    return render(request, 'damage_losses/summary_damages_losses_fisheries_in_the_province.html', context)


