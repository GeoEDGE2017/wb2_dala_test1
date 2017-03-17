from django.shortcuts import render
from incidents.models import IncidentReport, District,Province
from users.decorators import permission_required


# Table 3
@permission_required("district", 'water_supply')
def dl_rul_wtr_sply(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'water_supply',
    }
    return render(request, 'damage_losses/damages_losses_NWSDB_commercial_water_supply_system.html', context)


# Table 4
@permission_required("district", 'water_supply')
def dl_com_wtr_sply(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'water_supply',
    }
    return render(request, 'damage_losses/damages_ losses_rural_water_supply_sector.html', context)


# Table 5
@permission_required("district", 'water_supply')
def dlsum_wter_sply_dst(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'water_supply',
    }
    return render(request, 'damage_losses/summary_damages_losses_district.html', context)


# Table 6
@permission_required("district", 'water_supply')
def dlsum_wter_sply_pro(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'water_supply',
    }
    return render(request, 'damage_losses/summary_damages_losses_province.html', context)


# Table 7
@permission_required("district", 'water_supply')
def dlsum_wter_sply_nat(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'water_supply',
    }
    return render(request, 'damage_losses/summary_damages_losses_national.html', context)



