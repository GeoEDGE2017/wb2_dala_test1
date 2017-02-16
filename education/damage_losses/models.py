from __future__ import unicode_literals
from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport
from education.base_line.models import PreSchools, PrimarySchools, SecondarySchools, Universities, TechInstitutes


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='edu_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='edu_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dl_session_keys'


class DugDfNdf(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_df_ndf'


class DugDfNsa(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_df_nsa'


class DugLosCud(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_los_cud'


class DugLosFi(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_los_fi'


class DugLosHoc(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_los_hoc'


class DugLosOue(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_los_oue'


class DugNdafEquipment(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_ndaf_equipment'


class DugNdafStructure(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_ndaf_structure'


class DugNdafSupplies(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_ndaf_supplies'


class DugNpdatEquipment(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_npdat_equipment'


class DugNpdatStructure(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_npdat_structure'


class DugNpdatSupplies(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_npdat_supplies'


class DugPdfaNpdf(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_pdfa_npdf'


class DugPdfaNsa(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_pdfa_nsa'


class DpefBefPreSchool(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    pre_school = models.ForeignKey(PreSchools, db_column='pre_school', blank=True, null=True)
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_pre_school'


class DpefBefPrmSchool(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    primary_school = models.ForeignKey(PrimarySchools, db_column='primary_school', blank=True, null=True)
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_prm_school'


class DpefBefSecSchool(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    secondary_school = models.ForeignKey(SecondarySchools, db_column='secondary_school', blank=True, null=True)
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_sec_school'


class DpefBefTechInst(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    tech_institute = models.ForeignKey(TechInstitutes, db_column='tech_institute', blank=True, null=True)
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_tech_inst'


class DpefBefUnv(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    university = models.ForeignKey(Universities, db_column='university', blank=True, null=True)
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_unv'


class DpefNaf(models.Model):
    edu_facilities = models.CharField(max_length=255, blank=True, null=True)
    num_edu_facilities = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_naf'


class DedPub(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    tot_num_affected = models.BigIntegerField(blank=True, null=True)
    nums_affected_male = models.BigIntegerField(blank=True, null=True)
    nums_affected_female = models.BigIntegerField(blank=True, null=True)
    tot_dmgs = models.FloatField(blank=True, null=True)
    tot_dmgs = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"ded_pub'


class DedPvt(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    tot_num_affected = models.BigIntegerField(blank=True, null=True)
    nums_affected_male = models.BigIntegerField(blank=True, null=True)
    nums_affected_female = models.BigIntegerField(blank=True, null=True)
    tot_dmgs = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"ded_pvt'


class DedTotDmgl(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"ded_tot_dmgl'


class DpefBefDistrict(models.Model):
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)


    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_district'


class DpefBefPreDistrict(models.Model):
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_pre_district'


class DpefBefSecondaryDistrict(models.Model):
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_secondary_district'


class DpefBefUnvDistrict(models.Model):
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_unv_district'


class DugDfDistrict(models.Model):
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_df_district'


class DugNsaDistrict(models.Model):
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_nsa_district'


class DugNdafDistrict(models.Model):
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_ndaf_district'


class DpefBefPrimaryDistrict(models.Model):
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_primary_district'


class DpefBefTechDistrict(models.Model):
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_tech_district'


class DpefBefOtherNational(models.Model):
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_other_national'


class DpefBefPreNational(models.Model):
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_pre_national'


class DpefBefPrimaryNational(models.Model):
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_primary_national'


class DpefBefSecondaryNational(models.Model):
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_secondary_national'


class DpefBefTechNational(models.Model):
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_tech_national'


class DpefBefUnvNational(models.Model):
    est_rep_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    est_los_year_1 = models.FloatField(blank=True, null=True)
    est_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_unv_national'


class DpefNafNational(models.Model):
    num_edu_facilities = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_naf_national'


class DpefBefNational(models.Model):
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dpef_bef_national'


class DugDfNational(models.Model):
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_df_national'


class DugNdafNational(models.Model):
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_ndaf_national'


class DugNsaNational(models.Model):
    ab1_1c = models.IntegerField(blank=True, null=True)
    type_2 = models.IntegerField(blank=True, null=True)
    type_3 = models.IntegerField(blank=True, null=True)
    pirivena = models.IntegerField(blank=True, null=True)
    training_institutes = models.IntegerField(blank=True, null=True)
    training_colleges = models.IntegerField(blank=True, null=True)
    tc_crc_resc = models.IntegerField(blank=True, null=True)
    min_pzd_offices = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"dug_nsa_national'
