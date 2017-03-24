from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^bs_tursm_fclts_dis', views.bs_tursm_fclts_dis, name='bs_tursm_fclts_dis'),
]