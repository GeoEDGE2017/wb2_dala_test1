from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_tourism_business', views.dl_tourism_business, name='dl_tourism_business'),
    url(r'^dl_tourism_infrstrct', views.dl_tourism_infrstrct, name='dl_tourism_infrstrct'),
    url(r'^dl_sum_tourism_dis', views.dl_sum_tourism_dis, name='dl_sum_tourism_dis'),
    url(r'^dl_sum_tourism_pov', views.dl_sum_tourism_pov, name='dl_sum_tourism_pov'),
    url(r'^dl_sum_tourism_nat', views.dl_sum_tourism_nat, name='dl_sum_tourism_nat'),
]