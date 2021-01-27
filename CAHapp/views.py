from django.http import response
from django.http.response import HttpResponse
from django.shortcuts import render
from django.apps import *
from rest_framework import viewsets,generics,status
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PersonSerializer, RoomSerializer
from .models import Person, Room
from rest_framework.decorators import action
from rest_framework import status, viewsets
from rest_framework.decorators import action
import requests,random


def index(request):
    return HttpResponse("Hello World!")

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    def test(self):
        return HttpResponse("I'm in RoomViewset")

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    cardsurl = "https://raw.githubusercontent.com/BoyuChen118/CAH-fullstack/master/CAHapp/cah-cards-compact.json"

    @action(detail=True,methods=['patch','post'])  # deal x number of card to player: example post payload { "num_cards": 10 }
    def deal_cards(self,request, pk=None):   
        player = self.get_object()
        data = request.data
        num_cards = data['num_cards']
        response = requests.get(url=self.cardsurl)
        if response.status_code == 200:
            whites = response.json()["white"]
            cards = random.sample(whites,num_cards)   # select 7 random white cards for the player
            player.cards = cards
            player.save(update_fields=["cards"])
            return Response({"cards":cards},status=200)
        else:
            return Response({'Invalid Requests'},status.HTTP_400_BAD_REQUEST)

    @action(detail=True,methods=['post'])  # draw a new card: example post payload {}
    def draw_card(self,request, pk=None):   
        player = self.get_object()
        response = requests.get(self.cardsurl)
        if response.status_code == 200:
            whites = response.json()["white"]
            card = random.sample(whites,1)
            try:
                player.cards.append(card[0])
                player.save(update_fields=["cards"])
                return Response({"New card drawn": card},status=200)
            except:
                return Response({'Card not Found'},status.HTTP_404_NOT_FOUND)
        else:
            return Response({'Invalid Requests'},status.HTTP_400_BAD_REQUEST)




    @action(detail=True,methods=['get'])
    def test(self,request, pk=None):
        player = self.get_object()
        room = Room.objects.filter(code="asdf")
        serializer = RoomSerializer(room,many=True,context={'request': request})
        return Response(serializer.data, status=200)




# class CreateViewSet(APIView):
#     serializer_class = CreateRoomSerializer

#     def post(self,request,format=None):
#         if not self.request.session.exists(self.request.session.session_key):
#             # create a session if the browser doesn't have the session
#             self.request.session.create()
#         serializer = self.serializer_class(data=request.data, context={'request': request})

#         if serializer.is_valid():
#             num_rounds = serializer.data.get("num_rounds")
#             host = self.request.session.session_key
#             duplicateroom = Room.objects.filter(host = self.request.session.session_key)
#             if duplicateroom.exists():
#                 # there can only be one duplicate room 
#                 dr = duplicateroom[0]
#                 dr.num_rounds = num_rounds
#                 dr.save(update_fields=['num_rounds'])
#                 return Response(RoomSerializer(duplicateroom[0],context={'request': request}).data,status=status.HTTP_200_OK)
#             else:
#                 room = Room(num_rounds=num_rounds,host=host)
#                 room.save()
#                 return Response(RoomSerializer(room,context={'request': request}).data,status=status.HTTP_200_OK)
                


#         else:
#             return Response({'Invalid Request': serializer.error_messages},status=status.HTTP_400_BAD_REQUEST)

#     # Why django
#     @classmethod
#     def get_extra_actions(cls):
#         return []

