from django.urls import path
from . import views
from .views import CreateViewSet, RoomViewSet

urlpatterns = [
    path('', views.index, name='test'),
    path('rooms/',RoomViewSet.as_view({"get":'list',"post":'list','delete':'retrieve',})),
    path('create/',CreateViewSet.as_view()),
]