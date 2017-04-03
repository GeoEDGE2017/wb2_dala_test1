from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_ceb', views.dl_ceb, name='dl_ceb'),
    url(r'^dl_pvt_pow_prod', views.dl_pvt_pow_prod, name='dl_pvt_pow_prod'),
    url(r'^dl_sum_irg_province', views.dl_sum_irg_province, name='dl_sum_irg_province'),
    url(r'^dl_sum_irg_national', views.dl_sum_irg_national, name='dl_sum_irg_national'),
]
