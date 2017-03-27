from django.db import models
from incidents.models import IncidentReport
from settings.models import District, Province
from telecommunication.base_line.models import Ownership


class CompanyName(models.Model):
    company_name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.ForeignKey(Ownership, db_column='ownership', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'company_name'


# Table 2
class DlNumEmpDistrict(models.Model):
    firm = models.ForeignKey(CompanyName, db_column='firm', blank=True, null=True)
    num_emp_male = models.BigIntegerField(blank=True, null=True)
    mun_emp_female = models.BigIntegerField(blank=True, null=True)
    tot_emp = models.BigIntegerField(blank=True, null=True)
    num_clients = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_num_emp_district'


class DmgAstStructure(models.Model):
    dmg_val_replace = models.FloatField(blank=True, null=True)
    pdmg_val_repair = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    firm = models.ForeignKey(CompanyName, db_column='firm', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dmg_ast_structure'


class DmgAstEquipment(models.Model):
    dmg_val_replace = models.FloatField(blank=True, null=True)
    pdmg_val_repair = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    firm = models.ForeignKey(CompanyName, db_column='firm', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dmg_ast_equipment'


class DmgAstMachinery(models.Model):
    dmg_val_replace = models.FloatField(blank=True, null=True)
    pdmg_val_repair = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    firm = models.ForeignKey(CompanyName, db_column='firm', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dmg_ast_machinery'


class DmgAstVehicles(models.Model):
    dmg_val_replace = models.FloatField(blank=True, null=True)
    pdmg_val_repair = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    firm = models.ForeignKey(CompanyName, db_column='firm', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dmg_ast_vehicles'


class DmgAstOthers(models.Model):
    dmg_val_replace = models.FloatField(blank=True, null=True)
    pdmg_val_repair = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    firm = models.ForeignKey(CompanyName, db_column='firm', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dmg_ast_others'


class DlLosses(models.Model):
    year1_los = models.FloatField(blank=True, null=True)
    year2_los = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    firm = models.ForeignKey(CompanyName, db_column='firm', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_losses'























