from django.shortcuts import render
from settings.models import District
from dala.views import fetch_districts
from users.decorators import permission_required
from health.base_line.models import Company
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import json


# Table 1
@permission_required("district", 'transport_land')
def bs_pub_rod_brid_user(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }

    return render(request, 'base_line/baseline_public_roads_bridges_users.html', context)


# Table 2
@permission_required("district", 'transport_land')
def bs_trans_assets(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }

    return render(request, 'base_line/baseline_land_transportation_assets.html', context)


# Table 3
@permission_required("district", 'transport_land')
def bs_gov_admn_aset(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }

    return render(request, 'base_line/baseline_government_administrative_assets.html', context)
