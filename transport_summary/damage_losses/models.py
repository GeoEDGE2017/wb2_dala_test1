from django.db import models
from settings.models import District,Province
from incidents.models import IncidentReport


class dl_gac_pub_province(models.Model):
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_pub_province'


class dl_gac_pvt_province(models.Model):
    tot_damages_pvt = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_gac_pvt_province'


class dl_years_pub_province(models.Model):
    year_1 = models.FloatField(blank=True, null=True)
    year_2 = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_years_pub_province'


class dl_other_los_pvt_district(models.Model):
    year_1_pvt = models.FloatField(blank=True, null=True)
    year_2_pub = models.FloatField(blank=True, null=True)
    district = models.ForeignKey(District, db_column='district', blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'transport_land\".\"dl_other_los_pvt_district'





















































