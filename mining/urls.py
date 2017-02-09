from django.conf.urls import include, url

urlpatterns = [
  url(r'^base_line/', include('mining.base_line.urls', namespace='base_line')),
  url(r'^damage_losses/', include('mining.damage_losses.urls', namespace='damage_losses')),

]
