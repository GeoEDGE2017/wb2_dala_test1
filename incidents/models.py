from django.db import models
from settings.models import DisasterType, District, Province
# Create your models here.


class IncidentReport(models.Model):
    disaster_type = models.ForeignKey(DisasterType)
    reported_date_time = models.DateTimeField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'incident_report'

    def __str__(self):
        return self.description


# class IncidentReport(models.Model):
#     disaster_type = models.ForeignKey(DisasterType)
#     description = models.TextField(blank=True, null=True)
#     date = models.DateField(blank=True, null=True)
#     time = models.TimeField(blank=True, null=True)
#     incident_name = models.TextField(blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'incident_report'
#
#     def __str__(self):
#         return self.incident_name


class EffectedArea(models.Model):
    incident = models.ForeignKey(IncidentReport)
    district = models.ForeignKey(District, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'effected_area'