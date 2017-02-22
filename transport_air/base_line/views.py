from django.shortcuts import render
from settings.models import District
from dala.views import fetch_districts
from users.decorators import permission_required
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import json


# Table 1
@permission_required("district", 'transport_air')
def bs_info_aset_trns(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }

    return render(request, 'base_line/baseline_information_assets_air_transportation.html', context)
