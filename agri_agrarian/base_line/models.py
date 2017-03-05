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
    district = models.ForeignKey(District, db_column='district', related_name='aagr_bs_district',  blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"bd_session_keys'


# Table 1
class BcagSeasonalCrops(models.Model):
    seasonal_crops = models.CharField(max_length=255, blank=True, null=True)
    areas_cultivated = models.FloatField(blank=True, null=True)
    avg_val_land = models.FloatField(blank=True, null=True)
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
        db_table = 'agri_agrarian\".\"bcag_seasonal_crops'


class BcagPlantnCrops(models.Model):
    plantn_crops = models.CharField(max_length=255, blank=True, null=True)
    areas_cultivated = models.FloatField(blank=True, null=True)
    avg_val_land = models.FloatField(blank=True, null=True)
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
        db_table = 'agri_agrarian\".\"bcag_plantn_crops'


class BcagExportCrops(models.Model):
    export_crops = models.CharField(max_length=255, blank=True, null=True)
    areas_cultivated = models.FloatField(blank=True, null=True)
    avg_val_land = models.FloatField(blank=True, null=True)
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
        db_table = 'agri_agrarian\".\"bcag_export_crops'


class BcagForestry(models.Model):
    forestry = models.CharField(max_length=255, blank=True, null=True)
    areas_cultivated = models.FloatField(blank=True, null=True)
    avg_val_land = models.FloatField(blank=True, null=True)
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
        db_table = 'agri_agrarian\".\"bcag_forestry'


class BcagOther(models.Model):
    other_products = models.CharField(max_length=255, blank=True, null=True)
    areas_cultivated = models.FloatField(blank=True, null=True)
    avg_val_land = models.FloatField(blank=True, null=True)
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
        db_table = 'agri_agrarian\".\"bcag_other'


# Table 2
class BacfSeasonalCrops(models.Model):
    seasonal_crops = models.CharField(max_length=255, blank=True, null=True)
    avg_value = models.FloatField(blank=True, null=True)
    productn_pub = models.FloatField(blank=True, null=True)
    productn_pvt = models.FloatField(blank=True, null=True)
    productn_cost_nplanted = models.FloatField(blank=True, null=True)
    productn_cost_mstage = models.FloatField(blank=True, null=True)
    productn_cost_hstage = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"bacf_seasonal_crops'


class BacfPlantnCrops(models.Model):
    plantn_crops = models.CharField(max_length=255, blank=True, null=True)
    avg_value = models.FloatField(blank=True, null=True)
    productn_pub = models.FloatField(blank=True, null=True)
    productn_pvt = models.FloatField(blank=True, null=True)
    productn_cost_nplanted = models.FloatField(blank=True, null=True)
    productn_cost_mstage = models.FloatField(blank=True, null=True)
    productn_cost_hstage = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"bacf_plantn_crops'


class BacfExportCrops(models.Model):
    export_crops = models.CharField(max_length=255, blank=True, null=True)
    avg_value = models.FloatField(blank=True, null=True)
    productn_pub = models.FloatField(blank=True, null=True)
    productn_pvt = models.FloatField(blank=True, null=True)
    productn_cost_nplanted = models.FloatField(blank=True, null=True)
    productn_cost_mstage = models.FloatField(blank=True, null=True)
    productn_cost_hstage = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"bacf_export_crops'


class BacfForestry(models.Model):
    forestry = models.CharField(max_length=255, blank=True, null=True)
    avg_value = models.FloatField(blank=True, null=True)
    productn_pub = models.FloatField(blank=True, null=True)
    productn_pvt = models.FloatField(blank=True, null=True)
    productn_cost_nplanted = models.FloatField(blank=True, null=True)
    productn_cost_mstage = models.FloatField(blank=True, null=True)
    productn_cost_hstage = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"bacf_forestry'


class BacfOther(models.Model):
    other_products = models.CharField(max_length=255, blank=True, null=True)
    avg_value = models.FloatField(blank=True, null=True)
    productn_pub = models.FloatField(blank=True, null=True)
    productn_pvt = models.FloatField(blank=True, null=True)
    productn_cost_nplanted = models.FloatField(blank=True, null=True)
    productn_cost_mstage = models.FloatField(blank=True, null=True)
    productn_cost_hstage = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"bacf_other'


class BacfFarmEquipment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
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
        db_table = 'agri_agrarian\".\"bacf_farm_equipment'


class BacfStocks(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    avg_value = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"bacf_stocks'


# Table 3
class BsoeStructure(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_wall = models.FloatField(blank=True, null=True)
    avg_repair_roof = models.FloatField(blank=True, null=True)
    avg_repair_flooring = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_agrarian\".\"bsoe_structure'


class BsoeOequipment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
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
        db_table = 'agri_agrarian\".\"bsoe_oequipment'


class BsoeMachinery(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
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
        db_table = 'agri_agrarian\".\"bsoe_machinery'