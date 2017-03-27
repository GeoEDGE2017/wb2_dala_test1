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
    district = models.ForeignKey(District, db_column='district', related_name='hous_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"bd_session_keys'


# Table 1
class BhClfPermanent(models.Model):
    components = models.CharField(max_length=255, blank=True, null=True)
    tot_num_house = models.FloatField(blank=True, null=True)
    tot_num_house_rent = models.FloatField(blank=True, null=True)
    avg_rent_mont = models.FloatField(blank=True, null=True)
    ang_num_occ_female = models.FloatField(blank=True, null=True)
    avg_num_occ_male = models.FloatField(blank=True, null=True)
    avg_period_construct = models.FloatField(blank=True, null=True)
    avg_period_repair = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"bh_clf_permanent'


class BhClfSmiPermanent(models.Model):
    components = models.CharField(max_length=255, blank=True, null=True)
    tot_num_house = models.FloatField(blank=True, null=True)
    tot_num_house_rent = models.FloatField(blank=True, null=True)
    avg_rent_mont = models.FloatField(blank=True, null=True)
    ang_num_occ_female = models.FloatField(blank=True, null=True)
    avg_num_occ_male = models.FloatField(blank=True, null=True)
    avg_period_construct = models.FloatField(blank=True, null=True)
    avg_period_repair = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"bh_clf_smi_permanent'


class BhClfImprovised(models.Model):
    components = models.CharField(max_length=255, blank=True, null=True)
    tot_num_house = models.FloatField(blank=True, null=True)
    tot_num_house_rent = models.FloatField(blank=True, null=True)
    avg_rent_mont = models.FloatField(blank=True, null=True)
    ang_num_occ_female = models.FloatField(blank=True, null=True)
    avg_num_occ_male = models.FloatField(blank=True, null=True)
    avg_period_construct = models.FloatField(blank=True, null=True)
    avg_period_repair = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"bh_clf_improvised'


# Table 2
class BhClfPermanentCost(models.Model):
    components = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost_roof = models.FloatField(blank=True, null=True)
    avg_repair_cost_wall = models.FloatField(blank=True, null=True)
    avg_repair_cost_floor = models.FloatField(blank=True, null=True)
    avg_val_content = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"bh_clf_permanent_cost'


class BhClfSmiPermanentCost(models.Model):
    components = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost_roof = models.FloatField(blank=True, null=True)
    avg_repair_cost_wall = models.FloatField(blank=True, null=True)
    avg_repair_cost_floor = models.FloatField(blank=True, null=True)
    avg_val_content = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"bh_clf_smi_permanent_cost'


class BhClfImprovisedCost(models.Model):
    components = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost_roof = models.FloatField(blank=True, null=True)
    avg_repair_cost_wall = models.FloatField(blank=True, null=True)
    avg_repair_cost_floor = models.FloatField(blank=True, null=True)
    avg_val_content = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"bh_clf_improvised_cost'













