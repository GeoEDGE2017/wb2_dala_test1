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


# Table 7
@permission_required("district", 'transport_land')
def dl_sum_trnsland_distc(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damages_losse_land_transportation_district.html', context)


# Table 8
@permission_required("provincial", 'transport_land')
def dl_sum_trnsland_povnc(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damage_losses_land_transportation_sub_sector_province.html', context)


# Table 9
@permission_required("national", 'transport_land')
def dl_sum_trnsland_natnal(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damage_losses_land_transportation_sub_sector_nationwide.html', context)
