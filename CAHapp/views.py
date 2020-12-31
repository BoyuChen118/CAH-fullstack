from django.http.response import HttpResponse
from django.shortcuts import render
from django.apps import *
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import RoomSerializer
from .models import Room



def index(request):
    return HttpResponse("Hello World!")

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

