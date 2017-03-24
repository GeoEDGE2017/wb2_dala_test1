from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^bs_irg_facilities', views.bs_irg_facilities, name='bs_irg_facilities'),
    url(r'^bs_rparpl_cos_assts', views.bs_rparpl_cos_assts, name='bs_rparpl_cos_assts'),
]