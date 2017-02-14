from django.shortcuts import render
from settings.models import District
from dala.views import fetch_districts
from users.decorators import permission_required

# Table 4
@permission_required("district", 'transport_land')
def dl_roads_bridges(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }

    return render(request, 'damage_losses/damages_losses_roads_bridges.html', context)


# Table 5
@permission_required("district", 'transport_land')
def dl_oth_lnd_trnspt_asts(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }

    return render(request, 'damage_losses/damages_losses_other_land_transportation_assets.html', context)


# Table 6
@permission_required("district", 'transport_land')
def dl_govn_admin_aset(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }

    return render(request, 'damage_losses/damages_losses_government_administrative_assets.html', context)
