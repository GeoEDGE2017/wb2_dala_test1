from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^base_line/', include('transport_rail.base_line.urls', namespace='base_line')),
    url(r'^damage_losses/', include('transport_rail.damage_losses.urls', namespace='damage_losses')),
]
