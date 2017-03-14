from django.shortcuts import render
from settings.models import District
from django.views.decorators.csrf import csrf_protect, csrf_exempt
import yaml, json
from django.http import HttpResponse
from django.core import serializers
from users.decorators import permission_required


@permission_required("district", 'transport_land')
def bs_ast_transport_water(request):
    districts = District.objects.all()

    context = {
        'districts': districts,
        'module': 'transport_water'

    }
    return render(request, 'base_line/assets_water_transportation_sub-sector.html', context)

