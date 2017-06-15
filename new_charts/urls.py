from django.conf.urls import url

from . import views

app_name = 'new_charts'

urlpatterns = [
    url(r'^test_charts', views.test_charts, name='test_charts'),
    url(r'^', views.housing_charts, name='housing_charts'),
]
