from __future__ import unicode_literals
from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport
from incidents.models import IncidentReport
from health.base_line.models import PrivateClinic


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='hea_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='hea_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dl_session_keys'


class DmfLosCud(models.Model):
    type_of_losses = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmf_los_cud'


class DmfDfaNum(models.Model):
    num_des_facilities = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.BigIntegerField(blank=True, null=True)
    divisional_hospital = models.IntegerField(blank=True, null=True)
    rural_hospital = models.BigIntegerField(blank=True, null=True)
    central_dispensary = models.BigIntegerField(blank=True, null=True)
    pmcus = models.BigIntegerField(blank=True, null=True)
    phccs = models.BigIntegerField(blank=True, null=True)
    mchcs = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmf_dfa_num'


class DmfDfaPaf(models.Model):
    num_patients_affected = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.BigIntegerField(blank=True, null=True)
    divisional_hospital = models.IntegerField(blank=True, null=True)
    rural_hospital = models.BigIntegerField(blank=True, null=True)
    central_dispensary = models.BigIntegerField(blank=True, null=True)
    pmcus = models.BigIntegerField(blank=True, null=True)
    phccs = models.BigIntegerField(blank=True, null=True)
    mchcs = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmf_dfa_paf'


class DmfDaStructure(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmf_da_structure'


class DmfDaSupplies(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmf_da_supplies'


class DmfDaMequipment(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmf_da_mequipment'


class DmfDaOassets(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmf_da_oassets'


class DmfPdfaNum(models.Model):
    num_pdamaged_facilities = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.BigIntegerField(blank=True, null=True)
    divisional_hospital = models.BigIntegerField(blank=True, null=True)
    rural_hospital = models.BigIntegerField(blank=True, null=True)
    central_dispensary = models.BigIntegerField(blank=True, null=True)
    pmcus = models.BigIntegerField(blank=True, null=True)
    phccs = models.BigIntegerField(blank=True, null=True)
    mchcs = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmf_pdfa_num'


class DmfPdfaPaf(models.Model):
    num_patients_affected = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.BigIntegerField(blank=True, null=True)
    divisional_hospital = models.BigIntegerField(blank=True, null=True)
    rural_hospital = models.BigIntegerField(blank=True, null=True)
    central_dispensary = models.BigIntegerField(blank=True, null=True)
    pmcus = models.BigIntegerField(blank=True, null=True)
    phccs = models.BigIntegerField(blank=True, null=True)
    mchcs = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmf_pdfa_paf'


class DmfPdaStructure(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmf_pda_structure'


class DmfPdaMequipment(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmf_pda_mequipment'


class DmfPdaOassets(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmf_pda_oassets'


class DmfLosFi(models.Model):
    type_of_losses = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmf_los_fi'


class DmfLosHoc(models.Model):
    type_of_losses = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmf_los_hoc'


class DmfLosOue(models.Model):
    type_of_losses = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmf_los_oue'


# table 8
class DshPubLmh(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pub_lmh'


class DshPubMoh(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pub_moh'


class DshPubOmf(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pub_omf'


class DshPvtFa(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pvt_fa'


class DshTdlOwship(models.Model):
    ownership = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dsh_tdl_owship'


# table 10
class DsnPubP1Lmh(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsn_pub_p1_lmh'


class DsnPubP1Moh(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsn_pub_p1_moh'


class DsnPubP1Omc(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsn_pub_p1_omc'


class DsnPubPnLmh(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsn_pub_pn_lmh'


class DsnPubPnMoh(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsn_pub_pn_moh'


class DsnPubPnOmc(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsn_pub_pn_omc'


class DsnPvtP1(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsn_pvt_p1'


class DsnPvtPn(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsn_pvt_pn'


class DsnTdlOwship(models.Model):
    ownership = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dsn_tdl_owship'


class DmhDfNum(models.Model):
    num_des_facilities = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.BigIntegerField(blank=True, null=True)
    provincial_general_hospital = models.BigIntegerField(blank=True, null=True)
    district_general_hospital = models.BigIntegerField(blank=True, null=True)
    office = models.BigIntegerField(blank=True, null=True)
    other = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmh_df_num'


class DmhDfPaf(models.Model):
    num_patients_affected = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.BigIntegerField(blank=True, null=True)
    provincial_general_hospital = models.BigIntegerField(blank=True, null=True)
    district_general_hospital = models.BigIntegerField(blank=True, null=True)
    office = models.BigIntegerField(blank=True, null=True)
    other = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmh_df_paf'


class DmhNdatFacStructure(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmh_ndat_fac_structure'


class DmhNdatFacSupplies(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmh_ndat_fac_supplies'


class DmhNdatFacMequipment(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmh_ndat_fac_mequipment'


class DmhNdatFacOassets(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmh_ndat_fac_oassets'


# tab 3
class DmhPdfaNum(models.Model):
    num_des_facilities = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.BigIntegerField(blank=True, null=True)
    provincial_general_hospital = models.BigIntegerField(blank=True, null=True)
    district_general_hospital = models.BigIntegerField(blank=True, null=True)
    office = models.BigIntegerField(blank=True, null=True)
    other = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmh_pdfa_num'


class DmhPdfaPaf(models.Model):
    num_patients_affected = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.BigIntegerField(blank=True, null=True)
    provincial_general_hospital = models.BigIntegerField(blank=True, null=True)
    district_general_hospital = models.BigIntegerField(blank=True, null=True)
    office = models.BigIntegerField(blank=True, null=True)
    other = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmh_pdfa_paf'


class DmhPdfaStructure(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmh_pdfa_structure'


class DmhPdfaMequipment(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmh_pdfa_mequipment'


class DmhPdfaOassets(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmh_pdfa_oassets'


class DmhLosFi(models.Model):
    type_of_losses = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmh_los_fi'


class DmhLosCud(models.Model):
    type_of_losses = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmh_los_cud'


class DmhLosHoc(models.Model):
    type_of_losses = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmh_los_hoc'


class DmhLosOue(models.Model):
    type_of_losses = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    office = models.FloatField(blank=True, null=True)
    other = models.FloatField(blank=True, null=True)
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
        db_table = 'health\".\"dmh_los_oue'


class DapNapTmf(models.Model):
    type_med_fac = models.CharField(max_length=255, blank=True, null=True)
    num_affected_fac = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dap_nap_tmf'


class DapBefPc1(models.Model):
    pvt_clinics = models.CharField(max_length=255, blank=True, null=True)
    est_replacement_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    est_losses_y1 = models.FloatField(blank=True, null=True)
    est_losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dap_bef_pc1'


class DapBefPc(models.Model):
    pvt_clinics = models.CharField(max_length=255, blank=True, null=True)
    est_replacement_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    est_losses_y1 = models.FloatField(blank=True, null=True)
    est_losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    private_clinic = models.ForeignKey(PrivateClinic, db_column='private_clinic', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dap_bef_pc'


class DapBefPcn(models.Model):
    pvt_clinics = models.CharField(max_length=255, blank=True, null=True)
    est_replacement_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    est_losses_y1 = models.FloatField(blank=True, null=True)
    est_losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dap_bef_pcn'


class DapBefOther(models.Model):
    pvt_clinics = models.CharField(max_length=255, blank=True, null=True)
    est_replacement_cost = models.FloatField(blank=True, null=True)
    est_repair_cost = models.FloatField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    est_losses_y1 = models.FloatField(blank=True, null=True)
    est_losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dap_bef_other'


class DspPubD1Lmh(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_d1_lmh'


class DspPubDnLmh(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_dn_lmh'


class DspPubD1Moh(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_d1_moh'


class DspPubDnMoh(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_dn_moh'


class DspPubD1Omc(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_d1_omc'


class DspPubDnOmc(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_dn_omc'


class DspPvtD1(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pvt_d1'


class DspPvtDn(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pvt_dn'


class DspTdlOwship(models.Model):
    ownership = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_tdl_owship'


class DshPubLmhProvince(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pub_lmh_province'


class DshPubOmfProvince(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pub_omf_province'


class DshPvtFaProvince(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pvt_fa_province'


class DshTdlOwshipProvince(models.Model):
    ownership = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_tdl_owship_province'


class DspPubD1LmhNational(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_d1_lmh_national'


class DspPubD1MohNational(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_d1_moh_national'


class DspPubD1OmcNational(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_d1_omc_national'


class DspPubDnLmhNational(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_dn_lmh_national'


class DspPubDnMohNational(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_dn_moh_national'


class DspPubDnOmcNational(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pub_dn_omc_national'


class DspPvtD1National(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pvt_d1_national'


class DspPvtDnNational(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsp_pvt_dn_national'


class DshPubMohProvince(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pub_moh_province'


class DshPubLmhDistrict(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pub_lmh_district'


class DshPubMohDistrict(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pub_moh_district'


class DshPubOmfDistrict(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pub_omf_district'


class DshPvtFaDistrict(models.Model):
    facilities_assets = models.CharField(max_length=255, blank=True, null=True)
    total_num_affected = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total_damages = models.FloatField(blank=True, null=True)
    losses_y1 = models.FloatField(blank=True, null=True)
    losses_y2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dsh_pvt_fa_district'


class DmhLmhMohDistrict(models.Model):
    teaching_hospital = models.BigIntegerField(blank=True, null=True)
    provincial_general_hospital = models.BigIntegerField(blank=True, null=True)
    district_general_hospital = models.BigIntegerField(blank=True, null=True)
    office = models.BigIntegerField(blank=True, null=True)
    other = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmh_lmh_moh_district'


class DmhPafDistrict(models.Model):
    num_patients_affected = models.CharField(max_length=255, blank=True, null=True)
    teaching_hospital = models.BigIntegerField(blank=True, null=True)
    provincial_general_hospital = models.BigIntegerField(blank=True, null=True)
    district_general_hospital = models.BigIntegerField(blank=True, null=True)
    office = models.BigIntegerField(blank=True, null=True)
    other = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmh_paf_district'


class DmhDamagesDistrict(models.Model):
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmh_damages_district'


class DmhLosDistrict(models.Model):
    teaching_hospital = models.FloatField(blank=True, null=True)
    provincial_general_hospital = models.FloatField(blank=True, null=True)
    district_general_hospital = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmh_los_district'


class DmhDamagesMohDistrict(models.Model):
    office = models.BigIntegerField(blank=True, null=True)
    other = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmh_damages_moh_district'


class DmfTotAffectedDistrict(models.Model):
    base_hospital = models.BigIntegerField(blank=True, null=True)
    divisional_hospital = models.IntegerField(blank=True, null=True)
    rural_hospital = models.BigIntegerField(blank=True, null=True)
    central_dispensary = models.BigIntegerField(blank=True, null=True)
    pmcus = models.BigIntegerField(blank=True, null=True)
    phccs = models.BigIntegerField(blank=True, null=True)
    mchcs = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmf_tot_affected_district'


class DmfOmfTpaDistrict(models.Model):
    num_patients_affected = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.BigIntegerField(blank=True, null=True)
    divisional_hospital = models.IntegerField(blank=True, null=True)
    rural_hospital = models.BigIntegerField(blank=True, null=True)
    central_dispensary = models.BigIntegerField(blank=True, null=True)
    pmcus = models.BigIntegerField(blank=True, null=True)
    phccs = models.BigIntegerField(blank=True, null=True)
    mchcs = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmf_omf_tpa_district'


class DmfDamagesDistrict(models.Model):
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmf_damages_district'


class DmfLosDistrict(models.Model):
    type_of_losses = models.CharField(max_length=255, blank=True, null=True)
    base_hospital = models.FloatField(blank=True, null=True)
    divisional_hospital = models.FloatField(blank=True, null=True)
    rural_hospital = models.FloatField(blank=True, null=True)
    central_dispensary = models.FloatField(blank=True, null=True)
    pmcus = models.FloatField(blank=True, null=True)
    phccs = models.FloatField(blank=True, null=True)
    mchcs = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dmf_los_district'


class DapPvtDistrict(models.Model):
    type_med_fac = models.CharField(max_length=255, blank=True, null=True)
    num_affected_fac = models.BigIntegerField(blank=True, null=True)
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dap_pvt_district'


class DapBefPcDistrict(models.Model):
    est_replacement_cost = models.FloatField(blank=True, null=True)
    est_losses_y1 = models.FloatField(blank=True, null=True)
    est_losses_y2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dap_bef_pc_district'


class DapBefOtherDistrict(models.Model):
    est_replacement_cost = models.FloatField(blank=True, null=True)
    est_losses_y1 = models.FloatField(blank=True, null=True)
    est_losses_y2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'health\".\"dap_bef_other_district'