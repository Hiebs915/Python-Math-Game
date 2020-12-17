"""django_skeleton URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from game.views import set_splash_screen_preference, submit_score_details
from scores.views import request_score_details


# 'langingPageApp' can also be replaced by '.'
#  indicating that the older is in the same directory.


urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('accounts/', include('accounts.urls')),
    path('game/', include('game.urls')),
    path('scores/', include('scores.urls')),
    path('', include('homepage.urls')),
    path('api/user_preferences/set_preference', set_splash_screen_preference),
    path('api/scoring/submit_score_details', submit_score_details),
    path('api/scoring/request_score_details', request_score_details),
]