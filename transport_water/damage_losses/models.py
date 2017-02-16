from __future__ import unicode_literals

from django.db import models
from settings.models import District,Province
from incidents.models import IncidentReport


# Create your models here.

class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='tw_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='tw_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_water\".\"dl_session_keys'


class DlWaterDmgBuildings(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    tdestroyed_num = models.BigIntegerField(blank=True, null=True)
    tdestroyed_smeters = models.FloatField(blank=True, null=True)
    pdamaged_num = models.BigIntegerField(blank=True, null=True)
    pdamaged_roof = models.FloatField(blank=True, null=True)
    wall = models.FloatField(blank=True, null=True)
    floor = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_water\".\"dl_water_dmg_buildings'


class DlWaterDmgEquipment(models.Model):
    num_tdestroyed_public = models.BigIntegerField(blank=True, null=True)
    num_tdestroyed_private = models.BigIntegerField(blank=True, null=True)
    num_pdestroyed_public = models.BigIntegerField(blank=True, null=True)
    num_pdestroyed_private = models.BigIntegerField(blank=True, null=True)
    tot_dmg_private = models.FloatField(blank=True, null=True)
    tot_dmg_public = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_water\".\"dl_water_dmg_equipment'


class DlWaterDmgMaterials(models.Model):
    num_tdestroyed_public = models.BigIntegerField(blank=True, null=True)
    num_tdestroyed_private = models.BigIntegerField(blank=True, null=True)
    num_pdestroyed_public = models.BigIntegerField(blank=True, null=True)
    num_pdestroyed_private = models.BigIntegerField(blank=True, null=True)
    tot_dmg_private = models.FloatField(blank=True, null=True)
    tot_dmg_public = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_water\".\"dl_water_dmg_materials'


class DlWaterDmgStructures(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_tdestroyed_num = models.BigIntegerField(blank=True, null=True)
    num_tdestroyed_meters = models.FloatField(blank=True, null=True)
    num_pdestroyed_num = models.BigIntegerField(blank=True, null=True)
    num_pdestroyed_meters = models.BigIntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_water\".\"dl_water_dmg_structures'


class DlWaterDmgWcrafts(models.Model):
    num_tdestroyed_public = models.BigIntegerField(blank=True, null=True)
    num_tdestroyed_private = models.BigIntegerField(blank=True, null=True)
    num_pdestroyed_public = models.BigIntegerField(blank=True, null=True)
    num_pdestroyed_private = models.BigIntegerField(blank=True, null=True)
    tot_dmg_private = models.FloatField(blank=True, null=True)
    tot_dmg_public = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_water\".\"dl_water_dmg_wcrafts'


class DlWaterLosFi(models.Model):
    year_1_pub = models.FloatField(blank=True, null=True)
    year_1_pvt = models.FloatField(blank=True, null=True)
    year_2_pub = models.FloatField(blank=True, null=True)
    year_2_pvt = models.FloatField(blank=True, null=True)
    tot_los_pub = models.FloatField(blank=True, null=True)
    tot_los_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    type_los = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_water\".\"dl_water_los_fi'


class DlWaterLosOther(models.Model):
    year_1_pub = models.FloatField(blank=True, null=True)
    year_1_pvt = models.FloatField(blank=True, null=True)
    year_2_pub = models.FloatField(blank=True, null=True)
    year_2_pvt = models.FloatField(blank=True, null=True)
    tot_los_pub = models.FloatField(blank=True, null=True)
    tot_los_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    type_los = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_water\".\"dl_water_los_other'
