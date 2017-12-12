from __future__ import unicode_literals

from django.db import models

from industry_services.base_line.models import FormalFirmTypes, BusinessClassification, FrmFirm
from settings.models import District, Province
from incidents.models import IncidentReport


class DlBriefDesFirm(models.Model):
    incident = models.ForeignKey(IncidentReport,  db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District,  db_column='district', blank=True, null=True)
    firm_type = models.ForeignKey(FormalFirmTypes,  db_column='firm_type', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    classification = models.ForeignKey(BusinessClassification,  db_column='classification', blank=True, null=True)
    components = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=3000, blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_brief_des_firm'
        db_table = 'industry_services\".\"business_classification'


class DlFirmNumEmp(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    firm_type = models.ForeignKey(FormalFirmTypes, db_column='firm_type', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    num_male = models.BigIntegerField(blank=True, null=True)
    num_female = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    classification = models.ForeignKey(BusinessClassification,  db_column='classification', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_firm_num_emp'


class DlInfDmgTypBusiness(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    tot_num_bus_affected = models.FloatField(blank=True, null=True)
    replace_val_ast_destroyed = models.FloatField(blank=True, null=True)
    repair_val_ast_damaged = models.FloatField(blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_dmg_typ_business'


class DlInfLosTypFood(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    avg_val_output_year = models.FloatField(blank=True, null=True)
    est_val_output_year1 = models.FloatField(blank=True, null=True)
    est_val_output_year2 = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_los_typ_food'


class DlInfLosTypOther(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    avg_val_output_year = models.FloatField(blank=True, null=True)
    est_val_output_year1 = models.FloatField(blank=True, null=True)
    est_val_output_year2 = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_los_typ_other'


class DlInfLosTypServices(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    avg_val_output_year = models.FloatField(blank=True, null=True)
    est_val_output_year1 = models.FloatField(blank=True, null=True)
    est_val_output_year2 = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_los_typ_services'


class DlInfLosTypTrading(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    avg_val_output_year = models.FloatField(blank=True, null=True)
    est_val_output_year1 = models.FloatField(blank=True, null=True)
    est_val_output_year2 = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_los_typ_trading'


class DlNumAffBusIndustry(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_bus_public = models.BigIntegerField(blank=True, null=True)
    num_bus_private = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    year1_damages_pub = models.FloatField(blank=True, null=True)
    year1_damages_pvt = models.FloatField(blank=True, null=True)
    year1_losses_pub = models.FloatField(blank=True, null=True)
    year1_losses_pvt = models.FloatField(blank=True, null=True)
    year2_losses_pub = models.FloatField(blank=True, null=True)
    year2_losses_pvt = models.FloatField(blank=True, null=True)
    pub_total = models.FloatField(blank=True, null=True)
    pvt_total = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_num_aff_bus_industry'


class DlNumAffBusServices(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_bus_public = models.BigIntegerField(blank=True, null=True)
    num_bus_private = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    year1_damages_pub = models.FloatField(blank=True, null=True)
    year1_damages_pvt = models.FloatField(blank=True, null=True)
    year1_losses_pub = models.FloatField(blank=True, null=True)
    year1_losses_pvt = models.FloatField(blank=True, null=True)
    year2_losses_pub = models.FloatField(blank=True, null=True)
    year2_losses_pvt = models.FloatField(blank=True, null=True)
    pub_total = models.FloatField(blank=True, null=True)
    pvt_total = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_num_aff_bus_services'


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', related_name='t_dl_incident',blank=True, null=True)
    province = models.ForeignKey(Province,  db_column='province', related_name='ind_ser_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='ind_ser_dl_district', blank=True, null=True)
    frm_firm = models.ForeignKey(FrmFirm, db_column='frm_firm', related_name='ind_ser_dl_frm_firm', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    bs_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_session_keys'


class DmgAstEquipment(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    frm_firm = models.ForeignKey(FrmFirm, db_column='frm_firm',  blank=True,null=True)
    firm_type = models.ForeignKey(FormalFirmTypes, db_column='firm_type', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    classification = models.ForeignKey(BusinessClassification,  db_column='classification', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    replace_val_destroyed = models.FloatField(blank=True, null=True)
    repair_val_damaged = models.FloatField(blank=True, null=True)
    tot_damaged = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_ast_equipment'


class DmgAstMachinery(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    frm_firm = models.ForeignKey(FrmFirm, db_column='frm_firm',  blank=True,null=True)
    firm_type = models.ForeignKey(FormalFirmTypes, db_column='firm_type', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    classification = models.ForeignKey(BusinessClassification,  db_column='classification', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    replace_val_destroyed = models.FloatField(blank=True, null=True)
    repair_val_damaged = models.FloatField(blank=True, null=True)
    tot_damaged = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_ast_machinery'


class DmgAstStocks(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    frm_firm = models.ForeignKey(FrmFirm, db_column='frm_firm',  blank=True,null=True)
    firm_type = models.ForeignKey(FormalFirmTypes, db_column='firm_type', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    classification = models.ForeignKey(BusinessClassification,  db_column='classification', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    replace_val_destroyed = models.FloatField(blank=True, null=True)
    repair_val_damaged = models.FloatField(blank=True, null=True)
    tot_damaged = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_ast_stocks'


class DmgAstStructures(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    frm_firm = models.ForeignKey(FrmFirm, db_column='frm_firm',  blank=True,null=True)
    firm_type = models.ForeignKey(FormalFirmTypes, db_column='firm_type', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    classification = models.ForeignKey(BusinessClassification,  db_column='classification', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    replace_val_destroyed = models.FloatField(blank=True, null=True)
    repair_val_damaged = models.FloatField(blank=True, null=True)
    tot_damaged = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_ast_structures'


class DmgAstVehicles(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    frm_firm = models.ForeignKey(FrmFirm, db_column='frm_firm',  blank=True,null=True)
    firm_type = models.ForeignKey(FormalFirmTypes, db_column='firm_type', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    classification = models.ForeignKey(BusinessClassification,  db_column='classification', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    replace_val_destroyed = models.FloatField(blank=True, null=True)
    repair_val_damaged = models.FloatField(blank=True, null=True)
    tot_damaged = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_ast_vehicles'


class LosTypeLossses(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    frm_firm = models.ForeignKey(FrmFirm, db_column='frm_firm',  blank=True,null=True)
    firm_type = models.ForeignKey(FormalFirmTypes, db_column='firm_type', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    classification = models.ForeignKey(BusinessClassification,  db_column='classification', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    avg_val_output_year = models.FloatField(blank=True, null=True)
    est_val_output_year1 = models.FloatField(blank=True, null=True)
    est_val_output_year2 = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_type_lossses'


class DmgTotFrmYear1National(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_tot_frm_year1_national'


class DmgTotInfYear1National(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_tot_inf_year1_national'


class LosTotFrmYear1National(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_frm_year1_national'


class LosTotFrmYear2National(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_frm_year2_national'


class LosTotInfYear1National(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_inf_year1_national'


class LosTotInfYear2National(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_inf_year2_national'


# Distric models

class DmgTotFrmYear1District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_tot_frm_year1_district'


class DmgTotInfYear1District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_tot_inf_year1_district'


class LosTotFrmYear1District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_frm_year1_district'


class LosTotFrmYear2District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_frm_year2_district'


class LosTotInfYear1District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_inf_year1_district'


class LosTotInfYear2District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_inf_year2_district'

# Dist form informal


class DmgFrmYear1District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_frm_year1_district'


class LosFrmYear1District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_frm_year1_district'


class LosFrmYear2District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_frm_year2_district'


class DlInfTotLodTrdY1District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_los_year1 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_trd_y1_district'


class DlInfTotLodTrdY2District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_los_year1 = models.FloatField(blank=True, null=True)
    tot_los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_trd_y2_district'


class DlInfTotLosSerY1District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_los_year1 = models.FloatField(blank=True, null=True)
    tot_los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_ser_y1_district'


class DlInfTotLosSerY2District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_los_year1 = models.FloatField(blank=True, null=True)
    tot_los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_ser_y2_district'


class DlInfTotLosFoodY1District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_los_year1 = models.FloatField(blank=True, null=True)
    tot_los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_food_y1_district'


class DlInfTotLosFoodY2District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_los_year1 = models.FloatField(blank=True, null=True)
    tot_los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_food_y2_district'


class DlInfTotLosOthY1District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_los_year1 = models.FloatField(blank=True, null=True)
    tot_los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_oth_y1_district'


class DlInfTotLosOthY2District(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_los_year1 = models.FloatField(blank=True, null=True)
    tot_los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_oth_y2_district'


class DlInfDmgDistrict(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    tot_los_year1 = models.FloatField(blank=True, null=True)
    tot_los_year2 = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_dmg_district'


class DlInfNumBusDistrict(models.Model):
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    tot_num_bus_affected = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_num_bus_district'


# Table 5_2
class DmgFrmYear1Tot(models.Model):
    tot_damages = models.FloatField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_frm_year1_tot'


class LosFrmYear1Tot(models.Model):
    tot_los_year1 = models.FloatField(blank=True, null=True)
    tot_los_year2 = models.FloatField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_frm_year1_tot'


class LosFrmYear2Tot(models.Model):
    tot_los_year1 = models.FloatField(blank=True, null=True)
    tot_los_year2 = models.FloatField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_frm_year2_tot'


class DlNuAffBisDistrict(models.Model):
    count_no = models.BigIntegerField(blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    firm_type = models.ForeignKey(FormalFirmTypes,  db_column='firm_type', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_nu_aff_bis_district'


# Table 5
class DlNuAffBisIndDistrict(models.Model):
    sector = models.CharField(max_length=255, blank=True, null=True)
    count_no_pub = models.BigIntegerField(blank=True, null=True)
    count_no_pvt = models.BigIntegerField(blank=True, null=True)
    firm_type = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_nu_aff_bis_ind_district'


class DlNuAffBisSerDistrict(models.Model):
    sector = models.CharField(max_length=255, blank=True, null=True)
    count_no_pub = models.BigIntegerField(blank=True, null=True)
    count_no_pvt = models.BigIntegerField(blank=True, null=True)
    firm_type = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # sector count_no_pub count_no_pvt firm_type industry district

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_nu_aff_bis_ser_district'


class DmgFrmYear1IndDistrict(models.Model):
    firm_type = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    tot_dmg_pub = models.FloatField(blank=True, null=True)
    tot_dmg_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_frm_year1_ind_district'


class DmgFrmYear1SerDistrict(models.Model):
    firm_type = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    tot_dmg_pub = models.FloatField(blank=True, null=True)
    tot_dmg_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_frm_year1_ser_district'


class LosFrmYear1IndDistrict(models.Model):
    firm_type_name = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    los_year1_pub = models.FloatField(blank=True, null=True)
    los_year1_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_frm_year1_ind_district'


class LosFrmYear1SerDistrict(models.Model):
    firm_type_name = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    los_year1_pub = models.FloatField(blank=True, null=True)
    los_year1_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # firm_type_name,sector,los_year1_pub,los_year1_pvt,district,incident

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_frm_year1_ser_district'


class LosFrmYear2IndDistrict(models.Model):
    firm_type_name = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    los_year2_pub = models.FloatField(blank=True, null=True)
    los_year2_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_frm_year2_ind_district'


class LosFrmYear2SerDistrict(models.Model):
    firm_type_name = models.CharField(max_length=255, blank=True, null=True)
    sector = models.CharField(max_length=255, blank=True, null=True)
    los_year2_pub = models.FloatField(blank=True, null=True)
    los_year2_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # firm_type_name,sector,los_year1_pub,los_year1_pvt,district,incident

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_frm_year2_ser_district'


class DlInfNumBusDistrict(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    tot_num_bus_affected = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # assets, tot_num_bus_affected

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_num_bus_district'


class DlInfDmgDistrict(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    tot_damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # assets, tot_damages

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_dmg_district'


class DlInfTotLosFoodY1District(models.Model):
    tot_los_year1 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # assets, tot_damages

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_food_y1_district'


class DlInfTotLosFoodY2District(models.Model):
    tot_los_year2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # assets, tot_damages

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_food_y2_district'


class DlInfTotLosOthY1District(models.Model):
    tot_los_year1 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # assets, tot_damages

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_oth_y1_district'


class DlInfTotLosOthY2District(models.Model):
    tot_los_year2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # assets, tot_damages

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_oth_y2_district'


class DlInfTotLosSerY1District(models.Model):
    tot_los_year1 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # assets, tot_damages

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_ser_y1_district'


class DlInfTotLosSerY2District(models.Model):
    tot_los_year2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # assets, tot_damages

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_ser_y2_district'


class DlInfTotLosTrdY1District(models.Model):
    tot_los_year1 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # assets, tot_damages

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_trd_y1_district'


class DlInfTotLosTrdY2District(models.Model):
    tot_los_year2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # assets, tot_damages

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dl_inf_tot_los_trd_y2_district'


# ----------
class DmgFrmIndYear1TotDis(models.Model):
    firm_type_name = models.CharField(max_length=255, blank=True, null=True)
    tot_damages_pub = models.FloatField(blank=True, null=True)
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # 'firm_type_name','tot_damages_pub','tot_damages_pvt','','',

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_frm_ind_year1_tot_dis'


class DmgFrmSerYear1TotDis(models.Model):
    firm_type_name = models.CharField(max_length=255, blank=True, null=True)
    tot_damages_pub = models.FloatField(blank=True, null=True)
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # 'firm_type_name','tot_damages_pub','tot_damages_pvt','','',

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_frm_ser_year1_tot_dis'


class LosFrmIndTotDis(models.Model):
    firm_type_name = models.CharField(max_length=255, blank=True, null=True)
    los_year1_pub = models.FloatField(blank=True, null=True)
    los_year1_pvt = models.FloatField(blank=True, null=True)
    los_year2_pub = models.FloatField(blank=True, null=True)
    los_year2_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # 'firm_type_name','tot_damages_pub','tot_damages_pvt','','',

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_frm_ind_tot_dis'


class LosFrmSerTotDis(models.Model):
    firm_type_name = models.CharField(max_length=255, blank=True, null=True)
    los_year1_pub = models.FloatField(blank=True, null=True)
    los_year1_pvt = models.FloatField(blank=True, null=True)
    los_year2_pub = models.FloatField(blank=True, null=True)
    los_year2_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    # 'firm_type_name','los_year1_pub','los_year1_pvt','los_year2_pub','los_year2_pvt',

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_frm_ser_tot_dis'


# Table 6
class DmgTotFrmYear1SumProvince(models.Model):
    tot_damages_pub = models.FloatField(blank=True, null=True)
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_tot_frm_year1_sum_province'


class LosTotFrmSumProvince(models.Model):
    los_year1_pub = models.FloatField(blank=True, null=True)
    los_year1_pvt = models.FloatField(blank=True, null=True)
    los_year2_pub = models.FloatField(blank=True, null=True)
    los_year2_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_frm_sum_province'


class DmgTotInfY1SumProvince(models.Model):
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_tot_inf_y1_sum_province'


class LosTotInfY1SumProvince(models.Model):
    tot_los_year1_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_inf_y1_sum_province'


class LosTotInfY2SumProvince(models.Model):
    tot_los_year2_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_inf_y2_sum_province'


# Table 7
class DmgTotFrmYear1SumNational(models.Model):
    tot_damages_pub = models.FloatField(blank=True, null=True)
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_tot_frm_year1_sum_national'


class DmgTotInfY1SumNational(models.Model):
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"dmg_tot_inf_y1_sum_national'


class LosTotFrmSumNational(models.Model):
    los_year1_pub = models.FloatField(blank=True, null=True)
    los_year1_pvt = models.FloatField(blank=True, null=True)
    los_year2_pub = models.FloatField(blank=True, null=True)
    los_year2_pvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_frm_sum_national'


class LosTotInfY1SumNational(models.Model):
    tot_los_year1_pvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_inf_y1_sum_national'


class LosTotInfY2SumNational(models.Model):
    tot_los_year2_pvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'industry_services\".\"los_tot_inf_y2_sum_national'

