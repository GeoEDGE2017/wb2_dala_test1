from django.conf.urls import url

from . import views

app_name = 'new_charts'

urlpatterns = [
    url(r'^test_charts', views.test_charts, name='test_charts'),
    url(r'^housing_charts', views.housing_charts, name='housing_charts'),
    url(r'^water_charts', views.water_charts, name='water_charts'),
]
