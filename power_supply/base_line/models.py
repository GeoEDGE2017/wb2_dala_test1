from django.db import models

# Create your models here.
from settings.models import District


class PvtPwPrdTypes(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"pvt_pw_prd_types'


class PvtPwProducers(models.Model):

    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=50, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    prd_type = models.ForeignKey(PvtPwPrdTypes, db_column='prd_type', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"pvt_pw_producers'


class BsPwGenFirm(models.Model):
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=3000, blank=True, null=True)
    num_hydro = models.BigIntegerField(blank=True, null=True)
    num_coal = models.BigIntegerField(blank=True, null=True)
    num_diesel = models.BigIntegerField(blank=True, null=True)
    num_other = models.BigIntegerField(blank=True, null=True)
    tot_capacity = models.FloatField(blank=True, null=True)
    avg_income = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"bs_pw_gen_firm'
