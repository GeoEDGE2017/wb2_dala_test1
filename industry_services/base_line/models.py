from __future__ import unicode_literals

from django.db import models
from settings.models import District
from incidents.models import IncidentReport


class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ind_ser_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"bd_session_keys'


class BsFrmNumBusIndustry(models.Model):
    industry = models.CharField(max_length=255, blank=True, null=True)
    num_micro = models.BigIntegerField(blank=True, null=True)
    num_small = models.BigIntegerField(blank=True, null=True)
    num_medium = models.BigIntegerField(blank=True, null=True)
    num_large = models.BigIntegerField(blank=True, null=True)
    num_male = models.BigIntegerField(blank=True, null=True)
    num_female = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"bs_frm_num_bus_industry'


class BsFrmNumBusServices(models.Model):
    service = models.CharField(max_length=255, blank=True, null=True)
    num_micro = models.BigIntegerField(blank=True, null=True)
    num_small = models.BigIntegerField(blank=True, null=True)
    num_medium = models.BigIntegerField(blank=True, null=True)
    num_large = models.BigIntegerField(blank=True, null=True)
    num_male = models.BigIntegerField(blank=True, null=True)
    num_female = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,  db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"bs_frm_num_bus_services'


class BsNumBusSector(models.Model):
    components = models.CharField(max_length=255, blank=True, null=True)
    num_businesses = models.BigIntegerField(blank=True, null=True)
    avg_num_emp_male = models.BigIntegerField(blank=True, null=True)
    avg_num_emp_female = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"bs_num_bus_sector'


class BusinessClassification(models.Model):
    classification = models.CharField(max_length=255, blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"business_classification'


class FormalFirmTypes(models.Model):
    firm_type = models.CharField(max_length=255, blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"formal_firm_types'


class FrmFirm(models.Model):
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    firm_name = models.CharField(max_length=255, blank=True, null=True)
    firm_type = models.ForeignKey(FormalFirmTypes, db_column='firm_type', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=3000, blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    classification = models.ForeignKey(BusinessClassification,  db_column='classification', blank=True, null=True)
    num_male_emp = models.BigIntegerField(blank=True, null=True)
    num_female_emp = models.BigIntegerField(blank=True, null=True)
    tot_num_emp = models.BigIntegerField(blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"frm_firm'


class BsFrmBusIndustry(models.Model):
    industry = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"bs_frm_bus_industry'


class BsFrmBusServices(models.Model):
    service = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"bs_frm_bus_services'


