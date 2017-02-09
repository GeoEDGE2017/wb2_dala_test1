from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^bs_other_gov_info_costs_structures_other_assets_district', views.bs_other_gov_info_costs_structures_other_assets_district, name='bs_other_gov_info_costs_structures_other_assets_district'),
]