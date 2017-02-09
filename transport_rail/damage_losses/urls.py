from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_rail_trnspt_cmpny', views.dl_rail_trnspt_cmpny, name='dl_rail_trnspt_cmpny'),
]