from django.conf.urls import include, url

urlpatterns = [
    url(r'^base_line/', include('industry_services.base_line.urls', namespace='base_line')),
    url(r'^damage_losses/', include('industry_services.damage_losses.urls', namespace='damage_losses')),
]