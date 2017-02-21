from django.shortcuts import render
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts

# Table 4


@permission_required("district", 'transport_land')
def dl_roads_bridges(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/damages_losses_roads_bridges.html', context)


# Table 5
@permission_required("district", 'transport_land')
def dl_oth_lnd_trnspt_asts(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/damages_losses_other_land_transportation_assets.html', context)


# Table 6
@permission_required("district", 'transport_land')
def dl_govn_admin_aset(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/damages_losses_government_administrative_assets.html', context)


def dl_tr_land_province(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damage_losses_land_transportation_sub_sector_province.html', context)


def dl_tr_land_national(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damage_losses_land_transportation_sub_sector_nationwide.html', context)
