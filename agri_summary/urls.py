from django.conf.urls import include, url


urlpatterns = [
    url(r'^damage_losses/', include('agri_summary.damage_losses.urls', namespace='damage_losses')),
]