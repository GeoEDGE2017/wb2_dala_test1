from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^bs_nopopl_agrb_actv', views.bs_nopopl_agrb_actv, name='bs_nopopl_agrb_actv'),
    url(r'^bs_info_acfo_assets', views.bs_info_acfo_assets, name='bs_info_acfo_assets'),
    url(r'^bs_info_sero_assets', views.bs_info_sero_assets, name='bs_info_sero_assets'),
]