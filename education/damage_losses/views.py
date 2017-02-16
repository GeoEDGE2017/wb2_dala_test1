from django.shortcuts import render
from settings.models import District, Province
from users.decorators import permission_required
from dala.views import fetch_districts
from settings.models import District, Province
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import yaml, json
from django.apps import apps
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder
from django.conf import settings
from django.db.models import Count


@permission_required("district", "Education")
def dl_govn_edu_facilities(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents

    }
    return render(request, 'damage_losses/damage_loss_assessment_government_education_facilities_district.html', context)


@permission_required("district", "Education")
def dl_pvt_edu_facilities(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents

    }
    return render(request, 'damage_losses/damage_loss_assessment_private_education_facility.html', context)


@permission_required("district", "Education")
def dl_edu_district(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents

    }
    return render(request, 'damage_losses/summary_damages_losses_education_district.html', context)


@permission_required("provincial", "Education")
def dl_edu_province(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
    }
    return render(request, 'damage_losses/summary_damage_losses_education_sector_province.html', context)


@permission_required("national", "Education")
def dl_edu_nationwide(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
    }
    return render(request, 'damage_losses/summary_damage_losses_education_sector_nationwide.html', context)


@csrf_exempt
def fetch_schools(request):
    data = (yaml.safe_load(request.body))
    district_id = data['district']
    schools = data['schools']

    bs_schools = {}

    for school in schools:
        model_class = apps.get_model('education.base_line', school)
        model_array = model_class.objects.filter(district=district_id).values('name', 'id').order_by('id')

        bs_schools[school] = list(model_array)

    print bs_schools

    return HttpResponse(
        json.dumps((bs_schools), cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def dl_fetch_school_disagtn(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    sector = data['sector']
    com_data = data['com_data']
    incident = com_data['incident']
    schools_types = {'PreSchools': 'DpefBefPreSchool', 'PrimarySchools': 'DpefBefPrmSchool',
              'SecondarySchools': 'DpefBefSecSchool', 'TechInstitutes': 'DpefBefTechInst', 'Universities': 'DpefBefUnv'}

    school_properties = {'PreSchools': 'pre_school', 'PrimarySchools': 'primary_school',
              'SecondarySchools': 'secondary_school', 'TechInstitutes': 'tech_institute', 'Universities': 'university'}

    dl_mtable_data = {sector: {}}
    dl_mtable_data[sector][table_name] = {}

    filter_fields = {}

    category_name = None

    for schools_type in schools_types:
        dl_mtable_data[sector][table_name][schools_type] = {}

        school_model = schools_types[schools_type]

        model_class = apps.get_model('damage_losses', school_model)

        admin_area = com_data['district']
        filter_fields = {'incident': incident, 'district': admin_area}

        school_property = school_properties[schools_type]
        school_name_prop = school_property + '__name'
        data_groupedby_school = model_class.objects.filter(**filter_fields).values(school_property, school_name_prop).annotate(dcount=Count(school_property))

        for school_data in data_groupedby_school:

            school_id = school_data[school_property]
            model_fields = {school_property, 'est_rep_cost', 'est_repair_cost', 'tot_damages',
                            'est_los_year_1', 'est_los_year_2', 'tot_los', 'asset'}
            filter_fields = {'incident': incident, 'district': admin_area, school_property: school_id}

            model_data = list(model_class.objects.filter(**filter_fields).values(*model_fields))

            school_name = school_data[school_name_prop]

            dl_mtable_data[sector][table_name][schools_type][school_name] = {}
            print school_id

            dl_mtable_data[sector][table_name][schools_type][school_name][school_model] = model_data

    return HttpResponse(
        json.dumps((dl_mtable_data), cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )

