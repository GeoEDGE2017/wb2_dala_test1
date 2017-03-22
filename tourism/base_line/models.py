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
    district = models.ForeignKey(District,  db_column='district', related_name='to_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"bd_session_keys'

class BsCultSites(models.Model):
    site = models.CharField(max_length=255, blank=True, null=True)
    num_bis_private = models.BigIntegerField(blank=True, null=True)
    num_bis_public = models.BigIntegerField(blank=True, null=True)
    num_emp_male = models.BigIntegerField(blank=True, null=True)
    num_empfemale = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"bs_cult_sites'


class BsNatFormation(models.Model):
    site = models.CharField(max_length=255, blank=True, null=True)
    num_bis_private = models.BigIntegerField(blank=True, null=True)
    num_bis_public = models.BigIntegerField(blank=True, null=True)
    num_emp_male = models.BigIntegerField(blank=True, null=True)
    num_empfemale = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"bs_nat_formation'


class BsTouBusiness(models.Model):
    business = models.CharField(max_length=255, blank=True, null=True)
    num_bis_private = models.BigIntegerField(blank=True, null=True)
    num_bis_public = models.BigIntegerField(blank=True, null=True)
    num_emp_male = models.BigIntegerField(blank=True, null=True)
    num_empfemale = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"bs_tou_business'


class Firm(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=50, blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"firm'


class InfType(models.Model):
    infrastructure = models.CharField(max_length=255, blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"inf_type'


class Infrastructure(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=50, blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"infrastructure'


class Ownership(models.Model):
    ownership = models.CharField(max_length=255, blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"ownership'


class TouBusiness(models.Model):
    business = models.CharField(max_length=255, blank=True, null=True)
    id = models.BigIntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"tou_business'
