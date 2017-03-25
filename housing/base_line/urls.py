from django.conf.urls import url

from .import views

urlpatterns = [
    url(r'^bs_info_housing_dis$', views.bs_info_housing_dis, name='bs_info_housing_dis'),
    url(r'^bs_costs_vtypes_hunits$', views.bs_costs_vtypes_hunits, name='bs_costs_vtypes_hunits'),
]

