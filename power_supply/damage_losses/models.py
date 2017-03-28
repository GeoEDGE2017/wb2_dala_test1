from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport


class CebNumEmp(models.Model):
    num_male = models.BigIntegerField(blank=True, null=True)
    num_female = models.BigIntegerField(blank=True, null=True)
    tot_emp = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)

    district = models.ForeignKey(District,  db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,  db_column='incident', blank=True, null=True)

    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"ceb_num_emp'


class CebNumCusAff(models.Model):
    num_domestic = models.BigIntegerField(blank=True, null=True)
    num_industrial = models.BigIntegerField(blank=True, null=True)
    num_commercial = models.BigIntegerField(blank=True, null=True)
    num_other = models.BigIntegerField(blank=True, null=True)
    num_total = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,  db_column='incident', blank=True, null=True)

    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"ceb_num_cus_aff'


class CebDmgAstGeneration(models.Model):
    num_dst_ast = models.FloatField(blank=True, null=True)
    tot_replace_cost = models.FloatField(blank=True, null=True)
    num_dmg_ast = models.FloatField(blank=True, null=True)
    to_repair_cost = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)

    district = models.ForeignKey(District,  db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,  db_column='incident', blank=True, null=True)

    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"ceb_dmg_ast_generation'


class CebDmgAstTransmision(models.Model):
    num_dst_ast = models.FloatField(blank=True, null=True)
    tot_replace_cost = models.FloatField(blank=True, null=True)
    num_dmg_ast = models.FloatField(blank=True, null=True)
    to_repair_cost = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,  db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,  db_column='incident', blank=True, null=True)

    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"ceb_dmg_ast_transmision'


class CebDmgAstDistribution(models.Model):
    num_dst_ast = models.FloatField(blank=True, null=True)
    tot_replace_cost = models.FloatField(blank=True, null=True)
    num_dmg_ast = models.FloatField(blank=True, null=True)
    to_repair_cost = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"ceb_dmg_ast_distribution'


class CebDmgAstStructures(models.Model):
    num_dst_ast = models.FloatField(blank=True, null=True)
    tot_replace_cost = models.FloatField(blank=True, null=True)
    num_dmg_ast = models.FloatField(blank=True, null=True)
    to_repair_cost = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"ceb_dmg_ast_structures'


class CebLosAstIncome(models.Model):
    avg_income = models.FloatField(blank=True, null=True)
    reduction_y1 = models.FloatField(blank=True, null=True)
    reduction_y2 = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"ceb_los_ast_income'


class CebLosAstOther(models.Model):
    avg_income = models.FloatField(blank=True, null=True)
    reduction_y1 = models.FloatField(blank=True, null=True)
    reduction_y2 = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"ceb_los_ast_other'


class CebDmgAstOffEquipment(models.Model):
    num_dst_ast = models.FloatField(blank=True, null=True)
    tot_replace_cost = models.FloatField(blank=True, null=True)
    num_dmg_ast = models.FloatField(blank=True, null=True)
    to_repair_cost = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'power_supply\".\"ceb_dmg_ast_off_equipment'
