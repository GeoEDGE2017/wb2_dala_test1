from django.shortcuts import render
from django.http import HttpResponse
from settings.models import District, Province
from incidents.models import IncidentReport
import json
import yaml
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.apps import apps
import collections
# from datetime import datetime, date
import datetime
from django.utils import timezone
from django.http import Http404
from django.core.serializers.json import DjangoJSONEncoder
from django.core import serializers
from django.http import JsonResponse
from django.conf import settings
from users.decorators import permission_required
from dala.views import fetch_districts
# from db_tools import Datediff


# test method to save data to be integrated to API
def bs_save_baseline_pub_mf():
    baseline_pub_mf = BmfPubMf()
    baseline_pub_mf.type_pub_mf = 'Teaching Hospitals'

    baseline_pub_mf.save()


@permission_required("district", 'Health')
def bs_health_status(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']
    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'module': 'health'
    }
    return render(request, 'base_line/health_baseline_rdh.html', context)


def bs_health_information_health_status(request):
    districts = District.objects.all()
    context = {
        'districts': districts,
        'module': 'health'
    }
    return render(request, 'base_line/health_baseline_rdh.html', context)


# render baseline health table
@permission_required("district", 'Health')
def bs_health_medical_facilities(request):
    fetch_data = fetch_districts(request.user)
    districts = fetch_data['districts']
    context = {
        'districts': districts,
        'module': 'health'
    }
    return render(request, 'base_line/health_baseline_district.html', context)


def bs_health_info_unit_cost_ministry_health(request):
    districts = District.objects.all()
    context = {
        'districts': districts,
        'module': 'health'
    }
    return render(request, 'base_line/health_baseline_unitcost_district.html', context)


# render baseline health unit cost table
@permission_required("district", 'Health')
def bs_health_other_medical_facilities_unit_cost(request):
    fetch_data = fetch_districts(request.user)
    districts = fetch_data['districts']
    context = {
        'districts': districts,
        'module': 'health'
    }
    return render(request, 'base_line/health_baseline_unitcost_othermedi_district.html', context)


# dileepa
def medical_facilities(request):
    return render(request, 'base_line/health_baseline_district.html')


def ministry_health_system(request):
    districts = District.objects.all()
    provinces = Province.objects.all()

    context = {
        'districts': districts,
        'provinces': provinces,
        'module': 'health'
    }
    return render(request, 'base_line/health_baseline_unitcost_district.html', context)

