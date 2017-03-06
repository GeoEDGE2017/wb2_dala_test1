from django.conf.urls import url

from .import views

app_name = 'damage_losses'

urlpatterns = [

 url(r'^dl_water_transport$', views.dl_water_transport, name='dl_water_transport'),
 url(r'^dl_summary_trans_water_dis$', views.dl_summary_trans_water_dis, name='dl_summary_trans_water_dis'),
 url(r'^dl_summary_trans_water_pro$', views.dl_summary_trans_water_pro, name='dl_summary_trans_water_pro'),
 url(r'^dl_summary_trans_water_nat$', views.dl_summary_trans_water_nat, name='dl_summary_trans_water_nat'),

]
