from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_telcom_firms', views.dl_telcom_firms, name='dl_telcom_firms'),
    # url(r'^dl_livestock_dis', views.dl_livestock_dis, name='dl_livestock_dis'),
    # url(r'^dl_livestock_pro', views.dl_livestock_pro, name='dl_livestock_pro'),
    # url(r'^dl_livestock_nat', views.dl_livestock_nat, name='dl_livestock_nat'),
]
