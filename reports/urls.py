from django.conf.urls import url

from . import views

app_name = 'reports'

urlpatterns = [
    url(r'^index_report$', views.index_report, name='index_report'),
    url(r'^index_chart$', views.index_chart, name='index_chart'),
    url(r'^health_summery_damageloss_dis_report$', views.health_summery_damageloss_dis_report, name='health_summery_damageloss_dis_report'),
    url(r'^health_summery_damageloss_national_report$', views.health_summery_damageloss_national_report, name='health_summery_damageloss_national_report'),
    url(r'^health_summery_damageloss_province_report$', views.health_summery_damageloss_province_report, name='health_summery_damageloss_province_report'),

    # fetch data
    url(r'^dl_fetch_report_data$', views.dl_fetch_report_data, name='dl_fetch_report_data'),

]
