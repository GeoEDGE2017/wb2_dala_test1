from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_roads_bridges', views.dl_roads_bridges, name='dl_roads_bridges'),
    url(r'^dl_oth_lnd_trnspt_asts', views.dl_oth_lnd_trnspt_asts, name='dl_oth_lnd_trnspt_asts'),
    url(r'^dl_govn_admin_aset', views.dl_govn_admin_aset, name='dl_govn_admin_aset'),

    url(r'^dl_sum_trnsland_distc', views.dl_sum_trnsland_distc, name='dl_sum_trnsland_distc'),
    url(r'^dl_sum_trnsland_povnc', views.dl_sum_trnsland_povnc, name='dl_sum_trnsland_povnc'),
    url(r'^dl_sum_trnsland_natnal', views.dl_sum_trnsland_natnal, name='dl_sum_trnsland_natnal'),
]
