from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^index_chart$', views.index_chart, name='index_chart'),
    url(r'^chart_tabel8$', views.chart_tabel8, name='chart_tabel8'),
    url(r'^chart_tabel9$', views.chart_tabel9, name='chart_tabel9'),
    url(r'^chart_tabel10$', views.chart_tabel10, name='chart_tabel10'),

    # fetch data
    url(r'^dl_fetch_chart_data$', views.dl_fetch_chart_data, name='dl_fetch_chart_data'),

    # education
    url(r'^education_summary$', views.education_summary, name='education_summary'),

]
