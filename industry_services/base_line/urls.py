from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^bs_info_forml_dis', views.bs_info_forml_dis, name='bs_info_forml_dis'),
    url(r'^bs_info_informl_dis', views.bs_info_informl_dis, name='bs_info_informl_dis'),
]