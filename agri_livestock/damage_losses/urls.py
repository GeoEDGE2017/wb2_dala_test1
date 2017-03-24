from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_livestock_poultry', views.dl_livestock_poultry, name='dl_livestock_poultry'),
    url(r'^dlsum_livestock_poultry_dst', views.dlsum_livestock_poultry_dst, name='dlsum_livestock_poultry_dst'),
    url(r'^dl_livestock_pro', views.dl_livestock_pro, name='dl_livestock_pro'),
    url(r'^dl_livestock_nat', views.dl_livestock_nat, name='dl_livestock_nat'),
]
