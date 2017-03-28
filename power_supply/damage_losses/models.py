from django.db import models

# class PvtNumEmp(models.Model):
#     num_male = models.BigIntegerField(blank=True, null=True)
#     num_female = models.BigIntegerField(blank=True, null=True)
#     tot_emp = models.FloatField(blank=True, null=True)
#     created_user = models.IntegerField(blank=True, null=True)
#     district = models.ForeignKey(District,  db_column='district', blank=True, null=True)
#     lmu = models.IntegerField(blank=True, null=True)
#     lmd = models.DateTimeField(blank=True, null=True)
#     incident = models.ForeignKey('IncidentReport', models.DO_NOTHING, db_column='incident', blank=True, null=True)
#     created_date = models.DateTimeField(blank=True, null=True)
#     pw_producer = models.ForeignKey(PvtPwProducers, models.DO_NOTHING, db_column='pw_producer', blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'pvt_num_emp'
#
