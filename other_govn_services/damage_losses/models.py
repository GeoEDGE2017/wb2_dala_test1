from django.db import models
from settings.models import District, Province
from other_govn_services.base_line.models import Ownership, Department
from incidents.models import IncidentReport


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='ogs_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ogs_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dl_session_keys'


class DlaOagenciesNatn(models.Model):
    asset_owship = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dla_oagencies_natn'


class DlaProvince(models.Model):
    asset_owship = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dla_province'


class DladAowshipDgovn(models.Model):
    asset_owship = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlad_aowship_dgovn'


class DladAowshipPgovn(models.Model):
    asset_owship = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlad_aowship_pgovn'


class DladAowshipMoagency(models.Model):
    asset_owship = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlad_aowship_moagency'


class DlagdDmgMachinery(models.Model):
    name_dept = models.CharField(max_length=255, blank=True, null=True)
    num_tot_destroyed = models.IntegerField(blank=True, null=True)
    num_partial_damaged = models.IntegerField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlagd_dmg_machinery'


class DlagdDmgOfficeEquipment(models.Model):
    name_dept = models.CharField(max_length=255, blank=True, null=True)
    num_tot_destroyed = models.IntegerField(blank=True, null=True)
    num_partial_damaged = models.IntegerField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlagd_dmg_office_equipment'


class DlagdDmgStructure(models.Model):
    name_dept = models.CharField(max_length=255, blank=True, null=True)
    td_num_structures = models.IntegerField(blank=True, null=True)
    td_total_squarem = models.FloatField(blank=True, null=True)
    pd_num_structures = models.IntegerField(blank=True, null=True)
    pd_total_squarem_roof = models.FloatField(blank=True, null=True)
    pd_total_squarem_wall = models.FloatField(blank=True, null=True)
    pd_total_squarem_floor = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlagd_dmg_structure'


class DlagdLosses(models.Model):
    name_dept = models.CharField(max_length=255, blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlagd_losses'


class DlagdDmgDistrict(models.Model):
    damages = models.FloatField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    department = models.ForeignKey(Department, db_column='department', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlagd_dmg_district'


class DlagdLossesDistrict(models.Model):
    los_year1 = models.FloatField(max_length=255, blank=True, null=True)
    los_year2 = models.FloatField(max_length=255, blank=True, null=True)
    total_losses = models.FloatField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    department = models.ForeignKey(Department, db_column='department', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlagd_losses_district'


class DlagdDmgProvince(models.Model):
    damages = models.FloatField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.ForeignKey(Ownership, db_column='ownership', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlagd_dmg_province'


class DlagdLossesProvince(models.Model):
    los_year1 = models.FloatField(max_length=255, blank=True, null=True)
    los_year2 = models.FloatField(max_length=255, blank=True, null=True)
    total_losses = models.FloatField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.ForeignKey(Ownership, db_column='ownership', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlagd_losses_province'


class DlagdDmgNational(models.Model):
    damages = models.FloatField(max_length=255, blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.ForeignKey(Ownership, db_column='ownership', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlagd_dmg_national'


class DlagdLossesNational(models.Model):
    los_year1 = models.FloatField(max_length=255, blank=True, null=True)
    los_year2 = models.FloatField(max_length=255, blank=True, null=True)
    total_losses = models.FloatField(max_length=255, blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.ForeignKey(Ownership, db_column='ownership', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'other_government\".\"dlagd_losses_national'

