from django.shortcuts import render
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts
from settings.models import District, Province


# Table 4
@permission_required("district", 'agri_agrarian')
def dl_frst_prduct_asets(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/dl_crops_permanent_crops_forest_products_related_assets.html', context)


# Table 5
@permission_required("district", 'agri_agrarian')
def dl_struts_oth_asets(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/dl_structures_other_related_assets.html', context)


# Table 6
@permission_required("district", 'agri_agrarian')
def dl_invsmnt_los(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/dl_investment_losses.html', context)


# Table 7
@permission_required("district", 'agri_agrarian')
def dl_prdctn_los(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/dl_production_losses.html', context)


# Table 8
@permission_required("district", 'agri_agrarian')
def dl_sum_agrarian_dstr(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damages_losses_agrarian_sub-sector_district.html', context)


def dl_sum_agrarian_prov(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damages_losses_agrarian_sub-sector_province.html', context)


def dl_sum_agrarian_nat(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents
    }

    return render(request, 'damage_losses/summary_damages_losses_agrarian_sub-sector_nationwide.html', context)


