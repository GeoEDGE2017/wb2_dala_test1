from django.shortcuts import render
from dala.views import fetch_districts
from users.decorators import permission_required


# Table 1
@permission_required("district", 'tourism')
def bs_tursm_fclts_dis(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
        'module': 'tourism'
    }

    return render(request, 'base_line/baseline_information_tourism_facilities_district.html', context)


