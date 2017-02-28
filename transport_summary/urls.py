from django.conf.urls import include, url
from .import views


urlpatterns = [
    url(r'^damage_losses/', include('transport_summary.damage_losses.urls', namespace='damage_losses')),
]