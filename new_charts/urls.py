from django.conf.urls import url

from . import views

app_name = 'new_charts'

urlpatterns = [
 url(r'^index_charts', views.index_charts, name='index_charts'),
    url(r'^test_charts', views.test_charts, name='test_charts'),
    url(r'^housing_charts', views.housing_charts, name='housing_charts'),
    url(r'^water_charts', views.water_charts, name='water_charts'),
    url(r'^tourism_charts', views.tourism_charts, name='tourism_charts'),
    url(r'^trans_air_charts', views.trans_air_charts, name='trans_air_charts'),
    url(r'^trans_land_charts', views.trans_land_charts, name='trans_land_charts'),
    url(r'^trans_water_charts', views.trans_water_charts, name='trans_water_charts'),
    url(r'^trans_rail_charts', views.trans_rail_charts, name='trans_rail_charts'),
    url(r'^trans_summary_charts', views.trans_summary_charts, name='trans_summary_charts'),
    url(r'^agri_agrarian_charts', views.agri_agrarian_charts, name='agri_agrarian_charts'),
    url(r'^mining_charts', views.mining_charts, name='mining_charts'),
    url(r'^industry_services_charts', views.industry_services_charts, name='industry_services_charts'),
    url(r'^power_supply_charts', views.power_supply_charts, name='power_supply_charts'),
    url(r'^health_charts', views.health_charts, name='health_charts'),
    url(r'^agri_irrigation_charts', views.agri_irrigation_charts, name='agri_irrigation_charts'),
    url(r'^education_charts', views.education_charts, name='education_charts'),
    url(r'^other_gov_service_charts', views.other_gov_service_charts, name='other_gov_service_charts'),
    url(r'^telecommunication_charts', views.telecommunication_charts, name='telecommunication_charts'),
]
