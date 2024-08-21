# accounts/urls.py

from django.urls import path
from . import views
from .views import menu 

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('menu/', views.menu, name='menu'),
    path('logout/', views.logout, name='logout'),  # Add logout URL
    path('cart/', views.cart, name='cart'),
    path('profile/', views.profile, name='profile'),
    path('update_profile/', views.update_profile, name='update_profile'),
    path('delete_account/', views.delete_account, name='delete_account'),  # Add delete_account URL  # Add delete_account URL to the accounts app URLs  # Add delete_account URL to the accounts app URLs  # Add delete_account
]
