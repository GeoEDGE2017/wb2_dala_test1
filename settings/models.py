from django.db import models


class Province(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'province'

    def __str__(self):
        return self.name


class District(models.Model):
    province = models.ForeignKey('Province')
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'district'

    def __str__(self):
        return self.name


class DisasterType(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'disaster_type'

    def __str__(self):
        return self.name


class Sector(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    created_date = models.TimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sector'

    def __str__(self):
        return self.name


class UserDesignation(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user_designation'

    def __str__(self):
        return self.name


class UserRole(models.Model):
    role_name = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    order = models.IntegerField(blank=True, null=True)
    code_name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user_role'

    def __str__(self):
        return self.role_name

