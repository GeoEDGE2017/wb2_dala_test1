from django.db import models

# Create your models here.
from settings.models import District


class PvtPwPrdTypes(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'pvt_pw_prd_types'


class PvtPwProducers(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=50, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    prd_type = models.ForeignKey(PvtPwPrdTypes, models.DO_NOTHING, db_column='prd_type', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'pvt_pw_producers'
