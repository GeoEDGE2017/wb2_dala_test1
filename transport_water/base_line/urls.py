from django.conf.urls import url

from .import views

app_name = 'base_line'

urlpatterns = [

 url(r'^bs_ast_transport_water$', views.bs_ast_transport_water, name='bs_ast_transport_water'),

]
