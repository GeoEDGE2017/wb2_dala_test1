from django.conf.urls import url
from .import views

app_name = 'dashboard'

urlpatterns = [

    url(r'^$', views.index,name='index'),
    url(r'^index$', views.index,name='index'),
    url(r'^health_main$', views.health_main,name='health_main'),
	url(r'^mining_main$', views.mining_main,name='mining_main'),
	url(r'^othergov_main$', views.othergov_main,name='othergov_main'),
	url(r'^education_main$', views.education_main,name='education_main'),
    url(r'^logout/$',
        'django.contrib.auth.views.logout', {'next_page': '/admin/login/'}, name='logout'
        ),

]
