from django.shortcuts import render
from dala.views import fetch_districts
from users.decorators import permission_required


# Table 1
@permission_required("district", "agri_agrarian")
def bs_nopopl_agrb_actv(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }
    return render(request, 'base_line/baseline_information_areas_cultivated_number_of_people_agrarian_activities.html', context)


# Table 2
@permission_required("district", "agri_agrarian")
def bs_info_acfo_assets(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }
    return render(request, 'base_line/baseline_information_agricultural_crops_forest_products_related_other_assets.html', context)


# Table 3
@permission_required("district", "agri_agrarian")
def bs_info_sero_assets(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }
    return render(request, 'base_line/baseline_information_structures_office_equipment_related_other_assets.html', context)



