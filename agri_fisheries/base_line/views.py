from django.shortcuts import render
from dala.views import fetch_districts
from users.decorators import permission_required


# Table 1
@permission_required("district", "agri_fisheries")
def bs_info_fshrs(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_user = fetch_data['user']

    context = {
        'user': filtered_user,
        'districts': filtered_districts,
        'module': 'agri_fisheries'
    }
    return render(request, 'base_line/baseline_information_fisheries.html', context)


# Table 2
@permission_required("district", "agri_fisheries")
def bs_no_npopl_fshrs(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_user = fetch_data['user']

    context = {
        'user': filtered_user,
        'districts': filtered_districts,
        'module': 'agri_fisheries'
    }
    return render(request, 'base_line/baseline_information_the_number_of_people_engaged_fisheries.html', context)

