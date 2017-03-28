from django.shortcuts import render
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts


# Table 1
@permission_required("district", 'industry_services')
def dl_formal_sector(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'industry_services'
    }
    # /home/chamupathi/DALA/wb1_dala/industry_services/templates/damage_losses/damages_losses_firm_in_the_formal_sector.html
    return render(request, 'damage_losses/damages_losses_firm_in_the_formal_sector.html', context)


# Table 2
@permission_required("district", 'industry_services')
def dl_informal_sector(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'industry_services'
    }

    return render(request, 'damage_losses/damages_and_losses_of_the_informal_sector.html', context)


# Table 3 dl
@permission_required("district", 'industry_services')
def dl_forml_informl_dis(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'industry_services'
    }

    return render(request, 'damage_losses/damages_losses_formal_and_informal_sectors_district.html', context)


# Table 3 summary
@permission_required("district", 'industry_services')
def dl_summ_forml_informl_dis(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'industry_services'
    }

    return render(request, 'damage_losses/summary_damages_losses_formal_and_informal_sectors_district.html', context)


# Table N summary
@permission_required("district", 'industry_services')
def dl_sum_forml_informl_dis_inputs(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'industry_services'
    }

    return render(request, 'damage_losses/summary_damages_losses_formal_informal_sectors_district_inputs.html', context)


# Table province summary
@permission_required("district", 'industry_services')
def dl_sum_pro(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'industry_services'
    }

    return render(request, 'damage_losses/summary_industry_service_of_damages_losses_province.html', context)


# Table national summary
@permission_required("district", 'industry_services')
def dl_sum_nat(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': incidents,
        'module': 'industry_services'
    }

    return render(request, 'damage_losses/summary_industry_services_of_damages_losses_nationwide.html', context)

# summary_of_damages_losses_province

#
