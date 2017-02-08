from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^base_line/', include('other_govn_services.base_line.urls', namespace='base_line')),
    url(r'^damage_losses/', include('other_govn_services.damage_losses.urls', namespace='damage_losses')),
]