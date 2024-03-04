from django.shortcuts import render
from django.urls import path, include
from django.contrib.auth.models import User

from user_api.views import SongAPIView

urlpatterns = [
    
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', SongAPIView , name= 'nameview')
]
# urls.py

from django.urls import path
from .views import SongCreateView

urlpatterns = [
    path('create/', SongCreateView.as_view(), name='create-Song'),
]
