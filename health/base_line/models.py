from __future__ import unicode_literals
from django.db import models
from settings.models import District
from incidents.models import IncidentReport


# model for base_line medical_facilities

class BhsPlc(models.Model):
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    children = models.IntegerField(blank=True, null=True)
    elderly = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bhsplc_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    session_id = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bhs_plc'


class BhsComDiseases(models.Model):
    com_disease = models.CharField(max_length=255, blank=True, null=True)
    male = models.IntegerField(default=0, blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    children = models.IntegerField(blank=True, null=True)
    elderly = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bhscomdiseases_district',  blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    session_id = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bhs_com_diseases'


class BhsOi(models.Model):
    other_indicators = models.CharField(max_length=255, blank=True, null=True)
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    children = models.IntegerField(blank=True, null=True)
    elderly = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bhsoi_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    session_id = models.BigIntegerField(blank=True, null=True)
    unit_measure = models.CharField(max_length=255, blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bhs_oi'


class BhsVi(models.Model):
    vital_indicators = models.CharField(max_length=255, blank=True, null=True)
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    children = models.IntegerField(blank=True, null=True)
    elderly = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bhsVi_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    session_id = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bhs_vi'


# class for public base_line medical_facilities
class BmfPubMf(models.Model):
    type_pub_mf = models.CharField(max_length=255, blank=True, null=True)
    number = models.IntegerField(blank=True, null=True)
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bmfpubmf_district', blank=True, null=True)
    bs_date = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bmf_pub_mf'


# class for private base_line medical_facilities
class BmfPvtMf(models.Model):
    type_pvt_mf = models.CharField(max_length=255, blank=True, null=True)
    number = models.IntegerField(blank=True, null=True)
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bmfpvtmf_district', blank=True, null=True)
    bs_date = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bmf_pvt_mf'


# class baseline_information_unit_cost _Other_medical_facilities

class BucOmarMequipment(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pri_med_cunits = models.FloatField(blank=True, null=True)
    pri_health_ccenters = models.FloatField(blank=True, null=True)
    mat_child_health_clinics = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucomarmequipment_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_omar_mequipment'


class BucOmarOassets(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pri_med_cunits = models.FloatField(blank=True, null=True)
    pri_health_ccenters = models.FloatField(blank=True, null=True)
    mat_child_health_clinics = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucomaroassets_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_omar_oassets'


class BucOmarStructure(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pri_med_cunits = models.FloatField(blank=True, null=True)
    pri_health_ccenters = models.FloatField(blank=True, null=True)
    mat_child_health_clinics = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucomarstructure_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_omar_structure'


class BucOmarSupplies(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pri_med_cunits = models.FloatField(blank=True, null=True)
    pri_health_ccenters = models.FloatField(blank=True, null=True)
    mat_child_health_clinics = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucomarsupplies_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_omar_supplies'


class BucOmarcCrpm(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pri_med_cunits = models.FloatField(blank=True, null=True)
    pri_health_ccenters = models.FloatField(blank=True, null=True)
    mat_child_health_clinics = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucomarccrpm_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_omarc_crpm'


class BucOmarcMequipment(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pri_med_cunits = models.FloatField(blank=True, null=True)
    pri_health_ccenters = models.FloatField(blank=True, null=True)
    mat_child_health_clinics = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucOmarcmequipment_district',  blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_omarc_mequipment'


class BucOmarcOassets(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pri_med_cunits = models.FloatField(blank=True, null=True)
    pri_health_ccenters = models.FloatField(blank=True, null=True)
    mat_child_health_clinics = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucomarcoassets_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_omarc_oassets'


class BucOmarcStructure(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pri_med_cunits = models.FloatField(blank=True, null=True)
    pri_health_ccenters = models.FloatField(blank=True, null=True)
    mat_child_health_clinics = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucomarcstructure_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_omarc_structure'


class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bdsessionkeys_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bd_session_keys'


# Dileepa

class BucMarStructure(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucmarstructure_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_mar_structure'


class BucMarcStructures(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucmarcstructures_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_marc_structures'


class BucMarSupplies(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucmarsupplies_district',  blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_mar_supplies'


class BucMarcCrpm(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucmarccrpm_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_marc_crpm'


class BucMarMequipment(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucmarmequipment_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_mar_mequipment'


class BucMarcMequipment(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucmarcmequipment_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_marc_mequipment'


class BucMarOassets(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucmaroassets_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_mar_oassets'


class BucMarcOassets(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_bucmarcoassets_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'buc_marc_oassets'


# education sector models

class PreSchools(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_preschools_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'pre_schools'


class PrimarySchools(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_primaryschools_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'primary_schools'


class SecondarySchools(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_SecondarySchools_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'secondary_schools'


class TechInstitutes(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_techInstitutes_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tech_institutes'


class Universities(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_universities_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'universities'


class BefPubSchools(models.Model):
    type_facilities = models.CharField(max_length=255, blank=True, null=True)
    total_number = models.IntegerField(blank=True, null=True)
    avg_male = models.IntegerField(blank=True, null=True)
    avg_female = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_befpubschools_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bef_pub_schools'


class BefPubOffices(models.Model):
    type_facilities = models.CharField(max_length=255, blank=True, null=True)
    total_number = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_befpuboffices_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bef_pub_offices'


class BefPvt(models.Model):
    type_facilities = models.CharField(max_length=255, blank=True, null=True)
    total_number = models.IntegerField(blank=True, null=True)
    avg_male = models.IntegerField(blank=True, null=True)
    avg_female = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_befpvt_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bef_pvt'


class BugAfr(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_BugAfr_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_afr'


class BugArcEquipment(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_BugArcEquipment_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arc_equipment'


class BugArcStructures(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_BugArcStructures_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arc_structures'


class BugArcSupplies(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_BugArcSupplies_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arc_supplies'


class BugArpcEquipment(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_BugArpcEquipment_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arpc_equipment'


class BugArpcStructures(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_BugArpcStructures_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arpc_structures'


class BugArpcSupplies(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_BugArpcSupplies_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arpc_supplies'


class BugCrp(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ed_BugCrp_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_crp'


#mining

class Ownership(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ownership'


class Department(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.ForeignKey(Ownership, db_column='ownership', related_name='mi_Department_ownership', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district',  related_name='mi_Department_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'department'


class Firm(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_Firm_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'firm'


class BmaAmMin(models.Model):
    minerals = models.CharField(max_length=255, blank=True, null=True)
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    avg_per_year = models.FloatField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_BmaAmMin_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    firm_id = models.ForeignKey(Firm, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bma_am_min'


class BmaAmMinNum(models.Model):
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_BmaAmMinNum_district',  blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bma_am_min_num'


class BmaImFn(models.Model):
    name_min_outputs = models.CharField(max_length=255, blank=True, null=True)
    avg_per_year = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_BmaImFn_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=12, blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)

    class Meta:
        managed = False
        db_table = 'bma_im_fn'


class BmaImFirmNum(models.Model):
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_BmaImFirmNum_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)

    class Meta:
        managed = False
        db_table = 'bma_im_firm_num'



# other_government
# Table 1

class BcsMachinery(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_rep_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='oth_BcsMachinery_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bcs_machinery'


class BcsOfficeEquipment(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_rep_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='oth_BcsOfficeEquipment_district',  blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bcs_office_equipment'


class BcsStructure(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_rep_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost_roof = models.FloatField(blank=True, null=True)
    avg_repair_cost_wall = models.FloatField(blank=True, null=True)
    avg_repair_cost_flooring = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='oth_BcsStructure_district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bcs_structure'


#transport_land


class Company(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'company'
