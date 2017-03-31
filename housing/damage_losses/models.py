from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', related_name='house_dl_incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='house_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='house_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_session_keys'


# Table 3
class DlDesPermanent(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    per_cent_tot_rent = models.FloatField(blank=True, null=True)
    tot_sqm_destroyed = models.FloatField(blank=True, null=True)
    house_val_affected = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_des_permanent'


class DlDesSemiPermanent(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    per_cent_tot_rent = models.FloatField(blank=True, null=True)
    tot_sqm_destroyed = models.FloatField(blank=True, null=True)
    house_val_affected = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_des_semi_permanent'


class DlDesImprovised(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    per_cent_tot_rent = models.FloatField(blank=True, null=True)
    tot_sqm_destroyed = models.FloatField(blank=True, null=True)
    house_val_affected = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_des_improvised'


class DlPdesPermanent(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    per_cent_tot_rent = models.FloatField(blank=True, null=True)
    tot_sqm_roof = models.FloatField(blank=True, null=True)
    tot_sqm_wall = models.FloatField(blank=True, null=True)
    tot_sqm_floor = models.FloatField(blank=True, null=True)
    house_val_affected = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_pdes_permanent'


class DlPdesSemiPermanent(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    per_cent_tot_rent = models.FloatField(blank=True, null=True)
    tot_sqm_roof = models.FloatField(blank=True, null=True)
    tot_sqm_wall = models.FloatField(blank=True, null=True)
    tot_sqm_floor = models.FloatField(blank=True, null=True)
    house_val_affected = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_pdes_semi_permanent'


class DlPdesImprovised(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    per_cent_tot_rent = models.FloatField(blank=True, null=True)
    tot_sqm_roof = models.FloatField(blank=True, null=True)
    tot_sqm_wall = models.FloatField(blank=True, null=True)
    tot_sqm_floor = models.FloatField(blank=True, null=True)
    house_val_affected = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_pdes_improvised'


class DlLosPermanent(models.Model):
    tot_num_des_houses = models.BigIntegerField(blank=True, null=True)
    tot_num_dmg_houses = models.BigIntegerField(blank=True, null=True)
    frg_income = models.FloatField(blank=True, null=True)
    avg_cost_clean = models.FloatField(blank=True, null=True)
    avg_un_expenses = models.FloatField(blank=True, null=True)
    losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_permanent'


class DlLosSemiPermanent(models.Model):
    tot_num_des_houses = models.BigIntegerField(blank=True, null=True)
    tot_num_dmg_houses = models.BigIntegerField(blank=True, null=True)
    frg_income = models.FloatField(blank=True, null=True)
    avg_cost_clean = models.FloatField(blank=True, null=True)
    avg_un_expenses = models.FloatField(blank=True, null=True)
    losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_semi_permanent'


class DlLosImprovised(models.Model):
    tot_num_des_houses = models.BigIntegerField(blank=True, null=True)
    tot_num_dmg_houses = models.BigIntegerField(blank=True, null=True)
    frg_income = models.FloatField(blank=True, null=True)
    avg_cost_clean = models.FloatField(blank=True, null=True)
    avg_un_expenses = models.FloatField(blank=True, null=True)
    losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_improvised'


# Table 4

class DlDmgImpDistrict(models.Model):
    tot_damages = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_dmg_imp_district'


class DlDmgPerDistrict(models.Model):
    tot_damages = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_dmg_per_district'


class DlDmgSemiPerDistrict(models.Model):
    tot_damages = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_dmg_semi_per_district'


class DlLosImpDistrict(models.Model):
    tot_losses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_imp_district'


class DlLosPerDistrict(models.Model):
    tot_losses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_per_district'


class DlLosSemiPerDistrict(models.Model):
    tot_losses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_semi_per_district'


class DlNumDesImpDistrict(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_des_imp_district'


class DlNumDesPerDistrict(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_des_per_district'


class DlNumDesSemiPerDistrict(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_des_semi_per_district'


class DlNumPdesImpDistrict(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_pdes_imp_district'


class DlNumPdesPerDistrict(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_pdes_per_district'


class DlNumPdesSemiPerDistrict(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_pdes_semi_per_district'


# Table 5

class DlDmgImpProvince(models.Model):
    tot_damages = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_dmg_imp_province'


class DlDmgPerProvince(models.Model):
    tot_damages = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_dmg_per_province'


class DlDmgSemiPerProvince(models.Model):
    tot_damages = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_dmg_semi_per_province'


class DlLosImpProvince(models.Model):
    tot_losses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_imp_province'


class DlLosPerProvince(models.Model):
    tot_losses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_per_province'


class DlLosSemiPerProvince(models.Model):
    tot_losses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_semi_per_province'


class DlNumDesImpProvince(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_des_imp_province'


class DlNumDesPerProvince(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_des_per_province'


class DlNumDesSemiPerProvince(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_des_semi_per_province'


class DlNumPdesImpProvince(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_pdes_imp_province'


class DlNumPdesPerProvince(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_pdes_per_province'


class DlNumPdesSemiPerProvince(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_pdes_semi_per_province'


# Table 6


class DlDmgImpNational(models.Model):
    tot_damages = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_dmg_imp_national'


class DlDmgPerNational(models.Model):
    tot_damages = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_dmg_per_national'


class DlDmgSemiPerNational(models.Model):
    tot_damages = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_dmg_semi_per_national'


class DlLosImpNational(models.Model):
    tot_losses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_imp_national'


class DlLosPerNational(models.Model):
    tot_losses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_per_national'


class DlLosSemiPerNational(models.Model):
    tot_losses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_los_semi_per_national'


class DlNumDesImpNational(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_des_imp_national'


class DlNumDesPerNational(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_des_per_national'


class DlNumDesSemiPerNational(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_des_semi_per_national'


class DlNumPdesImpNational(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_pdes_imp_national'


class DlNumPdesPerNational(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_pdes_per_national'


class DlNumPdesSemiPerNational(models.Model):
    tot_num_houses = models.BigIntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'housing\".\"dl_num_pdes_semi_per_national'
