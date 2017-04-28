from django.conf.urls import url

from . import views

app_name = 'reports'

urlpatterns = [
    url(r'^index_report$', views.index_report, name='index_report'),
    url(r'^health_summery_damageloss_dis_report$', views.health_summery_damageloss_dis_report, name='health_summery_damageloss_dis_report'),
    url(r'^health_summery_damageloss_national_report$', views.health_summery_damageloss_national_report, name='health_summery_damageloss_national_report'),
    url(r'^health_summery_damageloss_province_report$', views.health_summery_damageloss_province_report, name='health_summery_damageloss_province_report'),

    # fetch data
    url(r'^dl_fetch_report_data$', views.dl_fetch_report_data, name='dl_fetch_report_data'),

    #education
    url(r'^education_summary$', views.education_summary, name='education_summary'),

    #mining
    url(r'^mining_summary$', views.mining_summary, name='mining_summary'),

    #other government services
    url(r'^other_govn_services_summary$', views.other_govn_services_summary, name='other_govn_services_summary'),

    #transport land
    url(r'^transport_land_summary$', views.transport_land_summary, name='transport_land_summary'),

    #transport rail
    url(r'^transport_rail_summary$', views.transport_rail_summary, name='transport_rail_summary'),

    #transport water
    url(r'^transport_water_summary$', views.transport_water_summary, name='transport_water_summary'),

    #transport air
    url(r'^transport_air_summary$', views.transport_air_summary, name='transport_air_summary'),

     #water_supply
    url(r'^water_supply_summary$', views.water_supply_summary, name='water_supply_summary'),

     #power_supply
    url(r'^power_supply_summary$', views.power_supply_summary, name='power_supply_summary'),

    #industry_services
    url(r'^industry_services_summary$', views.industry_services_summary, name='industry_services_summary'),

     #Agri_agrarian
    url(r'^agri_agrarian_summary$', views.agri_agrarian_summary, name='agri_agrarian_summary'),

    #Agri_fisheries
    url(r'^agri_fisheries_summary$', views.agri_fisheries_summary, name='agri_fisheries_summary'),

    #Agri_livestock
    url(r'^agri_livestock_summary$', views.agri_livestock_summary, name='agri_livestock_summary'),

    #Agri_irrigation
    url(r'^agri_irrigation_summary$', views.agri_irrigation_summary, name='agri_irrigation_summary'),

     #Housing
    url(r'^housing_summary$', views.housing_summary, name='housing_summary'),

     #Telecom
    url(r'^telecom_summary$', views.telecom_summary, name='telecom_summary'),

    #tourism
    url(r'^tourism_summary$', views.tourism_summary, name='tourism_summary'),

]
