from django.conf.urls import url

from .import views

app_name = 'damage_losses'

urlpatterns = [
 url(r'^dl_rul_wtr_sply$', views.dl_rul_wtr_sply, name='dl_rul_wtr_sply'),
 url(r'^dl_com_wtr_sply$', views.dl_com_wtr_sply, name='dl_com_wtr_sply'),
 url(r'^dlsum_wter_sply_dst$', views.dlsum_wter_sply_dst, name='dlsum_wter_sply_dst'),
 url(r'^dlsum_wter_sply_pro$', views.dlsum_wter_sply_pro, name='dlsum_wter_sply_pro'),
 url(r'^dlsum_wter_sply_nat$', views.dlsum_wter_sply_nat, name='dlsum_wter_sply_nat'),
]