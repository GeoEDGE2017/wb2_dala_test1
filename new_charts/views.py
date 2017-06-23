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
