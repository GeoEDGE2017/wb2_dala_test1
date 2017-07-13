from django.db import models
from settings.models import District, Province, Sector, UserDesignation, UserRole
from django.utils import timezone
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin, Group, User, Permission


'''class DalaUserManager(BaseUserManager):
    def create_user(self, username, password=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        now = timezone.now()
        if not username:
            raise ValueError('Users must have an username')

        user = self.model(
            username=username,
            is_staff=False,
            is_active=True,
            last_login=now,
            date_joined=now
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(self, username, password)
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save(using=self._db)
        return user


class DalaUser(AbstractBaseUser, PermissionsMixin):
    #is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=30)
    first_name = models.CharField(max_length=30, null=True)
    last_name = models.CharField(max_length=30, null=True)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    province = models.ForeignKey(Province, blank=True, null=True)
    district = models.ForeignKey(District, blank=True, null=True)

    objects = DalaUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def get_full_name(self):
        # The user is identified by their email address
        return self.username

    def get_short_name(self):
        # The user is identified by their email address
        return self.username

    def __str__(self):              # __unicode__ on Python 2
        return self.username

    class Meta:
        verbose_name_plural = "Users"


class DalauserGroups(models.Model):
    dalauser = models.ForeignKey(DalaUser, db_column='user', blank=True, null=True)
    group = models.ForeignKey(Group, db_column='group', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users_dalauser_groups'
        unique_together = (('dalauser', 'group'),)


class DalauserUserPermissions(models.Model):
    dalauser = models.ForeignKey(DalaUser)
    permission = models.ForeignKey(Permission)

    class Meta:
        managed = False
        db_table = 'users_dalauser_user_permissions'
        unique_together = (('dalauser', 'permission'),)'''


class MyUserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        now = timezone.now()
        if not username:
            raise ValueError('Users must have an username')

        user = self.model(
            username=username,
            is_staff=False,
            is_active=True,
            last_login=now,
            date_joined=now
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password, **extra_fields):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(self, username, password, **extra_fields)
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save(using=self._db)
        return user


class MyUser(AbstractBaseUser, PermissionsMixin):
    # is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=30)
    first_name = models.CharField(max_length=30, null=True)
    last_name = models.CharField(max_length=30, null=True)
    email = models.CharField(max_length=254, null=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()
    province = models.ForeignKey(Province, blank=True, null=True)
    district = models.ForeignKey(District, blank=True, null=True)
    designation = models.ForeignKey(UserDesignation, db_column='designation', blank=True, null=True)
    sector = models.ForeignKey(Sector, db_column='sector', blank=True, null=True)
    user_role = models.ForeignKey(UserRole, db_column='user_role', blank=True, null=True)

    objects = MyUserManager()

    USERNAME_FIELD = 'username'

    def get_full_name(self):
        # The user is identified by their email address
        return self.username

    def get_short_name(self):
        # The user is identified by their email address
        return self.username

    def __str__(self):              # __unicode__ on Python 2
        return self.username

    class Meta:
        verbose_name_plural = "Users"
        db_table = 'public\".\"users_myuser'


class UserDistrict(models.Model):
    user = models.ForeignKey(MyUser)
    province = models.ForeignKey(Province, blank=True, null=True)
    district = models.ForeignKey(District, blank=True, null=True)
    # district = ChainedForeignKey(District, chained_field="province", chained_model_field="id")

    class Meta:
        managed = False
        db_table = 'user_district'

