from django.shortcuts import render
from dala.views import fetch_districts
from users.decorators import permission_required


# Table 1
@permission_required("district", "agri_irrigation")
def bs_irg_facilities(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }
    return render(request, 'base_line/baseline_irrigation_facilities.html', context)


# Table 2
@permission_required("district", "agri_irrigation")
def bs_rparpl_cos_assts(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }
    return render(request, 'base_line/baseline_repair_replacement_costs_of_irrigation_assets.html', context)
