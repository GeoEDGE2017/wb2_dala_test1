from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^mn_bs_info_industrial$', views.mn_bs_info_industrial, name='mn_bs_info_industrial'),
    url(r'^mn_bs_info_artisanal$', views.mn_bs_info_artisanal, name='mn_bs_info_artisanal'),

    url(r'^get_ownership_firm$', views.get_ownership_firm, name='get_ownership_firm'),
    # url(r'^fetch_firms$', views.fetch_firms, name='fetch_firms'),
    url(r'^add_firm$', views.add_firm, name='add_firm'),
    url(r'^edit_firm$', views.edit_firm, name='edit_firm'),

]
