from django.db import models
from settings.models import District


class CompanyName(models.Model):
    company_name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'telecommunication\".\"company_name'


class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='tel_bs_district', blank=True, null=True)
    company = models.ForeignKey(CompanyName, db_column='company', related_name='tel_company', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'telecommunication\".\"bd_session_keys'


class Ownership(models.Model):
    ownership = models.CharField(max_length=255, blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'telecommunication\".\"ownership'


# Table 1
class BsTelCompany(models.Model):
    fixed_voice = models.NullBooleanField()
    fixed_tv = models.NullBooleanField()
    fixed_data = models.NullBooleanField()
    mobile_voice = models.NullBooleanField()
    mobile_data = models.NullBooleanField()
    company = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    company_name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'telecommunication\".\"bs_tel_company'
