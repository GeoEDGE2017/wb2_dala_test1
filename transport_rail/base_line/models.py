from django.db import models
from settings.models import District


class BdSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    key = models.BigIntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    full_bs_date = models.DateField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='tr_bs_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_rail\".\"bd_session_keys'


class Company(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_rail\".\"company'


class BsBuildingAst(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost_roof = models.FloatField(blank=True, null=True)
    avg_repair_cost_wall = models.FloatField(blank=True, null=True)
    avg_repair_cost_floor = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=12, blank=True, null=True)
    company = models.ForeignKey(Company, db_column='company', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_rail\".\"bs_building_ast'


class BsEquipMachineryAst(models.Model):
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=12, blank=True, null=True)
    asset = models.CharField(max_length=255, blank=True, null=True)
    company = models.ForeignKey(Company, db_column='company', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_rail\".\"bs_equip_machinery_ast'


class BsIncAstRailCompany(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    company_name = models.CharField(max_length=500, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=12, blank=True, null=True)
    company = models.ForeignKey(Company, db_column='company', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_rail\".\"bs_inc_ast_rail_company'


class BsIncAstRailIncome(models.Model):
    annual_income = models.FloatField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=12, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    company = models.ForeignKey(Company, db_column='company', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_rail\".\"bs_inc_ast_rail_income'


class BsMatSuppliesAst(models.Model):
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    asset = models.CharField(max_length=255, blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=12, blank=True, null=True)
    company = models.ForeignKey(Company, db_column='company', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_rail\".\"bs_mat_supplies_ast'


class BsMovingAst(models.Model):
    lmd = models.TimeField(blank=True, null=True)
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=12, blank=True, null=True)
    company = models.ForeignKey(Company, db_column='company', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_rail\".\"bs_moving_ast'


class BsStructuresAst(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_replace_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=12, blank=True, null=True)
    company = models.ForeignKey(Company, db_column='company', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_rail\".\"bs_structures_ast'


class BsTotEmpRailCompny(models.Model):
    total_emp = models.FloatField(blank=True, null=True)
    lmd = models.TimeField(blank=True, null=True)
    particulars = models.CharField(max_length=255, blank=True, null=True)
    no_of_male = models.FloatField(blank=True, null=True)
    no_of_female = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)
    bd_date = models.CharField(max_length=12, blank=True, null=True)
    company = models.ForeignKey(Company, db_column='company', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_rail\".\"bs_tot_emp_rail_compny'
