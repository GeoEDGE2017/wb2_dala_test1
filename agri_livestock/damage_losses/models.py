from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport
from agri_livestock.base_line.models import Organization


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', related_name='alvs_dl_incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='alvs_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='alvs_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dl_session_keys'


# Table 3
class DlpNdaLivestock(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    dead_young_male = models.BigIntegerField(blank=True, null=True)
    dead_young_female = models.BigIntegerField(blank=True, null=True)
    dead_juvenile_male = models.BigIntegerField(blank=True, null=True)
    dead_juvenile_female = models.BigIntegerField(blank=True, null=True)
    dead_mature_female = models.BigIntegerField(blank=True, null=True)
    dead_mature_male = models.BigIntegerField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_nda_livestock'


class DlpNdaPoultry(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    dead_young_male = models.BigIntegerField(blank=True, null=True)
    dead_young_female = models.BigIntegerField(blank=True, null=True)
    dead_juvenile_male = models.BigIntegerField(blank=True, null=True)
    dead_juvenile_female = models.BigIntegerField(blank=True, null=True)
    dead_mature_female = models.BigIntegerField(blank=True, null=True)
    dead_mature_male = models.BigIntegerField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_nda_poultry'


class DlpPafLivestock(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    dest_animal_shed = models.BigIntegerField(blank=True, null=True)
    dest_feeds = models.BigIntegerField(blank=True, null=True)
    dest_medicines = models.BigIntegerField(blank=True, null=True)
    dest_tools = models.BigIntegerField(blank=True, null=True)
    dest_others = models.BigIntegerField(blank=True, null=True)
    dmg_animal_shed = models.BigIntegerField(blank=True, null=True)
    dmg_others = models.BigIntegerField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)
    dmg_tools = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_paf_livestock'


class DlpPafPoultry(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    dest_animal_shed = models.BigIntegerField(blank=True, null=True)
    dest_feeds = models.BigIntegerField(blank=True, null=True)
    dest_medicines = models.BigIntegerField(blank=True, null=True)
    dest_tools = models.BigIntegerField(blank=True, null=True)
    dest_others = models.BigIntegerField(blank=True, null=True)
    dmg_animal_shed = models.BigIntegerField(blank=True, null=True)
    dmg_others = models.BigIntegerField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)
    dmg_tools = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_paf_poultry'


class DlpStructStructures(models.Model):
    structures = models.CharField(max_length=255, blank=True, null=True)
    dest_num = models.BigIntegerField(blank=True, null=True)
    dest_sqm = models.FloatField(blank=True, null=True)
    pdmg_num = models.BigIntegerField(blank=True, null=True)
    pdmg_roof = models.FloatField(blank=True, null=True)
    pdmg_wall = models.FloatField(blank=True, null=True)
    pdmg_floor = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_struct_structures'


class DlpStructOther(models.Model):
    other_assets = models.CharField(max_length=255, blank=True, null=True)
    num_tot_dest = models.BigIntegerField(blank=True, null=True)
    num_part_dmg = models.BigIntegerField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_struct_other'


class DlpLosLivestock(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    milk_year_1 = models.FloatField(blank=True, null=True)
    milk_year_2 = models.FloatField(blank=True, null=True)
    meat_year_1 = models.FloatField(blank=True, null=True)
    meat_year_2 = models.FloatField(blank=True, null=True)
    others_year_1 = models.FloatField(blank=True, null=True)
    others_year_2 = models.FloatField(blank=True, null=True)
    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_los_livestock'


class DlpLosPoultry(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    meat_year_1 = models.FloatField(blank=True, null=True)
    meat_year_2 = models.FloatField(blank=True, null=True)
    others_year_1 = models.FloatField(blank=True, null=True)
    others_year_2 = models.FloatField(blank=True, null=True)
    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_los_poultry'


class DlpLosOther(models.Model):
    others = models.CharField(max_length=255, blank=True, null=True)
    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    organization = models.ForeignKey(Organization, db_column='organization', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_los_other'


# Views Table 4
class DlpNdaLivestockPubDistrict(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_nda_livestock_pub_district'


class DlpNdaLivestockPvtDistrict(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_nda_livestock_pvt_district'


class DlpNdaPoultryPubDistrict(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_nda_poultry_pub_district'


class DlpNdaPoultryPvtDistrict(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_nda_poultry_pvt_district'


class DlpPafPubDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_paf_pub_district'


class DlpPafPvtDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_paf_pvt_district'


class DlpStructStructuresPubDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_struct_structures_pub_district'


class DlpStructStructuresPvtDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_struct_structures_pvt_district'


class DlpStructOtherPubDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_struct_other_pub_district'


class DlpStructOtherPvtDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_struct_other_pvt_district'


class DlpLosLivestockPubDistrict(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_los_livestock_pub_district'


class DlpLosLivestockPvtDistrict(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_los_livestock_pvt_district'


class DlpLosPoultryPubDistrict(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_los_poultry_pub_district'


class DlpLosPoultryPvtDistrict(models.Model):
    animals = models.CharField(max_length=255, blank=True, null=True)
    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_los_poultry_pvt_district'


class DlpLosOtherPubDistrict(models.Model):
    others = models.CharField(max_length=255, blank=True, null=True)
    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_los_other_pub_district'


class DlpLosOtherPvtDistrict(models.Model):
    others = models.CharField(max_length=255, blank=True, null=True)
    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_livestock\".\"dlp_los_other_pvt_district'


# Views Table 5
class DlpNdaPubProvince(models.Model):

    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_nda-pub_province'


class DlpNdaPvtProvince(models.Model):

    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_nda-pvt_province'


class DlpLosPubProvince(models.Model):

    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_los-pub_province'


class DlpLosPvtProvince(models.Model):

    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_los-pvt_province'

# Views Tbale 6


class DlpNdaPubNational(models.Model):

    damages = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_nda-pub_national'


class DlpNdaPvtNational(models.Model):

    damages = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_nda-pvt_national'


class DlpLosPubNational(models.Model):

    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_los-pub_national'


class DlpLosPvtNational(models.Model):

    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table= 'agri_livestock\".\"dlp_los-pvt_national'
