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
    district = models.ForeignKey(District, db_column='district', related_name='ta_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_air\".\"bd_session_keys'


class BsAstAirAircrafts(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_pub = models.BigIntegerField(blank=True, null=True)
    num_pvt = models.BigIntegerField(blank=True, null=True)
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
        db_table = 'transport_air\".\"bs_ast_air_aircrafts'


class BsAstAirEquipment(models.Model):
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
        db_table = 'transport_air\".\"bs_ast_air_equipment'


class BsAstAirSupplies(models.Model):
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
        db_table = 'transport_air\".\"bs_ast_air_supplies'


class BsAstAirOthers(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_air\".\"bs_ast_air_others'


class BsAstAirStructures(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    repc_1_floor = models.FloatField(blank=True, null=True)
    repc_2_3_floor = models.FloatField(blank=True, null=True)
    repc_moret_3_floor = models.FloatField(blank=True, null=True)
    repairc_roof = models.FloatField(blank=True, null=True)
    repairc_wall = models.FloatField(blank=True, null=True)
    repairc_floor = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_air\".\"bs_ast_air_structures'


class BsAstAirEmployment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_air\".\"bs_ast_air_employment'
