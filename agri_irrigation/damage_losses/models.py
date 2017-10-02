from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', related_name='airr_dl_incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='airr_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='airr_dl_district', blank=True, null=True)
    bs_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_session_keys'


# Table 3
class DlMajorTanks(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    partially_damaged = models.FloatField(blank=True, null=True)
    totally_destroyed = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_major_tanks'


class DlMediumTanks(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    partially_damaged = models.FloatField(blank=True, null=True)
    totally_destroyed = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_medium_tanks'


class DlMinorTanks(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    partially_damaged = models.FloatField(blank=True, null=True)
    totally_destroyed = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_minor_tanks'


class DlAnicuts(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    partially_damaged = models.FloatField(blank=True, null=True)
    totally_destroyed = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_anicuts'


class DlOtherStructures(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    partially_damaged = models.FloatField(blank=True, null=True)
    totally_destroyed = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_other_structures'


class DlRiverEmbankmnt(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    partially_damaged = models.FloatField(blank=True, null=True)
    totally_destroyed = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_river_embankmnt'


class DlBuildings(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    building = models.CharField(max_length=255, blank=True, null=True)
    part_damaged_num = models.BigIntegerField(blank=True, null=True)
    part_damaged_roof = models.FloatField(blank=True, null=True)
    part_damaged_wall = models.FloatField(blank=True, null=True)
    part_damaged_floor = models.FloatField(blank=True, null=True)
    tot_destroyed_num = models.BigIntegerField(blank=True, null=True)
    tot_destroyed_area = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_buildings'


class DlLosMajorTanks(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    high_operation_cost = models.FloatField(blank=True, null=True)
    other_unexpected_expenses = models.FloatField(blank=True, null=True)
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_major_tanks'


class DlLosMediumTanks(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    high_operation_cost = models.FloatField(blank=True, null=True)
    other_unexpected_expenses = models.FloatField(blank=True, null=True)
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_medium_tanks'


class DlLosMinorTanks(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    high_operation_cost = models.FloatField(blank=True, null=True)
    other_unexpected_expenses = models.FloatField(blank=True, null=True)
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_minor_tanks'


class DlLosAnicuts(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    high_operation_cost = models.FloatField(blank=True, null=True)
    other_unexpected_expenses = models.FloatField(blank=True, null=True)
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_anicuts'


class DlLosOther(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    high_operation_cost = models.FloatField(blank=True, null=True)
    other_unexpected_expenses = models.FloatField(blank=True, null=True)
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_other'


# Table 4
class DlMajorTanksDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_major_tanks_district'


class DlLosMajorTanksDistrict(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_major_tanks_district'


class DlMediumTanksDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_medium_tanks_district'


class DlLosMediumTanksDistrict(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_medium_tanks_district'


class DlMinorTanksDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_minor_tanks_district'


class DlLosMinorTanksDistrict(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_minor_tanks_district'


class DlAnicutsDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_anicuts_district'


class DlLosAnicutsDistrict(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_anicuts_district'


class DlOtherStructuresDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_other_structures_district'


class DlLosOtherDistrict(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_other_district'


class DlRiverEmbankmntDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_river_embankmnt_district'


class DlBuildingsDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_buildings_district'


# Table_6
class DlMajorTanksNational(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_major_tanks_national'


class DlLosMajorTanksNational(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_major_tanks_national'


class DlMediumTanksNational(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_medium_tanks_national'


class DlLosMediumTanksNational(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_medium_tanks_national'


class DlMinorTanksNational(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_minor_tanks_national'


class DlLosMinorTanksNational(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_minor_tanks_national'


class DlAnicutsNational(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_anicuts_national'


class DlLosAnicutsNational(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_anicuts_national'


class DlOtherStructuresNational(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_other_structures_national'


class DlLosOtherNational(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    irrigation_assets = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_los_other_national'


class DlRiverEmbankmntNational(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_river_embankmnt_national'


class DlIrrigatnDmgNational(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_irrigatn_dmg_national'


class DlIrrigatnDmgDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_irrigatn_dmg_district'


class DlIrrigatnLosDistrict(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_irrigatn_los_district'


class DlIrrigatnLosDistrictNew(models.Model):
    total_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"dl_irrigatn_los_district_new'
