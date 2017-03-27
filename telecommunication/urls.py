from django.conf.urls import include, url


urlpatterns = [
    url(r'^base_line/', include('telecommunication.base_line.urls', namespace='base_line')),
    url(r'^damage_losses/', include('telecommunication.damage_losses.urls', namespace='damage_losses')),
]