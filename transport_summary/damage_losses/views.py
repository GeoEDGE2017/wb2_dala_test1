from django.shortcuts import render
from users.decorators import permission_required
from dala.views import fetch_districts
from transport_rail.base_line.models import Company


@permission_required("district", 'transport_summary')
def dl_trns_sumr_distr(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']
    company = Company.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'company': company,
    }
    return render(request, 'damage_losses/summary_damage_losses_transportation_sector_district.html', context)


@permission_required("provincial", 'transport_summary')
def dl_trns_sumr_provn(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']
    company = Company.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'company': company,
    }
    return render(request, 'damage_losses/summary_damage_losses_transportation_sector_province.html', context)


@permission_required("national", 'transport_summary')
def dl_trns_sumr_natal(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']
    company = Company.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'company': company,
    }
    return render(request, 'damage_losses/summary_damage_losses_transportation_sector_nationwide.html', context)
