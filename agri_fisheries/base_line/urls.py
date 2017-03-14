from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^bs_no_npopl_fshrs', views.bs_no_npopl_fshrs, name='bs_no_npopl_fshrs'),
    url(r'^bs_info_fshrs', views.bs_info_fshrs, name='bs_info_fshrs'),
]