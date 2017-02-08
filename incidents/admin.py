from django.contrib import admin
from .models import IncidentReport, EffectedArea
# Register your models here.


class EffectedAreaInline(admin.StackedInline):

    model = EffectedArea
    extra = 1


class IncidentAdmin(admin.ModelAdmin):

    inlines = [EffectedAreaInline]

#admin.site.register(IncidentReport)
admin.site.register(IncidentReport, IncidentAdmin)
