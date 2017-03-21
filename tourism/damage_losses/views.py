from django.shortcuts import render
from django.shortcuts import render
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts


# Table 2
@permission_required("district", 'tourism')
def dl_tourism_business(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'tourism'
    }

    return render(request, 'damage_losses/damages_Losses_tourism_business.html', context)


# Table 3
@permission_required("district", 'tourism')
def dl_tourism_infrstrct(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'tourism'
    }

    return render(request, 'damage_losses/damages_losses_tourism_infrastructure_(cultural sites and natural formations).html', context)


# Table 4
@permission_required("district", 'tourism')
def dl_sum_tourism_dis(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'tourism'
    }

    return render(request, 'damage_losses/summary_of_damages_losses_tourism_businesses_facilities_district.html', context)


# Table 5
@permission_required("provincial", 'tourism')
def dl_sum_tourism_pov(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'tourism'
    }

    return render(request, 'damage_losses/summary_of_damages_losses_province.html', context)


# Table 6
@permission_required("district", 'national')
def dl_sum_tourism_nat(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'tourism'
    }

    return render(request, 'damage_losses/summary_of_damages_losses_nationwide.html', context)

