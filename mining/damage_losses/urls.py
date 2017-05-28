from django.conf.urls import url
from .import views

urlpatterns = [

    url(r'^damages_losses_of_mining_firms', views.damages_losses_of_mining_firms, name='damages_losses_of_mining_firms'),
    url(r'^damages_losses_artisanal_mining', views.damages_losses_artisanal_mining, name='damages_losses_artisanal_mining'),
    url(r'^summary_damage_losses_district', views.summary_damage_losses_district, name='summary_damage_losses_district'),
    url(r'^summary_damage_losses_province', views.summary_damage_losses_province, name='summary_damage_losses_province'),
    url(r'^summary_damage_losses_nationwide', views.summary_damage_losses_nationwide, name='summary_damage_losses_nationwide'),
    ]
