from enum import auto
from django.db import models
import string,random,requests

def check_unique(checkcode):    # check if the generated code is unique
    response = requests.get('http://127.0.0.1:8000/CAH/rooms/')
    if response.status_code == 200:
        rooms = response.json()["results"]
        for room in rooms:
            if room["code"] == checkcode:
                return False
    return True

def generate_code():
    code = "".join(random.sample(population=string.ascii_letters,k=6))
    while not check_unique(code):
        code = "".join(random.sample(population=string.ascii_letters,k=6))
    return code


class Room(models.Model):      # model for each game room
    code_length = 6
    code = models.CharField(max_length=code_length,default=generate_code,unique=True)
    host = models.CharField(max_length=20,unique=True,default='')
    createdAt = models.DateTimeField(auto_now=True)
    full = False
    max_capacity = 6
    num_rounds = models.IntegerField(default=10)
    


class Person(models.Model):     # model for player, stores reference to room via code
    room = models.ForeignKey(Room,on_delete = models.CASCADE, to_field="code")
    createdAt = models.DateTimeField(auto_now=True)




