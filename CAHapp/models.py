from django.db import models
import string,random


def generate_code(length):
    code = "".join(random.choice(string.ascii_letters,k=length))
    return code


class Room(models.Model):      # model for each game room
    code_length = 6
    code = models.CharField(max_length=code_length)
    host = models.CharField(max_length=20,unique=True,default='')
    full = False
    max_capacity = 10



