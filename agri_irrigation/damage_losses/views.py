from django.shortcuts import render
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts


# Table 2
@permission_required("district", 'agri_irrigation')
def dl_irrigation(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()
    filtered_user = fetch_data['user']

    context = {
        'user': filtered_user,
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'agri_irrigation'
    }

    return render(request, 'damage_losses/damages_losses.html', context)


# Table 3
@permission_required("district", 'agri_irrigation')
def dl_sum_irg_district(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()
    filtered_user = fetch_data['user']

    context = {
        'user': filtered_user,
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'agri_irrigation'
    }

    return render(request, 'damage_losses/summary_damages_losses_irrigation_district.html', context)


@permission_required("provincial", 'agri_irrigation')
def dl_sum_irg_province(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()
    filtered_user = fetch_data['user']

    context = {
        'user': filtered_user,
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'agri_irrigation'
    }

    return render(request, 'damage_losses/summary_damages_losses_irrigation_sub_sectorp_province.html', context)


@permission_required("national", 'agri_irrigation')
def dl_sum_irg_national(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()
    filtered_user = fetch_data['user']

    context = {
        'user': filtered_user,
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'agri_irrigation'
    }

    return render(request, 'damage_losses/summary_damages_losses_irrigation_sub_sectorp_nationwide.html', context)
