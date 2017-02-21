from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_roads_bridges', views.dl_roads_bridges, name='dl_roads_bridges'),
    url(r'^dl_oth_lnd_trnspt_asts', views.dl_oth_lnd_trnspt_asts, name='dl_oth_lnd_trnspt_asts'),
    url(r'^dl_govn_admin_aset', views.dl_govn_admin_aset, name='dl_govn_admin_aset'),
    url(r'^dl_tr_land_province', views.dl_tr_land_province, name='dl_tr_land_province'),
    url(r'^dl_tr_land_national', views.dl_tr_land_national, name='dl_tr_land_national'),
]
