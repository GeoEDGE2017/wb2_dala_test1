from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport


class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='airr_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bd_session_keys'


# Table 1       BsIfMajor,BsIfMedium,BsIfMinor,BsIfAnicuts,
class BsIfMajor(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_facility = models.CharField(max_length=255, blank=True, null=True)
    capacity = models.FloatField(blank=True, null=True)
    irrigated_area_paddy = models.FloatField(blank=True, null=True)
    irrigated_area_ofc = models.FloatField(blank=True, null=True)
    income_paddy = models.FloatField(blank=True, null=True)
    income_ofc = models.FloatField(blank=True, null=True)
    num_farmer_families = models.BigIntegerField(blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bs_if_major'


class BsIfMedium(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_facility = models.CharField(max_length=255, blank=True, null=True)
    capacity = models.FloatField(blank=True, null=True)
    irrigated_area_paddy = models.FloatField(blank=True, null=True)
    irrigated_area_ofc = models.FloatField(blank=True, null=True)
    income_paddy = models.FloatField(blank=True, null=True)
    income_ofc = models.FloatField(blank=True, null=True)
    num_farmer_families = models.BigIntegerField(blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bs_if_medium'


class BsIfMinor(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_facility = models.CharField(max_length=255, blank=True, null=True)
    capacity = models.FloatField(blank=True, null=True)
    irrigated_area_paddy = models.FloatField(blank=True, null=True)
    irrigated_area_ofc = models.FloatField(blank=True, null=True)
    income_paddy = models.FloatField(blank=True, null=True)
    income_ofc = models.FloatField(blank=True, null=True)
    num_farmer_families = models.BigIntegerField(blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bs_if_minor'


class BsIfAnicuts(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_facility = models.CharField(max_length=255, blank=True, null=True)
    capacity = models.FloatField(blank=True, null=True)
    irrigated_area_paddy = models.FloatField(blank=True, null=True)
    irrigated_area_ofc = models.FloatField(blank=True, null=True)
    income_paddy = models.FloatField(blank=True, null=True)
    income_ofc = models.FloatField(blank=True, null=True)
    num_farmer_families = models.BigIntegerField(blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bs_if_anicuts'


# Table 2       BsRciaMajorTanks,BsRciaMediumTanks,BsRciaMinorTanks,BsRciaAnicuts,BsRciaOtherStructures,BsRciRiverEmbankmnt
class BsRciaMajorTanks(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_facility = models.CharField(max_length=255, blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    avg_replacement_cost = models.FloatField(blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bs_rcia_major_tanks'


class BsRciaMediumTanks(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_facility = models.CharField(max_length=255, blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    avg_replacement_cost = models.FloatField(blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bs_rcia_medium_tanks'


class BsRciaMinorTanks(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_facility = models.CharField(max_length=255, blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    avg_replacement_cost = models.FloatField(blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bs_rcia_minor_tanks'


class BsRciaAnicuts(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_facility = models.CharField(max_length=255, blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    avg_replacement_cost = models.FloatField(blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bs_rcia_anicuts'


class BsRciaOtherStructures(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_facility = models.CharField(max_length=255, blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    avg_replacement_cost = models.FloatField(blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bs_rcia_other_structures'


class BsRciRiverEmbankmnt(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_facility = models.CharField(max_length=255, blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    avg_replacement_cost = models.FloatField(blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bs_rci_river_embankmnt'


class BsRciBuildings(models.Model):
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    irrigation_facility = models.CharField(max_length=255, blank=True, null=True)
    avg_repair_roof = models.FloatField(blank=True, null=True)
    avg_repair_wall = models.FloatField(blank=True, null=True)
    avg_repair_floor = models.FloatField(blank=True, null=True)
    avg_replacement_cost = models.FloatField(blank=True, null=True)
    division = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_irrigation\".\"bs_rci_buildings'
