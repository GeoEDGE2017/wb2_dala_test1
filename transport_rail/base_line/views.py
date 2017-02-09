from django.shortcuts import render
from settings.models import District
from dala.views import fetch_districts
from users.decorators import permission_required
from health.base_line.models import Company
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import json
import yaml, json
from django.apps import apps


# Table 1
@permission_required("district", 'Transport Rail')
def bs_inc_ast_rail_cmpy(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']

    context = {
        'districts': filtered_districts,
    }

    return render(request, 'base_line/income_assets_rail_transportation_company.html', context)


@csrf_exempt
def fetch_company_entities(request):
    fetched_data = Company.objects.values('name', 'id')

    return HttpResponse(
        json.dumps(list(fetched_data)),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def add_company_entity(request):
    data = (yaml.safe_load(request.body))
    model_fields = data['model_fields']
    model_name = data['model']

    model_class = apps.get_model('base_line', model_name)
    model_object = model_class(**model_fields)
    model_object.save()

    if model_object.id is not None:
        return HttpResponse(model_object.id)
    else:
        return HttpResponse(False)
