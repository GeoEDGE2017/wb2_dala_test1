from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_irrigation', views.dl_irrigation, name='dl_irrigation'),
    url(r'^dl_sum_irg_district', views.dl_sum_irg_district, name='dl_sum_irg_district'),
]