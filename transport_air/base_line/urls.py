from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^bs_info_aset_trns', views.bs_info_aset_trns, name='bs_info_aset_trns'),
]