from django.db import models
from settings.models import District,Province
from incidents.models import IncidentReport


class DlSessionKeys(models.Model):
    data_type = models.CharField(max_length=120, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    user = models.IntegerField(blank=True, null=True)
    table_name = models.CharField(max_length=255, blank=True, null=True)
    incident = models.IntegerField(blank=True, null=True)
    province = models.ForeignKey(Province, db_column='province', related_name='tl_dl_province', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', related_name='tl_dl_district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_session_keys'


class DlRbdTbridges(models.Model):
    tot_dest_2_lanes = models.FloatField(blank=True, null=True)
    tot_dest_multi_lanes = models.FloatField(blank=True, null=True)
    part_dest_2_lanes = models.FloatField(blank=True, null=True)
    part_dest_multi_lanes = models.FloatField(blank=True, null=True)
    part_dest_gravel = models.FloatField(blank=True, null=True)
    part_dest_earth = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    type_bridges = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_rbd_tbridges'


class DlRbdTculverts(models.Model):
    tot_destroyed = models.FloatField(blank=True, null=True)
    part_destroyed = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    type_culverts = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_rbd_tculverts'


class DlRbdTrwalls(models.Model):
    tot_destroyed = models.FloatField(blank=True, null=True)
    part_destroyed = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    type_retain_walls = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_rbd_trwalls'


class DlRbdTdrains(models.Model):
    tot_destroyed = models.FloatField(blank=True, null=True)
    part_destroyed = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    type_drains = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_rbd_tdrains'


class DlOtherDmgsPvehicles(models.Model):
    num_tot_dest_pvt = models.BigIntegerField(blank=True, null=True)
    num_part_dest_pvt = models.BigIntegerField(blank=True, null=True)
    tot_damages_pvt = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    private_vehicles = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_other_dmgs_pvehicles'


class DlRbdRclassification(models.Model):
    tot_dest_concrete = models.FloatField(blank=True, null=True)
    tot_dest_asphalt = models.FloatField(blank=True, null=True)
    tot_dest_gravel = models.FloatField(blank=True, null=True)
    tot_dest_earth = models.FloatField(blank=True, null=True)
    part_dest_concrete = models.FloatField(blank=True, null=True)
    part_dest_asphalt = models.FloatField(blank=True, null=True)
    part_dest_gravel = models.FloatField(blank=True, null=True)
    part_dest_earth = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    road_classification = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_rbd_rclassification'


class DlRbdLosses(models.Model):
    year_1 = models.FloatField(blank=True, null=True)
    year_2 = models.FloatField(blank=True, null=True)
    part_destroyed = models.FloatField(blank=True, null=True)
    losses = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    loss_type = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dl_rbd_losses'
