from __future__ import unicode_literals
from django.db import models
from incidents.models import IncidentReport

# Create your models here.


class IncidentTotal(models.Model):
    tot_dmgloss = models.FloatField(blank=True, null=True)
    incident = models.ForeignKey(IncidentReport, db_column='incident', blank=True, null=True)
    reported_date_time = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'incident_total'
