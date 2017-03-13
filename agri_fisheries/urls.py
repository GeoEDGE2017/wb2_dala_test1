from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^base_line/', include('agri_fisheries.base_line.urls', namespace='base_line')),
    url(r'^damage_losses/', include('agri_fisheries.damage_losses.urls', namespace='damage_losses')),
]