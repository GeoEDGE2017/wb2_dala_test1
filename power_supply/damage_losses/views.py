from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import render
from settings.models import District, Province
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts


# Table 2
@permission_required("district", 'power_supply')
def dl_ceb(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
        'module': 'power_supply'
    }
    return render(request, 'damage_losses/damages_and_losses_CEB.html', context)


# Table 3
@permission_required("district", 'power_supply')
def dl_pvt_pow_prod(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
        'module': 'power_supply'
    }
    return render(request, 'damage_losses/damages_losses_private_power_producers.html', context)


# Table 5
@permission_required("province", 'power_supply')
def dl_sum_irg_province(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
        'module': 'power_supply'
    }
    return render(request, 'damage_losses/summary_pow_damages_and_losses_province.html', context)

