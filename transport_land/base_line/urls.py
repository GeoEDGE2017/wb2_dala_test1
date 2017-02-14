from django.conf.urls import include, url
from .import views

urlpatterns = [
    url(r'^bs_pub_rod_brid_user', views.bs_pub_rod_brid_user, name='bs_pub_rod_brid_user'),
    url(r'^bs_trans_assets', views.bs_trans_assets, name='bs_trans_assets'),
    url(r'^bs_gov_admn_aset', views.bs_gov_admn_aset, name='bs_gov_admn_aset'),
]