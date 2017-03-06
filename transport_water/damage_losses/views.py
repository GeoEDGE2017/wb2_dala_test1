from django.shortcuts import render
from incidents.models import IncidentReport, District,Province
from users.decorators import permission_required


@permission_required("district", 'transport_land')
def dl_water_transport(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents
    }
    return render(request, 'damage_losses/damage_losses_ water_transportation.html', context)
    
  
@permission_required("district", 'transport_land')
def dl_summary_trans_water_dis(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents
    }
    return render(request, 'damage_losses/summary _damages_losses_water_transportation_district.html', context)    


@permission_required("provincial", 'transport_water')
def dl_summary_trans_water_pro(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    province = Province.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'province':province
    }
    return render(request, 'damage_losses/summary_damage_losses_ water_transportation_sub-sector_province.html', context)


@permission_required("national", 'transport_water')
def dl_summary_trans_water_nat(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    province = Province.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'province': province
    }
    return render(request, 'damage_losses/summary_damage_losses_ water_transportation_sub-sector_nationwide.html', context)

