from django.db import models


class BefPubSchools(models.Model):
    type_facilities = models.CharField(max_length=255, blank=True, null=True)
    total_number = models.IntegerField(blank=True, null=True)
    avg_male = models.IntegerField(blank=True, null=True)
    avg_female = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bef_pub_schools'


class BefPubOffices(models.Model):
    type_facilities = models.CharField(max_length=255, blank=True, null=True)
    total_number = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bef_pub_offices'


class BefPvt(models.Model):
    type_facilities = models.CharField(max_length=255, blank=True, null=True)
    total_number = models.IntegerField(blank=True, null=True)
    avg_male = models.IntegerField(blank=True, null=True)
    avg_female = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bef_pvt'


class BugAfr(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_afr'


class BugArcEquipment(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arc_equipment'


class BugArcStructures(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arc_structures'


class BugArcSupplies(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arc_supplies'


class BugArpcEquipment(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arpc_equipment'


class BugArpcStructures(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arpc_structures'


class BugArpcSupplies(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_arpc_supplies'


class BugCrp(models.Model):
    particulars = models.CharField(max_length=255, blank=True, null=True)
    ab1_1c = models.FloatField(blank=True, null=True)
    type_2 = models.FloatField(blank=True, null=True)
    type_3 = models.FloatField(blank=True, null=True)
    pirivena = models.FloatField(blank=True, null=True)
    training_institutes = models.FloatField(blank=True, null=True)
    training_colleges = models.FloatField(blank=True, null=True)
    tc_crc_resc = models.FloatField(blank=True, null=True)
    min_pzd_offices = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    bs_date = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bug_crp'
