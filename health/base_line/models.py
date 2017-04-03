from __future__ import unicode_literals
from django.db import models
from settings.models import District
from incidents.models import IncidentReport


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
        db_table = 'health\".\"bhs_plc'


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
        db_table = 'health\".\"bhs_com_diseases'


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
        db_table = 'health\".\"bhs_oi'


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
        db_table = 'health\".\"bhs_vi'


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
        db_table = 'health\".\"bmf_pub_mf'


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
        db_table = 'health\".\"bmf_pvt_mf'


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
        db_table = 'health\".\"buc_omar_mequipment'


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
        db_table = 'health\".\"buc_omar_oassets'


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
        db_table = 'health\".\"buc_omar_structure'


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
        db_table = 'health\".\"buc_omar_supplies'


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
        db_table = 'health\".\"buc_omarc_crpm'


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
        db_table = 'health\".\"buc_omarc_mequipment'


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
        db_table = 'health\".\"buc_omarc_oassets'


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
        db_table = 'health\".\"buc_omarc_structure'


class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='hea_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"bd_session_keys'


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
        db_table = 'health\".\"buc_mar_structure'


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
        db_table = 'health\".\"buc_marc_structures'


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
        db_table = 'health\".\"buc_mar_supplies'


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
        db_table = 'health\".\"buc_marc_crpm'


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
        db_table = 'health\".\"buc_mar_mequipment'


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
        db_table = 'health\".\"buc_marc_mequipment'


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
        db_table = 'health\".\"buc_mar_oassets'


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
        db_table = 'health\".\"buc_marc_oassets'


class PrivateClinic(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"private_clinic'