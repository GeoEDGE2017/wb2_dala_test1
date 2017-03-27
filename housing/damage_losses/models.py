from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='hous_dl_incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='hous_dl_incident', blank=True, null=True)

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
































