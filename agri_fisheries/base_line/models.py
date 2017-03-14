from django.db import models
from settings.models import District, Province


class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='agrifish_bs_district',  blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"bd_session_keys'


# Table 1
class BsPeoFisheries(models.Model):
    fisheries = models.CharField(max_length=255, blank=True, null=True)
    num_families = models.BigIntegerField(blank=True, null=True)
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
        db_table = 'agri_fisheries\".\"bs_peo_fisheries'


# Table 2
class BifProduction(models.Model):
    types = models.CharField(max_length=255, blank=True, null=True)
    area_pub = models.FloatField(blank=True, null=True)
    area_pvt = models.FloatField(blank=True, null=True)
    avg_yield_pub = models.FloatField(blank=True, null=True)
    avg_yield_pvt = models.FloatField(blank=True, null=True)
    prodc_pub = models.FloatField(blank=True, null=True)
    prodc_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"bif_production'


class BifAstFequipment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    if_avg_replace_cost = models.FloatField(blank=True, null=True)
    if_avg_repair_cost = models.FloatField(blank=True, null=True)
    rf_avg_replace_cost = models.FloatField(blank=True, null=True)
    rf_avg_repair_cost = models.FloatField(blank=True, null=True)
    mf_avg_replace_cost = models.FloatField(blank=True, null=True)
    mf_avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"bif_ast_fequipment'


class BifAstOequipment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    if_avg_replace_cost = models.FloatField(blank=True, null=True)
    if_avg_repair_cost = models.FloatField(blank=True, null=True)
    rf_avg_replace_cost = models.FloatField(blank=True, null=True)
    rf_avg_repair_cost = models.FloatField(blank=True, null=True)
    mf_avg_replace_cost = models.FloatField(blank=True, null=True)
    mf_avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"bif_ast_oequipment'


class BifAstMachinery(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    if_avg_replace_cost = models.FloatField(blank=True, null=True)
    if_avg_repair_cost = models.FloatField(blank=True, null=True)
    rf_avg_replace_cost = models.FloatField(blank=True, null=True)
    rf_avg_repair_cost = models.FloatField(blank=True, null=True)
    mf_avg_replace_cost = models.FloatField(blank=True, null=True)
    mf_avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"bif_ast_machinery'


class BifAstStructures(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    if_avg_replace_cost = models.FloatField(blank=True, null=True)
    if_avg_repair_cost = models.FloatField(blank=True, null=True)
    rf_avg_replace_cost = models.FloatField(blank=True, null=True)
    rf_avg_repair_cost = models.FloatField(blank=True, null=True)
    mf_avg_replace_cost = models.FloatField(blank=True, null=True)
    mf_avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"bif_ast_structures'


class BifAstBuildings(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost_roof = models.FloatField(blank=True, null=True)
    avg_repair_cost_wall = models.FloatField(blank=True, null=True)
    avg_repair_cost_floor = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"bif_ast_buildings'


