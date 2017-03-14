from django.shortcuts import render
from settings.models import District
from incidents.models import IncidentReport
import yaml, json
from django.http import HttpResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.apps import apps
from users.decorators import permission_required
from dala.views import fetch_districts

# Create your views here.


@permission_required("district", "Mining")
def damages_losses_of_mining_firms(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'module': 'mining'
    }

    return render(request, 'damage_losses/damages_losses_of_mining_firms.html', context)


@permission_required("district", "Mining")
def damages_losses_artisanal_mining(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'module': 'mining'
    }

    return render(request, 'damage_losses/damages_losses_artisanal_mining.html', context)


@permission_required("district", "Mining")
def summary_damage_losses_district(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'module': 'mining'
    }

    return render(request, 'damage_losses/summary_damages_losses_district.html', context)


@permission_required("national", "Mining")
def summary_damage_losses_nationwide(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_incidents = fetch_data['incidents']

    context = {
        'incidents': filtered_incidents,
        'module': 'mining'
    }

    return render(request, 'damage_losses/summary_damages_losses_nationwide.html', context)

