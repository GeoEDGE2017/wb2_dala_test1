from django.shortcuts import render
from dala.views import fetch_districts
from users.decorators import permission_required


# Table 1
@permission_required("district", "power_supply")
def bs_pow_gen_firms_dis(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
        'module': 'power_supply'
    }
    return render(request, 'base_line/base_line_power_generation_firms_district.html', context)

