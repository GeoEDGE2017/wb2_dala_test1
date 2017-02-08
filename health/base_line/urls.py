from django.conf.urls import url

from .import views

app_name = 'base_line'

urlpatterns = [


    url(r'^bs_health_status$', views.bs_health_status, name='bs_health_status'),
    #url(r'^bs_get_data$', views.bs_get_data, name='bs_get_data'),
    #url(r'^bs_get_data_mock$', views.bs_get_data_mock, name='bs_get_data_mock'),
    #url(r'^bs_fetch_edit_data$', views.bs_fetch_edit_data, name='bs_fetch_edit_data'),

    # Dileepa and Sachie's
    url(r'^bs_health_medical_facilities$', views.bs_health_medical_facilities, name='bs_health_medical_facilities'),
    url(r'^bs_health_info_unit_cost_ministry_health$', views.bs_health_info_unit_cost_ministry_health, name='bs_health_info_unit_cost_ministry_health'),
    url(r'^bs_health_other_medical_facilities_unit_cost$', views.bs_health_other_medical_facilities_unit_cost, name='bs_health_other_medical_facilities_unit_cost'),
    #url(r'^bs_save_data$', views.bs_save_data, name='bs_save_data'),
    url(r'^ministry_health_system$', views.ministry_health_system, name='ministry_health_system'),
]
