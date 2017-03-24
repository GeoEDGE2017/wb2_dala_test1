from django.shortcuts import render
from dala.views import fetch_districts
from users.decorators import permission_required


# Table 1
@permission_required("district", 'industry_services')
def bs_info_forml_dis(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
        'module': 'industry_services'
    }

    return render(request, 'base_line/baseline_information_the_formal_IS_sector_in_district.html', context)


# Table 2
@permission_required("district", 'industry_services')
def bs_info_informl_dis(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
        'module': 'industry_services'
    }

    return render(request, 'base_line/baseline_information_informal_IS_sector_district.html', context)
