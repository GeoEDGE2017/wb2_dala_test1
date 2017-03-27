from django.conf.urls import url
from .import views


urlpatterns = [
    url(r'^dl_asesmnt_housing$', views.dl_asesmnt_housing, name='dl_asesmnt_housing'),
    url(r'^dl_summary_housing_dis$', views.dl_summary_housing_dis, name='dl_summary_housing_dis'),
    url(r'^dl_summary_housing_pro$', views.dl_summary_housing_pro, name='dl_summary_housing_pro'),
    url(r'^dl_summary_housing_nat$', views.dl_summary_housing_nat, name='dl_summary_housing_nat'),
]