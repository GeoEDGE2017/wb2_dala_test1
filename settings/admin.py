from django.contrib import admin
from .models import Province, District, DisasterType, Sector, UserDesignation, UserRole


admin.site.register(Province)
admin.site.register(District)
admin.site.register(DisasterType)
admin.site.register(Sector)
admin.site.register(UserDesignation)
admin.site.register(UserRole)
