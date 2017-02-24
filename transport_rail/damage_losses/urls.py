from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_rail_trnspt_cmpny', views.dl_rail_trnspt_cmpny, name='dl_rail_trnspt_cmpny'),
    url(r'^dl_rail_trnspt_dis_summary', views.dl_rail_trnspt_dis_summary, name='dl_rail_trnspt_dis_summary'),
    url(r'^dl_rail_trans_nat_summary', views.dl_rail_trans_nat_summary, name='dl_rail_trans_nat_summary'),
    url(r'^dl_rail_type_loss_summary', views.dl_rail_type_loss_summary, name='dl_rail_type_loss_summary'),
]
