from django.core.exceptions import PermissionDenied
from django.shortcuts import render, redirect
from django.http import HttpResponse
from users.decorators import super_user_permission, permission_required


# @super_user_permission()
# def index(request):
#     return render(request, 'dashboard/index.html')
def index(request):
    user = request.user
    if user.id is not None:
        print ' there is user f'
        if user.is_superuser:
            print 'admin'
            return render(request, 'dashboard/index.html')
        else:
            print user.sector.redirect_url
            if user.sector_id is not None:
                if user.sector.redirect_url is not None:
                    redirect_url = user.sector.redirect_url
                    return render(request, 'dashboard/' + redirect_url + '.html')
                else:
                    PermissionDenied

            else:
                raise PermissionDenied
    else:
        return redirect('%s?next=%s' % ('/admin/login/', request.path))
    return render(request, 'dashboard/index.html')


@permission_required("district", 'Health')
def health_main(request):
    return render(request, 'dashboard/health_main.html')


@permission_required("district", "Mining")
def mining_main(request):
    return render(request, 'dashboard/mining_main.html')


@permission_required("district", "Other Government Services")
def othergov_main(request):
    return render(request, 'dashboard/othergov_main.html')


@permission_required("district", "Education")
def education_main(request):
    return render(request, 'dashboard/education_main.html')


@permission_required("district", "Transport Air")
def transport_air_main(request):
    return render(request, 'dashboard/transport_air_main.html')


@permission_required("district", "Transport Land")
def transport_land_main(request):
    return render(request, 'dashboard/transport_land_main.html')


@permission_required("district", "Transport Rail")
def transport_rail_main(request):
    return render(request, 'dashboard/transport_rail_main.html')


@permission_required("district", "Transport Water")
def transport_water_main(request):
    return render(request, 'dashboard/transport_water_main.html')


@permission_required("district", "Transport Summary")
def transport_summary_main(request):
    return render(request, 'dashboard/transport_summary_main.html')


@permission_required("district", "Agri Agrarian")
def agri_agrarian_main(request):
    return render(request, 'dashboard/agri_agrarian_main.html')


@permission_required("district", "Agri Fisheries")
def agri_fisheries_main(request):
    return render(request, 'dashboard/agri_fisheries_main.html')


@permission_required("district", "Agri Irrigation")
def agri_irrigation_main(request):
    return render(request, 'dashboard/agri_irrigation_main.html')


@permission_required("district", "Agri Livestock")
def agri_livestock_main(request):
    return render(request, 'dashboard/agri_livestock_main.html')


@permission_required("district", "Agri Summary")
def agri_summary_main(request):
    return render(request, 'dashboard/agri_summary_main.html')


@permission_required("district", "Water Supply")
def water_supply_main(request):
    return render(request, 'dashboard/water_supply_main.html')


@permission_required("district", "Power Supply")
def power_supply_main(request):
    return render(request, 'dashboard/power_supply_main.html')


@permission_required("district", "Housing")
def housing_main(request):
    return render(request, 'dashboard/housing_main.html')


@permission_required("district", "Tourism")
def tourism_main(request):
    return render(request, 'dashboard/tourism_main.html')


@permission_required("district", "Industry & Services")
def industry_services_main(request):
    return render(request, 'dashboard/industry_services_main.html')


@permission_required("district", " Telecommunications")
def telecom_main(request):
    return render(request, 'dashboard/telecom_main.html')
