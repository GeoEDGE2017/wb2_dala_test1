from django.shortcuts import render
from settings.models import District
from users.decorators import permission_required


@permission_required("district", 'water_supply')
def bs_asts_nwsdb_dis(request):
    districts = District.objects.all()

    context = {
        'districts': districts,
        'module': 'water_supply',
    }
    return render(request, 'base_line/baseline_information_assets_NWSDB_district.html', context)


@permission_required("district", 'water_supply')
def bs_rwater_sply_dis(request):
    districts = District.objects.all()

    context = {
        'districts': districts,
        'module': 'water_supply',
    }
    return render(request, 'base_line/baseline_information_rural_water_supply_district.html', context)

