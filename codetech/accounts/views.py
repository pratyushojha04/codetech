# accounts/views.py

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('menu')  # Redirect to home or another page after login
        else:
            redirect('login')
            messages.error(request, 'Invalid username or password')
            
    
    return render(request, 'accounts/login.html', {'form_type': 'login'})

def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']
        
        if password == confirm_password:
            User.objects.create_user(username=username, password=password)
            messages.success(request, 'Account created successfully!')
            return redirect('login')  # Redirect to login after successful signup
        else:
            messages.error(request, 'Passwords do not match')
    
    return render(request, 'accounts/login.html', {'form_type': 'signup'})




@login_required
def menu(request):
    # Example data
    total_courses = ['Course 1', 'Course 2', 'Course 3']
    purchased_courses = ['Course 1']
    
    context = {
        'total_courses': total_courses,
        'purchased_courses': purchased_courses
    }
    return render(request, 'accounts/menu.html', context)
