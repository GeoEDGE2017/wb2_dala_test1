from django.db import models
from incidents.models import IncidentReport
from settings.models import District, Province
from tourism.base_line.models import Firm, InfType, Infrastructure


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', related_name='to_dl_incident', blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='to_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district',  related_name='to_dl_district', blank=True, null=True)
    firm = models.ForeignKey(Firm, db_column='firm', related_name='to_dl_firm', blank=True, null=True)
    inf = models.ForeignKey(Infrastructure, db_column='inf', blank=True, null=True)
    inf_type = models.ForeignKey(InfType, db_column='inf_type', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    tou_business = models.CharField(max_length=255, blank=True, null=True)
    bs_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_session_keys'


class DlBusLosses(models.Model):
    firm_id = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    tou_business = models.CharField(max_length=255, blank=True, null=True)
    los_type = models.CharField(max_length=255, blank=True, null=True)
    avg_val_income_year = models.FloatField(blank=True, null=True)
    val_income_year1 = models.FloatField(blank=True, null=True)
    val_income_year2 = models.FloatField(blank=True, null=True)
    val_los_year1 = models.FloatField(blank=True, null=True)
    val_los_year2 = models.FloatField(blank=True, null=True)
    tol_losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,  db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,  db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_bus_losses'


class DlInfLosses(models.Model):
    inf_id = models.IntegerField(blank=True, null=True)
    inf_type_id = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    los_type = models.CharField(max_length=255, blank=True, null=True)
    avg_val_income_year = models.FloatField(blank=True, null=True)
    val_income_year1 = models.FloatField(blank=True, null=True)
    val_income_year2 = models.FloatField(blank=True, null=True)
    val_los_year1 = models.FloatField(blank=True, null=True)
    val_los_year2 = models.FloatField(blank=True, null=True)
    tol_losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,   db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_inf_losses'


class DlNumEmpBusiness(models.Model):
    firm_id = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    tou_business = models.CharField(max_length=255, blank=True, null=True)
    num_emp_male = models.BigIntegerField(blank=True, null=True)
    num_emp_female = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,   db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_num_emp_business'


class DmgBusAstEquipment(models.Model):
    firm_id = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    tou_business = models.CharField(max_length=255, blank=True, null=True)
    val_dst = models.FloatField(blank=True, null=True)
    val_pdmg = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,   db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dmg_bus_ast_equipment'


class DmgBusAstInventories(models.Model):
    firm_id = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    tou_business = models.CharField(max_length=255, blank=True, null=True)
    val_dst = models.FloatField(blank=True, null=True)
    val_pdmg = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,   db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dmg_bus_ast_inventories'


class DmgBusAstMachinery(models.Model):
    firm_id = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    tou_business = models.CharField(max_length=255, blank=True, null=True)
    val_dst = models.FloatField(blank=True, null=True)
    val_pdmg = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,   db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dmg_bus_ast_machinery'
#         tourism
# 'transport_land\".\"bs_gtl_ast_pvehicles'


class DmgBusAstStructures(models.Model):
    firm_id = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    tou_business = models.CharField(max_length=255, blank=True, null=True)
    val_dst = models.FloatField(blank=True, null=True)
    val_pdmg = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,   db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dmg_bus_ast_structures'


class DmgBusAstVehicle(models.Model):
    firm_id = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    tou_business = models.CharField(max_length=255, blank=True, null=True)
    val_dst = models.FloatField(blank=True, null=True)
    val_pdmg = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,   db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dmg_bus_ast_vehicle'


class DmgInfAssets(models.Model):
    inf_id = models.IntegerField(blank=True, null=True)
    inf_type_id = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    val_dst = models.FloatField(blank=True, null=True)
    val_pdmg = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport,   db_column='incident', blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dmg_inf_assets'


# view
class DlDmgBusDistrict(models.Model):
    tot_damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    assets = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    business = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_bus_district'


# view
class DlLosBusDistrict (models.Model):
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    los_type = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    business = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_bus_district'


# view
class DlLosBusDistrictN (models.Model):
    tot_year1_pvt = models.FloatField(blank=True, null=True)
    tot_year2_pvt = models.FloatField(blank=True, null=True)
    tot_year1_pub = models.FloatField(blank=True, null=True)
    tot_year2_pub = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    business = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_bus_district_n'


# View
class DlDmgInfDistrict (models.Model):
    sum = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    inf_type = models.ForeignKey(InfType, db_column='inf_type', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_inf_district'


# View
class DlDmgInfDistrictN (models.Model):
    infrastructure = models.CharField(max_length=255, blank=True, null=True)
    tot_dst = models.FloatField(blank=True, null=True)
    tot_pdmg = models.FloatField(blank=True, null=True)
    tot_dmg = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    inf_type = models.ForeignKey(InfType, db_column='inf_type', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_inf_district_n'


# view
class DlLosInfDistrict (models.Model):
    tot_year1 = models.FloatField(blank=True, null=True)
    tot_year2 = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    inf_type = models.ForeignKey(InfType, db_column='inf_type', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_inf_district'


# view
class DlLosInfDistrictN (models.Model):
    infrastructure = models.CharField(max_length=255, blank=True, null=True)
    year1 = models.FloatField(blank=True, null=True)
    year2 = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    inf_type = models.ForeignKey(InfType, db_column='inf_type', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_inf_district_n'


# view
class DlDmgbusTotDistrict (models.Model):
    tot_damages = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    district = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_bus_tot_district'


# view
class DlLosbusTotDistrict (models.Model):
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    district = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_bus_tot_district'


# view
class DlDmgInfTotDistrict (models.Model):
    sum = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    district = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_inf_tot_district'


# view
class DlLosInfTotDistrict (models.Model):
    tot_year1 = models.FloatField(blank=True, null=True)
    tot_year2 = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    district = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_inf_tot_district'


# view
class DlDmgBusTotNational (models.Model):
    tot_damages = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_bus_tot_national'


# view has error
class DlLosBusTotNational (models.Model):
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_bus_tot_national'


# view
class DlDmgInfTotNational (models.Model):
    sum = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_inf_tot_national'


# view
class DlLosInfTotNational(models.Model):
    tot_year1 = models.FloatField(blank=True, null=True)
    tot_year2 = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    ownership = models.CharField(max_length=255, blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_inf_tot_national'


# Table 4
class DlDmgBusDistrictN(models.Model):
    sumpub = models.FloatField(blank=True, null=True)
    sumpvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    business = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_bus_district_n'


class DlDmgInfDistrictNN(models.Model):
    tot_dmg_pub = models.FloatField(blank=True, null=True)
    tot_dmg_pvt = models.FloatField(blank=True, null=True)
    tot_dst_pvt = models.FloatField(blank=True, null=True)
    tot_pdmg_pvt = models.FloatField(blank=True, null=True)

    tot_dst_pub = models.FloatField(blank=True, null=True)
    tot_pdmg_pub = models.FloatField(blank=True, null=True)

    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    infrastructure = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_inf_district_n_n'


class DlLosInfDistrictNN(models.Model):
    loss_year1_pub = models.FloatField(blank=True, null=True)
    loss_year1_pvt = models.FloatField(blank=True, null=True)
    loss_year2_pub = models.FloatField(blank=True, null=True)
    loss_year2_pvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    infrastructure = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_inf_district_n_n'


# Table 5
class DlDmgFrmTotProvinceN (models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    tot_damages_pub = models.FloatField(blank=True, null=True)
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    district = models.IntegerField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_frm_tot_province_n'


class DlLosFrmTotProvinceN (models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    los_year1_pub = models.FloatField(blank=True, null=True)
    los_year1_pvt = models.FloatField(blank=True, null=True)
    los_year2_pub = models.FloatField(blank=True, null=True)
    los_year2_pvt = models.FloatField(blank=True, null=True)
    district = models.IntegerField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)


    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_frm_tot_province_n'


class DlDmgInfTotProvinceN (models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    los_pub = models.FloatField(blank=True, null=True)
    los_pvt = models.FloatField(blank=True, null=True)
    district = models.IntegerField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)


    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_inf_tot_province_n'


class DlLosInfTotProvinceN (models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    los_year1_pub = models.FloatField(blank=True, null=True)
    los_year1_pvt = models.FloatField(blank=True, null=True)
    los_year2_pub = models.FloatField(blank=True, null=True)
    los_year2_pvt = models.FloatField(blank=True, null=True)
    district = models.IntegerField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)


    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_inf_tot_province_n'


# Table 6
class DlDmgFrmNational (models.Model):
    tot_damages_pub = models.FloatField(blank=True, null=True)
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_frm_national'


class DlLosFrmTotNational (models.Model):
    los_year1_pub = models.FloatField(blank=True, null=True)
    los_year1_pvt = models.FloatField(blank=True, null=True)
    los_year2_pub = models.FloatField(blank=True, null=True)
    los_year2_pvt = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_frm_tot_national'


class DlDmgInfNational (models.Model):
    tot_damages_pub = models.FloatField(blank=True, null=True)
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_dmg_inf_national'


class DlLosInfNational (models.Model):
    los_year1_pub = models.FloatField(blank=True, null=True)
    los_year1_pvt = models.FloatField(blank=True, null=True)
    los_year2_pub = models.FloatField(blank=True, null=True)
    los_year2_pvt = models.FloatField(blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"dl_los_inf_national'
