from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^bs_pow_gen_firms_dis', views.bs_pow_gen_firms_dis, name='bs_pow_gen_firms_dis'),
    # url(r'^bs_info_fshrs', views.bs_info_fshrs, name='bs_info_fshrs'),
]
