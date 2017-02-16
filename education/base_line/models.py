from django.db import models
from incidents.models import IncidentReport
from settings.models import District


class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='edu_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education\".\"bd_session_keys'


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
        db_table = 'education\".\"pre_schools'


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
        db_table = 'education\".\"primary_schools'


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
        db_table = 'education\".\"secondary_schools'


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
        db_table = 'education\".\"tech_institutes'


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
        db_table = 'education\".\"universities'


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
        db_table = 'education\".\"bef_pub_schools'


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
        db_table = 'education\".\"bef_pub_offices'


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
        db_table = 'education\".\"bef_pvt'


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
        db_table = 'education\".\"bug_afr'


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
        db_table = 'education\".\"bug_arc_equipment'


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
        db_table = 'education\".\"bug_arc_structures'


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
        db_table = 'education\".\"bug_arc_supplies'


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
        db_table = 'education\".\"bug_arpc_equipment'


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
        db_table = 'education\".\"bug_arpc_structures'


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
        db_table = 'education\".\"bug_arpc_supplies'


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
        db_table = 'education\".\"bug_crp'
