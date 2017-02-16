from django.db import models
from settings.models import District, Province


class Ownership(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_govn_services\".\"ownership'


class Department(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.ForeignKey(Ownership, db_column='ownership', related_name='mi_Department_ownership', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district',  related_name='mi_Department_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_govn_services\".\"department'


class BcsMachinery(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_rep_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='oth_BcsMachinery_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_govn_services\".\"bcs_machinery'


class BcsOfficeEquipment(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_rep_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='oth_BcsOfficeEquipment_district',  blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_govn_services\".\"bcs_office_equipment'


class BcsStructure(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_rep_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost_roof = models.FloatField(blank=True, null=True)
    avg_repair_cost_wall = models.FloatField(blank=True, null=True)
    avg_repair_cost_flooring = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='oth_BcsStructure_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_govn_services\".\"bcs_structure'


