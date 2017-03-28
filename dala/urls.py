from django.conf.urls import include, url
from django.contrib import admin
# from tastypie.api import Api
from .import views
# from api.resources import DistrictResource, ProvinceResource, BmfPubMfResource

# v1_api = Api(api_name='v1')
# v1_api.register(DistrictResource())
# v1_api.register(ProvinceResource())
# v1_api.register(BmfPubMfResource())

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('dashboard.urls', namespace='dashboard')),
    url(r'^dashboard/', include('dashboard.urls', namespace='dashboard')),
    # url(r'^api/', include(v1_api.urls)),
    url(r'^health/', include('health.urls', namespace='health')),
    url(r'^education/', include('education.urls', namespace='education')),
    url(r'^users/', include('users.urls', namespace='users')),
    url(r'^reports/', include('reports.urls', namespace='reports')),
    url(r'^charts/', include('charts.urls', namespace='charts')),

    # report builder
   # url(r'^report_builder/', include('report_builder.urls')),

    # common functions
    url(r'^bs_get_data$', views.bs_get_data, name='bs_get_data'),
    url(r'^bs_get_data_mock$', views.bs_get_data_mock, name='bs_get_data_mock'),
    url(r'^bs_fetch_edit_data$', views.bs_fetch_edit_data, name='bs_fetch_edit_data'),
    url(r'^bs_save_data$', views.bs_save_data, name='bs_save_data'),
    url(r'^fetch_entities$', views.fetch_entities, name='fetch_entities'),
    url(r'^add_entity$', views.add_entity, name='add_entity'),
    url(r'^get_entity$', views.get_entity, name='get_entity'),
    url(r'^fetch_entities_all$', views.fetch_entities_all, name='fetch_entities_all'),


    # add_entity_with_district
    url(r'^add_entity_with_district$', views.add_entity_with_district, name='add_entity_with_district'),

    url(r'^dl_save_data$', views.dl_save_data, name='dl_save_data'),
    url(r'^dl_get_data$', views.dl_get_data, name='dl_get_data'),
    url(r'^dl_fetch_edit_data$', views.dl_fetch_edit_data, name='dl_fetch_edit_data'),
    url(r'^dl_fetch_district_disagtn$', views.dl_fetch_district_disagtn, name='dl_fetch_district_disagtn'),
    url(r'^dl_fetch_summary_disagtn$', views.dl_fetch_summary_disagtn, name='dl_fetch_summary_disagtn'),
    url(r'^dl_fetch_summary_dis_disagtn$', views.dl_fetch_summary_dis_disagtn, name='dl_fetch_summary_dis_disagtn'),

    url(r'^fetch_incident_districts$', views.fetch_incident_districts, name='fetch_incident_districts'),
    url(r'^fetch_incident_provinces$', views.fetch_incident_provinces, name='fetch_incident_provinces'),

    # get Business Types
    url(r'^fetch_business_types$', views.fetch_business_types, name='fetch_business_types'),

    # get Business Types
    url(r'^fetch_tourism_infrastructure_types$', views.fetch_tourism_infrastructure_types, name='fetch_tourism_infrastructure_types'),

    # get entities all data
    url(r'^fetch_entities_plain$', views.fetch_entities_plain, name='fetch_entities_plain'),

    url(r'^fetch_entities_plain_column$', views.fetch_entities_plain_column, name='fetch_entities_plain_column'),








    # agri_irrigation
    url(r'^agri_irrigation/', include('agri_irrigation.urls', namespace='agri_irrigation')),

    # agri_agrarian
    url(r'^agri_agrarian/', include('agri_agrarian.urls', namespace='agri_agrarian')),

    # agri_livestock
    url(r'^agri_livestock/', include('agri_livestock.urls', namespace='agri_livestock')),

    # agri_fisheries
    url(r'^agri_fisheries/', include('agri_fisheries.urls', namespace='agri_fisheries')),

    # water_supply
    url(r'^water_supply/', include('water_supply.urls', namespace='water_supply')),

    # housing
    url(r'^housing/', include('housing.urls', namespace='housing')),

    # telecommunication
    url(r'^telecommunication/', include('telecommunication.urls', namespace='telecommunication')),

    # tourism
    url(r'^tourism/', include('tourism.urls', namespace='tourism')),

    # industry_services
    url(r'^industry_services/', include('industry_services.urls', namespace='industry_services')),

    # other govn services
    url(r'^other_govn_services/', include('other_govn_services.urls', namespace='other_govn_services')),

    # mining
    url(r'^mining/', include('mining.urls', namespace='mining')),
    url(r'^bs_mining_fetch_edit_data$', views.bs_mining_fetch_edit_data, name='bs_mining_fetch_edit_data'),
    url(r'^dl_fetch_district_disagtn$', views.dl_fetch_district_disagtn, name='dl_fetch_district_disagtn'),
    url(r'^dl_fetch_total_data$', views.dl_fetch_total_data, name='dl_fetch_total_data'),
    url(r'^dl_fetch_summary_disagtn$', views.dl_fetch_summary_disagtn, name='dl_fetch_summary_disagtn'),

    # transport_rail
    url(r'^transport_rail/', include('transport_rail.urls', namespace='transport_rail')),

    # transport-water
    url(r'^transport_water/', include('transport_water.urls', namespace='transport_water')),

    # transport-land
    url(r'^transport_land/', include('transport_land.urls', namespace='transport_land')),

    # transport_air
    url(r'^transport_air/', include('transport_air.urls', namespace='transport_air')),

    # transport_summary
    url(r'^transport_summary/', include('transport_summary.urls', namespace='transport_summary')),


]
