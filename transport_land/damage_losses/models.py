from django.db import models
from settings.models import District, Province


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='tl_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='tl_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_session_keys'
