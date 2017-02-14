from django.db import models
from django.db import models
from settings.models import District,Province
from incidents.models import IncidentReport

# Create your models here.
# transport_rail


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='tr_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='tr_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_rail.dl_session_keys'
        app_label = 'transport_rail.damage_losses'


class DlMovingAstLoss(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    no_of_tot_destroyed = models.FloatField(blank=True, null=True)
    no_of_partially_damaged = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_moving_ast_loss'


class DlEquipMachineryAstLoss(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    no_of_tot_destroyed = models.FloatField(blank=True, null=True)
    no_of_partially_damaged = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_equip_machinery_ast_loss'


class DlMatSuppliesAstLoss(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    no_of_tot_destroyed = models.FloatField(blank=True, null=True)
    no_of_partially_damaged = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_mat_supplies_ast_loss'


class DlStructuresAstLoss(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    no_of_tot_destroyed = models.FloatField(blank=True, null=True)
    no_of_partially_damaged = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_structures_ast_loss'


class DlBuildingAstLoss(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    no_of_tot_destroyed = models.FloatField(blank=True, null=True)
    no_of_tot_destroyed_sqr_meters = models.FloatField(blank=True, null=True)
    no_of_partially_damaged = models.FloatField(blank=True, null=True)
    no_of_partially_damaged_roof = models.FloatField(blank=True, null=True)
    no_of_partially_damaged_wall = models.FloatField(blank=True, null=True)
    no_of_partially_damaged_floor = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_building_ast_loss'
