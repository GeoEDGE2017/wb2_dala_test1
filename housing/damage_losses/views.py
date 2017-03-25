from django.core.serializers.json import DjangoJSONEncoder
from django.shortcuts import render
from settings.models import District, Province
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts


@permission_required("district", 'housing')
def dl_asesmnt_housing(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
        'module': 'housing'
    }
    return render(request, 'damage_losses/damage_loss_assessment_the_housing_sector_district.html', context)










