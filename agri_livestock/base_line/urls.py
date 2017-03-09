from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^bs_livestock_poultry_dst', views.bs_livestock_poultry_dst, name='bs_livestock_poultry_dst'),
    url(r'^bs_livestock_poultry', views.bs_livestock_poultry, name='bs_livestock_poultry'),

]