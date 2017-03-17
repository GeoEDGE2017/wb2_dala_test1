from django.conf.urls import url

from .import views

app_name = 'base_line'

urlpatterns = [
    url(r'^bs_asts_nwsdb_dis$', views.bs_asts_nwsdb_dis, name='bs_asts_nwsdb_dis'),
    url(r'^bs_rwater_sply_dis$', views.bs_rwater_sply_dis, name='bs_rwater_sply_dis'),
]
