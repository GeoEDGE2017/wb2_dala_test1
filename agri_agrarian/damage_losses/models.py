from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport


# Table 4

class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='ag_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ag_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dl_session_keys'


class DcpfFarmEquipment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_dest_pvt = models.BigIntegerField(blank=True, null=True)
    num_dmg_pub = models.BigIntegerField(blank=True, null=True)
    num_dmg_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dcpf_farm_equipment'


class DcpfSeasonalCrops(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_dest_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dcpf_seasonal_crops'


class DcpfPlantnCrops(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_dest_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dcpf_plantn_crops'


class DcpfExportCrops(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_dest_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dcpf_export_crops'


class DcpfForestry(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_dest_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dcpf_forestry'


class DcpfOther(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_dest_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dcpf_other'


class DcpfStocks(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_dest_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dcpf_stocks'


# Table 5
class DsorDestStructures(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_dest_pvt = models.BigIntegerField(blank=True, null=True)
    tot_dest_pub = models.FloatField(blank=True, null=True)
    tot_dest_pvt = models.FloatField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dsor_dest_structures'


class DsorDmgPubStructure(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_part_dmg = models.BigIntegerField(blank=True, null=True)
    tot_dmg_roof = models.BigIntegerField(blank=True, null=True)
    tot_dmg_walls = models.FloatField(blank=True, null=True)
    tot_dmg_floors = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dsor_dmg_pub_structure'


class DsorDmgPvtStructures(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_part_dmg = models.BigIntegerField(blank=True, null=True)
    tot_dmg_roof = models.BigIntegerField(blank=True, null=True)
    tot_dmg_walls = models.FloatField(blank=True, null=True)
    tot_dmg_floors = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dsor_dmg_pvt_structures'


class DsorDmgPvtOequipment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_dest_pvt = models.BigIntegerField(blank=True, null=True)
    num_dmg_pub = models.BigIntegerField(blank=True, null=True)
    num_dmg_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dsor_dmg_pvt_oequipment'


class DsorDmgPvtMachinery(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_dest_pvt = models.BigIntegerField(blank=True, null=True)
    num_dmg_pub = models.BigIntegerField(blank=True, null=True)
    num_dmg_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dsor_dmg_pvt_machinery'


# Table 6
class DildSeasonalCrops(models.Model):
    seasonal_crops = models.CharField(max_length=255, blank=True, null=True)
    new_plant_pub = models.FloatField(blank=True, null=True)
    new_plant_pvt = models.FloatField(blank=True, null=True)
    mid_stage_pub = models.FloatField(blank=True, null=True)
    mid_stage_pvt = models.FloatField(blank=True, null=True)
    harvest_stage_pub = models.FloatField(blank=True, null=True)
    harvest_stage_pvt = models.FloatField(blank=True, null=True)
    invest_los_pub = models.FloatField(blank=True, null=True)
    invest_los_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dild_seasonal_crops'


class DildPlantnCrops(models.Model):
    plantn_crops = models.CharField(max_length=255, blank=True, null=True)
    new_plant_pub = models.FloatField(blank=True, null=True)
    new_plant_pvt = models.FloatField(blank=True, null=True)
    mid_stage_pub = models.FloatField(blank=True, null=True)
    mid_stage_pvt = models.FloatField(blank=True, null=True)
    harvest_stage_pub = models.FloatField(blank=True, null=True)
    harvest_stage_pvt = models.FloatField(blank=True, null=True)
    invest_los_pub = models.FloatField(blank=True, null=True)
    invest_los_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dild_plantn_crops'


class DildExportCrops(models.Model):
    export_crops = models.CharField(max_length=255, blank=True, null=True)
    new_plant_pub = models.FloatField(blank=True, null=True)
    new_plant_pvt = models.FloatField(blank=True, null=True)
    mid_stage_pub = models.FloatField(blank=True, null=True)
    mid_stage_pvt = models.FloatField(blank=True, null=True)
    harvest_stage_pub = models.FloatField(blank=True, null=True)
    harvest_stage_pvt = models.FloatField(blank=True, null=True)
    invest_los_pub = models.FloatField(blank=True, null=True)
    invest_los_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dild_export_crops'


class DildForestry(models.Model):
    forestry = models.CharField(max_length=255, blank=True, null=True)
    new_plant_pub = models.FloatField(blank=True, null=True)
    new_plant_pvt = models.FloatField(blank=True, null=True)
    mid_stage_pub = models.FloatField(blank=True, null=True)
    mid_stage_pvt = models.FloatField(blank=True, null=True)
    harvest_stage_pub = models.FloatField(blank=True, null=True)
    harvest_stage_pvt = models.FloatField(blank=True, null=True)
    invest_los_pub = models.FloatField(blank=True, null=True)
    invest_los_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dild_forestry'


# Table 7
class PldySeasonalCrops(models.Model):
    seasonal_crops = models.CharField(max_length=255, blank=True, null=True)
    redctn_year_1_pub = models.FloatField(blank=True, null=True)
    redctn_year_1_pvt = models.FloatField(blank=True, null=True)
    redctn_year_2_pub = models.FloatField(blank=True, null=True)
    redctn_year_2_pvt = models.FloatField(blank=True, null=True)
    prod_year_1_pub = models.FloatField(blank=True, null=True)
    prod_year_1_pvt = models.FloatField(blank=True, null=True)
    prod_year_2_pub = models.FloatField(blank=True, null=True)
    prod_year_2_pvt = models.FloatField(blank=True, null=True)
    tot_prod_pub = models.FloatField(blank=True, null=True)
    tot_prod_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"pldy_seasonal_crops'


class PldyPlantnCrops(models.Model):
    plantn_crops = models.CharField(max_length=255, blank=True, null=True)
    redctn_year_1_pub = models.FloatField(blank=True, null=True)
    redctn_year_1_pvt = models.FloatField(blank=True, null=True)
    redctn_year_2_pub = models.FloatField(blank=True, null=True)
    redctn_year_2_pvt = models.FloatField(blank=True, null=True)
    prod_year_1_pub = models.FloatField(blank=True, null=True)
    prod_year_1_pvt = models.FloatField(blank=True, null=True)
    prod_year_2_pub = models.FloatField(blank=True, null=True)
    prod_year_2_pvt = models.FloatField(blank=True, null=True)
    tot_prod_pub = models.FloatField(blank=True, null=True)
    tot_prod_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"pldy_plantn_crops'


class PldyExportCrops(models.Model):
    export_crops = models.CharField(max_length=255, blank=True, null=True)
    redctn_year_1_pub = models.FloatField(blank=True, null=True)
    redctn_year_1_pvt = models.FloatField(blank=True, null=True)
    redctn_year_2_pub = models.FloatField(blank=True, null=True)
    redctn_year_2_pvt = models.FloatField(blank=True, null=True)
    prod_year_1_pub = models.FloatField(blank=True, null=True)
    prod_year_1_pvt = models.FloatField(blank=True, null=True)
    prod_year_2_pub = models.FloatField(blank=True, null=True)
    prod_year_2_pvt = models.FloatField(blank=True, null=True)
    tot_prod_pub = models.FloatField(blank=True, null=True)
    tot_prod_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"pldy_export_crops'


class PldyForestry(models.Model):
    forestry = models.CharField(max_length=255, blank=True, null=True)
    redctn_year_1_pub = models.FloatField(blank=True, null=True)
    redctn_year_1_pvt = models.FloatField(blank=True, null=True)
    redctn_year_2_pub = models.FloatField(blank=True, null=True)
    redctn_year_2_pvt = models.FloatField(blank=True, null=True)
    prod_year_1_pub = models.FloatField(blank=True, null=True)
    prod_year_1_pvt = models.FloatField(blank=True, null=True)
    prod_year_2_pub = models.FloatField(blank=True, null=True)
    prod_year_2_pvt = models.FloatField(blank=True, null=True)
    tot_prod_pub = models.FloatField(blank=True, null=True)
    tot_prod_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"pldy_forestry'


class PldyOther(models.Model):
    other_products = models.CharField(max_length=255, blank=True, null=True)
    redctn_year_1_pub = models.FloatField(blank=True, null=True)
    redctn_year_1_pvt = models.FloatField(blank=True, null=True)
    redctn_year_2_pub = models.FloatField(blank=True, null=True)
    redctn_year_2_pvt = models.FloatField(blank=True, null=True)
    prod_year_1_pub = models.FloatField(blank=True, null=True)
    prod_year_1_pvt = models.FloatField(blank=True, null=True)
    prod_year_2_pub = models.FloatField(blank=True, null=True)
    prod_year_2_pvt = models.FloatField(blank=True, null=True)
    tot_prod_pub = models.FloatField(blank=True, null=True)
    tot_prod_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"pldy_other'


class PldyOtherLos(models.Model):
    other_los = models.CharField(max_length=255, blank=True, null=True)
    year_1_pub = models.FloatField(blank=True, null=True)
    year_1_pvt = models.FloatField(blank=True, null=True)
    year_2_pub = models.FloatField(blank=True, null=True)
    year_2_pvt = models.FloatField(blank=True, null=True)
    tot_pub = models.FloatField(blank=True, null=True)
    tot_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"pldy_other_los'

# Table 9


class DsorDmgLosProvince(models.Model):
    dmg_los_pub = models.CharField(max_length=255, blank=True, null=True)
    dmg_los_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dsor_dmg_los_province'


class DsorLosYear1Province(models.Model):
    dmg_los_pub = models.CharField(max_length=255, blank=True, null=True)
    dmg_los_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dsor_los_year1_province'


class DsorLosYear2Province(models.Model):
    dmg_los_pub = models.CharField(max_length=255, blank=True, null=True)
    dmg_los_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dsor_los_year2_province'

# Tbale 10

class DsorDmgLosNational(models.Model):
    dmg_los_pub = models.CharField(max_length=255, blank=True, null=True)
    dmg_los_pvt = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dsor_dmg_los_national'


class DsorLosYear1National(models.Model):
    dmg_los_pub = models.CharField(max_length=255, blank=True, null=True)
    dmg_los_pvt = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dsor_los_year1_national'


class DsorLosYear2National(models.Model):
    dmg_los_pub = models.CharField(max_length=255, blank=True, null=True)
    dmg_los_pvt = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"dsor_los_year2_national'
