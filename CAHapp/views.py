from django.http.response import HttpResponse
from django.shortcuts import render
from django.apps import *
from rest_framework import viewsets,generics,status
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CreateRoomSerializer, RoomSerializer
from .models import Room



def index(request):
    return HttpResponse("Hello World!")

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    def test(self):
        return HttpResponse("I'm in RoomViewset")



class CreateViewSet(APIView):
    serializer_class = CreateRoomSerializer

    def post(self,request,format=None):
        if not self.request.session.exists(self.request.session.session_key):
            # create a session if the browser doesn't have the session
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            num_rounds = serializer.data.get("num_rounds")
            host = self.request.session.session_key
            duplicateroom = Room.objects.filter(host = self.request.session.session_key)
            if duplicateroom.exists():
                # there can only be one duplicate room 
                dr = duplicateroom[0]
                dr.num_rounds = num_rounds
                dr.save(update_fields=['num_rounds'])
                return Response(RoomSerializer(duplicateroom[0]).data,status=status.HTTP_200_OK)
            else:
                room = Room(num_rounds=num_rounds,host=host)
                room.save()
                return Response(RoomSerializer(room).data,status=status.HTTP_200_OK)
                


        else:
            return Response({'Invalid Request': serializer.error_messages},status=status.HTTP_400_BAD_REQUEST)

    # Why django
    @classmethod
    def get_extra_actions(cls):
        return []

