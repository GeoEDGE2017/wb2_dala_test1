from django.conf.urls import include, url

urlpatterns = [
  url(r'^base_line/', include('transport_water.base_line.urls', namespace='base_line')),
  url(r'^damage_losses/', include('transport_water.damage_losses.urls', namespace='damage_losses')),

]
