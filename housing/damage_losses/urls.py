from django.conf.urls import url
from .import views


urlpatterns = [
    url(r'^dl_asesmnt_housing$', views.dl_asesmnt_housing, name='dl_asesmnt_housing'),
]