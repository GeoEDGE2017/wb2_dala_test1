from django.conf.urls import url

from .import views

app_name = 'damage_losses'

urlpatterns = [

 url(r'^dl_water_transportation$', views.dl_water_transportation, name='dl_water_transportation'),

]
