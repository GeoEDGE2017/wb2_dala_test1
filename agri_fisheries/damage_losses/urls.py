from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^fetch_fishing_types$', views.fetch_fishing_types, name='fetch_fishing_types'),
    url(r'^dl_fisheries_dst', views.dl_fisheries_dst, name='dl_fisheries_dst'),
    url(r'^dl_sum_fisheries_dst', views.dl_sum_fisheries_dst, name='dl_sum_fisheries_dst'),
    url(r'^dl_sum_fisheries_pro', views.dl_sum_fisheries_pro, name='dl_sum_fisheries_pro'),
    url(r'^dl_sum_fisheries_nat', views.dl_sum_fisheries_nat, name='dl_sum_fisheries_nat'),
]
