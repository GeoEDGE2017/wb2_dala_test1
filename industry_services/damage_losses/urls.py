from django.conf.urls import url
from .import views

urlpatterns = [


    url(r'^dl_formal_sector', views.dl_formal_sector, name='dl_formal_sector'),
    url(r'^dl_informal_sector', views.dl_informal_sector, name='dl_informal_sector'),
    url(r'^dl_forml_informl_dis', views.dl_forml_informl_dis, name='dl_forml_informl_dis'),
    url(r'^dl_summ_forml_informl_dis', views.dl_summ_forml_informl_dis, name='dl_summ_forml_informl_dis'),
    url(r'^dl_summ_forml_informl_dis', views.dl_summ_forml_informl_dis, name='dl_summ_forml_informl_dis'),
    # url(r'^dl_sum_tourism_pov', views.dl_sum_tourism_pov, name='dl_sum_tourism_pov'),
    # url(r'^dl_sum_tourism_nat', views.dl_sum_tourism_nat, name='dl_sum_tourism_nat'),

]