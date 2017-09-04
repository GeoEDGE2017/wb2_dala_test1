from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport
from agri_fisheries.base_line.models import FishingTypes


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    ftype = models.ForeignKey(FishingTypes, db_column='ftype', blank=True, related_name='agrifi_dl_ftype', null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', related_name='agrifi_dl_incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='agrifi_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='agrifi_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dl_session_keys'


# Table 3
class DlfDmgFequipment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    dmg_dest_pub = models.BigIntegerField(blank=True, null=True)
    dmg_dst_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pdmg_pub = models.BigIntegerField(blank=True, null=True)
    dmg_pdmg_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    ftype = models.ForeignKey(FishingTypes, db_column='ftype_id', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_fequipment'


class DlfDmgOequipment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    dmg_dest_pub = models.BigIntegerField(blank=True, null=True)
    dmg_dst_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pdmg_pub = models.BigIntegerField(blank=True, null=True)
    dmg_pdmg_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    ftype = models.ForeignKey(FishingTypes, db_column='ftype_id', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_oequipment'


class DlfDmgMachinery(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    dmg_dest_pub = models.BigIntegerField(blank=True, null=True)
    dmg_dst_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pdmg_pub = models.BigIntegerField(blank=True, null=True)
    dmg_pdmg_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    ftype = models.ForeignKey(FishingTypes, db_column='ftype_id', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_machinery'


class DlfDmgStructures(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    dmg_dest_pub = models.BigIntegerField(blank=True, null=True)
    dmg_dst_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pdmg_pub = models.BigIntegerField(blank=True, null=True)
    dmg_pdmg_pvt = models.BigIntegerField(blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    ftype = models.ForeignKey(FishingTypes, db_column='ftype_id', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_structures'


class DlfDmgPub(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    tot_dest_num = models.BigIntegerField(blank=True, null=True)
    tot_dest_sqm = models.FloatField(blank=True, null=True)
    pdmg_num = models.BigIntegerField(blank=True, null=True)
    pdmg_roof = models.FloatField(blank=True, null=True)
    pdmg_wall = models.FloatField(blank=True, null=True)
    pdmg_floor = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    ftype = models.ForeignKey(FishingTypes, db_column='ftype_id', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_pub'


class DlfDmgPvt(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    tot_dest_num = models.BigIntegerField(blank=True, null=True)
    tot_dest_sqm = models.FloatField(blank=True, null=True)
    pdmg_num = models.BigIntegerField(blank=True, null=True)
    pdmg_roof = models.FloatField(blank=True, null=True)
    pdmg_wall = models.FloatField(blank=True, null=True)
    pdmg_floor = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    ftype = models.ForeignKey(FishingTypes, db_column='ftype_id', blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_pvt'


class DlfLosIfisheries(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    los_year_1_pub = models.FloatField(blank=True, null=True)
    los_year_1_pvt = models.FloatField(blank=True, null=True)
    los_year_2_pub = models.FloatField(blank=True, null=True)
    los_year_2_pvt = models.FloatField(blank=True, null=True)
    los_pub = models.FloatField(blank=True, null=True)
    los_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    ftype = models.ForeignKey(FishingTypes, db_column='ftype_id', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_los_ifisheries'


class DlfLosRfisheries(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    los_year_1_pub = models.FloatField(blank=True, null=True)
    los_year_1_pvt = models.FloatField(blank=True, null=True)
    los_year_2_pub = models.FloatField(blank=True, null=True)
    los_year_2_pvt = models.FloatField(blank=True, null=True)
    los_pub = models.FloatField(blank=True, null=True)
    los_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    ftype = models.ForeignKey(FishingTypes, db_column='ftype_id', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_los_rfisheries'


class DlfLosMfisheries(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    los_year_1_pub = models.FloatField(blank=True, null=True)
    los_year_1_pvt = models.FloatField(blank=True, null=True)
    los_year_2_pub = models.FloatField(blank=True, null=True)
    los_year_2_pvt = models.FloatField(blank=True, null=True)
    los_pub = models.FloatField(blank=True, null=True)
    los_pvt = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    ftype = models.ForeignKey(FishingTypes, db_column='ftype_id', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_los_mfisheries'


# Province Tables

class DlfDmgPubDistrict(models.Model):
    fishing_type = models.ForeignKey(FishingTypes, db_column='fishing_type', blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_pub_district'


class DlfLosRfisheriesDistrict(models.Model):
    los_year_1_pub = models.FloatField(blank=True, null=True)
    los_year_1_pvt = models.FloatField(blank=True, null=True)
    los_year_2_pub = models.FloatField(blank=True, null=True)
    los_year_2_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_los_rfisheries_district'


# class DlfLosMfisheriesDistrict(models.Model):
#     los_year_1_pub = models.FloatField(blank=True, null=True)
#     los_year_1_pvt = models.FloatField(blank=True, null=True)
#     los_year_2_pub = models.FloatField(blank=True, null=True)
#     los_year_2_pvt = models.FloatField(blank=True, null=True)
#     district = models.ForeignKey(District, db_column='district', blank=True, null=True)
#     incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'agri_fisheries\".\"dlf_los_mfisheries_district'


class DlfDmgPubProvince(models.Model):
    dmg_pub = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_pub_province'


class DlfDmgPvtProvince(models.Model):
    dmg_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_pvt_province'


class DlfLosProvince(models.Model):
    los_year_1_pub = models.FloatField(blank=True, null=True)
    los_year_1_pvt = models.FloatField(blank=True, null=True)
    los_year_2_pub = models.FloatField(blank=True, null=True)
    los_year_2_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_los_province'


# Table 4
class DlfDmgPvtDistrict(models.Model):
    dmg_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_pvt_district'


class DlfLosIfisheriesDistrict(models.Model):
    los_year_1_pub = models.FloatField(blank=True, null=True)
    los_year_1_pvt = models.FloatField(blank=True, null=True)
    los_year_2_pub = models.FloatField(blank=True, null=True)
    los_year_2_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_los_ifisheries_district'


# class DlfLosRfisheriesDistrict(models.Model):
#     los_year_1_pub = models.FloatField(blank=True, null=True)
#     los_year_1_pvt = models.FloatField(blank=True, null=True)
#     los_year_2_pub = models.FloatField(blank=True, null=True)
#     los_year_2_pvt = models.FloatField(blank=True, null=True)
#     district = models.ForeignKey(District, db_column='district', blank=True, null=True)
#     incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'agri_fisheries\".\"dlf_los_rfisheries_district'


class DlfLosMfisheriesDistrict(models.Model):
    los_year_1_pub = models.FloatField(blank=True, null=True)
    los_year_1_pvt = models.FloatField(blank=True, null=True)
    los_year_2_pub = models.FloatField(blank=True, null=True)
    los_year_2_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_los_mfisheries_district'


# National Table
class DlfDmgPubNational(models.Model):
    fishing_type = models.ForeignKey(FishingTypes, db_column='ftype', blank=True, null=True)
    dmg_pub = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_pub_national'


class DlfDmgPvtNational(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    dmg_pvt = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_dmg_pvt_national'


class DlfLosIfisheriesNational(models.Model):
    los_year_1_pub = models.FloatField(blank=True, null=True)
    los_year_1_pvt = models.FloatField(blank=True, null=True)
    los_year_2_pub = models.FloatField(blank=True, null=True)
    los_year_2_pvt = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_los_ifisheries_national'


class DlfLosRfisheriesNational(models.Model):
    los_year_1_pub = models.FloatField(blank=True, null=True)
    los_year_1_pvt = models.FloatField(blank=True, null=True)
    los_year_2_pub = models.FloatField(blank=True, null=True)
    los_year_2_pvt = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_los_rfisheries_national'


class DlfLosMfisheriesNational(models.Model):
    los_year_1_pub = models.FloatField(blank=True, null=True)
    los_year_1_pvt = models.FloatField(blank=True, null=True)
    los_year_2_pub = models.FloatField(blank=True, null=True)
    los_year_2_pvt = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_los_mfisheries_national'


# class DlfDmgPubNational(models.Model):
#     dmg_pub = models.FloatField(blank=True, null=True)
#     province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
#     incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'agri_fisheries\".\"dlf_dmg_pub_national'


# class DlfDmgPvtProvince(models.Model):
#     dmg_pvt = models.FloatField(blank=True, null=True)
#     province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
#     incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'agri_fisheries\".\"dlf_dmg_pvt_national'


class DlfLosNational(models.Model):
    los_year_1_pub = models.FloatField(blank=True, null=True)
    los_year_1_pvt = models.FloatField(blank=True, null=True)
    los_year_2_pub = models.FloatField(blank=True, null=True)
    los_year_2_pvt = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'agri_fisheries\".\"dlf_los_national'
