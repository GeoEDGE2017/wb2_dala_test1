from django.shortcuts import render
from dala.views import fetch_districts
from users.decorators import permission_required


@permission_required("district", "Education")
def bs_edu_facilities(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_user = fetch_data['user']

    context = {
        'user': filtered_user,
        'districts': filtered_districts,
        'module': 'education'
    }
    return render(request, 'base_line/baseline_information_educational_facilities_district.html', context)


@permission_required("district", "Education")
def bs_ucost_gedu_facilities(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_user = fetch_data['user']

    context = {
        'user': filtered_user,
        'districts': filtered_districts,
        'module': 'education'
    }
    return render(request, 'base_line/baseline_information_unitcost_government_educational_facilities_district.html', context)


