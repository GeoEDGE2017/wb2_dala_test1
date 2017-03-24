from django.conf.urls import url
from .import views

app_name = 'dashboard'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^index$', views.index, name='index'),
    url(r'^health_main$', views.health_main, name='health_main'),
    url(r'^mining_main$', views.mining_main, name='mining_main'),
    url(r'^othergov_main$', views.othergov_main, name='othergov_main'),
    url(r'^education_main$', views.education_main, name='education_main'),
    url(r'^transport_air_main$', views.transport_air_main, name='transport_air_main'),
    url(r'^transport_land_main$', views.transport_land_main, name='transport_land_main'),
    url(r'^transport_rail_main$', views.transport_rail_main, name='transport_rail_main'),
    url(r'^transport_water_main$', views.transport_water_main, name='transport_water_main'),
    url(r'^transport_summary_main$', views.transport_summary_main, name='transport_summary_main'),

    url(r'^agri_agrarian_main$', views.agri_agrarian_main, name='agri_agrarian_main'),
    url(r'^agri_fisheries_main$', views.agri_fisheries_main, name='agri_fisheries_main'),
    url(r'^agri_irrigation_main$', views.agri_irrigation_main, name='agri_irrigation_main'),
    url(r'^agri_livestock_main$', views.agri_livestock_main, name='agri_livestock_main'),
    url(r'^agri_summary_main$', views.agri_summary_main, name='agri_summary_main'),
    url(r'^logout/$', 'django.contrib.auth.views.logout', {'next_page': '/admin/login/'}, name='logout'),


]

