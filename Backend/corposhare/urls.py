# from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [

    path('login/',views.UserLoginView.as_view()),
    path("profile/",views.UserProfileView.as_view()),
    path("change_password/",views.UserChangePasswordView.as_view()),
    path("send_password_change_email/",views.SendPasswordResetEmailView.as_view()),
    path('reset-password/<uid>/<token>/', views.UserPasswordResetView.as_view()),
     path('companies/',views.CompanyView.as_view()),
    path('company/<str:id>',views.CompanyDetailView.as_view()),
    path('employees/',views.EmployeeView.as_view()),
    path('employee/<str:id>',views.EmployeeDetailView.as_view()),
    # path('userss/',views.UserView.as_view()),
    # path('userss/<str:id>',views.UserDetailView.as_view()),
    path('projects/',views.ProjectView.as_view()),
    path('project/<str:id>',views.ProjectDetailView.as_view()),
    
]