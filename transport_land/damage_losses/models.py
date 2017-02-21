from django.db import models
from incidents.models import IncidentReport
from settings.models import District, Province


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
        db_table = 'transport_land\".\"dl_session_keys'


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
        db_table = 'transport_land\".\"dl_rbd_tbridges'


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
        db_table = 'transport_land\".\"dl_rbd_tculverts'


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
        db_table = 'transport_land\".\"dl_rbd_trwalls'


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
        db_table = 'transport_land\".\"dl_rbd_tdrains'


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
        db_table = 'transport_land\".\"dl_other_dmgs_pvehicles'


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
        db_table = 'transport_land\".\"dl_rbd_rclassification'


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
        db_table = 'transport_land\".\"dl_rbd_losses'


class DlOtherDmgsTrcompanies(models.Model):
    num_tot_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_tot_dest_pvt = models.BigIntegerField(blank=True, null=True)
    num_part_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_part_dest_pvt = models.BigIntegerField(blank=True, null=True)
    tot_damages_pub = models.BigIntegerField(blank=True, null=True)
    tot_damages_pvt = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    truck_companies = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_dmgs_trcompanies'


class DlOtherLosPub(models.Model):
    fi_year_1 = models.FloatField(blank=True, null=True)
    fi_year_2 = models.FloatField(blank=True, null=True)
    cl_debris_year_1 = models.FloatField(blank=True, null=True)
    cl_debris_year_2 = models.FloatField(blank=True, null=True)
    hoc_year_1 = models.FloatField(blank=True, null=True)
    hoc_year_2 = models.FloatField(blank=True, null=True)
    oue_year_1 = models.FloatField(blank=True, null=True)
    oue_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    tr_company = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_los_pub'


class DlOtherLosPvt(models.Model):
    fi_year_1 = models.FloatField(blank=True, null=True)
    fi_year_2 = models.FloatField(blank=True, null=True)
    cl_debris_year_1 = models.FloatField(blank=True, null=True)
    cl_debris_year_2 = models.FloatField(blank=True, null=True)
    hoc_year_1 = models.FloatField(blank=True, null=True)
    hoc_year_2 = models.FloatField(blank=True, null=True)
    oue_year_1 = models.FloatField(blank=True, null=True)
    oue_year_2 = models.FloatField(blank=True, null=True)
    tot_los = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    tr_company = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_los_pvt'


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
        db_table = 'transport_land\".\"dl_rbd_losses'


class DlOtherDmgsTcompanies(models.Model):
    num_tot_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_tot_dest_pvt = models.BigIntegerField(blank=True, null=True)
    num_part_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_part_dest_pvt = models.BigIntegerField(blank=True, null=True)
    tot_damages_pub = models.BigIntegerField(blank=True, null=True)
    tot_damages_pvt = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    taxi_companies = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_dmgs_tcompanies'


class DlOtherDmgsTucompanies(models.Model):
    num_tot_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_tot_dest_pvt = models.BigIntegerField(blank=True, null=True)
    num_part_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_part_dest_pvt = models.BigIntegerField(blank=True, null=True)
    tot_damages_pub = models.BigIntegerField(blank=True, null=True)
    tot_damages_pvt = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    tuk_companies = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_dmgs_tucompanies'


class DlOtherDmgsBcompanies(models.Model):
    num_tot_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_tot_dest_pvt = models.BigIntegerField(blank=True, null=True)
    num_part_dest_pub = models.BigIntegerField(blank=True, null=True)
    num_part_dest_pvt = models.BigIntegerField(blank=True, null=True)
    tot_damages_pub = models.BigIntegerField(blank=True, null=True)
    tot_damages_pvt = models.BigIntegerField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    bus_companies = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_dmgs_bcompanies'


class DlGacDmgStructures(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_tot_destroyed = models.BigIntegerField(blank=True, null=True)
    num_square_meters = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_dmg_structures'


class DlGacLosType(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    los_year_1 = models.FloatField(blank=True, null=True)
    los_year_2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_los_type'


class DlGacPdmgEquipment(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_tot_destroyed = models.BigIntegerField(blank=True, null=True)
    num_part_damaged = models.BigIntegerField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_pdmg_equipment'


class DlGacPdmgMachinery(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_tot_destroyed = models.BigIntegerField(blank=True, null=True)
    num_part_damaged = models.BigIntegerField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_pdmg_machinery'


class DlGacPdmgStructures(models.Model):
    assets = models.CharField(max_length=255, blank=True, null=True)
    num_part_damaged = models.BigIntegerField(blank=True, null=True)
    damaged_roof = models.FloatField(blank=True, null=True)
    damaged_walls = models.FloatField(blank=True, null=True)
    damaged_floors = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_pdmg_structures'



class DlGacPubProvince(models.Model):
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_pub_province'


class DlGacPvtProvince(models.Model):
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_pvt_province'


class DlOtherLosPubDistrict(models.Model):
    year_1_pub = models.FloatField(blank=True, null=True)
    year_2_pub = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_los_pub_district'


class DlOtherLosPvtDistrict(models.Model):
    year_1_pvt = models.FloatField(blank=True, null=True)
    year_2_pub = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_los_pvt_district'


# National
class DlGacPubNational(models.Model):
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_pub_national'


class DlGacPvtNational(models.Model):
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_pvt_national'


class DlOtherLosPvtNational(models.Model):
    year_1_pvt = models.FloatField(blank=True, null=True)
    year_2_pub = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_los_national'


# Views Models
class DlRbdRclassificationDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_rbd_rclassification_district'


class DlRbdTbridgesDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_rbd_tbridges_district'


class DlRbdTculvertsDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_rbd_tculverts_district'


class DlRbdTdrainsDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_rbd_tdrains_district'


class DlRbdTrwallsDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_rbd_trwalls_district'


class DlOtherDmgsPvehiclesDistrict(models.Model):
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_dmgs_pvehicles_district'


class DlOtherDmgsBcompaniesDistrict(models.Model):
    tot_damages_pub = models.FloatField(blank=True, null=True)
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_dmgs_bcompanies_district'


class DlOtherDmgsTcompaniesDistrict(models.Model):
    tot_damages_pub = models.FloatField(blank=True, null=True)
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_dmgs_tcompanies_district'


class DlOtherDmgsTrcompaniesDistrict(models.Model):
    tot_damages_pub = models.FloatField(blank=True, null=True)
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_dmgs_trcompanies_district'


class DlOtherDmgsTucompaniesDistrict(models.Model):
    tot_damages_pub = models.FloatField(blank=True, null=True)
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_dmgs_tucompanies_district'


class DlGacPubDistrict(models.Model):
    damages = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_pub_district'





