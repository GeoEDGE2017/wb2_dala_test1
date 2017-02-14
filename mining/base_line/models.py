from __future__ import unicode_literals
from django.db import models
from settings.models import District


class Ownership(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ownership'


class Department(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.ForeignKey(Ownership, db_column='ownership', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'department'


class Firm(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'firm'


class BmaAmMin(models.Model):
    minerals = models.CharField(max_length=255, blank=True, null=True)
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    avg_per_year = models.FloatField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    firm_id = models.ForeignKey(Firm, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bma_am_min'


class BmaAmMinNum(models.Model):
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bma_am_min_num'


class BmaImFn(models.Model):
    name_min_outputs = models.CharField(max_length=255, blank=True, null=True)
    avg_per_year = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=12, blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)

    class Meta:
        managed = False
        db_table = 'bma_im_fn'


class BmaImFirmNum(models.Model):
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)

    class Meta:
        managed = False
        db_table = 'bma_im_firm_num'
