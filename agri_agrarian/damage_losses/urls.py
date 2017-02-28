from django.conf.urls import url
from .import views

urlpatterns = [

    url(r'^dl_frst_prduct_asets', views.dl_frst_prduct_asets, name='dl_frst_prduct_asets'),
    url(r'^dl_struts_oth_asets', views.dl_struts_oth_asets, name='dl_struts_oth_asets'),
    url(r'^dl_invsmnt_los', views.dl_invsmnt_los, name='dl_invsmnt_los'),
    url(r'^dl_prdctn_los', views.dl_prdctn_los, name='dl_prdctn_los'),

    url(r'^dl_sum_agrarian_dstr', views.dl_sum_agrarian_dstr, name='dl_sum_agrarian_dstr'),
]