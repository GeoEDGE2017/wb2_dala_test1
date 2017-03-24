from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_irrigation', views.dl_irrigation, name='dl_irrigation'),
    url(r'^dl_sum_irg_district', views.dl_sum_irg_district, name='dl_sum_irg_district'),
    url(r'^dl_sum_irg_province', views.dl_sum_irg_province, name='dl_sum_irg_province'),
    url(r'^dl_sum_irg_national', views.dl_sum_irg_national, name='dl_sum_irg_national'),
]
