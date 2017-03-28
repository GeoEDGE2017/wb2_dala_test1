from __future__ import unicode_literals
from django.db import models
from settings.models import District


class Firm(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=50, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bs_firm_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"firm'


class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"bd_session_keys'


class BmaAmMin(models.Model):
    minerals = models.CharField(max_length=255, blank=True, null=True)
    avg_per_year = models.FloatField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_BmaAmMin_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"bma_am_min'


class BmaAmMinNum(models.Model):
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_BmaAmMinNum_district',  blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"bma_am_min_num'


class BmaImFn(models.Model):
    name_min_outputs = models.CharField(max_length=255, blank=True, null=True)
    avg_per_year = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_BmaImFn_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=12, blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"bma_im_fn'


class BmaImFirmNum(models.Model):
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_BmaImFirmNum_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"bma_im_firm_num'
