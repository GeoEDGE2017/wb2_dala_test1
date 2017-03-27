from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_telcom_firms', views.dl_telcom_firms, name='dl_telcom_firms'),
    url(r'^dl_sum_telecom_dis', views.dl_sum_telecom_dis, name='dl_sum_telecom_dis'),
    url(r'^dl_sum_telecom_pro', views.dl_sum_telecom_pro, name='dl_sum_telecom_pro'),
    url(r'^dl_sum_telecom_nat', views.dl_sum_telecom_nat, name='dl_sum_telecom_nat'),
]
