from django.db import models
from settings.models import District

# Create your models here.


class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='tl_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bd_session_keys'


class BiaGacLandMachinery(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bia_gac_land_machinery'


class BiaGacLandOequipment(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bia_gac_land_oequipment'


class BiaGacLandPbuilding(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_repair_cost_floor_1 = models.FloatField(blank=True, null=True)
    avg_repair_cost_floor_2_3 = models.FloatField(blank=True, null=True)
    avg_repair_cost_floor_more_3 = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bia_gac_land_pbuilding'


class BiaGacLandStructure(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bia_gac_land_structure'


class BsGtlAstBcompanies(models.Model):
    public = models.BigIntegerField(blank=True, null=True)
    private = models.BigIntegerField(blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    bus_companies = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bs_gtl_ast_bcompanies'


class BsGtlAstPvehicles(models.Model):
    private = models.BigIntegerField(blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    private_vehicles = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bs_gtl_ast_pvehicles'


class BsGtlAstTcompanies(models.Model):
    public = models.BigIntegerField(blank=True, null=True)
    private = models.BigIntegerField(blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    taxi_companies = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bs_gtl_ast_tcompanies'


class BsGtlAstTrcompanies(models.Model):
    public = models.BigIntegerField(blank=True, null=True)
    private = models.BigIntegerField(blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    truck_companies = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bs_gtl_ast_trcompanies'


class BsGtlAstTucompanies(models.Model):
    public = models.BigIntegerField(blank=True, null=True)
    private = models.BigIntegerField(blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    tuk_companies = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bs_gtl_ast_tucompanies'


class BsRbuRclassificattion(models.Model):
    avg_replace_concrete = models.FloatField(blank=True, null=True)
    avg_replace_asphalt = models.FloatField(blank=True, null=True)
    avg_replace_gravel = models.FloatField(blank=True, null=True)
    avg_replace_earth = models.FloatField(blank=True, null=True)
    avg_repair_concrete = models.FloatField(blank=True, null=True)
    avg_repair_asphalt = models.FloatField(blank=True, null=True)
    avg_repair_gravel = models.FloatField(blank=True, null=True)
    avg_repair_earth = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    road_classification = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bs_rbu_rclassificattion'


class BsRbuTbridges(models.Model):
    avg_replace_2_lanes = models.FloatField(blank=True, null=True)
    avg_replace_multi_lanes = models.FloatField(blank=True, null=True)
    avg_repair_2_lanes = models.FloatField(blank=True, null=True)
    avg_repair_multi_lanes = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    type_bridges = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bs_rbu_tbridges'


class BsRbuTculverts(models.Model):
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    type_culverts = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bs_rbu_tculverts'


class BsRbuTdrains(models.Model):
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    type_drains = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bs_rbu_tdrains'


class BsRbuTrwalls(models.Model):
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    type_retain_walls = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bs_rbu_trwalls'
