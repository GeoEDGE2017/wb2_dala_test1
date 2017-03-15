from django.shortcuts import render
from settings.models import District
from dala.views import fetch_districts
from users.decorators import permission_required
from incidents.models import IncidentReport
import yaml, json
from django.http import HttpResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.apps import apps
from users.decorators import permission_required
from dala.views import fetch_districts
from transport_rail.base_line.models import Company


@permission_required("district", 'Transport Rail')
def dl_rail_trnspt_cmpny(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']
    company = Company.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'company': company,
        'module': 'transport_rail'
    }
    return render(request, 'damage_losses/damages_losses_rail_transportation_company.html', context)


@permission_required("provincial", 'transport_land')
def dl_rail_trnspt_dis_summary(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']
    company = Company.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'company': company,
        'module': 'transport_rail'
    }
    return render(request, 'damage_losses/summary_damages_losses_rail_transportation.html', context)


@permission_required("national", 'transport_land')
def dl_rail_type_loss_summary(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']
    company = Company.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'company': company,
        'module': 'transport_rail'
    }
    return render(request, 'damage_losses/summary_damages_losses_the_rail_transportation_nationwide_types_of_losses.html', context)


@permission_required("national", 'transort_land')
def dl_rail_trans_nat_type_summary(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']
    company = Company.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'company': company,
        'module': 'transport_rail'
    }
    return render(request, 'damage_losses/summary_damages_losses_the_rail_transportation_nationwide_types_of_losses.html', context)
