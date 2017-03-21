from django.db import models
from settings.models import District
from incidents.models import IncidentReport

class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District,  db_column='district', related_name='to_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"bd_session_keys'

class BsCultSites(models.Model):
    site = models.CharField(max_length=255, blank=True, null=True)
    num_bis_private = models.BigIntegerField(blank=True, null=True)
    num_bis_public = models.BigIntegerField(blank=True, null=True)
    num_emp_male = models.BigIntegerField(blank=True, null=True)
    num_empfemale = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"bs_cult_sites'


class BsNatFormation(models.Model):
    site = models.CharField(max_length=255, blank=True, null=True)
    num_bis_private = models.BigIntegerField(blank=True, null=True)
    num_bis_public = models.BigIntegerField(blank=True, null=True)
    num_emp_male = models.BigIntegerField(blank=True, null=True)
    num_empfemale = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"bs_nat_formation'


class BsTouBusiness(models.Model):
    business = models.CharField(max_length=255, blank=True, null=True)
    num_bis_private = models.BigIntegerField(blank=True, null=True)
    num_bis_public = models.BigIntegerField(blank=True, null=True)
    num_emp_male = models.BigIntegerField(blank=True, null=True)
    num_empfemale = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"bs_tou_business'


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'tourism\".\"django_migrations'


class DlBusLosses(models.Model):
    firm_id = models.IntegerField(blank=True, null=True)
    ownership_id = models.IntegerField(blank=True, null=True)
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
    inf_type = models.IntegerField(blank=True, null=True)
    ownership_id = models.IntegerField(blank=True, null=True)
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
    ownership_id = models.IntegerField(blank=True, null=True)
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
    ownership_id = models.IntegerField(blank=True, null=True)
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
    ownership_id = models.IntegerField(blank=True, null=True)
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
    ownership_id = models.IntegerField(blank=True, null=True)
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
    ownership_id = models.IntegerField(blank=True, null=True)
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
    ownership_id = models.IntegerField(blank=True, null=True)
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
    inf_type = models.IntegerField(blank=True, null=True)
    ownership_id = models.IntegerField(blank=True, null=True)
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


class Firm(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=50, blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"firm'


class InfType(models.Model):
    infrastructure = models.CharField(max_length=255, blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"inf_type'


class Infrastructure(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    ownership = models.CharField(max_length=50, blank=True, null=True)
    district = models.ForeignKey(District,   db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"infrastructure'


class Ownership(models.Model):
    ownership = models.CharField(max_length=255, blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tourism\".\"ownership'
