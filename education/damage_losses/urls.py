from django.conf.urls import url
from .import views


urlpatterns = [

    url(r'^dl_govn_edu_facilities$', views.dl_govn_edu_facilities, name='dl_govn_edu_facilities'),
    url(r'^dl_pvt_edu_facilities$', views.dl_pvt_edu_facilities, name='dl_pvt_edu_facilities'),
    url(r'^dl_edu_district$', views.dl_edu_district, name='dl_edu_district'),
    url(r'^dl_edu_province$', views.dl_edu_province, name='dl_edu_province'),
    url(r'^dl_edu_nationwide$', views.dl_edu_nationwide, name='dl_edu_nationwide'),

    url(r'^fetch_schools$', views.fetch_schools, name='fetch_schools'),
    url(r'^dl_fetch_school_disagtn$', views.dl_fetch_school_disagtn, name='dl_fetch_school_disagtn'),
]
