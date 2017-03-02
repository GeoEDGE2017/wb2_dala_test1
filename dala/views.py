from __future__ import absolute_import
import datetime
from django.core.serializers.json import DjangoJSONEncoder

from health.base_line.models import BdSessionKeys
from health.damage_losses.models import DlSessionKeys
from incidents.models import IncidentReport
import yaml, json
from django.apps import apps
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from settings.models import District, Province
from django.core import serializers
from django.conf import settings
from django.http import HttpResponse


def fetch_districts(user):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    if user.is_superuser:
        return {'districts': districts, 'incidents': incidents}
    else:
        role = user.user_role.code_name

        if role == 'district':
            district_id = user.district_id
            districts = District.objects.filter(id=district_id)
            incidents = IncidentReport.objects.filter(effectedarea__district=district_id)
        elif role == 'provincial':
            province = user.province
            districts = province.district_set.all()
            incidents = IncidentReport.objects.filter(effectedarea__district__province=province).distinct()
        incidents = IncidentReport.objects.all()
        return {'districts': districts, 'incidents': incidents}


@csrf_exempt
def fetch_incident_districts(request):
    dl_data = (yaml.safe_load(request.body))
    incident_id = dl_data['incident']
    incident = IncidentReport.objects.get(pk=incident_id)
    affected_district = incident.effectedarea_set.values('district__id', 'district__name').distinct()

    return HttpResponse(
        json.dumps(list(affected_district)),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def fetch_incident_provinces(request):
    dl_data = (yaml.safe_load(request.body))
    incident_id = dl_data['incident']
    incident = IncidentReport.objects.get(pk=incident_id)
    affected_provinces = incident.effectedarea_set.values('district__id', 'district__province_id',
                                                          'district__province__name').distinct()

    return HttpResponse(
        json.dumps(list(affected_provinces)),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def bs_save_data(request):
    bs_data = (yaml.safe_load(request.body))
    bs_table_hs_data = bs_data['table_data']
    com_data = bs_data['com_data']
    district = com_data['district']
    bs_date = com_data['bs_date']
    todate = timezone.now()
    is_edit = bs_data['is_edit']

    if not is_edit:
        for sector in bs_table_hs_data:

            sub_app_name = sector + '.base_line'

            for interface_table in bs_table_hs_data[sector]:
                print 'interface table', ' -->', interface_table, '\n'

                sub_app_session = apps.get_model(sub_app_name, 'BdSessionKeys')
                record_exist = sub_app_session.objects.filter(bs_date=com_data['bs_date'],
                                                            table_name=interface_table,
                                                            district=district)

                if not record_exist:

                    for db_table in bs_table_hs_data[sector][interface_table]:

                        print 'db table', ' -->', db_table, '\n'

                        for row in bs_table_hs_data[sector][interface_table][db_table]:

                            model_class = apps.get_model(sub_app_name, db_table)
                            model_object = model_class()

                            # assigning common properties to model object
                            model_object.created_date = todate
                            model_object.lmd = todate
                            model_object.district_id = district
                            model_object.bs_date = bs_date

                            print 'row', ' --> ', row, '\n', ' object '

                            for property in row:
                                setattr(model_object, property, row[property])

                                print 'property ', ' --> ', property, ' db_property ', row[property], ' index ', '\n'
                                model_object.save()

                                # get bs full date
                    split_date = bs_date.split('/')
                    bs_month = split_date[0]
                    bs_year = split_date[1]
                    bs_full_date = datetime.date(int(bs_year), int(bs_month), 1)

                    bd_session = sub_app_session(bs_date=com_data['bs_date'], table_name=interface_table,
                                               date=todate, district_id=district, data_type='base_line',
                                               full_bs_date=bs_full_date)
                    bd_session.save()

                    return HttpResponse(True)

                else:
                    return HttpResponse(False)

    else:
        bs_save_edit_data(bs_table_hs_data, com_data)

    return HttpResponse('success')


@csrf_exempt
def bs_get_data(request):
    todate = timezone.now()
    data = (yaml.safe_load(request.body))
    com_data = data['com_data']
    district = com_data['district']
    incident_id = com_data['incident']
    sector = com_data['sector']
    incident = IncidentReport.objects.get(pk=incident_id)
    incident_date = incident.reported_date_time
    db_tables = data['db_tables']

    sub_app_name = sector + '.base_line'

    # get closest data based on district incident date and table number
    bs_session_model = apps.get_model(sub_app_name, 'BdSessionKeys')
    bs_session = bs_session_model.objects.values('bs_date').latest('date')
    bs_date = bs_session['bs_date']

    bs_mtable_data = {}

    for db_table in db_tables:
        model_class = apps.get_model(sub_app_name, db_table)
        bs_mtable_data[db_table] = serializers.serialize('json',
                                                         model_class.objects.filter(bs_date=bs_date).order_by('id'))

    return HttpResponse(
        json.dumps(bs_mtable_data),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def bs_get_data_mock(request):
    todate = timezone.now()
    data = (yaml.safe_load(request.body))
    com_data = data['com_data']
    district = com_data['district']
    incident_id = com_data['incident']
    sector = data['sector']
    incident = IncidentReport.objects.get(pk=incident_id)
    incident_date = incident.reported_date_time
    table_name = data['table_name']
    db_tables = data['db_tables']
    bs_mtable_data = {}

    sub_app_name = sector + '.base_line'

    bs_session_model = apps.get_model(sub_app_name, 'BdSessionKeys')
    bd_sessions = bs_session_model.objects.extra(select={'difference': 'full_bs_date - %s'},
                                              select_params=(incident_date,)). \
        filter(table_name=table_name, district=district). \
        values('difference', 'id', 'bs_date').order_by('difference').latest('difference')

    print bd_sessions
    bs_date = bd_sessions['bs_date']

    for db_table in db_tables:
        model_class = apps.get_model(sub_app_name, db_table)
        # assuming there could be multiple data sets for bs_date
        bs_mtable_data[db_table] = serializers.serialize('json',
                                                         model_class.objects.filter(bs_date=bs_date,
                                                                                    district=district).order_by('id'))

    return HttpResponse(
        json.dumps((bs_mtable_data)),

        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def bs_fetch_edit_data(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    sector = data['sector']
    com_data = data['com_data']
    bs_date = com_data['bs_date']
    district = com_data['district']
    tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]

    bs_mtable_data = {sector: {}}
    bs_mtable_data[sector][table_name] = {}

    sub_app_name = sector + '.base_line'

    for table in tables:
        table_fields = tables[table]

        model_class = apps.get_model(sub_app_name, table)
        bs_mtable_data[sector][table_name][table] = list(model_class.objects.
                                                         filter(bs_date=bs_date, district=district).
                                                         values(*table_fields).order_by('id'))

    return HttpResponse(
        json.dumps(bs_mtable_data),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def bs_save_edit_data(table_data, com_data):
    district = com_data['district']
    bs_date = com_data['bs_date']

    for sector in table_data:

        sub_app_name = sector + '.base_line'

        for interface_table in table_data[sector]:
            print 'interface table', ' -->', interface_table, '\n'
            for db_table in table_data[sector][interface_table]:

                print 'db table', ' -->', db_table, '\n'

                for row in table_data[sector][interface_table][db_table]:
                    model_class = apps.get_model(sub_app_name, db_table)
                    model_object = model_class.objects.filter(bs_date=bs_date, district=district, id=row['id'])
                    model_object.update(**row)

                    print 'row', ' --> ', row, ' id ', model_object[0].id, '\n'


@csrf_exempt
def dl_save_data(request):
    dl_data = (yaml.safe_load(request.body))
    dl_table_data = dl_data['table_data']
    com_data = dl_data['com_data']
    todate = timezone.now()
    is_edit = dl_data['is_edit']
    admin_area = None

    filter_fields = {}

    if not is_edit:

        for sector in dl_table_data:

            sub_app_name = sector + '.damage_losses'

            for interface_table in dl_table_data[sector]:

                incident = com_data['incident']
                if 'province' in com_data:
                    admin_area = com_data['province']
                    filter_fields = {'table_name': interface_table, 'incident': incident, 'province': admin_area}
                elif 'district' in com_data:
                    admin_area = com_data['district']
                    filter_fields = {'table_name': interface_table, 'incident': incident, 'district_id': admin_area}
                else:
                    filter_fields = {'table_name': interface_table, 'incident': incident}

                sub_app_session = apps.get_model(sub_app_name, 'DlSessionKeys')
                record_exist = sub_app_session.objects.filter(**filter_fields)
                print record_exist

                if not record_exist:

                    print 'interface table', ' -->', interface_table, '\n'
                    for db_table in dl_table_data[sector][interface_table]:

                        print 'db table', ' -->', db_table, '\n'

                        for row in dl_table_data[sector][interface_table][db_table]:

                            model_class = apps.get_model(sub_app_name, db_table)
                            model_object = model_class()

                            # assigning common properties to model object
                            model_object.created_date = todate
                            model_object.lmd = todate
                            if 'province' in com_data:
                                model_object.province_id = com_data['province']
                            elif 'district' in com_data:
                                model_object.district_id = com_data['district']

                            model_object.incident_id = com_data['incident']

                            print 'row', ' --> ', row, '\n', ' object '

                            for property in row:
                                setattr(model_object, property, row[property])

                                print 'property ', ' --> ', property, ' db_property ', row[property], ' index ', '\n'
                                model_object.save()

                    district = District.objects.get(pk=admin_area)
                    filter_fields['province_id'] = district.province.id
                    dl_session = sub_app_session(**filter_fields)
                    dl_session.date = todate
                    dl_session.save()

                    return HttpResponse(True)

                else:
                    return HttpResponse(False)

    else:
        dl_save_edit_data(dl_table_data, com_data)

    return HttpResponse('success')


@csrf_exempt
def dl_get_data(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    com_data = data['com_data']
    incident_id = com_data['incident']
    sector = data['sector']
    db_tables = data['db_tables']

    dl_mtable_data = {}
    filter_fields = {}

    sub_app_name = sector + '.damage_losses'

    if 'province' in com_data:
        admin_area = com_data['province']
        filter_fields = {'incident': incident_id, 'province': admin_area}
    elif 'district' in com_data:
        admin_area = com_data['district']
        filter_fields = {'incident': incident_id, 'district': admin_area}
    else:
        filter_fields = {'incident': incident_id}

    for db_table in db_tables:
        model_class = apps.get_model(sub_app_name, db_table)
        # dl_mtable_data[db_table] = serializers.serialize('json', model_class.objects.filter(incident=incident_id, district=district).order_by('id'))
        dl_mtable_data[db_table] = serializers.serialize('json',
                                                         model_class.objects.filter(**filter_fields).order_by('id'))

    return HttpResponse(
        json.dumps(dl_mtable_data),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def dl_fetch_edit_data(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    sector = data['sector']
    com_data = data['com_data']
    incident = com_data['incident']
    tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]

    sub_app_name = sector + '.damage_losses'
    filter_fields = {}

    if 'province' in com_data:
        admin_area = com_data['province']
        filter_fields = {'incident': incident, 'province': admin_area}
    elif 'district' in com_data:
        admin_area = com_data['district']
        filter_fields = {'incident': incident, 'district': admin_area}
    else:
        filter_fields = {'incident': incident}

    dl_mtable_data = {sector: {}}
    dl_mtable_data[sector][table_name] = {}

    for table in tables:
        table_fields = tables[table]
        model_class = apps.get_model(sub_app_name, table)
        dl_mtable_data[sector][table_name][table] = list(model_class.objects.
                                                         filter(**filter_fields).
                                                         values(*table_fields).order_by('id'))

        print dl_mtable_data

    return HttpResponse(
        json.dumps(dl_mtable_data, cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )


# @csrf_exempt
# def dl_fetch_district_disagtn(request):
#     data = (yaml.safe_load(request.body))
#     table_name = data['table_name']
#     sector = data['sector']
#     com_data = data['com_data']
#     incident = com_data['incident']
#     tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]
#
#     dl_mtable_data = {sector: {}}
#     dl_mtable_data[sector][table_name] = {}
#     sub_app_name = sector + '.damage_losses'
#
#     if 'province' in com_data:
#         admin_area = com_data['province']
#         filter_fields = {'incident': incident, 'district__province': admin_area}
#     else:
#         filter_fields = {'incident': incident}
#
#     dl_session_model = apps.get_model(sub_app_name, 'DlSessionKeys')
#     dl_sessions = dl_session_model.objects.filter(**filter_fields).distinct()
#     print dl_sessions
#     for dl_session in dl_sessions:
#
#         category_name = None
#
#         if 'province' in com_data:
#             district_id = dl_session.district.id
#             filter_fields = {'incident': incident, 'district': district_id}
#             category_name = dl_session.district.name
#         else:
#             province_id = None
#             if dl_session.province:
#                 province_id = dl_session.province.id
#                 category_name = dl_session.province.name
#             filter_fields = {'incident': incident, 'province': province_id}
#
#         if category_name is not None:
#             dl_mtable_data[sector][table_name][category_name] = {}
#
#             for table in tables:
#                 table_fields = tables[table]
#
#                 dl_mtable_data[sector][table_name][category_name][table] = {}
#
#                 table_fields = tables[table]
#                 model_class = apps.get_model(sub_app_name, table)
#
#                 table_fields = tables[table]
#                 dl_mtable_data[sector][table_name][category_name][table] = list(model_class.objects.
#                                                                                 filter(**filter_fields)
#                                                                                 .values(*table_fields))
#
#     return HttpResponse(
#         json.dumps((dl_mtable_data), cls=DjangoJSONEncoder),
#         content_type='application/javascript; charset=utf8'
#     )


@csrf_exempt
def dl_save_edit_data(table_data, com_data):
    for sector in table_data:

        sub_app_name = sector + '.damage_losses'

        for interface_table in table_data[sector]:
            print 'interface table', ' -->', interface_table, '\n'
            for db_table in table_data[sector][interface_table]:

                print 'db table', ' -->', db_table, '\n'

                for row in table_data[sector][interface_table][db_table]:
                    model_class = apps.get_model(sub_app_name, db_table)
                    model_object = model_class.objects.filter(id=row['id'])
                    model_object.update(**row)

                    print 'row', ' --> ', row, ' id ', model_object[0].id, '\n'


# edit data baseline mining

@csrf_exempt
def bs_mining_fetch_edit_data(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    sector = data['sector']
    com_data = data['com_data']
    bs_date = com_data['bs_date']
    district = com_data['district']
    firm = com_data['firm']
    tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]

    bs_mtable_data = {sector: {}}
    bs_mtable_data[sector][table_name] = {}

    for table in tables:
        table_fields = tables[table]

        sub_app_name = sector + '.base_line'
        model_class = apps.get_model(sub_app_name, table)
        bs_mtable_data[sector][table_name][table] = list(model_class.objects.
                                                         filter(bs_date=bs_date, district=district, firm_id=firm).
                                                         values(*table_fields).order_by('id'))

    return HttpResponse(
        json.dumps(bs_mtable_data),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def dl_fetch_district_disagtn(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    sector = data['sector']
    com_data = data['com_data']
    incident = com_data['incident']
    tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]

    dl_mtable_data = {sector: {}}
    dl_mtable_data[sector][table_name] = {}

    filter_fields = {}
    sub_app_name = sector + '.damage_losses'

    if 'province' in com_data:
        admin_area = com_data['province']
        filter_fields = {'incident': incident, 'district__province': admin_area}
    else:
        filter_fields = {'incident': incident}

    dl_session_model = apps.get_model(sub_app_name, 'DlSessionKeys')
    # should be checking against table name as well
    dl_sessions = dl_session_model.objects.filter(**filter_fields)

    for dl_session in dl_sessions:

        category_name = None

        if 'province' in com_data:
            district_id = dl_session.district.id
            filter_fields = {'incident': incident, 'district': district_id}
            category_name = dl_session.district.name
        else:
            province_id = None
            if dl_session.province:
                province_id = dl_session.province.id
                category_name = dl_session.province.name
            filter_fields = {'incident': incident, 'province': province_id}

        print dl_session.district.province

        if category_name is not None:
            dl_mtable_data[sector][table_name][category_name] = {}

            for table in tables:
                print table
                table_fields = tables[table]

                dl_mtable_data[sector][table_name][category_name][table] = {}

                table_fields = tables[table]
                model_class = apps.get_model(sub_app_name, table)

                table_fields = tables[table]
                dl_mtable_data[sector][table_name][category_name][table] = list(model_class.objects.
                                                                                filter(**filter_fields)
                                                                                .values(*table_fields))

    return HttpResponse(
        json.dumps((dl_mtable_data), cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def dl_fetch_summary_disagtn(request):
    data = (yaml.safe_load(request.body))
    table_names = data['table_name']
    sectors = data['sector']
    com_data = data['com_data']
    incident = com_data['incident']

    dl_data = {}

    if 'province' in com_data:
        admin_area = com_data['province']
        filter_fields = {'incident': incident, 'district__province': admin_area}
    else:
        filter_fields = {'incident': incident}

    i = 0

    for sector in sectors:

        table_name = table_names[i]
        tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]

        dl_mtable_data = {sector: {}}
        dl_mtable_data[sector][table_name] = {}
        sub_app_name = sector + '.damage_losses'

        dl_session_model = apps.get_model(sub_app_name, 'DlSessionKeys')
        dl_sessions = dl_session_model.objects.filter(**filter_fields).distinct()
        print dl_mtable_data
        for dl_session in dl_sessions:

            category_name = None

            if 'province' in com_data:
                district_id = dl_session.district.id
                filter_fields = {'incident': incident, 'district': district_id}
                category_name = dl_session.district.name
            else:
                province_id = None
                if dl_session.province:
                    province_id = dl_session.province.id
                    category_name = dl_session.province.name
                filter_fields = {'incident': incident, 'province': province_id}

            if category_name is not None:
                dl_mtable_data[sector][table_name][category_name] = {}

                for table in tables:
                    table_fields = tables[table]

                    dl_mtable_data[sector][table_name][category_name][table] = {}

                    table_fields = tables[table]
                    model_class = apps.get_model(sub_app_name, table)

                    table_fields = tables[table]
                    dl_mtable_data[sector][table_name][category_name][table] = list(model_class.objects.
                                                                                    filter(**filter_fields)
                                                                                    .values(*table_fields))

        dl_data.update(dl_mtable_data)
        i += 1

    return HttpResponse(
        json.dumps((dl_data), cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def dl_fetch_total_data(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    sector = data['sector']
    com_data = data['com_data']
    incident = com_data['incident']
    tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]

    filter_fields = {}
    sub_app_name = sector + '.damage_losses'

    if 'province' in com_data:
        admin_area = com_data['province']
        filter_fields = {'incident': incident, 'province': admin_area}
    elif 'district' in com_data:
        admin_area = com_data['district']
        filter_fields = {'incident': incident, 'district': admin_area}
    else:
        filter_fields = {'incident': incident}

    dl_mtable_data = {sector: {}}
    dl_mtable_data[sector][table_name] = {}

    for table in tables:
        table_fields = tables[table]
        model_class = apps.get_model(sub_app_name, table)
        dl_mtable_data[sector][table_name][table] = list(model_class.objects.
                                                         filter(**filter_fields).
                                                         values(*table_fields))

        print dl_mtable_data

    return HttpResponse(
        json.dumps(dl_mtable_data, cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def fetch_entities(request):
    data = (yaml.safe_load(request.body))
    district_id = data['district']
    model_name = data['model']
    sector = data['sector']

    sub_app_name = sector + '.base_line'
    model_class = apps.get_model(sub_app_name, model_name)
    fetched_data = model_class.objects.filter(district_id=district_id).values('name', 'id', 'ownership')

    return HttpResponse(
        json.dumps(list(fetched_data)),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def add_entity(request):
    data = (yaml.safe_load(request.body))
    model_fields = data['model_fields']
    model_name = data['model']
    is_edit = data['is_edit']
    sector = data['sector']

    sub_app_name = sector + '.base_line'

    model_class = apps.get_model(sub_app_name, model_name)

    print is_edit

    if is_edit == False:
        print 'new'
        model_object = model_class(**model_fields)
        model_object.save()

    else:
        print 'update'
        object_id = model_fields['id']
        modified_model = model_class.objects.filter(pk=object_id)
        modified_model.update(name=model_fields['name'])
        return HttpResponse(object_id)

    if model_object.id is not None:
        return HttpResponse(model_object.id)
    else:
        return HttpResponse(False)


@csrf_exempt
def dl_fetch_summary_disagtn(request):
    data = (yaml.safe_load(request.body))
    table_names = data['table_name']
    sectors = data['sector']
    com_data = data['com_data']
    incident = com_data['incident']

    dl_data = {}

    if 'province' in com_data:
        admin_area = com_data['province']
        filter_fields_session = {'incident': incident, 'district__province': admin_area}
    else:
        filter_fields_session = {'incident': incident}

    i = 0

    for sector in sectors:

        table_name = table_names[i]
        tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]

        dl_mtable_data = {sector: {}}
        dl_mtable_data[sector][table_name] = {}
        sub_app_name = sector + '.damage_losses'

        dl_session_model = apps.get_model(sub_app_name, 'DlSessionKeys')
        dl_sessions = dl_session_model.objects.filter(**filter_fields_session).distinct()
        print dl_mtable_data
        for dl_session in dl_sessions:

            category_name = None

            if 'province' in com_data:
                district_id = dl_session.district.id
                filter_fields = {'incident': incident, 'district': district_id}
                category_name = dl_session.district.name
            else:
                province_id = None
                if dl_session.province:
                    province_id = dl_session.province.id
                    category_name = dl_session.province.name
                filter_fields = {'incident': incident, 'province': province_id}

            if category_name is not None:
                dl_mtable_data[sector][table_name][category_name] = {}

                for table in tables:
                    table_fields = tables[table]

                    dl_mtable_data[sector][table_name][category_name][table] = {}

                    table_fields = tables[table]
                    model_class = apps.get_model(sub_app_name, table)

                    table_fields = tables[table]
                    dl_mtable_data[sector][table_name][category_name][table] = list(model_class.objects.
                                                                                    filter(**filter_fields)
                                                                                    .values(*table_fields))

        dl_data.update(dl_mtable_data)
        i += 1

    return HttpResponse(
        json.dumps((dl_data), cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )
