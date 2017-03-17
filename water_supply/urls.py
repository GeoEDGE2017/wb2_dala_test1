from django.conf.urls import include, url

urlpatterns = [
  url(r'^base_line/', include('water_supply.base_line.urls', namespace='base_line')),
  url(r'^damage_losses/', include('water_supply.damage_losses.urls', namespace='damage_losses')),

]
