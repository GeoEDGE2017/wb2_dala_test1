from django.shortcuts import render
from dala.views import fetch_districts
from users.decorators import permission_required


# Table 1
@permission_required("district", "telecommunication")
def bs_telcom_cmpnys(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
        'module': 'telecommunication'
    }
    return render(request, 'base_line/baseline_information_telecommunication_companies.html', context)

