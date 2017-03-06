from django.conf.urls import include, url
from .import views


urlpatterns = [
    # url(r'^dl_trns_sumr_distr', views.dl_trns_sumr_distr, name='dl_trns_sumr_distr'),
    url(r'^dl_trns_sumr_provn', views.dl_trns_sumr_provn, name='dl_trns_sumr_provn'),
    url(r'^dl_trns_sumr_natal', views.dl_trns_sumr_natal, name='dl_trns_sumr_natal'),
]
