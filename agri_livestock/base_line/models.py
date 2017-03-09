from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport


class Organization(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'organization'


class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='alvs_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"bd_session_keys'


class Organization(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"organization'


# Table 1
class BelLivestock(models.Model):
    livestock = models.CharField(max_length=255, blank=True, null=True)
    pub_own_families = models.BigIntegerField(blank=True, null=True)
    pub_own_male = models.BigIntegerField(blank=True, null=True)
    pub_own_female = models.BigIntegerField(blank=True, null=True)
    pvt_own_families = models.BigIntegerField(blank=True, null=True)
    pvt_own_male = models.BigIntegerField(blank=True, null=True)
    pvt_own_female = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"bel_livestock'


class BelPoultry(models.Model):
    poultry = models.CharField(max_length=255, blank=True, null=True)
    pub_own_families = models.BigIntegerField(blank=True, null=True)
    pub_own_male = models.BigIntegerField(blank=True, null=True)
    pub_own_female = models.BigIntegerField(blank=True, null=True)
    pvt_own_families = models.BigIntegerField(blank=True, null=True)
    pvt_own_male = models.BigIntegerField(blank=True, null=True)
    pvt_own_female = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"bel_poultry'


# Table 2
class BlpAnmLivestock(models.Model):
    livestock = models.CharField(max_length=255, blank=True, null=True)
    young_male = models.BigIntegerField(blank=True, null=True)
    young_female = models.BigIntegerField(blank=True, null=True)
    juvenile_male = models.BigIntegerField(blank=True, null=True)
    juvenile_female = models.BigIntegerField(blank=True, null=True)
    mature_male = models.BigIntegerField(blank=True, null=True)
    mature_female = models.BigIntegerField(blank=True, null=True)
    avg_val_young_male = models.FloatField(blank=True, null=True)
    avg_val_young_female = models.FloatField(blank=True, null=True)
    avg_val_juvenile_female = models.FloatField(blank=True, null=True)
    avg_val_juvenile_male = models.FloatField(blank=True, null=True)
    avg_val_mature_male = models.FloatField(blank=True, null=True)
    avg_val_mature_female = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"blp_anm_livestock'


class BlpAnmPoultry(models.Model):
    poultry = models.CharField(max_length=255, blank=True, null=True)
    young_male = models.BigIntegerField(blank=True, null=True)
    young_female = models.BigIntegerField(blank=True, null=True)
    juvenile_male = models.BigIntegerField(blank=True, null=True)
    juvenile_female = models.BigIntegerField(blank=True, null=True)
    mature_male = models.BigIntegerField(blank=True, null=True)
    mature_female = models.BigIntegerField(blank=True, null=True)
    avg_val_young_male = models.FloatField(blank=True, null=True)
    avg_val_young_female = models.FloatField(blank=True, null=True)
    avg_val_juvenile_female = models.FloatField(blank=True, null=True)
    avg_val_juvenile_male = models.FloatField(blank=True, null=True)
    avg_val_mature_male = models.FloatField(blank=True, null=True)
    avg_val_mature_female = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"blp_anm_poultry'


class BlpAstLivestock(models.Model):
    avg_replacec_anm_shed = models.FloatField(blank=True, null=True)
    avg_replacec_feeds = models.FloatField(blank=True, null=True)
    avg_replacec_medicines = models.FloatField(blank=True, null=True)
    avg_replacec_tools = models.FloatField(blank=True, null=True)
    avg_replacec_others = models.FloatField(blank=True, null=True)
    avg_repairc_anm_shed = models.FloatField(blank=True, null=True)
    avg_repairc_tools = models.FloatField(blank=True, null=True)
    avg_repairc_others = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    livestock = models.CharField(max_length=255, blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"blp_ast_livestock'


class BlpAstPoultry(models.Model):
    poultry = models.CharField(max_length=255, blank=True, null=True)
    avg_replacec_anm_shed = models.FloatField(blank=True, null=True)
    avg_replacec_feeds = models.FloatField(blank=True, null=True)
    avg_replacec_medicines = models.FloatField(blank=True, null=True)
    avg_replacec_tools = models.FloatField(blank=True, null=True)
    avg_replacec_others = models.FloatField(blank=True, null=True)
    avg_repairc_anm_shed = models.FloatField(blank=True, null=True)
    avg_repairc_tools = models.FloatField(blank=True, null=True)
    avg_repairc_others = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"blp_ast_poultry'


class BlpAstStructures(models.Model):
    structures = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_roof = models.FloatField(blank=True, null=True)
    avg_repair_wall = models.FloatField(blank=True, null=True)
    avg_repair_floor = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"blp_ast_structures'


class BlpAstOther(models.Model):
    other_assets = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"blp_ast_other'


class BlpApyLivestock(models.Model):
    livestock = models.CharField(max_length=255, blank=True, null=True)
    milk = models.FloatField(blank=True, null=True)
    meat = models.FloatField(blank=True, null=True)
    eggs = models.FloatField(blank=True, null=True)
    others = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"blp_apy_livestock'


class BlpApyPoultry(models.Model):
    poultry = models.CharField(max_length=255, blank=True, null=True)
    meat = models.FloatField(blank=True, null=True)
    eggs = models.FloatField(blank=True, null=True)
    others = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"blp_apy_poultry'



















