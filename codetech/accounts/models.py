# accounts/models.py

from django.contrib.auth.models import User
from django.conf import settings
from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='courses')

    def __str__(self):
        return self.title


# accounts/models.py
# accounts/models.py

# accounts/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import Group, Permission

class User(AbstractUser):
    is_teacher = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)

    def __str__(self):
        return self.username

    # Define related_name to avoid conflicts
    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_permissions_set',
        blank=True,
    )
