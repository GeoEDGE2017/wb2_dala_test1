from django.db import models
from settings.models import District, Province
from incidents.models import IncidentReport
from mining.base_line.models import Firm


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='mi_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='mi_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dl_session_keys'


class DloDmgMachinery(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    rep_tot_dassets = models.IntegerField(blank=True, null=True)
    repair_pdmg_assets = models.IntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dlo_dmg_machinery'


class DloDmgStocks(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    rep_tot_dassets = models.IntegerField(blank=True, null=True)
    repair_pdmg_assets = models.IntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dlo_dmg_stocks'


class DloLosPlos(models.Model):
    type_los = models.CharField(max_length=255, blank=True, null=True)
    avg_per_year = models.FloatField(blank=True, null=True)
    red_voutput_year1 = models.FloatField(blank=True, null=True)
    red_voutput_year2 = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dlo_los_plos'


class DloLosOlos(models.Model):
    type_los = models.CharField(max_length=255, blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dlo_los_olos'


class DloNumEmps(models.Model):
    male = models.IntegerField(blank=True, null=True)
    female = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dlo_num_emps'


class DlaDmgStructures(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    rep_tot_dassets = models.IntegerField(blank=True, null=True)
    repair_pdmg_assets = models.IntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dla_dmg_structures'


class DlaDmgEquipment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    rep_tot_dassets = models.IntegerField(blank=True, null=True)
    repair_pdmg_assets = models.IntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dla_dmg_equipment'


class DlaDmgStocks(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    rep_tot_dassets = models.IntegerField(blank=True, null=True)
    repair_pdmg_assets = models.IntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dla_dmg_stocks'


class DlaDmgMachinery(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    rep_tot_dassets = models.IntegerField(blank=True, null=True)
    repair_pdmg_assets = models.IntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dla_dmg_machinery'


class DlnTmpPn(models.Model):
    type_min_firms = models.CharField(max_length=255, blank=True, null=True)
    year1_damages_pub = models.FloatField(blank=True, null=True)
    year1_damages_pvt = models.FloatField(blank=True, null=True)
    year1_losses_pub = models.FloatField(blank=True, null=True)
    year1_losses_pvt = models.FloatField(blank=True, null=True)
    year2_losses_pub = models.FloatField(blank=True, null=True)
    year2_losses_pvt = models.FloatField(blank=True, null=True)
    total_pub = models.FloatField(blank=True, null=True)
    total_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dln_tmp_pn'


class DlaLosOlos(models.Model):
    type_los = models.CharField(max_length=255, blank=True, null=True)
    avg_per_year = models.FloatField(blank=True, null=True)
    red_voutput_year1 = models.FloatField(blank=True, null=True)
    red_voutput_year2 = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dla_los_olos'


class DlaLosPlos(models.Model):
    type_los = models.CharField(max_length=255, blank=True, null=True)
    avg_per_year = models.FloatField(blank=True, null=True)
    red_voutput_year1 = models.FloatField(blank=True, null=True)
    red_voutput_year2 = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dla_los_plos'


class DlaDmgDistrict(models.Model):
    rep_tot_dassets = models.IntegerField(blank=True, null=True)
    repair_pdmg_assets = models.IntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dla_dmg_district'


class DloLosOlosDistrict(models.Model):
    type_los = models.CharField(max_length=255, blank=True, null=True)
    los_year1 = models.IntegerField(blank=True, null=True)
    los_year2 = models.IntegerField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    firm = models.ForeignKey(Firm, db_column='firm_id', blank=True, null=True)
    ownership = models.CharField(max_length=50, db_column='ownership', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dlo_los_olos_disrtict'


class DloDmgEquipment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    rep_tot_dassets = models.IntegerField(blank=True, null=True)
    repair_pdmg_assets = models.IntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    firm = models.ForeignKey(Firm, db_column='firm_id', blank=True, null=True)
    ownership = models.CharField(max_length=50, db_column='ownership', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dlo_dmg_equipment'


class DloDmgStructures(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    rep_tot_dassets = models.IntegerField(blank=True, null=True)
    repair_pdmg_assets = models.IntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dlo_dmg_structures'


class DloDmgDistrict(models.Model):
    rep_tot_dassets = models.IntegerField(blank=True, null=True)
    repair_pdmg_assets = models.IntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dlo_dmg_district'


class DloDmgVehicles(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    rep_tot_dassets = models.IntegerField(blank=True, null=True)
    repair_pdmg_assets = models.IntegerField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    firm = models.ForeignKey(Firm, db_column='firm_id', blank=True, null=True)
    ownership = models.CharField(max_length=50, db_column='ownership', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dlo_dmg_vehicles'


class DldTmfIfProvince(models.Model):
    type_min_firms = models.CharField(max_length=255, blank=True, null=True)
    year1_damages_pub = models.FloatField(blank=True, null=True)
    year1_damages_pvt = models.FloatField(blank=True, null=True)
    year1_losses_pub = models.FloatField(blank=True, null=True)
    year1_losses_pvt = models.FloatField(blank=True, null=True)
    year2_losses_pub = models.FloatField(blank=True, null=True)
    year2_losses_pvt = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dld_tmf_if_province'


class DldTmfAmProvince(models.Model):
    type_min_firms = models.CharField(max_length=255, blank=True, null=True)
    year1_damages_pub = models.FloatField(blank=True, null=True)
    year1_damages_pvt = models.FloatField(blank=True, null=True)
    year1_losses_pub = models.FloatField(blank=True, null=True)
    year1_losses_pvt = models.FloatField(blank=True, null=True)
    year2_losses_pub = models.FloatField(blank=True, null=True)
    year2_losses_pvt = models.FloatField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dld_tmf_am_province'


class DlaLosDistrict(models.Model):
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dla_los_district'


class DloLosDistrict(models.Model):
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    firm = models.ForeignKey(Firm, blank=True, db_column='firm_id', null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mining\".\"dlo_los_district'
