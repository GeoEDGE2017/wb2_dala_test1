from django.conf.urls import url
from .import views


urlpatterns = [

    url(r'^bs_edu_facilities$', views.bs_edu_facilities, name='bs_edu_facilities'),
    url(r'^bs_ucost_gedu_facilities$', views.bs_ucost_gedu_facilities, name='bs_ucost_gedu_facilities'),
]
