from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^bs_telcom_cmpnys', views.bs_telcom_cmpnys, name='bs_telcom_cmpnys'),
]