# accounts/views.py

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import CourseForm

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

@login_required
def logout(request):
    return redirect('accounts/login')

@login_required
def cart(request):
    # Example data
    cart_items = [('Course 1', 2), ('Course 2', 1)]
    
    context = {
        'cart_items': cart_items
    }
    return render(request, 'accounts/cart.html', context)


@login_required
def profile(request):
    # Example data
    user_details = {
        'username': 'john_doe',
        'email': 'john.doe@example.com',
        'address': '123 Main St'
    }
    
    context = {
        'user_details': user_details
    }
    return render(request, 'accounts/profile.html', context)

@login_required
def update_profile(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        address = request.POST['address']
        
        User.objects.filter(username=request.user.username).update(username=username, email=email)
        
        # Update user details in the database
        messages.success(request, 'Profile updated successfully!')
    
    return redirect('profile')

@login_required
def delete_account(request):
    if request.method == 'POST':
        User.objects.filter(username=request.user.username).delete()
        
        # Delete user from the database
        messages.success(request, 'Account deleted successfully!')
        return redirect('accounts/login')  # Redirect to login after successful deletion
    
    return render(request, 'accounts/delete_account.html')


# accounts/views.py


from .models import Course
def menu(request):
    total_courses = Course.objects.all()
    purchased_courses = Course.objects.filter(users=request.user)

    context = {
        'total_courses': total_courses,
        'purchased_courses': purchased_courses,
    }
    return render(request, 'accounts/menu.html', context)



# accounts/views.py


def add_course(request):
    if request.method == 'POST':
        form = CourseForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('menu')  # Redirect to the menu or another page after saving
    else:
        form = CourseForm()

    return render(request, 'accounts/add_course.html', {'form': form})


