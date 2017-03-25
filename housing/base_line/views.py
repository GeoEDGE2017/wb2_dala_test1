from django.shortcuts import render
from settings.models import District, Province
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts


# Table 1
@permission_required("district", 'housing')
def bs_info_housing_dis(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']
    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'module': 'housing'
    }
    return render(request, 'base_line/baseline_information_housing_district.html', context)


# Table 2
@permission_required("district", 'housing')
def bs_costs_vtypes_hunits(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']
    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'module': 'housing'
    }
    return render(request, 'base_line/baseline_information_for_related_costs_ various_types_housing_units.html', context)

