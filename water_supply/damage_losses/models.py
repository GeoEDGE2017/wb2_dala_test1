from django.db import models
from incidents.models import IncidentReport
from settings.models import District, Province


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', related_name='ws_dl_incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='ws_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ws_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dl_session_keys'


# Table 3   DlcwNumClients, DlcwNumEmployees, DlcwDmgWaterIntake, DlcwDmgWaterTreatment, DlcwDmgWaterDisribution, DlcwDmgMainOffice, DlcwLosProduction, DlcwLosOther
class DlcwNumClients(models.Model):
    residential = models.BigIntegerField(blank=True, null=True)
    commercial = models.BigIntegerField(blank=True, null=True)
    industrial = models.BigIntegerField(blank=True, null=True)
    others = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_num_clients'


class DlcwNumEmployees(models.Model):
    male = models.BigIntegerField(blank=True, null=True)
    female = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_num_employees'


class DlcwDmgWaterIntake(models.Model):
    num_tot_destoyed = models.BigIntegerField(blank=True, null=True)
    num_part_damaged = models.BigIntegerField(blank=True, null=True)
    total_dmgs = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_dmg_water_intake'


class DlcwDmgWaterTreatment(models.Model):
    num_tot_destoyed = models.BigIntegerField(blank=True, null=True)
    num_part_damaged = models.BigIntegerField(blank=True, null=True)
    total_dmgs = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_dmg_water_treatment'


class DlcwDmgWaterDisribution(models.Model):
    num_tot_destoyed = models.BigIntegerField(blank=True, null=True)
    num_part_damaged = models.BigIntegerField(blank=True, null=True)
    total_dmgs = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_dmg_water_disribution'


class DlcwDmgMainOffice(models.Model):
    num_tot_destoyed = models.BigIntegerField(blank=True, null=True)
    num_part_damaged = models.BigIntegerField(blank=True, null=True)
    total_dmgs = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_dmg_main_office'


class DlcwLosProduction(models.Model):
    production_los = models.CharField(max_length=255, blank=True, null=True)
    avg_income = models.FloatField(blank=True, null=True)
    est_inc_year_1 = models.FloatField(blank=True, null=True)
    est_inc_year_2 = models.FloatField(blank=True, null=True)
    tot_los_year_1 = models.FloatField(blank=True, null=True)
    tot_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_los_production'


class DlcwLosOther(models.Model):
    other_los = models.CharField(max_length=255, blank=True, null=True)
    tot_los_year_1 = models.FloatField(blank=True, null=True)
    tot_los_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_los_other'


# Table 4
class DlRuralDmg(models.Model):
    type_water_supply = models.CharField(max_length=255, blank=True, null=True)
    families_affected = models.BigIntegerField(blank=True, null=True)
    tot_destroyed_assets = models.BigIntegerField(blank=True, null=True)
    part_damaged_assets = models.BigIntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dl_rural_dmg'


class DlRuralLos(models.Model):
    type_water_supply = models.CharField(max_length=255, blank=True, null=True)
    cleaning_debris = models.FloatField(blank=True, null=True)
    high_ocost = models.FloatField(blank=True, null=True)
    other_unexpected_exps = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dl_rural_los'


class DlcwTotDmgDistrict(models.Model):
    dlcw_tot_dmg = models.IntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_tot_dmg_district'


class DlRuralTotDmgDistrict(models.Model):
    tot_damages = models.IntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dl_rural_tot_dmg_district'


class DlRuralTotLosDistrict(models.Model):
    tot_los = models.IntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dl_rural_tot_los_district'

# National


class DlcwNumClientsProvince(models.Model):
    residential = models.BigIntegerField(blank=True, null=True)
    commercial = models.BigIntegerField(blank=True, null=True)
    industrial = models.BigIntegerField(blank=True, null=True)
    others = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_num_clients_province'


class DlRuralDmgProvince(models.Model):
    type_water_supply = models.CharField(max_length=255, blank=True, null=True)
    families_affected = models.BigIntegerField(blank=True, null=True)
    tot_destroyed_assets = models.BigIntegerField(blank=True, null=True)
    part_damaged_assets = models.BigIntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
            managed = False
            db_table = 'water_supply\".\"dl_rural_dmg_province'


class DlcwTotDmgProvince(models.Model):
    dlcw_tot_dmg = models.IntegerField(blank=True, null=True)
    sum_tot = models.IntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_tot_dmg_province'


class DlcwTotLosProvince(models.Model):
    tot_los_year1 = models.IntegerField(blank=True, null=True)
    tot_los_year2 = models.IntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_tot_los_province'


class DlRuralTotLosProvince(models.Model):
    tot_los = models.IntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dl_rural_tot_los_province'


class DlcwNumAfNational(models.Model):
    tot_dmg_residential = models.BigIntegerField(blank=True, null=True)
    tot_dmg_commercial = models.BigIntegerField(blank=True, null=True)
    tot_dmg_industrial = models.BigIntegerField(blank=True, null=True)
    tot_dmg_others = models.BigIntegerField(blank=True, null=True)
    tot_dmg_total = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_num_af_national'


class DlRuralNumAfNational(models.Model):
    type_water_supply = models.CharField(max_length=255, blank=True, null=True)
    families_affected = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dl_rural_num_af_national'


class DlcwDmgNational(models.Model):
    sum = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_dmg_national'



class DlcwNumClientsNational(models.Model):
    residential = models.BigIntegerField(blank=True, null=True)
    commercial = models.BigIntegerField(blank=True, null=True)
    industrial = models.BigIntegerField(blank=True, null=True)
    others = models.BigIntegerField(blank=True, null=True)
    total = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_num_clients_national'


class DlcwLosNational(models.Model):
    tot_los_year1 = models.BigIntegerField(blank=True, null=True)
    tot_los_year2 = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dlcw_los_national'


class DlRuralDmgNational(models.Model):
    type_water_supply = models.CharField(max_length=255, blank=True, null=True)
    tot_damages = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dl_rural_dmg_national'


class DlRuralLosNational(models.Model):
    tot_los = models.BigIntegerField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'water_supply\".\"dl_rural_los_national'


