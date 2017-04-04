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

]
