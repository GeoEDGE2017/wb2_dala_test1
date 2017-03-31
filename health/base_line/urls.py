from django.conf.urls import url

from .import views


urlpatterns = [

    url(r'^bs_health_status$', views.bs_health_status, name='bs_health_status'),
    url(r'^bs_health_medical_facilities$', views.bs_health_medical_facilities, name='bs_health_medical_facilities'),
    url(r'^bs_health_info_unit_cost_ministry_health$', views.bs_health_info_unit_cost_ministry_health, name='bs_health_info_unit_cost_ministry_health'),
    url(r'^bs_health_other_medical_facilities_unit_cost$', views.bs_health_other_medical_facilities_unit_cost, name='bs_health_other_medical_facilities_unit_cost'),

]
