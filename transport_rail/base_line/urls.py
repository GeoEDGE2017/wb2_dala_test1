from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^bs_inc_ast_rail_cmpy', views.bs_inc_ast_rail_cmpy, name='bs_inc_ast_rail_cmpy'),
    url(r'^fetch_company_entities', views.fetch_company_entities, name='fetch_company_entities'),
    url(r'^add_company_entity', views.add_company_entity, name='add_company_entity'),

]
