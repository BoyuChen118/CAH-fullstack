from django.db import models
from django.db.models import fields
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import Room,Person

class RoomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class CreateRoomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Room
        fields = ['num_rounds']

class PersonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Person
        fields = ['id','url','room','createdAt']