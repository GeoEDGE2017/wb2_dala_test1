from django.conf.urls import include, url


urlpatterns = [
    url(r'^base_line/', include('agri_livestock.base_line.urls', namespace='base_line')),
    url(r'^damage_losses/', include('agri_livestock.damage_losses.urls', namespace='damage_losses')),
]