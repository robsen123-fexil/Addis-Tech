from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Song
from rest_framework.generics import ListAPIView
from .models import Song
from .serializers import SongSerializer
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly

class SongAPIView(ListAPIView):
    serializer_class = SongSerializer
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get_queryset(self):
        return Song.objects.all()  # Define your queryset here
# views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Song
from .serializers import SongSerializer
class SongCreateView(APIView):
    queryset = Song.objects.all()
    
    def post(self, request, *args, **kwargs):
        serializer = SongSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
