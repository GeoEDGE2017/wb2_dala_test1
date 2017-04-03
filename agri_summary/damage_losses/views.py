from django.shortcuts import render
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts


# Table 1
@permission_required("district", 'agri_summary')
def dl_sum_agriculture_dis(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'agri_summary'
    }

    return render(request, 'damage_losses/summary_damages_losses_agriculture_sector_district.html', context)


# Table 2
@permission_required("provincial", 'agri_summary')
def dl_sum_agriculture_pro(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'agri_summary'
    }

    return render(request, 'damage_losses/summary_damages_losses_agriculture_sector_province.html', context)


# Table 3
@permission_required("national", 'agri_summary')
def dl_sum_agriculture_nat(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'agri_summary'
    }

    return render(request, 'damage_losses/summary_damages_losses_agriculture_sector_nationwide.html', context)


