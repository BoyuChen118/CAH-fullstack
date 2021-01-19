from django.urls import path
from . import views
from .views import  RoomViewSet

urlpatterns = [
    path('', views.index, name='test'),
    path('rooms/',RoomViewSet.as_view({"get":'list',"post":'list',})),
    # path('create/',CreateViewSet.as_view()),
]