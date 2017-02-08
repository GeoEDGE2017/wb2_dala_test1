from django.shortcuts import render
from settings.models import District
from dala.views import fetch_districts
from users.decorators import permission_required


@permission_required("district", "Other Government Services")
def bs_other_gov_info_costs_structures_other_assets_district(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }

    return render(request, 'base_line/bs_info_for_the_costs_of_structures_and_other_assets_in_the_district.html', context)

