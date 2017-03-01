from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^base_line/', include('agri_agrarian.base_line.urls', namespace='base_line')),
    url(r'^damage_losses/', include('agri_agrarian.damage_losses.urls', namespace='damage_losses')),
]