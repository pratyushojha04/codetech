# accounts/urls.py

from django.urls import path
from . import views
from .views import menu 

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('menu/', views.menu, name='menu'),
]
