from django.shortcuts import render
from incidents.models import IncidentReport
from settings.models import District

def index_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/index_chart.html', context)

def test_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/test.html', context)


def housing_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/housing_chart.html', context)


def water_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/water_chart.html', context)


def tourism_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/tourism_chart.html', context)


def trans_air_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/trans_air_chart.html', context)


def trans_land_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/trans_land_chart.html', context)


def trans_water_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/trans_water_chart.html', context)


def trans_summary_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/trans_summary_chart.html', context)


def agri_agrarian_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/agri_agrarian_chart.html', context)


def mining_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/mining_chart.html', context)


def trans_rail_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/trans_rail_chart.html', context)


def industry_services_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/industry_services_chart.html', context)


def tourism_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/tourism_chart.html', context)


def power_supply_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/power_supply_chart.html', context)


def health_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/health_chart.html', context)


def agri_irrigation_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/agri_irrigation_chart.html', context)


def education_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/education_chart.html', context)


def other_gov_service_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/other_gov_service_chart.html', context)


def telecommunication_charts(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'module': 'new_charts'
    }
    return render(request, 'new_charts/telecommunication_chart.html', context)
