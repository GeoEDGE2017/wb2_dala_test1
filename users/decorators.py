from django.core.exceptions import PermissionDenied
from django.utils import six
from django.contrib.auth.decorators import user_passes_test
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse
from settings.models import UserRole, Sector


def permission_required(perm, sector):
    print 'admin'
    def has_perm(user):
        print 'you here '
        if user.id is not None:
            print ' there is user '
            if user.is_superuser:
                return True
            else:
                try:
                    user_perm_role = user.user_role
                    user_sector_id = user.sector_id
                    print user_perm_role
                except ObjectDoesNotExist:
                    user_perm = False

                if user_perm_role is not None and user_sector_id is not None:

                    user_sector = Sector.objects.get(pk=user_sector_id)

                    role_name = user_perm_role.role_name
                    user_level_order = user_perm_role.order
                    perm_level = UserRole.objects.filter(code_name=perm).values('order')[:1]
                    print perm_level[0]['order']
                    perm_level_order = perm_level[0]['order']

                    # if user_level_order <= perm_level_order and user_sector.name == sector:
                    if user_level_order <= perm_level_order and user_sector.name.lower() == sector.lower().replace(
                                "_", " "):
                        print 'yes'
                        return True
                    else:
                        print 'no'
                        raise PermissionDenied
                        return False
                else:
                    print 'no object'
                    raise PermissionDenied
        else:
            print 'no user'
            return False

    return user_passes_test(has_perm, login_url='/admin/login/')


def super_user_permission():
    print 'admin'

    def has_perm(user):
        print 'you here '
        if user.id is not None:
            print ' there is user '
            if user.is_superuser:
                return True
            else:
                raise PermissionDenied
        else:
            return False

    return user_passes_test(has_perm, login_url='/admin/login/')