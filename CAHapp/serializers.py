from django.db import models
from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import Room

class RoomSerializer(ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

