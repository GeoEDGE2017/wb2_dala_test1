from django.conf.urls import url
from .import views

urlpatterns = [

    url(r'^dl_air_trnspt_provn', views.dl_air_trnspt_provn, name='dl_air_trnspt_provn'),
    url(r'^dl_air_trnspt_natnal', views.dl_air_trnspt_natnal, name='dl_air_trnspt_natnal'),
    url(r'^dl_air_trnspt_dstrct', views.dl_air_trnspt_dstrct, name='dl_air_trnspt_dstrct'),
    url(r'^dl_air_trnspt', views.dl_air_trnspt, name='dl_air_trnspt'),

]