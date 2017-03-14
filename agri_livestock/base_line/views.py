from django.shortcuts import render
from dala.views import fetch_districts
from users.decorators import permission_required


# Table 1
@permission_required("district", "agri_livestock")
def bs_livestock_poultry_dst(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
        'module': 'agri_livestock'
    }
    return render(request, 'base_line/baseline_information_number_people_engaged_livestock_and_poultry_district.html', context)


# Table 2
@permission_required("district", "agri_livestock")
def bs_livestock_poultry(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
        'module': 'agri_livestock'
    }
    return render(request, 'base_line/baseline_information_on_livestock_and_poultry.html', context)



