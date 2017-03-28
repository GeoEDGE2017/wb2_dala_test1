from django.conf.urls import include, url


urlpatterns = [
    url(r'^base_line/', include('power_supply.base_line.urls', namespace='base_line')),
    url(r'^damage_losses/', include('power_supply.damage_losses.urls', namespace='damage_losses')),
]
