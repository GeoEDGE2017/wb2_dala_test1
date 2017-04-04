from django.conf.urls import url
from .import views


urlpatterns = [
    url(r'^dl_sum_agriculture_dis', views.dl_sum_agriculture_dis, name='dl_sum_agriculture_dis'),
    url(r'^dl_sum_agriculture_pro', views.dl_sum_agriculture_pro, name='dl_sum_agriculture_pro'),
    url(r'^dl_sum_agriculture_nat', views.dl_sum_agriculture_nat, name='dl_sum_agriculture_nat'),
]
